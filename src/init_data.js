export const station = [
  '교대',
  '강남',
  '역삼',
  '남부터미널',
  '양재',
  '양재시민의숲',
  '매봉'
];

export const line = [
  [
    '2호선',
    [
      '교대',
      '강남',
      '역삼'
    ]
  ],
  [
    '3호선',
    [
      '교대',
      '남부터미널',
      '양재',
      '매봉'
    ]
  ],
  [
    '신분당선',
    [
      '강남',
      '양재',
      '양재시민의숲'
    ]
  ]
];

export const edge = [
  {
    source: '교대',
    target: '강남',
    distance: 2,
    time: 3
  },
  {
    source: '강남',
    target: '역삼',
    distance: 2,
    time: 3
  },
  {
    source: '교대',
    target: '남부터미널',
    distance: 3,
    time: 2
  },
  {
    source: '남부터미널',
    target: '양재',
    distance: 6,
    time: 5
  },
  {
    source: '양재',
    target: '매봉',
    distance: 1,
    time: 1
  },
  {
    source: '강남',
    target: '양재',
    distance: 2,
    time: 8
  },
  {
    source: '양재',
    target: '양재시민의숲',
    distance: 10,
    time: 3
  }
];
