export default function Section({ title, children }) {
    return (
        <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
            </h2>
            <div className="mt-3 space-y-3 leading-relaxed text-gray-600 dark:text-gray-300">
                {children}
            </div>
        </section>
    );
}
