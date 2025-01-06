
import PropTypes from 'prop-types'
import { useState } from 'react'
const CategoryItem=({name,id,removeCategory,updateCategory})=>{
    console.log(id)
    const [toggle,setToggle]=useState(false)
    const [namestate,setName] =useState(name || "")

    const handleclick=()=>{
        setToggle(!toggle)
    }

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    const handleUpdate=()=>{
        const confirm= window.confirm(`are you sure you want to update with ${namestate}`)
        if(confirm){
            const updatedValue={name:namestate,id:id}
            updateCategory(updatedValue)
            setToggle(false)
        }
         
    }

    return(
        <div>
            {
                toggle?(
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        console.log({id:id,name:namestate})}}>
                        <input type="text" value={namestate} name="name" onChange={handleChange}/>
                        <button onClick={handleclick}>cancel</button>
                        <button onClick={handleUpdate}>Update</button>
                    </form>
                ):(
                <div>
                    <p>{name}</p>
                    <button onClick={handleclick}>Edit</button>
                    <button onClick={()=>{removeCategory(id)}}>delete</button> 
                </div>
                    
                )
            }
            
        </div>
    )
}


CategoryItem.propTypes={
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([          // id can be either string or number
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    removeCategory: PropTypes.func.isRequired,
    updateCategory:PropTypes.func.isRequired
}

export default CategoryItem


// import PropTypes from 'prop-types'

// const CategoryItem = ({ name, id, removeCategory }) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <button>Edit</button>
//       <button onClick={() => removeCategory(id)}>delete</button>
//     </div>
//   )
// }

// // PropTypes definition
// CategoryItem.propTypes = {
//   name: PropTypes.string.isRequired,  // name must be a string and is required
//   id: PropTypes.oneOfType([          // id can be either string or number
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   removeCategory: PropTypes.func.isRequired  // removeCategory must be a function
// }

// // Optional: Add default props
// CategoryItem.defaultProps = {
//   name: '',         // Default values in case props aren't passed
//   id: '',
//   removeCategory: () => console.warn('removeCategory function not provided')
// }

// export default CategoryItem