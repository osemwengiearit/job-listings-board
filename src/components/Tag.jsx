function Tag({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-terra-pale text-terra text-sm font-semibold px-3 py-1 rounded-md hover:bg-terra hover:text-white hover:scale-105 transition-all"
    >
      {text}
    </button>
  );
}

export default Tag;
