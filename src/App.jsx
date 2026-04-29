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


const App = () => {
const [activeDay, setActiveDay] = useState(0);
const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);
const [activeLevel, setActiveLevel] = useState(1);

const handleLevelChange = (lvlId) => {
    setActiveLevel(lvlId);
    setActiveDay(0);
    setActiveExerciseIdx(0);
};

const handleDayChange = (idx) => {
    setActiveDay(idx);
    setActiveExerciseIdx(0);
};

const activeArray = activeLevel === 1 ? workoutPlan : (activeLevel === 2 ? level2Plan : (activeLevel === 3 ? level3Plan : []));
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
        {/* Level Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
                { id: 1, name: "Sơ Cấp", desc: "Nền tảng & Kỹ thuật" },
                { id: 2, name: "Trung Cấp", desc: "Push / Pull / Legs" },
                { id: 3, name: "Cao Cấp", desc: "Bứt phá giới hạn" }
            ].map(lvl => (
                <button 
                    key={lvl.id}
                    onClick={() => handleLevelChange(lvl.id)}
                    className={`px-6 py-4 rounded-2xl font-bold transition-all border-2 flex-1 min-w-[200px] ${
                        activeLevel === lvl.id 
                        ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg transform scale-[1.02]'
                        : 'bg-white border-slate-200 text-slate-500 hover:border-emerald-300 hover:text-emerald-600'
                    }`}
                >
                    <div className="text-lg">{lvl.name}</div>
                    <div className="text-xs font-normal opacity-80 mt-1">{lvl.desc}</div>
                </button>
            ))}
        </div>

        {(activeLevel === 1 || activeLevel === 2 || activeLevel === 3) && activeData ? (
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
                                Danh sách bài tập & Phân tích Form
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
                                            {/* Exercise Header */}
                                            <div className={`p-4 flex justify-between items-center transition-colors ${isSelected ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-800'}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-full ${isSelected ? 'bg-emerald-500 text-slate-900' : 'bg-white text-emerald-500 shadow-sm'}`}>
                                                        <PlayCircle size={20} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg">{ex.name}</h3>
                                                        <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>Nhóm cơ: {ex.target}</p>
                                                    </div>
                                                </div>
                                                <span className={`px-3 py-1 font-mono text-sm rounded border ${isSelected ? 'bg-slate-700 text-emerald-400 border-slate-600' : 'bg-white text-slate-700 border-slate-200 shadow-sm'}`}>
                                                    {ex.sets}
                                                </span>
                                            </div>

                                            {/* Form Correction Block */}
                                            {isSelected && (
                                                <div className="p-5 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    
                                                    {/* Video Embed inside the card */}
                                                    <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-sm border-2 border-emerald-500 relative">
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

                                                    <div className="flex gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                                        <div className="mt-1"><Lightbulb className="text-amber-500" size={20} /></div>
                                                        <div>
                                                            <h4 className="font-bold text-amber-900 mb-1 text-sm uppercase tracking-wide">Cải thiện ngay (Mẹo PT)</h4>
                                                            <p className="text-amber-800 text-sm font-medium leading-relaxed">{ex.fix}</p>
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
