// import { useCountries } from "./hooks/useCountries";
import { useQuizContext } from "./hooks/useQuizContext";

import "./App.scss";

function App() {
    // const countries = useCountries();

    const { appRunning } = useQuizContext();

    return (
        <>
            <h1>Hola mundo!</h1>{appRunning ? <p>App is running</p> : null}
        </>
    );
}

export default App;
