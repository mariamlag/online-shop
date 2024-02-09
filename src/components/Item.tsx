import styled from "styled-components";

export default function Item({ items, setItems }) {
  if (!items || typeof items !== "object") {
    return null;
  }
  const isBestSeller = items.bestseller;

  return (
    <Cont>
      <Div>
        <Container>
          <PictureDiv>
            {isBestSeller && <BestSell>Best Seller</BestSell>}

            <Img src={items.picture} alt={items.name}></Img>
          </PictureDiv>
        </Container>
        <ProductName>{items.name}</ProductName>
        <Price>${items.price}.00</Price>
      </Div>
    </Cont>
  );
}

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
`;
const ProductName = styled.p`
  color: black;
  font-size: 1.1rem;
`;
const Img = styled.img`
  width: 13rem;
  height: 15rem;
  margin: 0 11%;
`;
const BestSell = styled.div`
  background-color: #bc442c;
  font-size: 0.8rem;
  font-family: "Josefin Sans";
  width: fit-content;
  padding: 0.4rem 0.6rem;
  border-radius: 1rem;
  text-transform: none;
  margin: 1rem;
`;
const PictureDiv = styled.div`
  background-color: #f2eae8;

  border-radius: 2rem;
  width: 16rem;
  height: 19rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
