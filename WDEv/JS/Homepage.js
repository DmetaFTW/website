$(document).ready(function() {

    let root = document.querySelector(':root');
    let navbar = document.querySelector('.NavigationalBar')
    var backGroundColorIndex = 2;

    function generateRandomMax(max){
        return Math.floor(Math.random() * max) + 1;
    }

    $('.ColChangeOnClick').click(function () { 
        
        var nextColorIndex = backGroundColorIndex;
        while (backGroundColorIndex == nextColorIndex){
            backGroundColorIndex = generateRandomMax(4);
        }

        let targetcol = String;
        
        switch (backGroundColorIndex){
            case 1:
                targetcol = '#ffc300'; break; //Yellow 
            case 2:
                targetcol = '#02c9c9'; break; // Blue
          
            case 3:
                targetcol = '#C2D540'; break; // Green
          
            case 4:
                targetcol = '#d5523f'; break;
                
                default: break;
            }
            
            $('.ColChangeOnClick').animate({backgroundColor: targetcol}, { duration:300, step: function(now,fx) {
                root.style.setProperty('--MainColor', $('.ColChangeOnClick').css("background-color"));
            }}, 
            ); // Red
    });

    function UpdateUrlParams(Params) {
        window.location.hash = Params;
        UpdateAnchor();
    }

    var LastChecked = null;

    document.addEventListener("scroll", function()
    {
        /*TODO: Change Navbar Color according to dark or bright*/
        var CheckedElement = document.elementFromPoint(navbar.scrollLeft +1, navbar.scrollHeight + 1);
        
        if (CheckedElement.tagName == "DIV" && CheckedElement != LastChecked)
        {
            if (CheckedElement.classList.contains('Bright'))
            {
                if (navbar.classList.contains('NavBarBright'))
                {
                    navbar.classList.remove('NavBarBright');
                    navbar.classList.add('NavBarDark');
                    UpdateUrlParams(CheckedElement.id);
                }
            }
            else if (CheckedElement.classList.contains('Dark'))
            {
                if (navbar.classList.contains('NavBarDark'))
                {
                    navbar.classList.remove('NavBarDark');
                    navbar.classList.add('NavBarBright');
                    UpdateUrlParams(CheckedElement.id);
                }
            }
        }
        LastChecked = CheckedElement;
    })

    var anchors = document.getElementsByTagName("a");

    function UpdateAnchor(){
        for (var i = 0, length = anchors.length; length > i ; i++){
            var anchor = anchors[i];
            if (anchor.hash == window.location.hash){
                anchor.classList.add("active");
            }
            else
            anchor.classList.remove("active");
        }
    }


});