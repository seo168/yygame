<script>
// Inject shared header + tabs. Needs: <meta name="site-root"> and <body data-page="apk|install|appinfo|">.
(function(){
  const root = (document.querySelector('meta[name="site-root"]')?.content || '').trim(); // e.g. "" on home, "../" on subpages
  const page = (document.body.getAttribute('data-page') || '').toLowerCase();

  const is = (p) => page === p ? 'primary active' : '';
  const aria = (p) => page === p ? 'aria-current="page"' : '';

  const headerHTML = `
    <header aria-label="Site header">
      <div class="container nav">
        <div class="brand">
          <a href="${root}"><img class="logo" src="${root}assets/logo.webp" alt="yygame logo" width="36" height="36"></a>
          <b>yygame</b>
        </div>
        <button class="menu-toggle" aria-controls="site-menu" aria-expanded="false" aria-label="Open menu">☰</button>
        <nav id="site-menu" class="menu" aria-label="Primary">
          <a class="btn ${is('apk')}" href="${root}apk/" ${aria('apk')}>Download YY Game APK</a>
          <a class="btn ${is('install')}" href="${root}how-to-download/" ${aria('install')}>How to Install</a>
          <a class="btn ${is('appinfo')}" href="${root}app-info/" ${aria('appinfo')}>App Info</a>
          <a class="btn ghost ${is('home')}" href="${root}">Home</a>
        </nav>
      </div>
      <div class="subnav">
        <div class="container tabs" role="navigation" aria-label="Section">
          <a class="tab" href="${root}apk/" ${aria('apk')}>APK</a>
          <a class="tab" href="${root}how-to-download/" ${aria('install')}>Install Guide</a>
          <a class="tab" href="${root}app-info/" ${aria('appinfo')}>App Info</a>
        </div>
      </div>
    </header>
  `;

  const mount = document.getElementById('site-header');
  if (mount){ mount.innerHTML = headerHTML; }

  // mobile toggle
  const ready = () => {
    const btn = document.querySelector('.menu-toggle');
    const menu = document.getElementById('site-menu');
    if(btn && menu){
      btn.addEventListener('click', ()=>{
        const open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
</script>
