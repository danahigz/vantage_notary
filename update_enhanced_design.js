// Update HTML files to include the enhanced design CSS and JS files
const fs = require('fs');
const path = require('path');

// Directory containing HTML files
const publicDir = '/home/ubuntu/vantage_notary_website/public';

// Get all HTML files
const htmlFiles = fs.readdirSync(publicDir).filter(file => file.endsWith('.html'));

// Add the enhanced design files to each HTML file
htmlFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file already has the enhanced-design.css link
  if (!content.includes('enhanced-design.css')) {
    // Find the closing head tag and add the new CSS link before it
    content = content.replace(
      '</head>',
      '    <link rel="stylesheet" href="css/enhanced-design.css">\n</head>'
    );
  }
  
  // Check if the file already has the enhanced-main.js script
  if (!content.includes('enhanced-main.js')) {
    // Find the existing main.js script and replace it with enhanced-main.js
    content = content.replace(
      '<script src="js/main.js"></script>',
      '<script src="js/enhanced-main.js"></script>'
    );
  }
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file} with enhanced design files`);
});

console.log('All HTML files have been updated with enhanced design files');
