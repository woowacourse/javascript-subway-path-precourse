const State = function () {
  this.state = {
    LINE2: ["교대", "2,3", "강남", "2,3", "역삼"],
    LINE3: ["교대", "3,2", "남부터미널", "6,5", "양재", "1,1", "매봉"],
    SINDANG: ["강남", "2,8", "양재", "10,3", "양재시민의숲"],
    orderBy: "distance",
    startStation: "",
    endStation: "",
  };
  this.setState = (key, value) = this.state[key] = value;
};

export const { state, setState };
