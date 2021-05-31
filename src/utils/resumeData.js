import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import CardMembershipOutlinedIcon from '@material-ui/icons/CardMembershipOutlined';
export default {
  nombre: 'Alejandro Montero',
  estudio: 'Vilton SRL',
  addres: 'Av.Urquiza 4775, Caseros, BsAs.',
  prof: 'Arquitecto',
  email: 'alemontero.9292@gmail.com',
  celular: '+5491169740594',
  social: {
    Instagram: {
      link: 'https://www.instagram.com/?hl=es-la',
      text: 'Instagram',
      icon: <InstagramIcon />,
    },
    Linkedin: {
      link: 'https://www.linkedin.com/in/alejandro-montero-ab403a18b/',
      text: 'Linkedin',
      icon: <LinkedInIcon />,
    },
  },
  about:
    '\nSoy un joven estudiante, apasionado por el diseño y el modelado digital. Actualmente curso el cuarto año de mi carrea como arquitecto en la Universidad Nacional de San Martín.\n\nDespués de mis primeras experiencias en visitas de obras, diseños e intervenciones en barrios emergentes estoy en la búsqueda constante de evolucionar mis conocimientos y habilidades, a través de nuevas oportunidades y colaboraciones en los distintos campos que la arquitectura ofrece.\n\n Desarrollé dos proyectos de arquitectura de viviendas unifamiliares, entré en contacto con las necesidades del sus habitantes impulsándome a investigar los distintos modos de crear y usar espacios incorporando conocimientos técnicos y constructivos.\nCreo que esta experiencia me permitió expandir mis relaciones interpersonales y vocación a resultados. Enriquece mi forma de ser un futuro arquitecto en comunicación, investigación y aprendizaje constante y fluido.',

  experiences: [
    {
      cargo: 'Representante Técnico',
      periodo: '2020 - actualidad',
      descripcion: '',
    },
    {
      cargo: 'Customer Service Officer',
      periodo: '2011 - 2020',
      descripcion: `Back Office, cuentas de tarjetas de crédito Cencosud.
      Análisis e informes de BCRA y Veraz.
      Emisión de documentos legales firmado por autoridades del sector.
      Contacto específicos con clientes.`,
    },
    {
      cargo: 'Técnico Radiolólogo',
      periodo: '2015 - 2016',
      descripcion: `Técnico en Tomografía Axial Computada y
      Rx digital. Suministro de medios de contrastes.`,
    },
  ],
  educations: [
    {
      title: 'Universidad Nacional de San Martín',
      date: '2016 - actualidad',
      description: 'Arquitectura',
    },
    {
      title: 'Cruz Roja Argentina',
      date: '2012 - 2014',
      description: 'Técnico en Diagnóstico por Imágenes.',
    },
  ],
  services: [
    {
      title: 'Diseño',
      description: 'la descripcion',
      icon: <WebOutlinedIcon />,
    },
    {
      title: 'el titulo',
      description: 'la descripcion',
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: 'el titulo',
      description: 'la descripcion',
      icon: <CardMembershipOutlinedIcon />,
    },
  ],

  skills: [
    {
      title: 'Diseño',
      description: ['xxx', 'xxx', 'xxx', 'xxx'],
    },
    {
      title: 'otro',
      description: ['xxx', 'xxx', 'xxx', 'xxx'],
    },
  ],

  portfolio: [
    {
      tag: 'React',
      image: [
        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',

        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',
      ],
      caption: 'a short description',
      title: 'proyecto 1',
      description: 'project description',
      links: [
        {
          link: 'https://www.instagram.com/?hl=es-la',
          icon: <InstagramIcon />,
        },
        {
          link: 'https://www.linkedin.com/in/alejandro-montero-ab403a18b/',
          icon: <LinkedInIcon />,
        },
      ],
    },
    {
      tag: 'React',
      image: [
        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',

        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',
      ],
      caption: 'a short description',
      title: 'proyecto 1',
      description: 'project description',
      links: [
        {
          link: 'https://www.instagram.com/?hl=es-la',
          icon: <InstagramIcon />,
        },
        {
          link: 'https://www.linkedin.com/in/alejandro-montero-ab403a18b/',
          icon: <LinkedInIcon />,
        },
      ],
    },
    {
      tag: 'stealth framing',
      image: [
        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',

        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',
      ],
      caption: 'a short description',
      title: 'proyecto 1',
      description: 'project description',
      links: [
        {
          link: 'https://www.instagram.com/?hl=es-la',
          icon: <InstagramIcon />,
        },
        {
          link: 'https://www.linkedin.com/in/alejandro-montero-ab403a18b/',
          icon: <LinkedInIcon />,
        },
      ],
    },
    {
      tag: 'papa',
      image: [
        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',

        'https://static.vecteezy.com/system/resources/thumbnails/000/136/250/small/rhinestone-abstract-background-vector.jpg',
      ],
      caption: 'a short description',
      title: ' ejemplo proyecto 1',
      description: 'project description debes intertar acaaa',
      links: [
        {
          link: 'https://www.instagram.com/?hl=es-la',
          icon: <InstagramIcon />,
        },
        {
          link: 'https://www.linkedin.com/in/alejandro-montero-ab403a18b/',
          icon: <LinkedInIcon />,
        },
      ],
    },
  ],
};
