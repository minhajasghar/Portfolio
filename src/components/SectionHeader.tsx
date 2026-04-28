interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-zinc-400 max-w-2xl text-lg">{subtitle}</p>}
      <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
    </div>
  );
}
