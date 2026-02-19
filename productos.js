const productos = {
        soportesverticales: {
        id: "soportesverticales",
        titulo: "Box con Soportes Verticales",
        caracteristicas: [
            "Cerradura con triple punto de anclaje.",
            "Posibilidad de poner candado.",
            "Brazos hidráulicos para facilitar su apertura.",
            "Sostenido por su propia estructura sin necesidad de ser amurada.",
            "Capacidad de más de 400 kg de carga.",
            "Ignífugo.",
            "Resistencia contra la oxidación y corrosión.",
            "Soportes regulables en altura para adaptarlo a cualquier vehículo."
        ],
        material: "Acero galvanizado calibre 20 (cuerpo del box) y 14 (soportes verticales) con un acabado de pintura electroestática color gris claro.",
        dimensiones: [
            "Largo: 2.10m / 2.40m",
            "Alto: 1.00m",
            "Profundidad: 1.10m",
            "Soportes regulables: entre 1.00m y 1.50m"
        ],
        imagen: "img/soportesverticales.jpg",
        imagenes: [
            "img/soportesverticales copia.jpg",
            "img/soportesverticales1.jpg",
            "img/soportesverticales2.jpg",
            "img/soportesverticales3.jpg"
        ],
        tipo: ["venta", "alquiler"],
        precios: {
            venta: "desde U$S 1080",
            alquiler: "desde U$S 20/mes",
            venta1: "2.10m: U$S 1080",
            venta2: "2.40m: U$S 1130",
            alquiler1: "2.10m: U$S 20/mes",
            alquiler2: "2.40m: U$S 22/mes"
        },
        montevideo: "U$S 90",
        maldonado: "U$S 150",
      },
      colganteblack: {
        id: "colganteblack",
        titulo: "Box Colgante Black",
        caracteristicas: [
            "Cerradura con doble punto de anclaje.",
            "Posibilidad de amurarse a la pared o apoyarse sobre el suelo.",
            "Capacidad de 150 kg. de carga.",
            "Ignífugo.",
            "Resistencia contra la oxidación y corrosión."
        ],
        material: "Acero galvanizado calibre 24 con un acabado de pintura electroestática color negro mate.",
        dimensiones: [
            "Largo: 2.00m",
            "Alto: 1.00m",
            "Profundidad: 0.55m"
        ],
        imagen: "img/colganteblack.jpg",
        imagenes: [
          "img/colganteblack copia.jpg",
            "img/black1.jpg",
            "img/black2.jpg",
            "img/black3.jpg",
            "img/black4.jpg",
            "img/black5.jpg"
        ],
        tipo: ["venta", "alquiler"],
        precios: {
            venta: "U$S 700",
            alquiler: "U$S 13/mes"
        },
        montevideo: "U$S 90",
        maldonado: "U$S 150",
      },
      colgantegrey: {
        id: "colgantegrey",
        titulo: "Box Colgante Grey",
        caracteristicas: [
            "Cerradura con triple punto de anclaje.",
            "Posibilidad de poner candado.",
            "Brazos hidráulicos para facilitar su apertura.",
            "Capacidad de 200 kg de carga.",
            "Ignífugo.",
            "Resistencia contra la oxidación y corrosión."
        ],
        material: "Acero galvanizado calibre 20 con un acabado de pintura electroestática color gris claro.",
        dimensiones: [
            "Largo: 1.75m",
            "Alto: 1.00m",
            "Profundidad: 0.90m"
        ],
        imagen: "img/colgantegrey.jpg",
        imagenes: [
            "img/colgantegrey copia.jpg",
            "img/grey1.png",
            "img/grey2.jpg",
            "img/grey3.jpg"
        ],
        tipo: ["venta"],
        precios: {
            venta: "U$S 930"
        },
        montevideo: "U$S 90",
        maldonado: "U$S 150",
      },
      doble: {
        id: "doble",
        titulo: "Box Doble",
        caracteristicas: [
            "Cerradura con triple punto de anclaje en parte superior. Cerradura con doble anclaje en parte inferior.",
            "Sostenido por su propia estructura sin necesidad de amurarse",
            "Brazos hidráulicos para facilitar su apertura en la parte superior y dos puertas batientes en la inferior.",
            "Capacidad superior a los 3.700 litros.",
            "Ignífugo.",
            "Resistencia contra la oxidación y corrosión.",
            "Resistencia de carga de 500kg."
        ],
        material: "Acero galvanizado calibre 20 (cuerpo del Box) y 14 (soportes y estructura) con un acabado de pintura electrostática color gris claro.",
        dimensiones: [
            "Largo: 2.10m",
            "Alto: 2.10m",
            "Profundidad: 0.90m"
        ],
        imagen: "img/doble.jpg",
        imagenes: [
          "img/doble copia.jpg",
            "img/doble1.jpg",
            "img/doble2.jpg",
            "img/doble3.jpg"
        ],
        tipo: ["venta", "alquiler"],
        precios: {
            venta: "U$S 1690",
            alquiler: "U$S 36/mes"
        },
        montevideo: "U$S 90",
        maldonado: "U$S 150",
      },
      rackdetecho: {
        id: "rackdetecho",
        titulo: "Rack de techo",
        caracteristicas: [
            "Estantería aérea sin cerramiento.",
            "Altura regulable según la necesidad.",
            "Resistencia de carga de 150kg."
        ],
        material: "Acero laminado en frío.",
        dimensiones: [
            "Largo: 2.40m",
            "Ancho: 0.90m",
            "Alto: Regulable"
        ],
        imagen: "img/rackdetecho.jpg",
        imagenes: [
            "img/rackdetecho copia.jpg",
            "img/rackdetecho1.jpg"
        ],
        tipo: ["venta"],
        precios: {
            venta: "U$S 250"
        },
        montevideo: "U$S 90",
        maldonado: "U$S 150",
      },
      cajasplasticas: {
        id: "cajasplasticas",
        titulo: "Riel-Box",
        descripcion: "Sistema de rieles con soporte al techo para la colocación de cajas de PVC de alta densidad. Brinda la posibilidad de aprovechar estratégicamente el espacio para almacenamiento.",
        caracteristicasrieles: [
            "Rieles de acero.",
        ],
        caracteristicas: [
            "Alta densidad y resistencia.",
            "Capacidad de 102 litros.",
            "Soportan hasta 25kg.",
            "Posibilidad de cerrarlas con presinto o candado para mayor seguridad."
        ],
        material: "Rieles de acero galvanizado y cajas PVC de alta resistencia.",
        dimensiones: [
            "Largo de la caja: 72cm",
            "Ancho de la caja: 49cm",
            "Alto de la caja: 38cm",
            "Medida del total (3 cajas): 55cm x 2,18m",
            "Medida del total (6 cajas): 1,10m x 2,18m",
            "Medida del total (9 cajas): 1,65m x 2,18m"
        ],
        imagen: "img/Cajas9.png",
        imagenes: [
            "img/cajasplasticas instalacion.jpeg",
            "img/cajasplasticas-copia2.png",
            "img/cajasplasticas-copia.png",
            "img/profundidad.jpeg",
            "img/cajasplasticas instalacion2.jpeg"
        ],
        tipo: ["venta"],
        precios: {
            venta: "desde U$S 197usd",
            venta1: "Set de rieles x3 cajas: U$S 197",
            venta2: "Set de rieles x6 cajas: U$S 379",
            venta3: "Set de rieles x9 cajas: U$S 478"
        },
        montevideo: "U$S 50",
        maldonado: "U$S 50 + envío por agencia",
      },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const contenedor = document.getElementById("producto");
const p = productos[id];

if (p) {
  document.title = "Raiona | " + p.titulo;

  contenedor.innerHTML = `
    <a href="index.html#catalogo" class="colorN text-decoration-none volver">< Volver al catálogo</a>
    <div class="producto-detalle d-flex align-items-center" style="gap:20px; flex-wrap:wrap;">
      <div class="imagen" style="flex:1; min-width:300px;">
        <div id="carrusel" class="carrusel"></div>
      </div>
      
      <div class="info" style="flex:1; min-width:300px">
        <h2 class="mb-2">${p.titulo}</h2>

        ${p.descripcion ? `
          <p class="mt-2">${p.descripcion}</p>
        ` : ""}

        ${p.caracteristicasrieles ? `
          <div>
            <strong>Características de los rieles:</strong>
            <ul>
              ${p.caracteristicasrieles.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        ` : ""}

        ${p.caracteristicas ? `
          <div>
            <strong>${p.caracteristicasrieles ? "Características de las cajas de PVC:" : "Características:"}</strong>
            <ul>
              ${p.caracteristicas.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
        ${p.material ? `<p><strong>Material:</strong> ${p.material}</p>` : ""}

        ${p.dimensiones ? `
          <div>
            <strong>Dimensiones:</strong>
            <ul>
              ${p.dimensiones.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
      </div>

    </div>

    <!-- PRECIOS -->
    <div class="text-center my-4">

      <!-- Precio venta -->
      ${p.precios?.venta && !p.precios.venta.toLowerCase().startsWith("desde") ? `
        <div>
          <p class="button22">Precio de venta: <span class="negrita">${p.precios.venta}</span></p>
        </div>
      ` : ""}

      <!-- Precio alquiler -->
      ${p.precios?.alquiler && !p.precios.alquiler.toLowerCase().startsWith("desde") ? `
        <div>
          <p class="button22">Precio de alquiler: <span class="negrita">${p.precios.alquiler}</span></p>
        </div>
      ` : ""}

      <div class="text-center my-3">

      <!-- BLOQUE VENTA RESPONSIVE -->
      ${
        Object.keys(p.precios || {})
          .filter(key => key.startsWith("venta") && key !== "venta")
          .length > 0
          ? `
            <div class="text-center mb-2">
              <p class="mb-2">Precio de venta:</p>
              <div class="d-flex flex-wrap justify-content-center gap-2">
                ${Object.keys(p.precios)
                  .filter(key => key.startsWith("venta") && key !== "venta")
                  .map(key => {
                    const texto = p.precios[key];
                    const partes = texto.split(":");
                    return `
                      <span class="button22 px-3 py-1">
                        ${partes[0]}:
                        <span class="negrita">${partes[1]}</span>
                      </span>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          `
          : ""
      }

      <!-- BLOQUE ALQUILER RESPONSIVE -->
      ${
        Object.keys(p.precios || {})
          .filter(key => key.startsWith("alquiler") && key !== "alquiler")
          .length > 0
          ? `
            <div class="text-center mb-3">
              <p class="mb-2">Precio de alquiler:</p>
              <div class="d-flex flex-wrap justify-content-center gap-2">
                ${Object.keys(p.precios)
                  .filter(key => key.startsWith("alquiler") && key !== "alquiler")
                  .map(key => {
                    const texto = p.precios[key];
                    const partes = texto.split(":");
                    return `
                      <span class="button22 py-1">
                        ${partes[0]}:
                        <span class="negrita">${partes[1]}</span>
                      </span>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          `
          : ""
      }

      </div>

      ${p.montevideo ? `
        <div>
          <p class="mb-1">Envío e instalación Montevideo: ${p.montevideo}</p>
        </div>
      ` : ""}

      ${p.maldonado ? `
        <div>
          <p>Envío e instalación Maldonado: ${p.maldonado}</p>
        </div>
      ` : ""}
    </div>


    <!-- BOTONES DE ACCIÓN -->
    <div class="text-center d-flex justify-content-center gap-3 flex-wrap">

      <!-- Botón COMPRAR (siempre visible) -->
      <a href="https://wa.me/59896303124?text=Hola,%20quiero%20comprar%20el%20${encodeURIComponent(p.titulo)}"
        target="_blank"
        class="button2 text-decoration-none">
        Comprar
      </a>

      <!-- Botón ALQUILAR (solo si tiene alquiler) -->
      ${p.precios?.alquiler ? `
        <a href="form.html?id=${p.id}"
          class="button2 text-decoration-none">
          Alquilar
        </a>
      ` : ""}

    </div>
 
    <hr>

    <div class="mt-2 text-center">

    ${p.id !== "cajasplasticas" ? `
      <p>
        <b class="colorN">Compra: </b>
        Conseguí tu propio Box para toda la vida, sin necesidad de mantenimiento y con garantía por 5 años.
      </p>
    ` : ""}

    ${p.precios?.alquiler ? `
      <p>
        <b class="colorN">Alquiler: </b>
        El servicio de alquiler te brinda la posibilidad de tener un Box en tu propio garage abonando solamente la tasa de instalación y luego una pequeña cuota mensual mediante el débito automático de tu tarjeta de crédito.
        <b> El plazo de alquiler es por un mínimo de 12 meses.</b>
      </p>
    ` : ""}

  </div>


    ${p.link ? `
      <div class="text-center my-4">
        <a href="${p.link}" target="_blank" class="button2 text-decoration-none">Visitar sitio</a>
      </div>
    ` : ""}
  `;

// =========================
//   CARRUSEL + MINIATURAS
// =========================

const carrusel = document.getElementById("carrusel");

if (p.imagenes && p.imagenes.length > 0) {
    let index = 0;

    // Marcup del carrusel (solo imagen + botones)
    carrusel.innerHTML = `
        <div class="carrusel-imagen">
            <img id="carrusel-img" src="${p.imagenes[0]}" alt="${p.titulo}">
        </div>

        <button id="prev" class="carrusel-btn">&#10094;</button>
        <button id="next" class="carrusel-btn">&#10095;</button>
    `;

    // CONTENEDOR DE MINIATURAS FUERA DEL CARRUSEL
    const thumbContainer = document.createElement("div");
    thumbContainer.id = "thumbnails";
    thumbContainer.style.cssText = `
        display:flex;
        gap:10px;
        margin-top:1rem;
        flex-wrap:wrap;
        justify-content:center;
    `;
    carrusel.parentNode.insertBefore(thumbContainer, carrusel.nextSibling);

    // Generar miniaturas
    thumbContainer.innerHTML = p.imagenes
        .map((img, i) => `
            <img 
                src="${img}"
                class="thumb"
                data-index="${i}"
                style="
                    width:60px;
                    height:60px;
                    object-fit:cover;
                    border-radius:5px;
                    cursor:pointer;
                    border:2px solid ${i === 0 ? '#000' : '#ccc'};
                "
            >
        `)
        .join("");

    // Evento thumbnail clickeable
    document.querySelectorAll(".thumb").forEach(thumb => {
        thumb.addEventListener("click", () => {
            index = parseInt(thumb.dataset.index);
            document.getElementById("carrusel-img").src = p.imagenes[index];
            actualizarThumbs();
        });
    });

    // Botón PREV
    document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + p.imagenes.length) % p.imagenes.length;
        document.getElementById("carrusel-img").src = p.imagenes[index];
        actualizarThumbs();
    });

    // Botón NEXT
    document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % p.imagenes.length;
        document.getElementById("carrusel-img").src = p.imagenes[index];
        actualizarThumbs();
    });

    // Función para actualizar borde de miniaturas
    function actualizarThumbs() {
        document.querySelectorAll(".thumb").forEach((t, i) => {
            t.style.border = i === index ? "2px solid #000" : "2px solid #ccc";
        });
    }

} else {
    // Si el producto solo tiene una imagen
    carrusel.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}" style="width:100%; border-radius:8px;">
    `;
}


} else {
  contenedor.innerHTML = `<p class="text-center">Producto no encontrado 😕</p>`;
}

mostrarOtrosProductos(id);

// === MOSTRAR OTROS PRODUCTOS ===
function mostrarOtrosProductos(productoActualId) {
  const contenedorOtros = document.getElementById("otrosProductos");
  contenedorOtros.innerHTML = "";

  for (const id in productos) {
    if (id === productoActualId) continue;

    const p = productos[id];

    contenedorOtros.innerHTML += `
      <div class="col-md-3 mb-4">

        <a href="producto.html?id=${id}" class="text-decoration-none text-dark">
          <div class="card h-100 shadow-sm" style="cursor:pointer">
            <img src="${p.imagen}" class="card-img-top" alt="${p.titulo}">
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

