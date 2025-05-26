import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, SetIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let nameComponent;
  if (!isEditing) {
    nameComponent = playerName;
  } else {
    nameComponent = (
      <input
        type="text"
        placeholder="type"
        onChange={(event) => setPlayerName(event.target.value.toUpperCase())}
      />
    );
  }

  return (
    <>
      <div
        className={`bg-green-200  px-3 py-1.5 flex ${
          !isActive ? "bg-green-200" : "bg-green-500"
        } `}
      >
        <div className=" font-bold mx-2 text-blue-700">{nameComponent}</div>
        <div className=" font-extrabold flex   mx-5 text-blue-700">
          {symbol}
        </div>
        <button
          onClick={() => SetIsEditing((exValue) => !exValue)}
          className=" bg-blue-500 hover:bg-blue-700 text-white px-1.5 rounded"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}
