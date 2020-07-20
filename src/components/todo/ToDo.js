import React, { Component } from "react";
import { connect } from "react-redux";

// COMPS
import MainSection from "./main-section/MainSection";
import ItemsSection from "./items-section/ItemsSection";
import ToDoSection from "./todo-section/ToDoSection";
import { FetchCategories } from "../../redux/actions/CategoriesAction";

class ToDo extends Component {
  state = { isLoaded: false };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.categories.length)
      this.setState({
        isLoaded: true,
      });
  }

  UNSAFE_componentWillMount() {
    this.props.FetchCategories();
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <MainSection categories={this.props.categories} />
            <ItemsSection />
            <ToDoSection />
          </div>
        ) : (
          <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
            <h4 style={{ margin: "auto" }}>
              SERVER IS NOT REACHABLE!! :(
            </h4>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.Categories.categories,
});

export default connect(mapStateToProps, { FetchCategories })(ToDo);
