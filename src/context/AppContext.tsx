    import { createContext, useState, useEffect, ReactNode } from "react";
    import { Question } from "../types/AppTypes";
    import { useCountries } from "../hooks/useCountries";
    import { getQuestions } from "../utils/getQuestions";

    interface QuizContextType {
        appRunning: boolean;
        userScore: number;
        currentQuestion: Question | null;
        Questions: Question[];
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
        const [appRunning, setAppRunning] = useState<boolean>(false);
        const [userScore, setUserScore] = useState<number>(0);
        const [currentQuestion, setCurrentQuestion] = useState<Question | null>(
            null
        );

        const [Questions, setQuestions] = useState<Question[]>([]);

        const {countries} = useCountries();

        useEffect(() => {

            if(countries.length > 0) {
                const questions = getQuestions(countries, 10);
                setQuestions(questions);
                setCurrentQuestion(questions[0]);
            }

        }, [countries])

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
                    Questions,
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
