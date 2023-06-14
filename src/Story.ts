import { Getric } from "./Getric"

export interface AdditionalFact{
    text: string,
    cost: number,
    currency: keyof Getric
}

export interface Answer {
    text: string,
    upshot: string,
    effect: {[key in keyof Getric]: number}
}

export interface Story {
    title: string,
    exposition: {
        description: string,
        additionalFacts: AdditionalFact[]
        to: string
    },
    upshot:{
        answers: Answer[]
        to: string
    },
}

