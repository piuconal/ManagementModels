var phu = document.getElementById("phu");
var login = document.getElementById("login");
// popup thêm model
function dangnhap() {
  login.style.display = "block";
  phu.style.display = "block";
}

// close popup new-model
function close_login() {
  login.style.display = "none";
  phu.style.display = "none";
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    close_login();
  }
});