import React from "react";
import { Provider } from "react-redux";

// COMPS
import Layout from "../hoc/Layout";
import ToDo from "./todo/ToDo";
import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <ToDo></ToDo>
      </Layout>
    </Provider>
  );
};

export default App;
