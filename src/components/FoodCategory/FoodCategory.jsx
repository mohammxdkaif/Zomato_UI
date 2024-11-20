import "./FoodCategory.css";
function FoodCategory() {
  const foods = [
    {
      img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      name: "Pizza",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      name: "Burger",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
      name: "Rolls",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      name: "Desserts",
    },
    {
      img: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
      name: "Sandwhich",
    },
    {
      img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      name: "Chicken",
    },
  ];
  return (
    <>
      <h1>Inspiration for your first order</h1>
      <div className="grey-div">
        {foods.map((food) => {
          return (
            <>
              <div className="food">
                <img className="image-rounded" src={food.img} alt="" />
                <h4 className="margin-text">{food.name}</h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default FoodCategory;
