import { useState } from "react";
import { Question } from "../types/AppTypes";
import "./QuizQuestion.scss";

const mapper = ["A", "B", "C", "D"];

const QuizQuestion = ({
    correctAnswer,
    options,
    type,
    flagUrl,
    countryCapital,
}: Question) => {
    const isFlagQuestion = type === "flag";

    const [isCorrect, setisCorrect] = useState(false);
    const [currentSelected, setcurrentSelected] = useState<string>(options[0]);

    return (

            <div className="question-container">
                <p>
                    {isFlagQuestion
                        ? "Which country does this flag belong to?  "
                        : `${countryCapital} is the capital of`}
                </p>
                <ul role="list" className="options">
                    {options.map((option, index) => (
                        <li
                            key={option}
                            className={`option ${
                                currentSelected === option ? "selected" : ""
                            }`}
                            onClick={() => {
                                setcurrentSelected(option);
                                setisCorrect(option === correctAnswer);
                            }}
                        >
                            <button>
                                <span className="option-letter">
                                    {mapper[index]}
                                </span>
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
    );
};

export default QuizQuestion;
