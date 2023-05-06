

const s = '12px';
const k = "16px";
const O = "4.17px"

$('.map *').hover((e) => {
    var classN = $(e.target).attr("class").split(' ').slice(0, 1);
    $('.map path.' + classN).css('stroke-width', s);
    $('.map rect.' + classN).css('stroke-width', k);
    $(".map rect, .map path, .map text").css('opacity', 0.2);
    $(".map ." + classN, ).css('opacity', 1);
}, (e) => {
    var classN = $(e.target).attr("class").split(' ').slice(0, 1);
    $('.map path.' + classN).css('stroke-width', O);
    $('.map rect.' + classN).css('stroke-width', O);
    $(".map rect, .map path, .map text").css('opacity', 1);
});


// $('*').hover((e) => {
//     var classN = $(e.target).attr("class").split(' ').slice(0, 1);
//     $('.' + classN).css('stroke-width', $('.' + classN).css('stroke-width') + s);
//     $('rect.' + classN).css('stroke-width', $('rect.' + classN).css('stroke-width') + k);
// }, (e) => {
//     var classN = $(e.target).attr("class").split(' ').slice(0, 1);
//     $('.' + classN).css('stroke-width', $('.' + classN).css('stroke-width') - s);
//     $('rect.' + classN).css('stroke-width', parseInt($('rect.' + classN).css('stroke-width')) - k + "px");
// });