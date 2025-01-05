import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types"

export default function listingCategory({categories,removeCategory}){

    return(
        <div>
            <h1>Categories-{categories.length}</h1>
            {
                categories.map((ele,i)=>{
                    return (<CategoryItem key={i} {...ele} removeCategory={removeCategory}/>)
                })
            }
        </div>
    )
}

listingCategory.propTypes={
    categories:PropTypes.array,
    removeCategory:PropTypes.func.isRequired 
}