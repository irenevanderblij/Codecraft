import { go, Rover } from './rover';

describe('marsrover', () => {
  it.each`
    rover                                   | result
    ${{ position: [2, 2], direction: 'S' }} | ${[2, 1]}
    ${{ position: [2, 2], direction: 'N' }} | ${[2, 3]}
    ${{ position: [2, 2], direction: 'W' }} | ${[1, 2]}
    ${{ position: [2, 2], direction: 'E' }} | ${[3, 2]}
  `(
    'should move to $result when moving forward with rover: $rover',
    ({ rover, result }: { rover: Rover; result: [] }) => {
      expect(go(rover, 'F').position).toEqual(result);
    }
  );

  it.each`
    rover                                   | result
    ${{ position: [2, 2], direction: 'S' }} | ${[2, 3]}
    ${{ position: [2, 2], direction: 'N' }} | ${[2, 1]}
    ${{ position: [2, 2], direction: 'W' }} | ${[3, 2]}
    ${{ position: [2, 2], direction: 'E' }} | ${[1, 2]}
  `(
    'should move to $result when moving backward with rover: $rover',
    ({ rover, result }: { rover: Rover; result: [] }) => {
      expect(go(rover, 'B').position).toEqual(result);
    }
  );

  it.each`
    rover                                   | result
    ${{ position: [2, 2], direction: 'S' }} | ${'E'}
    ${{ position: [2, 2], direction: 'N' }} | ${'W'}
    ${{ position: [2, 2], direction: 'W' }} | ${'S'}
    ${{ position: [2, 2], direction: 'E' }} | ${'N'}
  `(
    'should turn to $result when turning $rover left',
    ({ rover, result }: { rover: Rover; result: [] }) => {
      expect(go(rover, 'L').direction).toEqual(result);
    }
  );

  it.each`
    rover                                   | result
    ${{ position: [2, 2], direction: 'S' }} | ${'W'}
    ${{ position: [2, 2], direction: 'N' }} | ${'E'}
    ${{ position: [2, 2], direction: 'W' }} | ${'N'}
    ${{ position: [2, 2], direction: 'E' }} | ${'S'}
  `(
    'should turn to $result when turning $rover right',
    ({ rover, result }: { rover: Rover; result: [] }) => {
      expect(go(rover, 'R').direction).toEqual(result);
    }
  );
});
