import { AdditionalFact } from "./Story";


export interface Plot {
    title: string,
    text: string,
    additionalFacts: AdditionalFact[],
    to: string
}