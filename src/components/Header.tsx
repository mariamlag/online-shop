import styled from "styled-components";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Head>
        <Link to="/">
          <Logo>
            <Img src="/assets/gold.png" alt="" />
          </Logo>
        </Link>
        <BurgerMenu></BurgerMenu>
      </Head>
    </>
  );
}
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;
const Logo = styled.div``;
const Img = styled.img`
  width: 5rem;
  height: 3, 4em;
`;
