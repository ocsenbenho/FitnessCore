import React, { useState } from 'react';
import {
    Activity,
    AlertTriangle,
    CheckCircle,
    Lightbulb,
    Flame,
    ShieldCheck,
    Footprints,
    Loader2,
    Info,
    PlayCircle
} from 'lucide-react';
import { workoutPlan } from './data/workoutPlan';
import { level2Plan } from './data/level2Plan';
import { level3Plan } from './data/level3Plan';
import { mobilityPlan } from './data/mobilityPlan';
import { nutritionPlan } from './data/nutritionPlan';
import { yogaPlan } from './data/yogaPlan';
import { pilatesPlan } from './data/pilatesPlan';


const App = () => {
const [activeDay, setActiveDay] = useState(0);
const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);
const [activeLevel, setActiveLevel] = useState('gym');
const [activeGymLevel, setActiveGymLevel] = useState(1); // 1=Sơ Cấp, 2=Trung Cấp, 3=Cao Cấp

const levels = [
    { id: 'gym', name: "Fitness - Gym", desc: "Sơ / Trung / Cao Cấp" },
    { id: 4, name: "Mobility", desc: "Linh hoạt & Khôi phục" },
    { id: 5, name: "Dinh Dưỡng", desc: "Thực đơn 30 ngày" },
    { id: 6, name: "Yoga", desc: "Tâm thị an nhiên" },
    { id: 7, name: "Pilates", desc: "Kiểm soát cơ lõi" }
];

const gymSubLevels = [
    { id: 1, name: "Sơ Cấp", desc: "Nền tảng" },
    { id: 2, name: "Trung Cấp", desc: "Bro-Split" },
    { id: 3, name: "Cao Cấp", desc: "Elite" },
];

const handleLevelChange = (lvlId) => {
    setActiveLevel(lvlId);
    setActiveDay(0);
    setActiveExerciseIdx(0);
};

const handleGymSubLevelChange = (subId) => {
    setActiveGymLevel(subId);
    setActiveDay(0);
    setActiveExerciseIdx(0);
};

const handleDayChange = (idx) => {
    setActiveDay(idx);
    setActiveExerciseIdx(0);
};

const getLevelColor = (id, isActive) => {
    if (!isActive) return 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:border-indigo-200';
    const colors = {
        gym: 'bg-gradient-to-br from-indigo-500 to-blue-600 shadow-indigo-500/30',
        1:   'bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-indigo-400/30',
        2:   'bg-gradient-to-br from-blue-500 to-indigo-700 shadow-blue-500/30',
        3:   'bg-gradient-to-br from-slate-600 to-slate-800 shadow-slate-700/30',
        4:   'bg-gradient-to-br from-teal-500 to-emerald-600 shadow-teal-500/30',
        5:   'bg-gradient-to-br from-amber-500 to-orange-600 shadow-orange-500/30',
        6:   'bg-gradient-to-br from-violet-500 to-purple-600 shadow-violet-500/30',
        7:   'bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/30',
    };
    return `${colors[id] || colors.gym} text-white shadow-xl scale-105`;
};

const activeArray = activeLevel === 'gym'
    ? (activeGymLevel === 1 ? workoutPlan : activeGymLevel === 2 ? level2Plan : level3Plan)
    : activeLevel === 4 ? mobilityPlan
    : activeLevel === 5 ? nutritionPlan
    : activeLevel === 6 ? yogaPlan
    : activeLevel === 7 ? pilatesPlan
    : [];
const activeData = activeArray.length > 0 ? (activeArray[activeDay] || activeArray[0]) : null;
const activeExercise = activeData ? (activeData.exercises[activeExerciseIdx] || activeData.exercises[0]) : null;

return (
<div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-12">
    {/* Header */}
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <Activity size={40} className="text-emerald-400" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-black tracking-tight mb-2">FITNESS CORE</h1>
                    <p className="text-slate-300 font-medium max-w-2xl mb-4">
                        Cẩm nang phân tích kỹ thuật chuẩn xác. Tập trung vào chất lượng từng Rep, xây dựng sức mạnh nền tảng và bảo vệ xương khớp cho người mới.
                    </p>
                    <div className="inline-block bg-amber-500/20 border border-amber-500/50 text-amber-200 text-sm px-4 py-3 rounded-xl max-w-2xl text-left">
                        <strong className="flex items-center gap-2 mb-1"><AlertTriangle size={16} /> Miễn trừ trách nhiệm:</strong> 
                        <span className="opacity-90">Mọi thông tin trên website này chỉ mang tính chất tham khảo. Vui lòng cân nhắc thể trạng cá nhân hoặc tham vấn chuyên gia, bác sĩ trước khi bắt đầu bất kỳ chương trình tập luyện nào.</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main className="max-w-5xl mx-auto mt-8 px-4">
        {/* Module Selector — Two separate framed sections */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">

            {/* Workout Modules */}
            <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 p-5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">🏋️ Module Luyện Tập</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {levels.filter(lvl => lvl.id !== 5).map((lvl) => (
                        <button
                            key={lvl.id}
                            onClick={() => handleLevelChange(lvl.id)}
                            className={`relative p-3 rounded-2xl text-left transition-all duration-300 overflow-hidden ${getLevelColor(lvl.id, activeLevel === lvl.id)}`}
                        >
                            <div className="text-sm font-black leading-tight">{lvl.name}</div>
                            <div className="text-xs font-medium opacity-75 mt-0.5 hidden lg:block">{lvl.desc}</div>
                        </button>
                    ))}
                </div>

                {/* Gym Sub-Levels — chỉ hiện khi Fitness-Gym đang active */}
                {activeLevel === 'gym' && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex gap-2">
                        {gymSubLevels.map(sub => (
                            <button
                                key={sub.id}
                                onClick={() => handleGymSubLevelChange(sub.id)}
                                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                                    activeGymLevel === sub.id
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                }`}
                            >
                                {sub.name}
                                <span className="block font-normal opacity-75 text-[10px]">{sub.desc}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Nutrition Module */}
            <div className="bg-white rounded-3xl shadow-sm border border-amber-200 p-5 md:w-48">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4 px-1">🍳 Dinh Dưỡng</p>
                <button
                    onClick={() => handleLevelChange(5)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${getLevelColor(5, activeLevel === 5)}`}
                >
                    <div className="text-base font-black leading-tight">Dinh Dưỡng</div>
                    <div className="text-xs font-medium opacity-75 mt-1">Thực đơn 30 ngày</div>
                </button>
            </div>

        </div>

        {activeData ? (
            <>
                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {activeArray.map((d, idx) => (
                    <button key={idx} onClick={() => handleDayChange(idx)}
                        className={`flex-1 min-w-[150px] flex items-center justify-center gap-3 p-4 rounded-2xl font-bold transition-all shadow-sm ${
                        activeDay === idx
                        ? 'bg-white border-b-4 border-emerald-500 text-slate-900 shadow-md transform -translate-y-1'
                        : 'bg-white/60 border-b-4 border-transparent text-slate-500 hover:bg-white'
                        }`}
                    >
                        {d.icon}
                        <div className="text-left">
                            <div className="text-xs uppercase tracking-wider opacity-70">{d.day}</div>
                            <div className="leading-snug text-sm md:text-base mt-0.5">{d.title}</div>
                        </div>
                    </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Elite Warning */}
                    {activeLevel === 3 && (
                        <div className="mb-6 p-5 bg-red-900 border-2 border-red-500 rounded-2xl text-white shadow-xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4">
                            <AlertTriangle size={32} className="text-red-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-black text-xl mb-2 text-red-300 uppercase tracking-widest">Cảnh Báo Chấn Thương Nghiêm Trọng</h3>
                                <p className="text-sm text-red-100 leading-relaxed font-medium">
                                    Module này áp dụng các kỹ thuật tập luyện của VĐV chuyên nghiệp (Olympic Weightlifting, 1RM Powerlifting, Advanced Calisthenics). Khối lượng tạ cực nặng và kỹ thuật vô cùng phức tạp. Tuyệt đối không thử nếu bạn chưa nắm vững cơ bản hoặc không có người hỗ trợ (Spotter). <b>Tự chịu trách nhiệm với mọi chấn thương.</b>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Main Content: Form Analysis */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                                {activeLevel === 5 ? "Thực Đơn Dinh Dưỡng & Công Thức" : "Danh sách bài tập & Phân tích Form"}
                            </h2>

                            <div className="space-y-6">
                                {activeData.exercises.map((ex, idx) => {
                                    const isSelected = activeExerciseIdx === idx;
                                    return (
                                        <div 
                                            key={idx} 
                                            onClick={() => setActiveExerciseIdx(idx)}
                                            className={`rounded-2xl cursor-pointer transition-all overflow-hidden border-2 ${
                                                isSelected 
                                                ? 'border-emerald-500 shadow-lg ring-4 ring-emerald-500/10 transform scale-[1.01] bg-white' 
                                                : 'border-slate-100 bg-slate-50 hover:border-emerald-300 hover:bg-white'
                                            }`}
                                        >
                                            {/* Exercise/Meal Header */}
                                            <div className={`p-4 flex justify-between items-center transition-colors ${isSelected ? (activeLevel === 5 ? 'bg-orange-600 text-white' : 'bg-slate-800 text-white') : 'bg-slate-100 text-slate-800'}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-full ${isSelected ? (activeLevel === 5 ? 'bg-white text-orange-600' : 'bg-emerald-500 text-slate-900') : 'bg-white text-emerald-500 shadow-sm'}`}>
                                                        <PlayCircle size={20} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg">{ex.name}</h3>
                                                        <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{activeLevel === 5 ? 'Thực đơn Tự nấu' : `Nhóm cơ: ${ex.target}`}</p>
                                                    </div>
                                                </div>
                                                <span className={`px-3 py-1 font-mono text-xs md:text-sm rounded border ${isSelected ? (activeLevel === 5 ? 'bg-orange-800 text-amber-200 border-orange-700' : 'bg-slate-700 text-emerald-400 border-slate-600') : 'bg-white text-slate-700 border-slate-200 shadow-sm'}`}>
                                                    {activeLevel === 5 ? ex.macros : ex.sets}
                                                </span>
                                            </div>

                                            {/* Expanded Content Block */}
                                            {isSelected && (
                                                <div className="p-5 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    
                                                    <div className={`aspect-video bg-black rounded-xl overflow-hidden shadow-sm border-2 relative ${activeLevel === 5 ? 'border-orange-500' : 'border-emerald-500'}`}>
                                                        <iframe 
                                                            key={`${activeDay}-${idx}-${ex.videoId}`}
                                                            className="w-full h-full absolute inset-0"
                                                            src={`https://www.youtube.com/embed/${ex.videoId}?autoplay=1&mute=1&loop=1&playlist=${ex.videoId}`} 
                                                            title={ex.name}
                                                            frameBorder="0" 
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                            allowFullScreen>
                                                        </iframe>
                                                    </div>

                                                    {activeLevel === 5 ? (
                                                        <>
                                                            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                                                <h4 className="font-bold text-orange-900 mb-2 text-sm uppercase tracking-wide flex items-center gap-2"><CheckCircle size={16}/> Nguyên Liệu Cần Chuẩn Bị</h4>
                                                                <p className="text-orange-800 text-sm leading-relaxed">{ex.ingredients}</p>
                                                            </div>
                                                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                                                                <h4 className="font-bold text-amber-900 mb-2 text-sm uppercase tracking-wide flex items-center gap-2"><Flame size={16}/> Cách Nấu (Rất Dễ)</h4>
                                                                <p className="text-amber-800 text-sm leading-relaxed whitespace-pre-line">{ex.recipe}</p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                                                <div className="mt-1"><AlertTriangle className="text-red-500" size={20} /></div>
                                                                <div>
                                                                    <h4 className="font-bold text-red-900 mb-1 text-sm uppercase tracking-wide">Thao tác SAI (Nguy hiểm)</h4>
                                                                    <p className="text-red-700 text-sm leading-relaxed">{ex.wrong}</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                                                <div className="mt-1"><CheckCircle className="text-emerald-500" size={20} /></div>
                                                                <div>
                                                                    <h4 className="font-bold text-emerald-900 mb-1 text-sm uppercase tracking-wide">Form CHUẨN (An toàn)</h4>
                                                                    <p className="text-emerald-800 text-sm leading-relaxed">{ex.right}</p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}

                                                    <div className="flex gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                                                        <div className="mt-1"><Lightbulb className="text-indigo-500" size={20} /></div>
                                                        <div>
                                                            <h4 className="font-bold text-indigo-900 mb-1 text-sm uppercase tracking-wide">Mẹo Độc Quyền</h4>
                                                            <p className="text-indigo-800 text-sm font-medium leading-relaxed">{ex.fix}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        ) : (
            <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-slate-200">
                <div className="inline-flex justify-center items-center w-20 h-20 bg-emerald-50 rounded-full mb-6">
                    <Loader2 className="text-emerald-500 animate-spin" size={40} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-4">Chương trình đang được xây dựng</h2>
                <p className="text-slate-500 max-w-lg mx-auto text-lg leading-relaxed">
                    Các bài tập cho cấp độ này đang được đội ngũ thiết kế và quay hình để đảm bảo chất lượng tốt nhất. Vui lòng quay lại trong các phiên bản cập nhật tiếp theo nhé!
                </p>
            </div>
        )}
    </main>
</div>
);
};

export default App;
