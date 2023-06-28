import { useState } from "react";
import { GlobalUseContext } from "./Context";

const ToggleButton: React.FC = () => {
  const { handleChange } = GlobalUseContext()
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked);
    handleChange()
  };

  return (
    <div
      className={`relative w-12 h-6 rounded-full bg-gray-300 flex items-center cursor-pointer ${
        isChecked ? "bg-green-500" : ""
      }`}
      onClick={handleClick}
    >
      <div
        className={`absolute left-1 transition-transform duration-300 ease-in-out w-4 h-4 rounded-full bg-white transform ${
          isChecked ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
