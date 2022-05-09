function choice1(select) {
    if (select.options[select.selectedIndex].text === 'Latvian') {
        alert('Latvian');
    } else if (select.options[select.selectedIndex].text === 'Russian') {
        alert('Russian');
    } else {
        alert('English')
    }

}