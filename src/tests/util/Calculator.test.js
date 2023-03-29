import Calculator from "../../util/Calculator";

test('Calculates closed enclosure correctly to litres and hz', () => {
  const calculator = new Calculator();
  let resultClosed = calculator.calculateClosed(0.4, 80, 30);
  expect(Math.ceil(resultClosed.fr)).toEqual(54);
  expect(Math.ceil(resultClosed.vb)).toEqual(38);
});

test('Calculates reflex enclosure correctly to litres and hz', () => {
  const calculator = new Calculator();
  let result = calculator.calculateReflex(0.34, 136, 22);
  expect(Math.ceil(result.fb)).toEqual(26);
  expect(Math.ceil(result.f3)).toEqual(30);
  expect(Math.ceil(result.vb)).toEqual(70);
});
