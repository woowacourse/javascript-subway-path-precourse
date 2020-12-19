import { LINE_NUMBER } from './constants.js';

export const Lines2 = [
  {
    id: 1,
    stationName: '교대',
    line: LINE_NUMBER.LINE2,
  },
  {
    id: 2,
    stationName: '강남',
    line: LINE_NUMBER.LINE2,
  },
  {
    id: 3,
    stationName: '역삼',
    line: LINE_NUMBER.LINE2,
  },
];

export const Lines3 = [
  {
    id: 4,
    stationName: '교대',
    line: LINE_NUMBER.LINE3,
  },
  {
    id: 5,
    stationName: '남부터미널',
    line: LINE_NUMBER.LINE3,
  },
  {
    id: 6,
    stationName: '양재',
    line: LINE_NUMBER.LINE3,
  },
  {
    id: 7,
    stationName: '매봉',
    line: LINE_NUMBER.LINE3,
  },
];

export const LineSinbundang = [
  {
    id: 8,
    stationName: '강남',
    line: LINE_NUMBER.LINE_SINBUNDANG,
  },
  {
    id: 9,
    stationName: '양재',
    line: LINE_NUMBER.LINE_SINBUNDANG,
  },
  {
    id: 10,
    stationName: '양재시민의숲',
    line: LINE_NUMBER.LINE_SINBUNDANG,
  },
];

const time = [
  {
    departureStation: '교대',
    endStation: '강남',
    distance: 3,
  },
  {
    departureStation: '강남',
    endStation: '역삼',
    distance: 3,
  },
  {
    departureStation: '교대',
    endStation: '남부터미널',
    distance: 2,
  },
  {
    departureStation: '남부터미널',
    endStation: '양재',
    distance: 5,
  },
  {
    departureStation: '양재',
    endStation: '매봉',
    distance: 1,
  },
  {
    departureStation: '강남',
    endStation: '양재',
    distance: 8,
  },
  {
    departureStation: '양재',
    endStation: '양재시민의숲',
    distance: 3,
  },
];

const distance = [
  {
    departureStation: '교대',
    endStation: '강남',
    distance: 2,
  },
  {
    departureStation: '강남',
    endStation: '역삼',
    distance: 2,
  },
  {
    departureStation: '교대',
    endStation: '남부터미널',
    distance: 3,
  },
  {
    departureStation: '남부터미널',
    endStation: '양재',
    distance: 6,
  },
  {
    departureStation: '양재',
    endStation: '매봉',
    distance: 1,
  },
  {
    departureStation: '강남',
    endStation: '양재',
    distance: 2,
  },
  {
    departureStation: '양재',
    endStation: '양재시민의숲',
    distance: 10,
  },
];
