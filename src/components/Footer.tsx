import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigateItems = [
    { label: "FAQ", path: "/content/faq" },
    { label: "Privacy Policy", path: "/content/privacy" },
    { label: "Shipping & Returns", path: "/content/shipping" },
    { label: "Payment Methods", path: "/content/paymentmethods" },
  ];
  return (
    <Pos>
      <Container>
        <Link to="/">
          <Logo src="/assets/marmenioflowers.png"></Logo>
        </Link>

        <Nav>
          <li>
            <Link to="/shop" onClick={scrollToTop}>
              Shop All
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={scrollToTop}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/sale" onClick={scrollToTop}>
              Sale
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop}>
              Contact Us
            </Link>
          </li>
        </Nav>

        <Faq>
          <Nav>
            {navigateItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} onClick={scrollToTop}>
                  {item.label}{" "}
                </Link>
              </li>
            ))}
          </Nav>
        </Faq>
        <Social></Social>
        <Email>
          <h1>JOIN US!</h1>
          <Input type="text" placeholder="Email *" />
          <Button>Send</Button>
        </Email>
      </Container>
    </Pos>
  );
}
const fadeIn = keyframes`
  /* from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 0.3;
    transform: translateY(0);
  } */
`;
const Pos = styled.div`
  position: absolute;
  width: 100%;
`;
const Button = styled.button`
  width: 18rem;
  height: 3rem;
  border-style: none;
  color: #bc442c;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Josefin Sans";
  background-color: transparent;
  border: 1px solid #bc442c;
`;
const Input = styled.input`
  width: 18rem;
  border-style: none;
  font-family: "Josefin Sans";
  padding: 0.9rem 0;
  font-size: 1rem;
  font-weight: 300;
  border-bottom: 1px solid #bc442c;
`;
const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Logo = styled.img`
  width: 16rem;
  height: 6rem;
  @media (min-width: 1440px) {
    width: 19rem;
    height: 8rem;
  }
`;
const Nav = styled.ul`
  width: fit-content;
  font-weight: 200;
  line-height: 2.5rem;
  text-align: center;
  list-style: none;
  font-size: 1.4rem;
  padding: 0;

  a {
    color: black;
    &:hover {
      color: #bc442c;
      /* animation: alternate; */
      /* animation: ${fadeIn} 0.9s ease forwards; */
      /* transform: scale(1.1); */
    }
  }
  ul {
    list-style: none;
  }
  @media (min-width: 775px) {
    font-size: 1.5rem;
    flex-direction: column;
    display: flex;
    gap: 1rem;
  }
`;
const Social = styled.div``;
const Faq = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* background: rgb(206, 173, 173); */
  /* background: linear-gradient(45deg, #fdffe2 0%, #a4732e 80%); */
  background-color: #fbf9f5;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 2rem;
  color: black;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 4rem;
  }
`;
