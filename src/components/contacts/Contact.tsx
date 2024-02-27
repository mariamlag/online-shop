import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <P>marmenio</P>
      <h1>Contact</h1>

      <Cont>
        <Div>
          <Img src="./assets/flower marmenio.jpg" alt="" />
          <h3>Opening Hours</h3>
          <About>
            Mon - Fri: 10am - 8pm <br /> Saturday: 11am - 6pm <br /> Sunday:
            11am - 6pm
          </About>
        </Div>
        <Div>
          <h3>Address</h3>
          <About>
            Mebrdzolta st. <br />
            Tbilisi 0101 <br />
            +995 577 425 465 <br /> <br />
            marmenioshop@gmail.com
          </About>
        </Div>
        <Div>
          <Img></Img>
          <Connected>
            <Div>
              <h2>LET'S STAY CONNECTED</h2>
              <About>
                If you have questions or special inquiries, you're welcome to
                contact me or fill out this form
              </About>
            </Div>
          </Connected>
        </Div>
      </Cont>
      <Inputs></Inputs>
    </Container>
  );
}
const Cont = styled.div`
  @media (min-width: 775px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    gap: 3rem;
  }
`;
const Inputs = styled.div``;
const Connected = styled.div``;
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 775px) {
    h3 {
      font-size: 1.8rem;
      font-weight: 300;
    }
    h2 {
      font-size: 1.7rem;
      font-weight: 300;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  @media (min-width: 775px) {
    display: none;
  }
`;
const About = styled.p`
  color: black;
  text-align: center;
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: 0.05rem;
  width: 20rem;
  @media (min-width: 775px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.9rem;
    line-height: 2.4rem;
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
    font-weight: 300;
  }
  @media (min-width: 775px) {
  }
`;
const P = styled.p`
  font-family: "tsripa";
  color: #945d09;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
