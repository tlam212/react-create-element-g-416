import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'My Favorite Ice Cream Flavors');
const chocolate = React.createElement('li', {className: 'brown'}, 'Chocolate');
const vanilla = React.createElement('li', {className: 'cream'}, 'Vanilla');
const eggnog = React.createElement('li', {className: 'yellow'}, 'Eggnog');
const uoList = React.createElement('ul', {}, [chocolate, vanilla, eggnog]);
const container = React.createElement ('div', {}, [title, uoList]);

ReactDOM.render(container, document.getElementById('root'));

