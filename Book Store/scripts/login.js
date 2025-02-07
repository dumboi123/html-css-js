const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function resetAdminStatus(){
  var upateAdminStat = [false, ''];
  localStorage.setItem('adminStatus', JSON.stringify(upateAdminStat));
}
window.onload = resetAdminStatus();

var users = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.user) :[]

var adminAccount = JSON.parse(localStorage.adminAcc);
function signin(e){
  event.preventDefault();

  var email = document.querySelector('.email').value;
  var username = document.querySelector('.username').value;
  var password = document.querySelector('.password').value;

  var user ={
  email : email,
  username : username,
  password : password
  }

  users.push(user)
  localStorage.setItem('user', JSON.stringify(users));

  window.alert('Đã tạo tài khoản')
}

function login(e){
  event.preventDefault();
  
  var username = document.querySelector('.log_username').value;
  var password = document.querySelector('.log_password').value;
  var result = document.querySelector('.result');
  
  for (adminAcc of adminAccount) {
    if (username == adminAcc.username && password == adminAcc.password) {
      var upateAdminStat = [true, adminAcc.name];
      localStorage.setItem('adminStatus', JSON.stringify(upateAdminStat));
      window.location.href = 'admin.html';
      return;
    }
  }
  for(savedUser of users){
    if(username == savedUser.username && password == savedUser.password){
        result.innerHTML = 'Đăng nhập thành công'
        localStorage.setItem('isloggedin',username)
        window.location.href = 'index.html'
      }
      else if((username != savedUser.username || password != savedUser.password)){
        result.innerHTML = "Sai tài khoản hoặc mật khẩu !"
      }
  }
}
