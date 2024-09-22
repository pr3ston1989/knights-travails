const POSSIBLE_MOVES = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
];

function isValid(field) {
  const [x, y] = field;
  if (x >= 0 && x < 8 && y >= 0 && y < 8) {
    return true;
  }
  return false;
}

function knightMoves(start, end) {
  const queue = [];
  const visitedFields = new Set();

  queue.push({ position: start, moves: 0, path: [start] });
  visitedFields.add(start);

  while (queue.length !== 0) {
    let currentPosition = queue.shift();
    let [x, y] = currentPosition.position;
    for (const [diffX, diffY] of POSSIBLE_MOVES) {
      let newX = x + diffX;
      let newY = y + diffY;
      let newPosition = [newX, newY];
      if (newX === end[0] && newY === end[1]) {
        currentPosition = {
          position: newPosition,
          moves: currentPosition.moves + 1,
          path: [...currentPosition.path, newPosition],
        };
        console.log(
          `You made it in ${
            currentPosition.moves
          } move(s)! Here's your path:\n${currentPosition.path.join("\n")}`
        );
        return currentPosition;
      } else if (isValid(newPosition) && !visitedFields.has(newPosition)) {
        visitedFields.add(newPosition);
        queue.push({
          position: newPosition,
          moves: currentPosition.moves + 1,
          path: [...currentPosition.path, newPosition],
        });
      }
    }
  }
}

knightMoves([3, 3], [0, 0]);
