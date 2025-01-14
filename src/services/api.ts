import axios from 'axios';
import { Recipe, DetailedRecipe } from '../types/recipe';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const searchRecipes = async (query: string = '', tags: string = ''): Promise<Recipe[]> => {
  try {
    const response = await api.get('/complexSearch', {
      params: {
        query,
        tags,
        addRecipeInformation: true,
        number: 12,
      },
    });
    return response.data.results;
  } catch (error) {
    // Safe error logging that avoids cloning issues
    if (error instanceof Error) {
      console.error('Error fetching recipes:', error.message);
    } else {
      console.error('An unknown error occurred while fetching recipes');
    }
    throw new Error('Failed to fetch recipes');
  }
};

export const getRecipeById = async (id: string): Promise<DetailedRecipe> => {
  try {
    const response = await api.get(`/${id}/information`);
    return response.data;
  } catch (error) {
    // Safe error logging that avoids cloning issues
    if (error instanceof Error) {
      console.error('Error fetching recipe details:', error.message);
    } else {
      console.error('An unknown error occurred while fetching recipe details');
    }
    throw new Error('Failed to fetch recipe details');
  }
};