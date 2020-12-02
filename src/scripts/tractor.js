import { createAsparagus } from "./seeds/Asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
export const plantSeeds = (plantingPlan) => {
  for (const row of plantingPlan) {
    for (const plant of row) {
      const plantType = plant;
      if (plantType === "asparagus") { // Look at this with fresh eyes
        const asparagus = createAsparagus();
        return asparagus
      }
      // console.log(plantType);

      // this works to pull out each indiviadual plant type
    } // Need to use plantType to call "seed"type for the seed info
  }
};

// Example growing plan. Actual plan is bigger.
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]
// As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module.
// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module. Then use console.log() to see if the plants array has been populated correctly.
