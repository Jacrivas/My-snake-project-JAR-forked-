import display from "./display";
// import IQuacker from "./IQuacker";
class Duck {
  public totalQuacks: number;
  public colorDuck: string;
  constructor(duckColor: string) {
    this.totalQuacks = 0;
    this.colorDuck = duckColor;
  }
  public quack(quacks: number) {
    display("The", this.colorDuck, "Duck Quacked");
    this.totalQuacks = this.totalQuacks + quacks;
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
}
// place your code on line 5 above the export statement below

export default Duck;
