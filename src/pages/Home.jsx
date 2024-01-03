import HomeCard from "../components/HomeCard";
import Slider from "../components/Slider";

const Home = () => {
  const cardInfo = [
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Wand_static_card_large.jpg?v=1649173708",
      title: "Wand Shop",
      link: "wandshop",
      category: "wand",
    },
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Trunk_card_large.gif?v=1646994755",
      title: "Trunk Station",
      link: "trunkstation",
      category: "trunk",
    },
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Robe_card_large.gif?v=1646928736",
      title: "Clothing Collection",
      link: "clothingcollection",
      category: "clothing",
    },
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Sweets_static_card_large.jpg?v=1649173724",
      title: "Sweet Trolley",
      link: "sweettrolley",
      category: "sweet",
    },
  ];

  return (
    <>

      <Slider/>
      {/* ? Card Info And Links */}
      <div className="flex gap-x-1 justify-evenly mb-5 xs flex-wrap">
        {cardInfo.map((info, index) => (
          <HomeCard key={index} {...info} />
        ))}
      </div>
    </>
  );
};

export default Home;
