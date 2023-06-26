import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <AppHeader />
      <AppMain className="grow mt-24" />
      <AppFooter />
    </div>
  );
}

export default App;
