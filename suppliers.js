function addOrder() {
  var material = document.getElementById("material").value;
  var quantity = document.getElementById("quantity").value;
  var supplier = document.getElementById("supplier").value;
  var delivery = document.getElementById("deliveryDate").value;

  if (material == "" || quantity == "" || supplier == "" || delivery == "") {
    alert("Please fill all fields");
  } else {
    var table = document.getElementById("ordersTable");
    var newRow = table.insertRow(-1); // add row at end

    // Add 6 new cells
    var c1 = newRow.insertCell(0);
    var c2 = newRow.insertCell(1);
    var c3 = newRow.insertCell(2);
    var c4 = newRow.insertCell(3);
    var c5 = newRow.insertCell(4);
    var c6 = newRow.insertCell(5);

    // Fill cells
    c1.innerHTML = "New";
    c2.innerHTML = material;
    c3.innerHTML = quantity;
    c4.innerHTML = supplier;
    c5.innerHTML = delivery;
    c6.innerHTML = 'Pending <button onclick="markDelivered(this)">✔</button>';

    alert("Order added!");

    // clear form
    document.getElementById("material").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("supplier").value = "";
    document.getElementById("deliveryDate").value = "";
  }
}

function markDelivered(button) {
  // button -> <button>
  // button.parentNode -> <td>
  button.parentNode.innerHTML = "Delivered ✅";
}
