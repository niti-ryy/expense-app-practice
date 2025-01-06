export const ExpenseTableItem = (props) => {
    console.log(props)
    return (
        <tr>
            {/* Map through the keys to display values */}
            {Object.keys(props).filter(key => key !== 'id' && key !== 'notes').map(key => (
                <td key={key}>{props[key]}</td>
            ))}
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}