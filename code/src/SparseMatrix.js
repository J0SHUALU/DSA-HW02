// SparseMatrix.js
// Implements a sparse matrix using a custom data structure (object-based map)

class SparseMatrix {
    constructor(rows = 0, cols = 0) {
        this.rows = rows;
        this.cols = cols;
        this.data = {}; // Key: "row,col" => Value: integer
    }

    // Static method to load from a file string content
    static fromFileContent(content) {
        const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');

        // Validate the first two lines for correct format
        if (!lines[0].startsWith('rows=') || !lines[1].startsWith('cols=')) {
            throw new Error("Input file has wrong format");
        }

        const numRows = parseInt(lines[0].split('=')[1]);
        const numCols = parseInt(lines[1].split('=')[1]);

        const matrix = new SparseMatrix(numRows, numCols);

        for (let i = 2; i < lines.length; i++) {
            const line = lines[i];

            // Validate each entry is in (row, col, value) format
            if (!line.startsWith('(') || !line.endsWith(')')) {
                throw new Error("Input file has wrong format");
            }

            const inside = line.slice(1, -1); // remove parentheses
            const parts = inside.split(',').map(x => x.trim());

            if (parts.length !== 3) throw new Error("Input file has wrong format");
            const [r, c, v] = parts;

            const row = parseInt(r);
            const col = parseInt(c);
            const val = parseInt(v);

            if (isNaN(row) || isNaN(col) || isNaN(val)) {
                throw new Error("Input file has wrong format");
            }

            matrix.setElement(row, col, val);
        }

        return matrix;
    }

    // Set a value at a specific location (row, col). If zero, remove it.
    setElement(row, col, value) {
        const key = `${row},${col}`;
        if (value === 0) {
            delete this.data[key];
        } else {
            this.data[key] = value;
        }
    }

    // Get a value from a specific location (default 0 if not stored)
    getElement(row, col) {
        const key = `${row},${col}`;
        return this.data[key] || 0;
    }

    // Matrix Addition
    add(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("Matrix size mismatch for addition");
        }

        const result = new SparseMatrix(this.rows, this.cols);

        for (const key in this.data) {
            result.data[key] = this.data[key];
        }

        for (const key in other.data) {
            result.data[key] = (result.data[key] || 0) + other.data[key];
            if (result.data[key] === 0) delete result.data[key];
        }

        return result;
    }

    // Matrix Subtraction
    subtract(other) {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("Matrix size mismatch for subtraction");
        }

        const result = new SparseMatrix(this.rows, this.cols);

        for (const key in this.data) {
            result.data[key] = this.data[key];
        }

        for (const key in other.data) {
            result.data[key] = (result.data[key] || 0) - other.data[key];
            if (result.data[key] === 0) delete result.data[key];
        }

        return result;
    }

    // Matrix Multiplication
    multiply(other) {
        if (this.cols !== other.rows) {
            throw new Error("Matrix size mismatch for multiplication");
        }

        const result = new SparseMatrix(this.rows, other.cols);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    const a = this.getElement(i, k);
                    const b = other.getElement(k, j);
                    sum += a * b;
                }
                if (sum !== 0) {
                    result.setElement(i, j, sum);
                }
            }
        }

        return result;
    }

    // Convert matrix back to file-style string
    toString() {
        let output = `rows=${this.rows}\ncols=${this.cols}\n`;
        for (const key in this.data) {
            const [r, c] = key.split(',');
            const val = this.data[key];
            output += `(${r}, ${c}, ${val})\n`;
        }
        return output;
    }
}

module.exports = SparseMatrix; // Export for use in other files
