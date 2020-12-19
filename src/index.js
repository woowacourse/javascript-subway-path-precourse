import SubWayPath from './components/subwayPath.js';

const subWayPathManager = new SubWayPath();

subWayPathManager.distanceDijkstra.addEdge('교대', '강남', 2);
subWayPathManager.distanceDijkstra.addEdge('강남', '역삼', 2);
subWayPathManager.distanceDijkstra.addEdge('교대', '남부터미널', 3);
subWayPathManager.distanceDijkstra.addEdge('남부터미널', '양재', 1);
subWayPathManager.distanceDijkstra.addEdge('양재', '매봉', 1);
subWayPathManager.distanceDijkstra.addEdge('강남', '양재', 2);
subWayPathManager.distanceDijkstra.addEdge('양재', '양재시민의숲', 10);

subWayPathManager.timeDijkstra.addEdge('교대', '강남', 3);
subWayPathManager.timeDijkstra.addEdge('강남', '역삼', 3);
subWayPathManager.timeDijkstra.addEdge('교대', '남부터미널', 2);
subWayPathManager.timeDijkstra.addEdge('남부터미널', '양재', 5);
subWayPathManager.timeDijkstra.addEdge('양재', '매봉', 1);
subWayPathManager.timeDijkstra.addEdge('강남', '양재', 8);
subWayPathManager.timeDijkstra.addEdge('양재', '양재시민의숲', 3);
