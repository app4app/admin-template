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

        resizeElementHeight(document.getElementById("mr-grid"));
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