# Sparse Matrix Operations in JavaScript

## 🧠 Overview

This project handles basic operations like addition, subtraction, and multiplication on large sparse matrices using plain JavaScript. 
---

## 📁 Folder Structure

```
DSA-HW02/
├── code/
│   └── src/
│       ├── main.js
│       ├── SparseMatrix.js
│       ├── result.txt
│       ├── result_add.txt
│       └── result_subtract.txt
├── sample_inputs/
│   ├── easy_sample_01_matrix1.txt
│   ├── easy_sample_01_matrix2.txt
│   ├── easy_sample_02_matrix1.txt
│   ├── easy_sample_02_matrix2.txt
│   ├── easy_sample_02_matrix3.txt
│   ├── easy_sample_02_matrix4.txt
│   ├── easy_sample_03_matrix1.txt
│   ├── easy_sample_03_matrix2.txt
│   ├── easy_sample_03_matrix3.txt
│   ├── easy_sample_04_matrix1.txt
│   ├── matrixfile1.txt
│   └── matrixfile2.txt
├── LICENSE
└── README.md
```

---

## 🔧 Features

- Custom sparse matrix representation using objects
- Efficient:
  - **Addition**
  - **Subtraction**
  - **Multiplication**
- Handles malformed input files with custom error messages
- Ignores extra whitespaces or formatting gaps
- Pure JavaScript, no external libraries

---

## 📝 File Format

Each matrix input file should follow this format:

rows=8433
cols=3180
(0, 381, -694)
(0, 128, -838)


- First two lines: number of rows and columns
- Following lines: only **non-zero entries** in `(row, column, value)` format

---

## 🚀 How to Run

### Step 1: Clone the Repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/dsa/sparse_matrix/code/src/
```

### Step 2: Make Sure You Have Node.js

Install from https://nodejs.org if not installed:

```bash
node -v
```

### Step 3: Run the Program

```bash
node main.js
```

You will be prompted:
```
Choose an operation: add, subtract, multiply
Operation: add
Enter path to first matrix file: ../../sample_inputs/matrixfile1.txt
Enter path to second matrix file: ../../sample_inputs/matrixfile2.txt
```
✅ The result is saved in result.txt inside code/src/



## ⚠️ Input Validation

This project validates inputs by checking for:

Invalid syntax (wrong brackets or float values)

Dimension mismatch (e.g., trying to add matrices of different sizes)

Multiplication shape mismatch (A.cols must equal B.rows)

If any issue occurs, you’ll get:

```bash
Error: Input file has wrong format
```
---

## 🧪 Sample Test

To test the system:

```bash
node main.js
Choose add, subtract, or multiply, then enter:

../../sample_inputs/matrix1.txt
../../sample_inputs/matrix2.txt
Output will be written to result.txt.
```
---

## 📚 Code Reference

All code written manually from scratch

No use of built-in JS libraries like Math, Array.prototype.map, etc.

Follows best practices for sparse matrix efficiency

Reusable class SparseMatrix with:
```
.getElement(row, col)

.setElement(row, col, value)

.add(otherMatrix)

.subtract(otherMatrix)

.multiply(otherMatrix)
```
---

## 🧑‍💻 Author

Name: Joshua Chukwuebuka Moses
Course: Enterprise Web Development
---

## 🏁 License

MIT License – free to reuse and modify with citation.
