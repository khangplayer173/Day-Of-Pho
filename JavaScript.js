// Mở popup với thông tin món ăn và giá
function openOrderPage(dishName, price) {
    document.getElementById("order-page").style.display = "flex";
    document.getElementById("order-title").textContent = dishName;
    document.getElementById("order-price").textContent = price.toFixed(2);
    document.getElementById("total-price").textContent = price.toFixed(2);
    document.getElementById("quantity").value = 1;
  }
  
  // Đóng popup
  function closeOrderPage() {
    document.getElementById("order-page").style.display = "none";
  }
  
  // Cập nhật giá trị tổng khi thay đổi số lượng
  function updateTotalPrice() {
    var price = parseFloat(document.getElementById("order-price").textContent);
    var quantity = document.getElementById("quantity").value;
    var totalPrice = price * quantity;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  }
  
  // Xác nhận đơn hàng
  function confirmOrder() {
    var quantity = document.getElementById("quantity").value;
    var dishName = document.getElementById("order-title").textContent;
    var price = document.getElementById("order-price").textContent;
    var totalPrice = document.getElementById("total-price").textContent;
    alert(`You have booked ${quantity} part ${dishName} for the total price $${totalPrice}`);
    closeOrderPage();
  }
  
  //Feedback
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for signing up. We will contact you soon!');
    window.location.href = 'index.html';  // Điều hướng về trang Menu sau khi gửi feedback
});
// Sign

function register() {
  const loginForm = document.getElementById("login");
  const registerForm = document.getElementById("register");

  // Di chuyển form đăng nhập ra ngoài và đưa form đăng ký vào giữa
  loginForm.style.left = "-520px";
  registerForm.style.right = "4px";
}

function login() {
  const loginForm = document.getElementById("login");
  const registerForm = document.getElementById("register");

  // Di chuyển form đăng ký ra ngoài và đưa form đăng nhập vào giữa
  loginForm.style.left = "4px";
  registerForm.style.right = "-520px";
}
