import "./RestaurantsCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
const restaurantDetails = [
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/1/50471/6fa39637442e85efb64a5c0db7b31b7f_o2_featured_v2.jpg?output-format=webp",
    title: "The Gourmet Kitchen",
    rating: "4.5",
    cuisine: "French",
    avgPrice: "$45",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/5/54465/d03d6c5aaad993dd803ca77de48d4bc2_o2_featured_v2.jpg?output-format=webp",
    title: "Sushi Haven",
    rating: "4.8",
    cuisine: "Japanese",
    avgPrice: "$35",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/4/50574/eeceb6b37200a6f510d9b1406f5ad220_o2_featured_v2.jpg?output-format=webp",
    title: "Pasta Paradise",
    rating: "4.3",
    cuisine: "Italian",
    avgPrice: "$30",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/5/50715/011d3ade7fbf4a5033ac331087f0f90b_o2_featured_v2.jpg?output-format=webp",
    title: "Taco Fiesta",
    rating: "4.7",
    cuisine: "Mexican",
    avgPrice: "$20",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg?output-format=webp",
    title: "Vegan Delight",
    rating: "4.6",
    cuisine: "Vegan",
    avgPrice: "$25",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/4/50714/be10cc13e7d64fdde687a3ad10795b88_o2_featured_v2.jpg?output-format=webp",
    title: "Indian Spice",
    rating: "4.2",
    cuisine: "Indian",
    avgPrice: "$22",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/8/51418/4833d1ca366697d553e096c9cdb625b6_o2_featured_v2.jpg?output-format=webp",
    title: "Burger Junction",
    rating: "4.4",
    cuisine: "American",
    avgPrice: "$18",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/5/61555/96bb2a4261a76f702bc8032c66526b49_o2_featured_v2.jpg",
    title: "The Seafood Shack",
    rating: "4.6",
    cuisine: "Seafood",
    avgPrice: "$40",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/8/19967908/d26a19eb9a008f75323c09ed12ef25a6_o2_featured_v2.jpg?output-format=webp",
    title: "Spice Route",
    rating: "4.1",
    cuisine: "Thai",
    avgPrice: "$28",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/8/19967908/d26a19eb9a008f75323c09ed12ef25a6_o2_featured_v2.jpg?output-format=webp",
    title: "Spice Route",
    rating: "4.1",
    cuisine: "Thai",
    avgPrice: "$28",
  }
];


function RestaurantsCards() {
  return (
    <div className="restaurant-component">
      <div className="container-fluid">
        <div className="row text-center">
          { 
              restaurantDetails.map(restaurantDetails=>{
                return <div className="col-md-4 mt-3">
           
                <RestaurantCard restaurantDetails={restaurantDetails}/>
          
          </div>})
}
        </div>
      </div>
    </div>
  );
}
function RestaurantCard({restaurantDetails}){

  return <div className="card">
    <div className="card-body">
      <img className="restaurant-card" src={restaurantDetails.img} alt="" />
    </div>
    <div className="card-footer">
  <div className="title-details">
    <div> {restaurantDetails.title}</div>
    <div><span class="badge text-bg-success">{restaurantDetails.rating}<FontAwesomeIcon className="gps-icon rating" icon={faStar} /></span>  </div>
   
    </div>
  <div>{restaurantDetails.cuisine} {restaurantDetails.avgPrice}</div>

    </div>
  </div>

}
export default RestaurantsCards;
