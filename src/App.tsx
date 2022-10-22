import classes from "./App.module.scss";
import { Cv } from "./features/CvBlueprint/components/Cv";

function App() {
  return (
    <div className={classes.app}>
      <Cv />
    </div>
  );
}

export default App;
