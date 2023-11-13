import Signup from "./signup";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/signup" element={<Signup />} />
				</Routes>
			</Router>
			<Signup />
		</div>
	);
}

export default App;
