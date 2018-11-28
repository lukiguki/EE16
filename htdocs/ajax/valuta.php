<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Valuta</title>
    <link rel="stylesheet" href="valuta.css">
</head>
<body>
    <div class="kontainer">
        <form action="">
            <label for="belopp">Belopp</label>
            <input type="text" id="belopp">
            <label for="valuta">Valuta</label>
            <select id="valuta">
                <option>Välj valuta</option>
                <option value="NOK">Norska Kronor</option>
                <option value="DKK">Danska Kronor</option>
                <option value="SEK">Svenska Kronor</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Brittiska Pund</option>
                <option value="JPY">Japanska Yen</option>
            </select>
            <label for="resul">Resultat</label>
            <input id="resultat" type="text">
        </form>
    </div>
    <script src="./valuta.js"></script>
</body>
</html>