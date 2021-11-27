// Check if account exists in session storage
function verifySession() {
  const session = sessionStorage.getItem('account');
  const notAuthElems = Array.from(document.querySelectorAll('.notAuth'));
  const isAuthElems = Array.from(document.querySelectorAll('.isAuth'));

  if (session) {
    if (isAuthElems.length > 0) {
      isAuthElems.forEach((elem) => {
        elem.classList.remove('hidden');
      });
    }
  } else {
    if (notAuthElems.length > 0) {
      notAuthElems.forEach((elem) => {
        elem.classList.remove('hidden');
      });
    }
  }
}
verifySession();

// Handle signing out account
function signOut() {
  sessionStorage.removeItem('account');
  window.location = 'home.html';
}
