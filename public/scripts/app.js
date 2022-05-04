/* Variables */
const authSwitchTab = document.querySelector(".login-reg-tab");
const loginTabButton = document.querySelector(".button--login-tab");
const registerTabButton = document.querySelector(".button--register-tab");

const loginContainer = document.querySelector(".article--login");
const registerContainer = document.querySelector(".article--register");

const showPasswordButtons = document.querySelectorAll(".button-show-password");
const hidePasswordButtons = document.querySelectorAll(".button-hide-password");

/* Functions */
const switchTabs = function (e) {
    if (!e.target.classList.contains("button")) return;

    if (e.target.classList[2] === "button--login-tab") {
        loginContainer.classList.remove("hidden");
        registerContainer.classList.add("hidden");
    } else if (e.target.classList[2] === "button--register-tab") {
        loginContainer.classList.add("hidden");
        registerContainer.classList.remove("hidden");
    }
};

const togglePasswordVisibility = function (e) {
    const clickedButton = e.target;
    const classes = clickedButton.classList;
    const actionType = `${classes[classes.length - 1]}`.split("--")[0];
    const buttonID = `${classes[classes.length - 1]}`.split("--")[1];

    // Hide current button, and show the other corresponding visibility button
    classes.toggle("hidden");

    if (actionType === "button-show-password") {
        document
            .querySelector(`.button-hide-password--${buttonID}`)
            .classList.toggle("hidden");
    } else if (actionType === "button-hide-password") {
        document
            .querySelector(`.button-show-password--${buttonID}`)
            .classList.toggle("hidden");
    }

    // Get the sibing password field and change it's type.
    // We did not reference the input field directly, because there are multiple ones.
    const siblings = Array.from(e.target.parentNode.childNodes);
    const inputField = siblings.find((sibling) => sibling.nodeName === "INPUT");

    inputField.type === "password"
        ? (inputField.type = "text")
        : (inputField.type = "password");
};

/* Event Listeners */
authSwitchTab.addEventListener("click", switchTabs);

showPasswordButtons.forEach((button) => {
    button.addEventListener("click", togglePasswordVisibility);
});

hidePasswordButtons.forEach((button) => {
    button.addEventListener("click", togglePasswordVisibility);
});
