import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";

// biome-ignore lint/style/noNonNullAssertion: <there is always a root element>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Home />
	</StrictMode>,
);
