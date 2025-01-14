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

// import { ExpenseTableItem } from "./expenseTableItems"
// import PropTypes from "prop-types"

// export const ExpenseTable = ({ tempExpenseData, keys, deleteExpense }) => {
//     return (
//         <div>
//             <table border="2">
//                 <thead>
//                     <tr>
//                         {keys.map(ele => <th key={ele}>{ele}</th>)}
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tempExpenseData.map((ele) => (
//                         <ExpenseTableItem 
//                             {...ele} 
//                             key={ele.id} // Using id instead of index for key
//                             deleteExpense={deleteExpense}
//                         />
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }


// ExpenseTable.propTypes = {
//     tempExpenseData: PropTypes.array.isRequired, // Added isRequired
//     keys: PropTypes.array.isRequired,
//     deleteExpense: PropTypes.func.isRequired // Added missing prop type
// }