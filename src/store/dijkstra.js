import Dijkstra from '../utils/Dijkstra.js';

const distanceDijkstra = new Dijkstra();
const timeDijkstra = new Dijkstra();

distanceDijkstra.addEdge('교대', '강남', 2);
distanceDijkstra.addEdge('강남', '역삼', 2);

distanceDijkstra.addEdge('교대', '남부터미널', 3);
distanceDijkstra.addEdge('남부터미널', '양재', 6);
distanceDijkstra.addEdge('양재', '매봉', 1);

distanceDijkstra.addEdge('강남', '양재', 2);
distanceDijkstra.addEdge('양재', '양재시민의', 10);

timeDijkstra.addEdge('교대', '강남', 3);
timeDijkstra.addEdge('강남', '역삼', 3);

timeDijkstra.addEdge('교대', '남부터미널', 2);
timeDijkstra.addEdge('남부터미널', '양재', 5);
timeDijkstra.addEdge('양재', '매봉', 1);

timeDijkstra.addEdge('강남', '양재', 8);
timeDijkstra.addEdge('양재', '양재시민의', 3);

export default {
  distanceDijkstra,
  timeDijkstra,
};
