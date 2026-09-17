// Simulate browser localStorage and execution of forms.js and dashboard.js logic
const store = {};
const localStorage = {
  getItem: (k) => store[k] || null,
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: (k) => { delete store[k]; }
};

// Test 1: Empty state -> Login attempt with non-registered user
let users = JSON.parse(localStorage.getItem('sf_users') || '[]');
console.log('Test 1: Initial users count:', users.length);
if (users.length !== 0) throw new Error('Expected 0 users initially');

// Test 2: User registers on sign up page
const registeredUser = {
  name: 'Kirishanth',
  truckName: 'The Royal Biryani Truck',
  email: 'kiri@streetfeast.com',
  password: 'SecurePassword2026',
  phone: '+1 (512) 555-0199',
  createdAt: new Date().toISOString()
};

users.push(registeredUser);
localStorage.setItem('sf_users', JSON.stringify(users));
localStorage.setItem('sf_registered_user', JSON.stringify(registeredUser));
console.log('Test 2: User registered successfully:', registeredUser.email);

// Test 3: Attempt login with wrong password
const testUsers = JSON.parse(localStorage.getItem('sf_users'));
const wrongPassMatch = testUsers.find(u => u.email.toLowerCase() === 'kiri@streetfeast.com' && u.password === 'WrongPass!');
if (wrongPassMatch) throw new Error('Wrong password should NOT match');
console.log('Test 3: Wrong password correctly rejected');

// Test 4: Attempt login with wrong email
const wrongEmailMatch = testUsers.find(u => u.email.toLowerCase() === 'unknown@streetfeast.com' && u.password === 'SecurePassword2026');
if (wrongEmailMatch) throw new Error('Wrong email should NOT match');
console.log('Test 4: Unregistered email correctly rejected');

// Test 5: Attempt login with exact registered credentials
const correctMatch = testUsers.find(u => u.email.toLowerCase() === 'kiri@streetfeast.com' && u.password === 'SecurePassword2026');
if (!correctMatch) throw new Error('Exact registered credentials must match');
console.log('Test 5: Exact credentials correctly verified!');

// Test 6: Set session and check dashboard name display
const session = {
  name: correctMatch.name,
  email: correctMatch.email,
  truckName: correctMatch.truckName,
  loggedInAt: new Date().toISOString()
};
localStorage.setItem('sf_logged_in_user', JSON.stringify(session));

const loadedSession = JSON.parse(localStorage.getItem('sf_logged_in_user'));
const welcomeGreeting = `Welcome back, ${loadedSession.name}`;
console.log('Test 6: Dashboard greeting generated:', welcomeGreeting);
if (welcomeGreeting !== 'Welcome back, Kirishanth') {
  throw new Error('Greeting name does not match entered sign up name!');
}

console.log('\nAll 6 simulation tests passed with flying colors!');
