import display from "./display";
//import Quacker from "./Quacker";
// import IQuacker from "./IQuacker";

class Quacker {
  private QuackerType: number;
  constructor(QuackerType: number) {
    this.QuackerType = QuackerType;
  }
  public makeNoise() {
    if (this.QuackerType === 0) display("This Duck Half Quacked");
    else if (this.QuackerType === 1) display("This Duck Quacked");
    else if (this.QuackerType === 2) display("This Duck Quacked Twice");
  }
}

class Duck {
  public totalQuacks: number;
  public colorDuck: string;

  private qua: Quacker;

  constructor(duckColor: string, q: Quacker) {
    this.totalQuacks = 0;
    this.colorDuck = duckColor;
    //this.qua = new Quacker(Math.floor(3 * Math.random()));
    this.qua = q;
  }
  public quack() {
    this.qua.makeNoise();
    this.totalQuacks++;
  }
  public get QuacksCount() {
    return this.totalQuacks;
  }
  public set QuacksCount(newTotalQuacks: number) {
    if (newTotalQuacks >= 0) {
      this.totalQuacks = newTotalQuacks;
    } else {
      display("Disregarding attempt to set quacks to negative number");
    }
  }
  set quacke(q: Quacker) {
    this.qua = q;
  }
}
// place your code on line 5 above the export statement below

export default Duck;
