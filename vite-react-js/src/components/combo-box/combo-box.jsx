import { useState } from "react";
import { seeds } from "./data/seeds";

export default function ComboBox() {
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-72 font-medium relative inline-block">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`bg-white w-full px-6 py-2 flex items-center justify-between rounded border border-black cursor-pointer ${
          !selected && "text-gray-500"
        }`}
      >
        <p>
          {selected
            ? selected?.label?.length > 25
              ? selected?.label?.substring(0, 25) + "..."
              : selected?.label
            : "Select country"}
        </p>
        <img
          src="/icons/chevron.svg"
          alt="chevron-icon"
          className={`w-4 h-4 ${open && "rotate-180"}`}
        />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto absolute z-50 w-72 ${
          open
            ? "max-h-60 border border-black rounded shadow-lg cursor-pointer"
            : "max-h-0"
        }`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <img
            src="/icons/search.svg"
            alt="search-icon"
            className="w-4 h-4 fill-gray-500"
          />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-500 p-2 outline-none"
          />
        </div>
        {seeds?.map((seed) => (
          <li
            key={seed?.value}
            // CHECKME: change logic if needed
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white cursor-pointer 
            ${
              seed?.label.toLowerCase() === selected?.label.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              seed?.label.toLowerCase().startsWith(searchValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                seed?.label?.toLowerCase() !== selected?.label.toLowerCase()
              ) {
                setSelected(seed);
                setOpen(false);
                setSearchValue("");
              }
            }}
          >
            {seed?.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
