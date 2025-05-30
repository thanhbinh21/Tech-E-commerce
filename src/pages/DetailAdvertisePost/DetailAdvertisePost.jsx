import React from "react";
import { useLocation } from "react-router-dom";
import "./DetailAdvertisePost.css";

const DetailAdvertisePost = () => {
  const location = useLocation();
  const job = location.state?.job; // ✅ Kiểm tra nếu có dữ liệu

  if (!job) {
    return <p>Không tìm thấy công việc!</p>;
  }

  return (
    <div className="chitietcongviec">
      {/* job 1 */}
      {job.id === 1 && (
        <div>
          <h1> {job.title}</h1> <br />
          <p>
            <h2>
              <strong>THÔNG BÁO TUYỂN DỤNG</strong>
            </h2>
            <p>
              <strong>Vị trí:</strong> Nhân viên vận hành, bảo trì máy CNC
            </p>
            <p>
              <strong>Số lượng:</strong> 05 người
            </p>
            <p>
              <strong>Địa điểm làm việc:</strong> [Tên công ty], [Địa chỉ công
              ty]
            </p>
            <br />
            <h3>
              <strong>Mô tả công việc:</strong>
            </h3>
            <ul>
              <li>
                Vận hành, lập trình máy CNC (tiện, phay, cắt gọt kim loại) theo
                bản vẽ kỹ thuật
              </li>
              <li>Kiểm tra, đo lường sản phẩm đảm bảo đúng yêu cầu kỹ thuật</li>
              <li>Bảo trì, vệ sinh máy móc theo định kỳ</li>
              <li>
                Phối hợp với bộ phận kỹ thuật để điều chỉnh thông số khi cần
              </li>
              <li>Đảm bảo an toàn lao động và tuân thủ nội quy công ty</li>
            </ul>

            <h3>
              <strong>Yêu cầu</strong> :
            </h3>
            <ul>
              <li>- Giới tính: Nam, tuổi từ 20 - 40</li>
              <li>
                - Tốt nghiệp trung cấp/cao đẳng trở lên chuyên ngành cơ khí, chế
                tạo máy, kỹ thuật cơ khí
              </li>
              <li>
                - Có kinh nghiệm vận hành máy CNC từ 06 tháng trở lên (chưa có
                kinh nghiệm sẽ được đào tạo)
              </li>
              <li>- Đọc hiểu bản vẽ kỹ thuật, sử dụng dụng cụ đo cơ khí</li>
              <li>- Chăm chỉ, cẩn thận, có tinh thần trách nhiệm</li>
            </ul>

            <h3>
              <strong>Quyền lợi:</strong>
            </h3>
            <ul>
              <li>
                - Lương cơ bản: 8.000.000 - 15.000.000 VNĐ/tháng (tùy theo kinh
                nghiệm)
              </li>
              <li>- Phụ cấp ăn trưa, đi lại, nhà ở (nếu có)</li>
              <li>- Thưởng năng suất, tăng lương theo định kỳ</li>
              <li>- Lương tháng 13, chế độ BHXH, BHYT đầy đủ</li>
              <li>- Được đào tạo nâng cao tay nghề, cơ hội thăng tiến</li>
            </ul>

            <h3>
              <strong>Thời gian làm việc:</strong>
            </h3>
            <ul>
              <li>- Ca hành chính: 7h30 - 16h30 (nghỉ trưa 1 tiếng)</li>
              <li>- Có thể tăng ca theo nhu cầu (lương tăng ca tính riêng)</li>
            </ul>

            <h3>
              <strong>Hồ sơ ứng tuyển:</strong>
            </h3>
            <ul>
              <li>- Đơn xin việc</li>
              <li>- Sơ yếu lý lịch</li>
              <li>- Bằng cấp liên quan</li>
              <li>- CMND/CCCD (bản photo)</li>
            </ul>

            <p>
              <strong>⏳ Hạn nộp hồ sơ:</strong> [Ngày cụ thể]
            </p>

            <h3>
              📩<strong>Liên hệ ứng tuyển:</strong>{" "}
            </h3>
            <p>
              <strong>Điện thoại:</strong> [Số điện thoại]
            </p>
            <p>
              <strong>Email:</strong> [Email liên hệ]
            </p>
            <p>
              <strong>Nộp hồ sơ trực tiếp tại:</strong> [Địa chỉ công ty]
            </p>

            <p>
              <i>Nhà tuyển dụng chịu trách nhiệm về nội dung.</i>
            </p>
          </p>
        </div>
      )}

      {/* job 2 */}
      {job.id === 2 && (
        <div>
          <h1>{job.title}</h1> <br />
          <h2>
            📢<strong>THÔNG BÁO TUYỂN DỤNG</strong>{" "}
          </h2>
          <p>
            <strong>Vị trí:</strong> Nhân viên lắp ráp, sửa chữa, kiểm tra bo
            mạch điện tử
          </p>
          <p>
            <strong>Số lượng:</strong> 10 người
          </p>
          <p>
            <strong>Địa điểm làm việc:</strong> [Tên công ty], [Địa chỉ công ty]
          </p>
          <br />
          <h3>
            🔧<strong>Mô tả công việc:</strong>{" "}
          </h3>
          <ul>
            <li>
              - Lắp ráp, hàn linh kiện điện tử trên bo mạch theo bản vẽ kỹ thuật
            </li>
            <li>- Kiểm tra chất lượng sản phẩm sau khi lắp ráp</li>
            <li>- Vận hành một số thiết bị hỗ trợ lắp ráp</li>
            <li>- Đảm bảo tiến độ sản xuất theo kế hoạch của công ty</li>
            <li>
              - Tuân thủ các quy trình sản xuất và quy định an toàn lao động
            </li>
          </ul>
          <h3>
            📝<strong>Yêu cầu:</strong>{" "}
          </h3>
          <ul>
            <li>- Giới tính: Nam/Nữ, tuổi từ 18 - 40</li>
            <li>- Không yêu cầu kinh nghiệm (có đào tạo)</li>
            <li>
              - Tốt nghiệp THPT trở lên, ưu tiên ứng viên có kinh nghiệm hàn,
              lắp ráp linh kiện điện tử
            </li>
            <li>- Cẩn thận, tỉ mỉ, có tinh thần trách nhiệm cao</li>
          </ul>
          <h3>
            💰<strong> Quyền lợi:</strong>
          </h3>
          <ul>
            <li>
              - Lương cơ bản: 7.000.000 - 12.000.000 VNĐ/tháng (tùy theo năng
              lực)
            </li>
            <li>- Phụ cấp ăn trưa, xăng xe, chuyên cần</li>
            <li>- Tăng lương theo định kỳ, thưởng năng suất, lương tháng 13</li>
            <li>- Được đóng BHXH, BHYT, BHTN đầy đủ theo quy định</li>
            <li>- Môi trường làm việc chuyên nghiệp, có cơ hội thăng tiến</li>
          </ul>
          <h3>
            ⏰<strong>Thời gian làm việc:</strong>{" "}
          </h3>
          <ul>
            <li>- Giờ hành chính: 7h30 - 16h30 (nghỉ trưa 1 tiếng)</li>
            <li>
              - Có thể tăng ca nếu có nhu cầu (lương tăng ca tính theo quy định)
            </li>
          </ul>
          <h3>
            📄 <strong>Hồ sơ ứng tuyển:</strong>
          </h3>
          <ul>
            <li>- Đơn xin việc</li>
            <li>- Sơ yếu lý lịch</li>
            <li>- Bằng cấp (nếu có)</li>
            <li>- CMND/CCCD (bản photo)</li>
          </ul>
          <p>
            <strong>⏳ Hạn nộp hồ sơ:</strong> [Ngày cụ thể]
          </p>
          <h3>📩 Liên hệ ứng tuyển:</h3>
          <p>
            <strong>📞 Điện thoại:</strong> [Số điện thoại]
          </p>
          <p>
            <strong>📧 Email:</strong> [Email liên hệ]
          </p>
          <p>
            <strong>📍 Nộp hồ sơ trực tiếp tại:</strong> [Địa chỉ công ty]
          </p>
          <p>
            <i>Nhà tuyển dụng chịu trách nhiệm về nội dung.</i>
          </p>
        </div>
      )}

      {/* job 3 */}
      {job.id === 3 && (
        <div>
          <h1>{job.title}</h1> <br />
          <h2>
            📢<strong>TUYEN DỤNG KỸ SƯ LẬP TRÌNH NHÚNG</strong>{" "}
          </h2>
          <p>
            <strong>📍 Địa điểm làm việc:</strong> [Địa chỉ công ty]
          </p>
          <p>
            <strong>💰 Mức lương:</strong> [Khoảng lương]
          </p>
          <p>
            <strong>🕒 Hình thức làm việc:</strong> Toàn thời gian
          </p>
          <p>
            <strong>📆 Hạn nộp hồ sơ:</strong> [Ngày cụ thể]
          </p>
          <br />
          <h3>🛠 MÔ TẢ CÔNG VIỆC</h3>
          <ul>
            <li>
              - Thiết kế, lập trình và phát triển phần mềm nhúng trên vi điều
              khiển (ARM, PIC, ESP32, STM32, AVR, v.v.).
            </li>
            <li>
              - Xây dựng firmware cho các thiết bị IoT, hệ thống nhúng trong
              công nghiệp, ô tô, y tế hoặc điện tử tiêu dùng.
            </li>
            <li>
              - Nghiên cứu và phát triển các giải pháp phần mềm nhúng tối ưu về
              hiệu suất và tiêu thụ năng lượng.
            </li>
            <li>
              - Kiểm tra, sửa lỗi và tối ưu hóa code nhằm đảm bảo hệ thống hoạt
              động ổn định.
            </li>
            <li>
              - Làm việc với các giao thức truyền thông: UART, SPI, I2C, CAN,
              Modbus, MQTT, BLE, Wi-Fi.
            </li>
            <li>
              - Phối hợp với đội phần cứng để thiết kế, thử nghiệm sản phẩm.
            </li>
            <li>Viết tài liệu kỹ thuật và báo cáo tiến độ công việc.</li>
          </ul>
          <h3>🎯 YÊU CẦU CÔNG VIỆC</h3>
          <ul>
            <li>
              - Tốt nghiệp đại học/cao đẳng chuyên ngành Điện – Điện tử, Tự động
              hóa, Kỹ thuật máy tính hoặc các ngành liên quan.
            </li>
            <li>- Thành thạo lập trình C/C++ cho hệ thống nhúng.</li>
            <li>
              - Có kinh nghiệm làm việc với vi điều khiển (STM32, ESP32, PIC,
              AVR, ARM, v.v.).
            </li>
            <li>
              - Am hiểu về hệ điều hành thời gian thực (RTOS) là một lợi thế.
            </li>
            <li>
              - Có kiến thức về thiết kế mạch điện tử, đọc hiểu sơ đồ nguyên lý.
            </li>
            <li>- Có kỹ năng debug, phân tích lỗi phần mềm và phần cứng.</li>
            <li>
              - Chủ động, có tinh thần trách nhiệm và khả năng làm việc nhóm
              tốt.
            </li>
          </ul>
          <h3>🎁 QUYỀN LỢI</h3>
          <ul>
            <li>✅ Mức lương cạnh tranh theo năng lực.</li>
            <li>✅ Thưởng theo dự án, thưởng cuối năm.</li>
            <li>✅ Hỗ trợ đào tạo nâng cao chuyên môn, cơ hội thăng tiến.</li>
            <li>✅ Chế độ bảo hiểm theo quy định nhà nước.</li>
            <li>✅ Môi trường làm việc chuyên nghiệp, năng động, sáng tạo.</li>
            <li>
              ✅ Được tiếp cận và làm việc với các công nghệ tiên tiến trong
              lĩnh vực IoT, AIoT, tự động hóa.
            </li>
          </ul>
          <h3>📩 CÁCH ỨNG TUYỂN</h3>
          <p>
            <strong>📩 Gửi CV qua email:</strong> [Email liên hệ]
          </p>
          <p>
            <strong>📞 Hotline:</strong> [Số điện thoại]
          </p>
          <p>
            <strong>🌐 Website:</strong> [Trang web công ty]
          </p>
          <p>
            <strong>⏳ Hạn chót nộp hồ sơ:</strong> [Ngày cụ thể]
          </p>
          <p>
            💡 Hãy gia nhập đội ngũ của chúng tôi và cùng tạo ra những sản phẩm
            công nghệ đột phá!
          </p>
        </div>
      )}

      {/* job 4 */}
      {job.id === 4 && (
        <div>
          <h1>{job.title}</h1>

          <h2>
            ⚡ <strong>DỊCH VỤ GIA CÔNG SMT CHẤT LƯỢNG CAO</strong> ⚡
          </h2>
          <p>
            Chúng tôi cung cấp dịch vụ gia công SMT với{" "}
            <strong>độ chính xác cao</strong>, <strong>tốc độ nhanh</strong> và{" "}
            <strong>chi phí tối ưu</strong>. Với hệ thống dây chuyền hiện đại và
            đội ngũ kỹ thuật viên giàu kinh nghiệm, chúng tôi cam kết mang đến
            sản phẩm đạt tiêu chuẩn quốc tế, phù hợp với nhiều lĩnh vực như điện
            tử tiêu dùng, công nghiệp, y tế, viễn thông và ô tô.
          </p>

          <h3>✅ TẠI SAO CHỌN CHÚNG TÔI?</h3>
          <ul>
            <li>
              <strong>Công nghệ hiện đại:</strong> Sử dụng máy móc tiên tiến, tự
              động hóa cao, đảm bảo độ chính xác và chất lượng ổn định.
            </li>
            <li>
              <strong>Đội ngũ chuyên nghiệp:</strong> Kỹ thuật viên giàu kinh
              nghiệm, hỗ trợ từ thiết kế PCB đến sản xuất hàng loạt.
            </li>
            <li>
              <strong>Linh hoạt và đa dạng:</strong> Nhận sản xuất số lượng nhỏ
              đến lớn, phù hợp với nhiều nhu cầu.
            </li>
            <li>
              <strong>Kiểm soát chất lượng nghiêm ngặt:</strong> Áp dụng tiêu
              chuẩn IPC, kiểm tra AOI, X-ray và thử nghiệm chức năng sản phẩm.
            </li>
            <li>
              <strong>Tiết kiệm chi phí:</strong> Tối ưu quy trình sản xuất,
              giúp giảm giá thành nhưng vẫn đảm bảo chất lượng.
            </li>
          </ul>

          <h3>🛠 QUY TRÌNH GIA CÔNG SMT</h3>
          <ol>
            <li>📁 Tiếp nhận và kiểm tra file Gerber, BOM</li>
            <li>📦 Chuẩn bị vật liệu và linh kiện</li>
            <li>🖨️ In kem hàn (Solder Paste Printing)</li>
            <li>🤖 Gắn linh kiện tự động (Pick and Place)</li>
            <li>🔥 Hàn linh kiện bằng công nghệ reflow</li>
            <li>🔍 Kiểm tra chất lượng (AOI, X-ray, ICT, FCT)</li>
            <li>📦 Hoàn thiện và đóng gói sản phẩm</li>
          </ol>

          <h3>📌 ỨNG DỤNG CỦA DỊCH VỤ</h3>
          <ul>
            <li>
              📱 <strong>Thiết bị điện tử tiêu dùng</strong> (TV, điện thoại,
              máy tính bảng…)
            </li>
            <li>
              🏥 <strong>Thiết bị y tế</strong> (cảm biến, máy đo nhịp tim,
              thiết bị hỗ trợ…)
            </li>
            <li>
              📡 <strong>Công nghệ viễn thông</strong> (bộ phát sóng, modem,
              router…)
            </li>
            <li>
              🚗 <strong>Ô tô và công nghiệp</strong> (hệ thống điều khiển, cảm
              biến thông minh…)
            </li>
          </ul>

          <h3>📞 LIÊN HỆ NGAY ĐỂ NHẬN BÁO GIÁ</h3>
          <p>
            <strong>📞 Hotline:</strong> [Số điện thoại]
          </p>
          <p>
            <strong>📧 Email:</strong> [Địa chỉ email]
          </p>
          <p>
            <strong>🌐 Website:</strong> [Trang web công ty]
          </p>

          <p>
            💡 Chúng tôi sẵn sàng hợp tác và cung cấp giải pháp sản xuất điện tử
            chất lượng cao, đáp ứng mọi yêu cầu của bạn!
          </p>
        </div>
      )}

      {/* job 5 */}
      {job.id === 5 && (
        <div>
          <h1>{job.title}</h1>
          <br />
          <h2>Cửa hàng Hshop.vn tuyển dụng Kỹ Thuật Bán Hàng (T11/2024)</h2>
          <h3>Mô tả sơ bộ công việc:</h3>
          <ul>
            <li>
              - Bán hàng, Tư vấn, Hỗ trợ kỹ thuật cho khách hàng Online /
              Offline.
            </li>
            <li>- Bảo hành hàng hoá.</li>
          </ul>
          <h3>Điều kiện cần có:</h3>
          <ul>
            <li>
              - Học chuyên ngành liên quan đến điện tử, có kiến thức về điện tử
              cơ bản.
            </li>
            <li>- Biết sử dụng phần mềm Arduino cơ bản.</li>
            <li>- Trung thực, cẩn thận, nhanh nhẹn, đúng giờ, sức khỏe tốt.</li>
            <li>- Nam, tuổi từ 22 - 28.</li>
            <li>- Đã từng có kinh nghiệm làm việc là một lợi thế.</li>
          </ul>
          <h3>Thời gian làm việc:</h3>
          <p>- Các ngày trong tuần từ Thứ 2 đến Thứ 7, 8h00 đến 17h30.</p>
          <h3>Quyền lợi:</h3>
          <ul>
            <li>- Tăng lương hàng năm.</li>
            <li>- Hỗ trợ tiền cơm trưa.</li>
            <li>- Tiếp cận với nhiều sản phẩm, công nghệ mới.</li>
            <li>
              - Được đào tạo chuyên môn và tạo điều kiện tham gia dự án nếu có
              năng lực.
            </li>
          </ul>
          <h3>Mức lương:</h3>
          <p>
            - Lương thử việc: 5.000.000VNĐ áp dụng cho tháng đầu tiên, hai tháng
            tiếp theo tăng 1.000.000VNĐ / tháng, khởi điểm 7.000.000VNĐ, tăng
            lương hàng năm theo năng lực.
          </p>
          <h3>Địa điểm làm việc:</h3>
          <p>- 269/20 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM.</p>
          <h3>Yêu cầu hồ sơ:</h3>
          <ul>
            <li>- Giới thiệu sơ bộ về bản thân.</li>
            <li>- Hình chụp Chứng Minh / CCCD.</li>
          </ul>
          <p>
            Hồ sơ xin gửi tới email: <strong>contact.hshopvn@gmail.com</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailAdvertisePost;
