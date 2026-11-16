// Tout ce qui change (nom, téléphone, e-mail…) se règle ici, une seule fois.
window.SITE = {
  nom: "Main Forte",
  signature: "débarras & trouvailles",
  prenom: "Philippe",
  telephone: "079 000 00 00",        // À REMPLACER
  telephoneLien: "+41790000000",     // À REMPLACER (format international, sans espaces)
  email: "bonjour@exemple.ch",       // À REMPLACER
  zone: "Canton de Vaud",
  boutiqueOuverte: false,            // passer à true quand l'autorisation de commerce d'occasions est reçue
  prixM3: 85, prixM3Grand: 75, minimum: 290
};
document.addEventListener("DOMContentLoaded", function () {
  var S = window.SITE;
  document.querySelectorAll("[data-site]").forEach(function (el) {
    var k = el.getAttribute("data-site");
    if (S[k] !== undefined) el.textContent = S[k];
  });
  document.querySelectorAll("[data-tel]").forEach(function (a) { a.href = "tel:" + S.telephoneLien; });
  document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + S.email; });
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + S.telephoneLien.replace("+", ""); });
  var y = document.getElementById("annee"); if (y) y.textContent = new Date().getFullYear();
});
