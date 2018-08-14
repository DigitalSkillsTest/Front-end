export const getBgColor = (color) => {
  switch (color) {
    case 'A':
      return '#0085C6';
    case 'B':
      return '#009F49';
    case 'C':
      return '#BDCF31';
    case 'D':
      return '#F7B713';
    case 'E':
      return '#E34640';
    case 'F':
      return '#94378D';
    default:
      return '#0085C6';
  }
};

// export const getCategory = (category) => {
//   switch (category) {
//     case 'A':
//       return 'Virtual Language';
//     case 'B':
//       return 'Adaptación al Cambio';
//     case 'C':
//       return 'Virtual Work abilities';
//     case 'D':
//       return 'Digital Leadership';
//     case 'E':
//       return 'Digital mindset';
//     case 'F':
//       return 'Virtual Core Business mindset';
//     default:
//       return '';
//   }
// };

export const getSteps = (current) => {
  switch (current) {
    case 'A':
      return 1;
    case 'B':
      return 2;
    case 'C':
      return 3;
    case 'D':
      return 4;
    case 'E':
      return 5;
    case 'F':
      return 6;
    default:
      return 1;
  }
};


export const categoryData = [
  {
    category: 'Virtual Language',
    subcategory: [
      {
        sub_cat: 'Technical-Language',
      },
      {
        sub_cat: 'Conocimiento específico del rol',
      },
      {
        sub_cat: 'Creación digital vs analógica',
      },
      {
        sub_cat: 'Aprendizaje digital y desarrollo',
      },
      {
        sub_cat: 'Conocimientos básicos de tecnologías',
      },
    ],
  },
  {
    category: 'Adaptación al Cambio',
    subcategory: [
      {
        sub_cat: 'Miedo al cambio',
      },
      {
        sub_cat: 'Miedo a ser reemplazado',
      },
      {
        sub_cat: 'Dificultad de adaptación',
      },
      {
        sub_cat: 'Gusto por lo nuevo',
      },
      {
        sub_cat: 'Auto-transformación',
      },
    ],
  },
  {
    category: 'Virtual Work abilities',
    subcategory: [
      {
        sub_cat: 'Identidad Digital',
      },
      {
        sub_cat: 'Socialización Digital',
      },
      {
        sub_cat: 'Alineamiento a las metas',
      },
      {
        sub_cat: 'Trabajo colaborativo',
      },
      {
        sub_cat: 'Visión de mi parte y del total',
      },
    ],
  },
  {
    category: 'Digital Leadership',
    subcategory: [
      {
        sub_cat: 'Transferencia a otros',
      },
      {
        sub_cat: 'Visión de cliente interno',
      },
      {
        sub_cat: 'Liderazgo remoto',
      },
      {
        sub_cat: 'Gestión de diferentes Stakeholders',
      },
      {
        sub_cat: 'Manejo de la velocidad de cambio',
      },
    ],
  },
  {
    category: 'Digital mindset',
    subcategory: [
      {
        sub_cat: 'Naturalidad con las tecnologías',
      },
      {
        sub_cat: 'Curiosidad y cuestionamiento positivo',
      },
      {
        sub_cat: 'Investigación y aprendizaje continuo',
      },
      {
        sub_cat: 'Gestión de la información',
      },
      {
        sub_cat: 'Apetito por la Experiencia de Usuario',
      },
    ],
  },
  {
    category: 'Virtual Core Business mindset',
    subcategory: [
      {
        sub_cat: 'Perfeccionamiento de Actividades',
      },
      {
        sub_cat: 'Mirada global de procesos',
      },
      {
        sub_cat: 'Obsesión por los costos',
      },
      {
        sub_cat: 'Internalización de los mercados virtuales',
      },
      {
        sub_cat: 'Apetencia por las nuevas tecnologías',
      },
    ],
  },
];
