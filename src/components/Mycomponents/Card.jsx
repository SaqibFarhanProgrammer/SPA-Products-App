import React from "react";
import { Button } from "../ui/button";

const Card = () => {
  return (
    <div>
      <div className="card bg-zinc-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end mt-10">
            <Button>
              Add To Cart
            </Button>
            <Button>
Buy Now!            </Button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
