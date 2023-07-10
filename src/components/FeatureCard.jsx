function FeatureCard({ title, icon, children }) {
  return (
    <div className="flex flex-col p-6 lg:p-8 rounded-lg bg-accent-dark/50 items-center text-center border-2 border-primary">
      <div className="text-6xl">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mt-4">{title}</h3>
      <p className="text-sm xl:text-lg mt-4">{children}</p>
    </div>
  );
}

export default FeatureCard;
