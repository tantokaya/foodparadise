import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => (
  <div className="col-6" style={{ marginBottom: 20 }}>
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <img
              src={props.restaurant.thumb}
              alt=""
              className="img-responsive"
              style={{ borderRadius: 5, width: 100 }}
            />
          </div>
          <div className="col-9">
            <h4 className="text-success" style={{ fontWeight: 800 }}>
              {props.restaurant.name}
            </h4>
            <h6>{props.restaurant.location.locality}</h6>
            <h6 className="text-muted">{props.restaurant.location.address}</h6>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <tbody>
            <tr>
              <td>Rating</td>
              <td>
                <div
                  className="btn btn-sm"
                  style={{
                    color: "white",
                    backgroundColor: `#${props.restaurant.user_rating.rating_color}`,
                    borderColor: `#${props.restaurant.user_rating.rating_color}`,
                  }}
                >
                  {`${props.restaurant.user_rating.aggregate_rating} (${props.restaurant.user_rating.rating_text})`}
                </div>
              </td>
            </tr>
            <tr>
              <td>Cuisines</td>
              <td>{props.restaurant.cuisines}</td>
            </tr>
            <tr>
              <td>Cost for two</td>
              <td>
                {props.restaurant.currency + " " + props.restaurant.average_cost_for_two}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <Link
          to={`/restaurant/${props.restaurant.id}`}
          style={{ textDecoration: "none" }}
        >
          <button type="button" className="btn btn-outline-success btn-block">
            View Restaurant Details
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default RestaurantCard;
