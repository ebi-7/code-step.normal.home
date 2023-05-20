$(document).ready(function(){
    $('#humburger').click(function(){
        $(this).toggleClass('active');
        $('#bgCover').toggleClass('active');
        $('#nav').toggleClass('active');
    });
  });