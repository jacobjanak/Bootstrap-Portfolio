

// Adding spacing when navbar is expanded
// stupid Bootstrap 4 doesn't do this on its own

var navbarIsOpen = false;
$('.navbar-toggler').on('click', function() {
  if (!navbarIsOpen) {
    navbarIsOpen = true;
    // add spacing to make room for nav items
    $('nav').css({ 'margin-bottom': '280px' })
  } else {
    navbarIsOpen = false;
    // remove spacing
    $('nav').css({ 'margin-bottom': '0px' })
  }
})

// Bootstraps collapsible navbar is terrible
// so I must manually un-collapse it

$(window).on('resize', function() {
  var width = $(window).width();
  if (width >= 992) {
    $('.show').removeClass('show')

    // fix spacing
    navbarIsOpen = false;
    $('nav').css({ 'margin-bottom': '0px' })
  }
})
