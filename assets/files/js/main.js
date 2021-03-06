jQuery(document).ready(function($) {
  $("#wrapper .col-left").mCustomScrollbar({
    theme:"dark"
  });
  $('.left-menu').meanmenu({
    meanMenuContainer: '#meanmenu',
    meanScreenWidth: "767",
    siteLogo: '<div class="meanheader">Menu</div>'
  });
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').stop().animate({scrollTop: pos}, 1000);
  });

  var miniSearch = {
    init:  function () {
      this.domCached();
      this.state();
      this.bindEvents();
    },
    domCached: function() {

    },
    bindEvents: function () {

    },
    render: function () {

    },
    state: function () {

    },
    setState: function (args) {
      this[args.key]  = args.value
    },

  }

  function setHrefAsTitle() {
    $('img').each(function(index, el) {
      var src = $(el).attr('src');
      $(el).attr('title', src);
    });
  }
  setHrefAsTitle();




});
