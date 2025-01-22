// playlist: https://www.youtube.com/playlist?list=PLTIdiuUvwYCHrjyEIYR8ZOhza5NAFef3Y
interface Course {
  id: number;
  front: string;
  title: string;
  urltitle: string;
  description: string;
  canal: {
    id: string;
    avatar: string;
    name: string;
    plataform: string;
  };
  class: {
    id: string;
    title: string;
    url: string;
  }[];
}

export const course: Course[] = [
  {
    id: 1,
    front:
      "https://i.ytimg.com/vi/vMSrAcrH9tg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBSXQrCWIxvy-zjhSBPmMeAqw7J7w",
    title: "Matemática desde cero (curso completo)",
    urltitle: "matematica-desde-cero",
    description: "conceptos de matemática desde cero.",
    canal: {
      id: "1dsd1233",
      avatar:
        "https://yt3.ggpht.com/e6MSYBYMhAblq2tflgxLUBYR9PI_2oZXOqCOq3qlwOcvUyHcpRByyQ7_hRQ1L4kMONBF26aQXmg=s48-c-k-c0x00ffffff-no-rj",
      name: "El traductor de Ingeniería",
      plataform: "YouTube",
    },
    class: [
      {
        id: "shu1hdu1h9827u89sd8ashd91id",
        title:
          "📚¡El ABC de la MATEMÁTICA! - CURSO de Mates desde Cero: Clase #1",
        url: "vMSrAcrH9tg",
      },
      {
        id: "sd23sqd1sdasdW23RDFWEFW4T34WDF",
        title: "📚¡MATEMÁTICA sin MEMORIZAR! - Operaciones y Números",
        url: "e5NDNgCfVs8",
      },
      {
        id: "sdf23r23r23r23r23r23r23r23r23r",
        title: "📚Sin TRUCOS pero con MAGIA - Ecuaciones",
        url: "xNRpLqixHvY",
      },
      {
        id: "sdf23r23r23r23r23r23r23r23r223r",
        title:
          "🚀Cómo resolver SISTEMAS de ECUACIONES, Porcentajes, Intervalos y Más",
        url: "4BlIlUFPfKk",
      },
      {
        id: "asdasdasdasasdasdasdas",
        title:
          "🌍📐 ¡A MEDIR el MUNDO! Trigonometría, Pitágoras, Seno, Coseno y Radianes.",
        url: "LlaZGSIieUw",
      },
      {
        id: "a23dasdasdasasdasda345sdas",
        title:
          "😎 Resolvemos PROBLEMAS MATEMÁTICOS: Funciones, Porcentajes y Probabilidades",
        url: "EPO4evSGIh4",
      },
    ],
  },
  {
    id: 2,
    front:
      "https://i.ytimg.com/vi/-3Ts-GWZR-c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBTBCmNiqehDL9MRyWbbi469dPcyQ",
    title: "Cónicas | Álgebra Para Todos",
    urltitle: "conicas",
    description:
      "Curso sobre las secciones de un cono: identificar, graficar, rotarlas y todo lo que necesitas aprender!",
    canal: {
      id: "1dsd1232",
      avatar:
        "https://yt3.ggpht.com/mutEfGrV7OtsLdZC9m56h9_RNDzEqm2anCh1JvtFfE53-tTyRIxB7UAZSs8CAUxfBIr_PPLqYU4=s48-c-k-c0x00ffffff-no-rj",
      name: "Álgebra Para Todos",
      plataform: "YouTube",
    },
    class: [
      {
        id: "rd6h2y",
        title:
          "Introducción a las SECCIONES CONICAS: Circunferencia, Elipse, Parábola, Hipérbola",
        url: "-3Ts-GWZR-c",
      },
      {
        id: "7sce3",
        title:
          "� Circunferencia a partir de 3 puntos Ft. El Traductor de Ingeniería",
        url: "n-38nXUuXLQ",
      },
      {
        id: "bbfmc",
        title: "� Elipses - Ft @eltraductor_ok | Ejercicios resueltos",
        url: "mC2ddCPe7qU",
      },
      {
        id: "icepo",
        title:
          "Como graficar una CIRCUNFERENCIA dada su ecuación ordinaria  | CÓNICAS",
        url: "kp9NVAHXmek",
      },
      {
        id: "hzwnqh",
        title: "Como graficar una ELIPSE dada su ecuación ordinaria  | CÓNICAS",
        url: "73UNQP17P5k",
      },
      {
        id: "c7v70e",
        title:
          "Como graficar una PARABOLA dada su ecuación ordinaria  | CÓNICAS",
        url: "NImMfJQhUis",
      },
      {
        id: "uesrt9",
        title:
          "Como graficar una HIPERBOLA dada su ecuación ordinaria | CÓNICAS",
        url: "4jbfZMXeErA",
      },
      {
        id: "uzkt9r",
        title:
          "Identificar CONICAS | 10 Ejercicios RESUELTOS | Curso de ALGEBRA",
        url: "CnvE3tuU9KA",
      },
      {
        id: "jnd0p4",
        title: "APRENDE a identificar cónicas rotadas con esta CLASE COMPLETA",
        url: "WgY7Aktr4XY",
      },
      {
        id: "7kgkl6",
        title: "CÓNICA según PARÁMETRO | Curso de ALGEBRA | ( 88 / 113)",
        url: "8VCm13ee2wg",
      },
      {
        id: "e9ui7",
        title:
          "Familia de hipérbolas | Cónicas | ( 89 / 113 ) Curso de álgebra",
        url: "lD7ebSRHPJc",
      },
      {
        id: "jq8p3c",
        title: "Parametrización de parábola (90/113)",
        url: "QJwE6sn-ujQ",
      },
      {
        id: "dfmrnc",
        title: "Ecuación paramétrica de una parábola (91/113)",
        url: "r0O-vLcUSx0",
      },
    ],
  },
  {
    id: 3,
    front:
      "https://i.ytimg.com/vi/dOmSiVcCUm8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBC6IIwTfyFOAzwdtSPWrotI1MpFg",
    title: "Potencias | Álgebra Para Todos",
    urltitle: "potencias",
    description: "Propiedades, ecuaciones, ejercicios resueltos.",
    canal: {
      id: "1dsd12332",
      avatar:
        "https://yt3.ggpht.com/mutEfGrV7OtsLdZC9m56h9_RNDzEqm2anCh1JvtFfE53-tTyRIxB7UAZSs8CAUxfBIr_PPLqYU4=s48-c-k-c0x00ffffff-no-rj",
      name: "Álgebra Para Todos",
      plataform: "YouTube",
    },
    class: [
      {
        id: "wbywy",
        title: "CURSO de POTENCIACIÓN desde cero",
        url: "dOmSiVcCUm8",
      },
      {
        id: "aivbim",
        title: "PROPIEDADES de las POTENCIAS | CURSO de POTENCIACIÓN Clase #1",
        url: "SyU3aCw5Wy8",
      },
      {
        id: "6md11q",
        title:
          "Suma de exponentes en potencias de misma base | CURSO de POTENCIACIÓN Clase #2",
        url: "x8hxuHktExs",
      },
      {
        id: "2vbb66",
        title:
          "Resta de exponentes en potencias de misma base | CURSO de POTENCIACIÓN Clase #3",
        url: "gFPA-wxBJ8M",
      },
      {
        id: "yljkxj",
        title: "Potencia de una potencia | CURSO de POTENCIACIÓN Clase #4",
        url: "uNQ-pb_Z1Qg",
      },
      {
        id: "g7swy",
        title: "Multiplicación con exponentes | CURSO de POTENCIACIÓN Clase #5",
        url: "WgHCa5QwApM",
      },
      {
        id: "zzz21",
        title:
          "Fracción elevada a una potencia | CURSO de POTENCIACIÓN Clase #6",
        url: "PXfNUz6wXTI",
      },
      {
        id: "zixha",
        title: "Exponente fraccionario � | CURSO de POTENCIACIÓN Clase #7",
        url: "-HIBrtTVjkI",
      },
      {
        id: "ftzb6n",
        title:
          "Exponente NEGATIVO : como trabajarlo | CURSO de POTENCIACIÓN Clase #8",
        url: "rsrBU3oazgc",
      },
      {
        id: "kuahkg",
        title:
          "� PORQUE  todo número positivo elevado a la cero es uno | CURSO de POTENCIACIÓN Clase #9",
        url: "CEVK33-lbQc",
      },
      {
        id: "fodo4i",
        title:
          "Porque todo NUMERO ELEVADO A 0 ES 1 (round 2 ) � | CURSO de POTENCIACIÓN Clase #10",
        url: "f53yaZ11q8w",
      },
      {
        id: "4z32m",
        title:
          "Ecuación con Potencias resuelto con propiedades | CURSO de POTENCIACIÓN Clase #11",
        url: "6_hWEry9V24",
      },
      {
        id: "sq39f3",
        title:
          "Ecuación con Potencias resuelto con propiedades | CURSO de POTENCIACIÓN Clase #12",
        url: "iavlG5DmBMI",
      },
      {
        id: "2rq5bd",
        title:
          "Ecuación con Potencias resuelto con propiedades | CURSO de POTENCIACIÓN Clase #13",
        url: "fhwHc1AL6dQ",
      },
      {
        id: "oyfbwy",
        title:
          "Ecuación con Potencias resuelto con propiedades | CURSO de POTENCIACIÓN Clase #14",
        url: "7zUmov7VOUc",
      },
      {
        id: "9wrefs",
        title:
          "Ecuación con Potencias resuelto con propiedades | CURSO de POTENCIACIÓN Clase #15",
        url: "E1NvpPMJGDM",
      },
      {
        id: "2hdmvc",
        title:
          "Ecuación con Potencias resuelto con propiedades | CURSO de POTENCIACIÓN Clase #16",
        url: "GmD-xBqh0LY",
      },
      {
        id: "dv38zb",
        title:
          "Ecuación con Potencias resuelto con propiedades | CURSO de POTENCIACIÓN Clase #17",
        url: "b3_gtnh-Zb8",
      },
      {
        id: "cvhale",
        title:
          "FINAL 14/03/18 (4b) Función exponencial y propiedades | EJERCICIO RESUELTO",
        url: "aJoFJczmJM4",
      },
    ],
  },
  {
    id: 4,
    front:
      "https://i.ytimg.com/vi/RGSEnAzS4XY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBGQi_lD-5WFYBOMUohw9BONdQMzw",
    title: "C++ desde cero",
    urltitle: "cpp-desde-cero",
    description:
      "Curso profesional de programación C++ desde cero - En este curso aprenderás a programar y construir tus programas utilizando el lenguaje de programación C++. C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C y añadir mecanismos que permiten la manipulación de objetos. En ese sentido, desde el punto de vista de los lenguajes orientados a objetos, C++ es un lenguaje híbrido.",
    canal: {
      id: "1dsd12323",
      avatar:
        "https://yt3.ggpht.com/0wKflpV0DaoxzPpYO7qqmu8adavadBHZDpoIRElzwUdsswAmJ0Zk-jI0IrEzisA_48L0PlrGDQ=s48-c-k-c0x00ffffff-no-rj",
      name: "Aprende a Programar",
      plataform: "YouTube",
    },
    class: [
      {
        id: "yewkf",
        title: "✅ Curso Maestro de C++ De Cero a Programador Master � #1",
        url: "RGSEnAzS4XY",
      },
      {
        id: "6dcjfo",
        title:
          "✅ Curso Maestro de C++: Instalando Visual Studio Code y GCC � #2",
        url: "3Ox8sVPSidY",
      },
      {
        id: "8mxdjh",
        title: "✅ Curso Maestro de C++: Nuestro PRIMER PROGRAMA en C++ � #3",
        url: "qkzu8NM7Qbc",
      },
      {
        id: "0nkvye",
        title:
          "✅ Curso Maestro de C++: Variables y Tipos de Datos en C++ � #4",
        url: "2hr4lIuR3Ps",
      },
      {
        id: "y7k6fq",
        title: "✅ Curso Maestro de C++: Como USAR CONST en C++ � #5",
        url: "zEfYG_148ag",
      },
      {
        id: "uchrre",
        title: "✅ Curso Maestro de C++: Qué son los Namespaces en C++ � #6",
        url: "LyxWnv22YTY",
      },
      {
        id: "jufzox",
        title: "✅ Curso Maestro de C++: Definición de Typedef en C++ �‍♂️ #7",
        url: "0gOqBq3D1SU",
      },
      {
        id: "y62dfk",
        title: "✅ Curso Maestro de C++: Operadores Aritméticos en C++ � #8",
        url: "gJa6xd1zddw",
      },
      {
        id: "b0a4ui",
        title: "✅ Curso Maestro de C++: Conversión de tipos en C++ ✨ #9",
        url: "eSXvkZETw58",
      },
      {
        id: "ypql6i",
        title:
          "✅ Curso Maestro de C++: Entrada de Usuario en C++ (INPUT) ⌨️ #10",
        url: "5JPVErtAvJo",
      },
      {
        id: "lnnfij",
        title: "✅ Curso Maestro de C++: 8 Funciones útiles en C++ � #11",
        url: "yHTdY-D3L6Y",
      },
      {
        id: "suk7po",
        title:
          "✅ Curso Maestro de C++: Calculando la Hipotenusa de un Triangulo Rectángulo en C++ � #12",
        url: "0GThyGyQGJU",
      },
      {
        id: "4b8p9",
        title:
          "✅ Curso Maestro de C++: Condicional IF en C++ (Sintaxis, declaración y uso en C++) � #13",
        url: "7KuSfLbI2e0",
      },
      {
        id: "zjftrs",
        title:
          "✅ Curso Maestro de C++: Condicional SWITCHES en C++ (Sintaxis, declaración y uso en C++) � #14",
        url: "SVyS50pFZR4",
      },
      {
        id: "uq8sy",
        title:
          "✅ Curso Maestro de C++: Como hacer una CALCULADORA en C++ � #15",
        url: "VObQCbEciYQ",
      },
      {
        id: "vnmk7xc",
        title: "✅ Curso Maestro de C++: Operador Ternario en c++ ❓ #16",
        url: "dIWfURrOU8U",
      },
      {
        id: "uyyitx",
        title: "✅ Curso Maestro de C++: Operadores Logicos en c++ � #17",
        url: "VIOMb4Hr47Q",
      },
      {
        id: "k7yfrw",
        title:
          "✅ Curso Maestro de C++: Conversión de Temperatura en C++ �️ #18",
        url: "nZmVEsWNO60",
      },
      {
        id: "us6jwc",
        title:
          "✅ Curso Maestro de C++: 8 Métodos de Cadena útiles en C++ 〰️ #19",
        url: "JG65w1IcG0U",
      },
      {
        id: "wu65vm",
        title:
          "✅ Curso Maestro de C++: Aprender a programar ciclos WHILE en C++ ♾️ #20",
        url: "G9eWlnh1T_0",
      },
      {
        id: "n5474k",
        title:
          "✅ Curso Maestro de C++: Aprender a programar ciclos DO WHILE en C++ � #21",
        url: "NHLNetgRAss",
      },
      {
        id: "91gozd",
        title:
          "✅ Curso Maestro de C++: Todo sobre los BUCLES FOR en C++ � #22",
        url: "PGHvRp7RSmQ",
      },
      {
        id: "mwchka",
        title:
          "✅ Curso Maestro de C++: Cual es la diferencia entre Break & Continue en C++ � #23",
        url: "PXvd1DBB5AU",
      },
      {
        id: "t10vqd",
        title:
          "✅ Curso Maestro de C++: Que es un Bucle Anidado en C++? ➿ #24",
        url: "PHnohhhd73E",
      },
      {
        id: "seeo0s",
        title:
          "� Números Aleatorios en C++ �� – Generar números aleatorios – Random numbers - Curso C++ � #25",
        url: "ok7Y5y7TIBo",
      },
      {
        id: "59j1lc",
        title:
          "� Generador de Eventos Aleatorios en C++ �� – Generar números aleatorios – Curso C++ � #26",
        url: "3iYbkSMoT-w",
      },
      {
        id: "h19hd",
        title:
          "� Creando Adivina el Número con C++ �� – Creando un juego con C++ ↕️ #27",
        url: "FC4uWpLJ2A0",
      },
      {
        id: "ivnz2",
        title:
          "� Funciones en C++ �� – (Como declarar y llamar funciones) | Curso de C++ � #28",
        url: "99mmpf7LsF4",
      },
      {
        id: "80n5rl",
        title:
          "� Sentencia RETURN en C++ �� – ¿Qué es el retorno en C++? | Curso de C++ � #29",
        url: "i586R-sItUc",
      },
      {
        id: "yzc1cj",
        title:
          "� Funciones Sobrecargadas en C++ �� – ¿Qué es la sobrecarga de funciones? | Curso de C++ � #30",
        url: "RIX-qGEb8tk",
      },
      {
        id: "4elwsh",
        title:
          "� Operador de resolución de AMBITO en C++ �� – ¿Qué es el scope en C++? | Curso de C++ � #31",
        url: "18-eify-l34",
      },
      {
        id: "6q4y9",
        title:
          "� SISTEMA BANCARIO en C++ �� – Ejercicios Prácticos de C++ | Curso de C++ � #32",
        url: "FTLAhcGOV3M",
      },
      {
        id: "7jhhr",
        title:
          "� PIEDRA PAPEL o TIJERA en C++ �� – Ejercicios Prácticos de C++ | Curso de C++ � #33",
        url: "sUcOrP-C2FA",
      },
      {
        id: "j33pt8",
        title:
          "� ARREGLOS en C++ �� – ¿Qué es un arreglo en C++? | Curso de C++ � #34",
        url: "rflyMrI33NI",
      },
      {
        id: "poe9x",
        title:
          "� Operador Sizeof() en C++ �� – ¿Qué devuelve sizeof? | Curso de C++ ⚖️ #35",
        url: "zTAYfvZmA0E",
      },
      {
        id: "qlvb89",
        title:
          "� Recorrer un Arreglo en C++ �� – Declarar y recorrer Array | Curso de C++ �️ #36",
        url: "lCD6kjj4mu4",
      },
      {
        id: "qbt7x",
        title:
          "� Bucle Foreach en C++ �� – ¿Existe un bucle foreach en C++? | Curso de C++ �️ #37",
        url: "3rN1zgfT0aw",
      },
      {
        id: "vl6vo",
        title:
          "� Como pasar un ARREGLO a Función en C++ �� – Pasar un Arreglo como Argumento | Curso de C++ � #38",
        url: "tjU8HDjHenQ",
      },
      {
        id: "58u72",
        title:
          "� Buscar un elemento en una Arreglo en C++ �� – Buscar un valor en un Arreglo | Curso de C++ � #39",
        url: "QrPN6MQ2FFE",
      },
      {
        id: "aisg79",
        title:
          "� Ordenar Arreglos en C++ �� – Ordenar un Arreglo de Mayor a Menor en C++ | Curso de C++ � #40",
        url: "eammCZfvSUM",
      },
      {
        id: "gv0q9",
        title:
          "� Función FILL() en C++ �� – ¿Para qué sirve fill() en C++? | Curso de C++ � #41",
        url: "pGBXIAjCap4",
      },
      {
        id: "ivv7at",
        title:
          "� Llenar un Arreglo con datos introducidos por el usuario en C++ �� | Curso de C++ � #42",
        url: "mdADMuP9rgY",
      },
      {
        id: "e1yzmp",
        title:
          "� Arreglos Bidimensional en C++ �� – ¿Qué es una matriz 2D en C++? | Curso de C++ ⬜ #43",
        url: "9ht89XigY8M",
      },
      {
        id: "7jy0k",
        title:
          "� Juegos de Preguntas en C++ �� – QUIZ en C++ explicado PASO A PASO | Curso de C++ � #44",
        url: "350OQn_9cWw",
      },
      {
        id: "41wtbo",
        title:
          "� Direccion de Memoria en C++ �� – ¿Qué es una dirección de memoria en C++? | Curso de C++ � #45",
        url: "5rS0hkOOIfI",
      },
      {
        id: "sq12zh",
        title:
          "� Pasar por VALOR vs Pasar por REFERENCIA en C++ �� | Curso de C++ � #46",
        url: "CuJ4heUMGu0",
      },
      {
        id: "koekan",
        title:
          "� Parámetros Const en C++ �� – ¿Qué es un parámetro constante en C++? | Curso de C++ � #47",
        url: "JxcFxMf9VHc",
      },
      {
        id: "sq2t1",
        title:
          "� Validación de Tarjetas de Crédito en C++ �� – Verificación de Luhn | Curso de C++ � #48",
        url: "jmF0u0JLf9M",
      },
      {
        id: "sz2zzd",
        title:
          "� Todos sobre los Punteros en C++ �� – ¿Qué son, cómo hacerlos y cómo usarlos? | Curso de C++ � #49",
        url: "bgfH_HB341M",
      },
      {
        id: "gzenzg",
        title:
          "� Punteros Nulos en C++ �� – ¿Qué son los punteros nulos en C++? | Curso de C++ ⛔ #50",
        url: "1zW9jZr6jck",
      },
      {
        id: "v3or7",
        title: "✅ Tic Tac Toe - Como crearlo con C++ ⭕ #51",
        url: "Fvz1Qj_ilOw",
      },
      {
        id: "tfczgp",
        title:
          "� Memoria Dinámica en C++ �� – ¿Qué es la memoria dinámica en C++? | Curso de C++ � #52",
        url: "LTmv8mjeLDc",
      },
      {
        id: "r16iw",
        title:
          "� Funciones Recursivas en C++ �� – ¿Qué es una función recursiva en C++? | Curso de C++ � #53",
        url: "QyZRic6E6u0",
      },
      {
        id: "sra9rc",
        title:
          "� Plantillas de Funciones en C++ �� – ¿Qué es una plantilla de función en C++? | Curso de C++ � #54",
        url: "T_Df_rwl2oM",
      },
      {
        id: "bgdd3u",
        title:
          "� Estructuras en C++ �� – ¿Qué son las estructuras en C++? | Curso de C++ �️ #55",
        url: "64_SnJbjC1Y",
      },
      {
        id: "idwtgr",
        title:
          "� Como pasar una estructura a una función en C++ �� – Estructura en C++ | Curso de C++ � #56",
        url: "tphJXeEYrZA",
      },
      {
        id: "oak1yg",
        title:
          "� Enumeraciones en C++ �� – ¿Qué son las enumeraciones en C++? | Curso de C++ � #57",
        url: "kUvmDZV86ds",
      },
      {
        id: "0s1n7",
        title:
          "� Programación Orientada a Objetos en C++ �� – Clases y Objetos en C++ | Curso de C++ � #58",
        url: "cGW5AiNrOOo",
      },
      {
        id: "e70r0n",
        title:
          "� Que son los CONSTRUCTORES en C++ �� – POO en C++ | Curso de C++ � #59",
        url: "IAPL8cHLnuY",
      },
      {
        id: "zabu7",
        title:
          "� Constructores Sobrecargados en C++ �� – POO en C++ | Curso de C++ �‍� #60",
        url: "D2SujLPZxZY",
      },
      {
        id: "mrbv9",
        title:
          "� Getters & setters en C++ �� – POO en C++ | Curso de C++ � #61",
        url: "s4QG1mtSQ6Y",
      },
      {
        id: "kpiede",
        title:
          "� Qué es la HERENCIA en C++? �� – POO en C++ | Curso de C++ �‍�‍� #62",
        url: "p3tYUIA0PWQ",
      },
    ],
  },
  {
    id: 5,
    front:
      "https://i.ytimg.com/vi/HuirxQ3Nxvc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDUl-F651HqPtiwOeTJ4FTUkXSRpw",
    title: "Linux desde cero con ubuntu",
    urltitle: "linux-desde-cero",
    description: "Playlist",
    canal: {
      id: "sad1212d21",
      avatar:
        "https://yt3.ggpht.com/ytc/AIdro_lywghW3Dq5li8ze84NvEuguvEmN0I5Xi0VI5CC8QoyPg=s48-c-k-c0x00ffffff-no-rj",
      name: "de Facultad Autodidacta",
      plataform: "Youtube",
    },
    class: [
      {
        id: "40mn4o",
        title: "Curso de Linux desde cero | Presentación. Cap 0",
        url: "HuirxQ3Nxvc",
      },
      {
        id: "m57baf",
        title: "Curso de Linux desde cero | Introducción. Cap 1",
        url: "0oPncfQ9WnY",
      },
      {
        id: "9h5qij",
        title:
          "Curso de Linux desde cero | Instalación de ubuntu en virtualBox. Cap 2",
        url: "Re8klo1maWw",
      },
      {
        id: "7rnvi9",
        title:
          "Curso de Linux desde cero | Poner pantalla completa en VirtualBox (guest additions). Cap 3",
        url: "SgRmwFSVUEo",
      },
      {
        id: "yltf8s",
        title:
          "Curso de Linux desde cero | Revisión de entorno de trabajo linux. Cap 4",
        url: "g1604zstO68",
      },
      {
        id: "cm9bjb",
        title:
          "Curso de Linux desde cero | Administrador de paquetes aptitude. Cap 5",
        url: "csoBCXNqNJw",
      },
      {
        id: "sy5q1v",
        title: "Curso de Linux desde cero | Migrar de Windows a Linux. Cap 6",
        url: "t_rHeGntlxw",
      },
      {
        id: "d4vuwi",
        title: "Curso de Linux desde cero | Linea de comandos (parte 1). Cap 7",
        url: "okvAkfGpYac",
      },
      {
        id: "d3496v",
        title: "Curso de Linux desde cero | Linea de comandos (parte 2). Cap 8",
        url: "oaTYbgcntI8",
      },
      {
        id: "ehw8yc",
        title: "Curso de Linux desde cero | Linea de comandos (parte 3). Cap 9",
        url: "TSP5XRe0E1s",
      },
      {
        id: "vinj37",
        title:
          "Curso de Linux desde cero | Linea de comandos (parte 4). Cap 10",
        url: "H0RDcJB3InM",
      },
      {
        id: "ewe4el",
        title:
          "Curso de Linux desde cero | Linea de comandos (parte 5). Cap 11",
        url: "00t5keR1Oy4",
      },
      {
        id: "2tmwb2",
        title:
          "Curso de Linux desde cero | Linea de comandos (parte 6). Cap 12",
        url: "eXWf9xVj-Gk",
      },
      {
        id: "uty56i",
        title:
          "Curso de Linux desde cero | Linea de comandos (parte 7). Cap 13",
        url: "r8GPChgEVIU",
      },
      {
        id: "fn090j",
        title: "Curso de Linux desde cero | Editor de textos nano. Cap 14",
        url: "Zo17W1Am3fQ",
      },
      {
        id: "7ihu0c",
        title:
          "Curso de Linux desde cero | Monitor de recursos por consola htop. Cap 15",
        url: "-euW3TixHJY",
      },
      {
        id: "dpq64f",
        title:
          "Curso de Linux desde cero | Monitor de red por consola nethogs. Cap 16",
        url: "WAuG3KqGI_c",
      },
      {
        id: "riwno6",
        title:
          "Curso de Linux desde cero | Administración de discos duros (ubuntu y gparted). Cap 17",
        url: "CAwMVYUeW2I",
      },
    ],
  },
];

export const classe: { id: string; title: string; url: string }[] = [
  {
    id: "shu1hdu1h9827u89sd8ashd91id",
    title: "📚¡El ABC de la MATEMÁTICA! - CURSO de Mates desde Cero",
    url: "https://www.youtube.com/watch?v=vMSrAcrH9tg",
  },
  {
    id: "sd23sqd1sdasdW23RDFWEFW4T34WDF",
    title: "📚¡MATEMÁTICA sin MEMORIZAR! - Operaciones y Números",
    url: "https://www.youtube.com/watch?v=8E9t4s3gjGg",
  },
  {
    id: "sdf23r23r23r23r23r23r23r23r23r",
    title: "📚Sin TRUCOS pero con MAGIA - Ecuaciones",
    url: "https://www.youtube.com/watch?v=xNRpLqixHvY",
  },
  {
    id: "sdf23r23r23r23r23r23r23r23r223r",
    title:
      "🚀Cómo resolver SISTEMAS de ECUACIONES, Porcentajes, Intervalos y Más",
    url: "https://www.youtube.com/watch?v=4BlIlUFPfKk",
  },
  {
    id: "asdasdasdasasdasdasdas",
    title:
      "🌍📐 ¡A MEDIR el MUNDO! Trigonometría, Pitágoras, Seno, Coseno y Radianes.",
    url: "https://www.youtube.com/watch?v=LlaZGSIieUw",
  },
  {
    id: "a23dasdasdasasdasda345sdas",
    title:
      "😎 Resolvemos PROBLEMAS MATEMÁTICOS: Funciones, Porcentajes y Probabilidades",
    url: "https://www.youtube.com/watch?v=EPO4evSGIh4",
  },
];
