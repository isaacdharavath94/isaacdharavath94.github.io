// =====================================
// PHOTO LIST
// =====================================

const photos = [
    "L1.jpeg",
    "L2.jpeg",
    "L3.jpeg",
    "L4.jpeg",
    "L5.jpeg",
    "L6.jpeg",
    "L7.jpeg",
    "L8.jpeg",
    "L9.jpeg",
    "L10.jpeg",
    "L11.jpeg",
    "L13.jpeg",
    "L14.jpeg",
    "L12.jpeg"
];

const captions = [
    "The cutest beginning ❤️",
    "A smile that can melt hearts ✨",
    "Growing more beautiful every year 🌸",
    "My favorite person ❤️",
    "A blessing in my life 💕",
    "Beautiful then, beautiful now ✨",
    "My happy place 😊",
    "The girl I adore ❤️",
    "My favorite smile 🌹",
    "A memory I treasure 💌",
    "A beautiful soul ❤️",
    "The one who makes life better ✨",
    "Forever my favorite person ❤️"
];

// =====================================
// SCREENS
// =====================================

const screens = {
    intro: document.getElementById("intro-screen"),
    birthday: document.getElementById("birthday-screen"),
    envelope: document.getElementById("envelope-screen"),
    celebration: document.getElementById("celebration-screen"),
    slideshow: document.getElementById("slideshow-screen"),
    preview: document.getElementById("preview-screen"),
    letter: document.getElementById("letter-screen"),
    final: document.getElementById("final-screen")
};

function showScreen(screen){

    Object.values(screens).forEach(s=>{
        s.classList.remove("active");
    });

    screen.classList.add("active");
}

// =====================================
// BUTTONS
// =====================================

document
.getElementById("intro-btn")
.addEventListener("click",()=>{

    showScreen(screens.birthday);

});

document
.getElementById("birthday-btn")
.addEventListener("click",()=>{

    showScreen(screens.envelope);

});

// =====================================
// ENVELOPE
// =====================================

const envelope =
document.getElementById("envelope");

envelope.addEventListener("click",()=>{
    const music =
document.getElementById(
"bgMusic"
);

music.play();

    envelope.classList.add("open");

    setTimeout(()=>{

        createConfetti();

        showScreen(
            screens.celebration
        );

    },1000);

});

// =====================================
// CELEBRATION
// =====================================

document
.getElementById("memory-btn")
.addEventListener("click",()=>{

    showScreen(
        screens.slideshow
    );

    startSlideshow();

});

// =====================================
// SLIDESHOW
// =====================================

let slideIndex = 0;
let slideInterval;

function startSlideshow(){

    const img =
    document.getElementById(
        "slide-image"
    );

    const caption =
    document.getElementById(
        "slide-caption"
    );

    slideInterval =
    setInterval(()=>{

        slideIndex++;

        if(
            slideIndex >= photos.length
        ){

            clearInterval(
                slideInterval
            );

            setTimeout(()=>{

                showScreen(
                    screens.preview
                );

                startTyping();

            },1500);

            return;
        }

        img.src =
        photos[slideIndex];

        caption.innerText =
        captions[slideIndex];

    },2500);

}

document
.getElementById("letter-btn")
.addEventListener("click",()=>{

    clearInterval(
        slideInterval
    );

showScreen(
screens.preview
);

document.getElementById(
"typewriter"
).innerHTML =
"Typing... ❤️";

setTimeout(()=>{

document.getElementById(
"typewriter"
).innerHTML = "";

startTyping();

},2500);

});

// =====================================
// TYPEWRITER
// =====================================

const previewText =

`Happyyyy Birthdayyyy My Love ❤️

Before you read everything,
I just want you to know
that you are one of the
most beautiful blessings
God has ever given me.

And no matter how crazy
life becomes...

I will always love you,
admire you,
and be grateful for you. ❤️`;

let typingStarted = false;

function startTyping(){

    if(typingStarted) return;

    typingStarted = true;

    let i = 0;

    const target =
    document.getElementById(
        "typewriter"
    );

    function type(){

        if(
            i < previewText.length
        ){

            target.innerHTML +=
            previewText.charAt(i);

            i++;

            setTimeout(
                type,
                35
            );
        }

    }

    type();

}

// =====================================
// FULL LETTER
// =====================================

document
.getElementById(
    "full-letter-btn"
)
.addEventListener(
    "click",
    ()=>{

        showScreen(
            screens.letter
        );

    }
);

// =====================================
// FINAL SCREEN
// =====================================

document
.getElementById(
    "final-btn"
)
.addEventListener(
    "click",
    ()=>{

        showScreen(
            screens.final
        );

        createConfetti();

    }
);

// =====================================
// FLOATING HEARTS
// =====================================

function createHeart(){

    const heart =
    document.createElement(
        "div"
    );

    heart.className =
    "floating-heart";

    const items = [
"❤️",
"💖",
"🌹"
];

heart.innerHTML =
items[
Math.floor(
Math.random()*items.length
)
];

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize =
    (20 + Math.random()*25)
    +"px";

    heart.style.animationDuration =
    (5 + Math.random()*5)
    +"s";

    document
    .getElementById(
        "floating-hearts"
    )
    .appendChild(
        heart
    );

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(
    createHeart,
    400
);

// =====================================
// CONFETTI
// =====================================

function createConfetti(){

    const colors = [
        "#ff4f8b",
        "#ffd700",
        "#00c2ff",
        "#7b2cbf",
        "#00d084",
        "#ff7eb3"
    ];

    for(
        let i=0;
        i<180;
        i++
    ){

        const piece =
        document.createElement(
            "div"
        );

        piece.className =
        "confetti";

        piece.style.left =
        Math.random()*100
        +"vw";

        piece.style.background =
        colors[
            Math.floor(
                Math.random()
                *
                colors.length
            )
        ];

        piece.style.animationDuration =
        (3 + Math.random()*3)
        +"s";

        document.body
        .appendChild(
            piece
        );

        setTimeout(()=>{

            piece.remove();

        },7000);

    }

}

// =====================================
// START CONFETTI ON LOAD
// =====================================

setTimeout(
    createConfetti,
    1500
);
document
.getElementById("secret-btn")
.addEventListener("click",()=>{

document
.getElementById("secret-message")
.innerHTML =

`
❤️ I fall for you more and more every day.

And yes...

eat more,
stay hydrated,

and stop thinking you'll become fat.

You're beautiful exactly the way you are. ❤️
`;

});
