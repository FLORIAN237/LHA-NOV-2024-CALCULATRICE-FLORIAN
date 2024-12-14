function calculatrice() {
    // Demande les nombres à l'utilisateur
    var number1 = parseFloat(prompt(" Veuiller svp entrer le ou les premier(s) nombre en chiffre(s):"));
    var number2 = parseFloat(prompt(" Veuillez svp entrer le ou les deuxièmes nombre(s) en chiffre(s) :"));

    // Demande à l'utilisateur de choisir l'opération
    var choix = parseInt(prompt("Choisissez l'opération :\n1. Addition (+)\n2. Soustraction (-)\n3. Multiplication (*)\n4. Division (/)\n5. Modulo (%)"));

    var resultat;

    // Effectuer l'opération choisie
    switch (choix) {
        case 1: // Addition
            resultat = number1 + number2;
            alert("Résultat : " + resultat);
            break;
        case 2: // Soustraction
            resultat = number1 - number2;
            alert("Résultat : " + resultat);
            break;
        case 3: // Multiplication
            resultat = number1 * number2;
            alert("Résultat : " + resultat);
            break;
        case 4: // Division
            if (number2 !== 0) {
                resultat = number1 / number2;
                alert("Résultat : " + resultat);
            } else {
                alert("Erreur : Division par zéro impossible.");
            }
            break;
        case 5: // Modulo
            if (number2 !== 0) {
                resultat = number1 % number2;
                alert("Résultat : " + resultat);
            } else {
                alert("Erreur : Division par zéro impossible.");
            }
            break;
        default: // Choix invalide
            alert("Erreur : Opération invalide. Veuillez choisir un ou des numéro(s) en chiffre(s)");
            break;
    }
}

// Appel de la fonction calculatrice
calculatrice();