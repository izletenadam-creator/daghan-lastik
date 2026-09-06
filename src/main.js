import './style.css'

// ── GPS Location Sender ──────────────────────────────────
window.sendMyLocation = function () {
  const btn = document.getElementById('btn-gps');
  const status = document.getElementById('gps-status');

  if (!navigator.geolocation) {
    status.textContent = '⚠️ Tarayıcınız konum özelliğini desteklemiyor.';
    return;
  }

  btn.textContent = '⏳ Konum alınıyor...';
  btn.disabled = true;
  status.textContent = '';

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const mapsLink = `https://maps.google.com/?q=${lat},${lon}`;
      const msg = encodeURIComponent(`🚨 Yolda kaldım! Konumum: ${mapsLink}`);
      btn.textContent = '✅ Konum gönderildi!';
      status.textContent = 'WhatsApp açılıyor...';
      setTimeout(() => {
        window.open(`https://wa.me/905303006843?text=${msg}`, '_blank', 'noopener,noreferrer');
        btn.textContent = '📍 Konumumu Otomatik Gönder';
        btn.disabled = false;
        status.textContent = '';
      }, 800);
    },
    () => {
      btn.textContent = '📍 Konumumu Otomatik Gönder';
      btn.disabled = false;
      status.textContent = '⚠️ Konum alınamadı. Lütfen tarayıcıya konum izni verin.';
    },
    { timeout: 10000, maximumAge: 0 }
  );
};

// ── Service Worker (PWA) ─────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
