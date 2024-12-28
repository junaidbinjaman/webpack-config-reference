import _ from "lodash";

document.getElementById('button1').addEventListener('click', function() {
    const el = document.getElementById('header');
    el.innerHTML = 'Hey the inner html in the header is changed';

    const listItems = ['Apple', 'Banana', 'Orange'];
    const ul = document.getElementById('shopping-list');
    _.forEach(listItems, (item) => {
        const tempEl = document.createElement('li');
        tempEl.innerHTML = item;

        ul.appendChild(tempEl);
    });
});
