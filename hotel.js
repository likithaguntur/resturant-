let cart = [];
let total = 0;

function addToCart(item, price, qtyId) {
  let qty = parseInt(document.getElementById(qtyId).value);
  if (qty < 1) qty = 1;
  if (qty > 10) qty = 10;

  let itemTotal = price * qty;
  cart.push({ item, price, qty, itemTotal });
  total += itemTotal;

  let li = document.createElement("li");
  li.textContent = `${item} (x${qty}) - ₹${itemTotal}`;
  document.getElementById("cartList").appendChild(li);

  document.getElementById("total").textContent = total;
}

function addVariety(selectId, qtyId) {
  let choice = document.getElementById(selectId).value;
  let parts = choice.split("-");
  let item = parts[0];
  let price = parseInt(parts[1]);

  addToCart(item, price, qtyId);
}

function printBill() {
  let bill = "🧾 SVPP Canteen Bill\n\n";
  cart.forEach((c, i) => {
    bill += `${i + 1}. ${c.item} x${c.qty} = ₹${c.itemTotal}\n`;
  });
  bill += `\nTotal: ₹${total}\n\nThank you! ❤`;

  alert(bill);
}
