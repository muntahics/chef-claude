export default function IngredientsList({ingredients,ingredientsListItems, getRecipe, ref}) {
    return (

        <>
        {ingredients.length > 0 ? (
                <section className='containner'>
                <div className='ingredients-with-container'>
                    <h2 className='on-hand'>Ingredients on hand:</h2>
                    <ul className='listed-ingredients'>{ingredientsListItems}</ul>
                </div>
                {ingredients.length > 3 ? (
                <div className="get-recipe-container">
                <div ref={ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
                </div>
                ):null} 
                </section>) : null
            }
        </>
    )
}