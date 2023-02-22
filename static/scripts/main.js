// Show Announcements

fetch('static/data.json', {cache: "no-store"})
.then(resp=>resp.json())
.then(
    (resp) => {
        Object.keys(resp.announcements).forEach((k) => {
            document.getElementById('announcementsparent').innerHTML += `<span><a style="color: #fff; text-decoration: none;" href="${resp.announcements[k].link}" target="_blank">${resp.announcements[k].title}&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>`;
        })
    }
)

// Show Favicon

favicon = document.createElement('link');
favicon.rel = 'icon';
document.head.appendChild(favicon);
favicon.href = 'static/images/iei_logo.png';

// Microsoft Clarity Integration

(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "fy4pfzt4gc");