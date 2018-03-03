import './../less/index.less';
import $ from "jquery"
import { } from './global'

$(function(){
  $('.nav-links a').on('click', function() {
    var $this = $(this),
        index = $this.parent().index(),
        href = $this.attr('href');
    
    $('html,body').animate({scrollTop: $(href).offset().top}, 600)
  })
}())

