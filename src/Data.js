import Dijkstra from './utils/Dijkstra.js';

export const stations = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];

export function fetchShortestDistanceDijkstra() {
  const dijkstra = new Dijkstra();

  dijkstra.addEdge('교대', '강남', 2);
  dijkstra.addEdge('강남', '역삼', 2);
  dijkstra.addEdge('교대', '남부터미널', 3);
  dijkstra.addEdge('남부터미널', '양재', 6);
  dijkstra.addEdge('양재', '매봉', 1);
  dijkstra.addEdge('강남', '양재', 2);
  dijkstra.addEdge('양재', '양재시민의숲', 10);

  return dijkstra;
}

export function fetchShortestTimeDijkstra() {
  const dijkstra = new Dijkstra();

  dijkstra.addEdge('교대', '강남', 3);
  dijkstra.addEdge('강남', '역삼', 3);
  dijkstra.addEdge('교대', '남부터미널', 2);
  dijkstra.addEdge('남부터미널', '양재', 5);
  dijkstra.addEdge('양재', '매봉', 1);
  dijkstra.addEdge('강남', '양재', 8);
  dijkstra.addEdge('양재', '양재시민의숲', 3);

  return dijkstra;
}