    import { createContext, useState, useEffect, ReactNode } from "react";
    import { Question } from "../types/AppTypes";
    import { useCountries } from "../hooks/useCountries";
    import { getQuestions } from "../utils/getQuestions";

    interface QuizContextType {
        appRunning: boolean;
        userScore: number;
        currentQuestion: Question | null;
        Questions: Question[];
        goToNextQuestion: () => void;
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
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

        const [Questions, setQuestions] = useState<Question[]>([]);

        const {countries} = useCountries();

        useEffect(() => {

            if(countries.length > 0) {
                const questions = getQuestions(countries, 10);
                setQuestions(questions);
                setCurrentQuestion(questions[currentQuestionIndex]);
            }

        }, [countries, currentQuestionIndex])

        const startQuiz = () => {
            setAppRunning(true);
            setUserScore(0);
            // Set your initial question here.
            // Example: setCurrentQuestion(initialQuestion);
        };

        const endQuiz = () => {
            setAppRunning(false);
        };

        const goToNextQuestion = () => {
            // ckeck if there is a next question
            if(currentQuestionIndex < Questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setCurrentQuestion(Questions[currentQuestionIndex + 1]);
            }
        };

        return (
            <QuizContext.Provider
                value={{
                    appRunning,
                    userScore,
                    currentQuestion,
                    goToNextQuestion,
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
