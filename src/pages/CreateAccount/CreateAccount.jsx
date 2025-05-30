import { useContext, useState } from "react";
import "./CreateAccount.css";
import { UserContext } from "../../context/UserContect";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const { users } = useContext(UserContext);
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const img = "https://res.cloudinary.com/diugl6sos/image/upload/v1742572714/user-icon_edyn1a.png";

  const handleCreate = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên!";
    }

    if (!email.trim()) {
      newErrors.email = "Vui lòng nhập email!";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại!";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ!";
    }

    const user = users.find((u) => u.userName === userName);
    if (user) {
      newErrors.userName = "Tên đăng nhập đã tồn tại!";
    }

    if (!userName.trim()) {
      newErrors.userName = "Vui lòng nhập tên đăng nhập!";
    }

    if (!password.trim()) {
      newErrors.password = "Vui lòng nhập mật khẩu!";
    } else if (password.length < 3) {
      newErrors.password = "Mật khẩu phải có ít nhất 3 ký tự!";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    const newUser = { name, email, phone, userName, password, img };

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

  return (
    <div className="container-addaccount">
      <form onSubmit={handleCreate} className="form_create">
        <h1>Đăng ký</h1>

        <input
          type="text"
          value={name}
          placeholder="Họ và tên..."
          onChange={(e) => {
            setName(e.target.value);
            setError({ ...error, name: "" });
          }}
        />
        <p className="error">{error.name}</p>

        <input
          type="text"
          value={email}
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
            setError({ ...error, email: "" });
          }}
        />
        <p className="error">{error.email}</p>

        <input
          type="text"
          value={phone}
          placeholder="Số điện thoại..."
          onChange={(e) => {
            setPhone(e.target.value);
            setError({ ...error, phone: "" });
          }}
        />
        <p className="error">{error.phone}</p>

        <input
          type="text"
          value={userName}
          placeholder="Tài khoản..."
          onChange={(e) => {
            setUserName(e.target.value);
            setError({ ...error, userName: "" });
          }}
        />
        <p className="error">{error.userName}</p>

        <input
          type="password"
          value={password}
          placeholder="Mật khẩu..."
          onChange={(e) => {
            setPassword(e.target.value);
            setError({ ...error, password: "" });
          }}
        />
        <p className="error">{error.password}</p>

        <button type="submit" className="btn_create">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
