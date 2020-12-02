console.log("Welcome to the main module");

// Create plan generates random seeds to plant
import { createPlan } from "./plan.js";
// import { createCorn } from "./seeds/corn.js";
// import { createSunflower } from "./seeds/Sunflower.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";

// Yearly Plan Test
console.log(createPlan());

// corn object test
// const cornSeed = createCorn();
// console.log(cornSeed);

// sunflower object test
// const sunflowerSeed = createSunflower();
// console.log(sunflowerSeed);

// field.js
plantSeeds(createPlan())
console.log(usePlants())