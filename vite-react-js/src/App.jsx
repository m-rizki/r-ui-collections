import ComboBox from "./components/combo-box/combo-box";
import DynamicInput from "./components/dynamic-input/dynamic-input";

function App() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Rizki UI Collections</h1>
      <hr className="mb-4 h-1 bg-black" />
      <section className="mt-10">
        <h2 className="text-xl font-bold underline">Combo Box</h2>
        <br />
        <ComboBox />
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold underline">Multi Input</h2>
        <br />
        <DynamicInput />
      </section>
    </main>
  );
}

export default App;
