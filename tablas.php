<!DOCTYPE html>
<html>
<head>
    <title>Tabla de Multiplicar del 1 al 10</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<?php
// Función para generar la tabla de multiplicar del 1 al 10
function generarTablaMultiplicar() {
    echo "<table>";
    
    // Encabezado de la tabla (primera fila con multiplicadores)
    echo "<tr><th>x</th>";
    for ($i = 1; $i <= 10; $i++) {
        echo "<th>$i</th>";
    }
    echo "</tr>";

    // Contenido de la tabla (filas con resultados de la multiplicación)
    for ($i = 1; $i <= 10; $i++) {
        echo "<tr>";
        echo "<td><b>$i</b></td>"; // Primer celda de cada fila es el multiplicador

        for ($j = 1; $j <= 10; $j++) {
            echo "<td>" . ($i * $j) . "</td>"; // Celdas con el producto de la multiplicación
        }
        echo "</tr>";
    }

    echo "</table>";
}

// Llamar a la función para generar la tabla
generarTablaMultiplicar();
?>

</body>
</html>