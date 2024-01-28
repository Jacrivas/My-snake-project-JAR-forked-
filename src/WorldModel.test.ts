import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./Point";
/** WorldModel class tests */
describe("WorldModel class tests", () => {
  /** Variables used in the tests */
  let snake: Snake;
  let worldModel: WorldModel;

  beforeEach(() => {
    /** Variables used in the tests */
    snake = new Snake("Red");
    worldModel = new WorldModel(snake);
  });
  /** Tests to make sure that the initial position of the snake is correct */
  test("initial snake position in WorldModel", () => {
    expect(worldModel.getSnake().position.x).toBe(0);
    expect(worldModel.getSnake().position.y).toBe(0);
  });
  /** Tests to make sure that the update method moves the snake */
  test("update moves snake correctly", () => {
    worldModel.update(1);
    expect(worldModel.getSnake().position.x).toBe(1);
    expect(worldModel.getSnake().position.y).toBe(0);
  });
  /** Tests to make sure that the update method turns the snake */
  test("turning and moving snake in WorldModel", () => {
    worldModel.getSnake().turnRight(); // Snake now faces down
    worldModel.update(1);
    expect(worldModel.getSnake().position.x).toBe(0);
    expect(worldModel.getSnake().position.y).toBe(-1);
    /** Tests to make sure that the update method turns the snake */
    worldModel.getSnake().turnLeft(); // Snake now faces right
    worldModel.update(2);
    worldModel.update(2);

    expect(worldModel.getSnake().position.x).toBe(2);
    expect(worldModel.getSnake().position.y).toBe(-1);
  });
  /** Tests to make sure that the update method moves the snake and also to see how the turn method works */
  test("multiple updates affect snake position correctly", () => {
    worldModel.update(1); // Move right
    worldModel.getSnake().turnRight(); // Now facing down
    worldModel.update(1); // Move down
    worldModel.update(1);
    expect(worldModel.getSnake().position.x).toBe(1);
    expect(worldModel.getSnake().position.y).toBe(-2);
  });
});

export {};
