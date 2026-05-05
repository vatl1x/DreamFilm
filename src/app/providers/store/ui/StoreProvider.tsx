import { Provider } from "react-redux";
import store, { persistor } from "../config/appStore";
import { PersistGate } from "redux-persist/integration/react";

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
