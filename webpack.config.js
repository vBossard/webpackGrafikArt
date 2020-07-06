const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const { config } = require('process');
// Variable d'environnement pour savoir dans lequel on est
const dev = process.env.NODE_ENV === "dev";


// Objet de configuration
let config = {
    // Point d'entrée
    entry : './assets/js/app.js',
    //Permet d'actualiser à chaque changement
    watch :dev,
    // 
    mode: 'development',
    // Vers quoi on exporte
    // Dans quel dossier on exporte
    output : {
        path: path.resolve('./dist'),
        filename :'bundle.js',
        //Pour le lazy loading
        publicPath:'./dist/'
    },
    module: {
        rules:[
            {   
                // Si il y a un fichier .js
                test:/\/.js$/,
                // Eviter de parser ces fichiers JS
                exclude: /(node_modules|bower_components)/,
                // Utiliser babel pour adapter le JS pour tout les navigateurs
                use:['babel-loader']
            }
        ]
    },
    plugins:[

    ]





}
if(!dev){
    config.plugins.push(new new UglifyJSPlugin())
}
module.exports = config;