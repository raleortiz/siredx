const WHATSAPP_NUMERO = '573183377800';
const CORREO = 'raleortizb@gmail.com';
const NOMBRE_CONTACTO = 'Alejandro Ortiz';

function linkWhatsapp(mensaje) {
  const texto = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
}

function alHacerClick(id, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', handler);
}

alHacerClick('btnEvaluacion', () => {
  window.open(
    linkWhatsapp(
      `Hola ${NOMBRE_CONTACTO}, vi el nuevo Sistema de Gestión Empresarial 360° ` +
      '(mensajería, producción, mantenimiento y ventas con reportes a la medida) ' +
      'y quiero solicitar una evaluación de prueba para mi empresa.'
    ),
    '_blank'
  );
});

alHacerClick('btnWhatsApp', () => {
  window.open(
    linkWhatsapp(
      `Hola ${NOMBRE_CONTACTO}, vi tu contacto en la página web y quiero una solución digital para mi empresa. ¿Podemos conversar?`
    ),
    '_blank'
  );
});

alHacerClick('contactWhatsApp', () => {
  window.open(
    linkWhatsapp(`Hola ${NOMBRE_CONTACTO}, vi tu página web y quiero agendar una asesoría.`),
    '_blank'
  );
});

function abrirCorreo() {
  window.location.href = `mailto:${CORREO}?subject=${encodeURIComponent('Quiero una solución digital para mi empresa')}`;
}

alHacerClick('btnEmail', abrirCorreo);
alHacerClick('contactEmail', abrirCorreo);

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const appsToggle = document.getElementById('appsToggle');
const navDropdown = document.getElementById('navDropdown');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', abierto);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (appsToggle && navDropdown) {
  appsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const abierto = navDropdown.classList.toggle('open');
    appsToggle.setAttribute('aria-expanded', abierto);
  });

  document.addEventListener('click', (e) => {
    if (!navDropdown.contains(e.target)) {
      navDropdown.classList.remove('open');
      appsToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
