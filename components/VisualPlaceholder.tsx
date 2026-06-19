type VisualPlaceholderProps = {
  label: string;
  className?: string;
  image?: string;
  showLabel?: boolean;
};

export default function VisualPlaceholder({ label, className = "", image, showLabel = true }: VisualPlaceholderProps) {
  const style = image ? { backgroundImage: `url(${image})` } : undefined;

  return (
    <div
      className={`placeholder-surface group ${image ? "has-image" : ""} ${className}`}
      style={style}
      aria-label={label}
    >
      <div className="absolute inset-0 bg-cover bg-center transition duration-700 ease-smooth group-hover:scale-[1.035]" style={style} />
      {showLabel ? (
        <div className="absolute left-6 bottom-6 z-10 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs tracking-wide text-white/78 backdrop-blur-xl">
          {label}
        </div>
      ) : null}
      <div className="absolute right-6 top-6 z-10 h-px w-16 bg-blue shadow-[0_0_20px_rgba(20,120,255,0.58)]" />
    </div>
  );
}
