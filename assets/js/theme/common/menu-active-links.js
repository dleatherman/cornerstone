import $ from 'jquery';

export default function () {
    if (window.location.pathname === '/login.php' && window.location.search === '') {
        $('#sign-in').addClass('active');
    } else {
        $('#sign-in').removeClass('active');
    }

    if (window.location.pathname === '/account.php') {
        $('#my-account').addClass('active');
    } else {
        $('#my-account').removeClass('active');
    }

    if (window.location.pathname === '/about-us') {
        $('#about').addClass('active');
    } else {
        $('#about').removeClass('active');
    }

    if (window.location.pathname === '/search.php') {
        $('#search').addClass('active');
    } else {
        $('#search').removeClass('active');
    }

    if (window.location.pathname === '/cart.php') {
        $('#shopping').addClass('active');
    } else {
        $('#shopping').removeClass('active');
    }

    $('#my-acccount-menu').click(() => {
        if ($('#my-acccount-menu').hasClass('active')) {
            $('.navBar--account').removeClass('active');
            $('#my-acccount-menu').removeClass('active');
        } else {
            $('.navBar--account').addClass('active');
            $('#my-acccount-menu').addClass('active');
        }
    });

    $('#terms-title').click(() => {
        $('#terms-title').toggleClass('active');
        $('.sidebar-options').toggleClass('active');
    });
}
