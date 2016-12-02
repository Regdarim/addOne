$(document).ready(function() {

    rnd();

    rubber($('body'));
    var counter = $('.box').text()
    counter = counter.toString().split('');
    counter = addOne(counter);
    console.log(counter);

    setTimeout(function(){
    	$('.icon-info-circled-alt').trigger('click');
    	$('.closebtn').trigger('click');
    },1000)
    var streak = 0;
    var time = 0;

    $('.inputBox').keyup(function(event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            
            if (keycode == '13' || keycode == '10') {


                var input = $('.inputBox').val();
                input = input.toString().split('');


                var bool = checkBool(counter, input);



                if (bool == 1) {
                    $('.container').text('good!');
                    pulsing($('.container'));
                    setTimeout(function() {
                        $('.container').text('+1');
                        pulsing($('.container'))
                    }, 1100);



                    $('.inputBox').val('');


                    addOne(counter);
                    streak++;
                    $('.streak').text('streak: ' + streak);
                    console.log(counter);


                    time = 1;
                   
                } else {
                    //var wAns = minusOne(counter);
                    var wAns = counter.join('');
                    $('.container').text(input.join(''));
                    shaking($('.container'));
                    setTimeout(function() {
                        $('.container').text('try this!');
                        pulsing($('.container'))
                    }, 1100);
                    setTimeout(function() {
                        $('.container').text(wAns);
                        pulsing($('.container'))
                    }, 2000);

                    $('.inputBox').val('');
                    streak = 0;
                    $('.streak').text('streak: ' + streak);
                    console.log(counter);
                    time = 0;
                    
                }

                $('.plusOne').fadeOut();


            }

            $('.inputBox').keypress(function(event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
				

				var start = new Date;
               
                if (time == 1) {
                    var interval = setInterval(function() {
                        $('.time').text(Math.round("seconds: "+(new Date - start) / 1000, 0))
                    }, 1000);


                    console.log(time);
                } 
                if(time==0) {
                    console.log(time);

                    clearInterval(interval);
                    
                }
       }
   });

    });



$(".c-hamburger").click(function() {
    $(this).toggleClass("is-active");
});

$('.icon-info-circled-alt').on('mouseover', function() {
    $('.leftSide').css('margin-left', '0');
    $('.icon-info-circled-alt').css('z-index', '1');
})

$("body").on("mousemove",function(event) {
    if (event.pageX < 25) {
        $('.leftSide').css('margin-left', '0');
    }
});

$("body").on("mousemove",function(event) {
    if (event.pageX >= 300) {
        $('.leftSide').css('margin-left', '-300');
    }
});

$('.icon-info-circled-alt').on('click', function() {
    $('.leftSide').css('margin-left', '-300');

}) 
 
	$('.leftSide').on('mouseleave', function() {
    $('.leftSide').css('margin-left', '-300');
})

$('.icon-chart-bar').on('click', function() {
    $('.stats').css('margin-left', '0');
}) 
$('.icon-chart-bar').on('mouseover', function() {
    $('.stats').css('margin-left', '0');
}) 

	$('.closebtn').on('click', function() {
    $('.stats').css('margin-left', '-200');
})





$('.icon-cw').click(function() {
    location.reload();
});

function checkBool(counter, input) {
    for (var i = 0; i < counter.length; i++) {
        if (input[i] != counter[i]) {
            return 0;
        }
    }
    return 1;
}


function addOne(counter) {
    for (var i = 0; i < counter.length; i++) {


        if (counter[i] == 9) {
            counter[i] = 0;
        } else {
            counter[i]++;
        }


    }
    return counter;
}

function minusOne(counter) {
    for (var i = 0; i < counter.length; i++) {


        if (counter[i] == 0) {
            counter[i] = 9;
        } else {
            counter[i]--;
        }


    }
    return counter;
}


function pulsing(what) {
    what.toggleClass('animated pulse');

    setTimeout(function() {
        what.toggleClass('animated pulse')
    }, 1000);
}

function shaking(what) {
    what.toggleClass('animated wobble');

    setTimeout(function() {
        what.toggleClass('animated wobble')
    }, 1000);

}

function rubber(what) {
    what.toggleClass('animated bounceInDown');

    setTimeout(function() {
        what.toggleClass('animated bounceInDown')
    }, 1000);

}

var myInput = document.querySelector('.inputBox'); myInput.oninput = function() {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
}


function rnd() {

    $('.box').each(function(index, el) {
        var box = $(this).text();
        box = Math.floor(Math.random() * 10);

        while ((Math.abs($('.box').eq(index - 1).text() - box) <= 2) || $('.box').eq(index - 2).text() == box || $('.box').eq(index - 3).text() == box) {

            box = Math.floor(Math.random() * 10);
        }
        $(this).text(box);


    })

}


});