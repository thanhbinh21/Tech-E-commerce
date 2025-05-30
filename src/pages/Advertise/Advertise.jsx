import "./Advertise.css";
import AdvertisePost from "../../components/AdvertisePost/AdvertisePost";
import anh1 from "../../img/imgAdvertise/Anh1.jpg";
import anh2 from "../../img/imgAdvertise/Anh2.jpg";
import anh3 from "../../img/imgAdvertise/Anh3.jpg";
import anh4 from "../../img/imgAdvertise/Anh4.jpg";
import anh5 from "../../img/imgAdvertise/Anh5.jpg";

import ABC from "../../img/imgAdvertise/ABC.jpg";
import CPU from "../../img/imgAdvertise/CPU.jpg";
import DEF from "../../img/imgAdvertise/DEF.jpg";
import GHK from "../../img/imgAdvertise/GHK.jpg";
import XYZ from "../../img/imgAdvertise/XYZ.jpg";

const Advertise = () => {
  const jobs = [
    {
      id: 1,
      name: "",
      image: GHK,
      title: "[Demo] Tuyển dụng nhân viên vận hành, bảo trì máy CNC",
      salary: "6-7 triệu",
      location: "Hồ Chí Minh",
      date: "07/01/2025",
    },
    {
      id: 2,
      name: "",
      image: XYZ,
      title:
        "[Demo] Tuyển dụng nhân viên lắp ráp, sửa chữa, kiểm tra bo mạch điện tử",
      salary: "6-7 triệu",
      location: "Hồ Chí Minh",
      date: "07/01/2025",
    },
    {
      id: 3,
      name: "Công Ty TNHH DEF",
      image: DEF,
      title: "[Demo] Tuyển dụng kỹ sư lập trình nhúng",
      salary: "10-20 triệu",
      location: "Hồ Chí Minh",
      date: "07/01/2025",
    },
    {
      id: 4,
      name: "CÔNG TY TNHH ĐIỆN TỬ ABC",
      image: ABC,
      title:
        "[Demo] Nhận Gia Công SMT, PCBA chi phí phải chăng, chất lượng đảm bảo",
      salary: "",
      location: "",
      date: "01/01/2025",
    },
    {
      id: 5,
      name: "Cửa hàng Hshop.vn - Điện tử & Robot",
      image: CPU,
      title: "Hshop.vn cần tuyển vị trí Kỹ Thuật Bán Hàng T11/2024",
      salary: "",
      location: "",
      date: "",
    },
  ];

  return (
    <>
      <div className="container-advertise">
        <div className="left-column">
          <h2 className="heading"> TUYỂN DỤNG & QUẢNG CÁO</h2> <br />
          <p className="description">
            Bạn đang tìm kiếm nhân sự phù hợp cho doanh nghiệp? Bạn muốn quảng
            bá sản phẩm, dịch vụ đến khách hàng tiềm năng? Hãy đăng tin{" "}
            <strong className="highlight">Tuyển dụng & Quảng cáo</strong> tại{" "}
            <a href="#" className="linkshop">
              Hshop.vn
            </a>{" "}
            để tiếp cận hàng ngàn người dùng quan tâm đến chuyên ngành: Điện Tử,
            Tự Động Hoá, Robotics, AI, IoT,...mỗi ngày!
          </p>{" "}
          <br />
          <p>
            🔥 ƯU ĐÃI ĐẶC BIỆT dành cho khách hàng mới và đối tác đăng tin
            thường xuyên!
          </p>{" "}
          <br />
          <a href="#" className="linklienhe">
            Liên hệ ngay tại đây để được tư vấn và đăng tin nhanh chóng!
          </a>{" "}
          <br />
          <AdvertisePost jobs={jobs}></AdvertisePost>
        </div>
      </div>
    </>
  );
};

export default Advertise;
