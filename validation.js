//Valider email
function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
}

function validerContact() {
    //Valeurs saisies
    var nom = document.forms["contactForm"]["nom"].value;
    var prenom = document.forms["contactForm"]["prenom"].value;
    var email = document.forms["contactForm"]["email"].value;
    var msg = document.forms["contactForm"]["msg"].value;

    //Valiation nom
    if (nom == "") {
        alert("Saisissez votre nom.");
        return false;
    }

    //Valiation prenom
    if (prenom == "") {
        alert("Saisissez votre prenom.");
        return false;
    }

    //Valiation email
    if (email == "") {
        alert("Saisissez votre email.");
        return false;
    } else if (!emailIsValid(email)) {
        alert("Saisissez un email valid.");
        return false;
    }

    //Valiation message
    if (msg == "") {
        alert("Saisissez votre message.");
        return false;
    }

    //Form validé
    alert("Message envoyé.");

}

function validerInscription() {
    //Valeurs saisies
    var nom = document.forms["inscriptionForm"]["nom"].value;
    var prenom = document.forms["inscriptionForm"]["prenom"].value;
    var email = document.forms["inscriptionForm"]["email"].value;
    var pass = document.forms["inscriptionForm"]["password"].value;

    //Valiation nom
    if (nom == "") {
        alert("Saisissez votre nom.");
        return false;
    }

    //Valiation prenom
    if (prenom == "") {
        alert("Saisissez votre prenom.");
        return false;
    }

    //Valiation email
    if (email == "") {
        alert("Saisissez votre email.");
        return false;
    } else if (!emailIsValid(email)) {
        alert("Saisissez un email valid.");
        return false;
    }

    //Valiation mot de passe
    if (pass == "") {
        alert("Saisissez votre mot de passe.");
        return false;
    } else if (pass.length < 8) {
        alert("Saisissez un mot de passe de longeur minimum 8.");
        return false;
    }

    //Form validé
    alert("Inscription réussite.");

}