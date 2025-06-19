const GlowDivider = () => {
  return (
    <div className="w-full flex items-center justify-center my-10">
      <div className="relative w-2/3 h-1 rounded-full bg-gradient-to-r from-red-500 to-green-500 shadow-[0_0_15px_3px_rgba(255,0,0,0.4),0_0_15px_3px_rgba(0,255,0,0.4)] overflow-hidden">
        <div className="absolute inset-0 animate-glow-gradient bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,0,0,0.3)_25%,rgba(0,255,0,0.3)_75%,rgba(0,0,0,0)_100%)]" />
      </div>
    </div>
  );
};

export default GlowDivider;
