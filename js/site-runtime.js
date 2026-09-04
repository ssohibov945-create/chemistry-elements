/**
 * SCANNERI ELEMENTHO — runtime (эълонҳо, ҳолати саҳифа, танзимот)
 * Аз Admin Panel тавассути localStorage идора мешавад.
 * Ҳеҷ пайванд ба admin.html надорад.
 */
(function () {
  'use strict';
  if (location.pathname.split('/').pop() === 'admin.html') return;

  var KEYS = {
    pages: 'se_pages_status',
    announce: 'se_announce',
    settings: 'se_site_settings'
  };

  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch (e) { return fallback; }
  }

  var page = location.pathname.split('/').pop() || 'index.html';
  if (!page || page === '') page = 'index.html';

  var settings = loadJSON(KEYS.settings, null);
  var pages = loadJSON(KEYS.pages, null);
  var announce = loadJSON(KEYS.announce, null);

  /* Title / description from admin settings */
  if (settings && settings.title) {
    document.title = settings.title;
  }
  if (settings && settings.desc) {
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', settings.desc);
  }

  /* Site-wide maintenance */
  if (settings && settings.maintenance) {
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>Нигоҳдорӣ</title>' +
      '<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'background:#0c1222;color:#f1f5f9;font-family:system-ui,sans-serif;padding:24px;text-align:center}' +
      '.box{max-width:420px;border:1px solid rgba(201,162,39,.25);border-radius:14px;padding:32px 24px;' +
      'background:rgba(20,28,46,.9)}h1{color:#e8d48b;font-size:1.4rem;margin:0 0 12px}' +
      'p{color:#94a3b8;line-height:1.55;margin:0}</style></head><body><div class="box">' +
      '<h1>⚛ Сайт дар ҳолати нигоҳдорӣ</h1>' +
      '<p>Лутфан дертар бозгашт кунед. Корҳои техникӣ идома доранд.</p></div></body>';
    return;
  }

  /* Per-page disable */
  if (pages && pages[page] === false) {
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>Дастнорас</title>' +
      '<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'background:#0c1222;color:#f1f5f9;font-family:system-ui,sans-serif;padding:24px;text-align:center}' +
      '.box{max-width:420px;border:1px solid rgba(201,162,39,.25);border-radius:14px;padding:32px 24px;' +
      'background:rgba(20,28,46,.9)}h1{color:#e8d48b;font-size:1.4rem;margin:0 0 12px}' +
      'p{color:#94a3b8;line-height:1.55;margin:0 0 18px}a{color:#c9a227;font-weight:600}</style></head><body><div class="box">' +
      '<h1>Саҳифа муваққатан дастнорас аст</h1>' +
      '<p>Ин қисмат ҳоло фаъол нест. Ба саҳифаи асосӣ баргардед.</p>' +
      '<a href="index.html">← Ба асосӣ</a></div></body>';
    return;
  }

  /* Announcement bar */
  if (announce && announce.enabled && announce.text) {
    var bar = document.createElement('div');
    bar.setAttribute('role', 'status');
    bar.style.cssText =
      'position:relative;z-index:50;background:linear-gradient(90deg,rgba(201,162,39,.18),rgba(45,212,191,.1));' +
      'border-bottom:1px solid rgba(201,162,39,.28);color:#e8d48b;font-family:system-ui,sans-serif;' +
      'font-size:0.88rem;padding:10px 40px 10px 16px;text-align:center;line-height:1.4';
    bar.textContent = announce.text;
    var close = document.createElement('button');
    close.type = 'button';
    close.setAttribute('aria-label', 'Пӯшидан');
    close.textContent = '×';
    close.style.cssText =
      'position:absolute;right:10px;top:50%;transform:translateY(-50%);background:transparent;' +
      'border:none;color:#e8d48b;font-size:1.25rem;cursor:pointer;line-height:1;padding:4px 8px';
    close.addEventListener('click', function () { bar.remove(); });
    bar.appendChild(close);
    document.addEventListener('DOMContentLoaded', function () {
      document.body.insertBefore(bar, document.body.firstChild);
    });
    if (document.readyState !== 'loading') {
      document.body.insertBefore(bar, document.body.firstChild);
    }
  }
})();
