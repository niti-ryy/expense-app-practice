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
    
    const handleChange=(e)=>{
        const{name,value}=e.target
        const result={...formData,[name]:value}
        setFormData(result)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return(
        <div>
            <h1>Add Expense </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" id="title" name="title" value={formData.title} onChange={handleChange}/><br/>
                <input type="number" placeholder="enter ammount" id="ammount" name="ammount" value={formData.ammount} onChange={handleChange}/><br/>
                <select onChange={handleChange} name="category" value={formData.category}>
                    <option value="select">select-category</option>
                    {
                        categories.map((ele,i)=>{
                            return(
                                <option key={i} value={ele.name}>{ele.name}</option>
                            )
                        })
                    }
                </select><br/>
                <input type="date" name="date" value={formData.date} onChange={handleChange} /><br/>
                <textarea  placeholder="enter notes" id="notes" name="notes" value={formData.notes} onChange={handleChange}/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

AddExpense.propTypes={
    categories:PropTypes.array.isRequired
}
