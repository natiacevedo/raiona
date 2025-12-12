document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  });
});

// === GENERAR CATALOGO ===
function generarCatalogo() {
  const contenedor = document.getElementById("catalogoCards");
  contenedor.innerHTML = "";

  for (const id in productos) {
    const p = productos[id];

    const tipos = p.tipo ? p.tipo.join(" ") : "";

    contenedor.innerHTML += `
      <div class="col catalogo-item" data-tipo="${tipos}">
        <a href="producto.html?id=${id}" class="text-decoration-none">
          <div class="card shadow h-100">
            <img src="${p.imagen}" alt="${p.titulo}">
            <div class="card-body">
              <h6 class="card-title">${p.titulo}</h6>
              ${p.precios?.venta ? `<p class="m-0"><strong>Precio venta:</strong> ${p.precios.venta}</p>` : ""}
              ${p.precios?.alquiler ? `<p class="m-0"><strong>Precio alquiler:</strong> ${p.precios.alquiler}</p>` : ""}
            </div>
          </div>
        </a>
      </div>
    `;
  }
}

generarCatalogo();


// === FILTRAR CATALOGO ===
function filtrarCatalogo(filtro) {
  const items = document.querySelectorAll("#catalogoCards .catalogo-item");

  // 🔥 Marcar botón activo
  document.querySelectorAll(".boton-filtro").forEach(btn => {
    btn.classList.remove("activo");
  });

  const botonActivo = document.querySelector(`.boton-filtro[onclick="filtrarCatalogo('${filtro}')"]`);
  if (botonActivo) botonActivo.classList.add("activo");

  // === Filtrado real ===
  items.forEach(item => {
    const tipo = item.getAttribute("data-tipo").split(" ");
    item.style.display = tipo.includes(filtro) ? "" : "none";
  });
}

/* Animaciones */

document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".animar");
    const hash = window.location.hash;

    // ⭐ 1) Si entrás desde index.html#catalogo → activar ya sin observer
    if (hash === "#catalogo") {
        elementos.forEach(el => el.classList.add("visible"));
        return; // no usar IntersectionObserver en este caso
    }

    // ⭐ 2) Caso normal: activar con IntersectionObserver
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target); // evitar flicker
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(el => observer.observe(el));
});
