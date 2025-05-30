import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../context/UserContect";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [userName, setuserName] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const userNameRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await login(userName, password);
    console.log("Kết quả login:", result);
    if (result.success) {
      navigate("/"); // đi tới trang  home khi đăng nhập thành công
    } else {
      setError("Tài khoản hoặc mật khẩu không đúng!");
      setuserName("");
      setPassWord("");
      userNameRef.current.focus();
    }
  };

  return (
    <>
      <div className="container-account">
        <form
          onSubmit={handleLogin}
          className="form_login"
          onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
        >
          <h1>Đăng nhập</h1>

          <p className="error">{error}</p>
          <label htmlFor="">Tên đăng nhập </label>
          <input
            ref={userNameRef}
            className="custom-input"
            type="text"
            value={userName}
            placeholder="Tên đăng nhập...."
            onChange={(e) => {
              setuserName(e.target.value);
              setError("");
            }}
          />

          <label htmlFor="">Mật khẩu</label>
          <input
            type="password"
            value={password}
            placeholder="Mật khẩu...."
            onChange={(e) => {
              setPassWord(e.target.value);
              setError("");
            }}
          />
          <button className="btn_login">Đăng nhập </button>
          <p className="chuaCoTaiKhoan">
            Bạn chưa có tài khoản?{" "}
            <Link to="/createaccount">Tạo tài khoản</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;