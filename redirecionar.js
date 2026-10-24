/* Leva quem abrir o endereço antigo (link, QR Code ou app instalado) para o endereço novo,
   mantendo a pasta e o ?b=apelido. Também desliga o app antigo guardado no celular. */
(function () {
  var novo = self.NOVO_ENDERECO;
  var m = location.pathname.match(/\/(app|controle|c)(\/|$)/);
  var destino = novo + (m ? m[1] + "/" : "") + location.search + location.hash;
  try {
    if ("serviceWorker" in navigator) navigator.serviceWorker.getRegistrations().then(function (rs) { rs.forEach(function (r) { r.unregister(); }); });
    if (window.caches) caches.keys().then(function (ks) { ks.forEach(function (k) { caches.delete(k); }); });
  } catch (e) { /* segue */ }
  var a = document.getElementById("link"); if (a) a.href = destino;
  setTimeout(function () { location.replace(destino); }, 300);
})();
