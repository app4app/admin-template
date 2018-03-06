//------------------------------------------------
// Ovo ne znam napraviti u čistom JS-u :-( 
//------------------------------------------------
$("document").ready(function(){
    $('#nav > li > a').click(function(){
            $(this).next().slideToggle();
    });

    // Change the selector if needed
    var $table = $('table.fixed_headers');
    var $bodyCells = $table.find('tbody tr:first').children(), colWidth;

    // Adjust the width of thead cells when window resizes
    //$(window).resize(function() {
  
    //}).resize(); // Trigger resize handler   
    
    $('.fixed_headers tr').click(function() {
        $(this).parent().find(".selected").removeClass("selected");
        $(this).toggleClass("selected");

        $("#name_id").val($(this).find('td:nth-child(1)').html());
        $("#color_id").val($(this).find('td:nth-child(2)').html());
        $("#weight_id").val($(this).find('td:nth-child(3)').html());
        $("#description_id").val($(this).find('td:nth-child(4)').html());

        $("#btn_edit_id").removeClass("inline-block-hide");
        $("#btn_edit_id").addClass("inline-block-show");

    });

    $('.tab').click(function() {
        event.preventDefault();
        $(this).parent().find(".active").removeClass("active");
        $(this).toggleClass("active")
    }); 

    $('#btn_edit_id').click(function() {
        event.preventDefault();
        $("#btn_edit_id").removeClass("inline-block-show");
        $("#btn_edit_id").addClass("inline-block-hide");
        $("#btn_save_id").removeClass("inline-block-hide");
        $("#btn_save_id").addClass("inline-block-show");
        $("#btn_cancel_id").removeClass("inline-block-hide");
        $("#btn_cancel_id").addClass("inline-block-show"); 
        
        $(":input").prop("disabled", false);
    });    

    $('#btn_save_id, #btn_cancel_id').click(function() {

        $("#btn_edit_id").removeClass("inline-block-hide");
        $("#btn_edit_id").addClass("inline-block-show");
        $("#btn_save_id").removeClass("inline-block-show");
        $("#btn_save_id").addClass("inline-block-hide");
        $("#btn_cancel_id").removeClass("inline-block-show");
        $("#btn_cancel_id").addClass("inline-block-hide");    
        
        $(":input").prop("disabled", true);
    });  

    function resizeElementHeight(element) {
        var height = height = window.innerHeight;
        var width = window.innerWidth;
        var body = window.document.body;
            
        if (width >= 600) {            
            element.style.height = ((height - 2 * 48) + "px");
        } else {
            element.style.height = ((height - 3 * 48) + "px");
        }
    }

    function resizeColumnHeaders(element) {
                // Get the tbody columns width array
                colWidth = $bodyCells.map(function() {
                    return $(this).width();
                }).get();
                
                // Set the width of thead columns
                $table.find('thead tr').children().each(function(i, v) {
                    $(v).width(colWidth[i]);
                });  
    }

    function resizePage() {
        var width = window.innerWidth;
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));

        if (width >= 600) {
            document.documentElement.style.setProperty("--grid-rows-default", htmlStyles.getPropertyValue("--grid-rows-l"));
            document.documentElement.style.setProperty("--grid-columns-default", htmlStyles.getPropertyValue("--grid-columns-l"));
            document.documentElement.style.setProperty("--display-content-header", "block");
            document.documentElement.style.setProperty("--display-content-panel", "block");
            document.documentElement.style.setProperty("--display-content-footer", "block");
            document.documentElement.style.setProperty("--display-side-menu-footer", "block");
        }

        if (width >= 1100) {    
            document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-l-w-menu"));
            document.documentElement.style.setProperty("--display-side-menu-panel", "block");

        } else if (width >= 600 && width < 1100) {
            document.documentElement.style.setProperty("--display-side-menu-panel", "none");
            document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-l-wo-menu"));

        } else if (width < 600) {
            document.documentElement.style.setProperty("--display-side-menu-panel", "none");
            document.documentElement.style.setProperty("--display-side-menu-footer", "none");
            document.documentElement.style.setProperty("--grid-rows-default", htmlStyles.getPropertyValue("--grid-rows-s-wo-menu"));
            document.documentElement.style.setProperty("--grid-columns-default", htmlStyles.getPropertyValue("--grid-columns-s"));
            document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-s-wo-menu"));
            document.documentElement.style.setProperty("--display-content-header", "block");
            document.documentElement.style.setProperty("--display-content-panel", "block");
            document.documentElement.style.setProperty("--display-content-footer", "block");
        }

        resizeElementHeight(document.getElementById("content_id"));
        resizeColumnHeaders(document.getElementById("mr-grid"));

    }

    //window.onload=function(){
        window.addEventListener("resize", resizePage);  
        resizePage();

        document.getElementById("menu-show-hide").addEventListener("click", onClickMenu);
    //};

    function onClickMenu() {
        var width = window.innerWidth;
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));

        if (width >= 1100) {
            document.documentElement.style.setProperty("--grid-rows-default", htmlStyles.getPropertyValue("--grid-rows-l"));
            document.documentElement.style.setProperty("--grid-columns-default", htmlStyles.getPropertyValue("--grid-columns-l"));
            document.documentElement.style.setProperty("--display-content-header", "block");
            document.documentElement.style.setProperty("--display-content-panel", "block");
            document.documentElement.style.setProperty("--display-content-footer", "block");
            //if ($(".side-menu-panel").is(':visible')){
            if (document.documentElement.style.getPropertyValue("--display-side-menu-panel") === "block" ){  
                document.documentElement.style.setProperty("--display-side-menu-panel", "none");              
                document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-l-wo-menu"));
            } else {
                document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-l-w-menu"));
                document.documentElement.style.setProperty("--display-side-menu-panel", "block");
            }

        } else if (width >= 600 && width < 1100) {
            document.documentElement.style.setProperty("--grid-rows-default", htmlStyles.getPropertyValue("--grid-rows-l"));
            document.documentElement.style.setProperty("--grid-columns-default", htmlStyles.getPropertyValue("--grid-columns-l"));
            if (document.documentElement.style.getPropertyValue("--display-side-menu-panel") === "block"){
                document.documentElement.style.setProperty("--display-side-menu-panel", "none");
                document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-l-wo-menu"));
            } else {
                document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-l-w-menu"));
                document.documentElement.style.setProperty("--display-side-menu-panel", "block");
            }

        } else if (width < 600) {         
            document.documentElement.style.setProperty("--grid-columns-default", htmlStyles.getPropertyValue("--grid-columns-s"));
            if (document.documentElement.style.getPropertyValue("--display-side-menu-panel") === "block"){
                document.documentElement.style.setProperty("--display-side-menu-panel", "none");
                document.documentElement.style.setProperty("--display-side-menu-footer", "none");
                document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-s-wo-menu"));
                document.documentElement.style.setProperty("--grid-rows-default", htmlStyles.getPropertyValue("--grid-rows-s-wo-menu"));
                document.documentElement.style.setProperty("--display-content-header", "block");
                document.documentElement.style.setProperty("--display-content-panel", "block");
                document.documentElement.style.setProperty("--display-content-footer", "block");
            } else {
                document.documentElement.style.setProperty("--display-content-header", "none");
                document.documentElement.style.setProperty("--display-content-panel", "none");
                document.documentElement.style.setProperty("--display-content-footer", "none");
                document.documentElement.style.setProperty("--grid-area-default", htmlStyles.getPropertyValue("--grid-area-s-w-menu"));
                document.documentElement.style.setProperty("--grid-rows-default", htmlStyles.getPropertyValue("--grid-rows-s-w-menu"));
                document.documentElement.style.setProperty("--display-side-menu-panel", "block");
                document.documentElement.style.setProperty("--display-side-menu-footer", "block");
            }
        }
    };
    
});