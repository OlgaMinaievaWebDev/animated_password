import { useState } from "react";
import { FaClipboard, FaCheck } from "react-icons/fa";
import Main from "../layout/Main";

function CopyToClipboard() {
  const [input, setInput] = useState("");
  const [tooltipText, setTooltipText] = useState("Copy");
  const [icon, setIcon] = useState(<FaClipboard />);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleCopy = (e) => {
    if (input.trim()) {
      navigator.clipboard.writeText(input).then(() => {
        setTooltipText("Copied");
        setIcon(<FaCheck />);
        setInput("");
      });
      //reset in 3 sec
      setTimeout(() => {
        setTooltipText("Copy");
        setIcon(<FaClipboard />);
      }, 3000);
    }
  };

  return (
    <Main>
      <div className="relative flex w-80 mx-auto justify-center items-center mt-20 gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter some text"
          className="border border-gray-300 rounded-lg shadow-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button
          type="button"
          onClick={handleCopy}
          className="relative text-gray-500 hover:text-gray-700 p-2"
          onMouseEnter={() => setTooltipText(tooltipText)} // Retain tooltip state
          onMouseLeave={() => setTooltipText("Copy")} // Optional reset on hover out
          aria-label="Copy to clipboard"
        >
          {icon}
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-xs text-white bg-black rounded px-2 py-1">
            {tooltipText}
          </span>
        </button>
      </div>
    </Main>
  );
}

export default CopyToClipboard;
