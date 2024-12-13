import { useState } from "react";
import Main from "../layout/Main";

function CharacterCounter() {
  const [character, setCharacter] = useState("");

  const handleInput = (e) => {
    setCharacter(e.target.value);
  };

  const slugify = (text) => {
    return text
      .toLowerCase() // Converts the text to lowercase
      .trim() // Trims any spaces at the beginning and end
      .replace(/[^a-z0-9]+/g, "-") // Replaces non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Removes leading or trailing hyphens
  };

  return (
    <Main>
      <div className="flex flex-col items-center mt-10">
        <textarea
          type="text"
          value={character}
          onChange={handleInput}
          placeholder="Start typing..."
          className="border border-gray-300 rounded-lg shadow-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
        />
        {character.length > 0 && (
          <>
            <p className="mt-4 text-gray-700">
              Total characters count is: {character.length}
            </p>
            <p className="mt-2 text-gray-500">
              Slugified: <span className="font-mono">{slugify(character)}</span>
            </p>
          </>
        )}
      </div>
    </Main>
  );
}

export default CharacterCounter;
