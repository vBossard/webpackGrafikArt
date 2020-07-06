// Importer les propriétés
import {log,log2} from './log.js'


//Mettre JQuery
document.getElementById('button').addEventListener('click', function (){
    // Lazt loader JQUERY
    import('jquery').then((jquery) => {
        let $ = jquery.default;
        $('body').css('backgroundColor', 'blue')
    })
    
})

log("Salut ca va ?");
log2("Re salut tout le monde");



// Importer tout comme un objet
//import * as obj from './log.js'
//console.log(obj)