import { useContext } from "react";
import { QuizContext } from "../context/AppContext";

export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error("useQuizContext must be used within a QuizProvider");
    }
    return context;
};


// example usage:
// import { useCountries } from "./hooks/useCountries";

// use the following desctructuring inside a react component to get the context properties and methods:

// const {
//     appRunning,
//     userScore,
//     currentQuestion,
//     startQuiz,
//     endQuiz,
//     setUserScore,
//     setCurrentQuestion,
// } = useQuizContext();