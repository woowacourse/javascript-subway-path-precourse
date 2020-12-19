import { stationNodes } from "../components/baseData/stationNodes.js"
import { text } from "../components/text/text.js"

export const calculateDistance = (resultPath) => {
    const checkLength = resultPath.length - 1;
    let totalDistance = 0;

    for (let index = 0; index < checkLength; index++) {
        totalDistance = addDistance(stationNodes, resultPath, index, totalDistance);
    }

    return totalDistance;
};

export const calculateTime = (resultPath) => {
    const checkLength = resultPath.length - 1;
    let totalTime = 0;

    for (let index = 0; index < checkLength; index++) {
        totalTime = addtime(stationNodes, resultPath, index, totalTime);
    }

    return totalTime;
};


const addDistance = (stationNodes, resultPath, index, totalDistance) => {
    for (const stationNode of stationNodes) {
        if (stationNode.startStation === resultPath[index] &&
            stationNode.endStation === resultPath[index + 1]) {
            return totalDistance += stationNode.selection[text.DISTANCE];
        }

        if (stationNode.startStation === resultPath[index + 1] &&
            stationNode.endStation === resultPath[index]) {
            return totalDistance += stationNode.selection[text.DISTANCE];
        }
    }
};

const addtime = (stationNodes, resultPath, index, totalTime) => {
    for (const stationNode of stationNodes) {
        if (stationNode.startStation === resultPath[index] &&
            stationNode.endStation === resultPath[index + 1]) {
            return totalTime += stationNode.selection[text.TIME];
        }

        if (stationNode.startStation === resultPath[index + 1] &&
            stationNode.endStation === resultPath[index]) {
            return totalTime += stationNode.selection[text.TIME];
        }
    }
};