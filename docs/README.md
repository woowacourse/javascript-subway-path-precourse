# 기능 구현 목록

1. 데이터 초기화

   1. data.js에 정리하기
   2. 지하철 역: 교대, 강남, 역삼, 남부터미널, 양재, 양재시민의숲, 매봉
   3. 지하철 노선: 2호선, 3호선, 신분당선
      - 2호선: 교대 - (2km / 3분) - 강남 - (2km / 3분) - 역삼
      - 3호선: 교대 - (3km / 2분) - 남부터미널 - (6km / 5분) - 양재 - (1km / 1분) - 매봉
      - 신분당선: 강남 - (2km / 8분) - 양재 - (10km / 3분) - 양재시민의숲

2. 경로 조회

   1. `getFromStation`: 출발역 입력 받기 함수
   2. `getToStation`: 도착역 입력 받기 함수
   3. `getOption`: 최단거리 or 최소시간 선택 함수

3. 예외 처리 (<u>밑줄의 경우</u>에만 로직 처리)

   1. `vaildStationNameLength`: 출발역/도착역 이름이 2글자 이상인지 확인하는 함수
      (<u>true: 2글자 이상,</u> false: 2글자 미만)
   2. `notExsistStation`: 존재하지 않는 역 여부 확인 함수
      (true: 존재하지 않는 역, <u>false: 존재하는 역</u>)
   3. `sameStation`: 출발역/도착역 이름이 같은지 확인하는 함수
      (true: 같음, <u>false: 같지 않음</u>)
   4. `connected`: 출발역과 도착역이 연결되었는지 확인하는 함수
      (<u>true: 연결됨</u>, false: 연결되지 않음)
   5. `alertError`: 그 외 정상적이지 않은 프로그램 수행 알림 함수

4. 길찾기 관련 기능

   1. 출발역 input 태그 id 속성값: `departure-station-name-input`
   2. 도착역 input 태그 id 속성값: `arrival-station-name-input`
   3. 최소시간/최단거리 선택 radio의 name 속성값: `search-type`
      - radio option의 기본값: `최단거리`
   4. 길찾기 버튼 id 속성값: `search-button`
   5. 결과 출력: `table`

5. 최단 경로 라이브러리: `utils/Dijkstra.js`에 정리되어 있음

   ```javascript
   export default function Dijkstra() {
     
       // Node: 역에대한 정보, 우선순위를 갖는 노드
     const Node = {
       init: function (val, priority) {
         this.val = val;
         this.priority = priority;
       },
     };
     
     // 다익스트라 알고리즘의 기반 자료구조, 우선순위 큐
     const PriorityQueue = {
       // 우선순위 큐의 초기값은 빈 배열
       init: function () {
         this.values = [];
       },
       
       // 우선순위 큐에 노드를 생성(create & init)해서 큐에 넣는다.
       enqueue: function (val, priority) {
         const newNode = Object.create(Node);
         newNode.init(val, priority);
   
         this.values.push(newNode);
   
         let idxOfNewNode = this.values.length - 1;
   
         // 우선순위 큐에 노드가 들어갔을 때, 우선순위 조정해주는 부분
         while (idxOfNewNode > 0) {
           const idxOfParentNode = Math.floor((idxOfNewNode - 1) / 2);
   
           const parentNode = this.values[idxOfParentNode];
   
           if (priority < parentNode.priority) {
             this.values[idxOfParentNode] = newNode;
             this.values[idxOfNewNode] = parentNode;
             idxOfNewNode = idxOfParentNode;
             continue;
           }
           break;
         }
         // enqueue 로직이 끝나면 우선순위대로 정렬된 values를 리턴
         return this.values;
       },
         
       // 우선순위 큐에서 노드 삭제
       dequeue: function () {
         // 만약 우선순위 큐에 들어있는 값이 없으면 삭제할 수 없음
         if (this.values.length == 0) {
           return;
         }
           
         // 우선순위 큐에서 첫 번째 요소를 제거하고 반환하는 shift()
         const dequeued = this.values.shift();
         // 우선순위 큐에서 마지막 요소를 제거하고 그 요소를 반환하는 pop()
         const lastItem = this.values.pop();
         // 마지막 요소가 아니면 첫 번째 요소를 리턴
         if (!lastItem) {
           return dequeued;
         }
         // lastItem을 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환하는 unshift()
         this.values.unshift(lastItem);
   
         let idxOfTarget = 0;
   
         while (true) {
           let idxOfLeftChild = idxOfTarget * 2 + 1;
           let idxOfRightChild = idxOfTarget * 2 + 2;
           let leftChild = this.values[idxOfLeftChild];
           let rightChild = this.values[idxOfRightChild];
   
           function swap(direction) {
             const idxOfChild =
               direction == "left" ? idxOfLeftChild : idxOfRightChild;
             const child = direction == "left" ? leftChild : rightChild;
             this.values[idxOfChild] = this.values[idxOfTarget];
             this.values[idxOfTarget] = child;
             idxOfTarget = idxOfChild;
           }
   
           if (!leftChild) {
             return dequeued;
           }
   
           if (!rightChild) {
             if (leftChild.priority < lastItem.priority) {
               swap.call(this, "left");
               continue;
             }
             return dequeued;
           }
   
           if (leftChild.priority == rightChild.priority) {
             swap.call(this, "left");
             continue;
           }
   
           if (
             leftChild.priority < rightChild.priority &&
             leftChild.priority < lastItem.priority
           ) {
             swap.call(this, "left");
             continue;
           }
   
           if (
             rightChild.priority < leftChild.priority &&
             rightChild.priority < lastItem.priority
           ) {
             swap.call(this, "right");
             continue;
           }
         }
       },
     };
   
     // 가중치 그래프
     const WeightedGraph = {
       init: function () {
         this.adjacencyList = {};
         this.length = 0;
       },
       
       // 노드(vertex) 추가
       addVertex: function (vertex) {
         if (!this.adjacencyList.hasOwnProperty(vertex)) {
           this.adjacencyList[vertex] = {};
           this.length++;
         }
       },
       
       // 간선(edge) 추가
       addEdge: function (vertex1, vertex2, weight) {
         this.addVertex(vertex1);
         this.addVertex(vertex2);
         this.adjacencyList[vertex1][vertex2] = weight;
         this.adjacencyList[vertex2][vertex1] = weight;
         return this.adjacencyList;
       },
       
       // 간선 제거
       removeEdge: function (vertex1, vertex2) {
         if (!this.adjacencyList.hasOwnProperty(vertex1)) {
           return `There's no ${vertex1}`;
         }
         if (!this.adjacencyList.hasOwnProperty(vertex2)) {
           return `There's no ${vertex2}`;
         }
   
         function removeHelper(v1, v2) {
           if (!this.adjacencyList.hasOwnProperty(v1)) {
             return `There's no edge between ${v1} and ${v2}`;
           }
           delete this.adjacencyList[v1][v2];
           if (Object.keys(this.adjacencyList[v1]).length == 0) {
             delete this.adjacencyList[v1];
           }
         }
   
         removeHelper.call(this, vertex1, vertex2);
         removeHelper.call(this, vertex2, vertex1);
   
         return this.adjacencyList;
       },
       
       // 노드 제거
       removeVertex: function (vertex) {
         if (!this.adjacencyList.hasOwnProperty(vertex)) {
           return `There's no ${vertex}`;
         }
         const edges = this.adjacencyList[vertex];
         for (const key in edges) {
           this.removeEdge(key, vertex);
         }
         return this.adjacencyList;
       },
       findShortestRoute: function (start, end) {
         if (!start || !end) {
           throw Error("출발지와 도착지를 모두 입력해야 합니다.");
         }
         const distance = {};
         const previous = {};
         const pq = Object.create(PriorityQueue);
         pq.init();
         pq.enqueue(start, 0);
         const visited = {};
   
         const hashOfVertex = this.adjacencyList;
         for (const vertexName in hashOfVertex) {
           const priority = vertexName == start ? 0 : Infinity;
           distance[vertexName] = priority;
           previous[vertexName] = null;
         }
   
         while (true) {
           let current = pq.dequeue();
           if (!current?.val) {
             return;
           }
           current = current.val;
           if (current == end) {
             break;
           }
           const neighbors = hashOfVertex[current];
   
           for (const vertexName in neighbors) {
             if (visited.hasOwnProperty(vertexName)) {
               continue;
             }
             const distFromStart = distance[current] + neighbors[vertexName];
   
             if (distFromStart < distance[vertexName]) {
               pq.enqueue(vertexName, distFromStart);
               distance[vertexName] = distFromStart;
               previous[vertexName] = current;
             }
           }
           visited[current] = true;
         }
   
         let node = end;
   
         const route = [];
         while (node) {
           route.unshift(node);
           node = previous[node];
         }
   
         return route;
       },
     };
   
     this.addEdge = (source, target, weight) => {
       WeightedGraph.addEdge(source, target, weight);
     };
   
     this.findShortestPath = (source, target) => {
       return WeightedGraph.findShortestRoute(source, target);
     };
   
     this.addVertex = (vertex) => {
       WeightedGraph.addVertex(vertex);
     };
   
     WeightedGraph.init();
   }
   
   ```

6. 
7. 