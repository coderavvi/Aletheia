import { FaRegNewspaper } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-[#163960] p-8">
      <div className="flex items-center gap-2">
        <FaRegNewspaper size={24} color="white" />
        <h2 className="text-white font-bold text-3xl">Aletheia</h2>
      </div>
    </header>
  );
};

export default Header;
