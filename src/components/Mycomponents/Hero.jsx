import React from "react";

const Hero = () => {
    return (
        <section className="bg-black text-white min-h-[60vh] flex items-center justify-center">
            <div className="max-w-2xl text-center px-4 py-16">
                <h1 className="text-4xl md:text-6xl  mb-6 tracking-tight">
                    Discover Premium Products
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Shop the latest trends with our exclusive collection. Experience quality and style in every purchase.
                </p>
                <a
                    href="#products"
                    className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default Hero;