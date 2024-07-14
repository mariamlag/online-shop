import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import styled from "styled-components";
import { questions } from "../../../data/qa.json";
import Translate from "../../Translate";

export default function Faq() {
  const [answersVisibility, setAnswersVisibility] = useState(
    new Array(questions.length).fill(false)
  );

  const toggleAnswerVisibility = (index: number) => {
    setAnswersVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };
  //   const [cards, setCards] = useState(questions);
  //   const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      {questions.map((card, index) => (
        <Div key={index}>
          <Article>
            <h2 onClick={() => toggleAnswerVisibility(index)}>
              <Translate str={card.question} />
            </h2>
            <ul>
              {!answersVisibility[index] && (
                <li>
                  <button onClick={() => toggleAnswerVisibility(index)}>
                    <LuPlus />
                  </button>
                </li>
              )}
              {answersVisibility[index] && (
                <li>
                  <button onClick={() => toggleAnswerVisibility(index)}>
                    <LuMinus />
                  </button>
                </li>
              )}
            </ul>
          </Article>
          <article>
            {answersVisibility[index] && <Translate str={card.answer} />}
          </article>
        </Div>
      ))}
    </>
  );
}

const Div = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  padding: 3% 5%;
  border: 1px solid #00000043;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-family: "bolnisi";
  font-size: 1.1rem;
  ul {
    list-style: none;
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "bolnisi";
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
`;
