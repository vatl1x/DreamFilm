import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./providers/router";
import { StoreProvider } from "./providers/store";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider>
            <AppRouter />
        </StoreProvider>
    </StrictMode>,
);
