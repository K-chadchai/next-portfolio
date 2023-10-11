import React from "react";

export interface PropsTabButton {
  active: boolean;
  selectTab: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const TabButton = ({ active, selectTab, children }: PropsTabButton) => {
  const buttonClasses = active
    ? "text-white border-b border-primary-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
