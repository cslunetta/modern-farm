import { createAsparagus } from "./seeds/Asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";
// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
let seed = "";

export const plantSeeds = (plantingPlan) => {
  for (let i = 0; i < plantingPlan.length; i++) {
    for (const plant of plantingPlan[i]) {
      switch (plant) {
        
        // As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
        case "Asparagus":
          seed = createAsparagus();
          break;
        
        case "Corn":
          seed = createCorn();
          break;
        
        case "Potato":
          seed = createPotato();
          break;
        
        case "Soybean":
          seed = createSoybean();
          break;
        
        case "Sunflower":
          seed = createSunflower();
          break;
        
        case "Wheat":
          seed = createWheat();
          break;
      }
      // Take that seed and add it to the array of plants in the field module.
      addPlant(seed)
      // this works to pull out each indiviadual plant type
    } // Need to use plantType to call "seed"type for the seed info
  }
};

// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module. Then use console.log() to see if the plants array has been populated correctly.
