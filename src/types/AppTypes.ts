// Types of country quiz app questions and answers, there are two types of questions:

// 1. Flag Question Type
// 2. Capital Question Type

// General Question Type, will be used by both flag and capital question types, options will be an array of strings, and the correct answer will be one of the options.

export interface Question {
    id: number;
    options: string[];
    correctAnswer: string;
}

// Flag Question Type, will be used by flag question type, only adds the flagUrl property to the general question type.

export interface FlagQuestion extends Question {
    flagUrl: string;
}