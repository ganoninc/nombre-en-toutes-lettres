# Nombre en toutes lettres

A javascript library to get the french written forms of numbers.

For instance:

> **325**  ➡️  *trois cent vingt-cinq*

This javascript library is a port of an old C# class I found some years ago, when I was building a mobile app for Windows Phone 7/8 ("Nombres en toutes lettres").

## Install

```bash
npm i nombre-en-toutes-lettres
```

## Usage

This library is made of only one public function.

After importing/requiring it, it can be directly used.

It takes two parameters:

- a number [int/float/string] **(required)**
- a parameter that enables the 1990 recommandations [bool] **(optional**, default is **false)**

```javascript
import { NombresEnToutesLettres } from "nombre-en-toutes-lettres";

NombresEnToutesLettres(193954.56564, true); // "cent-quatre-vingt-treize mille neuf cent cinquante-quatre virgule cinquante-six mille cinq cent soixante-quatre"
```

## Unit tests

To run the different unit tests, run the following commands:

```bash
npm i # install Jest

npm run test # run all the tests once

npm run testInBackground # run all the tests in background, and on each file change.
```

## Copyright and license

Code released under the MIT License.
