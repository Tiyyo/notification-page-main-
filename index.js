const notifs = document.querySelectorAll(".notification");
const numOfNotifications =
  document.getElementsByClassName("numOfNotifications")[0];
const allReadBtn = document.getElementsByClassName(
  "header__toggle-readOrNot"
)[0];
const readMark = document.getElementsByClassName("content__read-mark")[0];
let notifValue = 0;

function markAsRead(element) {
  if (element.classList.contains("unread")) {
    element.classList.add("read");
    element.classList.remove("unread");
    readMark.style.display = "none";
  }
}

function countNotifs() {
  let notifValue = 0;
  for (i = 0; i < notifs.length; i++) {
    if (notifs[i].classList.contains("unread")) {
      notifValue++;
    }
    numOfNotifications.textContent = notifValue;
  }
}

//set notif value on load
window.addEventListener("load", () => {
  countNotifs();
});

// toggle all notifications from unread to read
notifs.forEach((notif) => {
  allReadBtn.addEventListener("click", (e) => {
    console.log(e);
    markAsRead(notif);
    notifValue = 0;
    numOfNotifications.textContent = notifValue;
  });
});

// toggle a single notification on click from unread to read
notifs.forEach((notif) => {
  notif.addEventListener("click", () => {
    markAsRead(notif);
    countNotifs();
  });
});
