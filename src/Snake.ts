import display from "./display";

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private color: string;
  constructor(snakeColor: string) {
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.color = snakeColor;
  }
  move(moves: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = this.currentPosition + moves;
    } else if (this.currentDirection === -1) {
      this.currentPosition = this.currentPosition - moves;
    }
  }
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
