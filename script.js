document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");
  
    // Обработка отправки формы
    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;
        // Добавляем сообщение от пользователя
        appendMessage("Пользователь", message);
        chatInput.value = "";
        chatInput.focus();
    });
  
    // Функция для добавления нового сообщения
    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message");
        messageDiv.innerHTML = <strong>${sender}:</strong> ${text}; // Исправлено здесь
        chatMessages.appendChild(messageDiv);
        // Прокручиваем область сообщений вниз
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});