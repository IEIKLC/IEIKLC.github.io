fetch('static/data.json', {cache: "no-store"})
.then(resp=>resp.json())
.then(
    (resp) => {
        Object.keys(resp.announcements).forEach((k) => {
            document.getElementById('announcementsparent').innerHTML += `<span><a style="color: #fff; text-decoration: none;" href="${resp.announcements[k].link}" target="_blank">${resp.announcements[k].title}&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>`;
        })
    }
)
