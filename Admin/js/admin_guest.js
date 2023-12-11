//Xoá ảnh 
function DeleteImg_1() {
    $("#image_1").removeAttr("src");
}

function submitChange() {
    // Lấy giá trị ban đầu 
    // Tạo thẻ p mới để thay thế
    let name = document.getElementById('name-guest')
    let p_name = document.createElement('p')

    let phone = document.getElementById('phone-guest')
    let p_phone = document.createElement('p')

    let address = document.getElementById('address')
    let p_address = document.createElement('p')


    // Lấy giá trị trong input để thay thế
    let name_change = document.getElementById('name-change').value
    let phone_change = document.getElementById('phone-change').value
    let address_change = document.getElementById('address-change').value


    // Thay thế giá trị từ input
    // Thay thế tên
    if (name_change === "") {
        p_name.classList.add('d-inline')
        p_name.style.fontWeight = 'bolder'
        p_name.innerHTML = name.innerHTML
        name.parentNode.replaceChild(p_name, name)
    }
    else {
        p_name.classList.add('d-inline')
        p_name.style.fontWeight = 'bolder'
        p_name.innerHTML = name_change
        name.parentNode.replaceChild(p_name, name)
    }


    // Thay thế sđt
    if (phone_change === "") {
        p_phone.classList.add('d-inline')
        p_phone.style.fontWeight = 'bolder'
        p_phone.innerHTML = phone.innerHTML
        phone.parentNode.replaceChild(p_phone, phone)
    }
    else {
        p_phone.classList.add('d-inline')
        p_phone.style.fontWeight = 'bolder'
        p_phone.innerHTML = phone_change
        phone.parentNode.replaceChild(p_phone, phone)
    }


    // Thay thế địa chỉ
    if (address_change === "") {
        p_address.classList.add('d-inline')
        p_address.style.fontWeight = 'bolder'
        p_address.innerHTML = address.innerHTML
        address.parentNode.replaceChild(p_address, address)
    }
    else {
        p_address.classList.add('d-inline')
        p_address.style.fontWeight = 'bolder'
        p_address.innerHTML = address_change
        address.parentNode.replaceChild(p_address, address)
    }






    if (phone_change.length != 0)
        phone.innerHTML = phone_change
    if (address_change.length != 0)
        address.innerHTML = address_change



    if (confirm("Đã hoàn thành ?") == true) {
        alert("Chỉnh sửa thành công")
    } else {
        alert("Tiếp tục chỉnh sửa")
    }
}

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