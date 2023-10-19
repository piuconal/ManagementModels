var box = document.getElementById("box");
var div = document.getElementById("hiddenDiv");
// popup thêm model
function themmodel() {
  div.style.display = "block";
  box.style.display = "block";
}

// close popup new-model
function xoa_themmodel() {
  div.style.display = "none";
  box.style.display = "none";
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    xoa_themmodel();
  }
});

// video AI
const video = document.getElementById("myVideo");
setTimeout(() => {
    video.style.opacity = 0;
}, 5000);

// // F1-Score => Math
// Input Pre and Rec
document.getElementById("pre").addEventListener("input", updateF1Score);
document.getElementById("rec").addEventListener("input", updateF1Score);

function updateF1Score() {
  const pre = parseFloat(document.getElementById("pre").value) || 0;
  const rec = parseFloat(document.getElementById("rec").value) || 0;

  const f1score = 2 * ((pre * rec) / (pre + rec));
  document.getElementById("f1score").value = f1score.toFixed(2);

}
// // tạo id ngẫu nhiên
const idInput = document.getElementById("id");
const generateRandomNumberButton = document.getElementById("generateRandomNumber");
// Xử lý sự kiện khi nút được nhấn
generateRandomNumberButton.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 900) + 100;
    idInput.value = randomNumber;
});

