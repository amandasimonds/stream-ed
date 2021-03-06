import React, { Component } from "react";

import FilterItem from "./FilterItem";

class Filters extends Component {
  componentDidUpdate() {
    console.log("[Filters] Will update");
  }

  render() {
    return this.props.filters.map((filter, key) => {
      return (
        <div key={key}>
          <FilterItem filterType={filter.type}>{filter.text}</FilterItem>
        </div>
      );
    });

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

export default Filters;
