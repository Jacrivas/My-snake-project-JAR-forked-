import Snake from "./Snake";
import WorldModel from "./Snake";
import Point from "./Point";
import display from "./display";

describe("Snake class tests", () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake("Red");
  });
  /** Test case that tests */
  test("initial position is (0,0)", () => {
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(0);
  });
  /** Test case that tests the move method in the x axis */
  test("move right increases x", () => {
    snake.move(1); // Moves once in the x axis or to the right
    expect(snake.position.x).toBe(1);
    expect(snake.position.y).toBe(0);
  });
  /** Test case that tests the move method in the y axis */
  test("move left decreases x", () => {
    snake.turnLeft(); // Now facing 'Up'
    snake.move(1);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(1);
  });
  /** Test case that tests the move method in the y axis in order to test negative direction in the y axis */
  test("move down decreases y", () => {
    snake.turnRight(); // Now facing 'Down'
    snake.move(1);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(-1);
  });
  /** Test case that tests the move method in the x axis in order to test poisitive direction in the y numbers */
  test("move up increases y", () => {
    snake.turnLeft();
    snake.move(1);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(1);
  });
  /** Test case that tests to reinforce that turnLeft work */
  test("turn left changes direction correctly", () => {
    snake.turnLeft(); // Now facing 'up'
    snake.move(1);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(1);

    snake.turnLeft(); // Now facing 'left'
    snake.move(1);
    expect(snake.position.x).toBe(-1);
    expect(snake.position.y).toBe(1);

    snake.turnLeft(); // Now facing 'down'
    snake.move(1);
    expect(snake.position.x).toBe(-1);
    expect(snake.position.y).toBe(0);
  });
  /** Test case that tests to reinforce that turnRight works */
  test("turn right changes direction correctly", () => {
    snake.turnRight(); // Looking 'Down'
    snake.move(1);
    expect(snake.position.y).toBe(-1); // Looking 'Down'
    snake.turnRight(); // Looking 'Left'
    snake.move(1);
    expect(snake.position.x).toBe(-1); // Looking 'Left'
  });
});

export {};
