const createCookieWithY2K38 = (cookieName, cookieValue) => {
    // Expiry date conversion into UTC standard string
    const daysToExpire = new Date(2147483647 * 1000).toUTCString();

    // Setting up the cookie name, value with the expiry date
    document.cookie = cookieName + '=' + cookieValue + '; expires=' + daysToExpire;
}

const createCookieWithDefaultExpires = (cookieName, cookieValue) => {
    // Expiry date conversion into UTC standard string
    const daysToExpire = new Date(2147483647 * 1000).toUTCString();

    // Setting up the cookie name, value with the expiry date
    document.cookie = cookieName + '=' + cookieValue + '; expires=' + daysToExpire;
}

const readCookie = (cookieName) => {
    // Splitting cookie
    var allCookies = document.cookie.split(';');
    for (var i = 0; i < allCookies.length; i++) {
        // Extracting userName and returning the same
        var temp = allCookies[i].trim();
        if (temp.indexOf(cookieName + "=") == 0)
            return temp.substring((cookieName + "=").length, temp.length);
    }

    // Else return empty string
    return '';
}

const createCookie = (cookieName, cookieValue, neverExpires = true) => {
    if (neverExpires) {
        createCookieWithY2K38(cookieName, cookieValue);
    } else {
        createCookieWithDefaultExpires(cookieName, cookieValue);
    }
}