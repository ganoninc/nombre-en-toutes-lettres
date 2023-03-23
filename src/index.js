'use strict';

const ZERO = "zéro";
const UN = "un";
const DEUX = "deux";
const TROIS = "trois";
const QUATRE = "quatre";
const CINQ = "cinq";
const SIX = "six";
const SEPT = "sept";
const HUIT = "huit";
const NEUF = "neuf";
const DIX = "dix";
const ONZE = "onze";
const DOUZE = "douze";
const TREIZE = "treize";
const QUATORZE = "quatorze";
const QUINZE = "quinze";
const SEIZE = "seize";
const VINGT = "vingt";
const TRENTE = "trente";
const QUARANTE = "quarante";
const CINQUANTE = "cinquante";
const SOIXANTE = "soixante";
const CENT = "cent";
const MILLE = "mille";
const MILLION = "million";
const MILLIARD = "milliard";
const MOINS = "moins";

const tab = [
    "",
    MILLE,
    MILLION,
    MILLIARD,
    MILLE + " " + MILLIARD,
    MILLION + " de " + MILLIARD,
    MILLIARD + " de " + MILLIARD 
];

function getDigitInWrittenForm(digitAsNumber)
{
    let digitInWrittenForm = null;
    if(digitAsNumber === null || digitAsNumber === undefined || isNaN(digitAsNumber)){
        throw new Error("The passed argument is not a number");
    }else if ((digitAsNumber < 0) || (digitAsNumber > 9)){
        throw new Error("The pasased digit must be any one of the ten numbers 0 to 9");
    }
    
    switch (digitAsNumber)
    {
        case 0:
            digitInWrittenForm = ZERO;
            break;
        case 1:
            digitInWrittenForm = UN;
            break;
        case 2:
            digitInWrittenForm = DEUX;
            break;
        case 3:
            digitInWrittenForm = TROIS;
            break;
        case 4:
            digitInWrittenForm = QUATRE;
            break;
        case 5:
            digitInWrittenForm = CINQ;
            break;
        case 6:
            digitInWrittenForm = SIX;
            break;
        case 7:
            digitInWrittenForm = SEPT;
            break;
        case 8:
            digitInWrittenForm = HUIT;
            break;
        case 9:
            digitInWrittenForm = NEUF;
            break;
    }
    return digitInWrittenForm;
}

export function NombresEnToutesLettres(){
    return "Hello world!";
}


export const exportedForTesting = {
    getDigitInWrittenForm
}