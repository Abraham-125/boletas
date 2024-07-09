document.addEventListener('DOMContentLoaded', () => {
    const boleta = {
        "tienda": "Lider",
        "ubicacion": "Pajaritos, Maipú",
        "dia": "Viernes",
        "hora": "17:22",
        "fecha": "28/06/2024",
        "productos": [
            {"nombre": "Pan 1kg", "categoria": "Comida", "precio": 1000},
            {"nombre": "Polera", "categoria": "Ropa", "precio": 3000},
            {"nombre": "Shampoo", "categoria": "Producto", "precio": 1000},
            {"nombre": "Coca Cola", "categoria": "Bebida", "precio": 1000},
            {"nombre": "Celular", "categoria": "Tecnologia", "precio": 70000},
            {"nombre": "Repisa", "categoria": "Mueble", "precio": 10000}
        ],
        "precio_total": 76000
    };

    const boletaContainer = document.getElementById('boleta-container');
    boletaContainer.innerHTML = `
    <table class="table d-flex justify-content-center align-items-center">
        <tbody>
    <tr>
        <td>Tienda: ${boleta.tienda}</td>
        <td>Día: ${boleta.dia}</td>
    </tr>
    <tr>
        <td>Hora: ${boleta.hora}</td>
        <td>Fecha: ${boleta.fecha}</td>
    </tr>
        </tbody>
    </table>
    <table class="table">
        <tbody>
    <tr>
        <td>Ubicacion: ${boleta.ubicacion}</td>
    </tr>
        </tbody>
    </table>
        <div class="row  d-flex justify-content-center">
            <div class="col-8 " style="width:100%">
                <ul class="list-group ">
                    ${boleta.productos.map(producto => `
                        <li class="list-group-item d-flex justify-content-between align-items-center ">
                            ${producto.nombre} [${producto.categoria}]
                            <span>$${producto.precio.toLocaleString()}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
        <hr>
        <h4>Total: $${boleta.precio_total.toLocaleString()}</h4>
    `;

        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('contenedor');
        const pagination = document.getElementById('pagination');
    
        sidebar.addEventListener('hidden.bs.collapse', () => {
            mainContent.classList.add('margen150');
            pagination.classList.add('margen150');
        });
    
        sidebar.addEventListener('shown.bs.collapse', () => {
            mainContent.classList.remove('margen150');
            pagination.classList.remove('margen150');
        });
    });