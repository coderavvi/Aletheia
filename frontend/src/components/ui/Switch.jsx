const Switch = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" text-[#20518a]  cursor-pointer lg:text-lg   hover:text-[#163960] "
    >
      {children}
    </div>
  );
};

export default Switch;
