import Item from "./Item";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Shop({ items }: ItemsProps) {
  const totalProduct = items.length;
  return (
    <Container>
      <P>marmenio</P>
      <Information>
        <Link to={"/"}>
          <Hom>Home</Hom>
        </Link>
        <Img src="/assets/next.png" alt="" />
        <Hom>All Products</Hom>
      </Information>
      <Title>All Products</Title>
      <ProductNumber>{totalProduct} products</ProductNumber>
      <AllShop>
        {items.map((item) => (
          <Item key={item.id} items={[item]} setItems={undefined} />
        ))}
      </AllShop>
    </Container>
  );
}

const ProductNumber = styled.p`
  color: black;
  width: 90%;
  font-weight: 300;
  opacity: 0.5;
  font-size: 1rem;
  margin: 0.1rem;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
const Title = styled.h1`
  color: black;
  width: 90%;
  margin: 1rem;
  @media (min-width: 775px) {
    margin: 1.3rem;
  }
`;
const Img = styled.img`
  width: 1rem;
  height: 1rem;

  @media (min-width: 775px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.9rem;
  width: 90%;
  font-size: 1.2rem;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
const AllShop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.6rem;
  @media (min-width: 775px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;
const P = styled.p`
  font-family: "tsripa";
  color: #945d09;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
const Hom = styled.p`
  color: black;
  font-weight: 300;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
`;
