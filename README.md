# [I Have 100% Coverage. How Could I Have a Regression?](https://confoo.ca/en/2024/session/i-have-100-coverage-why-did-i-have-a-regression) (ConFoo 2024 Talk)

[Slides PDF](slides-export.pdf)

[Sample code](src/divide-by.mts)
[Example Tests](tests/coverage-quirks.tes.mts)


To run the tests:
- Install Dependencies
```
npm install
```
- Run Tests
```
npm test
```
- Install Stryker
```
npm i -D stryker-cli
npx stryker init
```
- Run Stryker
```
npx stryker run
```
- Read your reports. Adapt. And Rerun


---

To start the slide show using sli.dev:

- `npm install`
- `npx slidev`
- visit http://localhost:3030

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev on [documentations](https://sli.dev/).
