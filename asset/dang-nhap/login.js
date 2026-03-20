document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form'); // Giả sử class form là .login-form

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const userInp = document.getElementById('loginUser').value.trim();
            const passInp = document.getElementById('loginPass').value;

            const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

            const validUser = accounts.find(acc => acc.userName === userInp && acc.password === passInp);

            if (validUser) {
                alert("Đăng nhập thành công! Chào mừng " + validUser.fullName);
                sessionStorage.setItem('currentUser', JSON.stringify(validUser));
                window.location.href = "./index.html"; 
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
            }
        });
    }
});