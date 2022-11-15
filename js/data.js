const navigation = [
  {
    name: 'Projecten',
    link: 'index.html',
    type: 'internal',
  },
  {
    name: 'Graduaat Programmeren',
    link: 'https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren',
    type: 'external',
  },
  {
    name: 'Programmeren 1',
    link: 'https://www.pgm.gent/pgm-1/js_essentials/introduction.html',
    type: 'external',
  },
];

const events = [
  {
    title: 'Interactieve workshops voor leerlingen laatste graad secundair onderwijs',
    link: 'https://www.arteveldehogeschool.be/dienstverlening/diensten-voor-scholen/winterlab',
  },
  {
    title: 'Workshops "Zeg het met 3D, Code, Kleur, Beeld en geluid"',
    link: 'https://ahsdevelopers.github.io/zeghetmetkleur/',
  },
  {
    title: 'Studie-informatiedagen (SID-ins): aanbod aan studie- en beroepsmogelijkheden na je secundair onderwijs',
    link: 'https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/sid-ins',
  },
  {
    title: 'Infodag zaterdag 11 maart 2023 (10:00 tot 17:00)',
    link: 'https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/infodagen',
  },
];

const socials = {
  website: 'http://www.pgm.gent',
  linkedin: 'https://www.linkedin.com/company/28878545/admin/',
  facebook: 'https://www.facebook.com/Programmeren.ahs',
  instagram: 'https://www.instagram.com/programmeren.ahs/',
  youtube: 'https://www.youtube.com/channel/UCHly8VZULSMWEmvbPJNVtFA',
};

const projecten = [
  {
    id: '36ccfd82-4741-4bbc-ba57-19bbc4d6801a',
    title: 'Dialectische Gedragstherapie (DGT)',
    synopsis: 'Webapp ter ondersteuning van Dialectische Gedragstherapie (DGT)',
    author: {
      firstName: 'Charlotte',
      lastName: 'Delvaux',
    },
    technologies: [
      {
        id: '9ca1d867-ae80-4e33-b84d-5241a6e759f3',
        name: 'Angular',
      },
      {
        id: '45f09de1-812c-45e0-9142-228660a07e95',
        name: 'NestJS',
      },
    ],
    screenshots: [
      'images/delvauxcharlotte/screenshot_01.png',
      'images/delvauxcharlotte/screenshot_02.png',
    ],
  },
  {
    id: '64eef5c7-5916-4c7b-8064-02ccf57d7959',
    title: 'Buurtkajaks Gent',
    synopsis: 'Native mobile applicatie om kajaks te reserveren in Gent',
    author: {
      firstName: 'Dylan',
      lastName: 'Cathelijn',
    },
    technologies: [
      {
        id: '9b8da679-f126-4f42-9579-d8236c4b04b5',
        name: 'React Native',
      },
      {
        id: '97988be0-9ff7-4c64-8e75-f1719c31ecdd',
        name: 'Firebase',
      },
    ],
    screenshots: [
      'images/cathelijndylan/screenshot_01.png',
      'images/cathelijndylan/screenshot_02.png',
      'images/cathelijndylan/screenshot_03.png',
      'images/cathelijndylan/screenshot_04.png',
    ],
  },
  {
    id: 'ffd344bb-dbd7-4117-b8a5-2fa3dbd93fc3',
    title: 'Tekst.ai',
    synopsis: 'Een gebruiksvriendelijk en personaliseerbaar dashboard voor Tekst.ai',
    author: {
      firstName: 'Jan',
      lastName: 'Deschacht',
    },
    technologies: [
      {
        id: '908d18fb-9200-41fe-a183-b83e97d1923b',
        name: 'NextJS',
      },
      {
        id: '600f72d9-a376-44b8-91f1-63e5b89183c8',
        name: 'Strapi',
      },
    ],
    screenshots: [
      'images/deschachtjan/screenshot_01.png',
      'images/deschachtjan/screenshot_02.png',
      'images/deschachtjan/screenshot_03.png',
      'images/deschachtjan/screenshot_04.png',
    ],
  },
  {
    id: 'd9b1fc98-471c-466a-b51f-38dddd2feaf0',
    title: 'Virtual Closet',
    synopsis: 'Sociale applicatie om kleding (uit jouw kledingkast) te matchen tot een goede outfit door andere gebruikers',
    author: {
      firstName: 'Thabisa',
      lastName: 'Dingani',
    },
    technologies: [
      {
        id: 'fe0484f7-fae0-4cec-b351-5dd2a1b86993',
        name: 'React Native',
      },
      {
        id: '945d5c68-ac47-4b95-8bf3-369114b9eafc',
        name: 'Firebase',
      },
    ],
    screenshots: [
      'images/dinganithabisa/screenshot_01.png',
      'images/dinganithabisa/screenshot_02.png',
      'images/dinganithabisa/screenshot_03.png',
    ],
  },
  {
    id: '2fd2ea54-f7b8-45d2-8b94-c6669f2af067',
    title: 'Car expense',
    synopsis: 'Platform om kosten van een auto te bijhouden inclusief speech-to-text',
    author: {
      firstName: 'Jamie-Lee',
      lastName: 'Hart',
    },
    technologies: [
      {
        id: '1fa8cdcc-4fc2-4d1d-973e-67f3e480b3a4',
        name: 'ReactJS',
      },
      {
        id: '65183860-347f-4a8c-92a9-df7a86f058aa',
        name: 'Supabase',
      },
    ],
    screenshots: [
      'images/hartjamielee/screenshot_01.png',
      'images/hartjamielee/screenshot_02.png',
      'images/hartjamielee/screenshot_03.png',
    ],
  },
  {
    id: '376259fd-06be-43de-a174-c51ff964adc1',
    title: 'Crypto Tracker',
    synopsis: 'Mobiele (native) applicatie voor het tracken van cryptomunten',
    author: {
      firstName: 'Aiden',
      lastName: 'Soufi',
    },
    technologies: [
      {
        id: '670e1c19-8b1c-4c56-a627-f6a0075708c0',
        name: 'React Native',
      },
      {
        id: '2db05869-2494-4467-aea0-a926547221f8',
        name: 'Firebase',
      },
    ],
    screenshots: [
      'images/soufiaiden/screenshot_01.png',
      'images/soufiaiden/screenshot_02.png',
      'images/soufiaiden/screenshot_03.png',
    ],
  },
  {
    id: '50108ef8-1ea6-48f9-8421-1d29a9dd7964',
    title: 'La Macarena',
    synopsis: 'Website voor La Macarena, een organisatie die verschillende activeiten organiseert voor jonge vrouwen',
    author: {
      firstName: 'Nicolas',
      lastName: 'Cnudde',
    },
    technologies: [
      {
        id: 'd2b455c2-cc45-46d1-85a4-658eb087aca5',
        name: 'VueJS',
      },
      {
        id: 'f0f756bb-d265-4b7e-8daf-4c2a53fee982',
        name: 'GraphQL',
      },
    ],
    screenshots: [
      'images/cnuddenicolas/screenshot_01.png',
      'images/cnuddenicolas/screenshot_02.png',
      'images/cnuddenicolas/screenshot_03.png',
    ],
  },
  {
    id: 'b9a1c3f3-9b0c-48ab-96a0-c6d35480245e',
    title: 'TorchLight',
    synopsis: 'Mobiele applicatie om characters bij te houden tijdens een Dungeons and Dragons spel',
    author: {
      firstName: 'Bram',
      lastName: 'Vandenbussche',
    },
    technologies: [
      {
        id: '2e8d476c-6f07-4ec4-b0ba-bbe72b32e9d1',
        name: 'Angular',
      },
      {
        id: '6e459a76-0180-4005-8437-d7bc9069589c',
        name: 'Firebase',
      },
    ],
    screenshots: [
      'images/vandenbusschebram/screenshot_01.png',
      'images/vandenbusschebram/screenshot_02.png',
      'images/vandenbusschebram/screenshot_03.png',
      'images/vandenbusschebram/screenshot_04.png',
    ],
  },
  {
    id: 'c2b71541-9965-40cd-815b-d15af5997576',
    title: 'DiscoverSound',
    synopsis: 'Webapplicatie waarbij je willekeurige nummers te horen krijgt van onbekende bands',
    author: {
      firstName: 'Bram',
      lastName: 'Criel',
    },
    technologies: [
      {
        id: '42cc2c08-0ad8-43ee-ae71-71b660b66fec',
        name: 'ReactJS',
      },
      {
        id: 'faea5c73-206b-4b2b-9248-e15fe887fbab',
        name: 'Firebase',
      },
    ],
    screenshots: [
      'images/crielbram/screenshot_01.png',
      'images/crielbram/screenshot_02.png',
      'images/crielbram/screenshot_03.png',
    ],
  },
];
