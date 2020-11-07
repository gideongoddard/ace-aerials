// Mobile nav toggle
let mobNav = document.getElementById('sm-nav');
let bars = document.getElementById('bars');
let times = document.getElementById('times');

const toggleMenu = () => {
    if (mobNav.style.display === 'grid') {
        mobNav.style.display = 'none';
        bars.style.display = 'inline';
        times.style.display = 'none';
    } else {
        mobNav.style.display = 'grid';
        bars.style.display = 'none';
        times.style.display = 'inline';
    }
}

// Mobile sub-nav toggle
let itemOneSmNav = document.getElementById('item-1-mob-nav');
let plus = document.getElementById('item-1-plus');
let minus = document.getElementById('item-1-minus')

const toggleAccordion = () => {
    if (itemOneSmNav.style.display === 'block') {
        itemOneSmNav.style.display = 'none';
        plus.style.display = 'inline';
        minus.style.display = 'none';
    } else {
        itemOneSmNav.style.display = 'block';
        plus.style.display = 'none';
        minus.style.display = 'inline';
    }
}

// Large sub-nav toggle
let itemOneLgNav = document.getElementById('item-1-lg-nav');
let itemOneDown = document.getElementById('item-1-down');
let itemOneUp = document.getElementById('item-1-up');

const toggleItemOneLgNav = () => {
    if (itemOneLgNav.style.display === 'flex') {
        itemOneLgNav.style.display = 'none';
        itemOneDown.style.display = 'inline';
        itemOneUp.style.display = 'none';
    } else {
        itemOneLgNav.style.display = 'flex';
        itemOneDown.style.display = 'none';
        itemOneUp.style.display = 'inline';
    }
}