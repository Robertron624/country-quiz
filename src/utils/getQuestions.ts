import { Question } from "../types/AppTypes";
import { Country } from "../types/countryTypes";

const getQuestionFromCountry = (
    country: Country,
    otherOptions: string[],
    type: "capital" | "flag"
): Question => {
    console.log("country recieved in getQuestionFromCountry: ", country);

    const { name, capital, flags } = country;

    let countryCapital;
    let questionType = type;

    // check if the country has a capital, if we don't check this, then the capital will be undefined and will cause an error

    if (capital) {
        countryCapital = capital[0];
    } else {
        // If the country does not have a capital, then the question type will be a flag question

        countryCapital = "";
        questionType = "flag";
    }

    const question: Question = {
        id: Math.random(),
        type: questionType,
        options: [],
        correctAnswer: "",
        flagUrl: flags.png,
        countryCapital: countryCapital,
    };

    question.options = [name.common, ...otherOptions];
    question.correctAnswer = name.common;

    return question;
};

export const getQuestions = (
    countries: Country[],
    numberOfQuestions: number
): Question[] => {
    const questions: Question[] = [];

    for (let i = 0; i < numberOfQuestions; i++) {
        const randomCountryIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomCountryIndex];

        const otherOptions: string[] = [];

        while (otherOptions.length < 3) {
            const randomCountryIndex = Math.floor(
                Math.random() * countries.length
            );
            const randomCountry = countries[randomCountryIndex];

            if (otherOptions.includes(randomCountry.name.common)) {
                continue;
            } else {
                otherOptions.push(randomCountry.name.common);
            }
        }

        // Random question type with 50% chance of being a capital question or a flag question
        const questionType = Math.random() > 0.5 ? "capital" : "flag";

        const question = getQuestionFromCountry(
            randomCountry,
            otherOptions,
            questionType
        );

        questions.push(question);
    }

    return questions;
};
