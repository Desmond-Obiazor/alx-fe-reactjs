import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import "./App.css";
import SearchBar from './components/SearchBar';


function App() {
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Add RecipeDetails route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
