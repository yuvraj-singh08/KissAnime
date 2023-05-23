function showNotification(text) {
    var notification = document.getElementById("notification");
    var notificationText = document.getElementById("notificationText");

    notificationText.innerText = text;
    notification.classList.remove("hidden");

    setTimeout(function () {
        notification.classList.add("hidden");
    }, 3000);
}

export {showNotification};