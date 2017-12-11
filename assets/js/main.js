(function () {

    /*menu*/
    function toggleMenuBar() {
        var bars = document.getElementsByClassName("bars");

        bars[0].addEventListener('click', function(e){
            var menu = document.getElementById("menu");

            menu.classList.toggle('menu-show');
        });
        //
        // var div1 = document.getElementById("div1");
        // if (document.getElementsByClassName("hide").length == 0) {
        //     div1.className = "test hide";
        // } else {
        //     div1.className = "test show";
        // }


       /* var open = true;
        var heightChecked = false;
        var initHeight = 0;
        var intval = null;

        function slideToggle() {
            window.clearInterval(intval);
            var menu = document.getElementById('menu');
            // var mdiv = document.getElementById('mdiv');
            if(!heightChecked) {
                initHeight = menu.offsetHeight;
                heightChecked = true;
            }
            if(open) {
                var h = initHeight;
                open = false;
                intval = setInterval(function(){
                        h--;
                        menu.style.height = h + 'px';
                        if(h <= 0)
                            window.clearInterval(intval);
                    }, 1
                );
            }
            else {
                var h = 0;
                open = true;
                intval = setInterval(function(){
                        h++;
                        menu.style.height = h + 'px';
                        if(h >= initHeight)
                            window.clearInterval(intval);
                    }, 1
                );
            }
        }*/



    }

    toggleMenuBar();



    function changeImg(){

        var thumb = document.getElementsByClassName("nav-thumb");
        var a = document.getElementsByTagName('a');
        var thumbs = document.getElementsByClassName("thumbs");
        var bigIcon = document.getElementById("big-icon");
        // var bigIconHref = bigIcon.src;

        for (var i = 0; i < thumb.length; i++) {
            thumb[i].addEventListener('click', function (e) {
                e.preventDefault();
                var thumbSrc = e.target.src;

                // console.log(thumb[i]);
                // console.log(e.target);
                // console.log(e.target.src);
                // console.log(bigIcon.src);
                bigIcon.src = thumbSrc;

            });
        }
    }

    changeImg();

})();