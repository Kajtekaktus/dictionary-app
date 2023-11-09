
const Navbar = () => {
  return (
    <div className="flex justify-around w-full my-[20px]">
      <h1 className="logo text-4xl">Dictionary</h1>
      <div className="theme-switch w-[70px] rounded-[20px] bg-slate-600">
        <div className="dot rounded-[20px] bg-white w-[60%] h-[100%]"></div>
      </div>
    </div>
  );
};

export default Navbar;
