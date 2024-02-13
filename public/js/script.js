const answers = [
    "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Aaadduuu please",
      "With a coffee frape and vanilla syrup",
      "What about a Tiramisu Latte",
      "PLEASE Aadduuu",
      "But :*(",
      "I am going to die",
      "please bubu",
      ":((((",
      "Aadduu PLEASE",
      "Aadduu PLEASE",
      "por favor, aadduu",
      "No :(",
      "With khiyu's smile",
      "Please aadduuu",
      "Me on my knee, pleaseee",
      "Please aadduu",
      "Aaddduu please",
      "Okay, let start over..aadduu"
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./public/images/with-rose.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./public/images/happy.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    let msg2= document.getElementById('msg');
    msg2.style.display ="none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}