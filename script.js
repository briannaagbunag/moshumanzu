
const canvas = document.getElementById('ambient-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 60;

// Particle class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 6 + 2;
    this.speedX = Math.random() * 0.3 - 0.15; // slow movement
    this.speedY = Math.random() * 0.3 - 0.15;
    // Color: pink, white, or subtle red
    const colors = ['rgba(255,140,199,0.3)', 'rgba(255,255,255,0.2)', 'rgba(255,60,60,0.15)'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if(this.x > canvas.width) this.x = 0;
    if(this.x < 0) this.x = canvas.width;
    if(this.y > canvas.height) this.y = 0;
    if(this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10; // subtle glow
    ctx.fill();
  }
}

// Create particles
for(let i = 0; i < numParticles; i++) {
  particles.push(new Particle());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

    // Wait until the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
      const discord = document.getElementById('discord');

      discord.addEventListener('click', () => {
        discord.classList.toggle('show-text');
      });
    });

    const socialsWithDiscord = document.querySelectorAll('.socials a, .discord');

    socialsWithDiscord.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        for(let i=0; i<5; i++){
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.setProperty('--dx', `${Math.random()*20-10}px`);
        spark.style.setProperty('--dy', `${Math.random()*20-10}px`);
        icon.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
        }
    });
    });

      document.querySelectorAll('.beautycard, .gamecard').forEach(card => {
        const bg = card.dataset.bg;
        if (bg) {
          card.style.setProperty('--card-bg', `url(${bg})`);
        }

        card.addEventListener('click', e => {
          // allow buttons/links to still work
          if (e.target.closest('a')) return;

          // close others
          document.querySelectorAll('.active').forEach(c => {
            if (c !== card) c.classList.remove('active');
          });

          card.classList.toggle('active');
        });
      });


// ===== TAB TOGGLE =====
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    // remove active from all tabs + panels
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    // activate clicked tab + matching panel
    tab.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});


document.querySelectorAll('.beautycard, .gamecard').forEach(card => {
  const bg = card.getAttribute('data-bg');
  if (bg) {
    card.style.setProperty('--card-bg', `url(${bg})`);
  }
});