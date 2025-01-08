import { ExpenseTableItem } from "./expenseTableItems"
import PropTypes from "prop-types"



export const ExpenseTable=({tempExpenseData,keys,deleteExpense})=>{
    console.log(tempExpenseData,keys)
    
    console.log(tempExpenseData)
    return(
        <div>
            <table border={"2px"}>
                <thead>
                    <tr>
                    {
                        keys.map(ele=> <th key={ele}>{ele}</th>)
                    }
                    <th>Actions</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        tempExpenseData.map((ele,i)=>{
                            return (<ExpenseTableItem {...ele} key={i} deleteExpense={deleteExpense}/>)
                        })
                    }
                </tbody>
            </table>
           
        </div>
    )
}

ExpenseTable.propTypes={
    tempExpenseData:PropTypes.array,
    keys:PropTypes.array
}