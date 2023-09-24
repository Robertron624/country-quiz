// Types of country quiz app questions and answers, there are two types of questions:

// 1. Flag Question Type
// 2. Capital Question Type

// General Question Type, will be used by both flag and capital question types, options will be an array of strings, and the correct answer will be one of the options.

export interface Question {
    id?: number;
    type?: 'capital' | 'flag';
    options?: string[];
    correctAnswer?: string;
    flagUrl?: string;
    countryCapital?: string;
}