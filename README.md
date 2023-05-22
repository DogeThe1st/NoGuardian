# About
This is just a simple method to get around certain types of work/school restrictions.
It may not work all the time, as this only bypasses censoring via checking the url of the page.
It works by just displaying the selected webpage through an IFrame.


# How to
Click yout bookmarklet, and type a website (Ex: 2player.co), and press OK. In a second, your website should appear!

# Issues
This website will default to using HTTPS, so it may not work for HTTP only sites. Many websites cannot be shown in an IFrame. For YouTube, you can share it as an embed, and just copy the URL from that.

# How to get this?

make a new bookmark, and paste this code into it:

javascript:void(function(){    var iframe = document.createElement('iframe');    iframe.style.position = 'fixed';    iframe.style.top = '0';    iframe.style.left = '0';    iframe.style.width = '100%';    iframe.style.height = '100%';    iframe.style.border = 'none';        var specifiedWebsite;    do {        specifiedWebsite = prompt("Enter the website URL:");    } while (specifiedWebsite === null);        specifiedWebsite = "https://" + specifiedWebsite;        iframe.src = specifiedWebsite;        document.body.innerHTML = '';    document.body.appendChild(iframe);})();