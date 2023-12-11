var storeId = $('#storeId').val();
$(document).ready(function ($) {
    $('.Collapsible__Button').click(function () {
        $(this).toggleClass('active');
        $(this).parent('.Collapsible').toggleClass('active');
    });

    $('.Linklist__Item,.color_product__Item').click(function () {
        location.href = $(this).attr('data-filter')
        // appendSearch()
    });
    $('.btn_sort_category').click(function () {
        $('.content_list_filter').toggleClass('is-active');
        if ($(window).width() < 768) {
            $('.PageOverlay').addClass('is-active');
        }
    });
    $('.show_grid.descktop button').click(function () {
        var count = $(this).attr('data-count');
        $('.show_grid button').removeClass('is-active');
        $(this).addClass('is-active');
        $('.ProductList').attr('data-desktop-count', count)
    });
    $('.show_grid.mobile button').click(function () {
        var count = $(this).attr('data-count');
        $('.show_grid button').removeClass('is-active');
        $(this).addClass('is-active');
        $('.ProductList').attr('data-mobile-count', count)
    });

    $('.btn_category_filter').click(function () {
        $('.CollectionInner__Sidebar--withTopToolbar').addClass('is-active');
        $('.PageOverlay').addClass('is-active');
    });
    $('.CollectionInner__Sidebar--withTopToolbar .header_filter button').click(function () {
        $('.CollectionInner__Sidebar--withTopToolbar').removeClass('is-active');
        $('.PageOverlay').removeClass('is-active');
    });
    $('.content_list_filter .header_filter button').click(function () {
        $('.content_list_filter').removeClass('is-active');
        $('.PageOverlay').removeClass('is-active');
    });

});