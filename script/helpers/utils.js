export function userData() {
    /* This function return  */
    const userData = localStorage.getItem("userData");
    const data = JSON.parse(userData);
    return data
}

export function redirectToLogin() {
    const storedData = localStorage.getItem("userData");
    
    if (!userData.name && !userData.userType) {
        // Si no hay datos, podría redirigir al login
        alert("No hay datos de usuario, redirigiendo al login...");
        window.location.href = "/index.html";
        return;
    }
}


let h = [
    ,
  {
    "id": 21,
    "name": "María Fernanda Ruiz",
    "email": "maria.ruiz@example.com",
    "phone": 3201234568,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente001",
    "status": "activo",
    "courses": [
      {
        "title": "Python para Principiantes",
        "description": "Aprende los conceptos básicos de programación con Python.",
        "lessons": 24,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/python1/400/200",
        "status": "activo"
      },
      {
        "title": "Análisis de Datos con Pandas",
        "description": "Manipulación y análisis de datos usando la librería Pandas.",
        "lessons": 20,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/pandas1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 22,
    "name": "Roberto Silva",
    "email": "roberto.silva@example.com",
    "phone": 3201234569,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente002",
    "status": "activo",
    "courses": [
      {
        "title": "Java Fundamentals",
        "description": "Fundamentos de programación orientada a objetos con Java.",
        "lessons": 26,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/java1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 23,
    "name": "Ana Lucía Vargas",
    "email": "ana.vargas@example.com",
    "phone": 3201234570,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente003",
    "status": "inactivo",
    "courses": [
      {
        "title": "Diseño UX/UI",
        "description": "Principios de diseño de experiencia de usuario e interfaces.",
        "lessons": 22,
        "lessonsCompleted": 15,
        "image": "https://picsum.photos/seed/uxui1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Figma para Principiantes",
        "description": "Herramienta de diseño digital con Figma.",
        "lessons": 16,
        "lessonsCompleted": 10,
        "image": "https://picsum.photos/seed/figma1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 24,
    "name": "Diego Martínez",
    "email": "diego.martinez@example.com",
    "phone": 3201234571,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente004",
    "status": "activo",
    "courses": [
      {
        "title": "DevOps con Docker",
        "description": "Containerización de aplicaciones con Docker.",
        "lessons": 28,
        "lessonsCompleted": 20,
        "image": "https://picsum.photos/seed/docker1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 25,
    "name": "Sofía Hernández",
    "email": "sofia.hernandez@example.com",
    "phone": 3201234572,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente005",
    "status": "activo",
    "courses": [
      {
        "title": "Testing Automatizado",
        "description": "Pruebas automatizadas para aplicaciones web.",
        "lessons": 18,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/testing1/400/200",
        "status": "activo"
      },
      {
        "title": "Selenium WebDriver",
        "description": "Automatización de pruebas web con Selenium.",
        "lessons": 14,
        "lessonsCompleted": 5,
        "image": "https://picsum.photos/seed/selenium1/400/200",
        "status": "inactivo"
      }
    ]
  },
  {
    "id": 26,
    "name": "Fernando López",
    "email": "fernando.lopez@example.com",
    "phone": 3201234573,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente006",
    "status": "inactivo",
    "courses": [
      {
        "title": "Cyberseguridad Básica",
        "description": "Fundamentos de seguridad informática.",
        "lessons": 25,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/security1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 27,
    "name": "Valentina Restrepo",
    "email": "valentina.restrepo@example.com",
    "phone": 3201234574,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente007",
    "status": "activo",
    "courses": [
      {
        "title": "Marketing Digital",
        "description": "Estrategias de marketing en medios digitales.",
        "lessons": 20,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/marketing1/400/200",
        "status": "activo"
      },
      {
        "title": "Google Ads",
        "description": "Publicidad efectiva en Google Ads.",
        "lessons": 12,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/googleads1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 28,
    "name": "Andrés Castillo",
    "email": "andres.castillo@example.com",
    "phone": 3201234575,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente008",
    "status": "activo",
    "courses": [
      {
        "title": "Blockchain Fundamentals",
        "description": "Introducción a la tecnología blockchain.",
        "lessons": 22,
        "lessonsCompleted": 10,
        "image": "https://picsum.photos/seed/blockchain1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 29,
    "name": "Carolina Morales",
    "email": "carolina.morales@example.com",
    "phone": 3201234576,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente009",
    "status": "inactivo",
    "courses": [
      {
        "title": "Excel Avanzado",
        "description": "Funciones avanzadas y automatización en Excel.",
        "lessons": 16,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/excel1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Power BI",
        "description": "Business Intelligence con Power BI.",
        "lessons": 18,
        "lessonsCompleted": 6,
        "image": "https://picsum.photos/seed/powerbi1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 30,
    "name": "Julián García",
    "email": "julian.garcia@example.com",
    "phone": 3104567891,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente010",
    "status": "activo",
    "courses": [
      {
        "title": "Angular desde Cero",
        "description": "Desarrollo de aplicaciones web con Angular.",
        "lessons": 28,
        "lessonsCompleted": 22,
        "image": "https://picsum.photos/seed/angular1/400/200",
        "status": "activo"
      },
      {
        "title": "TypeScript Avanzado",
        "description": "Programación avanzada con TypeScript.",
        "lessons": 20,
        "lessonsCompleted": 15,
        "image": "https://picsum.photos/seed/typescript1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 31,
    "name": "Isabella Jiménez",
    "email": "isabella.jimenez@example.com",
    "phone": 3104567892,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente011",
    "status": "activo",
    "courses": [
      {
        "title": "Vue.js Completo",
        "description": "Framework Vue.js para desarrollo frontend.",
        "lessons": 24,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/vue1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 32,
    "name": "Ricardo Mendoza",
    "email": "ricardo.mendoza@example.com",
    "phone": 3104567893,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente012",
    "status": "inactivo",
    "courses": [
      {
        "title": "MongoDB Avanzado",
        "description": "Base de datos NoSQL con MongoDB.",
        "lessons": 22,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/mongodb1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Redis Cache",
        "description": "Sistema de cache con Redis.",
        "lessons": 12,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/redis1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 33,
    "name": "Camila Torres",
    "email": "camila.torres@example.com",
    "phone": 3104567894,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente013",
    "status": "activo",
    "courses": [
      {
        "title": "Laravel Framework",
        "description": "Desarrollo backend con Laravel PHP.",
        "lessons": 30,
        "lessonsCompleted": 25,
        "image": "https://picsum.photos/seed/laravel1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 34,
    "name": "Sebastián Rueda",
    "email": "sebastian.rueda@example.com",
    "phone": 3104567895,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente014",
    "status": "activo",
    "courses": [
      {
        "title": "Spring Boot",
        "description": "Microservicios con Spring Boot.",
        "lessons": 26,
        "lessonsCompleted": 20,
        "image": "https://picsum.photos/seed/spring1/400/200",
        "status": "activo"
      },
      {
        "title": "Kubernetes Básico",
        "description": "Orquestación de contenedores con Kubernetes.",
        "lessons": 18,
        "lessonsCompleted": 10,
        "image": "https://picsum.photos/seed/kubernetes1/400/200",
        "status": "inactivo"
      }
    ]
  },
  {
    "id": 35,
    "name": "Natalia Pérez",
    "email": "natalia.perez@example.com",
    "phone": 3104567896,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente015",
    "status": "inactivo",
    "courses": [
      {
        "title": "Adobe Photoshop",
        "description": "Edición profesional de imágenes.",
        "lessons": 20,
        "lessonsCompleted": 16,
        "image": "https://picsum.photos/seed/photoshop1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 36,
    "name": "Mateo Guerrero",
    "email": "mateo.guerrero@example.com",
    "phone": 3104567897,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente016",
    "status": "activo",
    "courses": [
      {
        "title": "Git y GitHub",
        "description": "Control de versiones con Git y GitHub.",
        "lessons": 14,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/git1/400/200",
        "status": "activo"
      },
      {
        "title": "CI/CD Pipelines",
        "description": "Integración y despliegue continuo.",
        "lessons": 16,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/cicd1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 37,
    "name": "Alejandra Vega",
    "email": "alejandra.vega@example.com",
    "phone": 3104567898,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente017",
    "status": "activo",
    "courses": [
      {
        "title": "Scrum Master",
        "description": "Metodologías ágiles y Scrum.",
        "lessons": 18,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/scrum1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 38,
    "name": "Daniel Herrera",
    "email": "daniel.herrera@example.com",
    "phone": 3104567899,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente018",
    "status": "inactivo",
    "courses": [
      {
        "title": "AWS Cloud",
        "description": "Servicios en la nube de Amazon Web Services.",
        "lessons": 32,
        "lessonsCompleted": 24,
        "image": "https://picsum.photos/seed/aws1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Serverless Computing",
        "description": "Arquitecturas serverless con AWS Lambda.",
        "lessons": 16,
        "lessonsCompleted": 6,
        "image": "https://picsum.photos/seed/serverless1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 39,
    "name": "Luis Fernando Castro",
    "email": "luis.castro@example.com",
    "phone": 3156549871,
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente019",
    "status": "activo",
    "courses": [
      {
        "title": "Flutter Mobile",
        "description": "Desarrollo de aplicaciones móviles con Flutter.",
        "lessons": 26,
        "lessonsCompleted": 20,
        "image": "https://picsum.photos/seed/flutter1/400/200",
        "status": "activo"
      },
      {
        "title": "Dart Programming",
        "description": "Lenguaje de programación Dart.",
        "lessons": 18,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/dart1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": 40,
    "name": "Paola Ramírez",
    "email": "paola.ramirez@example.com",
    "phone": 3156549872,
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente020",
    "status": "activo",
    "courses": [
      {
        "title": "React Native",
        "description": "Aplicaciones móviles multiplataforma con React Native.",
        "lessons": 24,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/reactnative1/400/200",
        "status": "activo"
      }
    ]
  },
]

let data2 = [
  {
    "id": "1",
    "name": "Nicole Arias",
    "email": "nicole.arias@example.com",
    "phone": 3214567890,
    "location": {
      "city": "Bogotá",
      "country": "Colombia"
    },
    "userType": "Administrador",
    "password": "admin123",
    "status": "activo",
    "img": "https://scontent.fbaq6-1.fna.fbcdn.net/v/t39.30808-6/241423760_373675770966633_5624104350221052217_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LwWVxItrtIcQ7kNvwFrZcyI&_nc_oc=AdnVnuCZdvr9AGIUvParVFkbltpHlrHXDbp-rzuL0G6bub13D9KvqYjAt6lWO0O7a7o&_nc_zt=23&_nc_ht=scontent.fbaq6-1.fna&_nc_gid=FCgFLL0S81tIWaAG9-ieDw&oh=00_AfWCqYL5lqRy4GhD4KQn7A_B0yMAGlfefYZI4YPWlKPmMA&oe=68B293A2"
  },
  {
    "id": "2",
    "name": "Alexi Duran",
    "email": "alexi.duran@example.com",
    "phone": 3129876543,
    "location": {
      "city": "Medellín",
      "country": "Colombia"
    },
    "userType": "Administrador",
    "password": "admin456",
    "status": "activo",
    "img": "https://scontent.fbaq6-1.fna.fbcdn.net/v/t39.30808-6/504188659_704569585659299_1280495781175482202_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH08povcLBEGBHxNEcAdLObzdI0ceg2CefN0jRx6DYJ5yIvXmcL9vilcrdvD14gyUkYrPh0rwpKyCDkLByuq7RG&_nc_ohc=D1sHjiP0Xf4Q7kNvwHuCXyT&_nc_oc=AdlnmWae21ktNHKGx_p14cbCpt8hCWyA9hsgn4WixAj30xcEgQm3ZMQL3wk4XYC1jEM&_nc_zt=23&_nc_ht=scontent.fbaq6-1.fna&_nc_gid=am4qDz_OpEjCZulMMd60NQ&oh=00_AfWJZbhEw4H815DiTjmTXVgD4xV_1dEbmvwbT2XNpR2Tlw&oe=68B2971F"
  },
  {
    "id": "3",
    "name": "Laura Gómez",
    "email": "laura.gomez@example.com",
    "phone": 3201234567,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente123",
    "courses": [
      {
        "title": "Introducción a la Programación",
        "description": "Curso básico sobre fundamentos de programación en Python.",
        "lessons": 20,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/programacion/400/200"
      },
      {
        "title": "Bases de Datos con MySQL",
        "description": "Aprende a diseñar, crear y consultar bases de datos relacionales.",
        "lessons": 18,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/mysql/400/200"
      },
      {
        "title": "Desarrollo Web con HTML y CSS",
        "description": "Construye páginas web modernas desde cero con HTML5 y CSS3.",
        "lessons": 15,
        "lessonsCompleted": 15,
        "image": "https://picsum.photos/seed/htmlcss/400/200"
      }
    ]
  },
  {
    "id": "4",
    "name": "Carlos Méndez",
    "email": "carlos.mendez@example.com",
    "phone": 3104567890,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente456",
    "courses": [
      {
        "title": "JavaScript Avanzado",
        "description": "Profundiza en conceptos avanzados de JavaScript y ES6+.",
        "lessons": 22,
        "lessonsCompleted": 10,
        "image": "https://picsum.photos/seed/javascript/400/200"
      },
      {
        "title": "React desde Cero",
        "description": "Aprende a crear interfaces interactivas con React.",
        "lessons": 25,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/react/400/200"
      },
      {
        "title": "Diseño de APIs con Node.js",
        "description": "Construye APIs escalables y seguras con Node.js y Express.",
        "lessons": 20,
        "lessonsCompleted": 6,
        "image": "https://picsum.photos/seed/node/400/200"
      }
    ]
  },
  {
    "id": "5",
    "name": "Andrea Torres",
    "email": "andrea.torres@example.com",
    "phone": 3156549870,
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente789",
    "courses": [
      {
        "title": "Machine Learning Básico",
        "description": "Introducción a los algoritmos de Machine Learning con Python.",
        "lessons": 30,
        "lessonsCompleted": 20,
        "image": "https://picsum.photos/seed/ml/400/200"
      },
      {
        "title": "Visualización de Datos",
        "description": "Aprende a usar librerías como Matplotlib y Seaborn para gráficos.",
        "lessons": 16,
        "lessonsCompleted": 9,
        "image": "https://picsum.photos/seed/data/400/200"
      },
      {
        "title": "Inteligencia Artificial Aplicada",
        "description": "Explora casos de uso reales de IA en distintos sectores.",
        "lessons": 12,
        "lessonsCompleted": 4,
        "image": "https://picsum.photos/seed/ia/400/200"
      }
    ]
  },
  {
    "id": "6",
    "name": "Juan Pérez",
    "email": "juan.perez@example.com",
    "phone": 3009871234,
    "location": {
      "city": "Cartagena",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "password": "est123"
  },
  {
    "id": "7",
    "name": "Mariana López",
    "email": "mariana.lopez@example.com",
    "phone": 3014561237,
    "location": {
      "city": "Pereira",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "password": "est456"
  },
  {
    "id": "8",
    "name": "Santiago Ramírez",
    "email": "santiago.ramirez@example.com",
    "phone": 3027412589,
    "location": {
      "city": "Manizales",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "password": "est789"
  },
  {
    "id": "9",
    "name": "Valentina Castillo",
    "email": "valentina.castillo@example.com",
    "phone": 3053698741,
    "location": {
      "city": "Cúcuta",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "password": "est101"
  },
  {
    "name": "hola mundo",
    "email": "alexi@die.com",
    "phone": "43245",
    "location": {
      "city": "wefw",
      "country": "wfw"
    },
    "userType": "Estudiante",
    "id": "10",
    "password": "admin456",
    "status": "inactive"
  },
  {
    "name": "hola mundo",
    "email": "Alexi@doe.com",
    "phone": "",
    "location": {
      "city": "wefw",
      "country": "wfw"
    },
    "userType": "Estudiante",
    "id": "11",
    "password": "admin456",
    "status": "active"
  },
  {
    "name": "Pedro Gomez",
    "email": "pedrito@gomez.com",
    "phone": "+57 3248064556",
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Administrador",
    "id": "12",
    "password": "LasBurras",
    "status": "active"
  },
  {
    "name": "Edmon",
    "email": "ed@g.com",
    "phone": "333335353",
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "id": "13",
    "password": "admin456"
  },
  {
    "name": "hola mundo",
    "email": "em@g.com",
    "phone": "f4485654654",
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "id": "14",
    "password": "admin456",
    "status": "active"
  },
  {
    "name": "fwv",
    "email": "c@g.com",
    "phone": "464565",
    "location": {
      "city": "",
      "country": ""
    },
    "userType": "",
    "id": "15",
    "password": "admin456",
    "status": "active"
  },
  {
    "name": "fwv",
    "email": "c@g.com",
    "phone": "464565",
    "location": {
      "city": "",
      "country": ""
    },
    "userType": "",
    "id": "16",
    "password": "admin456",
    "status": "active"
  },
  {
    "name": "gdgdg",
    "email": "cd@g.com",
    "phone": "+57 3248064556",
    "location": {
      "city": "wefw",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "id": "17",
    "password": "admin456",
    "status": "inactive"
  },
  {
    "name": "gdgdg",
    "email": "cd@g.com",
    "phone": "+57 3248064556",
    "location": {
      "city": "wefw",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "id": "18",
    "password": "admin456",
    "status": "active"
  },
  {
    "name": "Jose Carlos Medina",
    "email": "jose@medina.com",
    "phone": "+57 3218890923",
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Docente",
    "id": "20",
    "password": "jose04",
    "status": "active"
  },
  {
    "id": "21",
    "name": "María Fernanda Ruiz",
    "email": "maria.ruiz@example.com",
    "phone": 3201234568,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente001",
    "status": "activo",
    "courses": [
      {
        "title": "Python para Principiantes",
        "description": "Aprende los conceptos básicos de programación con Python.",
        "lessons": 24,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/python1/400/200",
        "status": "activo"
      },
      {
        "title": "Análisis de Datos con Pandas",
        "description": "Manipulación y análisis de datos usando la librería Pandas.",
        "lessons": 20,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/pandas1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "22",
    "name": "Roberto Silva",
    "email": "roberto.silva@example.com",
    "phone": 3201234569,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente002",
    "status": "activo",
    "courses": [
      {
        "title": "Java Fundamentals",
        "description": "Fundamentos de programación orientada a objetos con Java.",
        "lessons": 26,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/java1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "23",
    "name": "Ana Lucía Vargas",
    "email": "ana.vargas@example.com",
    "phone": 3201234570,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente003",
    "status": "inactivo",
    "courses": [
      {
        "title": "Diseño UX/UI",
        "description": "Principios de diseño de experiencia de usuario e interfaces.",
        "lessons": 22,
        "lessonsCompleted": 15,
        "image": "https://picsum.photos/seed/uxui1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Figma para Principiantes",
        "description": "Herramienta de diseño digital con Figma.",
        "lessons": 16,
        "lessonsCompleted": 10,
        "image": "https://picsum.photos/seed/figma1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "24",
    "name": "Diego Martínez",
    "email": "diego.martinez@example.com",
    "phone": 3201234571,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente004",
    "status": "activo",
    "courses": [
      {
        "title": "DevOps con Docker",
        "description": "Containerización de aplicaciones con Docker.",
        "lessons": 28,
        "lessonsCompleted": 20,
        "image": "https://picsum.photos/seed/docker1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "25",
    "name": "Sofía Hernández",
    "email": "sofia.hernandez@example.com",
    "phone": 3201234572,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente005",
    "status": "activo",
    "courses": [
      {
        "title": "Testing Automatizado",
        "description": "Pruebas automatizadas para aplicaciones web.",
        "lessons": 18,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/testing1/400/200",
        "status": "activo"
      },
      {
        "title": "Selenium WebDriver",
        "description": "Automatización de pruebas web con Selenium.",
        "lessons": 14,
        "lessonsCompleted": 5,
        "image": "https://picsum.photos/seed/selenium1/400/200",
        "status": "inactivo"
      }
    ]
  },
  {
    "id": "26",
    "name": "Fernando López",
    "email": "fernando.lopez@example.com",
    "phone": 3201234573,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente006",
    "status": "inactivo",
    "courses": [
      {
        "title": "Cyberseguridad Básica",
        "description": "Fundamentos de seguridad informática.",
        "lessons": 25,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/security1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "27",
    "name": "Valentina Restrepo",
    "email": "valentina.restrepo@example.com",
    "phone": 3201234574,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente007",
    "status": "activo",
    "courses": [
      {
        "title": "Marketing Digital",
        "description": "Estrategias de marketing en medios digitales.",
        "lessons": 20,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/marketing1/400/200",
        "status": "activo"
      },
      {
        "title": "Google Ads",
        "description": "Publicidad efectiva en Google Ads.",
        "lessons": 12,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/googleads1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "28",
    "name": "Andrés Castillo",
    "email": "andres.castillo@example.com",
    "phone": 3201234575,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente008",
    "status": "activo",
    "courses": [
      {
        "title": "Blockchain Fundamentals",
        "description": "Introducción a la tecnología blockchain.",
        "lessons": 22,
        "lessonsCompleted": 10,
        "image": "https://picsum.photos/seed/blockchain1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "29",
    "name": "Carolina Morales",
    "email": "carolina.morales@example.com",
    "phone": 3201234576,
    "location": {
      "city": "Cali",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente009",
    "status": "inactivo",
    "courses": [
      {
        "title": "Excel Avanzado",
        "description": "Funciones avanzadas y automatización en Excel.",
        "lessons": 16,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/excel1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Power BI",
        "description": "Business Intelligence con Power BI.",
        "lessons": 18,
        "lessonsCompleted": 6,
        "image": "https://picsum.photos/seed/powerbi1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "30",
    "name": "Julián García",
    "email": "julian.garcia@example.com",
    "phone": 3104567891,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente010",
    "status": "activo",
    "courses": [
      {
        "title": "Angular desde Cero",
        "description": "Desarrollo de aplicaciones web con Angular.",
        "lessons": 28,
        "lessonsCompleted": 22,
        "image": "https://picsum.photos/seed/angular1/400/200",
        "status": "activo"
      },
      {
        "title": "TypeScript Avanzado",
        "description": "Programación avanzada con TypeScript.",
        "lessons": 20,
        "lessonsCompleted": 15,
        "image": "https://picsum.photos/seed/typescript1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "31",
    "name": "Isabella Jiménez",
    "email": "isabella.jimenez@example.com",
    "phone": 3104567892,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente011",
    "status": "activo",
    "courses": [
      {
        "title": "Vue.js Completo",
        "description": "Framework Vue.js para desarrollo frontend.",
        "lessons": 24,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/vue1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "32",
    "name": "Ricardo Mendoza",
    "email": "ricardo.mendoza@example.com",
    "phone": 3104567893,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente012",
    "status": "inactivo",
    "courses": [
      {
        "title": "MongoDB Avanzado",
        "description": "Base de datos NoSQL con MongoDB.",
        "lessons": 22,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/mongodb1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Redis Cache",
        "description": "Sistema de cache con Redis.",
        "lessons": 12,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/redis1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "33",
    "name": "Camila Torres",
    "email": "camila.torres@example.com",
    "phone": 3104567894,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente013",
    "status": "activo",
    "courses": [
      {
        "title": "Laravel Framework",
        "description": "Desarrollo backend con Laravel PHP.",
        "lessons": 30,
        "lessonsCompleted": 25,
        "image": "https://picsum.photos/seed/laravel1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "34",
    "name": "Sebastián Rueda",
    "email": "sebastian.rueda@example.com",
    "phone": 3104567895,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente014",
    "status": "activo",
    "courses": [
      {
        "title": "Spring Boot",
        "description": "Microservicios con Spring Boot.",
        "lessons": 26,
        "lessonsCompleted": 20,
        "image": "https://picsum.photos/seed/spring1/400/200",
        "status": "activo"
      },
      {
        "title": "Kubernetes Básico",
        "description": "Orquestación de contenedores con Kubernetes.",
        "lessons": 18,
        "lessonsCompleted": 10,
        "image": "https://picsum.photos/seed/kubernetes1/400/200",
        "status": "inactivo"
      }
    ]
  },
  {
    "id": "35",
    "name": "Natalia Pérez",
    "email": "natalia.perez@example.com",
    "phone": 3104567896,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente015",
    "status": "inactivo",
    "courses": [
      {
        "title": "Adobe Photoshop",
        "description": "Edición profesional de imágenes.",
        "lessons": 20,
        "lessonsCompleted": 16,
        "image": "https://picsum.photos/seed/photoshop1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "36",
    "name": "Mateo Guerrero",
    "email": "mateo.guerrero@example.com",
    "phone": 3104567897,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente016",
    "status": "activo",
    "courses": [
      {
        "title": "Git y GitHub",
        "description": "Control de versiones con Git y GitHub.",
        "lessons": 14,
        "lessonsCompleted": 12,
        "image": "https://picsum.photos/seed/git1/400/200",
        "status": "activo"
      },
      {
        "title": "CI/CD Pipelines",
        "description": "Integración y despliegue continuo.",
        "lessons": 16,
        "lessonsCompleted": 8,
        "image": "https://picsum.photos/seed/cicd1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "37",
    "name": "Alejandra Vega",
    "email": "alejandra.vega@example.com",
    "phone": 3104567898,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente017",
    "status": "activo",
    "courses": [
      {
        "title": "Scrum Master",
        "description": "Metodologías ágiles y Scrum.",
        "lessons": 18,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/scrum1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "38",
    "name": "Daniel Herrera",
    "email": "daniel.herrera@example.com",
    "phone": 3104567899,
    "location": {
      "city": "Barranquilla",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente018",
    "status": "inactivo",
    "courses": [
      {
        "title": "AWS Cloud",
        "description": "Servicios en la nube de Amazon Web Services.",
        "lessons": 32,
        "lessonsCompleted": 24,
        "image": "https://picsum.photos/seed/aws1/400/200",
        "status": "inactivo"
      },
      {
        "title": "Serverless Computing",
        "description": "Arquitecturas serverless con AWS Lambda.",
        "lessons": 16,
        "lessonsCompleted": 6,
        "image": "https://picsum.photos/seed/serverless1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "39",
    "name": "Luis Fernando Castro",
    "email": "luis.castro@example.com",
    "phone": 3156549871,
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente019",
    "status": "activo",
    "courses": [
      {
        "title": "Flutter Mobile",
        "description": "Desarrollo de aplicaciones móviles con Flutter.",
        "lessons": 26,
        "lessonsCompleted": 20,
        "image": "https://picsum.photos/seed/flutter1/400/200",
        "status": "activo"
      },
      {
        "title": "Dart Programming",
        "description": "Lenguaje de programación Dart.",
        "lessons": 18,
        "lessonsCompleted": 14,
        "image": "https://picsum.photos/seed/dart1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "id": "40",
    "name": "Paola Ramírez",
    "email": "paola.ramirez@example.com",
    "phone": 3156549872,
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Docente",
    "password": "docente020",
    "status": "activo",
    "courses": [
      {
        "title": "React Native",
        "description": "Aplicaciones móviles multiplataforma con React Native.",
        "lessons": 24,
        "lessonsCompleted": 18,
        "image": "https://picsum.photos/seed/reactnative1/400/200",
        "status": "activo"
      }
    ]
  },
  {
    "name": "Jose Andres Heredia",
    "email": "jose@heredia.com",
    "phone": "+57 3458765689",
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "id": "41",
    "password": "quibo pues mijo",
    "status": "activo"
  },
  {
    "name": "super",
    "email": "alexisdurangomez588@gmail.com",
    "phone": "+573216123545",
    "location": {
      "city": "TAMALAMEQUE",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "id": "42",
    "password": "jose-jose-ombee",
    "status": "activo"
  },
  {
    "name": "Richard Rules",
    "email": "r@r.com",
    "phone": "f4485654654",
    "location": {
      "city": "Bucaramanga",
      "country": "Colombia"
    },
    "userType": "Estudiante",
    "id": "43",
    "password": "admin456",
    "status": "activo"
  }
]