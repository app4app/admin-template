//------------------------------------------------
// Ovo ne znam napraviti u čistom JS-u :-( 
//------------------------------------------------
$("document").ready(function(){
    $('#nav > li > a').click(function(){
            $(this).next().slideToggle();
    });

    function resizeElementHeight(element) {
        var height = 0;
        var body = window.document.body;
            height = window.innerHeight;
        element.style.height = ((height - 48 - 48 - 38) + "px");
    }

    function showPage() {
        var width = window.innerWidth;
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        resizeElementHeight(document.getElementById("FruitTable"));

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
    }

    //window.onload=function(){
        window.addEventListener("resize", showPage);  
        showPage();

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