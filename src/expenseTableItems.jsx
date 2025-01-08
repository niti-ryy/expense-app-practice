export const ExpenseTableItem = (props) => {
    const{deleteExpense}=props
    console.log(props,"expensetableitem")
    const handleClick=()=>{
        deleteExpense(props.id)
    }
    return (
        <tr>
            {/* Map through the keys to display values */}
            {Object.keys(props).filter(key => key !== 'id' && key !== 'notes').map(key => (
                <td key={key}>{props[key]}</td>
            ))}
            <td>
                <button>Edit</button>
                <button onClick={handleClick}>Delete</button>
            </td>
        </tr>
    )
}