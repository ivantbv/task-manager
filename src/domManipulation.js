const sideNav = document.querySelector('.openNav');
const navbar = document.querySelector('.navbar');

class DomManipulation {
    constructor() {
        this.sideNav = document.querySelector('.openNav')
        this.navbar = document.querySelector('.navbar')
    }

    openNav() {
        this.sideNav.classList.toggle('removed')
        this.navbar.classList.toggle('removed');
    }
}

const domManip = new DomManipulation();

export {domManip, sideNav, navbar}