
import PropTypes from 'prop-types'
const CategoryItem=({name,id,removeCategory})=>{


    return(
        <div>
            <p>{name}</p><button >Edit</button><button onClick={()=>{removeCategory(id)}}>delete</button> 
        </div>
    )
}


CategoryItem.propTypes={
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([          // id can be either string or number
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    removeCategory: PropTypes.func.isRequired 
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