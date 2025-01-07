import { ExpenseTableItem } from "./expenseTableItems"



export const ExpenseTable=({tempExpenseData,keys})=>{
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
                            return (<ExpenseTableItem {...ele} key={i}/>)
                        })
                    }
                </tbody>
            </table>
           
        </div>
    )
}