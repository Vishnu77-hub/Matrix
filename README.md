# Matrix
matrix of 6x6 8x8 10x10 12x12 14x14 16x16
Matrix Rotation Challenge
This project is a pre-interview challenge that visualizes the transformation of a matrix through rotation. The matrix consists of numbers arranged in a grid, where:

The outer border (green cells) rotates clockwise.
The center 2x2 red block rotates in place.
Features
✅ Users can select matrix sizes: 6x6, 8x8, 10x10, etc.
✅ The input matrix is displayed before transformation.
✅ The output matrix is displayed after transformation.
✅ Visual representation with colored cells:

🟩 Green for the outer border
🔴 Red for the center 2x2 block
How It Works
Generate Matrix: Creates a size NxN grid with sequential numbers.
Transform Matrix:
Rotates the outer border clockwise.
Rotates the center 2x2 block within itself.
Render Results: Displays both input and output matrices.
Tech Stack
React.js (State Management with useState)
JavaScript (ES6)
HTML & CSS (for matrix styling)
How to Run
Clone the repository:
bash
Copy code
git clone https://github.com/your-repo/matrix-rotation.git
cd matrix-rotation
Install dependencies:
bash
Copy code
npm install
Start the application:
bash
Copy code
npm start
Open your browser at http://localhost:3000
