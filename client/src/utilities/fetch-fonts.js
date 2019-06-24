export default function fetchFonts(){

    return fetch('https://cors-anywhere.herokuapp.com/https://fontjoy.com/api/', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            return result;
        })
}