const chat = document.querySelector('.chat-widget');
const inputChat = chat.querySelector('.chat-widget__input');
const chatScreen = chat.querySelector('.chat-widget__messages');
const robotAnswers = [
    "Сообщение 1",
    "Сообщение 2",
    "Сообщение 3",
    "Сообщение 4",
    "Сообщение 5",
];
var now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
let timeSend = `${hours} : ${minutes}`;

function openChat() {
    this.classList.add('chat-widget_active');
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function sendMessage() {
    let message = this.value.trim();
    let randomNumberAnswer = getRandomInt(0,robotAnswers.length);
    let robotMessage = robotAnswers[randomNumberAnswer];
    if (message) {
        chatScreen.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${timeSend}</div>
        <div class="message__text">
        ${message}
        </div>
    </div>
    <div class="message">
        <div class="message__time">${timeSend}</div>
        <div class="message__text">
        ${robotMessage}
        </div>
    </div>
    `;
    };
    this.value = "";
}

chat.addEventListener('click', openChat);
inputChat.addEventListener('change', sendMessage);