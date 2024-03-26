document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    let count = 0;
    let timerInterval;

  
    function incrementCounter() {
      count++;
      counter.textContent = count;
    }
  
    function decrementCounter() {
      count--;
      counter.textContent = count;
    }
  
    function handleIncrement() {
      incrementCounter();
    }
  
    function handleDecrement() {
      decrementCounter();
    }
  
    function pauseCounter() {
      clearInterval(timerInterval);
      minusButton.disabled = true;
      plusButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.textContent = 'resume';
      pauseButton.removeEventListener('click', pauseCounter);
      pauseButton.addEventListener('click', resumeCounter);
    }
  

    function resumeCounter() {
      timerInterval = setInterval(incrementCounter, 1000);
      minusButton.disabled = false;
      plusButton.disabled = false;
      heartButton.disabled = false;
      pauseButton.textContent = 'pause';
      pauseButton.removeEventListener('click', resumeCounter);
      pauseButton.addEventListener('click', pauseCounter);
    }
  

    function likeNumber() {
      const likesList = document.querySelector('.likes');
      const likeItem = document.createElement('li');
      likeItem.textContent = `${count} Number ${count} has been liked.`;
      likesList.appendChild(likeItem);
    }
  

    function leaveComment() {
      const commentInput = document.getElementById('comment-input');
      const comment = commentInput.value;
      const commentList = document.getElementById('list');
      const commentItem = document.createElement('div');
      commentItem.textContent = comment;
      commentList.appendChild(commentItem);
      commentInput.value = ''; // Clear the input field after adding the comment
    }
  

    plusButton.addEventListener('click', handleIncrement);
    minusButton.addEventListener('click', handleDecrement);
    pauseButton.addEventListener('click', pauseCounter);
    heartButton.addEventListener('click', likeNumber);
  

    document.getElementById('submit').addEventListener('click', function(event) {
      event.preventDefault();
      leaveComment();
    });
    
  
    timerInterval = setInterval(incrementCounter, 1000);
  });
  