import calculateCompMove from "../../gameLogic/compMoveLogic/calculateCompMove";
import generateAllLines from "../../gameLogic/lineGeneratorFunctions/generateAllLines";
import getCenterSquareIndex from "../../gameLogic/lineGeneratorFunctions/getCenterSquareIndex";
import transformStateObj from "./transformStateObj";
import { findAllEmptySquares } from "../helperFunctions";

export const simulateGame = (firstMove, gridSize) => {
  let state;
  let movesTaken = 0;
  let initialState = {
    board: Array(gridSize ** 2).fill(null),
    turnNo: 0,
    userTurn: firstMove === "user" ? true : false,
    gameLog: [
      {
        board: Array(gridSize ** 2).fill(null),
        turnNo: 0,
        userTurn: firstMove === "user" ? true : false,
        outcome: undefined
      }
    ],
    outcome: undefined,
    gridSize
  };
  const maxMoves = gridSize ** 2;
  if (firstMove === "comp") {
    state = simulateCompMove(initialState);
    movesTaken = 1;
  } else {
    state = initialState;
  }
  for (movesTaken; movesTaken < maxMoves; movesTaken = movesTaken + 2) {
    state = simulateRandomMove(state);
    if (state.outcome !== undefined) {
      return state;
    }
    state = simulateCompMove(state);
    if (state.outcome !== undefined) {
      return state;
    }
  }
  return state;
};

const simulateRandomMove = prevState => {
  let indicesArr = Array(prevState.gridSize ** 2)
    .fill()
    .map((x, index) => index);
  let remainingSquares = findAllEmptySquares(indicesArr, prevState.board);
  let randomIndex = Math.floor(Math.random() * remainingSquares.length);
  return transformStateObj(remainingSquares[randomIndex], prevState);
};

export const simulateCompMove = prevState => {
  const centerIndex = getCenterSquareIndex(prevState.gridSize);
  const lines = generateAllLines(prevState.gridSize);
  const computerMoveIndex = calculateCompMove(
    centerIndex,
    lines.allLines,
    prevState
  );
  return transformStateObj(computerMoveIndex, prevState);
};
