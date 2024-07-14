import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Information() {
  return (
    <Container>
      <Link to="/">
        {" "}
        <P>marmenio</P>
      </Link>

      <h1>Cvens Sesaxeb</h1>
      <Div>
        <Img src="./assets/flower marmenio.jpg" alt="" />
        <About>
          marmenio aris onlain maRazia, sadac SegiZlia SeiZino SenTvis sayvareli
          nivTebi saxlidan gausvlelad, miwodeba gvaqvs saqarTvelos masStabiT.
          <br /> <br /> 2019 wlidan dRemde uamravi kmayofili momxmarebliT <br />{" "}
          Cven vzrunavT, rom TqvenTvis Sopingi iyos sasiamovno.
        </About>
      </Div>
    </Container>
  );
}
const Div = styled.div`
  font-family: "bolnisi";

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

  font-size: 1rem;
  line-height: 1.7rem;
  letter-spacing: 0.05rem;
`;
const P = styled.p`
  font-family: "tsripa";
  color: #945d09;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
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
    font-family: "bolnisi";
    font-weight: 300;
  }
`;
