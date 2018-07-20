import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AwesomeProject from "./src/AwesomeProject";
import AwesomeStore from "./src/redux/Store";

const { store, persistor } = AwesomeStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AwesomeProject />
    </PersistGate>
  </Provider>
);

export default App;
