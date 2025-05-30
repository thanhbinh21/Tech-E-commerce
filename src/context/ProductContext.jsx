
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get("/apiProduct");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [keyboards, setKeyboards] = useState([]);
  const [mouses, setMouses] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [headphones, setHeadphones] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [pcs, setPcs] = useState([]);
  const [psus, setPSUs] = useState([]);
  const [vgas, setVGAs] = useState([]);
  const [heatsinks, setHeatsinks] = useState([]);

  const filtered = (category) => {
    return products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  };

  useEffect(() => {
    if (products.length > 0) {
      setKeyboards(filtered("keyboard"));
      setMouses(filtered("mouse"));
      setMonitors(filtered("monitor"));
      setLaptops(filtered("laptop"));
      setSpeakers(filtered("speaker"));
      setHeadphones(filtered("headphone"));
      setPcs(filtered("pc"));
      setPSUs(filtered("psu"));
      setVGAs(filtered("vga"));
      setHeatsinks(filtered("heatsink"));
    }
  }, [products]);
  
  return (
    <ProductContext.Provider
      value={{ 
        products, 
        keyboards, 
        laptops, 
        monitors, 
        mouses, 
        pcs, 
        headphones, 
        speakers,
        psus,
        vgas,
        heatsinks,
        isLoading,
        error,
        refreshProducts: fetchProducts 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};