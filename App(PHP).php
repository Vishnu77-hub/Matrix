<?php

function generateMatrix($size) {
    $matrix = [];
    $num = 1;
    for ($i = 0; $i < $size; $i++) {
        for ($j = 0; $j < $size; $j++) {
            $matrix[$i][$j] = $num++;
        }
    }
    return $matrix;
}

function rotateRedPart($matrix, $size) {
    $newMatrix = $matrix;
    $center = floor($size / 2);
    $redCoords = [
        [$center - 1, $center - 1], [$center - 1, $center],
        [$center, $center - 1], [$center, $center]
    ];
    
    $temp = $newMatrix[$redCoords[0][0]][$redCoords[0][1]];
    $newMatrix[$redCoords[0][0]][$redCoords[0][1]] = $newMatrix[$redCoords[2][0]][$redCoords[2][1]];
    $newMatrix[$redCoords[2][0]][$redCoords[2][1]] = $newMatrix[$redCoords[3][0]][$redCoords[3][1]];
    $newMatrix[$redCoords[3][0]][$redCoords[3][1]] = $newMatrix[$redCoords[1][0]][$redCoords[1][1]];
    $newMatrix[$redCoords[1][0]][$redCoords[1][1]] = $temp;
    
    return $newMatrix;
}

function transformMatrix($matrix, $size) {
    $newMatrix = $matrix;
    for ($i = 0; $i < $size; $i++) {
        for ($j = 0; $j < $size; $j++) {
            if ($j == 0 || $i == $size - 1 || $j == $size - 1 || $i == 0) {
                $newMatrix[$size - $j - 1][$i] = $matrix[$i][$j];
            }
        }
    }
    return rotateRedPart($newMatrix, $size);
}

$size = 6; // You can change this to 8, 10, 12, etc.
$inputMatrix = generateMatrix($size);
$outputMatrix = transformMatrix($inputMatrix, $size);

echo "<h3>Input Array ($size x $size)</h3>";
echo renderTable($inputMatrix, $size);
echo "<h3>Output Array</h3>";
echo renderTable($outputMatrix, $size);

function renderTable($matrix, $size) {
    $html = "<table border='1' cellspacing='0' cellpadding='10'>";
    for ($i = 0; $i < $size; $i++) {
        $html .= "<tr>";
        for ($j = 0; $j < $size; $j++) {
            $backgroundColor = "white";
            $color = "black";
            if ($i == 0 || $j == 0 || $i == $size - 1 || $j == $size - 1) {
                $backgroundColor = "green";
                $color = "white";
            } else if (($i >= $size / 2 - 1 && $i <= $size / 2) && ($j >= $size / 2 - 1 && $j <= $size / 2)) {
                $backgroundColor = "red";
                $color = "white";
            }
            $html .= "<td style='background:$backgroundColor; color:$color; text-align:center; font-size:18px;'>" . $matrix[$i][$j] . "</td>";
        }
        $html .= "</tr>";
    }
    $html .= "</table>";
    return $html;
}
