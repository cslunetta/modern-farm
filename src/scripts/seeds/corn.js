const seedData = [
  {
    type: "Corn",
    height: 180,
    output: 6,
  },
  {
    type: "Corn",
    height: 180,
    output: 6,
  },
];

export const createCorn = () => {
  return seedData.slice();
};
