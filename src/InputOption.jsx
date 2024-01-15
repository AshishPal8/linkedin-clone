function InputOption({ Icon, title, color }) {
  return (
    <div className="flex gap-2 items-center text-gray-500 hover:bg-[#e5e5e5] cursor-pointer p-2 mt-2 rounded">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
