import ComboBox from "./components/combo-box/combo-box";

function App() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Rizki UI Collections</h1>
      <hr className="mb-4 h-1 bg-black" />
      <section className="mt-4">
        <h2 className="text-xl font-bold">Combo Box</h2>
        <br />
        {/* FIXME: Change UI position for combo box options */}
        <ComboBox />
        <p>asdsa</p>
      </section>
    </main>
  );
}

export default App;
