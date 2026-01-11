// DATOS
const syllabusData = [
    { month: "Enero", theme: "¡El Gran Comienzo!" },
    { month: "Febrero", theme: "Héroes de la Fe" },
    { month: "Marzo", theme: "Reglas y Conquistas" },
    { month: "Abril", theme: "Fuerza y Reinado" },
    { month: "Mayo", theme: "Profetas y Milagros" },
    { month: "Junio", theme: "Reinas y Reconstrucción" },
    { month: "Julio", theme: "¡Jesús ha llegado!" },
    { month: "Agosto", theme: "Los Milagros de Jesús" },
    { month: "Septiembre", theme: "Historias que Enseñan" },
    { month: "Octubre", theme: "El Amor más Grande" },
    { month: "Noviembre", theme: "La Iglesia Nace" },
    { month: "Diciembre", theme: "¡Victoria Final!" }
];

function getDates(monthIndex) {
    const dates = [];
    const year = 2026;
    const date = new Date(year, monthIndex, 1);
    const dayNames = {0: "DOMINGO", 2: "MARTES"};
    while (date.getMonth() === monthIndex) {
        if (date.getDay() === 0 || date.getDay() === 2) {
            dates.push({
                day: dayNames[date.getDay()],
                fullDate: date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
            });
        }
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

// Función auxiliar para dividir array
function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

const selector = document.getElementById('monthSelector');
syllabusData.forEach((data, i) => {
    const btn = document.createElement('button');
    btn.className = 'month-btn';
    btn.innerText = data.month;
    btn.onclick = () => renderMonth(i);
    selector.appendChild(btn);
});

function renderMonth(index) {
    document.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.month-btn')[index].classList.add('active');

    const printArea = document.getElementById('printArea');
    printArea.classList.add('visible');
    
    // 1. LLENAR PORTADA ANUAL (Página 1)
    const annualCover = document.getElementById('annualCover');
    annualCover.innerHTML = `
        <img src="LOGO_ESC_BIBLICA.png" class="annual-logo" alt="Logo Escuela">
        <div class="annual-title">Libro de Asistencia<br>Anual</div>
        <div class="annual-subtitle">Escuela Bíblica de Niños</div>
        <div class="annual-year">2026</div>
        <div class="church-details">
            <strong>IGLESIA DE DIOS DE LA PROFECÍA</strong><br>
            SANTA SION<br>
            NUEVA CONCEPCIÓN
        </div>
    `;

    // 2. LLENAR PORTADA MENSUAL (Página 2)
    const coverData = syllabusData[index];
    const coverPage = document.getElementById('coverPage');
    coverPage.innerHTML = `
        <img src="LOGO_ESC_BIBLICA.png" alt="Logo" class="cover-logo">
        <h1 class="cover-month">${coverData.month}</h1>
        <div class="cover-theme-label">Tema Mensual</div>
        <div class="cover-theme">${coverData.theme}</div>
        <div class="cover-year">2026</div>
    `;

    // 3. LLENAR LISTADO (Páginas 3 en adelante)
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    
    const dates = getDates(index);
    const dateChunks = chunkArray(dates, 3);

    dateChunks.forEach(chunk => {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page-container';

        let contentHtml = `
            <div class="doc-header">
                <img src="LOGO_ESC_BIBLICA.png" alt="Logo" class="doc-logo-small">
                <div class="doc-info">
                    <h1>Control de Asistencia</h1>
                    <h2>Iglesia de Dios de la Profecía</h2>
                    <h3>"Santa Sion" - Nueva Concepción</h3>
                </div>
            </div>
        `;

        chunk.forEach(d => {
            contentHtml += `
            <div class="day-card">
                <div class="day-header">
                    <span>📅 ${d.day}</span>
                    <span>${d.fullDate}</span>
                </div>
                
                <div class="form-section">
                    <div class="form-group" style="margin-bottom: 5px;">
                        <span class="form-label">Tema de Enseñanza:</span>
                        <div class="form-line"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <span class="form-label">Dirige Coritos:</span>
                            <div class="form-line"></div>
                        </div>
                        <div class="form-group">
                            <span class="form-label">Maestra Enseñanza:</span>
                            <div class="form-line"></div>
                        </div>
                    </div>
                </div>

                <div class="stats-row">
                    <div class="stat-item bg-pink">
                        <span class="stat-label" style="color:#c0392b;">Niñas</span>
                        <span class="stat-circle"></span>
                    </div>
                    <div class="stat-item bg-blue">
                        <span class="stat-label" style="color:#2980b9;">Niños</span>
                        <span class="stat-circle"></span>
                    </div>
                    <div class="stat-item bg-yellow">
                        <span class="stat-label" style="color:#d35400;">Total</span>
                        <span class="stat-circle"></span>
                    </div>
                    <div class="stat-item bg-green">
                        <span class="stat-label" style="color:#27ae60;">Ofrenda</span>
                        <div class="ofrenda-layout">
                            <div class="dollar-icon">$</div>
                            <div class="ofrenda-input"></div>
                        </div>
                    </div>
                </div>

                <div class="obs-box">
                    <span class="form-label">Observaciones:</span>
                    <div class="form-line" style="border-style: dotted; height:18px;"></div>
                </div>
            </div>
            `;
        });

        pageDiv.innerHTML = contentHtml;
        listContainer.appendChild(pageDiv);
    });
}

function exportPDF() {
    const element = document.getElementById('printArea');
    const activeBtn = document.querySelector('.month-btn.active');
    const name = activeBtn ? activeBtn.innerText : 'Mes';
    
    document.querySelectorAll('.no-export').forEach(el => el.style.display = 'none');
    element.classList.add('printing-mode');
    window.scrollTo(0,0);

    const opt = {
        margin:       [0.2, 0.4, 0.2, 0.4], 
        filename:     `Asistencia_${name}_2026.pdf`,
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2, scrollY: 0, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        element.classList.remove('printing-mode');
        document.querySelectorAll('.no-export').forEach(el => el.style.display = '');
    });
}

renderMonth(0);