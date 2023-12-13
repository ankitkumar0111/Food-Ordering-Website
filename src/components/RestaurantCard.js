import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resdata",resData);

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    deliveryTime,
    cuisines,
  } = resData;
  // } = resData?.data;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[225px] h-[415px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4 className="flex flex-wrap">{cuisines.join(",")}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

//Higher Order Components

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
