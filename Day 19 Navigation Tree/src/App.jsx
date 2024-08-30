import "./App.css";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import { sideMenu } from "./sideMenu";

function App() {
  return (
    <>
      <SideNavigation sideMenu={sideMenu} />
    </>
  );
}

export default App;
