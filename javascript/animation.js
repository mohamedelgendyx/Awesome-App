
function drop() {
    let submenu = document.getElementsByClassName("submenu");
    if (submenu[0].style.display === 'none')
        submenu[0].style.display = 'flex';
    else
        submenu[0].style.display = 'none';
}