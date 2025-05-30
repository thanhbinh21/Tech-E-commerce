import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userLogin, setUserLogin] = useState({
    name: "Thông tin",
    img: "https://res.cloudinary.com/diugl6sos/image/upload/v1742572714/user-icon_edyn1a.png"
  });

  useEffect(() => {
    const axiosUser = async () => {
      try {
        const res = await axios.get("https://67d6eb959d5e3a101529639b.mockapi.io/data/v1/User");
        const apiUsers = res.data;

        const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // lấy tài khoản đã có trên loca

        const mergedUsers = [...apiUsers, ...storedUsers]; // hợp nhất dữ liệu của loca với api

        setUsers(mergedUsers);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    axiosUser();
  }, [users]);

  const login = async (userName, password) => {
    const user = users.find(
      (u) => u.userName === userName && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setUserLogin(user);
      return { success: true };
    } else {
      return {
        success: false,
        message: "Tài khoản hoặc mật khẩu không đúng!",
      };
    }
  };

  return (
    <UserContext.Provider value={{ users, userLogin, login }}>
      {children}
    </UserContext.Provider>
  );
};
