import "./GameOver.scss";

import gameOverImage from "../assets/images/undraw_winners_re_wr1l.svg";
import { useQuizContext } from "../hooks/useQuizContext";

const GameOver = () => {

    const { userScore, startQuiz } = useQuizContext();

    return (
        <div className="gameover-container">
            <div className="gameover-image">
                <img src={gameOverImage} alt="two people celebrating" />
            </div>
            <div className="texts">
                <h3>Results</h3>
                <p>
                    You got <span className="score">{userScore}</span> correct answers
                </p>
            </div>
            <button onClick={startQuiz} className="try-again">
                Try again
            </button>
        </div>
    );
};

export default GameOver;
