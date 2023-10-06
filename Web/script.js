// Função para atualizar a hora e data
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = now.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
}

// Função para adicionar mensagens ao chat
function addMessage(name, message) {
    const chatMessages = document.getElementById('chat-messages');
    const currentTime = new Date().toLocaleTimeString();
    const messageHTML = `<p><strong>${name}:</strong> (${currentTime}) ${message}</p>`;
    chatMessages.innerHTML += messageHTML;

    // Role a janela de chat para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Manipulador de evento para o envio do formulário de chat
document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || message.trim() === '') {
        alert('Por favor, insira seu nome e uma mensagem.');
        return;
    }

    addMessage(name, message);

    // Limpar o campo de mensagem após o envio
    document.getElementById('message').value = '';
});

// Atualize a hora imediatamente ao carregar a página
updateTime();

// Atualize a hora a cada segundo
setInterval(updateTime, 1000);
