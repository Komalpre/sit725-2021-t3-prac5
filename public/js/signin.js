// On form submit event handler
document.getElementById('form').onsubmit = (event) => {
  event.preventDefault();

  // Get form entries
  const formData = Object.fromEntries(new FormData(event.target));

  // Send request to server
  fetch('/api/accounts/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.success) {
        // Save account details in session storage
        sessionStorage.setItem('account', JSON.stringify(data.account));
        window.location = 'shop.html';
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};
