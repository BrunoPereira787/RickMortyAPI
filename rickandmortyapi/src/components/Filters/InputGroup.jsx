import React from "react";

const InputGroup = ({ total, setInput, name }) => {
  console.log();
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setInput(e.target.value)}
        className="form-select"
        id={name}
      >
        <option defaultValue>Choose...</option>

        {[...Array(total).keys()].map((x) => {
          return (
            <option key={x + 1} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
