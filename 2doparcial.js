// Activar/desactivar modo oscuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const current = localStorage.getItem('theme');
  localStorage.setItem('theme', current === 'dark' ? 'light' : 'dark');
});

// Persistir modo oscuro
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Mostrar alerta al enviar contacto
const contactoBtn = document.querySelector('a[href^="mailto:"]');
contactoBtn?.addEventListener('click', (e) => {
  alert("Estás a punto de enviar un correo a Bahía 21. ¡Gracias por contactarnos!");
});

// Efecto hover en enlaces (ya cubierto en CSS, aquí extra por JS si se desea)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', () => link.style.opacity = 0.85);
  link.addEventListener('mouseout', () => link.style.opacity = 1);
});

// Tooltip en íconos de redes sociales
document.querySelectorAll('.bi').forEach(icon => {
  icon.setAttribute('title', 'Síguenos');
});



