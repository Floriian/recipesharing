export const ingredientsService = {
  //mocked
  getIngredients: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ingredients = [
          {
            name: "vaj",
            amount: "félkiló",
          },
          {
            name: "étolaj",
            amount: "2 liter",
          },
        ];
        resolve(ingredients);
      }, 2000); // Simulating an asynchronous delay of 2 seconds
    });
  },
};
