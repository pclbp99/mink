$(function(){
   
    
    $(window).scroll(function(){
         if($(document).scrollTop()>=300){
             $('#list').stop().animate({top:300}, 500)} 
         else {
             $('#list').stop().animate({top:200}, 1000)
         }
     });
    
    
    $("#menu li:first-child").click(function(){
        });
    
    
        $('.list_con').hide();
        $('.list_con').eq(0).show();

        $('ul.list_web li').click(function(){
            
	       $('ul.list_web li').removeClass('on'); 
	       $(this).addClass('on'); 
	       $('.list_con').hide(); 
           var a = $(this).attr('rel');
	       $("#" + a).show();
            
        }); 

    
    
    $('.web_con').hide();
        $('.web_con').eq(0).show();

        $('ul.webs li').click(function(){
            
	       $('ul.webs li').removeClass('on_w'); 
	       $(this).addClass('on_w'); 
	       $('.web_con').hide(); 
           var a = $(this).attr('rel');
	       $("#" + a).show();
            
        }); 
    
    //event pop
    
    $('#e_wes1').click(function(){
        $('#ev_1').fadeIn();
        $('.close').click(function(){
            $('#ev_1').fadeOut();
        });
    });
    
     $('#e_wes2').click(function(){
        $('#ev_2').fadeIn();
        $('.close').click(function(){
            $('#ev_2').fadeOut();
        });
    });
    
     $('#e_wes3').click(function(){
        $('#ev_3').fadeIn();
        $('.close').click(function(){
            $('#ev_3').fadeOut();
        });
    });
    
    //packagepop
    $('#p_wes1').click(function(){
        $('#pk_1').fadeIn();
        $('.close').click(function(){
            $('#pk_1').fadeOut();
        });
    });
    
    $('#p_wes2').click(function(){
        $('#pk_2').fadeIn();
        $('.close').click(function(){
            $('#pk_2').fadeOut();
        });
    });
    
    $('#p_wes3').click(function(){
        $('#pk_3').fadeIn();
        $('.close').click(function(){
            $('#pk_3').fadeOut();
        });
    });
    
    $('#p_wes4').click(function(){
        $('#pk_4').fadeIn();
        $('.close').click(function(){
            $('#pk_4').fadeOut();
        });
    });
    
    $('#p_wes5').click(function(){
        $('#pk_5').fadeIn();
        $('.close').click(function(){
            $('#pk_5').fadeOut();
        });
    });
    
    $('#p_wes6').click(function(){
        $('#pk_6').fadeIn();
        $('.close').click(function(){
            $('#pk_6').fadeOut();
        });
    });
    
    $('#p_wes7').click(function(){
        $('#pk_7').fadeIn();
        $('.close').click(function(){
            $('#pk_7').fadeOut();
        });
    });
    
    $('#p_wes8').click(function(){
        $('#pk_8').fadeIn();
        $('.close').click(function(){
            $('#pk_8').fadeOut();
        });
    });
    
    $('#p_wes9').click(function(){
        $('#pk_9').fadeIn();
        $('.close').click(function(){
            $('#pk_9').fadeOut();
        });
    });
    
    $('#p_wes10').click(function(){
        $('#pk_10').fadeIn();
        $('.close').click(function(){
            $('#pk_10').fadeOut();
        });
    });
    
    
    $('#s_wes1').click(function(){
        $('#s_1').fadeIn();
        $('.close').click(function(){
            $('#s_1').fadeOut();
        });
    });
    
    $('#s_wes2').click(function(){
        $('#s_2').fadeIn();
        $('.close').click(function(){
            $('#s_2').fadeOut();
        });
    });
    
    $('#s_wes3').click(function(){
        $('#s_3').fadeIn();
        $('.close').click(function(){
            $('#s_3').fadeOut();
        });
    });
    
    $('#s_wes4').click(function(){
        $('#s_4').fadeIn();
        $('.close').click(function(){
            $('#s_4').fadeOut();
        });
    });
    
    $('#s_wes5').click(function(){
        $('#s_5').fadeIn();
        $('.close').click(function(){
            $('#s_5').fadeOut();
        });
    });
    
    $('#s_wes6').click(function(){
        $('#s_6').fadeIn();
        $('.close').click(function(){
            $('#s_6').fadeOut();
        });
    });
    
    $('#s_wes7').click(function(){
        $('#s_7').fadeIn();
        $('.close').click(function(){
            $('#s_7').fadeOut();
        });
    });
    
    $('#s_wes8').click(function(){
        $('#s_8').fadeIn();
        $('.close').click(function(){
            $('#s_8').fadeOut();
        });
    });
    
    $('#top').click(function(){
        $(document).scrollTop(0);
    })


});




