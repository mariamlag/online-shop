import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
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
          <li>
            <Link to="/faq" onClick={scrollToTop}>
              {" "}
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/privacy" onClick={scrollToTop}>
              {" "}
              Pivacy Policy
            </Link>
          </li>
          <li>
            <Link to="/shipping" onClick={scrollToTop}>
              Shipping & Returns
            </Link>
          </li>

          <li>
            <Link to="/paymentMethods" onClick={scrollToTop}>
              Payment Methods
            </Link>{" "}
          </li>
        </Nav>
      </Faq>
      <Social></Social>
      <Email>
        <h1>JOIN US!</h1>
        <Input type="text" placeholder="Email *" />
        <Button>Send</Button>
      </Email>
    </Container>
  );
}
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
  }
`;
const Social = styled.div``;
const Faq = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 2rem;
  color: black;
`;
