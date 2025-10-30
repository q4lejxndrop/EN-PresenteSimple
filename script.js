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
