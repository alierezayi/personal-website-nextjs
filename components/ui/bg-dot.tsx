export default function BgDot() {
  return (
    <div
      className="h-screen w-full dark:bg-slate-950 bg-white  dark:bg-dot-white/[0.2]
       bg-dot-black/[0.2] relative flex items-center justify-center"
    >
      <div
        className="absolute pointer-events-none inset-0 flex
         items-center justify-center dark:bg-slate-950 bg-white
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      ></div>
    </div>
  );
}
