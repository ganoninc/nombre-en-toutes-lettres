'use strict';

import { NombresEnToutesLettres, exportedForTesting } from '../src/index';
const { getDigitInWrittenForm } = exportedForTesting;

describe("NombreEnToutesLettres class", () => {
    it('returns a digit in written form', () =>{
        expect(getDigitInWrittenForm(0)).toBe("zéro");
        expect(getDigitInWrittenForm(1)).toBe("un");
        expect(getDigitInWrittenForm(9)).toBe("neuf");
        
        expect(() => getDigitInWrittenForm(34)).toThrow();
        expect(() => getDigitInWrittenForm(null)).toThrow();
        expect(() => getDigitInWrittenForm("hdfkdkd")).toThrow();
        expect(() => getDigitInWrittenForm(undefined)).toThrow();
        expect(() => getDigitInWrittenForm({})).toThrow();
    });

    it('return "Hello world!"', () => {
        expect(NombresEnToutesLettres()).toBe("Hello world!");
      });
})


