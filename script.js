// How
let btnHow = document.getElementById("btn-how");
let how = document.getElementById("how");

btnHow.addEventListener("click", function() {
    how.style.display = "block";
    document.body.style.overflow = "hidden";
});

how.addEventListener("click", function() {
    how.style.display = "none";
    document.body.style.overflow = "auto";
});

// Negative
let btnNegative = document.getElementById("btn-negative");
let negative = document.getElementById("negative");

btnNegative.addEventListener("click", function() {
    negative.style.display = "block";
    document.body.style.overflow = "hidden";
});

negative.addEventListener("click", function() {
    negative.style.display = "none";
    document.body.style.overflow = "auto";
});

// Question
let btnQuestion = document.getElementById("btn-question");
let question = document.getElementById("question");

btnQuestion.addEventListener("click", function() {
    question.style.display = "block";
    document.body.style.overflow = "hidden";
});

question.addEventListener("click", function() {
    question.style.display = "none";
    document.body.style.overflow = "auto";
});

// Repeat
let btnRepeat = document.getElementById("btn-repeat");
let repeat = document.getElementById("repeat");

btnRepeat.addEventListener("click", function() {
    repeat.style.display = "block";
    document.body.style.overflow = "hidden";
});

repeat.addEventListener("click", function() {
    repeat.style.display = "none";
    document.body.style.overflow = "auto";
});

// Examples
let btnExamples = document.getElementById("btn-examples");
let examples = document.getElementById("examples");

btnExamples.addEventListener("click", function() {
    examples.style.display = "block";
    document.body.style.overflow = "hidden";
});

examples.addEventListener("click", function() {
    examples.style.display = "none";
    document.body.style.overflow = "auto";
});



// QR
document.addEventListener('DOMContentLoaded', () => {
let btnShare = document.getElementById("btn-share");
const qrImg = document.getElementById("qr-img");

let isFloating = false;

btnShare.addEventListener("click", () => {
  if (isFloating) return;
  isFloating = true;
  // General Mask
let generalMask = document.getElementById('general-mask');
  generalMask.style.display = 'block';

  // Clonamos el QR para animarlo sin mover el original
  const qrClone = qrImg.cloneNode(true);
  qrClone.id = "qr-clone";
  document.body.appendChild(qrClone);


  // Posicionamos el clon encima del original
  const rect = qrImg.getBoundingClientRect();
  qrClone.style.position = "fixed";
  qrClone.style.top = rect.top + "px";
  qrClone.style.left = rect.left + "px";
  qrClone.style.height = rect.height + "px";
  qrClone.style.width = rect.width + "px";
  qrClone.style.transition = "all 0.6s ease-in-out";
  qrClone.style.zIndex = "9999";

  // Forzamos un reflow para que aplique el siguiente paso con transición
  void qrClone.offsetWidth;

  // Ahora animamos al centro con escala x3
  qrClone.classList.add("qr-floating");

  // Luego de 3.5 segundos lo devolvemos
  setTimeout(() => {
    qrClone.classList.remove("qr-floating");
    qrClone.style.top = rect.top + "px";
    qrClone.style.left = rect.left + "px";
    qrClone.style.transform = "scale(1)";

    setTimeout(() => {
      qrClone.remove(); // eliminar clon
      isFloating = false;
      generalMask.style.display = 'none';
    }, 600); // esperar que termine la animación de regreso
  }, 3500);
});
});

// Confetti
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 8 + 4,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        speed: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
      };
    }

    for (let i = 0; i < 150; i++) {
      particles.push(createParticle());
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
        p.y += p.speed;
        p.rotation += p.rotationSpeed;
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(draw);
    }

// Confeti dura unos segundos y se detiene
    draw();
    setTimeout(() => {
      particles = []; // detener confeti
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000); // 5 segundos



// Game
    // Sonidos
    // Play Music Game
const btnPlayMusic = document.getElementById('btn-play-music');

const sonidoBg = new Audio('/Effects/game-music-series-005-splatoon-style-3-by-sascha-ende-from-filmmusic-io.mp3');
sonidoBg.volume = .3;
sonidoBg.load();

const sonidoPlay = new Audio('/Effects/464905__plasterbrain__pc-game-ui-select.flac');
sonidoPlay.volume = 0.10;
sonidoPlay.load();

btnPlayMusic.addEventListener('click', () => {
  sonidoBg.play();
});
    // Dice
const dice = document.getElementById('dice');
const result = document.getElementById('result');

const faceRotations = {
  1: { x: 0,   y: 0   },
  2: { x: 90,  y: 0   },
  3: { x: 0,   y: -90 },
  4: { x: 0,   y: 90  },
  5: { x: -90, y: 0   },
  6: { x: 0,   y: 180 }
};

let isRolling = false;
let totalSpins = 0;

function launchDice() {
  if (isRolling) return;
  isRolling = true;

  const roll = Math.floor(Math.random() * 6) + 1;
  const extraTurns = Math.floor(Math.random() * 5) + 3;
  totalSpins += extraTurns;

  const base = faceRotations[roll];
  const spinsX = totalSpins + Math.floor(Math.random() * 2);
  const spinsY = totalSpins + Math.floor(Math.random() * 2);

  const finalX = base.x + 360 * spinsX;
  const finalY = base.y + 360 * spinsY;

  dice.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;
  result.textContent = 'Lanzando...';

  const onEnd = (e) => {
    if (e.propertyName && e.propertyName !== 'transform') return;
    dice.removeEventListener('transitionend', onEnd);
    isRolling = false;
    result.textContent = `Salió el número: ${roll}`;
  };

  dice.addEventListener('transitionend', onEnd);
}

dice.addEventListener('click', launchDice);
dice.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    launchDice();
  }
});

dice.addEventListener('click', () => {
    sonidoPlay.play();
});

    // Gallery
  const ul = document.getElementById('gallery');
  const lis = document.querySelectorAll('#gallery li');

  // 🔹 Función para resetear la galería
  function resetGallery() {
    lis.forEach(el => {
      el.classList.remove('active', 'hide-layers', 'show-description');
    });
    ul.style.transform = 'translateX(0)';
  }

  // 🔹 Evento para cada imagen
  lis.forEach(li => {
    li.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el click en la imagen dispare el reset global

      lis.forEach(el => {
        el.classList.remove('active', 'hide-layers', 'show-description');
      });

      li.classList.add('active', 'hide-layers', 'show-description');
      sonidoPlay.play();

      const liRect = li.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const liCenter = liRect.left + liRect.width / 2;
      const offset = centerX - liCenter;

      ul.style.transform = `translateX(${offset}px)`;
    });
  });

  // 🔹 Evento global para volver al estado original
  document.addEventListener('click', (e) => {
    const clickedInsideGallery = ul.contains(e.target);
    if (!clickedInsideGallery) {
      resetGallery();
    }
  });


// Language
const btnLang = document.getElementById('btn-lang');
const f1 = document.getElementById('f1'); // 🇨🇴
const f2 = document.getElementById('f2'); // 🇺🇸

let state = false; // false = español, true = inglés

btnLang.addEventListener('click', () => {
  const select = document.querySelector('.goog-te-combo');

  if (!select) {
    alert('Por favor espera un momento mientras se carga el traductor...');
    return;
  }

  // Alternar banderas
  if (state) {
    f2.style.display = 'none';
    f1.style.display = 'block';
  } else {
    f2.style.display = 'block';
    f1.style.display = 'none';
  }
  state = !state;

  // 🔧 Forzar reset del traductor antes de cambiar idioma
  const iframe = document.querySelector('.goog-te-banner-frame');
  if (iframe) {
    iframe.remove(); // Elimina la barra azul si existe
  }

  // 🔁 Cambiar idioma de forma confiable
  const nuevoIdioma = state ? 'en' : 'es';
  select.value = ''; // limpia valor para evitar cache interno
  setTimeout(() => {
    select.value = nuevoIdioma;
    select.dispatchEvent(new Event('change'));
  }, 400); // pequeño retardo para asegurar cambio
});
