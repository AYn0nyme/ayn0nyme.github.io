const searchInput = document.getElementById("searchInput"),
    timeContainer = document.getElementById("time"),
    dateContainer = document.getElementById("date");

searchInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        const a = document.createElement("a");
        a.href = `https://duckduckgo.com/?q=${searchInput.value}`;
        searchInput.value = "";
        a.click();
    }
})

dateContainer.innerText = `${new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date())}`

const date = new Date();
const hour = `${date.getHours() < 10 ? "0" : ""}${date.getHours()}`;
const mins = `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
const secs = `${date.getSeconds() < 10 ? "0" : ""}${date.getSeconds()}`;

timeContainer.innerText = `${hour}:${mins}:${secs}`;

setInterval(() => {
    const date = new Date();
    const hour = `${date.getHours() < 10 ? "0" : ""}${date.getHours()}`;
    const mins = `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
    const secs = `${date.getSeconds() < 10 ? "0" : ""}${date.getSeconds()}`;

    timeContainer.innerText = `${hour}:${mins}:${secs}`;
}, 1000)
