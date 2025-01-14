import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Clock, Users } from 'lucide-react';
import { getRecipeById } from '../services/api';
import { DetailedRecipe } from '../types/recipe';

export default function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<DetailedRecipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (!id) return;
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        toast.error('Failed to fetch recipe details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <Clock className="h-5 w-5 mr-2" />
              <span className="mr-6">{recipe.readyInMinutes} mins</span>
              <Users className="h-5 w-5 mr-2" />
              <span>{recipe.servings} servings</span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id} className="text-gray-700">
                    {ingredient.original}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h2>
              <div
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}