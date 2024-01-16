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
    display("The", this.color, "snake moves", moves, "step(s)");
    if (this.currentDirection === 1) {
      this.currentPosition = this.currentPosition + moves;
    } else if (this.currentDirection === -1) {
      this.currentPosition = this.currentPosition - moves;
    }
  }
  turn() {
    if (this.currentDirection === 1) {
      display("The", this.color, "snake turns backwards");
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      display("The", this.color, "snake turns forwards");
      this.currentDirection = 1;
    }
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
