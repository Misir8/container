import "reflect-metadata";
import { Container } from "../../src/index";
import { CoffeeMaker } from "./CoffeeMaker";

const coffeeMaker = Container.get(CoffeeMaker);
coffeeMaker.make();
