import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="nav-container">
      <div class="logo">
        DAĞHAN<span>LASTİK</span>
      </div>
      <a href="tel:+905303006843" class="btn-call-nav">Acil Yol Yardım</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <div class="badge">🚛 Bölgenin Tek Tam Donanımlı Ağır Vasıta Müdahale Aracı</div>
        <h1>Yolda mı Kaldınız? <br><span class="highlight">7/24 Yanınızdayız.</span></h1>
        <p>Simav ve 90 km çevresinde tır, kamyon, otobüs ve tüm ticari araçlarınız için anında mobil lastik tamiri ve yol yardım hizmeti.</p>
        
        <div class="cta-group">
          <a href="tel:+905303006843" class="btn-primary" style="flex-direction: column; align-items: center; gap: 0; padding: 0.8rem 2rem;">
            <span style="font-size: 0.9rem; font-weight: 600; opacity: 0.9;">📞 HEMEN ARA (Hat 1)</span>
            <span style="font-size: 1.3rem;">0530 300 68 43</span>
          </a>
          <a href="tel:+905352305888" class="btn-primary" style="flex-direction: column; align-items: center; gap: 0; padding: 0.8rem 2rem;">
            <span style="font-size: 0.9rem; font-weight: 600; opacity: 0.9;">📞 HEMEN ARA (Hat 2)</span>
            <span style="font-size: 1.3rem;">0535 230 58 88</span>
          </a>
        </div>
        
        <div class="cta-group" style="margin-top: 1rem;">
          <a href="https://wa.me/905303006843?text=Yolda%20kaldım,%20konum%20gönderiyorum." target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
            💬 Konum Gönder (Hat 1)
          </a>
          <a href="https://wa.me/905352305888?text=Yolda%20kaldım,%20konum%20gönderiyorum." target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
            💬 Konum Gönder (Hat 2)
          </a>
        </div>

        <div style="margin-top: 1.5rem; width: 100%;">
          <button id="btn-gps" class="btn-gps" onclick="sendMyLocation()">
            📍 Konumumu Otomatik Gönder
          </button>
          <p id="gps-status" style="font-size:0.8rem; color: var(--color-text-muted); margin-top: 0.5rem; min-height: 1.2em;"></p>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">⏱️</div>
        <h3>Hızlı Müdahale</h3>
        <p>Günün her saati, çağrınızı alır almaz yola çıkıyoruz. Beklemek yok.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🚜</div>
        <h3>Ağır Vasıta Uzmanı</h3>
        <p>Tır, kamyon ve iş makineleri için özel donanımlı kurtarma ve lastik değişim aracı.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📍</div>
        <h3>Geniş Hizmet Ağı</h3>
        <p>Sadece Simav değil, çevre tüm ilçelere ve kara yollarına kesintisiz hizmet.</p>
      </div>
    </section>

    <section class="areas" style="padding-bottom: 2rem;">
      <div class="areas-container">
        <h2 class="section-title">Hizmet <span>Bölgelerimiz</span></h2>
        <div class="area-grid">
          <div class="area-tag">Simav</div>
          <div class="area-tag">Selendi</div>
          <div class="area-tag">Demirci</div>
          <div class="area-tag">Emet</div>
          <div class="area-tag">Tavşanlı</div>
          <div class="area-tag">Gediz</div>
          <div class="area-tag">Şaphane</div>
          <div class="area-tag">Pazarlar</div>
        </div>
      </div>
    </section>

    <section class="address" style="background: var(--color-bg); padding: 3rem 2rem; text-align: center;">
      <div style="max-width: 800px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 3rem;">
        <h3 style="color: var(--color-primary); margin-bottom: 1rem; font-size: 1.5rem;">Merkez Noktamız</h3>
        <p style="color: var(--color-text-muted); font-size: 1.1rem;">
          📍 Yeni Mahalle Sanayi Sitesi 14. Blok Küme Evleri No:2/3<br>Simav / Kütahya
        </p>
        <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.7;">© 2026 Dağhan Lastik & Mobil Yol Yardım</p>
        <p style="margin-top: 0.5rem; font-size: 0.8rem; opacity: 0.5;">Developed by <a href="https://fslabb.com" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">fslabb.com</a></p>
      </div>
    </section>
  </main>

  <div class="mobile-cta" style="display: flex; gap: 0.5rem; padding: 0.5rem;">
    <a href="tel:+905303006843" class="btn-primary" style="flex: 1; padding: 0.8rem; font-size: 1rem;">📞 Hat 1</a>
    <a href="tel:+905352305888" class="btn-primary" style="flex: 1; padding: 0.8rem; font-size: 1rem;">📞 Hat 2</a>
  </div>
`

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
