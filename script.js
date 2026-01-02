// --- CONFIGURACIÓN DE MAESTRAS (NUEVO ORDEN ESPECÍFICO) ---
const teacherPairs = [
    "Hna. Mercedes y Hna. Maybelin",
    "Hna. Arely y Hna. Yessenia",
    "Hna. América y Hna. Mélida",
    "Hna. Ludy y Hna. Norma",
    "Hna. Noemy y Hna. América"
];

// --- PLAN DE ESTUDIOS 2026 (NIÑOS 5-10 AÑOS) ---
const syllabusData = [
    {
        month: "Enero",
        icon: "🌍",
        theme: "¡El Gran Comienzo!",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Día 1 al 6: Dios crea luz y animales", verse: "Génesis 1:1", thought: "Dios hizo todo el mundo hermoso para mí." },
            { story: "Adán y Eva: Los primeros en el jardín", verse: "Génesis 1:27", thought: "Soy especial porque Dios me creó." },
            { story: "El Arca de Noé y el desfile de animales", verse: "Génesis 6:22", thought: "Debo obedecer a Dios aunque otros no lo hagan." },
            { story: "La Torre de Babel: ¡Confusión de idiomas!", verse: "Génesis 11:9", thought: "No debo ser orgulloso ni creerme más que Dios." },
            { story: "El llamado de Abram: ¡Deja tu casa!", verse: "Génesis 12:1", thought: "Escucho la voz de Dios y le sigo con fe." },
            { story: "Lot escoge mal: Cuidado con lo que miras", verse: "Génesis 13:10", thought: "Pongo a Dios primero antes que mis gustos." },
            { story: "Isaac: El hijo de la risa y la promesa", verse: "Génesis 21:3", thought: "Dios siempre cumple sus promesas a tiempo." },
            { story: "Rebeca ayuda en el pozo (Bondad)", verse: "Génesis 24:18", thought: "Soy amable y ayudo a los demás." }
        ]
    },
    {
        month: "Febrero",
        icon: "⛺",
        theme: "Héroes de la Fe",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1504280506508-36f121b65b55?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Jacob sueña con una escalera al cielo", verse: "Génesis 28:12", thought: "Dios está conectado conmigo siempre." },
            { story: "José recibe una túnica de muchos colores", verse: "Génesis 37:3", thought: "Mi Padre Dios me ama mucho." },
            { story: "José perdona a sus hermanos en Egipto", verse: "Génesis 45:5", thought: "Perdonar sana mi corazón y alegra a Dios." },
            { story: "Una canasta en el río: Nace bebé Moisés", verse: "Éxodo 2:3", thought: "Dios me cuida desde que soy pequeñito." },
            { story: "Moisés y la zarza que ardía con fuego", verse: "Éxodo 3:4", thought: "Me quito los zapatos: Respeto la casa de Dios." },
            { story: "¡Plagas! Ranas, moscas y el poder de Dios", verse: "Éxodo 8:1", thought: "Nadie es más poderoso que mi Dios." },
            { story: "Cruzando el Mar Rojo en seco", verse: "Éxodo 14:21", thought: "Dios abre camino donde no lo hay." },
            { story: "Comida del cielo: El Maná diario", verse: "Éxodo 16:15", thought: "Doy gracias por mi comida de cada día." }
        ]
    },
    {
        month: "Marzo",
        icon: "📜",
        theme: "Reglas y Conquistas",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1542614748-0d17042301c3?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Los 10 Mandamientos: Reglas de amor", verse: "Éxodo 20:1", thought: "Las reglas de Dios son para protegerme." },
            { story: "El Tabernáculo: La casa viajera de Dios", verse: "Éxodo 25:8", thought: "Quiero que Dios viva en mi corazón." },
            { story: "12 Espías: ¡Gigantes vs. Uvas grandes!", verse: "Números 13:30", thought: "Con Dios soy valiente, no tengo miedo." },
            { story: "La burra de Balaam habla", verse: "Números 22:28", thought: "Dios puede usar cualquier cosa para hablarme." },
            { story: "Rahab esconde a los espías (Cuerda roja)", verse: "Josué 2:21", thought: "Dios salva a mi familia si tengo fe." },
            { story: "¡Muros abajo! La batalla de Jericó", verse: "Josué 6:20", thought: "Obedecer y alabar trae la victoria." },
            { story: "El día que el sol se detuvo", verse: "Josué 10:13", thought: "Para Dios nada, nada es imposible." },
            { story: "Gedeón y sus 300 valientes (Trompetas)", verse: "Jueces 7:20", thought: "No importa si soy pequeño, Dios está conmigo." }
        ]
    },
    {
        month: "Abril",
        icon: "🦁",
        theme: "Fuerza y Reinado",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1548366086-7f1b76106622?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Sansón el fuerte: El secreto del cabello", verse: "Jueces 16:17", thought: "Mi verdadera fuerza viene de Dios." },
            { story: "Rut recoge espigas en el campo", verse: "Rut 2:2", thought: "Soy trabajador y leal con mi familia." },
            { story: "El niño Samuel escucha: 'Heme aquí'", verse: "1 Samuel 3:4", thought: "Aprendo a escuchar la voz de Dios." },
            { story: "David el pastorcito y su arpa", verse: "1 Samuel 16:23", thought: "Alabo a Dios con música y alegría." },
            { story: "David vence al gigante Goliat", verse: "1 Samuel 17:45", thought: "En el nombre de Jesús venzo mis miedos." },
            { story: "David y Jonatán: Mejores amigos", verse: "1 Samuel 18:1", thought: "Soy un buen amigo que comparte." },
            { story: "El Rey Salomón pide sabiduría", verse: "1 Reyes 3:9", thought: "Pido a Dios inteligencia para hacer lo bueno." },
            { story: "Elías y los cuervos que le traen carne", verse: "1 Reyes 17:6", thought: "Dios suple mis necesidades de forma increíble." }
        ]
    },
    {
        month: "Mayo",
        icon: "🔥",
        theme: "Profetas y Milagros",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1485642736156-b6058f96e147?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Fuego del cielo en el Monte Carmelo", verse: "1 Reyes 18:38", thought: "Solo Jehová es el Dios verdadero." },
            { story: "Elías sube al cielo en un carro de fuego", verse: "2 Reyes 2:11", thought: "Hay un cielo real esperándome." },
            { story: "Eliseo y la vasija de aceite que no acaba", verse: "2 Reyes 4:6", thought: "Dios multiplica lo poquito que tengo." },
            { story: "Naamán se baña 7 veces en el río", verse: "2 Reyes 5:14", thought: "Obedezco aunque parezca extraño." },
            { story: "Jonás y el gran pez (¡Glup!)", verse: "Jonás 1:17", thought: "No puedo huir de Dios, Él me ve." },
            { story: "Daniel dice NO a la comida del Rey", verse: "Daniel 1:8", thought: "Cuido mi cuerpo comiendo sano para Dios." },
            { story: "Tres amigos en el horno de fuego", verse: "Daniel 3:25", thought: "Jesús está conmigo en los problemas." },
            { story: "Daniel duerme con los leones", verse: "Daniel 6:22", thought: "El ángel de Dios me cierra la boca al miedo." }
        ]
    },
    {
        month: "Junio",
        icon: "👸",
        theme: "Reinas y Reconstrucción",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "La Reina Ester es valiente ante el Rey", verse: "Ester 4:16", thought: "Nací con un propósito especial de Dios." },
            { story: "Nehemías construye el muro con una mano", verse: "Nehemías 4:17", thought: "Trabajo y oro al mismo tiempo." },
            { story: "Job: Paciencia en la prueba", verse: "Job 1:21", thought: "Confío en Dios aunque esté triste." },
            { story: "Isaías ve el trono de Dios (Santo, Santo)", verse: "Isaías 6:3", thought: "Dios es Santo y Majestuoso." },
            { story: "Jeremías: El profeta joven", verse: "Jeremías 1:7", thought: "No soy muy pequeño para servir a Dios." },
            { story: "Ezequiel y los huesos secos que reviven", verse: "Ezequiel 37:5", thought: "El Espíritu de Dios da vida." },
            { story: "Malaquías: Traed los diezmos", verse: "Malaquías 3:10", thought: "Soy generoso con la casa de Dios." },
            { story: "El silencio antes de Jesús (400 años)", verse: "Gálatas 4:4", thought: "Espero el tiempo perfecto de Dios." }
        ]
    },
    {
        month: "Julio",
        icon: "👶",
        theme: "¡Jesús ha llegado!",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "El Ángel Gabriel visita a María", verse: "Lucas 1:30", thought: "Para Dios nada es imposible." },
            { story: "Nacimiento en Belén: No había lugar", verse: "Lucas 2:7", thought: "Preparo un lugar en mi corazón para Jesús." },
            { story: "Los pastores y el coro de ángeles", verse: "Lucas 2:14", thought: "¡Gloria a Dios en las alturas!" },
            { story: "Los Sabios siguen la estrella", verse: "Mateo 2:10", thought: "Busco a Jesús para adorarle." },
            { story: "El niño Jesús perdido en el Templo", verse: "Lucas 2:49", thought: "Me gusta estar en la casa de Dios." },
            { story: "Juan el Bautista: Voz en el desierto", verse: "Mateo 3:3", thought: "Preparo el camino para el Señor." },
            { story: "El Bautismo de Jesús y la paloma", verse: "Mateo 3:16", thought: "Soy un hijo amado de Dios." },
            { story: "Jesús vence la tentación con la Biblia", verse: "Mateo 4:4", thought: "Uso la Palabra de Dios como espada." },
            { story: "Pescadores de hombres (Pedro y Andrés)", verse: "Mateo 4:19", thought: "Invito a mis amigos a conocer a Jesús." }
        ]
    },
    {
        month: "Agosto",
        icon: "🥖",
        theme: "Los Milagros de Jesús",
        themeColor: "theme-blue",
        bgUrl: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Agua en jugo de uva: Bodas de Caná", verse: "Juan 2:11", thought: "Hago todo lo que Jesús me diga." },
            { story: "Bajando al paralítico por el techo", verse: "Marcos 2:4", thought: "Ayudo a mis amigos a llegar a Jesús." },
            { story: "Jesús calma la gran tormenta", verse: "Marcos 4:39", thought: "Con Jesús tengo paz, no miedo." },
            { story: "La niña de Jairo despierta", verse: "Marcos 5:41", thought: "Jesús tiene poder sobre la muerte." },
            { story: "El niño que compartió su merienda (5000)", verse: "Juan 6:9", thought: "Comparto lo poco que tengo y Dios lo usa." },
            { story: "Jesús camina sobre el agua", verse: "Mateo 14:29", thought: "Fijo mis ojos en Jesús, no en el problema." },
            { story: "Bartimeo el ciego grita fuerte", verse: "Marcos 10:51", thought: "Pido a Dios con fe y Él me oye." },
            { story: "10 Leprosos: Solo uno dio gracias", verse: "Lucas 17:15", thought: "Siempre debo decir: ¡Gracias Jesús!" },
            { story: "Zaqueo baja del árbol", verse: "Lucas 19:5", thought: "Jesús quiere venir a mi casa hoy." }
        ]
    },
    {
        month: "Septiembre",
        icon: "🐑",
        theme: "Historias que Enseñan",
        themeColor: "theme-green",
        bgUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "La casa sobre la roca y la arena", verse: "Mateo 7:24", thought: "Obedecer a Dios es construir fuerte." },
            { story: "El Sembrador y las 4 tierras", verse: "Lucas 8:15", thought: "Guardo la Palabra en mi corazón." },
            { story: "El Buen Samaritano: Ayudando al herido", verse: "Lucas 10:33", thought: "Amo y ayudo a mi prójimo." },
            { story: "La Oveja Perdida: El pastor la busca", verse: "Lucas 15:4", thought: "Soy valioso, Jesús me busca." },
            { story: "El Hijo Pródigo regresa a casa", verse: "Lucas 15:20", thought: "Dios me perdona y me abraza siempre." },
            { story: "La mujer que perdió su moneda", verse: "Lucas 15:9", thought: "Hay fiesta en el cielo cuando me arrepiento." },
            { story: "El Fariseo y el Publicano orando", verse: "Lucas 18:13", thought: "Oro con humildad, no presumiendo." },
            { story: "Los Talentos: Usando mis regalos", verse: "Mateo 25:21", thought: "Uso mis habilidades para servir a Dios." }
        ]
    },
    {
        month: "Octubre",
        icon: "✝️",
        theme: "El Amor más Grande",
        themeColor: "theme-red",
        bgUrl: "https://images.unsplash.com/photo-1549247605-6f903fbdd474?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Entrada Triunfal: ¡Hosanna al Rey!", verse: "Mateo 21:9", thought: "Alabo a mi Rey Jesús con alegría." },
            { story: "Jesús lava los pies sucios", verse: "Juan 13:14", thought: "Debo servir a los demás con humildad." },
            { story: "La Última Cena: Pan y Copa", verse: "Lucas 22:19", thought: "Recuerdo con amor lo que Jesús hizo." },
            { story: "Orando en el jardín de Getsemaní", verse: "Lucas 22:42", thought: "Hágase tu voluntad, no la mía." },
            { story: "La Cruz: Jesús muere por mí", verse: "Juan 3:16", thought: "Jesús me ama tanto que dio su vida." },
            { story: "¡La Tumba está Vacía! Resurrección", verse: "Mateo 28:6", thought: "¡Estoy feliz porque Jesús está vivo!" },
            { story: "Caminando a Emaús: Jesús explica", verse: "Lucas 24:32", thought: "Amo leer la Biblia para conocer a Jesús." },
            { story: "Tomás toca las heridas", verse: "Juan 20:29", thought: "Creo en Jesús aunque no lo vea." },
            { story: "Jesús sube al cielo en una nube", verse: "Hechos 1:9", thought: "Jesús prepara un lugar para mí." }
        ]
    },
    {
        month: "Noviembre",
        icon: "🔥",
        theme: "La Iglesia Nace",
        themeColor: "theme-orange",
        bgUrl: "https://images.unsplash.com/photo-1528150395403-992a693e26c8?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "Pentecostés: Viento y Fuego", verse: "Hechos 1:8", thought: "El Espíritu Santo me da poder." },
            { story: "Pedro sana al cojo en la puerta", verse: "Hechos 3:6", thought: "Hay poder en el nombre de Jesús." },
            { story: "Ananías y Safira: No mentir", verse: "Hechos 5:4", thought: "Debo decir siempre la verdad." },
            { story: "Esteban: Un valiente perdonador", verse: "Hechos 7:60", thought: "Perdono a los que me tratan mal." },
            { story: "Felipe explica la Biblia al etíope", verse: "Hechos 8:35", thought: "Hablo de Jesús a otras personas." },
            { story: "Saulo ve una luz brillante (Conversión)", verse: "Hechos 9:4", thought: "Dios puede cambiar a cualquier persona." },
            { story: "Pedro escapa de la cárcel (Ángel)", verse: "Hechos 12:7", thought: "La oración de la iglesia tiene poder." },
            { story: "Pablo y Silas cantan en prisión", verse: "Hechos 16:25", thought: "Canto alabanzas aunque tenga problemas." }
        ]
    },
    {
        month: "Diciembre",
        icon: "✨",
        theme: "¡Victoria Final!",
        themeColor: "theme-green",
        bgUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=500&q=80",
        lessons: [
            { story: "El Fruto del Espíritu (Amor, Gozo...)", verse: "Gálatas 5:22", thought: "El Espíritu Santo me ayuda a ser bueno." },
            { story: "La Armadura de Dios: Casco y Espada", verse: "Efesios 6:11", thought: "Estoy listo para la batalla espiritual." },
            { story: "La lengua es como un pequeño fuego", verse: "Santiago 3:5", thought: "Uso mi boca para bendecir, no dañar." },
            { story: "Juan ve el cielo en la isla de Patmos", verse: "Apocalipsis 1:19", thought: "Dios tiene el control del futuro." },
            { story: "Jesús toca a la puerta del corazón", verse: "Apocalipsis 3:20", thought: "Abro mi corazón a Jesús hoy." },
            { story: "El Cielo Nuevo: Calles de oro", verse: "Apocalipsis 21:21", thought: "El cielo es un lugar hermoso y real." },
            { story: "No habrá más llanto ni dolor", verse: "Apocalipsis 21:4", thought: "Viviré feliz para siempre con Jesús." },
            { story: "¡Sí, ven Señor Jesús!", verse: "Apocalipsis 22:20", thought: "Espero con alegría el regreso de mi Rey." }
        ]
    }
];

// --- FUNCIONES LÓGICAS (FECHAS Y MODAL) ---

function getClassDates(monthIndex) {
    const dates = [];
    const year = 2026;
    const date = new Date(year, monthIndex, 1);
    
    // Nombres de días
    const dayNames = {0: "Domingo", 2: "Martes"}; 

    while (date.getMonth() === monthIndex) {
        const day = date.getDay();
        if (day === 0 || day === 2) {
            dates.push({
                dayName: dayNames[day],
                // Fecha completa DD/MM/AAAA
                fullDate: date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
            });
        }
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

const monthsGrid = document.getElementById('monthsGrid');

// Renderizar Tarjetas
syllabusData.forEach((data, index) => {
    const card = document.createElement('div');
    card.className = 'month-card';
    
    card.innerHTML = `
        <div class="emoji-circle">${data.icon}</div>
        <h3 class="month-name">${data.month}</h3>
        <div class="month-theme ${data.themeColor}">${data.theme}</div>
    `;
    
    card.onclick = () => openModal(index);
    monthsGrid.appendChild(card);
});

// Lógica del Modal
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalHeader = document.getElementById('modalHeader');
const tableBody = document.getElementById('tableBody');

function openModal(monthIndex) {
    const data = syllabusData[monthIndex];
    const dates = getClassDates(monthIndex);
    
    // Calcular índice de maestras para que rote continuo todo el año
    let currentTeacherIndex = 0;
    for(let i=0; i<monthIndex; i++) {
        currentTeacherIndex += getClassDates(i).length;
    }

    modalHeader.innerHTML = `
        <h2>${data.month}</h2>
        <p>Tema: <strong>${data.theme}</strong></p>
    `;

    tableBody.innerHTML = '';

    dates.forEach((dateObj, i) => {
        // Ciclo de lecciones (si hay más fechas que historias, se repiten desde la 1)
        const lesson = data.lessons[i % data.lessons.length]; 
        // Ciclo de maestras
        const teachers = teacherPairs[currentTeacherIndex % teacherPairs.length]; 
        currentTeacherIndex++;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td style="font-weight:bold; color:#2980b9; text-align: center;">${dateObj.dayName}</td>
            <td style="font-weight:bold; color:#7f8c8d; text-align: center;">${dateObj.fullDate}</td>
            <td>${lesson.story}</td>
            <td style="font-style:italic;">${lesson.verse}</td>
            <td>${lesson.thought}</td>
            <td>${teachers}</td>
        `;
        tableBody.appendChild(row);
    });

    modal.style.display = "block";
}

closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }