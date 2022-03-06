import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import server from './modules/server';
import thanks from './modules/thanks';
import slider from './modules/slider';
import calculator from './modules/calculator';

document.addEventListener('DOMContentLoaded', () => {
    tabs();
    modal();
    timer();
    cards();
    server();
    thanks();
    slider();
    calculator();
});