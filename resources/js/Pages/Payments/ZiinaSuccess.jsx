import { Head, Link } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';

export default function ZiinaSuccess({ intent }) {
    return (
        <>
            <Head title="نتيجة الدفع" />

            <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
                <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-gray-900">
                    <CheckCircle2 className="mx-auto text-brand-600 dark:text-brand-300" size={48} />

                    <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                        نتيجة عملية الدفع التجريبية
                    </h1>

                    <div className="mt-6 rounded-xl bg-gray-50 p-4 text-right text-sm dark:bg-gray-800">
                        <pre className="overflow-x-auto whitespace-pre-wrap break-all text-gray-700 dark:text-gray-300">
                            {JSON.stringify(intent, null, 2)}
                        </pre>
                    </div>

                    <Link
                        href="/"
                        className="mt-8 inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500"
                    >
                        الرجوع للرئيسية
                    </Link>
                </div>
            </div>
        </>
    );
}
