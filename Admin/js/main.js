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













// let prevLink = document.querySelector(".prev")
// let nextLink = document.querySelector(".next")
// let pagination = document.querySelector(".pagination")
// let pageNumberLinks = document.querySelectorAll(".page-number a")
// let maxPageIndex = pageNumberLinks.length - 1
// pageNumberLinks.forEach((pageNumberLink, activeIndex) => {
//   pageNumberLink.addEventListener("click", () => {
//     pageNumberLinks.forEach(pageNumberLink =>
//       pageNumberLink.parentElement.classList.remove("active")
//     )
//     pageNumberLink.parentElement.classList.add("active")
//     pagination.style.setProperty("--active-index", `${activeIndex}`)
//   })
// })
// prevLink.addEventListener("click", () => {
//   pageNumberLinks.forEach(pageNumberLink =>
//     pageNumberLink.parentElement.classList.remove("active")
//   )
//   let activeIndex = Number(pagination.style.getPropertyValue("--active-index"))
//   activeIndex = activeIndex > 0 ? activeIndex - 1 : 0
//   pageNumberLinks[activeIndex].parentElement.classList.add("active")
//   pagination.style.setProperty("--active-index", `${activeIndex}`)
// })
// nextLink.addEventListener("click", () => {
//   pageNumberLinks.forEach(pageNumberLink =>
//     pageNumberLink.parentElement.classList.remove("active")
//   )
//   let activeIndex = Number(pagination.style.getPropertyValue("--active-index"))
//   activeIndex = activeIndex < maxPageIndex ? activeIndex + 1 : maxPageIndex
//   pageNumberLinks[activeIndex].parentElement.classList.add("active")
//   pagination.style.setProperty("--active-index", `${activeIndex}`)
// })




// Chỉnh sửa sản phẩm 
function Change() {
    if(confirm("Chắc chắn đã sửa ?") == true){
        alert("Chỉnh sửa hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
    
}


//Xoá sản phẩm 

function Delete_1() {
    var sp_1 = document.getElementById('sp_1')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_1.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_2() {
    var sp_2 = document.getElementById('sp_2')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_2.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_3() {
    var sp_3 = document.getElementById('sp_3')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_3.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_4() {
    var sp_4 = document.getElementById('sp_4')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_4.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_5() {
    var sp_5 = document.getElementById('sp_5')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_6() {
    var sp_5 = document.getElementById('sp_6')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_7() {
    var sp_5 = document.getElementById('sp_7')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_8() {
    var sp_5 = document.getElementById('sp_8')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_9() {
    var sp_5 = document.getElementById('sp_9')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_10() {
    var sp_5 = document.getElementById('sp_10')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_11() {
    var sp_5 = document.getElementById('sp_11')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_12() {
    var sp_5 = document.getElementById('sp_12')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_13() {
    var sp_5 = document.getElementById('sp_13')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_14() {
    var sp_5 = document.getElementById('sp_14')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_15() {
    var sp_5 = document.getElementById('sp_15')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_16() {
    var sp_5 = document.getElementById('sp_16')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_17() {
    var sp_5 = document.getElementById('sp_17')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_18() {
    var sp_5 = document.getElementById('sp_18')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_19() {
    var sp_5 = document.getElementById('sp_19')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_20() {
    var sp_5 = document.getElementById('sp_20')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}

function Delete_21() {
    var sp_5 = document.getElementById('sp_21')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
    }
}


function Delete_22() {
    var sp_5 = document.getElementById('sp_22')
    if(confirm("Chắc chắn xoá ?") == true){
        sp_5.remove()
        alert("Xoá hoàn tất")
    }else{
        alert("Tiếp tục chỉnh sửa")
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

//Xoá ảnh 
function DeleteImg_1() {
    $("#image_1").removeAttr("src");
}

function DeleteImg_2() {
    $("#image_2").removeAttr("src");
}

function DeleteImg_3() {
    $("#image_3").removeAttr("src");
}

function DeleteImg_4() {
    $("#image_4").removeAttr("src");
}

function DeleteImg_5() {
    $("#image_5").removeAttr("src");
}

function DeleteImg_6() {
    $("#image_6").removeAttr("src");
}

function DeleteImg_7() {
    $("#image_7").removeAttr("src");
}

function DeleteImg_8() {
    $("#image_8").removeAttr("src");
}

function DeleteImg_9() {
    $("#image_9").removeAttr("src");
}

function DeleteImg_10() {
    $("#image_10").removeAttr("src");
}

function DeleteImg_11() {
    $("#image_11").removeAttr("src");
}

function DeleteImg_12() {
    $("#image_12").removeAttr("src");
}

function DeleteImg_13() {
    $("#image_13").removeAttr("src");
}

function DeleteImg_14() {
    $("#image_14").removeAttr("src");
}

function DeleteImg_15() {
    $("#image_15").removeAttr("src");
}

function DeleteImg_16() {
    $("#image_16").removeAttr("src");
}

function DeleteImg_17() {
    $("#image_17").removeAttr("src");
}

function DeleteImg_18() {
    $("#image_18").removeAttr("src");
}

function DeleteImg_19() {
    $("#image_19").removeAttr("src");
}

function DeleteImg_20() {
    $("#image_20").removeAttr("src");
}

function DeleteImg_21() {
    $("#image_21").removeAttr("src");
}

function DeleteImg_22() {
    $("#image_22").removeAttr("src");
}

function DeleteImg_23() {
    $("#image_23").removeAttr("src");
}