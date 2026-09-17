import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function PortfolioFooter() {
    return (
        <footer className="border-t border-gray-100 bg-gray-50 py-10 dark:border-gray-800 dark:bg-gray-950">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
                    <ApplicationLogo className="h-8" />

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
                    </p>

                    <a
                        href="/#courses"
                        className="text-sm font-medium text-gray-600 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-300"
                    >
                        الدورات التدريبية
                    </a>
                </div>

                <div className="flex gap-5 border-t border-gray-100 pt-4 dark:border-gray-800">
                    <Link
                        href={route('terms')}
                        className="text-xs font-medium text-gray-400 hover:text-brand-600 dark:text-gray-500 dark:hover:text-brand-300"
                    >
                        الشروط والأحكام
                    </Link>
                    <Link
                        href={route('privacy')}
                        className="text-xs font-medium text-gray-400 hover:text-brand-600 dark:text-gray-500 dark:hover:text-brand-300"
                    >
                        سياسة الخصوصية
                    </Link>
                </div>
            </div>
        </footer>
    );
}
