function SectionHeader({ children }) {
  return (
    <h2 className={`text-2xl relative z-10 font-bold mb-8 w-full`}>
      {children}
    </h2>
  );
}

export default SectionHeader;
