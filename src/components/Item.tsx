// import styled, { keyframes } from "styled-components";

// export default function Item({ items, setItems }) {
//   if (!items || typeof items !== "object") {
//     return null;
//   }
//   const isBestSeller = items.bestseller;

//   return (
//     <Cont>
//       <Div>
//         <Container>
//           <PictureDiv>
//             {isBestSeller && <BestSell>Best Seller</BestSell>}

//             <Img src={items.picture} alt={items.name}></Img>
//           </PictureDiv>
//         </Container>
//         <ProductName>{items.name}</ProductName>
//         <Price>${items.price}.00</Price>
//       </Div>
//     </Cont>
//   );
// }

import styled, { keyframes } from "styled-components";
import React, { Dispatch, SetStateAction } from "react";

interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  bestseller: boolean;
  picture: string;
}

interface ItemProps {
  items: Item[]; // This should be an array of Item
  setItems?: Dispatch<SetStateAction<Item[]>>;
}

const Item: React.FC<ItemProps> = ({ items }) => {
  if (!items || !Array.isArray(items)) {
    // Checking if items is an array
    return null;
  }

  return (
    <Cont>
      {items.map((item) => (
        <Div key={item.id}>
          <Container>
            <PictureDiv>
              {item.bestseller && <BestSell>Best Seller</BestSell>}
              <Img src={item.picture} alt={item.name} />
            </PictureDiv>
          </Container>
          <ProductName>{item.name}</ProductName>
          <Price>${item.price}.00</Price>
        </Div>
      ))}
    </Cont>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0.5;
    transform: scale3d(0.5);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export default Item;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cont = styled.div`
  display: flex;
  text-transform: none;
  font-family: "Josefin Sans";
  justify-content: center;
  align-items: center;
  font-weight: 300;
  margin-top: 0.5rem;
`;
const Price = styled.p`
  color: #bc442c;
  font-size: 1.5rem;
  margin-top: 0;
  font-style: oblique;
  font-weight: 200;
  @media (min-width: 775px) {
    font-size: 2rem;
  }
`;
const ProductName = styled.p`
  color: black;
  font-size: 1.1rem;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
const Img = styled.img`
  width: 13rem;
  height: 15rem;
  margin: 0 11%;
  cursor: pointer;
  &:hover {
    animation: ${fadeIn} 0.9s ease forwards;
    transform: scale(0.8);
  }
  @media (min-width: 775px) {
    width: 16rem;
    height: 19rem;
    margin: 0 8%;
  }
`;
const BestSell = styled.div`
  background-color: #bc442c;
  font-size: 0.8rem;
  font-family: "Josefin Sans";
  width: fit-content;
  padding: 0.3rem 0.6rem;
  border-radius: 1rem;
  text-transform: none;
  margin: 1rem;
  @media (min-width: 775px) {
    font-size: 1.5rem;
  }
`;
const PictureDiv = styled.div`
  /* background-color: #f2eae8; */

  border-radius: 2rem;
  width: 16rem;
  height: 19rem;
  @media (min-width: 775px) {
    width: 19rem;
    height: 24rem;
    margin: 0 8%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
