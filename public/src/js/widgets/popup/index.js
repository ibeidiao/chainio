import $ from "jquery"
import _ from "lodash"
import template from './template.html';

function Popup(options) {
  this.options = {
  };
  if (options.isShow === false) {
      return;
  }
  this.show(options);
}

Popup.prototype = {
  _init: function (o) {
    var that = this;

    var closeCallback = o.closeCallback,
        appendClass = o.appendClass || '',
        tsClass = new Date().getTime() + '-popup';

    $.extend(that.options, { tsClass: tsClass, appendClass: appendClass, closeCallback: closeCallback });

    return o;
  },
  show: function (options) {
    var that = this,
        o = that._init(options);

    var compiled = '',
        title = o.title || '提示',
        html = o.html || '',
        autoClose = !!o.autoClose,
        btns = o.btns || [],
        btnClickCallback = o.btnClickCallback,
        closeCallback = that.options.closeCallback,
        appendClass = that.options.appendClass,
        tsClass = that.options.tsClass;

    compiled = _.template(template);
    compiled = compiled({ 'html': html, title: title, tsClass: tsClass, appendClass: appendClass, btns: btns });

    $('body').append($('<div class="popup-mask ' + tsClass + '-mask"></div>'));
    $('body').append($(compiled));

    var $popup = $('.' + tsClass);

    $popup.find('.x').on('click', function(e) {
      $popup.remove();
      $('.' + tsClass + '-mask').remove();
      closeCallback && closeCallback();
    });

    $popup.find('.btn').on('click', function(e) {
      var index = $(this).index();
      btnClickCallback && btnClickCallback(index, $popup);
    });

    if (autoClose) {
        setTimeout(function() {
            $popup.find('.x').trigger('click');
        }, 1000);
    }
  },
  close: function () {
    var options = this.options,
        $popup = $('.' + options.tsClass);
    $popup.remove();
    $('.' + options.tsClass + '-mask').remove();
    options.closeCallback && options.closeCallback();
  },
  getBtns: function () {
    var options = this.options,
      $popup = $('.' + options.tsClass);
    return $popup.find('.btn-row .btns .btn');
  }
};

module.exports = Popup;