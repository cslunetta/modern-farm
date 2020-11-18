console.log("Welcome to the main module");

// Create plan generates random seeds to plant
import { createPlan } from "./plan.js";

const yearlyPlan = createPlan();

console.log(yearlyPlan);

import { createCorn } from "./seeds/corn.js";

const cornSeed = createCorn();
console.log(cornSeed);
