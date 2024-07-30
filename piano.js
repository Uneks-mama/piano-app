document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const leftHand = document.querySelector('.left-hand');
    const rightHand = document.querySelector('.right-hand');
  
    keys.forEach(key => {
      key.addEventListener('click', () => {
        playSound(key.dataset.key);
        animateHand(key);
      });
    });
  
    function playSound(key) {
      // Add sound playing logic here
      console.log(`Playing sound for key ${key}`);
    }
  
    function animateHand(key) {
      const keyRect = key.getBoundingClientRect();
      const pianoRect = document.querySelector('.piano').getBoundingClientRect();
  
      if (keyRect.left < pianoRect.left + pianoRect.width / 2) {
        leftHand.style.transform = `translate(${keyRect.left}px, ${keyRect.top}px)`;
      } else {
        rightHand.style.transform = `translate(${keyRect.left - 50}px, ${keyRect.top}px)`;
      }
    }
  });
  