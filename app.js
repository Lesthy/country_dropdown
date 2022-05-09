
function choice1(select) {
    if (select.options[select.selectedIndex].text === 'Latvian') {
        document.querySelector('.language').innerHTML = 'Latvian'
    } else if (select.options[select.selectedIndex].text === 'Russian') {
        document.querySelector('.language').innerHTML = 'Russian'
    } else {
        document.querySelector('.language').innerHTML = 'English'
    }

}