import './Guide.css'
import qr from "../../img/qr-hshop.png";



const Guide = () => {
    return (
        <>
            <div className="container-guide">
                <h1>Hướng Dẫn Mua Hàng</h1>
                <strong><p>Các bước mua hàng Online tại Hshop.vn:</p></strong>
                <ol>
                    <li>Quý Khách nên <a href="#">Đăng Ký</a> và <a href="#">Đăng Nhập</a> tài khoản tại Hshop.vn trước khi đặt hàng để lưu đơn hàng, sử dụng các khuyến mại và không cần điền thông tin mua hàng cho các lần sau.</li>
                    <li>Quý Khách tìm kiếm và chọn món hàng mình cần mua vào giỏ hàng.</li>
                    <li>Khi đã chọn xong, Quý Khách nhấn vào <a href="#">Giỏ hàng</a> để kiểm tra hàng hóa và số lượng, có thể điều chỉnh và cập nhật số lượng tại đây.</li>
                    <li>Quý Khách nhấn nút thanh toán.</li>
                    <li>Quý Khách điền đầy đủ thông tin cá nhân, phương thức thanh toán và giao nhận hàng.</li>
                    <li>Quý Khách <span style={{ color: '#e74c3c' }}>
                        sẽ nhận được email thông báo đơn hàng, nhân viên cửa hàng sẽ gọi điện thoại cho Quý Khách để xác nhận đơn hàng và giao hàng.
                    </span></li>
                    <blockquote>
                        <p>Quý Khách nên chọn hình thức mua hàng Online tại Website để tránh những sai sót về hàng hóa và thông tin chuyển hàng, trường hợp không đặt hàng Online qua Website được Quý Khách liên hệ qua Zalo: <a href="#">Hshopvn - Điện tử và Robot</a>, xin cảm ơn Quý Khách.</p></blockquote>
                </ol>

                <strong><p>Quý Khách có thể thanh toán cho Hshop.vn qua 3 cách sau:</p></strong>
                <ol>
                    <li>Mua hàng và thanh toán trực tiếp tại Hshop.vn: <a href="#">269/20 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM (đối diện Đại học Bách Khoa TP.HCM)</a></li>
                    <li>Mua hàng Online và thanh toán cho nhân viên bưu điện khi nhận hàng qua hình thức  <strong> <a href="#"></a>   <span style={{ color: '#333399' }}> Thanh toán khi nhận hàng COD</span></strong>  (Cash On Delivery).</li>
                    <li>Mua hàng Online và <strong> <a href="#"></a>   <span style={{ color: '#333399' }}>  Chuyển khoản trước qua Ngân Hàng</span></strong> , <span style={{ color: '#e74c3c' }}>xin chỉ chuyển khoản sau khi có điện thoại xác nhận đơn hàng</span> (để đảm bảo có hàng) từ Hshop.vn. Nội dung chuyển khoản là: <strong> "Họ tên hoặc để trống"</strong>, vui lòng <span style={{ color: '#e74c3c' }}>không ghi thêm bất kỳ nội dung nào khác.</span> </li>
                </ol>

                <br />

                <p>
                    <span style={{ color: '#333399' }}>
                        <strong>***QR Code Ngân hàng MB Bank (Ngân hàng TMCP Quân Đội):</strong>
                    </span></p>
                {/* Thêm QR Code tại đây nếu có */}
                <br />
                <img src={qr} alt="" />
                <br />

                <p>Mọi thắc mắc về việc mua hàng xin Quý Khách liên hệ qua Zalo: Hshopvn - Điện tử và Robot hoặc số điện thoại: 0123.456.789 / 0123.456.789 để được hỗ trợ sớm nhất, cảm ơn quý khách đã ủng hộ Hshop.vn!</p>
            </div>
        </>
    )
}

export default Guide
