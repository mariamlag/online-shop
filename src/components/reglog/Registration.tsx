import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  passwordRepeat: string;
};

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    navigate("/login");
    console.log(data);
  };

  return (
    <Main>
      <P>marmenio</P>
      <Div>
        <H2>Sign Up</H2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label hasError={!!errors.email}>
            <Inputs
              type="email"
              placeholder="Email address"
              id="email"
              {...register("email", {
                required: "Can't be empty",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email is invalid",
                },
              })}
              hasError={!!errors.email}
            />
            {errors.email ? <Error>{errors.email.message}</Error> : null}
          </Label>

          <Label hasError={!!errors.password}>
            <Inputs
              type="password"
              placeholder="Password"
              id="password"
              {...register("password", {
                required: "Can't be empty",
                minLength: {
                  value: 8,
                  message: "must be 8",
                },
                validate: (value) => {
                  return (
                    [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
                      pattern.test(value)
                    ) || "must inclute lower, uper, number"
                  );
                },
              })}
              hasError={!!errors.password}
            />
            {errors.password ? <Error>{errors.password.message}</Error> : null}
          </Label>
          <Label hasError={!!errors.passwordRepeat}>
            <Inputs
              type="password"
              placeholder="Repeat Password"
              id="password repeat"
              {...register("passwordRepeat", {
                required: "Can't be empty",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              hasError={!!errors.passwordRepeat}
            />
            {errors.passwordRepeat ? (
              <Error>{errors.passwordRepeat.message}</Error>
            ) : null}
          </Label>
          <Buttonn type="submit">Create an account</Buttonn>
        </Form>
        <Have>
          <p>Alread have an account?</p>
          <Link to="/login" className="link-no-underline">
            <Lo>Login</Lo>
          </Link>
        </Have>
      </Div>
    </Main>
  );
}
const breakpoints = {
  mobile: "375px",
  large: "1440px",
};
const P = styled.p`
  font-family: "tsripa";
  color: #945d09;
`;
const Label: React.ComponentType<
  React.HTMLAttributes<HTMLLabelElement> & LabelProps
> = styled.label<LabelProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ${(props) =>
    props.hasError ? "1px solid #a92525" : "1px solid #000000"};

  height: 2.5rem;
  color: white;
  width: -webkit-fill-available;
  cursor: pointer;
  @media (min-width: ${breakpoints.large}) {
    height: 4rem;
  }
`;
const Error = styled.p`
  position: relative;
  color: #a92525;
  font-size: 10px;
`;
const Div = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 12rem;
  border-radius: 10px;
  margin: 0 auto;
  /* background: var(--Semi-Dark-Blue, #83331339); */
  @media (min-width: ${breakpoints.large}) {
    width: 32.7rem;
    padding: 2.5rem;
  }
`;

const Inputs: React.FC<InputsProps> = styled.input<InputsProps>`
  background-color: transparent;
  border-style: none;
  font-family: "Outfit";
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-left: 1.6rem;
  color: #000000;
  width: 10rem;
  @media (min-width: ${breakpoints.large}) {
    font-size: 15px;
  }
  /* border-bottom: ${(props) =>
    props.hasError ? "1px solid #a92525" : "1px solid #5a698f"}; */
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 1.4rem;
  flex-direction: column;
`;
const Buttonn = styled.button`
  width: 12rem;
  height: 2.3rem;
  font-size: 12px;
  margin-top: 0.5rem;

  border-style: none;
  border-radius: 0.6rem;
  background: var(--Red, #00000096);
  color: white;
  font-family: "Josefin Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #161d2f;
  }
  @media (min-width: ${breakpoints.large}) {
    width: 27.9rem;
    height: 4.8rem;
    font-size: 15px;
    margin-top: 2.5rem;
  }
`;
const Have = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-family: "Josefin Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 2.4rem;
  color: #000000;

  margin: 1rem auto;
  @media (min-width: ${breakpoints.large}) {
    margin: 2rem auto;
    font-size: 15px;
  }
`;

const Lo = styled.p`
  color: red;
`;

const H2 = styled.h2`
  color: var(--Pure-White, #010101);
  font-family: "Josefin Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
  @media (min-width: ${breakpoints.large}) {
    margin-bottom: 4rem;
  }
`;
// const MovieIcons = styled.div`
//   cursor: pointer;
//   margin: 0 auto;
// `;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  gap: 2rem;
  @media (min-width: ${breakpoints.large}) {
    gap: 5.8rem;
    padding-top: 4.8rem;
  }
`;
