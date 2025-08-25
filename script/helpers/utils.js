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