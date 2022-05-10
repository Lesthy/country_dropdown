function choice1(select) {
    if (select.options[select.selectedIndex].text === 'Latvian') {
        alert('Sveiki');
    } else if (select.options[select.selectedIndex].text === 'Russian') {
        alert('Privet');
    } else {
        alert('Hello')
    }

}
