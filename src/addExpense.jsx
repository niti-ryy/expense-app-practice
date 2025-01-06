import React, { useState } from "react"
import PropTypes from "prop-types"

export const AddExpense=({categories})=>{

    const [formData,setFormData] =useState({
        title:"",
        ammount:undefined,
        date:undefined,
        notes:"",
        category:""
    })

    const [errors,setErros]=useState({})

    const runValidations=()=>{
        const error={}
        if(!formData.title.trim() || formData.title.length<4 || formData.title.length>20){
            error.title="Title must be between 4-20 characters"
        }
        // Amount validations
        if (!formData.amount || formData.amount <= 0) {
            error.amount = "Amount must be greater than 0"
        }

        // Date validation
        if (!formData.date) {
            error.date = "Date is required"
        }

        // Category validation
       
        if (!formData.category.trim()) {
            error.category = "Please select a category"
        }
        return error
    }
    
    const handleChange=(e)=>{
        const{name,value}=e.target
        const result={...formData,[name]:value}
        setFormData(result)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const result=runValidations()
        console.log(result)
        if(result){
            setErros(result)
        }
        console.log(formData)
    }
    // return(
    //     <div>
    //         <h1>Add Expense </h1>
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" placeholder="title" id="title" name="title" value={formData.title} onChange={handleChange}/><br/>
    //             {errors.title && <div><p><b>{errors.title}</b></p></div>}
    //             <input type="number" placeholder="enter ammount" id="ammount" name="ammount" value={formData.ammount} onChange={handleChange}/><br/>
    //             <select onChange={handleChange} name="category" value={formData.category}>
    //                 <option value="select">select-category</option>
    //                 {
    //                     categories.map((ele,i)=>{
    //                         return(
    //                             <option key={i} value={ele.name}>{ele.name}</option>
    //                         )
    //                     })
    //                 }
    //             </select><br/>
    //             <input type="date" name="date" value={formData.date} onChange={handleChange} /><br/>
    //             <textarea  placeholder="enter notes" id="notes" name="notes" value={formData.notes} onChange={handleChange}/><br/>
    //             <input type="submit"/>
    //         </form>
    //     </div>
    // )
    return (
        <div>
            <h1>Add Expense</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange}
                    />
                    {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                </div>
    
                <div>
                    <input 
                        type="number" 
                        placeholder="Enter amount" 
                        name="amount" 
                        value={formData.amount} 
                        onChange={handleChange}
                    />
                    {errors.amount && <span style={{ color: 'red' }}>{errors.amount}</span>}
                </div>
    
                <div>
                    <select 
                        name="category" 
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        {categories.map((ele, i) => (
                            <option key={i} value={ele.name}>
                                {ele.name}
                            </option>
                        ))}
                    </select>
                    {errors.category && <span style={{ color: 'red' }}>{errors.category}</span>}
                </div>
    
                <div>
                    <input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange}
                    />
                    {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
                </div>
    
                <div>
                    <textarea 
                        placeholder="Enter notes" 
                        name="notes" 
                        value={formData.notes}
                        onChange={handleChange}
                    />
                    {errors.notes && <span style={{ color: 'red' }}>{errors.notes}</span>}
                </div>
    
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}

AddExpense.propTypes={
    categories:PropTypes.array.isRequired
}
