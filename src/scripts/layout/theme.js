/**
 * Theme Layout Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts and styles for all pages.
 *
 * @namespace theme
 * @file vendors@layout.theme.css.liquid
 * @file vendors@layout.theme.js
 * @file layout.theme.css.liquid
 * @file layout.theme.js
 *
 */
import $ from 'jquery';

import AOS from 'aos';
import 'aos/dist/aos.css';

import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

window.$ = $;

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

AOS.init();

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.on("mouseenter",
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        // $this.find($dropdownMenu).addClass(showClass);
        $this.trigger('show.bs.dropdown');
      });
    $dropdown.on("mouseleave",function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        // $this.find($dropdownMenu).removeClass(showClass);
        $this.trigger('hide.bs.dropdown');
      });
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

  // Add slideDown animation to Bootstrap dropdown when expanding.
  $dropdown.on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown("fast");
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $dropdown.on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
  });