const button = document.getElementById('start-btn');
const taskList = document.getElementById('task-list');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;

button.onclick = () => {
  recognition.start();
};

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  const task = document.createElement('li');
  task.textContent = transcript;
  task.onclick = () => task.classList.toggle('completed');
  taskList.appendChild(task);
};

recognition.onerror = function(event) {
  alert('Speech recognition error: ' + event.error);
};
