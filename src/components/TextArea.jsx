import React, { useState } from "react";
import Main from "../layout/Main";

function ResizableTextarea() {
  const [value, setValue] = useState("");

  return (
    <Main>
      <div>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 w-full resize rounded"
          placeholder="Type something..."
        />
      </div>
    </Main>
  );
}

export default ResizableTextarea;
