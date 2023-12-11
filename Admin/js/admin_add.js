// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}

list.forEach(item=>item.addEventListener("mouseover",activeLink));



// menu toggle
let toggle=document.querySelector(".toggle");
let navigation=document.querySelector(".navigation");
let main=document.querySelector(".main");

toggle.onclick= function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

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

function alertSubmit(){
    if(confirm('Bạn có chắc không?') == true) {
        alert('Bạn đẫ thêm sản phẩm thành công')
    } else 
        alert('Tiếp tục chỉnh sửa')
}