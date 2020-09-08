function burgerMenuButtonClick(selector, defaultClass)
{
    var nonActiveMenuIcon = ' icon-menu';
    var activeMenuIcon = ' icon-cancel';

    var menu = document.querySelector('.' + selector);
    var menuButton = document.querySelector('.' + selector + ' ' + '.' + defaultClass);

    if (menuButton.className === (defaultClass + nonActiveMenuIcon))
    {
        menuButton.className = defaultClass + activeMenuIcon;
        menu.style.right = '0';
        menu.style.width = '70%';
        menu.style.height = '100%';
        menu.style.display = 'flex';
    }

    else
    {
        menuButton.className = defaultClass + nonActiveMenuIcon;
        menu.style.right = '-16em';
        menu.style.width = '16em';
        menu.style.height = '100%';
    }
}