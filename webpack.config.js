const path = require('path');

// Objet de configuration
module.exports = {
    // Point d'entrée
    entry : '../../assets/js/app.js',

    //Permet d'actualiser à chaque changement
    watch :true,
    // 
    mode: 'development',

    // Vers quoi on exporte
    // Dans quel dossier on exporte
    output : {
        path: path.resolve('../../dist'),
        filename :'bundle.js'
    }





}