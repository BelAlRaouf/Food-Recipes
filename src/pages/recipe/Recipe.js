import { useParams } from 'react-router-dom'
import {useTheme} from '../../hooks/useTheme'
import {projectFirestore} from '../../firebase/config'
import { useEffect, useState } from 'react'


// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const {mode} = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  //fetching data from firesote database using useEffect hook.
  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('Recipes').doc(id).get().then((doc)=>{
      if(doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }else{
        setIsPending(false)
        setError('Could not find the REcipes')
      }
    })

  }, [])
  return (
    <div className= {`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>ing</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}