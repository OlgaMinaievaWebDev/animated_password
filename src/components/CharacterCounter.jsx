import { useState } from "react";
import Main from "../layout/Main";
function CharacterCounter() {
  const [character, setCharacter] = useState("");

  const handleInput = (e) => {
    setCharacter(e.target.value);
  };
  return (
    <Main>
      <div>
        <textarea
          type="text"
          value={character}
          onChange={handleInput}
          placeholder="Start typing..."
        />
        {character.length <= 0 ? (
          ""
        ) : (
          <p>Total characters count is : {character.length}</p>
        )}
      </div>
    </Main>
  );
}

export default CharacterCounter;
