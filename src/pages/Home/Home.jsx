import ContainerCardVip from "../../components/ContainerCardVip/ContainerCardVip"
import ContainerProduct from "../../components/ContainerProduct/ContainerProduct"
import Slider from "../../components/Slider/Slider"
import './Home.css'
import ProductNew from "../../components/ProductCard/ProductNew"

import laptop from "../../img/laptop.png";
import pc from "../../img/pc.png";
import monitor from "../../img/monitor.png";
import mouse from "../../img/mouse.png";
import keyboard from "../../img/keyboard.png";
import headphone from "../../img/headphone.png";
import speaker from "../../img/speaker.png";

const title = "Sản phẩm nổi bật"

const dataCardProduct = [
  { image: laptop, name: "Laptop", href: "/product" },
  { image: pc, name: "PC", href: "/product" },
  { image: monitor, name: "Màn hình", href: "/product" },
  { image: mouse, name: "Chuột", href: "/product" },
  { image: keyboard, name: "Bàn phím", href: "/product" },
  { image: headphone, name: "Tai nghe", href: "/product" },
  { image: speaker, name: "Loa", href: "/product" },
];

const Home = () => {

    return (
        <>
            
            <Slider></Slider>
            <div className="container-home max-w-7xl m-auto">
                <ContainerCardVip></ContainerCardVip>
                {/* <ContainerProduct title={title} data={dataCardProduct}></ContainerProduct> */}
                <ProductNew></ProductNew>
            </div>
        </>
    )
}

export default Home