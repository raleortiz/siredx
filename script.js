const WHATSAPP_NUMERO = '573183377800';
const CORREO = 'raleortizb@gmail.com';
const NOMBRE_CONTACTO = 'Alejandro Ortiz';

function linkWhatsapp(mensaje) {
  const texto = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
}

document.getElementById('btnEvaluacion').addEventListener('click', () => {
  window.open(
    linkWhatsapp(
      `Hola ${NOMBRE_CONTACTO}, vi el nuevo Sistema de Gestión Empresarial 360° ` +
      '(mensajería, producción, mantenimiento y ventas con reportes a la medida) ' +
      'y quiero solicitar una evaluación de prueba para mi empresa.'
    ),
    '_blank'
  );
});

document.getElementById('btnWhatsApp').addEventListener('click', () => {
  window.open(
    linkWhatsapp(
      `Hola ${NOMBRE_CONTACTO}, vi tu contacto en la página web y quiero una solución digital para mi empresa. ¿Podemos conversar?`
    ),
    '_blank'
  );
});

document.getElementById('contactWhatsApp').addEventListener('click', () => {
  window.open(
    linkWhatsapp(`Hola ${NOMBRE_CONTACTO}, vi tu página web y quiero agendar una asesoría.`),
    '_blank'
  );
});

function abrirCorreo() {
  window.location.href = `mailto:${CORREO}?subject=${encodeURIComponent('Quiero una solución digital para mi empresa')}`;
}

document.getElementById('btnEmail').addEventListener('click', abrirCorreo);
document.getElementById('contactEmail').addEventListener('click', abrirCorreo);

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

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
