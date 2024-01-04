import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Examples from "./components/Examples/Examples";

const App = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcept></CoreConcept>
        <Examples></Examples>
      </main>
    </div>
  );
};

export default App;
