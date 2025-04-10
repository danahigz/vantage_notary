// Update HTML files to include the responsive-enhancements.css file
const fs = require('fs');
const path = require('path');

// Directory containing HTML files
const publicDir = '/home/ubuntu/vantage_notary_website/public';

// Get all HTML files
const htmlFiles = fs.readdirSync(publicDir).filter(file => file.endsWith('.html'));

// Add the responsive-enhancements.css link to each HTML file
htmlFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file already has the responsive-enhancements.css link
  if (!content.includes('responsive-enhancements.css')) {
    // Find the existing styles.css link and add the new CSS link after it
    content = content.replace(
      '<link rel="stylesheet" href="css/styles.css">',
      '<link rel="stylesheet" href="css/styles.css">\n    <link rel="stylesheet" href="css/responsive-enhancements.css">'
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file} with responsive-enhancements.css link`);
  } else {
    console.log(`${file} already has responsive-enhancements.css link`);
  }
});

// Also check HTML files in subdirectories
const servicePages = [
  'notary-public.html',
  'loan-signing.html',
  'remote-notary.html',
  'digital-fingerprinting.html',
  'mobile-services.html'
];

servicePages.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file already has the responsive-enhancements.css link
    if (!content.includes('responsive-enhancements.css')) {
      // Find the existing styles.css link and add the new CSS link after it
      content = content.replace(
        '<link rel="stylesheet" href="css/styles.css">',
        '<link rel="stylesheet" href="css/styles.css">\n    <link rel="stylesheet" href="css/responsive-enhancements.css">'
      );
      
      // Write the updated content back to the file
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file} with responsive-enhancements.css link`);
    } else {
      console.log(`${file} already has responsive-enhancements.css link`);
    }
  }
});

console.log('All HTML files have been updated with responsive-enhancements.css link');
