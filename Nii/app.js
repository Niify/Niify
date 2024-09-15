// Task Management
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
  
    if (taskInput.value) {
      let taskItem = document.createElement('li');
      taskItem.textContent = taskInput.value;
      taskItem.onclick = function() {
        this.classList.toggle('completed');
      };
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  }
  
  // Pomodoro Timer
  let timer;
  let time = 1500; // 25 minutes
  
  function startTimer() {
    timer = setInterval(function() {
      if (time > 0) {
        time--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        alert('Time is up!');
      }
    }, 1000);
  }
  
  function resetTimer() {
    clearInterval(timer);
    time = 1500;
    updateTimerDisplay();
  }
  
  function updateTimerDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById('timerDisplay').textContent = 
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  // File Upload
  function uploadFile() {
    let fileInput = document.getElementById('fileInput');
    let fileList = document.getElementById('fileList');
  
    if (fileInput.files.length > 0) {
      let file = fileInput.files[0];
      let fileItem = document.createElement('li');
      fileItem.textContent = file.name;
      fileList.appendChild(fileItem);
    }
  }
  