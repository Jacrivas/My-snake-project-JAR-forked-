import display from "./display";
import WorldModel from "./WorldModel";
import Point from "./Point";

/** Class representing the snake   */
class Snake {
  /** Private Attributes One being Directior(string) the other being its position (point) */
  private currentPosition: Point; // Calling a different class from Point.ts
  private currentDirection: string;
  private color: string;

  /** Constructor: Creates a default for both direction and position as well as color
   * @param snakeColor - The color of the snake
   */

  constructor(snakeColor: string) {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "Right";
    this.color = snakeColor;
  }

  /** First Method that can be called to allow the direction of the snake to turn left regardless of each position*/
  turnLeft() {
    if (this.currentDirection === "Up") {
      this.currentDirection = "Left";
    } else if (this.currentDirection === "Left") {
      this.currentDirection = "Down";
    } else if (this.currentDirection === "Down") {
      this.currentDirection = "Right";
    } else if (this.currentDirection === "Right") {
      this.currentDirection = "Up";
    }
  }
  /** A Method that can be called to allow the direction of the snake to turn Right regardless of each position*/

  turnRight() {
    if (this.currentDirection === "Up") {
      this.currentDirection = "Right";
    } else if (this.currentDirection === "Right") {
      this.currentDirection = "Down";
    } else if (this.currentDirection === "Down") {
      this.currentDirection = "Left";
    } else if (this.currentDirection === "Left") {
      this.currentDirection = "Up";
    }
  }
  /** A Method that can be called to allow the snake to move regardless of each direction
   * @param {number} moves
   * @return Updates the current position on the board
   */

  move(moves: number) {
    /** If the snake is facing up the snake will move up one y-coord */
    if (this.currentDirection === "Up") {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + 1,
      );
      /** If the snake is facing Down the snake will move down one y-coord */
    } else if (this.currentDirection === "Down") {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - 1,
      );
      /** If the snake is facing Left the snake will move left one x-coord */
    } else if (this.currentDirection === "Left") {
      this.currentPosition = new Point(
        this.currentPosition.x - 1,
        this.currentPosition.y,
      );
      /** If the snake is facing Right the snake will move right one x-coord */
    } else if (this.currentDirection === "Right") {
      this.currentPosition = new Point(
        this.currentPosition.x + 1,
        this.currentPosition.y,
      );
    }
  }
  /** A Method that can be called to get the current poistion of the snake
   * @return The current position
   */
  public get position() {
    return this.currentPosition;
  }

  /**
   * Was a method in order to change direction of the snake from up to down or vice versa but it is an outdated method
   *@deprecated
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }**/
}

export default Snake;
