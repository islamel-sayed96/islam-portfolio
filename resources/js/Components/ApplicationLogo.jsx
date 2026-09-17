export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg
                viewBox="0 0 40 40"
                className="h-full w-auto shrink-0"
                aria-hidden="true"
            >
                <rect width="40" height="40" rx="11" fill="#6d28d9" />
                <path
                    d="M15 13l-7 7 7 7M25 13l7 7-7 7"
                    stroke="#f5f3ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
            <span className="text-xl font-bold leading-none text-brand-700 dark:text-brand-300">
                إسلام سيد
            </span>
        </div>
    );
}
