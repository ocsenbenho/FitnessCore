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
Copy,
Check,
PlayCircle
} from 'lucide-react';

const App = () => {
const [activeDay, setActiveDay] = useState(0);
const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);
const [isCopied, setIsCopied] = useState(false);

const workoutPlan = [
{
day: "Buổi 1",
title: "Nền Tảng Chân & Mông",
focus: "Xây dựng sức mạnh đùi và mông",
icon: <Footprints className="text-blue-500" />,
exercises: [
{
name: "Goblet Squat (Squat với tạ ngực)",
sets: "3 hiệp x 12 lần",
target: "Đùi trước, Mông, Lõi",
wrong: "Gót chân nhấc khỏi sàn. Đầu gối sụp/chụm vào trong. Cụp đuôi (võng mông dưới) khi xuống sâu.",
right: "Trọng lượng dồn đều 3 điểm bàn chân. Đầu gối mở theo hướng mũi chân. Lưng thẳng tự nhiên.",
fix: "Hãy tưởng tượng bạn đang ngồi lùi mông xuống một chiếc ghế ở phía sau chứ không phải gập đầu gối chúi về trước.",
videoId: "lRYBbchqxtI"
},
{
name: "Dumbbell Lunges (Chùng chân)",
sets: "3 hiệp x 10 lần/chân",
target: "Đùi trước, Đùi sau, Mông",
wrong: "Đầu gối chân trước đâm chúi quá xa vượt mũi chân gây nhấc gót. Mất thăng bằng, đổ người về trước quá nhiều.",
right: "Bước chân đủ rộng. Cả hai đầu gối tạo góc vuông ~90 độ khi hạ xuống. Ngực giữ cao.",
fix: "Đừng cố đẩy người về trước. Hãy nghĩ đến việc hạ đầu gối của chân SAU thẳng xuống mặt sàn như thang máy.",
videoId: "mJilHWIBWO8"
},
{
name: "Glute Bridge (Cây cầu mông)",
sets: "3 hiệp x 15 lần",
target: "Mông, Cơ dựng cột sống",
wrong: "Ưỡn cong lưng dưới quá mức để đẩy mông lên cao. Không siết mông ở điểm trên cùng.",
right: "Cơ thể tạo thành đường thẳng từ vai đến đầu gối. Dùng gót chân đạp xuống sàn để nâng hông.",
fix: "Hóp bụng lại trước khi đẩy lên. Ở điểm cao nhất, gồng chặt mông lại như đang kẹp một tờ tiền.",
videoId: "WEvLyLsV0xs"
}
]
},
{
day: "Buổi 2",
title: "Core Thép & Thể Lực (LISS)",
focus: "Kiểm soát cơ lõi và sức bền hô hấp",
icon: <ShieldCheck className="text-emerald-500" />,
exercises: [
{
name: "Plank (Đo ván)",
sets: "3 hiệp x 30-45 giây",
target: "Cơ bụng ngang, Cơ lõi toàn diện",
wrong: "Võng lưng dưới (rớt hông). Nhô mông lên quá cao. Gập cổ nhìn chằm chằm vào bụng.",
right: "Thân người thành một đường thẳng như tấm ván. Khuỷu tay ngay dưới vai. Mắt nhìn xuống tay.",
fix: "Hơi cuộn xương chậu về phía rốn (giống tư thế cún cụp đuôi) và gồng cứng bụng như chuẩn bị bị đấm.",
videoId: "v25dawSzRTM"
},
{
name: "Dead Bug (Bọ chết)",
sets: "3 hiệp x 12 lần/bên",
target: "Bụng sâu, Kiểm soát cột sống",
wrong: "Lưng dưới nhấc khỏi mặt sàn khi duỗi chân. Tập quá nhanh theo quán tính.",
right: "Lưng dưới dán chặt 100% xuống sàn trong suốt quá trình tập. Chuyển động chậm, kiểm soát.",
fix: "Tưởng tượng có một tờ giấy ở dưới thắt lưng và bạn phải ép chặt lưng xuống để không ai rút được tờ giấy ra.",
videoId: "DqLL45uk2Tk"
},
{
name: "Jumping Jacks (Nhảy dang tay chân)",
sets: "4 hiệp x 45 giây (Nghỉ 15s)",
target: "Tim mạch, Thể lực toàn thân",
wrong: "Tiếp đất bằng cả bàn chân gầm thịch mạnh. Tay vung lỏng lẻo.",
right: "Tiếp đất nhẹ nhàng bằng mũi chân/ức bàn chân. Đầu gối hơi khuỵu nhẹ để giảm xóc.",
fix: "Hãy cố gắng nhảy êm nhất có thể, như một ninja. Hít thở đều, hít mũi thở miệng.",
videoId: "7Pxr4xOrhNk"
}
]
},
{
day: "Buổi 3",
title: "Bản Lề Hông & Sức Bền",
focus: "Đùi sau, lưng dưới và thể lực",
icon: <Flame className="text-orange-500" />,
exercises: [
{
name: "Romanian Deadlift (RDL)",
sets: "3 hiệp x 12 lần",
target: "Đùi sau, Lưng dưới, Mông",
wrong: "Gù lưng, cúi gập cột sống để hạ tạ sâu. Khuỵu gối quá nhiều biến thành bài Squat.",
right: "Lưng giữ thẳng tự nhiên. Đẩy hông xa về sau cho đến khi cảm thấy căng tức ở đùi sau.",
fix: "Bài này là 'Đẩy hông', không phải 'Cúi người'. Đứng cách tường 20cm, cố gắng đẩy mông chạm vào tường mà không ngã.",
videoId: "CBOhr6H7BEY"
},
{
name: "Bird Dog (Chó săn chim)",
sets: "3 hiệp x 10 lần/bên",
target: "Lõi ổn định, Cân bằng",
wrong: "Lắc lư hông nghiêng ngả khi giơ tay chân. Võng lưng khi đá chân lên cao.",
right: "Lưng phẳng như mặt bàn. Hông song song với mặt sàn không bị vẹo. Duỗi thẳng tay chân.",
fix: "Tưởng tượng bạn đang đặt một ly nước đầy trên lưng dưới, mục tiêu là chuyển động mà không làm đổ giọt nước nào.",
videoId: "_1j_HWknGLg"
},
{
name: "Mountain Climbers (Leo núi)",
sets: "3 hiệp x 30 giây",
target: "Tim mạch, Cơ bụng, Vai",
wrong: "Nảy mông lên trời. Vai thụt lại phía sau xa khỏi bàn tay. Cúi gập cổ.",
right: "Vai cố định vuông góc trên cổ tay. Thân người giữ nguyên tư thế Plank, chỉ có chân di chuyển.",
fix: "Dành cho người mới: Đừng chạy nhanh vội. Hãy kéo từng đầu gối lên chạm khuỷu tay một cách có kiểm soát để cảm nhận cơ bụng.",
videoId: "hZb6jTbCLeE"
}
]
}
];

const handleDayChange = (idx) => {
setActiveDay(idx);
setActiveExerciseIdx(0); // Reset exercise selection when switching tabs
};

const handleCopyJSON = () => {
const exportData = workoutPlan.map(day => ({
day: day.day,
title: day.title,
focus: day.focus,
exercises: day.exercises
}));

const textArea = document.createElement("textarea");
textArea.value = JSON.stringify(exportData, null, 2);
document.body.appendChild(textArea);
textArea.select();
try {
document.execCommand('copy');
setIsCopied(true);
setTimeout(() => setIsCopied(false), 2000);
} catch (err) {
console.error('Lỗi khi copy', err);
}
document.body.removeChild(textArea);
};

const activeData = workoutPlan[activeDay];
const activeExercise = activeData.exercises[activeExerciseIdx];

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
                    <h1 className="text-3xl font-black tracking-tight mb-2">CORE, LEGS & STAMINA</h1>
                    <p className="text-slate-300 font-medium max-w-2xl">
                        Cẩm nang phân tích kỹ thuật chuẩn xác. Tập trung vào chất lượng từng Rep, xây dựng sức mạnh nền
                        tảng và bảo vệ xương khớp cho người mới.
                    </p>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700 flex justify-center md:justify-start">
                <button onClick={handleCopyJSON}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors shadow-lg">
                    {isCopied ? <Check size={20} /> : <Copy size={20} />}
                    {isCopied ? "Đã lưu JSON vào Clipboard!" : "Sao chép toàn bộ Dữ Liệu (JSON)"}
                </button>
            </div>
        </div>
    </header>

    <main className="max-w-5xl mx-auto mt-8 px-4">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
            {workoutPlan.map((d, idx) => (
            <button key={idx} onClick={() => handleDayChange(idx)}
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-3 p-4 rounded-2xl font-bold transition-all shadow-sm ${
                activeDay === idx
                ? 'bg-white border-b-4 border-emerald-500 text-slate-900 shadow-md transform -translate-y-1'
                : 'bg-white/60 border-b-4 border-transparent text-slate-500 hover:bg-white'
                }`}
            >
                {d.icon}
                <div className="text-left">
                    <div className="text-xs uppercase tracking-wider opacity-70">{d.day}</div>
                    <div>{d.title}</div>
                </div>
            </button>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content: Form Analysis */}
            <div className="lg:col-span-8 space-y-6">
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

                                    {/* Form Correction Block - Only show full details inside if it's selected, otherwise show a snippet or keep it open */}
                                    {isSelected && (
                                        <div className="p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                            {/* WRONG */}
                                            <div className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                                <div className="mt-1"><AlertTriangle className="text-red-500" size={20} /></div>
                                                <div>
                                                    <h4 className="font-bold text-red-900 mb-1 text-sm uppercase tracking-wide">Thao tác SAI (Nguy hiểm)</h4>
                                                    <p className="text-red-700 text-sm leading-relaxed">{ex.wrong}</p>
                                                </div>
                                            </div>

                                            {/* RIGHT */}
                                            <div className="flex gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                                <div className="mt-1"><CheckCircle className="text-emerald-500" size={20} /></div>
                                                <div>
                                                    <h4 className="font-bold text-emerald-900 mb-1 text-sm uppercase tracking-wide">Form CHUẨN (An toàn)</h4>
                                                    <p className="text-emerald-800 text-sm leading-relaxed">{ex.right}</p>
                                                </div>
                                            </div>

                                            {/* FIX (Pro Tip) */}
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

            {/* Sidebar: Dynamic Video Visualizer */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl shadow-sm border border-emerald-200 overflow-hidden sticky top-6">
                    <div className="p-4 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between">
                        <h3 className="font-bold text-emerald-800 flex items-center gap-2">
                            <PlayCircle size={18} className="text-emerald-600 animate-pulse" />
                            Mô phỏng bài tập
                        </h3>
                    </div>

                    <div className="aspect-video bg-black relative flex items-center justify-center border-b-4 border-emerald-500">
                        {/* Dynamic YouTube Embed */}
                        <iframe 
                            key={activeExercise.videoId} /* Ensures iframe completely re-renders when video changes */
                            className="w-full h-full absolute inset-0"
                            src={`https://www.youtube.com/embed/${activeExercise.videoId}?autoplay=1&mute=1&loop=1&playlist=${activeExercise.videoId}`} 
                            title={activeExercise.name}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className="p-5 bg-slate-800 text-white">
                        <h4 className="font-bold mb-3 text-emerald-400 flex items-center gap-2 border-b border-slate-700 pb-2">
                            <ShieldCheck size={18} /> Đang xem: {activeExercise.name}
                        </h4>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            Hãy xem video mô phỏng một vài lần trước khi thực hiện. Chú ý đến quỹ đạo chuyển động và cách gồng cơ lõi.
                        </p>
                        
                        <div className="bg-white/10 p-3 rounded-lg text-xs text-slate-300">
                            <strong>💡 Mẹo xem Video:</strong> Video đã được tắt êm để không ảnh hưởng đến bạn. Bạn có thể bật âm lượng hoặc tua nhanh bằng bộ điều khiển bên trong khung hình.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</div>
);
};

export default App;
