function burgerMenuButtonClick(selector, defaultClass)
{
    
    var nonActiveMenuIcon = ' icon-menu';
    var activeMenuIcon = ' icon-cancel';
    var selectorTop = 'idTop';
    
    var menu = document.querySelector('.' + selector);
    var menuButton = document.querySelector('.' + selector + ' ' + '.' + defaultClass);

    var divIdTop = document.querySelector('.' + selectorTop);

    //menuButton.preventDefault();

    if (menuButton.className === (defaultClass + nonActiveMenuIcon))
    {
        menuButton.className = defaultClass + activeMenuIcon;
        menu.style.right = '0';
        menu.style.width = '70%';
        menu.style.display = 'flex';
        divIdTop.style.display = 'none';
    }

    else
    {
        menuButton.className = defaultClass + nonActiveMenuIcon;
        menu.style.right = '-16em';
        menu.style.width = '16em';
        divIdTop.style.display = 'flex';
    }
}

/*function burgerMenuDefaultView (selector, defaultClass)
{
    var nonActiveMenuIcon = ' icon-menu';

    var menu = document.querySelector('.' + selector);
    var menuButton = document.querySelector('.' + selector + ' ' + '.' + defaultClass);

    menuButton.className = defaultClass + nonActiveMenuIcon;
    menu.style.right = '-16em';
    menu.style.width = '16em';
}*/