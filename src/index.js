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

// Return the letter representation of a group. A group is made up of
// three digits, like 123, 012, 001, 100, 101,...
function getGroupInWrittenForm(groupAsNumber)
{
    if(groupAsNumber === null || groupAsNumber === undefined || isNaN(groupAsNumber)){
        throw new Error("The passed argument is not a number");
    }
    let result = "";

    if (groupAsNumber == 100){
        result = CENT;
        return result.trim();
    }

    if (groupAsNumber > 100)
    {
        // If the group value > 199,  then we placed ahead to count of hundreds
        if (groupAsNumber / 100 > 1)
            result = getDigitInWrittenForm(Math.floor(groupAsNumber / 100)) + " ";

        result += CENT;
        if ((groupAsNumber / 100 > 1) && (groupAsNumber % 100 == 0))
            result += "s ";
        else
            result += " ";

        groupAsNumber = groupAsNumber % 100;
    }

    let tensDigit = Math.floor(groupAsNumber / 10);
    let onesDigit = groupAsNumber % 10;
    switch (tensDigit)
    {
        case 0:
            if (onesDigit != 0)
                result += getDigitInWrittenForm(onesDigit);
            break;
        case 1:
            if(onesDigit == 0)
            {
                result += DIX;
            }
            else if (onesDigit == 1)
            {
                result += ONZE;
            }
            else if(onesDigit == 2)
            {
                result += DOUZE;
            }
            else if(onesDigit == 3)
            {
                result += TREIZE;
            }
            else if(onesDigit == 4)
            {
                result += QUATORZE;
            }
            else if(onesDigit == 5)
            {
                result += QUINZE;
            }
            else if(onesDigit == 6)
            {
                result += SEIZE;
            }
            else
            {
                result += DIX + "-" + getDigitInWrittenForm(onesDigit);
            }
            break;
        case 2:
            result += VINGT;
            if (onesDigit == 1)
                result += " et";
            if (onesDigit == 1)
                result += " " + getDigitInWrittenForm(onesDigit);
            if (onesDigit > 1)
                result += "-" + getDigitInWrittenForm(onesDigit);
            if (onesDigit == 0)
                result += "s";
            break;
        case 3:
            result += TRENTE;
            if (onesDigit == 1)
                result += " et";
            if (onesDigit == 1)
                result += " " + getDigitInWrittenForm(onesDigit);
            if (onesDigit > 1)
                result += "-" + getDigitInWrittenForm(onesDigit);
            break;
        case 4:
            result += QUARANTE;
            if (onesDigit == 1)
                result += " et";
            if (onesDigit == 1)
                result += " " + getDigitInWrittenForm(onesDigit);
            if (onesDigit > 1)
                result += "-" + getDigitInWrittenForm(onesDigit);
            break;
        case 5:
            result += CINQUANTE;
            if (onesDigit == 1)
                result += " et";
            if (onesDigit == 1)
                result += " " + getDigitInWrittenForm(onesDigit);
            if (onesDigit > 1)
                result += "-" + getDigitInWrittenForm(onesDigit);
            break;
        case 6:
            result += SOIXANTE;
            if (onesDigit == 1)
                result += " et";
            if (onesDigit == 1)
                result += " " + getDigitInWrittenForm(onesDigit);
            if (onesDigit > 1)
                result += "-" + getDigitInWrittenForm(onesDigit);
            break;
        case 7:
            result += SOIXANTE;
            if (onesDigit == 1)
                result += " et";

            if (onesDigit == 0)
            {
                result += DIX;
            }
            else if (onesDigit == 1)
            {
                result += ONZE;
            }
            else if (onesDigit == 2)
            {
                result += DOUZE;
            }
            else if (onesDigit == 3)
            {
                result += TREIZE;
            }
            else if (onesDigit == 4)
            {
                result += QUATORZE;
            }
            else if (onesDigit == 5)
            {
                result += QUINZE;
            }
            else if (onesDigit == 6)
            {
                result += SEIZE;
            }
            else
            {
                result += DIX + "-" + getDigitInWrittenForm(onesDigit);
            }
            break;
        case 8:
            result += QUATRE + "-" + VINGT;
            if (onesDigit > 0)
                result += "-" + getDigitInWrittenForm(onesDigit);
            if (onesDigit == 0)
                result += "s";
            break;
        case 9:
            result += QUATRE + "-" + VINGT + "-";
                                if (onesDigit == 1)
                result += " et";
            if (onesDigit == 0)
            {
                result += DIX;
            }
            else if (onesDigit == 1)
            {
                result += ONZE;
            }
            else if (onesDigit == 2)
            {
                result += DOUZE;
            }
            else if (onesDigit == 3)
            {
                result += TREIZE;
            }
            else if (onesDigit == 4)
            {
                result += QUATORZE;
            }
            else if (onesDigit == 5)
            {
                result += QUINZE;
            }
            else if (onesDigit == 6)
            {
                result += SEIZE;
            }
            else
            {
                result += DIX + "-" + getDigitInWrittenForm(onesDigit);
            }
            break;
    }

    return result.trim();
}

export function NombresEnToutesLettres(){
    return "Hello world!";
}


export const exportedForTesting = {
    getDigitInWrittenForm,
    getGroupInWrittenForm
}