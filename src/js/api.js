document.addEventListener('DOMContentLoaded', () => {
    const MONGODB_URI = ''
    fetch('./dist/data.json', {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => console.log(res))
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el); 
    }    
})