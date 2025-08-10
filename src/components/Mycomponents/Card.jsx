import React from "react";
import { Button } from "../ui/button";
import { Slice } from "lucide-react";

const Card = ({ title, dec, price, src }) => {
  console.log(title);

  return (
    <div>
      <div className="card bg-zinc-100 w-96 shadow-sm max-h-[500px ]">
        <figure>
          <img src={src} alt="Shoes" className="h-[200px] object-cover m-2 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title.slice(0, 20)}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p> {dec.slice(0, 150)}</p>
          <div className="card-actions justify-end mt-5 flex items-center">
            <p>{price}</p>
            <Button>Add To Cart</Button>
            <Button>Buy Now! </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
