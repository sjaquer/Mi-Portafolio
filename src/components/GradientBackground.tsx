export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-zinc-950">
      {/* Soft, rich glowing 3D ambient orbs without any grids or dots */}
      <div className="absolute -top-[15%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/[0.04] blur-[140px]" />
      <div className="absolute top-[35%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-teal-500/[0.03] blur-[150px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[55vw] h-[55vw] rounded-full bg-emerald-600/[0.025] blur-[160px]" />
    </div>
  );
};
