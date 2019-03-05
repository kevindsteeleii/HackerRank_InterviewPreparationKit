/*
  Given a 6 x6 2D array, arr;
  [ 
    [ 6, 2, 2, 3, 9, 0 ],
    [ 3, 2, 0, 2, 6, 5 ],
    [ 2, 1, 1, 8, 0, 9 ],
    [ 7, 9, 3, 0, 7, 8 ],
    [ 2, 9, 2, 2, 3, 5 ],
    [ 7, 3, 7, 3, 7, 2 ] 
  ]

  We define an hourglass to be a subset of values with indices falling in this pattern in arr's graphical representation:
    a b c
      d 
    e f g

  There are 16  hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.
  
  For example, given this 2D array:

  [ 
    [ 6, 2, 2, 3, 9, 0 ],
    [ 3, 2, 0, 2, 6, 5 ],
    [ 2, 1, 1, 8, 0, 9 ],
    [ 7, 9, 3, 0, 7, 8 ],
    [ 2, 9, 2, 2, 3, 5 ],
    [ 7, 3, 7, 3, 7, 2 ] 
  ]

  The max hourglass' sum is 45. It's hourglass looks like this:
  7  9  3
     9  
  7  3  7
*/

function hourglassSum(arr) {
    let row = 0;
    let col = 0;
    let max;

    for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            row++;
        }
        col = i % 4 === 0 ? 1 : col + 1;
        let temp = arr[row - 1][col - 1] + arr[row - 1][col] + arr[row - 1][col + 1] +
            arr[row][col] + arr[row + 1][col - 1] + arr[row + 1][col]
            + arr[row + 1][col + 1];

        max = max === undefined ? temp : max;

        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// SECTION: Helper functions I built to make this easier to do
// this one made it easier to figure out a linear approach w/ some logic gates
function makeGrid(rows, cols) {
  const grid = [];
  let col = 0;
  for (let i = 0; i < rows * cols; i++) {
      if(i%cols === 0) {
          col = i === 0 ? 0: col + 1;
          grid[col] = [];
      }
      grid[col].push(Math.floor(Math.random()*10));
  }
  return grid;
}

// gets a single hourglass' sum
function hourGlassValue(row, col, arr) {
  return arr[row-1][col-1] + arr[row-1][col] + arr[row-1][col+1] + arr[row][col] + arr[row+1][col-1] + arr[row+1][col] + arr[row+1][col+1] 
}
// END:
