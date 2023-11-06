import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [mealDetails, setMealDetails] = useState({});
    const [selectedMealId, setSelectedMealId] = useState(null); 


    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals || []);
    };
    const fetchMealDetails = async (mealId) => {
        if (!mealDetails[mealId]) { 
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            setMealDetails(prev => ({
                ...prev,
                [mealId]: data.meals[0] 
            }));
        }
    };
   

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient);
        }
    }, [ingredient]);

    useEffect(() => {
        meals.forEach(meal => {
            fetchMealDetails(meal.idMeal);
        });
    }, [meals]);

    const handleMealClick = (mealId) => {
        setSelectedMealId(mealId); 
    };

    return (
        <div className="max-w-sm ">
            <h2 className='text-3xl font-bold text-black'>Meal Ideas</h2>
            {meals.length === 0 ? (
                <p className='pt-2 font-bold text-black'>No meal ideas found for {ingredient}</p>
            ) : (
                <>
                    <p className='pt-2 pb-2 font-bold text-black'>Here are some meal ideas using {ingredient}:</p>
                    <ul className='mt-2 space-y-2'>
                        {meals.map(meal => (
                            <li key={meal.idMeal}>
                                <div className="rounded p-2 bg-blue-900 hover:bg-pink-900 cursor-pointer"
                                 onClick={() => handleMealClick(meal.idMeal)}> 
                                    {meal.strMeal}
                                    {selectedMealId === meal.idMeal && mealDetails[meal.idMeal] && (
                                        <ul className='pt-2'>
                                            {Object.keys(mealDetails[meal.idMeal])
                                                .filter(key => key.includes('strIngredient') && mealDetails[meal.idMeal][key])
                                                .map(key => (
                                                    <li key={key}>{mealDetails[meal.idMeal][key]}</li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default MealIdeas;