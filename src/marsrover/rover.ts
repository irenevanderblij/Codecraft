export function go(rover: Rover, instructions: string) {
  let position = rover.position;
  let direction = rover.direction;

  switch (rover.direction) {
    case 'N':
      if (instructions === 'L') {
        direction = 'W';
      } else {
        instructions === 'F' ? position[1]++ : position[1]--;
      }
      break;
    case 'E':
      if (instructions === 'L') {
        direction = 'N';
      } else {
        instructions === 'F' ? position[0]++ : position[0]--;
      }
      break;
    case 'S':
      if (instructions === 'L') {
        direction = 'E';
      } else {
        instructions === 'F' ? position[1]-- : position[1]++;
      }
      break;
    case 'W':
      if (instructions === 'L') {
        direction = 'S';
      } else {
        instructions === 'F' ? position[0]-- : position[0]++;
      }
      break;
    default:
      break;
  }

  return { ...rover, position, direction };
}

export interface Rover {
  position: [number, number];
  direction: string;
}
