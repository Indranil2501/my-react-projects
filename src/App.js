import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import MainContainer from "./main/main-container";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<MainContainer />} persistor={persistor}>
        <CookiesProvider>
          <MainContainer />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
