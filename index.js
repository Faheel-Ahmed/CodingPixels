function generatePyramid(n, start) {
    const matrix = Array(n)
      .fill()
      .map(() => Array(2 * n - 1).fill(0));
    matrix[0][n - 1] = start;
  
    for (let i = 1; i < n; i++) {
      const offset = n - (i + 1);
      for (let j = offset; j < 2 * i + 1 + offset; j++) {
        const prevValue = j - 1 < 0 ? 0 : matrix[i - 1][j - 1];
        const nextValue = j + 1 === matrix[i].length ? 0 : matrix[i - 1][j + 1];
        const currentValue = matrix[i - 1][j];
        matrix[i][j] = prevValue + currentValue + nextValue;
      }
    }
    for (let row of matrix) {
      console.log(row.join(" ").replaceAll("0", " "));
    }
  }
  
  function main() {
    const args = process.argv
      .filter((e) => e.startsWith("--"))
      .reduce((obj, e) => {
        const item = e.replace("--", "").split("=");
        return { ...obj, [item[0]]: item[1] };
      }, {});
    generatePyramid(+args.rows, +args.start);
  }
  main();
  