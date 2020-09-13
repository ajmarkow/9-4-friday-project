# Galactic Solar System Age Calculator

_Solar System Age Calculator, September 4, 2020_

By **_AJ Markow_**

## Description

_Takes users age input, returns their age on 4 other planets in our solar system. Also returns the number of years a user has lived past average life expectancy if they are older than that life expectancy._

## Setup/Installation Requirements

1. Clone git repository to device with node.js installed.
2. Run npm install in project directory.
3. Run npm start to launch project. Index.html will open in your web browser using webpack's development server.

## Known Bugs

_No known bugs as of most recent commit on September 4, 2020_

## Support and contact details

_Email me at alexanderjmarkow@gmail.com or contact me on https://ajm.codes_

## Technologies Used

Bootstrap, CSS, Git, HTML, JavaScript, Jest, Node.js, Webpack.

### License

---

MIT License

Copyright (c) 2020 AJ Markow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2020 AJ Markow

## Specifications

Describe: Uses node.js runtime to manage dependencies, and webpack to manage packaging components.
Test: Node project compiles correctly.
Code: package.json and webback.config files are configured correctly.
Expect: Node project compiles sucessfully.

**Test Passed 10:21 AM**

---

Describe: Earthuser constructor holds earth age, sex, array with planet names and a blank array

Test: when earthuser.earthage is set to 1, value will be held and equal 1 and so on for 5 given properties

Code: function earthuser {
properties go here:
}

Expect: earthuser.earthage.toequal(1);

**5 TESTS PASSED**

---

Describe: Returns mercuryage. Mercuryage equal to (1 earth year) \* 0.24)

Test: An earthage = 1 will be converted to .24 years old

Code: mercuryAge(user.earthage = 1)

Expect: mercuryAge.toEqual(0.24)

## **Test Passed**

Describe: Refactor mercury age so one function returns planetary age pushed to an array for each of the four planets.

Test: expect(testperson.planetaryConverter()).toEqual([0.24,.62,1.88,11.86]);

Code: earthuserconstructor.planetaryConverter()

Expect: ([0.24,.62,1.88,11.86]

**Test Passed**

---

Describe: Returns life expectancy on selected planet. Subtracts years lived from life expectancy, expressed in age on selected planet, to get years remaining.

Test:

Code:

Expect:

Code needs to be written, test already has been.

---

Describe: Sets life expectancy property based on sex
on planet.

Test: sex('male') will equal 70 years for males, and 72 for females

Code: getLifeExpectancy()

Expect: maleperson.lifeExpectancy.toEqual(70)

**TEST PASSED**

---

Describe: will print results using a template literal
Test: Returns values in object inserted in sentence.
Code: printResults()
Expect: Your age on earth is (object age). Your age on Mercury, Venus, Mars and Jupiter are (planet age array). Your life expectancy is (object life expectancy). Your gender is (object gender)
**TEST PASSED**
