import modals  from "./modules/modals.";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import chackTextInputs from "./modules/chackTextInputs";
import showMorStyles from "./modules/showMorStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drops from "./modules/drops";

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    chackTextInputs('[name="name"]');
    chackTextInputs('[name="message"]');
    showMorStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading',);
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drops();
});