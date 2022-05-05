import {go, Rover} from './rover';

describe('marsrover', () => {
  it('should move forward when direction is south', () => {
    const rover: Rover = { position: [2, 2], direction: 'S' };
    expect(go(rover, 'F').position).toEqual([2, 1]);
  });

  it('should move forward when direction is north', () => {
    const rover: Rover = { position: [2, 2], direction: 'N' };
    expect(go(rover, 'F').position).toEqual([2, 3]);
  });

  it('should move forward when direction is west', () => {
    const rover: Rover = { position: [2, 2], direction: 'W' };
    expect(go(rover, 'F').position).toEqual([1, 2]);
  });

  it('should move forward when direction is east', () => {
    const rover: Rover = { position: [2, 2], direction: 'E' };
    expect(go(rover, 'F').position).toEqual([3, 2]);
  });

  it('should move backwards when direction is north', () => {
    const rover: Rover = { position: [2, 2], direction: 'N' };
    expect(go(rover, 'B').position).toEqual([2, 1]);
  });

  it('should move backwards when direction is east', () => {
    const rover: Rover = { position: [2, 2], direction: 'E' };
    expect(go(rover, 'B').position).toEqual([1, 2]);
  });

  it('should move backwards when direction is south', () => {
    const rover: Rover = { position: [2, 2], direction: 'S' };
    expect(go(rover, 'B').position).toEqual([2, 3]);
  });

  it('should move backwards when direction is west', () => {
    const rover: Rover = { position: [2, 2], direction: 'W' };
    expect(go(rover, 'B').position).toEqual([3, 2]);
  });
});