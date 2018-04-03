//  Firebase Variables
const auth = firebase.auth();
const messaging = firebase.messaging();
const db = firebase.database();


const signInButton = document.getElementById('sign-in');
const signOutButton = document.getElementById('sign-out');

signInButton.addEventListener('click', signIn);
signOutButton.addEventListener('click', signOut);

auth.onAuthStateChanged(handleAuthStateChanged);

function signIn() {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function signOut() {
    auth.signOut();
}

function handleAuthStateChanged(user) {
  if (user) {
    signInButton.setAttribute('hidden', 'true');
    signOutButton.removeAttribute('hidden');
    console.log(user);
  } else {
    console.log('There is no user');
    signOutButton.setAttribute('hidden', 'true');
    signInButton.removeAttribute('hidden');
  }
}
