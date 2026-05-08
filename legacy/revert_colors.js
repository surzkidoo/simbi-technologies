const fs = require('fs');
const path = require('path');
const dir = __dirname;

// 1. Update styles.css
let css = fs.readFileSync(path.join(dir, 'css', 'styles.css'), 'utf-8');

// Re-write variables for Luxury Pink & White theme
css = css.replace(/:root\s*\{[\s\S]*?\}/, `:root {
    --primary-color: #e4007f; /* Original Pink */
    --primary-light: #ff4bb2;
    --primary-dark: #b00062;
    --secondary-color: #7c3aed; /* Royal Purple accent */
    --secondary-light: #a78bfa;
    --secondary-dark: #5b21b6;
    --dark-color: #0f172a; /* Navy for text */
    --light-color: #ffffff;
    --section-bg: #f8fafc;
    --gray-color: #64748b;
    --success-color: #10b981;
    --danger-color: #ef4444;
    --text-color: #1e293b;
    --box-shadow: 0 10px 30px rgba(228, 0, 127, 0.08);
    --box-shadow-hover: 0 20px 40px rgba(228, 0, 127, 0.15);
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --border-radius: 16px;
    --border-radius-lg: 24px;
    --border-radius-xl: 32px;
}`);

// Re-write body
css = css.replace(/body\s*\{[\s\S]*?\}/, `body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-color);
    overflow-x: hidden;
}`);

// Remove the dark mode overrides I added
const darkOverridesIndex = css.indexOf('/* Dark Mode Enhancements */');
if (darkOverridesIndex !== -1) {
    css = css.substr(0, darkOverridesIndex);
}

// Add Light Mode Premium enhancements
css += `
/* Premium Light Theme Enhancements */
.service-card, .team-member, .stat, .testimonial-slide .testimonial-content {
    background-color: white !important;
    border: 1px solid rgba(228, 0, 127, 0.05) !important;
    box-shadow: var(--box-shadow) !important;
}

.service-card:hover, .team-member:hover, .stat:hover {
    box-shadow: var(--box-shadow-hover) !important;
    border-color: rgba(228, 0, 127, 0.2) !important;
}

h1, h2, h3, h4, h5, h6 {
    color: var(--dark-color) !important;
}

p, .section-header p {
    color: var(--gray-color) !important;
}

.about, .portfolio, .team, .testimonials {
    background-color: var(--section-bg) !important;
}

.services, .contact {
    background-color: white !important;
}

header.scrolled {
    background-color: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(228, 0, 127, 0.1);
}

header.scrolled .nav-links a {
    color: var(--dark-color) !important;
}

header.scrolled .nav-links a:hover, 
header.scrolled .nav-links a.active {
    color: var(--primary-color) !important;
}

.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)) !important;
    color: white !important;
}

.hero h1, .hero p {
    color: white !important;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)) !important;
    color: white !important;
    border: none;
}
`;

fs.writeFileSync(path.join(dir, 'css', 'styles.css'), css);

// 2. Update the HTML files to fix inline styles that were hardcoded for dark mode
const htmlFiles = ['services.html', 'about.html', 'portfolio.html', 'contact.html'];
htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');
    
    // Replace dark mode inline background colors
    content = content.replace(/background-color:\s*var\(--dark-color\);/g, 'background-color: var(--light-color);');
    content = content.replace(/color:\s*var\(--text-color\);/g, 'color: var(--text-color);');
    content = content.replace(/background:\s*var\(--light-color\);/g, 'background: white;');
    content = content.replace(/color:\s*var\(--gray-color\);/g, 'color: var(--gray-color);');
    content = content.replace(/background:\s*rgba\(255,255,255,0.05\);/g, 'background: #f8fafc;');
    content = content.replace(/border:\s*1px\s*solid\s*rgba\(255,255,255,0.1\);/g, 'border: 1px solid #e2e8f0;');
    content = content.replace(/color:\s*white\s*!important/g, 'color: var(--text-color) !important');
    
    // Ensure headings in page-content are dark
    content = content.replace(/<h[1-3]\s+style="([^"]*)"/g, (match, p1) => {
        if (p1.includes('color: white')) {
            return match.replace('color: white', 'color: var(--dark-color)');
        }
        return match;
    });

    fs.writeFileSync(path.join(dir, file), content);
});

console.log('Successfully reverted to Pink branding with light theme improvements!');
