console.log("hello puzzles");


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");


function toggleModal() {
    console.log("toggleModal");
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    console.log("windowOnClick");
    if (event.target === modal) {
        console.log("sending");
        toggleModal();
    }
}

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);