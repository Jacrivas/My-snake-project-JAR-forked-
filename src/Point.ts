import Snake from "./Snake";
/** A class that represents a point */
class Point {
  /** The x and coordinate of the point */
  private xcoord: number;
  private ycoord: number;
  /** A constructor for the points */
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  /** Getters for the x and y coordinates */
  get x() {
    return this.xcoord;
  }
  get y() {
    return this.ycoord;
  }
}

export default Point;
