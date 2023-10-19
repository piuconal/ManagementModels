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


// List-model(get-data)
document.addEventListener("DOMContentLoaded", function() {
  // Sử dụng XMLHttpRequest hoặc Fetch API để gửi yêu cầu tới tệp PHP
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
          var data = JSON.parse(this.responseText);
          var tableBody = document.querySelector("#model-table tbody");
          
          data.forEach(function(model) {
              var row = tableBody.insertRow(-1);
              row.insertCell(0).textContent = model.modelID;
              row.insertCell(1).textContent = model.model_name;
              row.insertCell(2).textContent = model.path;
              row.insertCell(3).textContent = model.training_date;
              row.insertCell(4).textContent = model.acc;
              row.insertCell(5).textContent = model.pre;
              row.insertCell(6).textContent = model.rec;
              row.insertCell(7).textContent = model.f1;

              // Thêm nút "Sửa"
              var editButton = document.createElement("button");
              editButton.textContent = "Sửa";
              editButton.className = "edit-button";
              row.insertCell(8).appendChild(editButton);

              // Thêm nút "Xóa"
              var deleteButton = document.createElement("button");
              deleteButton.textContent = "Xóa";
              deleteButton.className = "delete-button";
              row.insertCell(9).appendChild(deleteButton);

              // Thêm nút "Đánh giá"
              var rateButton = document.createElement("button");
              rateButton.textContent = "Đánh giá";
              row.insertCell(10).appendChild(rateButton);
          });
      }
  };
  xhttp.open("GET", "get_models.php", true);
  xhttp.send();
});
