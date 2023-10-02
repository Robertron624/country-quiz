import { useState } from "react";
import { Question } from "../types/AppTypes";
import { useQuizContext } from "../hooks/useQuizContext";
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

    const { goToNextQuestion, incrementScore, endQuiz } =
        useQuizContext();

    const handleClick = (option: string) => {
        setcurrentSelected(option);
    };

    const resetState = () => {
        setisCorrect(null);
        setcurrentSelected("");
        setfinalAnswer("");
    };

    const handleFinalAnswer = () => {
        setfinalAnswer(currentSelected);
        setisCorrect(currentSelected === correctAnswer);

        if (currentSelected === correctAnswer) {
            incrementScore();
        }
        if (finalAnswer) {
            if (!isCorrect) {

                console.log("wrong answer");
                endQuiz();
            } else {
                // move to next question
                resetState();
                goToNextQuestion();
            }
        }
    };

    return (
        <div className="question-container">
            {isFlagQuestion && (
                <div className="flag-container">
                    <img src={flagUrl} alt="flag of the country" />
                </div>
            )}
            <p>
                {isFlagQuestion
                    ? "Which country does this flag belong to?  "
                    : `${countryCapital} is the capital of`}
            </p>
            <ul role="list" className="options">
                {options?.map((option, index) => (
                    <li
                        key={option}
                        className={`option ${
                            currentSelected === option ? "selected" : ""
                        } ${
                            finalAnswer && option == correctAnswer
                                ? "correct-answer"
                                : ""
                        } ${
                            isCorrect === false && finalAnswer === option
                                ? "final-answer wrong-answer"
                                : ""
                        } ${
                            isCorrect === true && finalAnswer === option
                                ? "final-answer"
                                : ""
                        }`}
                    >
                        <button
                            disabled={finalAnswer ? true : false}
                            onClick={() => {
                                handleClick(option);
                            }}
                        >
                            <span className="option-letter">
                                {mapper[index]}
                            </span>
                            <span className="option-name">{option}</span>
                        </button>
                    </li>
                ))}
            </ul>
            {currentSelected && (
                <button className="submit-btn" onClick={handleFinalAnswer}>
                    {finalAnswer ? "Next" : "Submit"}
                </button>
            )}
        </div>
    );
};

export default QuizQuestion;
