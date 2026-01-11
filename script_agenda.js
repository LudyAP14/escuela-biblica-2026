// DATOS DE LAS REUNIONES (BIMESTRALES)
const meetings = [
    {
        id: 1,
        name: "Reunión de Inicio de Año",
        date: "Enero - Febrero 2026",
        points: [
            "Bienvenida y Oración Inicial.",
            "Evaluación del Trabajo del Año Pasado: Análisis de logros y áreas de mejora.",
            "Lectura del Acta de la reunión anterior.",
            "Reorganización de Personal: Cambio estratégico de parejas de trabajo.",
            // TEXTOS MODIFICADOS SEGÚN TU SOLICITUD
            "Normativa de Aula: Acceso exclusivo para maestras en turno y padres en proceso de adaptación; se restringe la permanencia de cualquier otra persona ajena al ministerio.",
            "Comunicación Efectiva y Veraz: Requerimiento de respuesta pronta y confirmación obligatoria por parte de todas las maestras en el grupo oficial.",
            "Planificación de Evento: Fiesta de Bienvenida para los niños (Enero/Febrero).",
            "Reporte de Tesorería: Estado financiero actual.",
            "Intervención del Hno. Saúl (Coordinador / Cuerpo Oficial).",
            "Oración Final."
        ]
    },
    {
        id: 2,
        name: "Reunión Segundo Bimestre",
        date: "Marzo - Abril 2026",
        points: [
            "Oración y Devocional.",
            "Seguimiento a las nuevas parejas de trabajo.",
            "Organización final para Semana Santa.",
            "Planificación Día de la Madre (Mayo).",
            "Revisión de ofrendas y necesidades de material.",
            "Intervención del Cuerpo Oficial.",
            "Oración Final."
        ]
    },
    {
        id: 3,
        name: "Reunión Tercer Bimestre",
        date: "Mayo - Junio 2026",
        points: [
            "Oración y Devocional.",
            "Evaluación del Día de la Madre.",
            "Planificación Escuela Bíblica de Vacaciones (Julio/Agosto).",
            "Organización Día del Padre.",
            "Finanzas: Recaudación para evento especial.",
            "Intervención del Cuerpo Oficial.",
            "Oración Final."
        ]
    },
    {
        id: 4,
        name: "Reunión Cuarto Bimestre",
        date: "Julio - Agosto 2026",
        points: [
            "Oración y Devocional.",
            "Logística final Escuela Bíblica de Vacaciones.",
            "Evaluación de medio año: Logros y desafíos.",
            "Planificación Día del Niño (Septiembre/Octubre).",
            "Intervención del Cuerpo Oficial.",
            "Oración Final."
        ]
    },
    {
        id: 5,
        name: "Reunión Quinto Bimestre",
        date: "Septiembre - Octubre 2026",
        points: [
            "Oración y Devocional.",
            "Evaluación del Día del Niño.",
            "Preparativos para Clausura del Año Escolar.",
            "Revisión de Diplomas y Premiaciones.",
            "Intervención del Cuerpo Oficial.",
            "Oración Final."
        ]
    },
    {
        id: 6,
        name: "Reunión Final de Año",
        date: "Noviembre - Diciembre 2026",
        points: [
            "Oración de Agradecimiento.",
            "Evaluación General del Año 2026.",
            "Inventario de materiales sobrantes.",
            "Cena de agradecimiento a las Maestras.",
            "Propuestas preliminares para 2027.",
            "Palabras de clausura del Hno. Saúl.",
            "Oración de Clausura."
        ]
    }
];

const selector = document.getElementById('meetingSelector');

// Generar botones
meetings.forEach((mtg, i) => {
    const btn = document.createElement('button');
    btn.className = 'mtg-btn';
    btn.innerText = mtg.date;
    btn.onclick = () => renderMeeting(i);
    selector.appendChild(btn);
});

function renderMeeting(index) {
    document.querySelectorAll('.mtg-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.mtg-btn')[index].classList.add('active');

    const data = meetings[index];

    document.getElementById('mtgName').innerText = data.name;
    document.getElementById('mtgDate').innerText = data.date;

    const list = document.getElementById('agendaList');
    list.innerHTML = '';
    
    data.points.forEach((point, i) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="point-number">${i + 1}</span> <span>${point}</span>`;
        list.appendChild(li);
    });
}

function exportPDF() {
    const element = document.getElementById('printArea');
    const name = document.getElementById('mtgDate').innerText;
    
    document.querySelectorAll('.no-export').forEach(el => el.style.display = 'none');
    element.classList.add('printing-mode');
    window.scrollTo(0,0);

    const opt = {
        margin:       0.3, 
        filename:     `Agenda_${name}.pdf`,
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { 
            scale: 2, 
            scrollY: 0, 
            useCORS: true 
        },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        element.classList.remove('printing-mode');
        document.querySelectorAll('.no-export').forEach(el => el.style.display = '');
    });
}

renderMeeting(0);