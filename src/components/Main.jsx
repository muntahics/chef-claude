import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromGemini } from '../ai'

export default function Main() {
    // function handleClick(){
    //     alert('alertss')
    // }
    const [ingredients, setIngredients] = React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"])
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const [recipe, setRecipe] = React.useState(``)
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromGemini(ingredients)
        setRecipe(recipeMarkdown)
    } 

    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        recipeSection.current.scrollIntoView({behavior: "smooth"})
    },[recipe])

    // console.log(ingredients)
    function addIngredient(formData) {
        
        
        const newIngredient = formData.get("ingredient")
        // ingredients.push(newIngredient)
        // alert(ingredients.join(", "))
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient] )
            

    }
    
    return (
        <main>
            
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    // onMouseOver={handleClick}
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button >Add ingredient</button>
            </form>
            
            <IngredientsList
                ingredients={ingredients}
                ingredientsListItems={ingredientsListItems}
                getRecipe={getRecipe}
                ref={recipeSection}
            />
            {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
            
            
        </main>
    )
}