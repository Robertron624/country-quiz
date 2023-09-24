import { Question } from "../types/AppTypes";
import { Country } from "../types/countryTypes";

const getQuestionFromCountry = (
    country: Country,
    otherOptions: string[],
    type: "capital" | "flag"
): Question => {
    const { name, capital, flag } = country;

    const question: Question = {
        id: Math.random(),
        type: type,
        options: [],
        correctAnswer: "",
        flagUrl: flag,
        countryCapital: capital[0], // results from the API are always an array, but we know that there is only one     capital, so we can just take the first element
    };

    if (question.type === "capital") {
        question.options = [capital[0], ...otherOptions];
        question.correctAnswer = capital[0];
    } else {
        question.options = [name.common, ...otherOptions];
        question.correctAnswer = name.common;
    }

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

        console.log("randomCountry: ", randomCountry)

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
