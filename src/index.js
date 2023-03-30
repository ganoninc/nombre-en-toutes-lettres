"use strict";

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
  MILLIARD + " de " + MILLIARD,
];

function getDigitInWrittenForm(digitAsNumber) {
  let digitInWrittenForm = null;
  if (
    digitAsNumber === null ||
    digitAsNumber === undefined ||
    isNaN(digitAsNumber)
  ) {
    throw new Error("The passed argument is not a number");
  } else if (digitAsNumber < 0 || digitAsNumber > 9) {
    throw new Error(
      "The pasased digit must be any one of the ten numbers 0 to 9"
    );
  }

  switch (digitAsNumber) {
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
function getGroupInWrittenForm(groupAsNumber) {
  if (
    groupAsNumber === null ||
    groupAsNumber === undefined ||
    isNaN(groupAsNumber)
  ) {
    throw new Error("The passed argument is not a number");
  }
  let result = "";

  if (groupAsNumber == 100) {
    result = CENT;
    return result.trim();
  }

  if (groupAsNumber > 100) {
    // If the group value > 199,  then we placed ahead to count of hundreds
    if (groupAsNumber / 100 > 1)
      result = getDigitInWrittenForm(Math.floor(groupAsNumber / 100)) + " ";

    result += CENT;
    if (groupAsNumber / 100 > 1 && groupAsNumber % 100 == 0) result += "s ";
    else result += " ";

    groupAsNumber = groupAsNumber % 100;
  }

  let tensDigit = Math.floor(groupAsNumber / 10);
  let onesDigit = groupAsNumber % 10;
  switch (tensDigit) {
    case 0:
      if (onesDigit != 0) result += getDigitInWrittenForm(onesDigit);
      break;
    case 1:
      if (onesDigit == 0) {
        result += DIX;
      } else if (onesDigit == 1) {
        result += ONZE;
      } else if (onesDigit == 2) {
        result += DOUZE;
      } else if (onesDigit == 3) {
        result += TREIZE;
      } else if (onesDigit == 4) {
        result += QUATORZE;
      } else if (onesDigit == 5) {
        result += QUINZE;
      } else if (onesDigit == 6) {
        result += SEIZE;
      } else {
        result += DIX + "-" + getDigitInWrittenForm(onesDigit);
      }
      break;
    case 2:
      result += VINGT;
      if (onesDigit == 1) result += " et";
      if (onesDigit == 1) result += " " + getDigitInWrittenForm(onesDigit);
      if (onesDigit > 1) result += "-" + getDigitInWrittenForm(onesDigit);
      if (onesDigit == 0) result += "s";
      break;
    case 3:
      result += TRENTE;
      if (onesDigit == 1) result += " et";
      if (onesDigit == 1) result += " " + getDigitInWrittenForm(onesDigit);
      if (onesDigit > 1) result += "-" + getDigitInWrittenForm(onesDigit);
      break;
    case 4:
      result += QUARANTE;
      if (onesDigit == 1) result += " et";
      if (onesDigit == 1) result += " " + getDigitInWrittenForm(onesDigit);
      if (onesDigit > 1) result += "-" + getDigitInWrittenForm(onesDigit);
      break;
    case 5:
      result += CINQUANTE;
      if (onesDigit == 1) result += " et";
      if (onesDigit == 1) result += " " + getDigitInWrittenForm(onesDigit);
      if (onesDigit > 1) result += "-" + getDigitInWrittenForm(onesDigit);
      break;
    case 6:
      result += SOIXANTE;
      if (onesDigit == 1) result += " et";
      if (onesDigit == 1) result += " " + getDigitInWrittenForm(onesDigit);
      if (onesDigit > 1) result += "-" + getDigitInWrittenForm(onesDigit);
      break;
    case 7:
      result += SOIXANTE;
      if (onesDigit == 1) result += " et";

      if (onesDigit == 0) {
        result += DIX;
      } else if (onesDigit == 1) {
        result += ONZE;
      } else if (onesDigit == 2) {
        result += DOUZE;
      } else if (onesDigit == 3) {
        result += TREIZE;
      } else if (onesDigit == 4) {
        result += QUATORZE;
      } else if (onesDigit == 5) {
        result += QUINZE;
      } else if (onesDigit == 6) {
        result += SEIZE;
      } else {
        result += DIX + "-" + getDigitInWrittenForm(onesDigit);
      }
      break;
    case 8:
      result += QUATRE + "-" + VINGT;
      if (onesDigit > 0) result += "-" + getDigitInWrittenForm(onesDigit);
      if (onesDigit == 0) result += "s";
      break;
    case 9:
      result += QUATRE + "-" + VINGT + "-";
      if (onesDigit == 1) result += " et";
      if (onesDigit == 0) {
        result += DIX;
      } else if (onesDigit == 1) {
        result += ONZE;
      } else if (onesDigit == 2) {
        result += DOUZE;
      } else if (onesDigit == 3) {
        result += TREIZE;
      } else if (onesDigit == 4) {
        result += QUATORZE;
      } else if (onesDigit == 5) {
        result += QUINZE;
      } else if (onesDigit == 6) {
        result += SEIZE;
      } else {
        result += DIX + "-" + getDigitInWrittenForm(onesDigit);
      }
      break;
  }

  return result.trim();
}

function convert(numberAsString) {
  let p1 = numberAsString.indexOf(".");
  let p2 = numberAsString.indexOf(",");

  // float
  if (p1 != -1) {
    let IntegerPart = numberAsString.substring(0, p1);
    let decimalPart = numberAsString.substring(p1 + 1);
    numberAsString =
      getLetters(IntegerPart) + " virgule " + getLetters(decimalPart);
  }
  if (p2 != -1) {
    let IntegerPart = numberAsString.substring(0, p2);
    let decimalPart = numberAsString.substring(p2 + 1);
    numberAsString =
      getLetters(IntegerPart) + " virgule " + getLetters(decimalPart);
  }

  // integer
  if (p1 == -1 && p2 == -1) {
    return getLetters(numberAsString);
  }

  return numberAsString;
}

/**
 * Returns the passed number in a written form
 *
 * For instance: 1234567890 becomes: un milliard deux cent trente quatre million cinq
 * cent soixante sept mille huit cent quatre vingt dix
 */
function getLetters(number) {
  if (number === null || number === undefined || isNaN(number)) {
    throw new Error("The passed argument is not a number");
  }
  number = parseInt(number);
  if (number === 0) return ZERO;

  let polaritySign = "";
  if (number < 0) {
    number = -number;
    polaritySign = MOINS + " ";
  }
  let result = "";
  let rang = 0;
  while (number > 0) {
    let plural = "";
    if (tab[rang] === "million" || tab[rang] === "milliard") {
      if (number % 1000 > 1) plural = "s";
    }

    // prepend result with the next group in written formn
    if (number % 1000 !== 0)
      result =
        getGroupInWrittenForm(number % 1000) +
        " " +
        tab[rang] +
        plural +
        " " +
        result;

    if (tab[rang] === "mille" && number % 1000 === 1) {
      result = result.substring(3); // removes one "un "
    }

    // move to the next group
    number = Math.floor(number / 1000);
    rang++;
  }

  result = polaritySign + result;
  return result.trim();
}

function removeMinusSignsSurroundingMilliard(numberInWrittenForm) {
  try {
    let p = numberInWrittenForm.indexOf("milliards");
    if (p !== -1) {
      numberInWrittenForm =
        numberInWrittenForm.substring(0, p - 1) +
        " " +
        numberInWrittenForm.substring(p, p + 9) +
        " " +
        numberInWrittenForm.substring(p + 10);
      return numberInWrittenForm;
    }
    p = numberInWrittenForm.indexOf("milliard");
    if (p !== -1) {
      numberInWrittenForm =
        numberInWrittenForm.substring(0, p - 1) +
        " " +
        numberInWrittenForm.substring(p, p + 8) +
        " " +
        numberInWrittenForm.substring(p + 9);
      return numberInWrittenForm;
    }
  } catch (error) {
    numberInWrittenForm = numberInWrittenForm.replace("-", " ");
  }
  return numberInWrittenForm;
}

function removeMinusSignsSurroundingMillion(numberInWrittenForm) {
  try {
    let p = numberInWrittenForm.indexOf("millions");
    if (p !== -1) {
      numberInWrittenForm =
        numberInWrittenForm.substring(0, p - 1) +
        " " +
        numberInWrittenForm.substring(p, p + 8) +
        " " +
        numberInWrittenForm.substring(p + 9);
      return numberInWrittenForm;
    }
    p = numberInWrittenForm.indexOf("million");
    if (p != -1) {
      numberInWrittenForm =
        numberInWrittenForm.substring(0, p - 1) +
        " " +
        numberInWrittenForm.substring(p, p + 7) +
        " " +
        numberInWrittenForm.substring(p + 8);
      return numberInWrittenForm;
    }
  } catch (error) {
    numberInWrittenForm = numberInWrittenForm.replace("-", " ");
  }

  return numberInWrittenForm;
}

function removeMinusSignsSurroundingVirgule(numberInWrittenForm) {
  let p = numberInWrittenForm.indexOf("-virgule-");
  if (p !== -1) {
    let s = numberInWrittenForm.split("-virgule-");
    numberInWrittenForm = s[0] + " virgule " + s[1];
  }

  return numberInWrittenForm;
}

function convertToRecommandation1990(numberInWrittenForm) {
  numberInWrittenForm = numberInWrittenForm.replace(" ", "-");

  numberInWrittenForm =
    removeMinusSignsSurroundingMilliard(numberInWrittenForm);
  numberInWrittenForm = removeMinusSignsSurroundingMillion(numberInWrittenForm);
  numberInWrittenForm = removeMinusSignsSurroundingVirgule(numberInWrittenForm);
  return numberInWrittenForm;
}

export function NombresEnToutesLettres() {
  return "Hello world!";
}

export const exportedForTesting = {
  getDigitInWrittenForm,
  getGroupInWrittenForm,
  getLetters,
  convert,
  removeMinusSignsSurroundingMilliard,
  removeMinusSignsSurroundingMillion,
  removeMinusSignsSurroundingVirgule,
  convertToRecommandation1990,
};
