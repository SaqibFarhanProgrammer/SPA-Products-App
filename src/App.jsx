import React from "react";
import { Button } from "./components/ui/button";
import Card from "./components/Mycomponents/Card";
import Navbar from "./components/Mycomponents/Navbar";
import Hero from "./components/Mycomponents/Hero";

const App = () => {
  return <div className="h-screen w-full bg-white">
    <Navbar />
    <Hero/>
    <div className="products w-full bg-zinc-500 min-h-screen">
      
    </div>

  </div>;
};

export default App;
