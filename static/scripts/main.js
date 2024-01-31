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

// Add Navbar

Array.from(document.getElementsByClassName('navbar')).forEach((e) => {

    function ifNavSelected(name) {
        if (window.location.pathname.replace('/', '') == name) {return "navbar-item-selected"}
        return ""
    }

    e.innerHTML = `
        <div class="navbar-item `+ifNavSelected('')+`" onclick="window.location.href='/';">Home</div>
        <div class="navbar-item `+ifNavSelected('aboutiei')+`" onclick="window.location.href='aboutiei';">About IEI</div>
        <div class="navbar-item `+ifNavSelected('aboutklc')+`" onclick="window.location.href='aboutklc';">About KLC</div>
        <div class="navbar-item `+ifNavSelected('committee')+`" onclick="window.location.href='committee';">Committee</div>
        <div class="navbar-item `+ifNavSelected('studentchapters')+`" onclick="window.location.href='studentchapters';">Student Chapters</div>        
        <div class="navbar-item `+ifNavSelected('events')+`" onclick="window.location.href='events';">Events</div>
        <div class="navbar-item `+ifNavSelected('gallery')+`" onclick="window.location.href='gallery'">Gallery</div>
        <div class="navbar-item `+ifNavSelected('contactus')+`" onclick="window.location.href='contactus';">Contact Us</div>
    `;
})

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