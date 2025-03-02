import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...newRecipe }],
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
    searchTerm: '',
    setSearchTerm: (term) =>
      set((state) => {
        const filteredRecipes = state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase())
        );
        return { searchTerm: term, filteredRecipes };
      }),
    filteredRecipes: [],
    setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }), // Initialize both recipes & filteredRecipes
  }));
export default useRecipeStore