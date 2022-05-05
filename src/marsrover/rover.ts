const directions = ['N', 'E', 'S', 'W'];

export function go(rover: Rover, instructions: string): Rover {
  let position = rover.position;

  if (instructions === 'L') {
    rover = left(rover);
  } else if (instructions === 'R') {
    rover = right(rover);
  } else if (instructions === 'F') {
    rover = forward(rover);
  } else {
    rover = backward(rover);
  }

  return { ...rover, position };
}

function left(rover: Rover): Rover {
  const newindex =
    (directions.indexOf(rover.direction) - 1 + directions.length) %
    directions.length;
  return { ...rover, direction: directions[newindex] };
}

function right(rover: Rover): Rover {
  const newindex =
    (directions.indexOf(rover.direction) + 1) % directions.length;
  return { ...rover, direction: directions[newindex] };
}

function forward(rover: Rover): Rover {
  let position = rover.position;
  switch (rover.direction) {
    case 'N':
      position[1]++;
      break;
    case 'E':
      position[0]++
      break;
    case 'S':
      position[1]--;
      break;
    case 'W':
      position[0]--;
      break;
    default:
      break;
  }
  return rover;
}

function backward(rover: Rover): Rover {
  let position = rover.position;
  switch (rover.direction) {
    case 'N':
      position[1]--;
      break;
    case 'E':
      position[0]--;
      break;
    case 'S':
      position[1]++;
      break;
    case 'W':
      position[0]++;
      break;
    default:
      break;
  }
  return rover;
}

export interface Rover {
  position: [number, number];
  direction: string;
}
