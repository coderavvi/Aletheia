const Card = ({ children }) => {
  return (
    <div className="p-8 border-[1px] border-[#167d86] rounded-md shadow-md flex-1">
      {children}
    </div>
  );
};

export default Card;
