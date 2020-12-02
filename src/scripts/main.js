console.log("Welcome to the main module");

// Create plan generates random seeds to plant
import { createPlan } from "./plan.js";

const yearlyPlan = createPlan();

// Yearly Plan Test
console.log(yearlyPlan);

import { createCorn } from "./seeds/corn.js";
import { createSunflower } from "./seeds/Sunflower.js";

// corn object test
const cornSeed = createCorn();
console.log(cornSeed);

// sunflower object test
const sunflowerSeed = createSunflower();
console.log(sunflowerSeed);

// field.js
import { addPlant, usePlants } from "./field.js";

addPlant(cornSeed);
addPlant(sunflowerSeed);

// outputs copy of what is in the growingInTheField array
const plants = usePlants();
console.log(plants);

import {plantSeeds} from "./tractor.js"

plantSeeds(yearlyPlan)

