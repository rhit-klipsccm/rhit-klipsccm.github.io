fetch("../nav.html")
    .then(x => x.text())
    .then(data => {
        // https://www.w3schools.com/jsref/prop_html_innerhtml.asp
        // had to find a way to "load" the html of nav.html into whichever page can call the navscript.js script. seems like innerHTML is the attribute to edit? Either way, works fine right now.
        let container = document.getElementById("navbar");
        container.innerHTML = data;
        
        let links = container.getElementsByTagName("a");
        // https://www.w3schools.com/howto/howto_js_get_url.asp
        // had to find the current url to match to the current page.
        let currentPage = window.location.href;

        for (let i = 0; i < links.length; i++) {
            if (links[i].href === currentPage) {
                links[i].className = 'currentPage';
            }
        }

    });
