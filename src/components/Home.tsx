import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";
import products from "../data/products.json";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const bestSellers = products.filter((item) => item.bestseller);
  const wallet = products.find((product) => product.name === "LW wallet");
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
          <But onClick={scrollToTop}>Shop the collection</But>
        </Link>
      </First>

      <BestSellers>
        <TittleBest>best sellers</TittleBest>

        <Cont>
          <Button src="/assets/prev.png" onClick={showPrevProduct}></Button>
          {/* <Item items={bestSellers[currentIndex]} setItems={undefined} /> */}

          {windowWidth <= 775 ? (
            <Item items={[bestSellers[currentIndex]]} setItems={undefined} />
          ) : windowWidth >= 1440 ? (
            <Windoww>
              <Item items={[bestSellers[currentIndex]]} setItems={undefined} />

              <Item
                items={[bestSellers[currentIndex + 1]]}
                setItems={undefined}
              />

              <Item
                items={[bestSellers[currentIndex + 2]]}
                setItems={undefined}
              />
            </Windoww>
          ) : (
            <>
              <Item items={[bestSellers[currentIndex]]} setItems={undefined} />

              <Item
                items={[bestSellers[currentIndex + 1]]}
                setItems={undefined}
              />
            </>
          )}
          {/* <ItemsContainer>
            {bestSellers.map((item, index) => (
              <ItemContainer key={index}>
                <Item items={item} setItems={undefined} />
              </ItemContainer>
            ))}
          </ItemsContainer> */}

          <Button src="/assets/next.png" onClick={showNextProduct}></Button>
        </Cont>

        <Link to="/shop">
          <ShopAll onClick={scrollToTop}>Shop All Bags</ShopAll>
        </Link>
      </BestSellers>
      <BigDiv>
        <Wallet>
          <p>women's wallets</p>
        </Wallet>
        <Wallets>
          {wallet ? <Item items={[wallet]} /> : null}
          {/* <Item items={wallet} setItems={undefined} /> */}
        </Wallets>

        <About>
          <h6>since 2019</h6>
          <P>marmenio</P>
          <Link to="/about" onClick={scrollToTop}>
            <p>About Us</p>
          </Link>
        </About>
      </BigDiv>

      <Instagram>
        <p>follow marmenio on instagram</p>
        <a href="https://www.instagram.com/marmenio___/">@marmenio_</a>
      </Instagram>
    </>
  );
}
const fadeIn = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(0.5);
  }
  to {
    opacity: 1;
    transform: translateX(0.5);
  }
`;
const Windoww = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;
const BigDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 775px) {
    flex-wrap: wrap;
    flex-direction: inherit;
    margin-top: 3rem;
    gap: 0;
  }
`;
// const ItemsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   padding: 0 2rem;
//   gap: 1rem;
//   @media (max-width: 375px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const ItemContainer = styled.div`
//   width: 100%;
//   @media (max-width: 375px) {
//     width: calc(25% - 1rem);
//   }
// `;
const Instagram = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  @media (min-width: 775px) {
    padding: 5rem;
    font-size: 2.4rem;
    a {
      font-size: 2rem;
    }
  }
`;
const Wallets = styled.div`
  width: 100%;
  order: 2;
  @media (min-width: 775px) {
    width: 50%;
    order: 3;
    margin-top: -30rem;
  }
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
  @media (min-width: 775px) {
    display: none;
  }
`;
const FirstPic = styled.div`
  width: 100%;
  height: 19rem;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 775px) {
    height: 40rem;
  }
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
  order: 3;
  animation: ${fadeIn} 1s ease-in-out;
  @media (min-width: 775px) {
    width: 50%;
    height: 60rem;
    order: 2;
    font-size: 2.5rem;
    gap: 6rem;
  }
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
  order: 1;
  @media (min-width: 775px) {
    width: 50%;
    height: 30rem;
    margin-top: 0;
    font-size: 2rem;
  }
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
  @media (min-width: 775px) {
    font-size: 2rem;
    padding: 1.2rem 6rem;
  }
`;
const First = styled(FirstPic)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("/assets/firstimg.png");
  @media (min-width: 775px) {
    P {
      font-size: 3rem;
    }
  }
`;
const TittleBest = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
  font-family: "Josefin Sans";
  color: black;
  letter-spacing: 0.3rem;
  padding-bottom: 1rem;
  border-bottom: 0.15rem solid #000000;
  animation: ${fadeIn} 1s ease-in;
  @media (min-width: 775px) {
    font-size: 3rem;
  }
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
  @media (min-width: 775px) {
    margin-top: 2rem;
    padding: 1rem 5rem;
    font-size: 1.5rem;
  }
`;

const P = styled.p`
  font-family: "tsripa";
  font-size: 1.4rem;
  color: white;
  @media (min-width: 775px) {
    font-size: 2rem;
  }
`;
