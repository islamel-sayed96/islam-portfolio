import { motion } from 'framer-motion';
import { CheckCircle2, Mail } from 'lucide-react';
import { instructorApplication, profile } from '@/Data/portfolio';

export default function InstructorApplication() {
    return (
        <section className="bg-gray-50 py-24 dark:bg-gray-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-12"
                >
                    <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                        {instructorApplication.heading}
                    </h2>

                    <p className="mt-6 text-center leading-relaxed text-gray-600 dark:text-gray-300">
                        {instructorApplication.description}
                    </p>

                    <div className="mt-4 text-center">
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-300"
                        >
                            <Mail size={18} />
                            {profile.email}
                        </a>
                    </div>

                    <p className="mt-8 text-center font-semibold text-gray-900 dark:text-white">
                        قم بإرسال
                    </p>

                    <ul className="mx-auto mt-4 max-w-md space-y-3">
                        {instructorApplication.requirements.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                            >
                                <CheckCircle2
                                    size={18}
                                    className="shrink-0 text-brand-600 dark:text-brand-300"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
