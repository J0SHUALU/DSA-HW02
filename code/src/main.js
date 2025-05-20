// main.js
// Handles file reading, user input, and invoking SparseMatrix operations

const fs = require("fs");
const readline = require("readline");
const SparseMatrix = require("./SparseMatrix");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function for prompting input
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

(async () => {
  try {
    console.log("Sparse Matrix Operation Tool\n===============================\n");

    const operation = await ask("Choose operation (add/subtract/multiply): ");

    if (!['add', 'subtract', 'multiply'].includes(operation)) {
      console.log("Invalid operation");
      rl.close();
      return;
    }

    const path1 = await ask("Enter path to first matrix file: ");
    const path2 = await ask("Enter path to second matrix file: ");

    const matrixData1 = fs.readFileSync(path1, 'utf8');
    const matrixData2 = fs.readFileSync(path2, 'utf8');

    const A = SparseMatrix.fromFileContent(matrixData1);
    const B = SparseMatrix.fromFileContent(matrixData2);

    let result;
    switch (operation) {
      case 'add':
        result = A.add(B);
        break;
      case 'subtract':
        result = A.subtract(B);
        break;
      case 'multiply':
        result = A.multiply(B);
        break;
    }

    const output = result.toString();
    const outPath = `result_${operation}.txt`;
    fs.writeFileSync(outPath, output);
    console.log(`\n✅ Operation complete. Result saved to: ${outPath}`);

  } catch (err) {
    console.error("\n❌ Error:", err.message);
  } finally {
    rl.close();
  }
})();
