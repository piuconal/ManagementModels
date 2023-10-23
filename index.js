var box = document.getElementById("box");
var div = document.getElementById("hiddenDiv");
var div2 = document.getElementById("hiddenDiv2");
var div3 = document.getElementById("hiddenDiv3");
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

// close popup edit-model
function xoa_editmodel() {
  div2.style.display = "none";
  box.style.display = "none";
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    xoa_editmodel();
  }
});
// close popup delete-model
function xoa_deletemodel() {
  div3.style.display = "none";
  box.style.display = "none";
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    xoa_deletemodel();
  }
});


// // F1-Score => Math
// Input Pre and Rec
document.getElementById("pre1").addEventListener("input", updateF1Score1);
document.getElementById("rec1").addEventListener("input", updateF1Score1);
function updateF1Score1() {
  const pre1 = parseFloat(document.getElementById("pre1").value) || 0;
  const rec1 = parseFloat(document.getElementById("rec1").value) || 0;

  const f1score1 = 2 * ((pre1 * rec1) / (pre1 + rec1));
  document.getElementById("f1score1").value = f1score1.toFixed(2);
}
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

              // edit-model
              const editButtons = document.querySelectorAll(".edit-button");

              editButtons.forEach((editButton) => {
                  editButton.addEventListener("click", function () {
                      div2.style.display = "block";
                      box.style.display = "block";

                      // sửa thông tin model
                      const row = editButton.closest("tr");

                      document.getElementById("id1").value = row.cells[0].textContent;
                      document.getElementById("name1").value = row.cells[1].textContent;
                      document.getElementById("path1").value = row.cells[2].textContent;
                      document.getElementById("date1").value = row.cells[3].textContent;
                      document.getElementById("acc1").value = row.cells[4].textContent;
                      document.getElementById("pre1").value = row.cells[5].textContent;
                      document.getElementById("rec1").value = row.cells[6].textContent;
                      document.getElementById("f1score1").value = row.cells[7].textContent;

                      });
                  });
                  
              // remove_model
              const deleteButtons = document.querySelectorAll(".delete-button");

              deleteButtons.forEach((deleteButton) => {
                  deleteButton.addEventListener("click", function () {
                      div3.style.display = "block";
                      box.style.display = "block";
                    
                      const row = deleteButton.closest("tr");
                      document.getElementById("id2").value = row.cells[0].textContent;
                      });
                  });

            });
      }
  };
  xhttp.open("GET", "get_models.php", true);
  xhttp.send();
});

