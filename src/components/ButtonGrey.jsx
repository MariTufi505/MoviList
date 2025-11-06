import React from 'react'

const ButtonGrey = ({children}) => {
  return (
    <button className="cursor-pointer bg-gray-300 rounded-2xl p-2 w-25 m-2 text-black">
      {children}
    </button>
  );
}

export default ButtonGrey