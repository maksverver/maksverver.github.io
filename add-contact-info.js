// Inserts my email address into the DOM tree programmatically,
// hoping to deter scrapers. Of course any scraper that executes
// Javascript can still find it, but this might help just a bit.
(function() {

  // Very simple symmetric """encryption""" function.
  function scramble(s) {
    let t = '';
    for (let i = 0; i < s.length; ++i) {
      let c = s.charCodeAt(i);
      if (c < 128) c ^= 14;  // only scramble ASCII characters
      t += String.fromCharCode(c);
    }
    return t;
  }

  const e = scramble('coe}Nxk|xk| mf');
  const u = scramble('cogbza4') + e;
  document.querySelectorAll('a.my-email').forEach((a) => {
    a.href = scramble('cogbza4') + e;
    a.textContent = e;
  });
})();
