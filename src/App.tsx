import QuizQuestion from "./components/QuizQuestion";
import { useQuizContext } from "./hooks/useQuizContext";
import "./App.scss";
import illustration from "./assets/images/undraw_adventure_re_ncqp.svg";

// const mockQuestion: Question = {
//     id: 1,
//     type: "capital",
//     options: ["Argentina", "Brazil", "Chile", "Colombia"],
//     correctAnswer: "Argentina",
//     countryCapital: "Buenos Aires",
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
        <div className="outer-container">
            <img
                className="illustration"
                src={illustration}
                alt="a man with a earth globe to the right"
            />
            <h1>Country Quiz</h1>
            <QuizQuestion {...currentQuestion} />
        </div>
    );
}

export default App;
