    import  { useState } from "react"
    import PropTypes from "prop-types"
    import { AddExpenseCushion } from "./addExpense"
    import { editExpense } from "./editExpense"

    export const ExpenseForm = ({categories, addExpense}) => {

        const [formData,setFormData] =useState({
            title:"",
            ammount:"",
            date:"",
            notes:"",
            category:"",
            id:Date.now()
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

        const handleSubmit = (e) => {
            e.preventDefault()
            
            const result = runValidations()
            
            // if (Object.keys(result).length > 0) {
            //     setErros(result)
            //     return  // Stop execution if there are errors
            // }
            console.log(formData)
            // Only proceed if no validation errors
            addExpense(formData)
            // Reset form after successful submission
            setFormData({
                title: "",
                ammount: "", 
                date: "",
                notes: "",
                category: "",
                id: Date.now()
            })
            // Clear any existing errors
            setErros({})
        }
    
        return (
            <div>
                <AddExpenseCushion/>
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
                            name="ammount" 
                            value={formData.ammount} 
                            onChange={handleChange}
                        />
                        {errors.ammount && <span style={{ color: 'red' }}>{errors.ammount}</span>}
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
    

    ExpenseForm.propTypes={
        categories:PropTypes.array.isRequired,
        addExpense:PropTypes.func.isRequired
        
    }
