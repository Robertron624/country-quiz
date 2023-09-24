import QuizQuestion from "./components/QuizQuestion";
import { useQuizContext } from "./hooks/useQuizContext";
import "./App.scss";
import illustration from "./assets/images/undraw_adventure_re_ncqp.svg";
import ErrorBoundary from "./errors/ErrorBoundary";
// import { Question } from "./types/AppTypes";

// test error boundary
// const mockQuestion: Question = {
//     id: 1,
//     type: "capital",
//     options: ["Argentina", "Brazil", "Chile", "Colombia"],
//     correctAnswer: "Argentina",
//     countryCapital: "Buenos Aires",
//     error: "Error message",
// };

// const mockFlagQuestion: Question = {
//     id: 2,
//     type: "flag",
//     options: ["Argentina", "Brazil", "Chile", "Colombia"],
//     correctAnswer: "Argentina",
//     flagUrl: "https://flagcdn.com/ar.svg",
// };

function App() {
    const { currentQuestion } = useQuizContext();

    return (
        <ErrorBoundary>
            <div className="outer-container">
                <img
                    className="illustration"
                    src={illustration}
                    alt="a man with a earth globe to the right"
                />
                <h1>Country Quiz</h1>
                <QuizQuestion {...currentQuestion} />
            </div>
        </ErrorBoundary>
    );
}

export default App;
