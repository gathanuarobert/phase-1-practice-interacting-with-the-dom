document.addEventListener("DOMContentLoaded", function() {
    let counterValue = 0;
    let likesCount = 0;
    let counterInterval;

    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('plus');
    const decrementButton = document.getElementById('minus');
    const pauseButton = document.getElementById('pause');
    const likeButton = document.getElementById('heart');
    const commentInput = document.getElementById('comment-input');
    const commentButton = document.getElementById('submit');

    function updateCounterDisplay() {
        counterDisplay.textContent = counterValue;
    }

    function updateLikesDisplay() {
        likesDisplay.textContent = `Likes: ${likesCount}`;
    }

    function handleIncrement() {
        counterValue++;
        updateCounterDisplay();
    }

    function handleDecrement() {
        if (counterValue > 0) {
            counterValue--;
            updateCounterDisplay();
        }
    }

    function handleLike() {
        likesCount++;
        updateLikesDisplay();
    }

    function handlePause() {
        clearInterval(counterInterval);
        incrementButton.disabled = true;
        decrementButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.style.display = 'none';
        resumeButton.style.display = 'inline';
    }

   
    

    function handleComment() {
        const commentText = commentInput.value;
        console.log(commentText);
        commentInput.value = '';
    }

    incrementButton.addEventListener('click', handleIncrement);
    decrementButton.addEventListener('click', handleDecrement);
    likeButton.addEventListener('click', handleLike);
    pauseButton.addEventListener('click', handlePause);
    commentButton.addEventListener('click', handleComment);

    counterInterval = setInterval(handleIncrement, 1000);
});