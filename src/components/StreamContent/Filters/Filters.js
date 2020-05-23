import React, { Component } from "react"

import classes from "./Filters.css";
import FilterItem from "./FilterItem/FilterItem"

class Filters extends Component {
    componentDidUpdate() {
        console.log("[Filters] Will update")
    }

    render() {

        return this.props.filters.map((filter, index) => {

            return (
                <div className={classes.Filters}>
                    <FilterItem
                        filterType={filter.type}>
                            {filter.text}
                    </FilterItem>
                </div>
            )
        }
        )

        // const filterItems = Object.keys(this.props.filters)
        // .map(filterKey => {
        //     return (
        //         <FilterItem
        //         key={filterKey}
        //         filterType="Announcement">{this.props.filters[filterKey]}</FilterItem>
        //     )
        // })

    }
}


export default Filters