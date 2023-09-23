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

    const [isCorrect, setisCorrect] = useState<boolean | null>(null);
    const [currentSelected, setcurrentSelected] = useState<string>("");
    const [finalAnswer, setfinalAnswer] = useState<string>("");

    const handleClick = (option: string) => {
        setcurrentSelected(option);
    };

    const handleFinalAnswer = () => {
        setfinalAnswer(currentSelected);
        setisCorrect(currentSelected === correctAnswer);
    };

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
                        } ${isCorrect === false && finalAnswer === option ? "final-answer wrong-answer" : ""} ${isCorrect === true && finalAnswer === option ? "final-answer correct-answer" : ""}`}
                    >
                        <button
                            onClick={() => {
                                handleClick(option);
                            }}
                        >
                            <span className="option-letter">
                                {mapper[index]}
                            </span>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
            {currentSelected && (
                <button
                    className="submit-btn"
                    onClick={handleFinalAnswer}
                    disabled={finalAnswer !== ""}
                >
                    Submit
                </button>
            )} 
        </div>
    );
};

export default QuizQuestion;
