// Open a WebSocket connection
const socket = io('ws://localhost:3000');

// Event when wish list has been updated
socket.on('wishList:updated', (list) => {
  const ul = document.getElementById('wishlist');

  if (list.length > 0) {
    ul.innerHTML = list.map((item, i) => `<li>${i + 1}. ${item} <button class="btn btn--sm" onclick="removeWishList('${item}')">Remove</button></li>`).join('');
  } else {
    ul.innerHTML = '<h5>Your wish list is empty</h5>';
  }
});

// Emit socket event to add item to wish list
function addWishList(item) {
  socket.emit('wishList:add', item);
}

// Emit socket event to remove item from wish list
function removeWishList(item) {
  socket.emit('wishList:remove', item);
}

// Handle click on buy
function buyProduct(item) {
  alert('You successfully bought: ' + item);
}
