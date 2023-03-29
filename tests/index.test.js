"use strict";

import { NombresEnToutesLettres, exportedForTesting } from "../src/index";
const {
  getDigitInWrittenForm,
  getGroupInWrittenForm,
  getLetters,
  convert,
  removeMinusSignsSurroundingMilliard,
  removeMinusSignsSurroundingMillion,
  removeMinusSignsSurroundingVirgule,
} = exportedForTesting;

describe("NombreEnToutesLettres class", () => {
  it("returns the written form of a digit", () => {
    expect(getDigitInWrittenForm(0)).toBe("zéro");
    expect(getDigitInWrittenForm(1)).toBe("un");
    expect(getDigitInWrittenForm(9)).toBe("neuf");

    expect(() => getDigitInWrittenForm(34)).toThrow();
    expect(() => getDigitInWrittenForm(null)).toThrow();
    expect(() => getDigitInWrittenForm("hdfkdkd")).toThrow();
    expect(() => getDigitInWrittenForm(undefined)).toThrow();
    expect(() => getDigitInWrittenForm({})).toThrow();
  });

  it("returns the written form of a group such as 324, 102, 999...", () => {
    expect(getGroupInWrittenForm(100)).toBe("cent");
    expect(getGroupInWrittenForm(325)).toBe("trois cent vingt-cinq");
    expect(getGroupInWrittenForm(200)).toBe("deux cents");
    expect(getGroupInWrittenForm(999)).toBe("neuf cent quatre-vingt-dix-neuf");
    expect(getGroupInWrittenForm(801)).toBe("huit cent un");
    expect(getGroupInWrittenForm(2)).toBe("deux");

    expect(() => getGroupInWrittenForm(null)).toThrow();
    expect(() => getGroupInWrittenForm("hdfkdkd")).toThrow();
    expect(() => getGroupInWrittenForm(undefined)).toThrow();
    expect(() => getGroupInWrittenForm({})).toThrow();
  });

  it("returns the written form of a number such as 203,3422 or 8664.134", () => {
    expect(convert("10345,453")).toBe(
      "dix mille trois cent quarante-cinq virgule quatre cent cinquante-trois"
    );
    expect(convert("203325.01")).toBe(
      "deux cent trois mille trois cent vingt-cinq virgule un"
    );
    expect(convert("403")).toBe("quatre cent trois");
    expect(convert("1")).toBe("un");
    expect(convert("0")).toBe("zéro");
    expect(convert("29999999,75632")).toBe(
      "vingt-neuf millions neuf cent quatre-vingt-dix-neuf mille neuf cent quatre-vingt-dix-neuf virgule soixantequinze mille six cent trente-deux"
    );

    expect(() => getLetters(null)).toThrow();
    expect(() => getLetters("hdfkdkd")).toThrow();
    expect(() => getLetters(undefined)).toThrow();
    expect(() => getLetters({})).toThrow();
  });

  it("returns the written form of a number such as 203953 or 287", () => {
    expect(getLetters(10345)).toBe("dix mille trois cent quarante-cinq");
    expect(getLetters(203325)).toBe(
      "deux cent trois mille trois cent vingt-cinq"
    );
    expect(getLetters(200)).toBe("deux cents");
    expect(getLetters(1)).toBe("un");
    expect(getLetters(0)).toBe("zéro");
    expect(getLetters(29999999)).toBe(
      "vingt-neuf millions neuf cent quatre-vingt-dix-neuf mille neuf cent quatre-vingt-dix-neuf"
    );

    expect(() => getLetters(null)).toThrow();
    expect(() => getLetters("hdfkdkd")).toThrow();
    expect(() => getLetters(undefined)).toThrow();
    expect(() => getLetters({})).toThrow();
  });

  it('removes "-" signs surrounding the "millard(s)" word', () => {
    expect(
      removeMinusSignsSurroundingMilliard(
        "quatre-milliards-cinq-cent-vingt-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
      )
    ).toBe(
      "quatre milliards cinq-cent-vingt-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
    );
    expect(
      removeMinusSignsSurroundingMilliard(
        "un-milliards-cinq-cent-vingt-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
      )
    ).toBe(
      "un milliards cinq-cent-vingt-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
    );
    expect(
      removeMinusSignsSurroundingMilliard("neuf-cent-quatre-vingt-dix-neuf")
    ).toBe("neuf-cent-quatre-vingt-dix-neuf");

    expect(() => removeMinusSignsSurroundingMilliard(null)).toThrow();
    expect(() => removeMinusSignsSurroundingMilliard(undefined)).toThrow();
    expect(() => removeMinusSignsSurroundingMilliard({})).toThrow();
  });

  it('removes "-" signs surrounding the "million(s)" word', () => {
    expect(
      removeMinusSignsSurroundingMillion(
        "quatre-milliards-cinq-cent-vingt-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
      )
    ).toBe(
      "quatre-milliards-cinq-cent-vingt-neuf millions neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
    );
    expect(
      removeMinusSignsSurroundingMillion(
        "un-milliards-cinq-cent-vingt-neuf-millions-neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
      )
    ).toBe(
      "un-milliards-cinq-cent-vingt-neuf millions neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf"
    );
    expect(
      removeMinusSignsSurroundingMillion("neuf-cent-quatre-vingt-dix-neuf")
    ).toBe("neuf-cent-quatre-vingt-dix-neuf");

    expect(() => removeMinusSignsSurroundingMillion(null)).toThrow();
    expect(() => removeMinusSignsSurroundingMillion(undefined)).toThrow();
    expect(() => removeMinusSignsSurroundingMillion({})).toThrow();
  });

  it('removes "-" signs surrounding the word "virgule"', () => {
    expect(
      removeMinusSignsSurroundingVirgule(
        "neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf-virgule-trois"
      )
    ).toBe(
      "neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf virgule trois"
    );
    expect(removeMinusSignsSurroundingVirgule("deux-virgule-vingt-trois")).toBe(
      "deux virgule vingt-trois"
    );

    expect(() => removeMinusSignsSurroundingVirgule(null)).toThrow();
    expect(() => removeMinusSignsSurroundingVirgule(undefined)).toThrow();
    expect(() => removeMinusSignsSurroundingVirgule({})).toThrow();
  });

  it('returns "Hello world!"', () => {
    expect(NombresEnToutesLettres()).toBe("Hello world!");
  });
});
