

function openForm() {
    document.getElementById("formId").style.top = "50%";
    document.getElementById("overid").style.opacity = "1";
    document.getElementById("overid").style.zIndex = "0";
}

function closeForm() {
    document.getElementById("formId").style.top = "-50%";
    document.getElementById("overid").style.opacity = "0";
    document.getElementById("overid").style.zIndex = "-1";
}

$(document).ready(function () {
    // $(function () {
    //     $("#header").load("./header.html");
    // })

    $(".doctor-name").mouseenter(function () {
        $(`${$(this).attr('data-para')}`).slideToggle();
    })
    var a = 0;
    var counter = 1;
    $(window).scroll(function () {
        // console.log($(window).scrollTop())
        var Top = $('.counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > Top) {
            var intr = setInterval(function () {
                $(".counter1").html(counter);
                counter += 5;
                if (counter == 1471) {
                    clearInterval(intr);
                }
            }, 10);
            a = 1;

        }
    })
    // $("#specialities").on('click', function () {
    //     // console.log("hbhbh");
    //     $(".megamenu").slideToggle();
    // })

});