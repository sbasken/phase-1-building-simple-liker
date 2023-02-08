// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')

for (let heart of hearts) {
  heart.addEventListener('click', ()=> {
    mimicServerCall()
    .then(res => {
      console.log(res)
      if (res === "Pretend remote server notified of action!") {
        console.log("Ok!")
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.className = "activated-heart"
        } else if (heart.textContent === FULL_HEART) {
          heart.ClassName = ""
          heart.textContent = EMPTY_HEART;
        }
      }
    })
    .catch(response => {
      if (response === "Random server error. Try again.")
      document.querySelector("#modal").className = ""
      setTimeout(removeError, 3000)
    })
  })
}

function removeError () {
  document.querySelector("#modal").className = "hidden"
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
