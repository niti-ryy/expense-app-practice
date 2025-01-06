
import AddCategory from "./addCategory";
import { useEffect, useState } from "react";
import ListingCategory from "./listingCategory";
import { AddExpense } from "./addExpense";

function App() {
  const [categories, setCategories] = useState([])

  //initial category call to get all to be replaced by api
  useEffect(() => {
    try {
      const result = localStorage.getItem("categories")
      // Parse only if there's data
      if (result) {
        const parsedCategories = JSON.parse(result)
        setCategories(parsedCategories)
      }
    } catch (error) {
      console.error("Error loading categories from localStorage:", error)
      // If there's an error parsing, reset localStorage
      localStorage.setItem("categories", JSON.stringify([]))
    }
  }, [])


  //adding category
  const addCategory = (category) => {
    try {
      //api call to be done here
      const updatedCategories = [...categories, category]
      setCategories(updatedCategories)
      // Make sure we're storing a valid JSON string
      localStorage.setItem("categories", JSON.stringify(updatedCategories))
    } catch (error) {
      console.error("Error saving category:", error)
    }
  }

//removing category
const removeCategory=(id)=>{
  const confirm= window.confirm("Are you sure you want to delete this category")
  try{
    if(confirm){
      const result=categories.filter(ele=> ele.id !==id)
      setCategories(result) //state change
    }
  //api call to be done here
  }catch(e){
    console.log(e.message)
  }
}

//update Category
const updateCategory=(data)=>{
  const result= categories.map((ele)=>{
    return ele.id===data.id ? {...ele,...data} :{...ele}
  })
  setCategories(result)
}

  return (
    <>
      <h1>Expense App</h1>
      <AddCategory addCategory={addCategory}/>
      {
        categories.length==0 ? (
          <div>
            <p>No categories found add your first category</p>
          </div>
        ) : <ListingCategory categories={categories} removeCategory={removeCategory} updateCategory={updateCategory}/>
      }
      <AddExpense categories={categories}/>
      
    </>
  )
}

export default App