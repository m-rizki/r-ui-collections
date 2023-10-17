import { useState } from "react";

export default function DynamicInput() {
  const [inputFields, setInputFields] = useState([{ item: "0" }]);

  /**
   *
   * @param {number} index
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const handleItemChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { item: "0" };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <form onSubmit={submit}>
      <div className="flex gap-8">
        <p>Items : </p>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <input
              type="number"
              className="border border-black rounded px-2 py-1"
            />
            <label htmlFor="total">Total Items</label>
          </div>
          <div className="flex flex-col gap-2">
            {inputFields.map((input, index) => {
              return (
                <div key={index} className="flex gap-4 justify-center items-center">
                  <label htmlFor="item">Item {index}</label>
                  <input
                    type="number"
                    name="item"
                    className="border border-black rounded px-2 py-1"
                    value={input.item}
                    onChange={(event) => handleItemChange(index, event)}
                  />
                  <button
                    type="button"
                    className="border border-black rounded cursor-pointer bg-slate-500 hover:bg-slate-700 px-10 text-sm text-white"
                    onClick={() => removeFields(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
            <div className="flex justify-center items-center gap-8">
              <button
                type="button"
                onClick={addFields}
                className="border border-black rounded cursor-pointer bg-slate-500 hover:bg-slate-700 px-10 text-sm text-white"
              >
                Add
              </button>
              <button
                className="border border-black rounded cursor-pointer bg-slate-500 hover:bg-slate-700 px-10 text-sm text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
