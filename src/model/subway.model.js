export const stations = [
  {
    name: '교대',
  },
  {
    name: '강남',
  },
  {
    name: '역삼',
  },
  {
    name: '남부터미널',
  },
  {
    name: '양재',
  },
  {
    name: '양재시민의숲',
  },
  {
    name: '매봉',
  },
];

export const lines = {
  '2호선': [
    {
      name: '교대',
    },
    {
      name: '강남',
    },
    {
      name: '역삼',
    },
  ],
  '3호선': [
    {
      name: '교대',
    },
    {
      name: '남부터미널',
    },
    {
      name: '양재',
    },
    {
      name: '매봉',
    },
  ],
  '신분당선': [
    {
      name: '강남',
    },
    {
      name: '양재',
    },
    {
      name: '양재시민의숲',
    },
  ],
};

export const sections = {
  '2호선': {
    '교대': {
      '강남': {
        'distance': 2,
        'time': 3,
      },
    },
    '강남': {
      '역삼': {
        'distance': 2,
        'time': 3,
      },
    },
  },
  '3호선': {
    '교대': {
      '남부터미널': {
        'distance': 3,
        'time': 2,
      },
    },
    '남부터미널': {
      '양재': {
        'distance': 6,
        'time': 5,
      },
    },
    '양재': {
      '매봉': {
        'distance': 1,
        'time': 1,
      },
    },
  },
  '신분당선': {
    '강남': {
      '양재': {
        'distance': 2,
        'time': 8,
      },
    },
    '양재': {
      '양재시민의숲': {
        'distance': 10,
        'time': 3,
      },
    },
  },
};
