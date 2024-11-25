import './heading.scss';

class Heading {
    render(page_name) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'Webpack is awesome "' + page_name + '" page';
        body.appendChild(h1);
    }
}

export default Heading;
