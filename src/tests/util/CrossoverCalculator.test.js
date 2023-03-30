import CrossoverCalculator from "../../util/CrossoverCalculator";

test('Calculates first degree values correctly', () => {
  const calculator = new CrossoverCalculator();
  const resultFirstDegree = calculator.calculateFirstDegree(4, 4, 2500, 2500);
  expect(resultFirstDegree.c1).toBeCloseTo(15.9);
  expect(resultFirstDegree.l1).toBeCloseTo(0.2544);
});

test('Calculates second degree values correctly', () => {
  const calculator = new CrossoverCalculator();
  const resultSecondDegree = calculator.calculateSecondDegree(4, 4, 2500, 2500);
  expect(resultSecondDegree.c1).toBeCloseTo(11.3);
  expect(resultSecondDegree.l1).toBeCloseTo(0.36);
  expect(resultSecondDegree.c2).toBeCloseTo(11.3);
  expect(resultSecondDegree.l2).toBeCloseTo(0.36);
});

test('Calculates first and second degree values correctly', () => {
  const calculator = new CrossoverCalculator();
  const result = calculator.calculate(4, 4, 2500, 2500);
  expect(result.firstDegree.c1).toBeCloseTo(15.9);
  expect(result.firstDegree.l1).toBeCloseTo(0.2544);
  expect(result.secondDegree.c1).toBeCloseTo(11.3);
  expect(result.secondDegree.l1).toBeCloseTo(0.36);
  expect(result.secondDegree.c2).toBeCloseTo(11.3);
  expect(result.secondDegree.l2).toBeCloseTo(0.36);
});