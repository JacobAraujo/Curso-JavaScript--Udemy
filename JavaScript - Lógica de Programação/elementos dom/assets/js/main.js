function myScope(){
    const elements = [
        {tag: 'p', text: 'Frase 1'},
        {tag: 'div', text: 'Frase 2'},
        {tag: 'section', text: 'Frase 3'},
        {tag: 'footer', text: 'Frase 4'}
    ];

    const container = document.querySelector('.container');
    const div = document.createElement('div');

    for (let i = 0 ; i < elements.length ; i++){
        let {tag, text} = elements[i];
        let newElement = document.createElement(tag);
        let createdText = document.createTextNode(text);
        newElement.appendChild(createdText);
        div.appendChild(newElement);
    };

    container.appendChild(div);
}

myScope();