fetch('static/data.json')
.then(resp=>resp.json())
.then(
    (resp) => {
        resp.announcements.forEach((a) => {
            document.getElementById('announcementsparent').innerHTML += `<span>${a}&nbsp;&nbsp;|&nbsp;&nbsp;</span>`;
        })
    }
)
