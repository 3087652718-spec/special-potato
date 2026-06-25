type VisualPlaceholderProps = {
  label: string;
  className?: string;
  image?: string;
  showLabel?: boolean;
};

export default function VisualPlaceholder({ label, className = "", image, showLabel = true }: VisualPlaceholderProps) {
  return (
    <div
      className={`placeholder-surface group ${image ? "has-image" : ""} ${className}`}
      aria-label={label}
    >
      {image ? (
        <img
          src={image}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-smooth group-hover:scale-[1.035]"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      {showLabel ? (
        <div className="absolute left-6 bottom-6 z-10 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs tracking-wide text-white/78 backdrop-blur-xl">
          {label}
        </div>
      ) : null}
      <div className="absolute right-6 top-6 z-10 h-px w-16 bg-blue shadow-[0_0_20px_rgba(20,120,255,0.58)]" />
    </div>
  );
}
