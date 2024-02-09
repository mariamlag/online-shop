import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Information() {
  return (
    <Container>
      <Link to="/">
        {" "}
        <P>marmenio</P>
      </Link>

      <h1>About Us</h1>
      <Div>
        <Img src="./assets/flower marmenio.jpg" alt="" />
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          blanditiis eveniet a itaque fuga dolore alias officiis repudiandae
          optio dolores ipsa aperiam asperiores, dolorem cumque porro quisquam
          architecto. Veniam, saepe.
        </About>
      </Div>
    </Container>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
`;
const About = styled.p`
  color: black;
  text-align: center;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.7rem;
  letter-spacing: 0.05rem;
`;
const P = styled.p`
  font-family: "tsripa";
  color: #945d09;
`;
const Container = styled.div`
  background-color: #fefefe;
  color: black;
  padding: 3% 10%;
  gap: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 300;
  }
`;
