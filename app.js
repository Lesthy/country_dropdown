
function choice1(select) {
    if (select.options[select.selectedIndex].text === 'Latvian') {
        document.querySelector('.language').innerHTML = 'Sveiki'
    } else if (select.options[select.selectedIndex].text === 'Russian') {
        document.querySelector('.language').innerHTML = 'Privet'
    } else {
        document.querySelector('.language').innerHTML = 'Hello'
    }

}