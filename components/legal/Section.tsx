export default function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-ink-950 dark:text-white">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-600 dark:text-ink-300">
        {children}
      </div>
    </section>
  );
}
