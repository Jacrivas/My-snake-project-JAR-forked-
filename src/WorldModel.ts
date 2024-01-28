import Snake from "./Snake";

/** Class representing the world model */
class WorldModel {
  /** Private Attributes calling the Snake Class */
  private _snake: Snake;
  /** Constructor: Creates a default snake
   * @param snake - The snake
   */
  constructor(snake: Snake) {
    this._snake = snake;
  }
  /** Method that can be called to update the position of the snake
   * @param steps - The number of steps to move
   */
  public update(steps: number) {
    this._snake.move(steps);
  }
  /** Method that can be called to get the current position of the snake
   * @return The current position
   */
  getSnake() {
    return this._snake;
  }
}

export default WorldModel;
