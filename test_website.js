// Test script for Vantage Notary website functionality
const fs = require('fs');
const path = require('path');

// Directory containing HTML files
const publicDir = '/home/ubuntu/vantage_notary_website/public';

// Function to check if all HTML files exist and have proper structure
function checkHTMLFiles() {
  console.log('Checking HTML files...');
  
  // Expected HTML files
  const expectedFiles = [
    'index.html',
    'services.html',
    'about.html',
    'faq.html',
    'contact.html',
    'notary-public.html',
    'loan-signing.html',
    'remote-notary.html',
    'digital-fingerprinting.html',
    'mobile-services.html'
  ];
  
  // Check if all expected files exist
  const missingFiles = expectedFiles.filter(file => !fs.existsSync(path.join(publicDir, file)));
  
  if (missingFiles.length > 0) {
    console.error('Missing HTML files:', missingFiles.join(', '));
    return false;
  }
  
  // Check if all files have required elements
  let allValid = true;
  
  expectedFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for essential elements
    const hasHeader = content.includes('<header');
    const hasFooter = content.includes('<footer');
    const hasStylesheets = content.includes('styles.css') && content.includes('responsive-enhancements.css');
    const hasJavaScript = content.includes('main.js');
    
    if (!hasHeader || !hasFooter || !hasStylesheets || !hasJavaScript) {
      console.error(`File ${file} is missing essential elements:`);
      if (!hasHeader) console.error('- Missing header');
      if (!hasFooter) console.error('- Missing footer');
      if (!hasStylesheets) console.error('- Missing stylesheets');
      if (!hasJavaScript) console.error('- Missing JavaScript');
      allValid = false;
    }
  });
  
  if (allValid) {
    console.log('All HTML files exist and have proper structure.');
  }
  
  return allValid;
}

// Function to check if CSS files exist and have proper content
function checkCSSFiles() {
  console.log('Checking CSS files...');
  
  // Expected CSS files
  const expectedFiles = [
    'styles.css',
    'responsive-enhancements.css'
  ];
  
  // Check if all expected files exist
  const missingFiles = expectedFiles.filter(file => !fs.existsSync(path.join(publicDir, 'css', file)));
  
  if (missingFiles.length > 0) {
    console.error('Missing CSS files:', missingFiles.join(', '));
    return false;
  }
  
  // Check if CSS files have required media queries
  let allValid = true;
  
  // Check styles.css
  const stylesContent = fs.readFileSync(path.join(publicDir, 'css', 'styles.css'), 'utf8');
  const hasMediaQueries = stylesContent.includes('@media');
  
  if (!hasMediaQueries) {
    console.error('styles.css is missing media queries for responsive design');
    allValid = false;
  }
  
  // Check responsive-enhancements.css
  const enhancementsContent = fs.readFileSync(path.join(publicDir, 'css', 'responsive-enhancements.css'), 'utf8');
  const hasEnhancedMediaQueries = enhancementsContent.includes('@media');
  
  if (!hasEnhancedMediaQueries) {
    console.error('responsive-enhancements.css is missing media queries');
    allValid = false;
  }
  
  if (allValid) {
    console.log('All CSS files exist and have proper content.');
  }
  
  return allValid;
}

// Function to check if JavaScript files exist
function checkJSFiles() {
  console.log('Checking JavaScript files...');
  
  // Expected JS files
  const expectedFiles = [
    'main.js'
  ];
  
  // Check if all expected files exist
  const missingFiles = expectedFiles.filter(file => !fs.existsSync(path.join(publicDir, 'js', file)));
  
  if (missingFiles.length > 0) {
    console.error('Missing JavaScript files:', missingFiles.join(', '));
    return false;
  }
  
  console.log('All JavaScript files exist.');
  return true;
}

// Function to check if image files exist
function checkImageFiles() {
  console.log('Checking image files...');
  
  // Expected image files
  const expectedFiles = [
    'vantage_notary_logo.png'
  ];
  
  // Check if all expected files exist
  const missingFiles = expectedFiles.filter(file => !fs.existsSync(path.join(publicDir, 'images', file)));
  
  if (missingFiles.length > 0) {
    console.error('Missing image files:', missingFiles.join(', '));
    return false;
  }
  
  console.log('All image files exist.');
  return true;
}

// Run all tests
function runAllTests() {
  console.log('Running tests for Vantage Notary website...');
  console.log('-------------------------------------------');
  
  const htmlValid = checkHTMLFiles();
  const cssValid = checkCSSFiles();
  const jsValid = checkJSFiles();
  const imagesValid = checkImageFiles();
  
  console.log('-------------------------------------------');
  
  if (htmlValid && cssValid && jsValid && imagesValid) {
    console.log('All tests passed! The website is ready for deployment.');
    return true;
  } else {
    console.error('Some tests failed. Please fix the issues before deployment.');
    return false;
  }
}

// Execute tests
runAllTests();
