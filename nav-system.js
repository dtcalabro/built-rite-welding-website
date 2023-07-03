function selectNavMenuTab(selectedTabElem) {
    // First check if tab changed, otherwise just do nothing and exit func
    if (!selectedTabElem.containsClass("selected-nav-menu-tab")) {
        // Get All Tabs
        var tabs = document.getElementsByClassName("nav-menu-tab-button");

        for (let i = 0; i < tabs.length; i++) {
            // Loop over all tabs and remove the class "selected-nav-menu-tab" if present
            tabs[i].removeClassIfPresent("selected-nav-menu-tab")
        }

        // Add the class "selected-nav-menu-tab" to the newly selected tab
        selectedTabElem.addClass("selected-nav-menu-tab");

        var dest = selectedTabElem.getAttribute("href");
        if (dest != null) {
            window.location.href = dest;
            //window.top.location.href = dest; // Fails (unsafe)
            //window.parent.location.href = dest; // Fails (unsafe)
            //window.parent.postMessage(dest, "*");
            //window.parent.postMessage(dest, "https://dtcalabro.wixsite.com/built-rite-welding");
            const data = JSON.parse('{"action":"Redirect", "data":["dest":"' + dest + '"]}');
            window.parent.postMessage(data, "*");
        }
    }
}