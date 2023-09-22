import { createContext, useState, ReactNode } from "react";
import { Question } from "../types/AppTypes";

interface QuizContextType {
    appRunning: boolean;
    userScore: number;
    currentQuestion: Question | null;
    startQuiz: () => void;
    endQuiz: () => void;
    setUserScore: (score: number) => void;
    setCurrentQuestion: (question: Question | null) => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(
    undefined
);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [appRunning, setAppRunning] = useState<boolean>(true);
    const [userScore, setUserScore] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(
        null
    );

    const startQuiz = () => {
        setAppRunning(true);
        setUserScore(0);
        // Set your initial question here.
        // Example: setCurrentQuestion(initialQuestion);
    };

    const endQuiz = () => {
        setAppRunning(false);
    };

    return (
        <QuizContext.Provider
            value={{
                appRunning,
                userScore,
                currentQuestion,
                startQuiz,
                endQuiz,
                setUserScore,
                setCurrentQuestion,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};
