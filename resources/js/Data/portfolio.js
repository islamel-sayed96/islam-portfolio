// كل محتوى صفحة البورتفوليو الشخصية في مكان واحد — عدّل هنا بدل ما تدور
// جوه الكومبوننتس. غيّر اسمك وصورتك وروابطك وخبراتك من هنا.

export const profile = {
    name: 'إسلام سيد',
    roles: [
        'مطوّر Front-End',
        'مطوّر Back-End',
        'مصمم UI/UX',
        'متخصص تسويق رقمي و SEO',
        'مصمم مواقع',
        'خبير تجارة إلكترونية',
    ],
    bio: 'بصمم وبطوّر منتجات ويب متكاملة من الفكرة للإطلاق — واجهات سريعة وواضحة، باك إند قوي وآمن، وتجربة استخدام بتحول الزوار لعملاء. وبجانب كده بقدّم دورات تدريبية عملية بشارك فيها كل خبرتي في البرمجة والتصميم والتسويق.',
    email: 'contact@islamsayed.test',
    whatsapp: 'https://wa.me/201000000000',
    social: {
        github: 'https://github.com/islamel-sayed96',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        youtube: 'https://youtube.com',
    },
};

export const stats = [
    { value: 5, suffix: '+', label: 'سنوات خبرة' },
    { value: 40, suffix: '+', label: 'مشروع منجز' },
    { value: 1200, suffix: '+', label: 'طالب' },
    { value: 15, suffix: '+', label: 'دورة تدريبية' },
];

export const skills = [
    {
        icon: 'Code2',
        title: 'Front-End Development',
        desc: 'واجهات React سريعة، متجاوبة، وبمعايير Accessibility وأداء عالي.',
    },
    {
        icon: 'Server',
        title: 'Back-End Development',
        desc: 'أنظمة Laravel/PHP قوية، APIs آمنة، وقواعد بيانات مصممة كويس.',
    },
    {
        icon: 'PenTool',
        title: 'UI/UX Design',
        desc: 'تصميم تجربة استخدام مدروسة من الـ wireframe للـ prototype النهائي.',
    },
    {
        icon: 'TrendingUp',
        title: 'التسويق الرقمي و SEO',
        desc: 'استراتيجيات تسويق محتوى وتحسين ظهور في محركات البحث بنتائج قابلة للقياس.',
    },
    {
        icon: 'LayoutTemplate',
        title: 'تصميم مواقع',
        desc: 'مواقع تعريفية وهبوط (Landing Pages) بتصميم عصري وهوية بصرية مميزة.',
    },
    {
        icon: 'ShoppingCart',
        title: 'التجارة الإلكترونية',
        desc: 'متاجر إلكترونية متكاملة من بوابات الدفع للشحن لإدارة المخزون.',
    },
];

export const projects = [
    {
        title: 'دربنا',
        desc: 'منصة تعليمية متكاملة: كورسات فيديو، اختبارات تفاعلية، شهادات، حصص مباشرة، واشتراكات — مبنية بـ Laravel و React.',
        tags: ['Laravel', 'React', 'Inertia.js', 'Tailwind'],
        gradient: 'from-brand-500 to-brand-800',
        href: 'https://github.com/islamel-sayed96/Darbna',
        external: true,
        cta: 'شوف المشروع على GitHub',
    },
    {
        title: 'Al Bayan Homes',
        desc: 'تطوير الموقع الإلكتروني، تحسين الظهور في محركات البحث (SEO)، وإدارة الحملات الإعلانية الممولة.',
        tags: ['Website', 'SEO', 'Ads Management'],
        gradient: 'from-accent-400 to-accent-700',
        href: 'https://albyanhomes.com/',
        external: true,
        cta: 'زيارة الموقع',
    },
    {
        title: 'NMC',
        desc: 'تطوير الموقع الإلكتروني، تحسين محركات البحث، إدارة صفحات السوشيال ميديا، وإدارة الحملات الإعلانية.',
        tags: ['Website', 'SEO', 'Social Media', 'Ads Management'],
        gradient: 'from-slate-600 to-slate-900',
        href: 'https://nmc.ae/',
        external: true,
        cta: 'زيارة الموقع',
    },
    {
        title: 'NTC Emirates',
        desc: 'إدارة الحملات الإعلانية، تحسين محركات البحث، وإدارة صفحات السوشيال ميديا.',
        tags: ['Ads Management', 'SEO', 'Social Media'],
        gradient: 'from-brand-600 to-brand-900',
        href: 'https://www.instagram.com/ntcemirates.ae/',
        external: true,
        cta: 'زيارة الصفحة',
    },
    {
        title: 'Al Bayan Institute',
        desc: 'تطوير الموقع الإلكتروني، SEO، إدارة الحملات والصفحات، أنظمة CRM، وتنظيم العمل الإداري والمحاور التعليمية.',
        tags: ['Website', 'SEO', 'CRM', 'Operations'],
        gradient: 'from-accent-500 to-accent-800',
        href: 'https://albyan.institute/',
        external: true,
        cta: 'زيارة الموقع',
    },
    {
        title: 'Luvalle Beauty Center',
        desc: 'تطوير الموقع الإلكتروني، SEO، إدارة الحملات والصفحات، أنظمة CRM، وتنظيم العمل الإداري.',
        tags: ['Website', 'SEO', 'CRM', 'Operations'],
        gradient: 'from-slate-500 to-slate-800',
        href: 'https://luvallebeautycenter.com/',
        external: true,
        cta: 'زيارة الموقع',
    },
    {
        title: 'Rahhaal',
        desc: 'تطوير وتصميم الموقع الإلكتروني بالكامل.',
        tags: ['Website'],
        gradient: 'from-brand-400 to-brand-700',
        href: 'https://rahhaal.com/',
        external: true,
        cta: 'زيارة الموقع',
    },
];

export const instructorApplication = {
    heading: 'الانضمام كمحاضر',
    description:
        'إذا كان لديك أكثر من 5 سنين خبرة في مجال عملك وتريد الانضمام إلى محاضرين المنصة، قم بمراسلتنا عبر البريد الالكتروني:',
    requirements: [
        'السيرة الذاتية',
        'مكان الاقامة',
        'سابقة الأعمال ان وجدت',
        'عنوان الدورة التدريبية',
        'المادة العلمية للدورة التدريبية',
    ],
};

export const subjects = [
    {
        title: 'HTML & CSS للمبتدئين',
        lessons: 24,
        quizzes: 6,
        hasMaterial: true,
    },
    {
        title: 'JavaScript من الصفر للاحتراف',
        lessons: 38,
        quizzes: 10,
        hasMaterial: true,
    },
    {
        title: 'React عملي',
        lessons: 30,
        quizzes: 8,
        hasMaterial: true,
    },
];
