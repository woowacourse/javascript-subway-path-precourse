import { SubwayDistancePath, SubwayTimePath } from './models.js';
import { initListener } from './controllers.js';

export default function SubwayPath() {
  this.distancePath = new SubwayDistancePath();
  this.timePath = new SubwayTimePath();
  this.stationList = this.distancePath.stations;
}

const subwayPath = new SubwayPath();
initListener(subwayPath);
