import Button from "./Button";
import { Color } from "../models/Color";

function App() {
  return (
    <>
      <Button size="lg" color={Color.Tertiary} bounce={true} icon={""} />
    </>
  );
}

export default App;
