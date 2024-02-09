import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";
import products from "../data/products.json";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bestSellers = products.filter((item) => item.bestseller);
  const wallet = products.filter((product) => product.category === "wallet");
  const showNextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    const isNextBestseller = products[nextIndex].bestseller;

    if (isNextBestseller) {
      setCurrentIndex(nextIndex);
    }
  };

  const showPrevProduct = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    const isPrevBestseller = products[prevIndex].bestseller;

    if (isPrevBestseller) {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <>
      <First>
        <P>marmenio</P>
        <Link to="/shop">
          <But>Shop the collection</But>
        </Link>
      </First>
      <BestSellers>
        <TittleBest>best sellers</TittleBest>

        <Cont>
          <Button src="/assets/prev.png" onClick={showPrevProduct}></Button>
          <Item items={bestSellers[currentIndex]} setItems={undefined} />
          <Button src="/assets/next.png" onClick={showNextProduct}></Button>
        </Cont>

        <Link to="/shop">
          <ShopAll>Shop All Bags</ShopAll>
        </Link>
      </BestSellers>
      <Wallet>
        <p>women's wallets</p>
      </Wallet>
      <Wallets>
        <Item items={wallet[currentIndex]} setItems={undefined} />
      </Wallets>

      <About>
        <h6>since 2019</h6>
        <P>marmenio</P>
        <Link to="/about">
          <p>About Us</p>
        </Link>
      </About>

      <Instagram>
        <p>follow marmenio on instagram</p>
        <a href="https://www.instagram.com/marmenio___/">@marmenio_</a>
      </Instagram>
    </>
  );
}
const Instagram = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2eae8;
  color: black;
  text-transform: uppercase;
  font-size: 1.7rem;
  padding: 2rem;
  font-weight: 300;
  text-align: center;
  line-height: 3rem;
  a {
    font-size: 1.1rem;
    font-style: oblique;
    font-weight: 300;
    text-decoration: none;
    color: #bb5733;
  }
`;
const Wallets = styled.div`
  background-color: #f2eae8;
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
const Button = styled.img`
  margin-bottom: 5rem;
  width: 3rem;
  cursor: pointer;
`;
const FirstPic = styled.div`
  width: 100%;
  height: 19rem;
  /* backdrop-filter: inherit; */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  flex-direction: column;
  gap: 2rem;
`;
const About = styled.div`
  width: 100%;
  height: 14rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("/assets/story.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.4rem;
  text-decoration: underline;
  a {
    color: white;
  }
`;
const Wallet = styled(FirstPic)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("/assets/GUCCIWAL.JPG");
  margin-top: 4rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: pointer;
  backdrop-filter: inherit;
`;
const ShopAll = styled.button`
  cursor: pointer;
  border-style: none;
  background-color: transparent;
  color: #bb5733;
  font-family: "Josefin Sans";
  font-size: 1.3rem;
  font-weight: 300;
  border: 1px solid #bb5733;
  margin-top: 2rem;
  padding: 1rem 4rem;
`;
const First = styled(FirstPic)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("/assets/firstimg.png");
`;
const TittleBest = styled.p`
  font-size: 1.7rem;
  font-family: "Josefin Sans";
  color: black;
  letter-spacing: 0.3rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid black;
`;
const BestSellers = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;
const But = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 0.8rem 1.5rem;
  border-color: white;
  color: white;
  border-style: solid;
  border-width: 0.8px;
  font-family: "Josefin Sans";
  font-size: 1rem;
  font-weight: 300;
`;

const P = styled.p`
  font-family: "tsripa";
  font-size: 1.4rem;
  color: white;
`;
