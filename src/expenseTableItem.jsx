export const ExpenseList=({expenses})=>{
    console.log(expenses)
    return(
        <div>
            <h1>All Expenses -{expenses.length}</h1>
        </div>
    )
}