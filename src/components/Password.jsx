import { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";
import Main from "../layout/Main";

function Password() {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  const handleToggle = () => {
    setIsPasswordShowing(!isPasswordShowing);
  };
  return (
    <Main>
      <div className="flex items-center gap-2 bg-gray-200 rounded-md shadow-md w-full max-w-md md:gap-4 md:p-2 mx-auto mt-3">
        <div className="flex items-center justify-center text-xl text-gray-700 p-2 rounded-md">
          {isPasswordShowing ? <CiUnlock /> : <CiLock />}
        </div>
        {isPasswordShowing ? (
          <input
            className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="password"
          />
        ) : (
          <input
            className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="password"
          />
        )}

        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center justify-center text-gray-600 hover:text-blue-500 p-2 rounded-md"
        >
          {isPasswordShowing ? (
            <RxEyeOpen className="text-xl" />
          ) : (
            <LuEyeClosed className="text-xl" />
          )}
        </button>
      </div>
    </Main>
  );
}

export default Password;
