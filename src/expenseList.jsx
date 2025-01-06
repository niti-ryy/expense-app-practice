import { useEffect, useState } from "react"
import { ExpenseTable } from "./expenseTabl"

export const ExpenseList=({expenses})=>{
    console.log(expenses)
    const [tempExpenseData,setTempExpenseData]=useState(expenses || [])
    
    useEffect(()=>{
        setTempExpenseData(expenses)
    },[expenses])
    
    const keys = expenses.length > 0 ? 
    Object.keys(expenses[0]).filter(key => key !== 'id' && key!=="notes") : []
    
    console.log(expenses)
    return(
        <div>
            <h1>All Expenses -{expenses.length}</h1>
            {tempExpenseData.length > 0 ? (
                <ExpenseTable tempExpenseData={tempExpenseData} keys={keys}/>
            ) : (
                <p>No expenses to display</p>
            )}
            
        </div>
    )
}