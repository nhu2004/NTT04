// Lưu tên người dùng
let userName = 'Huỳnh Như';
localStorage.setItem('userName', userName);

// Hiển thị tên người dùng
let savedUserName = localStorage.getItem('userName');
document.getElementById('userNameDisplay').textContent = 'Xin Chào, ' + savedUserName + '.';