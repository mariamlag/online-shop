// import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function SingleItem({ items }) {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const selectedItem = items.find(
    (item: { id: number }) => item.id === parseInt(id)
  );

  if (!selectedItem) return <div>Item not found</div>;

  return (
    <>
      <Div>
        <Img>
          <img src={selectedItem.picture} alt={selectedItem.name} />
        </Img>
        <Information>
          {" "}
          <h2>{selectedItem.name}</h2>
          <div>
            <p>kategoria</p>

            <h3> : {selectedItem.category}</h3>
          </div>
          <p>{selectedItem.price}.00 l</p>
          <Color color={selectedItem.color}>
            <p>feri</p>
            <div></div>
          </Color>
          <Quant>
            <p>maragSia</p>
            <Box>
              <h5>{selectedItem.quantity}</h5>
            </Box>
          </Quant>
        </Information>
      </Div>
    </>
  );
}
const Color = styled.div`
  div {
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${(props) => props.color};
    border: 0.4px solid #a4a4a4;
    border-radius: 50%;
  }
  @media (min-width: 775px) {
    div {
      width: 1rem;
      height: 1rem;
    }
  }
`;
const Box = styled.div`
  h5 {
    width: 1.5rem;
    border: 0.5px solid #c3c3c3;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    font-weight: 200;
    margin: 0;
  }
  @media (min-width: 775px) {
    h5 {
      width: 2rem;
      padding: 0.3rem 0.9rem;
      font-size: 1.2rem;
    }
  }
`;
const Quant = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 2rem;
  p {
    font-size: 0.8rem;
  }
  @media (min-width: 775px) {
    p {
      font-size: 1.3rem;
    }
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 30rem;
  padding-left: 3rem;

  h2 {
    color: #4c4c4c;
    font-weight: 100;
  }
  h3 {
    font-weight: 100;
  }
  div {
    font-size: 0.8rem;
  }
  p {
    color: #4c4c4c;
  }
  @media (min-width: 775px) {
    div {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  gap: 1.5rem;
  padding: 1rem;

  /* eka cqvito g_rustv geo_grigolia_nusx tsripa litnusx arachveulebrivi_thin */
  p {
    font-family: "bolnisi";
  }
  @media (min-width: 775px) {
    flex-direction: row;
    height: 30rem;
  }
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 0.5px solid #c5c5c5;
  width: 100%;

  align-items: center;
  img {
    width: 50%;
    height: 50%;
  }
  @media (min-width: 775px) {
    border-right: 0.5px solid #c5c5c5;
    border-bottom: none;
    width: 100%;
    height: 100%;
  }
`;
// "id": 7,
// "name": "LW wallet",
// "category": "wallet",
// "color": "brown",
// "price": 119.0,
// "bestseller": false,
// "picture": "/assets/LW.png"
