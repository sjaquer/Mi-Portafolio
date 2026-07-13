export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/[0.02] blur-[120px]" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-500/[0.02] blur-[150px]" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-emerald-500/[0.01] blur-[150px]" />
      <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[40px]"></div>
    </div>
  );
};
