export function go(rover: Rover, instructions: string) {
  let position = rover.position;
  switch (rover.direction) {
    case 'N':
      instructions === 'F' ? position[1]++ : position[1]--;
      break;
    case 'E':
      instructions === 'F' ? position[0]++ : position[0]--;
      break;
    case 'S':
      instructions === 'F' ? position[1]-- : position[1]++;
      break;
    case 'W':
      instructions === 'F' ? position[0]-- : position[0]++;
      break;
    default:
      break;
  }

  return { ...rover, position };
}

export interface Rover {
  position: [number, number];
  direction: string;
}
