import "./App.css";
import { useEffect } from "react";
import Display from "./Display";
import display from "./display";
import Car from "./Car";
import Duck from "./Duck";
import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    /*const redCar = new Car("red");
    const blueCar = new Car("blue");
    redCar.drive(40);
    blueCar.drive(35);
    redCar.drive(2);
    display("Red car drove a total of:", redCar.miles, "miles");
    display("Blue car drove a total of:", blueCar.miles, "miles");

    // **** Duck Class ****
    const duckone = new Duck("Red");
    const ducktwo = new Duck("Blue");
    duckone.quack(1);
    duckone.quack(3);
    ducktwo.quack(2);
    ducktwo.quack(4);
    display("The Red duck quacked a total of:", duckone.totalQuacks, "time(s)");
    display(
      "The Blue duck quacked a total of:",
      ducktwo.totalQuacks,
      "time(s)",
    );
    redCar.miles = 4;
    display("miles", redCar.miles);

    duckone.QuacksCount = 2;
    display("Quacks", duckone.QuacksCount);
    */

    const snake1 = new Snake("Red");
    const snake2 = new Snake("Blue");

    snake1.move(10);
    snake1.move(5);
    snake1.turn();
    snake1.move(18);
    snake1.move(2);
    snake1.turn();
    snake1.move(6);

    snake2.turn();
    snake2.move(5);
    snake2.move(5);
    snake2.turn();
    snake2.move(18);
    snake2.move(2);
    snake2.turn();
    snake2.move(6);

    display("The Red Snake", snake1.position, "position(s)");
    display("The Blue Snake", snake2.position, "position(s)");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
