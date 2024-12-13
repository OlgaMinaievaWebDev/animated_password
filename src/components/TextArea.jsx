import React, { useState } from "react";

function ResizableTextarea() {
  const [value, setValue] = useState("");

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 w-full resize rounded"
        placeholder="Type something..."
      />
    </div>
  );
}

export default ResizableTextarea;
