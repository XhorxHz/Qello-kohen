<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Qëllo Kohën </title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>🎯 Qëllo Kohën </h1>
    <p>Qëllo sa më afër kohës së saktë!</p>

    <div id="target">--</div>
    <div id="time">0.00</div>

    <button class="start" onclick="startGame()">Fillo</button>
    <button class="stop" onclick="stopGame()">STOP</button>
    <button class="reset" onclick="resetGame()">Restart</button>
    
    <div id="result"></div>

    <div id="score">🏆 Score: 0</div>
    <div id="history"></div>
</div>

<script src="script.js"></script>
</body>
</html>