// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

// Chỉnh sửa trạng thái người dùng
function changeState() {
    let state = document.getElementById('state')
    let options = state.options
    let static = document.getElementById('static')
    for (var i = 0; i < options.length; i++) {
        if (options[i].selected == true) {
            static.innerHTML = options[i].value
        }
    }
}

//Upload ảnh
function chooseFile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image').attr('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function submitChange() {
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value

    if (name === "" || phone === "" || address === "")
        alert('Chưa nhập thông tin')
    else {
        if (confirm("Đã hoàn thành ?") == true) {
            alert("Thêm thành công")
        } else {
            alert("Tiếp tục chỉnh sửa")
        }
    }
}