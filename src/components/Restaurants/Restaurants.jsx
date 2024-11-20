import "./Restaurants.css";
function Restaurants() {
  const foods = [
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png",
      name: "Meghana Foods",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/47f8ccc7ee4fa0230f9a2bbac7420648_1728976968.png",
      name: "Empire Restaurant",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
      name: "Domino's Pizza",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png",
      name: "Truffles",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726664096.png",
      name: "KFC",
    },
    {
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
      name: "McDonald's",
    },
  ];
  return (
    <>
      <div className="grey-div-new">
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

export default Restaurants;
