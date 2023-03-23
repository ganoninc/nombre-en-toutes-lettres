'use strict';

import { NombresEnToutesLettres, exportedForTesting } from '../src/index';
const { getDigitInWrittenForm, getGroupInWrittenForm } = exportedForTesting;

describe("NombreEnToutesLettres class", () => {
    it("returns the written form of a digit", () =>{
        expect(getDigitInWrittenForm(0)).toBe("zéro");
        expect(getDigitInWrittenForm(1)).toBe("un");
        expect(getDigitInWrittenForm(9)).toBe("neuf");

        expect(() => getDigitInWrittenForm(34)).toThrow();
        expect(() => getDigitInWrittenForm(null)).toThrow();
        expect(() => getDigitInWrittenForm("hdfkdkd")).toThrow();
        expect(() => getDigitInWrittenForm(undefined)).toThrow();
        expect(() => getDigitInWrittenForm({})).toThrow();
    });

    it("returns the written form of a group such as 324, 102, 999... ", () =>{
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

    it('returns "Hello world!"', () => {
        expect(NombresEnToutesLettres()).toBe("Hello world!");
      });
})


