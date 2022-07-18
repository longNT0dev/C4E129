// Truy cập vào object thì thông qua key
// Truy cập vào mảng thì thông qua chỉ số
// console.log(data.Vietnam.All.capital_city)
// console.log(data.Vietnam.All.recovered)
// console.log(data.Vietnam.All.confirmed)
// console.log(data.Vietnam.All.deaths)
// console.log(data.Vietnam.All.population)
// 5.1
// => Object.keys => Lấy ra tất cả key trong object lớn -> Danh sách các nước (mảng)
// => Random tên các nước trong mảng

// DOM - document object model - CRUD
// Tạo form html cho phép người dùng nhập vào tên đăng nhập và mật khẩu
// Kiểm tra tên đăng nhập và mật khẩu đó, nếu trùng với thông tin lưu trong cơ sở dữ liệu
// thì sẽ chuyển người dùng tới trang home. Nếu sai sẽ hiển thị thông báo "Sai thông tin tài khoản hoặc mật khẩu" biết là thông báo không dùng alert. Thông báo sẽ có màu đỏ

// Cơ sở dữ liệu
const user = [
  {
    username: "admin",
    password: "123456",
  },
  {
    username: "longnt",
    password: "12345678",
  },
  {
    username: "longnt",
    password: "123456",
  },
];
// Lấy thẻ trong html
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const formLogin = document.getElementById("formLogin");
const error = document.getElementById("error");
// Handle check account
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  let isExist = false;
  for (let i = 0; i < user.length; i++) {
    if (
      user[i].username === usernameInput.value &&
      user[i].password === passwordInput.value
    ) {
      // Đăng nhập thành công
      window.location.href = "home.html";
      isExist = true;
      break;
    }
  }

  // background-color trong css -> backgroundColor trong js 
  if (isExist === false) {
    error.innerText = "Tài khoản bị sai";
    error.style.color = "red"
  }
});

// css thuần -> Tất cả style cố định không thay đổi (hover)
// js -> Style thay đổi tùy tình huống, tùy sự kiện xảy ra 