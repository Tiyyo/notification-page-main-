const notifs = document.querySelectorAll(".notification");
const numOfNotifications =
  document.getElementsByClassName("numOfNotifications")[0];
const allReadBtn = document.getElementsByClassName(
  "header__toggle-readOrNot"
)[0];
const readMarks = document.querySelectorAll(".content__read-mark");
let notifValue = 0;

// console.log(readMarks);

function markAsRead(element) {
  if (element.classList.contains("unread")) {
    element.classList.add("read");
    element.classList.remove("unread");
  }
}
function removeReadMark(element) {
  return (element.style.display = "none");
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
    readMarks.forEach((readMark) => {
      removeReadMark(readMark);
    });
  });
});

// toggle a single notification on click from unread to read
notifs.forEach((notif) => {
  notif.addEventListener("click", () => {
    markAsRead(notif);
    countNotifs();
  });
});

// remove readMark on click

readMarks.forEach((readMark) => {});
