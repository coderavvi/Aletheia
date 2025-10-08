const Button = ({ children, onClick }) => {
  return (
    <div
      className="bg-[#167d86] text-white font-semibold text-2xl py-3 px-8 rounded-md text-center shadow-md min-w-[400px] md:min-w-[600px] lg:min-w-[800px] hover:bg-[#116168] cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
