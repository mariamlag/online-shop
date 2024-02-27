import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Pos>
      <Head>
        <Link to="/">
          <Logo onClick={scrollToTop}>
            <Img src="/assets/gold.png" alt="" />
          </Logo>
        </Link>
        <BurgerMenu></BurgerMenu>
      </Head>
    </Pos>
  );
}
const Pos = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  background-color: #fbf9f5;
  @media (min-width: 775px) {
    padding: 0.1rem 1.4rem;
  }
`;
const Logo = styled.div``;
const Img = styled.img`
  width: 5rem;

  @media (min-width: 775px) {
    width: 6rem;
  }
`;
