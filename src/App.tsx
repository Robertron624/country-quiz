import QuizQuestion from "./components/QuizQuestion";
import { useQuizContext } from "./hooks/useQuizContext";
import "./App.scss";
import illustration from "./assets/images/undraw_adventure_re_ncqp.svg";
import ErrorBoundary from "./errors/ErrorBoundary";
import GameOver from "./components/GameOver";

function App() {
    const { currentQuestion, appRunning } = useQuizContext();

    return (
        <ErrorBoundary>
            <div className="outer-container">
                <img
                    className="illustration"
                    src={illustration}
                    alt="a man with a earth globe to the right"
                />
                <h1>Country Quiz</h1>
                {appRunning && currentQuestion && (
                    <QuizQuestion {...currentQuestion} />
                )}

                {!appRunning && (<GameOver />)}
            </div>
        </ErrorBoundary>
    );
}

export default App;
