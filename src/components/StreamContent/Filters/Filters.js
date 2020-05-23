import React, {Component} from "react"

import classes from "./Filters.css";
import FilterItem from "./FilterItem/FilterItem"

class Filters extends Component {
    componentDidUpdate(){
        console.log("[Filters] Will update")
    }

    render(){
        

        // const filterItems = Object.keys(this.props.filters)
        // .map(filterKey => {
        //     return (
        //         <FilterItem
        //         key={filterKey}
        //         filterType="Announcement">{this.props.filters[filterKey]}</FilterItem>
        //     )
        // })
        return(
            <div className={classes.Filters}>
           <FilterItem 
                filterType="Subject">Art</FilterItem>
                </div>
        )
    }
}


export default Filters