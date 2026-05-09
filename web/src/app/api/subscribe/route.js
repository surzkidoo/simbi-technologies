import { NextResponse } from 'next/server';

export async function POST(request) {
    const { email } = await request.json();

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    
    if (!API_KEY || !LIST_ID) {
        return NextResponse.json({ error: 'Mailchimp configuration missing' }, { status: 500 });
    }

    const DATACENTER = API_KEY.split('-')[1];

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const data = {
        email_address: email,
        status: 'subscribed', // 'subscribed' or 'pending'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(`any:${API_KEY}`).toString('base64')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.ok) {
            return NextResponse.json({ message: 'Success' });
        } else {
            // Log error for debugging if needed (check your terminal)
            console.error('Mailchimp Error:', responseData);

            if (responseData.title === 'Member Exists' || responseData.status === 400 && responseData.detail.includes('already a list member')) {
                return NextResponse.json({ message: 'Already subscribed' });
            }
            return NextResponse.json({ 
                error: responseData.detail || 'Subscription failed. Please check your email or try again later.' 
            }, { status: 400 });
        }
    } catch (error) {
        console.error('API Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
