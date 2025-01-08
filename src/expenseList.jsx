import { useEffect, useState } from "react"
import { ExpenseTable } from "./expenseTabl"

export const ExpenseList=({expenses,deleteExpense})=>{
    console.log(expenses)
    const [tempExpenseData,setTempExpenseData]=useState(expenses || [])
    // const [filterState,setFilterState]=useState("")

    useEffect(()=>{
        setTempExpenseData(expenses)
    },[expenses])
    
    const keys = expenses.length > 0 ? 
    Object.keys(expenses[0]).filter(key => key !== 'id' && key!=="notes") : []

    // const handleChange=(e)=>{
    //     setFilterState(e.target.value)
    //     // const result=expenses.filter((ele)=>{
    //     //     return(ele.category===e.target.value)
    //     // })
    //     // setTempExpenseData(result)
    // }
    
    console.log(expenses)
    return(
        <div>
            <h1>All Expenses -{expenses.length}</h1>
            {/* <select value={filterState} onChange={handleChange} name="sortBy">
                <option value=""><b>filterby</b></option>
                {
                    keys.map((ele,i)=>{
                        return (<option value={ele} key={i}>{ele}</option>)
                    })
                }
            </select> */}
            {tempExpenseData.length > 0 ? (
                <ExpenseTable tempExpenseData={tempExpenseData} keys={keys} deleteExpense={deleteExpense}/>
            ) : (
                <p>No expenses to display</p>
            )}
            
        </div>
    )
}