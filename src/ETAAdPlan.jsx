import React, { useState } from 'react';
import { Calendar, DollarSign, Target, TrendingUp, FileText, Users } from 'lucide-react';

const ETAAdPlan = () => {
    const [budget, setBudget] = useState(15000);
    const [activeTab, setActiveTab] = useState('overview');

    const calculateBreakdown = (totalBudget) => {
        const agencyCommission = totalBudget * 0.20;
        const adBudget = totalBudget * 0.80;
        const monthlyAdBudget = adBudget / 3;
        const dailyAdBudget = monthlyAdBudget / 30;

        return {
            total: totalBudget,
            agencyCommission,
            adBudget,
            monthlyAdBudget,
            dailyAdBudget
        };
    };

    const breakdown = calculateBreakdown(budget);

    const contentCalendar = [
        {
            week: 1,
            posts: [
                { day: 'الأحد', type: 'تعليمي', topic: 'أهمية الالتزام الضريبي للشركات في مصر' },
                { day: 'الأربعاء', type: 'خدمات', topic: 'كيف يساعدك ETA في تأسيس شركتك بسهولة' }
            ]
        },
        {
            week: 2,
            posts: [
                { day: 'الاثنين', type: 'نصائح', topic: 'أخطاء محاسبية شائعة في السوق المصري' },
                { day: 'الخميس', type: 'عرض', topic: 'استشارة مجانية لتقييم وضعك الضريبي' }
            ]
        },
        {
            week: 3,
            posts: [
                { day: 'الأحد', type: 'قصة نجاح', topic: 'كيف ساعدنا شركة محلية في توفير الضرائب' },
                { day: 'الأربعاء', type: 'تعليمي', topic: 'التعديلات الضريبية الجديدة في مصر' }
            ]
        },
        {
            week: 4,
            posts: [
                { day: 'الاثنين', type: 'خدمات', topic: 'خدمات المراجعة الشاملة من ETA' },
                { day: 'الخميس', type: 'تفاعلي', topic: 'سؤال وجواب: اسألنا عن أي استفسار محاسبي' }
            ]
        }
    ];

    const adCampaigns = [
        {
            month: 'الشهر الأول',
            focus: 'بناء الوعي بالعلامة التجارية',
            campaigns: [
                {
                    name: 'حملة التعريف بالخدمات',
                    objective: 'Reach & Awareness',
                    budget: '40%',
                    targeting: 'أصحاب الأعمال والمدراء الماليين في مصر (25-55 سنة)',
                    content: 'فيديوهات تعريفية قصيرة عن خدمات ETA والخبرة في السوق المصري'
                },
                {
                    name: 'حملة الخبرة والمصداقية',
                    objective: 'Engagement',
                    budget: '35%',
                    targeting: 'الشركات الناشئة ورواد الأعمال المصريين',
                    content: 'منشورات عن خبرة الفريق مع القوانين المصرية وشهادات العملاء'
                },
                {
                    name: 'حملة المحتوى التعليمي',
                    objective: 'Engagement',
                    budget: '25%',
                    targeting: 'جمهور واسع مهتم بالضرائب والمحاسبة في مصر',
                    content: 'نصائح ضريبية ومحاسبية حسب القوانين المصرية'
                }
            ]
        },
        {
            month: 'الشهر الثاني',
            focus: 'جذب العملاء المحتملين',
            campaigns: [
                {
                    name: 'حملة الاستشارة المجانية',
                    objective: 'Lead Generation',
                    budget: '45%',
                    targeting: 'أصحاب الشركات الصغيرة والمتوسطة في مصر',
                    content: 'عرض استشارة مجانية لتقييم الوضع الضريبي والمحاسبي'
                },
                {
                    name: 'حملة تأسيس الشركات',
                    objective: 'Conversions',
                    budget: '35%',
                    targeting: 'رواد الأعمال الجدد في مصر',
                    content: 'عروض خاصة على خدمات تأسيس الشركات والالتزام الضريبي'
                },
                {
                    name: 'حملة إعادة الاستهداف',
                    objective: 'Conversions',
                    budget: '20%',
                    targeting: 'من تفاعل مع المحتوى في الشهر الأول',
                    content: 'تذكير بالخدمات ودعوة للتواصل المباشر'
                }
            ]
        },
        {
            month: 'الشهر الثالث',
            focus: 'التحويل والنمو',
            campaigns: [
                {
                    name: 'حملة العروض الخاصة',
                    objective: 'Conversions',
                    budget: '40%',
                    targeting: 'العملاء المحتملين الدافئين في مصر',
                    content: 'عروض محدودة على باقات الخدمات المحاسبية والضريبية'
                },
                {
                    name: 'حملة قصص النجاح المصرية',
                    objective: 'Conversions',
                    budget: '30%',
                    targeting: 'الشركات المتوسطة والكبيرة في مصر',
                    content: 'دراسات حالة محلية وشهادات عملاء مصريين'
                },
                {
                    name: 'حملة الاستمرارية',
                    objective: 'Reach & Conversions',
                    budget: '30%',
                    targeting: 'جمهور عام في مصر + إعادة استهداف',
                    content: 'تعزيز الوعي بالعلامة التجارية والدفع للتواصل'
                }
            ]
        }
    ];

    const kpis = [
        { name: 'معدل الوصول (Reach)', target: '40,000 - 80,000 شخص شهريًا', icon: Users },
        { name: 'معدل التفاعل (Engagement Rate)', target: '2.5% - 4%', icon: TrendingUp },
        { name: 'تكلفة النقرة (CPC)', target: '0.30 - 0.80 جنيه', icon: DollarSign },
        { name: 'العملاء المحتملون (Leads)', target: '50 - 100 استفسار شهريًا', icon: Target },
        { name: 'معدل التحويل (Conversion)', target: '5% - 10% من الاستفسارات', icon: TrendingUp },
        { name: 'تكلفة العميل المحتمل (CPL)', target: '40 - 80 جنيه', icon: DollarSign }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6" dir="rtl">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6 border border-white/20">
                    <h1 className="text-4xl font-bold text-white mb-2">خطة إعلانية متكاملة - 3 شهور</h1>
                    <p className="text-blue-200 text-lg">مكتب ETA للمحاسبة والمراجعة - مصر 🇪🇬</p>
                </div>

                {/* Budget Calculator */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <DollarSign className="w-6 h-6" />
                        حاسبة الميزانية
                    </h2>
                    <div className="mb-4">
                        <label className="text-white block mb-2">الميزانية الإجمالية (جنيه مصري):</label>
                        <input
                            type="number"
                            value={budget}
                            onChange={(e) => setBudget(Number(e.target.value))}
                            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-blue-400"
                            min="5000"
                            step="500"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-blue-600/30 p-4 rounded-lg border border-blue-400/50">
                            <p className="text-blue-200 text-sm">عمولة الوكالة (20%)</p>
                            <p className="text-2xl font-bold text-white">{breakdown.agencyCommission.toFixed(0)} ج.م</p>
                        </div>
                        <div className="bg-green-600/30 p-4 rounded-lg border border-green-400/50">
                            <p className="text-green-200 text-sm">ميزانية الإعلانات (80%)</p>
                            <p className="text-2xl font-bold text-white">{breakdown.adBudget.toFixed(0)} ج.م</p>
                        </div>
                        <div className="bg-purple-600/30 p-4 rounded-lg border border-purple-400/50">
                            <p className="text-purple-200 text-sm">ميزانية شهرية</p>
                            <p className="text-2xl font-bold text-white">{breakdown.monthlyAdBudget.toFixed(0)} ج.م</p>
                        </div>
                        <div className="bg-orange-600/30 p-4 rounded-lg border border-orange-400/50">
                            <p className="text-orange-200 text-sm">ميزانية يومية</p>
                            <p className="text-2xl font-bold text-white">{breakdown.dailyAdBudget.toFixed(0)} ج.م</p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl mb-6 border border-white/20">
                    <div className="flex gap-2 p-2 border-b border-white/20 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${activeTab === 'overview'
                                ? 'bg-blue-600 text-white'
                                : 'text-blue-200 hover:bg-white/10'
                                }`}
                        >
                            نظرة عامة
                        </button>
                        <button
                            onClick={() => setActiveTab('campaigns')}
                            className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${activeTab === 'campaigns'
                                ? 'bg-blue-600 text-white'
                                : 'text-blue-200 hover:bg-white/10'
                                }`}
                        >
                            الحملات الإعلانية
                        </button>
                        <button
                            onClick={() => setActiveTab('content')}
                            className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${activeTab === 'content'
                                ? 'bg-blue-600 text-white'
                                : 'text-blue-200 hover:bg-white/10'
                                }`}
                        >
                            تقويم المحتوى
                        </button>
                        <button
                            onClick={() => setActiveTab('kpis')}
                            className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${activeTab === 'kpis'
                                ? 'bg-blue-600 text-white'
                                : 'text-blue-200 hover:bg-white/10'
                                }`}
                        >
                            مؤشرات الأداء
                        </button>
                    </div>

                    <div className="p-6">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">🎯 الأهداف الرئيسية</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                            <p className="text-white">✅ بناء وعي قوي بالعلامة التجارية لمكتب ETA في السوق المصري</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                            <p className="text-white">✅ جذب 150-300 عميل محتمل خلال 3 شهور</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                            <p className="text-white">✅ تحويل 8-30 عميل فعلي من الحملات</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                            <p className="text-white">✅ بناء قاعدة متابعين مهتمين ومتفاعلين في مصر</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">👥 الجمهور المستهدف</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-400/30">
                                            <h4 className="font-bold text-white mb-2">أصحاب الشركات الصغيرة والمتوسطة</h4>
                                            <p className="text-blue-200 text-sm">يحتاجون خدمات محاسبية ومراجعة حسب القوانين المصرية</p>
                                        </div>
                                        <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                                            <h4 className="font-bold text-white mb-2">رواد الأعمال والستارت أب</h4>
                                            <p className="text-green-200 text-sm">يخططون لتأسيس شركات جديدة في مصر</p>
                                        </div>
                                        <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-400/30">
                                            <h4 className="font-bold text-white mb-2">المدراء الماليين والمحاسبين</h4>
                                            <p className="text-purple-200 text-sm">يبحثون عن حلول ضريبية متوافقة مع قوانين مصر</p>
                                        </div>
                                        <div className="bg-orange-600/20 p-4 rounded-lg border border-orange-400/30">
                                            <h4 className="font-bold text-white mb-2">الشركات المتوسطة والكبيرة</h4>
                                            <p className="text-orange-200 text-sm">يحتاجون خدمات مراجعة متقدمة ومتخصصة</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">📍 الاستهداف الجغرافي</h3>
                                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                        <p className="text-white font-semibold mb-2">🇪🇬 جمهورية مصر العربية</p>
                                        <p className="text-blue-200">التركيز على المدن الكبرى: القاهرة، الجيزة، الإسكندرية، والمحافظات الرئيسية</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">💰 توصيات الميزانية</h3>
                                    <div className="space-y-3">
                                        <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                                            <p className="text-white"><strong>ميزانية مقترحة للبداية:</strong> 10,000 - 20,000 جنيه شهريًا</p>
                                            <p className="text-green-200 text-sm mt-2">تشمل 20% عمولة الوكالة + 80% إنفاق إعلاني</p>
                                        </div>
                                        <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-400/30">
                                            <p className="text-white"><strong>ميزانية موصى بها:</strong> 15,000 - 30,000 جنيه شهريًا</p>
                                            <p className="text-blue-200 text-sm mt-2">لنتائج أفضل ووصول أوسع في السوق المصري</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'campaigns' && (
                            <div className="space-y-6">
                                {adCampaigns.map((month, idx) => (
                                    <div key={idx} className="bg-white/5 rounded-lg p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Calendar className="w-6 h-6 text-blue-400" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{month.month}</h3>
                                                <p className="text-blue-200">{month.focus}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {month.campaigns.map((campaign, cidx) => (
                                                <div key={cidx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <h4 className="font-bold text-white text-lg">{campaign.name}</h4>
                                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                                            {campaign.budget}
                                                        </span>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p className="text-blue-200">
                                                            <span className="font-semibold">الهدف:</span> {campaign.objective}
                                                        </p>
                                                        <p className="text-green-200">
                                                            <span className="font-semibold">الاستهداف:</span> {campaign.targeting}
                                                        </p>
                                                        <p className="text-purple-200">
                                                            <span className="font-semibold">المحتوى:</span> {campaign.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'content' && (
                            <div className="space-y-6">
                                <div className="bg-blue-600/20 p-4 rounded-lg border border-blue-400/30 mb-6">
                                    <p className="text-white">
                                        📅 <strong>خطة المحتوى:</strong> منشورين أسبوعيًا (8 منشورات شهريًا × 3 شهور = 24 منشور)
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">📝 نماذج من الأسابيع الأربعة الأولى</h3>

                                {contentCalendar.map((week, idx) => (
                                    <div key={idx} className="bg-white/5 rounded-lg p-5 border border-white/10">
                                        <h4 className="font-bold text-white text-lg mb-4">الأسبوع {week.week}</h4>
                                        <div className="space-y-3">
                                            {week.posts.map((post, pidx) => (
                                                <div key={pidx} className="bg-white/5 rounded-lg p-4 border border-white/10 flex justify-between items-center">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-blue-400 font-semibold">{post.day}</span>
                                                            <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                                                                {post.type}
                                                            </span>
                                                        </div>
                                                        <p className="text-white">{post.topic}</p>
                                                    </div>
                                                    <FileText className="w-5 h-5 text-blue-400" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                                    <h4 className="font-bold text-white mb-2">💡 أنواع المحتوى المتنوعة:</h4>
                                    <ul className="space-y-2 text-green-200">
                                        <li>• منشورات تعليمية (نصائح ضريبية حسب القوانين المصرية)</li>
                                        <li>• عرض الخدمات والباقات المتاحة في مصر</li>
                                        <li>• قصص نجاح عملاء مصريين</li>
                                        <li>• منشورات تفاعلية (سؤال وجواب)</li>
                                        <li>• إنفوجرافيك توضيحي عن الضرائب والمحاسبة</li>
                                        <li>• فيديوهات قصيرة عن التحديثات الضريبية</li>
                                        <li>• نصائح عملية للشركات الصغيرة والمتوسطة</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-400/30">
                                    <h4 className="font-bold text-white mb-2">🎨 مواصفات المحتوى:</h4>
                                    <ul className="space-y-2 text-purple-200">
                                        <li>• تصميمات احترافية تناسب الهوية البصرية</li>
                                        <li>• محتوى باللهجة المصرية عند الحاجة</li>
                                        <li>• استخدام أمثلة محلية وحالات واقعية من السوق المصري</li>
                                        <li>• صور وفيديوهات عالية الجودة</li>
                                        <li>• دعوة واضحة للتواصل (CTA)</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'kpis' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-4">📊 مؤشرات الأداء الرئيسية (KPIs)</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {kpis.map((kpi, idx) => {
                                        const Icon = kpi.icon;
                                        return (
                                            <div key={idx} className="bg-white/5 rounded-lg p-5 border border-white/10">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Icon className="w-5 h-5 text-blue-400" />
                                                    <h4 className="font-bold text-white">{kpi.name}</h4>
                                                </div>
                                                <p className="text-green-300 text-lg">{kpi.target}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="bg-orange-600/20 p-5 rounded-lg border border-orange-400/30">
                                    <h4 className="font-bold text-white mb-3">📈 التقارير والمتابعة:</h4>
                                    <ul className="space-y-2 text-orange-200">
                                        <li>• تقرير أسبوعي لأداء المنشورات والتفاعل</li>
                                        <li>• تقرير شهري شامل لأداء الحملات الإعلانية</li>
                                        <li>• تحليل العملاء المحتملين وجودتهم</li>
                                        <li>• توصيات للتحسين والتطوير المستمر</li>
                                        <li>• اجتماع شهري لمراجعة النتائج والتخطيط للشهر القادم</li>
                                        <li>• تقارير مفصلة عن ROI والعائد على الاستثمار</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-600/20 p-5 rounded-lg border border-purple-400/30">
                                    <h4 className="font-bold text-white mb-3">🎯 التوقعات المالية (بناءً على الميزانية المدخلة):</h4>
                                    <div className="space-y-2 text-purple-200">
                                        <p>• تكلفة العميل المحتمل المتوقعة: 40-80 جنيه مصري</p>
                                        <p>• عدد العملاء المحتملين المتوقع: {Math.floor(breakdown.adBudget / 60)} - {Math.floor(breakdown.adBudget / 40)} عميل محتمل</p>
                                        <p>• معدل التحويل المتوقع: 5-10%</p>
                                        <p>• عدد العملاء الفعليين المتوقع: {Math.floor((breakdown.adBudget / 60) * 0.05)} - {Math.floor((breakdown.adBudget / 40) * 0.10)} عميل</p>
                                        <p className="text-yellow-300 mt-3 font-semibold">💡 ملاحظة: الأرقام تعتمد على جودة الحملات والاستهداف الدقيق</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-3">📋 ملاحظات هامة للسوق المصري:</h3>
                    <ul className="space-y-2 text-blue-200">
                        <li>• يمكن تعديل الميزانية والاستراتيجية بناءً على النتائج الفعلية</li>
                        <li>• التركيز على جودة العملاء المحتملين وليس الكمية فقط</li>
                        <li>• اختبار أنواع مختلفة من المحتوى والإعلانات (A/B Testing)</li>
                        <li>• مراعاة خصوصية السوق المصري والقوانين المحلية</li>
                        <li>• استخدام محتوى يتناسب مع الثقافة المصرية</li>
                        <li>• متابعة التحديثات الضريبية والقانونية في مصر</li>
                        <li>• بناء قاعدة بيانات قوية من العملاء المحتملين</li>
                        <li>• متابعة دورية وتحسين مستمر بناءً على البيانات</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ETAAdPlan;