const form = document.getElementById('leadForm');
const status = document.getElementById('status');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = 'Por favor completa los campos obligatorios.';
    status.style.color = '#b91c1c';
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  // TODO: reemplaza este endpoint por tu backend o webhook real (Make/Zapier/Apps Script)
  const endpoint = 'https://example.com/api/leads';

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error('No se pudo enviar');

    status.textContent = '¡Gracias! Recibí tu información y te contactaré pronto.';
    status.style.color = '#166534';
    form.reset();
  } catch {
    status.textContent =
      'No pude enviar el formulario automáticamente. Puedes escribirme por WhatsApp con estos datos.';
    status.style.color = '#92400e';
  }
});
