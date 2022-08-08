import React from "react";
import ShopItem from "./shopItem";
import styled from "styled-components";
import iphone1 from "../images/11pro.jpg";
import iphone2 from "../images/12pro.jpg";
import iphone3 from "../images/13pro.webp";


const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

interface CartItems {
  cartItems: never[];
  setCartItems: React.Dispatch<any>;
}

interface iphone {
  name: string;
  src: string;
  price: number;
  id: number;
}

const Items: React.FC<CartItems> = ({ cartItems, setCartItems }) => {
  const iphone: Array<iphone> = [
    {
      name: "iphone 11 pro",
      src: iphone1,
      price: 100,
      id: 1,
    },
    {
      name: "iphone 12 pro",
      src: iphone2,
      price: 36000,
      id: 2,
    },
    {
      name: "iphone 13 pro",
      src: iphone3,
      price: 41000,
      id: 2,
    },
    
    
  ];

  return (
    <Div>
      {iphone.map((iphone, i) => (
        <ShopItem
          key={i}
          iphone={iphone}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </Div>
  );
};

export default Items;
