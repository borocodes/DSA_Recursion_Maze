/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

// My Solution
function mazeSolver(maze, index = [0, 0]) {
  //create rows and columns
  let row = index[0] // = first array
  let col = index[1] // = first element
  
  ///base case
  if (maze[row][col] === 'e') {return ""}
  
  maze[row][col] = "*";
  
  //recursive phase
    //col +1 moves to next element(R), col -1 moves to previous element(L)
  if(maze[row][col + 1] && maze[row][col +1] !== '*') {
    col++;
    return "R" + mazeSolver(maze, [row, col])
  }
  if(maze[row][col - 1] && maze[row][col -1] !== '*') {
    col--;
    return "L" + mazeSolver(maze, [row, col])
  }
  
  //row +1 moves to next array(D), row -1 moves to previous array(U)
  if(maze[row + 1] && maze[row +1][col] !== '*') {
    row++;
    return "D" + mazeSolver(maze, [row, col])
  }
  if(maze[row -1] && maze[row -1][col] !== '*') {
    row--;
    return "U" + mazeSolver(maze, [row, col])
  }
}

module.exports = mazeSolver;
