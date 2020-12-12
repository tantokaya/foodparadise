import React from "react";
import mainImage from "../assets/images/aneka-makanan.png";

const ImageAndWelcome = () => (
  <>
    <div className="row" style={{ marginBottom: 30 }}>
      <img src={mainImage} alt="aneka makanan" width="100%" />
    </div>
    <div className="row">
      <div className="col">
        <div className="card text-white bg-success mb-3 text-center">
          <div className="card-header">
            <h1>Welcome to FoodParadise</h1>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              The Esiest Way to Find Restaurants and Food
            </h4>
            <p className="card-text">
              You can grab information about restaurants, cafes, cuisine with
              just a few click.
            </p>
            <p className="card-text">
              Start by choosing the featured cities below, or search the cit
              name.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ImageAndWelcome;
