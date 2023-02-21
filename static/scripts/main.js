fetch('static/data.json')
.then(resp=>resp.json())
.then(
    (resp) => {
        Object.keys(resp.announcements).forEach((k) => {
            document.getElementById('announcementsparent').innerHTML += `<span><a style="color: #fff; text-decoration: none;" href="${resp.announcements[k].link}">${resp.announcements[k].title}&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>`;
        })
    }
)
