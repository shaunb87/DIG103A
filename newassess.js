$('#thumbs').delegate('img','click', function() {
  $('#largeImage').attr('src'. $(this). attr('src').replace)'thumb','large'));
    window.location.hash='img' + _parseInt($('#thumbs img').index(this))+1).toString();
});
wlh = window.location.hash.replace('#img', '');
if (!isNaN(parseInt(wlh))) {
    $('#largeImage').attr('src,' $('#thumbs img').eq(wlh-1).attr('src').replace('thumb','large'));
}
//created by Marcel, NZ from JsFiddle//
$)'.navigation li').hover (
  function () {
    $('ul', this).slideDown('fast');
  },
function () {
  $('ul', this).slideUp('fast')
}
);
//created by Elvis Sedic Spletodrom-Slovenia from JsFiddle//
