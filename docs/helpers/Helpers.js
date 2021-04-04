// create
export const createSpacing = ({ margin, padding, vertical, horizontal }) => {
    const div = document.createElement('div');
    div.className = [
        margin, padding, vertical, horizontal
    ].join(' ');

    const divInner = document.createElement('div');
    divInner.innerHTML = 'Hello World'
    divInner.style.color = 'white'
    divInner.style.backgroundColor = 'deepskyblue';
    divInner.style.padding = '3px';
    divInner.style.display = 'inline-block';

    div.appendChild(divInner);
    return div;
};
