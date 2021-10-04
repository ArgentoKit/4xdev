import 'bootstrap';
import 'jquery';
import '../scss/main.scss';
import './flip-clock.js'

$(function () {
    $('.menu-btn').on('click', function() {
        $('.nav').toggleClass('nav--open')
    })
})