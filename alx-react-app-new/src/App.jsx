import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <h1>Welcome to My React App</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
