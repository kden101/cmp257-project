const placeOrderBtn = document.getElementById('placeOrderBtn');
const modal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');

placeOrderBtn.addEventListener('click', () => {
  
  let totalQty = 0;
  document.querySelectorAll('.qty-select').forEach(select => {
    totalQty += parseInt(select.value);
  });

  if (totalQty === 0) {
    alert('Please select at least one product to order.');
    return;
  }

  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
