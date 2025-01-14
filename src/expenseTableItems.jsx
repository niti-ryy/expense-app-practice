// import { useState } from "react"

// export const ExpenseTableItem = (props) => {
//     const{deleteExpense}=props
//     console.log(props,"expensetableitem")
//     const handleClick=()=>{
//         deleteExpense(props.id)
//     }

//     const [toogle,setToggle]=useState(false)
//     const handleEditInfo=(info)=>{
//         console.log(info)
//     }

//     return (
//         <tr>
//             {/* Map through the keys to display values */}
//             {Object.keys(props).filter(key => key !== 'id' && key !== 'notes').map(key => (
//                 <td key={key}>{props[key]}</td>
//             ))
//             }
//             <td>
//                 <button onClick={()=>{handleEditInfo(...props)}}>Edit</button>
//                 <button onClick={handleClick}>Delete</button>
//             </td>
//         </tr>
//     )
// }

import { useState } from "react"
import PropTypes from "prop-types" // Added PropTypes

export const ExpenseTableItem = (props) => {
    const { deleteExpense, id, ...rest } = props // Destructure what we need
    const [isEditing, setIsEditing] = useState(false) // Renamed for clarity

    const handleDelete = () => {
        deleteExpense(id)
    }

    const handleEdit = () => {
        setIsEditing(!isEditing)
        console.log(rest) // Log the data without function props
    }

    return (
        <tr>
            {Object.entries(rest)
                .filter(([key]) => key !== 'notes')
                .map(([key, value]) => (
                    <td key={key}>{value}</td>
                ))
            }
            <td style={{ display: 'flex', gap: '8px' }}>
                <button 
                    onClick={handleEdit}
                    style={{ padding: '4px 8px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    Edit
                </button>
                <button 
                    onClick={handleDelete}
                    style={{ padding: '4px 8px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

ExpenseTableItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    deleteExpense: PropTypes.func.isRequired
}