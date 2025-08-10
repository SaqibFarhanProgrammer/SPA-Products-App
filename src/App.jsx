import React, { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Mycomponents/Navbar";
import Hero from "./components/Mycomponents/Hero";
import Card from "./components/Mycomponents/Card";

const App = () => {
  const [products, setproducts] = useState([]);

  const getdata = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproducts(data);
  };

  useEffect(() => {
    getdata();
  }, []);
  console.log(products);

  return (
    <div className="h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <div className="products w-full bg-black min-h-screen">
        <div className="text">
          <h1 className="text-5xl text-start p-10 text-white">Products</h1>
        </div>
        <div className="cards p-10 flex flex-wrap gap-15">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
