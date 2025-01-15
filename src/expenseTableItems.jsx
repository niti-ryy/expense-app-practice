// Import necessary dependencies
import { useState } from "react"                // Importing useState hook from React
import PropTypes from "prop-types"              // Importing PropTypes for type checking

// Component definition
export const ExpenseTableItem = (props) => {    // Component that takes props as parameter
    // Destructuring props
    const { deleteExpense, id, ...rest } = props    
    // - deleteExpense: function extracted from props
    // - id: id extracted from props
    // - ...rest: all other remaining props stored in 'rest' object

    // State declaration
    const [isEditing, setIsEditing] = useState(false)  
    // - Creates a boolean state variable 'isEditing'
    // - setIsEditing is the function to update this state
    // - Initially set to false

    // Handler functions
    const handleDelete = () => {                // Delete handler function
        deleteExpense(id)                       // Calls deleteExpense function with id
    }

    const handleEdit = () => {                  // Edit handler function
        setIsEditing(!isEditing)               // Toggles isEditing state
        console.log(rest)                      // Logs the remaining props
    }

    // Component render
    return (
        <tr>                                    
            {Object.entries(rest)               // Convert rest object to array of [key, value] pairs
                .filter(([key]) => key !== 'notes')  // Filter out the 'notes' key
                .map(([key, value]) => (             // Map through remaining entries
                    <td key={key}>{value}</td>       // Create table cell for each value
                ))
            }
            <td style={{ display: 'flex', gap: '8px' }}>  
                <button 
                    onClick={handleEdit}              // Attach edit handler
                    style={{                          // Button styling
                        padding: '4px 8px', 
                        background: '#4CAF50',        // Green background
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px' 
                    }}
                >
                    Edit
                </button>
                <button 
                    onClick={handleDelete}            // Attach delete handler
                    style={{                          // Button styling
                        padding: '4px 8px', 
                        background: '#f44336',        // Red background
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px' 
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

// PropTypes definition for type checking
ExpenseTableItem.propTypes = {
    id: PropTypes.oneOfType([                  // id can be either string or number
        PropTypes.string, 
        PropTypes.number
    ]).isRequired,                             // id is required
    deleteExpense: PropTypes.func.isRequired   // deleteExpense must be a function and is required
}