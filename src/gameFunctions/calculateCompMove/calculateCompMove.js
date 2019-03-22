import getAllWinnableLinesForBothPlayers from "./calculateCompMoveFunctions/getAllWinnableLinesForBothPlayers";
import getBestLinesForBothPlayers from "./calculateCompMoveFunctions/getBestLinesForBothPlayers";
import determineWhichPlayerHasTempo from "./calculateCompMoveFunctions/determineWhichPlayerHasTempo";
import getBestMoves from "./calculateCompMoveFunctions/getBestMoves";
import { generateIndexArr, chooseRandom } from "../helperFunctions/helperFunctions";

//calculateCompMove() takes an object with board, gridSize and turnNo and
//returns a number which is a squareIndex.  This is an optimal computer move.

const calculateCompMove = (board, gridSize, turnNo) => {
  const centerIndex = (gridSize ** 2 - 1) / 2;
  const centerValue = board[centerIndex];
  //Taking the center is always the best move if available
  if (!centerValue) {
    return centerIndex;
  }
  //A edge case that was rare enough to not be worth solving programmatically
  //and the solution is instead hardcoded
  if (gridSize === 3 && turnNo === 3) {
    if (
      [0, 8].filter(x => board[x] === "user").length === 2 ||
      [2, 6].filter(x => board[x] === "user").length === 2
    ) {
      return chooseRandom([1, 3, 5, 7], board);
    }
  }
  // Find the longest winnable lines for both players and find out who has
  // tempo.  The player that has tempo is the one who is closest to ocmpleting
  // a line without intervention from the other player.
  const {
    winnableCompLines,
    winnableUserLines
  } = getAllWinnableLinesForBothPlayers(board);
  const { bestCompLines, bestUserLines } = getBestLinesForBothPlayers(
    winnableCompLines,
    winnableUserLines,
    board
  );
  const {
    tempoPlayerLines,
    nonTempoPlayerLines
  } = determineWhichPlayerHasTempo(bestCompLines, bestUserLines, board);
  if (!tempoPlayerLines.length) {
    //there are no winnable lines so pick a random space
    return chooseRandom(generateIndexArr(board.length), board);
  }
  const bestMoves = getBestMoves(tempoPlayerLines, nonTempoPlayerLines, board);
  if (bestMoves) {
    return chooseRandom(bestMoves, board);
  } else {
    return false
  }
};

export default calculateCompMove;
