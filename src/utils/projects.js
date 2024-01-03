import myweb_astro from "../assets/images/myweb-astro.webp";
import fridaypybot from "../assets/images/fridaypybot.webp";
import gestiontareasfront from "../assets/images/gestiontareasfront.webp"
import gestiontareasback from "../assets/images/gestiontareasback.webp";
import weatherapi_project from "../assets/images/weatherapi_project.webp";
import proyectofinal_tiendaonline from "../assets/images/proyectofinal-tiendaonline.webp";
import testbuzzfeed from "../assets/images/testbuzzfeed.webp";
const PROJECTS = [
    {
        name: "myweb-astro",
        type: "Sitio Web",
        github: "https://github.com/MCPikon/myweb-astro",
        url: "https://javier-picon.vercel.app/",
        image: myweb_astro,
        description: "Esta página web, un portfolio creado con Astro, React y TailwindCSS",
        tech: ['Astro', 'React', 'HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Node.js']
    },
    {
        name: "FridayPyBot",
        type: "Telegram Bot",
        github: "https://github.com/MCPikon/FridayPyBot",
        image: fridaypybot,
        description: "Un bot de Telegram con múltiples utilidades creado con Python y el módulo python-telegram-bot",
        tech: ['Python', 'python-telegram-bot']

    },
    {
        name: "gestionTareasFront",
        type: "Sitio Web",
        github: "https://github.com/MCPikon/gestionTareasFront",
        image: gestiontareasfront,
        description: "Página web de gestión de tareas creada con Angular y Bootstrap 5",
        tech: ['Angular 13', 'Bootstrap 5', 'Typescript']
    },
    {
        name: "gestionTareasBack",
        type: "API",
        github: 'https://github.com/MCPikon/gestionTareasBack',
        image: gestiontareasback,
        description: "API de la web de gestion de tareas creada con Java y Spring Boot/Security",
        tech: ['Java 17', 'Spring Boot', 'Spring Security']
    },
    {
        name: "weatherAPI_project",
        type: "Script",
        github: "https://github.com/MCPikon/weatherAPI_project",
        image: weatherapi_project,
        description: "Script de Python conectado con la API de OpenWeatherMap que muestra el tiempo de la ciudad que se le indique por parámetro.",
        tech: ['Python', 'OpenWeatherMap API']
    },
    {
        name: "ProyectoFinal-TiendaOnline",
        type: "Sitio Web",
        github: "https://github.com/MCPikon/ProyectoFinal-TiendaOnline",
        image: proyectofinal_tiendaonline,
        description: "Proyecto Final de GS DAW - Tienda Online de Videojuegos hecha con Java y Spring Boot.",
        tech: ['Java', 'Spring Boot', 'Hibernate', 'Bootstrap 5', 'MySQL', 'JavaScript', 'JQuery']
    },
    {
        name: "TestBuzzfeed",
        type: "Sitio Web",
        github: "https://github.com/MCPikon/TestBuzzfeed",
        url: "https://mcpikon.github.io/TestBuzzfeed/",
        image: testbuzzfeed,
        description: "Cuestionario Buzzfeed con la temática del anime Jujutsu Kaisen.",
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5']
    },
]

export function getProjects(){
    return PROJECTS;
}