// Script Start
document.addEventListener('DOMContentLoaded', function() {

    // Instenciation des éléments
    const body = document.querySelector('body'); // récupère l'élément body

        const div = document.createElement('div'); // crée un élément div
        div.classList.add('container'); // ajoute une classe à l'élément div

            const p = document.createElement('p'); // crée un élément p

    const h1 = document.createElement('h1'); // crée un élément h1

    const h2 = document.createElement('h2'); // crée un élément h2

// HTML-CSS des éléments

// CSS du div dans le body
div.style.backgroundColor = 'black';
div.style.margin = '20px';
div.style.width = '200px';
div.style.height = '200px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';

    // HTML du p dans la div
    p.textContent = 'Bouton';
    // CSS du p dans la div
    p.style.color = 'white';
    p.style.textAlign = 'center';
    p.style.fontSize = '30px';
    p.style.pointerEvents = 'none';
    p.style.userSelect = 'none';

// HTML du h1 dans le body

// CSS du h1 dans le body
h1.style.userSelect = 'none';

// HTML du h2 dans le body

// CSS du h2 dans le body
h2.style.userSelect = 'none';
h2.style.fontSize = '32px';
h2.style.marginTop = '20px';

    // Check si la div est clické, vérifie ensuite si la div est rouge ou vert et change sa couleur en conséquence
    div.addEventListener('click', function() {
        
        if (div.style.backgroundColor === 'black') {

            body.style.backgroundColor = 'black';

            div.style.backgroundColor = 'white';

            p.style.color = 'black';

            
            h1.style.color = 'white';
            h1.textContent = 'Text en blanc';

            h2.style.color = 'white';
            h2.textContent = 'Fond en noir';


        } else {

            body.style.backgroundColor = 'white';

            div.style.backgroundColor = 'black';

            p.style.color = 'white';

            h1.style.color = 'black';
            h1.textContent = 'Text en noir';

            h2.style.color = 'black';
            h2.textContent = 'Fond en blanc';

        }

    });

    // Ajout des éléments dans le body

    // Ajout de la div dans le body
    body.appendChild(div);

        // Ajout du p dans la div
        div.appendChild(p);

    // Ajout du h1 dans le body
    body.appendChild(h1);

    // Ajout du h2 dans le body
    body.appendChild(h2);

});