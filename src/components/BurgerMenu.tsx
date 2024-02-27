import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  const navArr = [
    { p: "Log In", endpoint: "/login" },
    { p: "About", endpoint: "/about" },
    { p: "Shop", endpoint: "/shop" },
    { p: "Sale", endpoint: "/sale" },
    { p: "Contact", endpoint: "/contact" },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {windowWidth <= 775 ? (
        <>
          <BurgerMenuIcon onClick={handleClick}>
            <Line menuOpen={menuOpen}></Line>
            <Line menuOpen={menuOpen}></Line>
            <Line menuOpen={menuOpen}></Line>
          </BurgerMenuIcon>
          <MenuItems menuOpen={menuOpen}>
            {navArr.map((navObj, index) => (
              <Link to={navObj.endpoint} key={index} onClick={closeMenu}>
                <Nav>
                  <P>{navObj.p}</P>
                </Nav>
              </Link>
            ))}
          </MenuItems>
        </>
      ) : (
        <HeaderNav>
          {navArr.map((navObj, index) => (
            <Link to={navObj.endpoint} key={index}>
              <Nav>
                <P>{navObj.p}</P>
              </Nav>
            </Link>
          ))}
        </HeaderNav>
      )}
    </>
  );
}

//     <>
//       <BurgerMenuIcon onClick={handleClick}>
//         <Line menuOpen={menuOpen}></Line>
//         <Line menuOpen={menuOpen}></Line>
//         <Line menuOpen={menuOpen}></Line>
//       </BurgerMenuIcon>
//       <MenuItems menuOpen={menuOpen}>
//         {navArr.map((navObj, index) => (
//           <Link to={navObj.endpoint} key={index} onClick={closeMenu}>
//             <Nav>
//               <P>{navObj.p}</P>
//             </Nav>
//           </Link>
//         ))}
//       </MenuItems>
//     </>
//   );
// }
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 0.3;
    transform: translateY(0);
  }
`;
const P = styled.p`
  &:hover {
    animation: ${fadeIn} 0.9s ease forwards;
    transform: scale(1.1);
  }
`;
const Nav = styled.div`
  justify-content: center;
  text-align: center;
  font-family: "Josefin Sans";
  font-weight: 300;
  letter-spacing: 0.2rem;
  line-height: 3rem;
  font-size: 1.4rem;
`;
const BurgerMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (min-width: 776px) {
    display: none;
  }
`;
const Line = styled.div<{ menuOpen: boolean }>`
  width: 1.6rem;
  height: 2px;
  background-color: #333;
  margin: 4px 0;
  transition: transform 0.3s, opacity 0.3s;

  &:first-child {
    transform: ${({ menuOpen }) =>
      menuOpen ? "rotate(45deg) translate(8px, 6.5px)" : "none"};
  }

  &:nth-child(2) {
    opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  }

  &:last-child {
    transform: ${({ menuOpen }) =>
      menuOpen ? "rotate(-45deg) translate(8px, -6.5px)" : "none"};
  }
`;

const MenuItems = styled.div<{ menuOpen: boolean }>`
  display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
  position: absolute;
  top: ${({ menuOpen }) => (menuOpen ? "5rem" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  width: 100%;
  height: auto;
  transition: top 0.3s;
  @media (min-width: 776px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  a {
    display: block;
    text-decoration: none;
    color: #000000;
  }
`;
const HeaderNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  P {
    font-size: 1.2rem;
  }
  @media (max-width: 775px) {
    display: none;
  }
  a {
    margin-right: 20px;
    text-decoration: none;
    color: #000000;
  }
`;
