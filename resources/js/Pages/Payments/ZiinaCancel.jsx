import { Head, Link } from '@inertiajs/react';
import { XCircle } from 'lucide-react';

export default function ZiinaCancel() {
    return (
        <>
            <Head title="تم إلغاء الدفع" />

            <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
                <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-gray-900">
                    <XCircle className="mx-auto text-gray-400" size={48} />

                    <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                        تم إلغاء عملية الدفع
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        لم يتم خصم أي مبلغ.
                    </p>

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
