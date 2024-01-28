import Snake from "./Snake";
/** A class that represents a point */
class Point {
  /** Attributes for the x and y coordinates */
  private xcoord: number;
  private ycoord: number;
  /** A constructor for the points */
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  /** Getters for the x coordinates
   * @return The x coordinate
   */
  get x() {
    return this.xcoord;
  }
  /** Getters for the y coordinates
   * @return The y coordinate
   */
  get y() {
    return this.ycoord;
  }
}

export default Point;
