$(document).ready(function() {


        var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        
        showLeft = document.getElementById( 'showLeft' ),
        showRight = document.getElementById( 'showRight' ),
        
        body = document.body;

    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    };
    

    function disableOther( button ) {
        if( button !== 'showLeft' ) {
            classie.toggle( showLeft, 'disabled' );
        }
        
        }
    });