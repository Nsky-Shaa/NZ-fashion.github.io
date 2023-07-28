$(document).ready(function() {
  // Initialize Isotope
  var $grid = $('#product-list').isotope({
    itemSelector: '.product-item',
    layoutMode: 'fitRows',
  });

  // Filter items on button click
  $('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});