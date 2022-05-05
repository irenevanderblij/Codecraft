export function go(rover: Rover, instructions: string) {
  let position = rover.position;

  if (instructions === 'L') {
    rover = left(rover);
  } else {
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
  }

  return { ...rover, position };
}

function left(rover: Rover): Rover {
  const directions = ['N', 'E', 'S', 'W'];
  const newindex =
    (directions.indexOf(rover.direction) - 1 + directions.length) %
    directions.length;
  return { ...rover, direction: directions[newindex] };
}

export interface Rover {
  position: [number, number];
  direction: string;
}
