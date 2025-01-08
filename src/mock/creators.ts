interface Creator {
  id: string;
  avatar: string;
  name: string;
  description: string;
  platform: string[];
  history: string;
  achievements: string[];
  contributions: string;
}

export const creators: Creator[] = [
  {
    id: "1dsd1232",
    avatar:
      "https://yt3.ggpht.com/mutEfGrV7OtsLdZC9m56h9_RNDzEqm2anCh1JvtFfE53-tTyRIxB7UAZSs8CAUxfBIr_PPLqYU4=s48-c-k-c0x00ffffff-no-rj",
    name: "Juan Ignacio Silva",
    description: "Ingeniero, Educador e Innovador",
    platform: ["YouTube", "Instagram", "TikTok"],
    history:
      "Juan Ignacio Silva es un ingeniero apasionado por la innovación y la educación. Su misión es transformar la manera en que las personas aprenden matemáticas y ciencias aplicadas, utilizando métodos modernos y accesibles para la enseñanza.",
    achievements: [
      "Más de 800,000 seguidores en redes sociales.",
      "Creador de una plataforma educativa con recursos para estudiantes de ingeniería.",
      "Reconocido como líder en la enseñanza interactiva de matemáticas y física.",
      "Ha sido mentor para cientos de jóvenes profesionales en tecnología y ciencias.",
    ],
    contributions:
      "Juan ha colaborado con equipos interdisciplinarios para desarrollar herramientas educativas que combinan tecnología y pedagogía. Su enfoque innovador inspira a estudiantes a alcanzar su máximo potencial académico.",
  },
  {
    id: "1dsd1233",
    avatar:
      "https://yt3.ggpht.com/e6MSYBYMhAblq2tflgxLUBYR9PI_2oZXOqCOq3qlwOcvUyHcpRByyQ7_hRQ1L4kMONBF26aQXmg=s48-c-k-c0x00ffffff-no-rj",
    name: "Damián Pedraza",
    description: "Ingeniero, Educador e Divulgador",
    platform: ["YouTube", "Instagram", "TikTok"],
    history:
      "Damián Pedraza es un ingeniero apasionado por la enseñanza.Comenzó su camino educativo creando contenido en redes sociales para simplificar conceptos complejos en matemáticas, cálculo y              física. Su enfoque fresco y dinámico ha ayudado a miles de              estudiantes a mejorar su comprensión de temas científicos y              técnicos.",
    achievements: [
      "Más de 1,300,000 seguidores en redes sociales.",
      "Creador de más de 500 videos educativos en matemáticas y física aplicada.",
      "Conferencista invitado en múltiples eventos de tecnología y educación.",
      "Colaborador con instituciones académicas para promover el aprendizaje digital.",
    ],
    contributions:
      "A través de sus videos, Damián ha empoderado a estudiantes de todo el mundo a superar barreras de aprendizaje. Ha creado recursos innovadores y accesibles para hacer que la ciencia y la ingeniería sean más inclusivas.",
  },
];
