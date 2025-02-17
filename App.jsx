import React, { useState } from "react";

const ArrayTransformer = () => {
  const [size, setSize] = useState(6);

  const generateMatrix = (size) => {
    let matrix = [];
    let num = 1;
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(num++);
      }
      matrix.push(row);
    }
    return matrix;
  };

  const rotateRedPart = (matrix) => {
    let newMatrix = matrix.map(row => [...row]);
    let center = Math.floor(size / 2);
    let redCoords = [
      [center - 1, center - 1], [center - 1, center], [center, center - 1], [center, center]
    ];
    let temp = newMatrix[redCoords[0][0]][redCoords[0][1]];
    newMatrix[redCoords[0][0]][redCoords[0][1]] = newMatrix[redCoords[2][0]][redCoords[2][1]];
    newMatrix[redCoords[2][0]][redCoords[2][1]] = newMatrix[redCoords[3][0]][redCoords[3][1]];
    newMatrix[redCoords[3][0]][redCoords[3][1]] = newMatrix[redCoords[1][0]][redCoords[1][1]];
    newMatrix[redCoords[1][0]][redCoords[1][1]] = temp;
    return newMatrix;
  };

  const transformMatrix = (matrix) => {
    let newMatrix = matrix.map(row => [...row]);
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j === 0 || i === n - 1 || j === n - 1 || i === 0) {
          newMatrix[n - j - 1][i] = matrix[i][j];
        }
      }
    }
    return rotateRedPart(newMatrix);
  };

  const inputMatrix = generateMatrix(size);
  const outputMatrix = transformMatrix(inputMatrix);

  return (
    <div>
      <h2>Matrix Rotation Challenge</h2>
      <h3>Solve the following pre interview challenge</h3>
      <div>
        <label>Select Matrix Size:</label>
        {[6, 8, 10, 12, 14, 16, 18].map((s) => (
          <label key={s} style={{ marginRight: "10px" }}>
            <input 
              type="radio" 
              value={s} 
              checked={size === s} 
              onChange={() => setSize(s)}
            />
            {s}x{s}
          </label>
        ))}
      </div>
      <h3>Input Array ({size}x{size})</h3>
      <table>
        <tbody>
          {inputMatrix.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) => {
                let backgroundColor = "white";
                let color = "black";
                if (i === 0 || j === 0 || i === size - 1 || j === size - 1) {
                  backgroundColor = "green";
                  color = "white";
                } else if ((i >= size / 2 - 1 && i <= size / 2) && (j >= size / 2 - 1 && j <= size / 2)) {
                  backgroundColor = "red";
                  color = "white";
                }
                return (
                  <td key={j} style={{ padding: "10px", border: "1px solid black", backgroundColor, color }}>
                    {num}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Output Array</h3>
      <table>
        <tbody>
          {outputMatrix.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) => {
                let backgroundColor = "white";
                let color = "black";
                if (i === 0 || j === 0 || i === size - 1 || j === size - 1) {
                  backgroundColor = "green";
                  color = "white";
                } else if ((i >= size / 2 - 1 && i <= size / 2) && (j >= size / 2 - 1 && j <= size / 2)) {
                  backgroundColor = "red";
                  color = "white";
                }
                return (
                  <td key={j} style={{ padding: "10px", border: "1px solid black", backgroundColor, color }}>
                    {num}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  return <ArrayTransformer />;
}