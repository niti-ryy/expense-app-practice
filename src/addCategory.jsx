import { useState } from "react";
import PropTypes from "prop-types"
 
export default function AddCategory({addCategory}) {
  const [Category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  console.log(errors, "errors");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const runValidations = () => {
    const error = {};
    if (Category.length === 0) {
      error.category = "Category is required";
    }
    //after backend add if the category is already present

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = runValidations();
    if (result) {
      setErrors(result);
    }
    const categoryObj = { id: Date.now(), name: Category };
    console.log(categoryObj);
    addCategory(categoryObj)
    setCategory("")
    setErrors({})
    //if no errors then add the category to the backend and send it to the state and then add to backend
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Category"
          value={Category}
          name="Category"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
}

AddCategory.propTypes={
  addCategory:PropTypes.func.isRequired
}