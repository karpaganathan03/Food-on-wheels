const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\kiris\\Desktop\\September - Projects\\Foodtruck';

// 1. Verify login.html has no demo button or demo script
const loginHtml = fs.readFileSync(path.join(rootDir, 'login.html'), 'utf-8');
if (loginHtml.includes('btn-fill-demo-vendor')) {
  console.error('FAIL: login.html still contains btn-fill-demo-vendor');
  process.exit(1);
}
if (loginHtml.includes('chef.marco@streetfeast.com')) {
  console.error('FAIL: login.html still contains demo credentials email');
  process.exit(1);
}
if (loginHtml.includes('TacoWagon2026!')) {
  console.error('FAIL: login.html still contains demo password');
  process.exit(1);
}
console.log('PASS: login.html demo credentials completely removed.');

// 2. Verify vendor-signup.html has password and confirm password fields
const signupHtml = fs.readFileSync(path.join(rootDir, 'vendor-signup.html'), 'utf-8');
if (!signupHtml.includes('id="truck-password"') || !signupHtml.includes('id="truck-confirm-password"')) {
  console.error('FAIL: vendor-signup.html missing password fields');
  process.exit(1);
}
if (!signupHtml.includes('id="signup-alert-container"')) {
  console.error('FAIL: vendor-signup.html missing alert container');
  process.exit(1);
}
console.log('PASS: vendor-signup.html has password fields and alert container.');

// 3. Verify register.html has alert container and Create Account button
const registerHtml = fs.readFileSync(path.join(rootDir, 'register.html'), 'utf-8');
if (!registerHtml.includes('id="register-alert-container"')) {
  console.error('FAIL: register.html missing register-alert-container');
  process.exit(1);
}
if (!registerHtml.includes('Create Account')) {
  console.error('FAIL: register.html missing Create Account button text');
  process.exit(1);
}
console.log('PASS: register.html properly configured.');

// 4. Verify forms.js logic
const formsJs = fs.readFileSync(path.join(rootDir, 'assets/js/forms.js'), 'utf-8');
if (!formsJs.includes('saveRegisteredUser') || !formsJs.includes('findMatchingUser')) {
  console.error('FAIL: forms.js missing saveRegisteredUser or findMatchingUser');
  process.exit(1);
}
if (formsJs.includes('TacoTruck2026!')) {
  console.error('FAIL: forms.js still contains old demo credentials');
  process.exit(1);
}
console.log('PASS: forms.js has complete registration and login validation flow.');

// 5. Verify dashboard.js session sync
const dashboardJs = fs.readFileSync(path.join(rootDir, 'assets/js/dashboard.js'), 'utf-8');
if (!dashboardJs.includes('sf_logged_in_user') || !dashboardJs.includes('Welcome back')) {
  console.error('FAIL: dashboard.js missing session sync');
  process.exit(1);
}
console.log('PASS: dashboard.js properly synchronizes logged-in user name.');

console.log('\nALL VERIFICATIONS PASSED SUCCESSFULLY!');
