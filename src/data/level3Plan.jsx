import React from 'react';
import {
    Activity,
    AlertTriangle,
    CheckCircle,
    Lightbulb,
    Flame,
    ShieldCheck,
    Footprints,
    Info,
    Dumbbell,
    Zap,
    Target
} from 'lucide-react';

const FALLBACK_VIDEO = "rT7DgCr-3pg";

export const level3Plan = [
{
day: "Buổi 1",
title: "Olympic Weightlifting",
focus: "Sức mạnh bùng nổ (Explosive Power), Chuỗi cơ sau",
icon: <Zap className="text-yellow-500" />,
exercises: [
{
name: "Power Clean",
sets: "5 hiệp x 3 reps @ 75-85% 1RM",
target: "Toàn thân, Hệ thần kinh trung ương",
wrong: "Kéo tạ bằng tay thay vì dùng lực nảy của hông (Hip extension). Nhón gót quá sớm.",
right: "Đạp mạnh chân xuống sàn, hông đẩy tạ nảy lên, sau đó nhanh chóng chui người xuống dưới thanh đòn để đỡ tạ ở vai trước.",
fix: "Đây là bài tập tốc độ. Hãy tưởng tượng bạn đang cố nhảy cao hết mức có thể với thanh tạ trong tay.",
videoId: "5vVSGITznQk"
},
{
name: "Hang Snatch",
sets: "5 hiệp x 2-3 reps @ 70-80% 1RM",
target: "Toàn thân, Tốc độ chui dưới tạ",
wrong: "Thanh đòn đi quá xa cơ thể (vòng cung lớn) khiến mất trọng tâm.",
right: "Bắt đầu từ trên đầu gối (Hang). Vuốt thanh đòn sát người, tung hông và chui nhanh xuống để khóa tay thẳng tắp qua đầu.",
fix: "Giữ cánh tay lỏng lẻo như những sợi dây thừng cho đến khi hông nảy tạ lên. Không gồng bắp tay sớm.",
videoId: "yHZ1eZ8fJjc"
},
{
name: "Front Squat",
sets: "4 hiệp x 3-5 reps @ 80-85% 1RM",
target: "Đùi trước, Lõi (Core), Lưng trên",
wrong: "Cùi chỏ rủ xuống khiến thanh tạ trượt khỏi vai trước, kéo lưng gập về trước.",
right: "Nâng cùi chỏ cao song song với sàn. Ngồi lùi mông và giữ ngực thẳng đứng như một bức tường.",
fix: "Chỉ giữ thanh đòn bằng 2-3 ngón tay để giảm áp lực cho cổ tay, toàn bộ trọng lượng phải nằm trên rãnh vai trước.",
videoId: "nmUof3vszxM"
},
{
name: "Push Jerk",
sets: "4 hiệp x 3 reps @ 80% 1RM",
target: "Sức mạnh đẩy bùng nổ, Vai",
wrong: "Đẩy tạ bằng vai trước khi chân đạp xuống sàn xong.",
right: "Hé gối (Dip) thẳng đứng, đạp mạnh (Drive) nảy tạ lên khỏi ngực, sau đó nhanh chóng trùng gối xuống để chui dưới tạ.",
fix: "Thời điểm (Timing) là tất cả. Bạn phải 'rơi' xuống dưới thanh tạ ngay khoảnh khắc thanh tạ đạt đỉnh điểm.",
videoId: "VaIDqmZBkpc"
}
]
},
{
day: "Buổi 2",
title: "Max Effort Upper",
focus: "Sức mạnh tuyệt đối thân trên (Absolute Strength)",
icon: <Dumbbell className="text-red-600" />,
exercises: [
{
name: "Heavy Bench Press",
sets: "Trọng tâm: Tìm 1-3 Rep Max (90-95% 1RM)",
target: "Ngực, Tay sau, Vai",
wrong: "Thả tạ rơi tự do đập vào ngực. Chân nhảy lơ lửng trên không.",
right: "Áp dụng kỹ thuật Leg Drive: Đạp gót chân trượt người về phía đầu để truyền lực từ sàn lên ngực. Gồng cứng toàn thân (Valsalva).",
fix: "Hãy tưởng tượng bạn đang bẻ gãy thanh đòn thành hình chữ U để kích hoạt tối đa cơ xô và giữ ổn định khớp vai.",
videoId: "hWbUlkb5Ms4"
},
{
name: "Weighted Pull-Ups",
sets: "4 hiệp x 5 reps (Đeo tạ đai)",
target: "Lưng xô, Bắp tay",
wrong: "Dùng đà đung đưa tạ. Không kéo qua cằm.",
right: "Treo người tĩnh. Rút bả vai xuống và kéo cằm vượt qua thanh xà một cách dứt khoát.",
fix: "Khóa chặt tạ đai vào giữa hai chân để chống lắc lự. Hãy kéo thanh xà xuống ngực thay vì kéo người lên.",
videoId: "k2mvvcU1Lq8"
},
{
name: "Weighted Dips",
sets: "4 hiệp x 5-8 reps (Đeo tạ đai)",
target: "Ngực dưới, Tay sau",
wrong: "Hạ quá sâu gây xé rách cơ ngực và viêm bao hoạt dịch vai.",
right: "Hơi đổ người tới trước. Hạ xuống khi cùi chỏ tạo góc 90 độ và đẩy nổ lên trên.",
fix: "Khóa chặt bả vai ra sau và ghim xuống dưới (Retract & Depress) trong toàn bộ quá trình tập.",
videoId: "ZDOrGNvRdM0"
},
{
name: "Pendlay Rows",
sets: "4 hiệp x 5 reps @ 80% 1RM",
target: "Lưng giữa, Khả năng bùng nổ",
wrong: "Nhấc lưng thẳng đứng lên để dùng đà.",
right: "Lưng song song mặt sàn. Tạ nằm trên sàn ở mỗi rep. Giật tạ nổ lên chạm ngực và thả tạ rơi tự do có kiểm soát.",
fix: "Đây không phải là Barbell Row thông thường. Mỗi rep đều bắt đầu từ trạng thái chết (Dead stop) trên sàn nhà.",
videoId: "tYxEGi7ir4I"
}
]
},
{
day: "Buổi 3",
title: "Max Effort Lower",
focus: "Sức mạnh tuyệt đối thân dưới",
icon: <Flame className="text-orange-500" />,
exercises: [
{
name: "Heavy Back Squat",
sets: "Trọng tâm: Tìm 1-3 Rep Max (90-95% 1RM)",
target: "Đùi, Mông, Hệ thần kinh trung ương",
wrong: "Mất độ căng cơ lõi (Core stiffness) ở điểm tận cùng, gây cụp đuôi (Butt wink).",
right: "Low bar hoặc High bar. Nén khí cực mạnh vào bụng (Valsalva maneuver) trước khi tháo tạ.",
fix: "Không bao giờ được bước lùi quá 3 bước. 1 bước lùi chân phải, 1 bước lùi chân trái, 1 bước chỉnh cân bằng và SQUAT.",
videoId: "MLoZuAkIyZI"
},
{
name: "Deficit Deadlifts",
sets: "4 hiệp x 3-5 reps (Đứng trên bục 2-5cm)",
target: "Chuỗi cơ sau, Cải thiện sức kéo dưới sàn",
wrong: "Mất tư thế thắt lưng trung lập (Neutral spine) vì phải cúi quá sâu.",
right: "Hạ thấp hông hơn bình thường. Đạp gót chân lún xuống sàn để nhấc tạ rời khỏi mặt đất.",
fix: "Chỉ dành cho người có độ dẻo dai gân kheo tốt. Nếu không thể giữ thẳng lưng dưới, đừng đứng trên bục.",
videoId: "5rIqP63yWFg"
},
{
name: "Zercher Squats",
sets: "3 hiệp x 6-8 reps",
target: "Cơ lõi, Lưng trên, Đùi trước",
wrong: "Để tạ trượt khỏi khuỷu tay làm ngã người tới trước.",
right: "Ôm thanh đòn trong nếp gấp khuỷu tay. Giữ hai nắm đấm hướng lên trần nhà và Squat.",
fix: "Đây là bài kiểm tra sức chịu đựng kinh hoàng. Mặc áo dài tay hoặc dùng đệm nếu khuỷu tay quá đau.",
videoId: "y4xBAqdQmtA"
},
{
name: "Bulgarian Split Squats (Heavy)",
sets: "3 hiệp x 6-8 reps/chân (Cầm tạ Dumbbell nặng)",
target: "Sức mạnh đơn chân, Cân bằng",
wrong: "Mất thăng bằng ngã ngửa.",
right: "Một chân đặt trên ghế. Chân trước gánh toàn bộ trọng lượng. Hạ hông thẳng đứng.",
fix: "Chống 1 tay vào tường hoặc cột rack để giữ thăng bằng nếu bạn muốn thực sự dồn mức tạ nặng nhất vào đùi.",
videoId: "hiLF_pF3EJM"
}
]
},
{
day: "Buổi 4",
title: "Advanced Calisthenics",
focus: "Tuyệt kỹ điều khiển cơ thể (Bodyweight Mastery)",
icon: <Target className="text-teal-500" />,
exercises: [
{
name: "Muscle-Ups (Ring hoặc Bar)",
sets: "4 hiệp x Max (Mục tiêu: Kỹ thuật chuyển tiếp)",
target: "Tốc độ kéo, Sức đẩy vai, Lưng xô",
wrong: "Chỉ dùng tay để kéo, không vẩy chân tạo đà hình chữ C (False grip không đúng).",
right: "Sử dụng False Grip. Kéo nổ người lên cao đến mức ngực, nhanh chóng lật cùi chỏ lên trên thanh xà và đẩy lên.",
fix: "Kỹ thuật quan trọng hơn sức mạnh. Khoảnh khắc chuyển tiếp (Transition) đòi hỏi bạn phải chui đầu và vai về phía trước thanh xà rất nhanh.",
videoId: "_eQ2gw_Gg5Y"
},
{
name: "Front Lever Raises",
sets: "4 hiệp x 3-5 reps",
target: "Lưng xô thẳng tay, Cơ lõi cực đại",
wrong: "Gập cùi chỏ hoặc gập hông lại.",
right: "Treo người thẳng tay. Gồng cứng toàn bộ cơ thể như một tấm ván gỗ. Dùng lực xô (Lat pulldown thẳng tay) để kéo cơ thể nằm ngang song song mặt đất.",
fix: "Nếu quá khó, hãy tập với tư thế co 1 chân (1-leg tuck) hoặc co 2 chân (Advanced tuck) trước.",
videoId: "pDSQrioCAP0"
},
{
name: "Planche Leans",
sets: "4 hiệp x Giữ 10-15 giây",
target: "Khớp vai, Cơ ngực, Tay trước",
wrong: "Võng lưng dưới. Không đẩy bả vai lên (Protraction).",
right: "Tư thế chống đẩy, nhưng đổ toàn bộ trọng tâm về phía trước qua khỏi bàn tay. Khóa cứng cùi chỏ.",
fix: "Đẩy bả vai phồng lên hết cỡ (Hollow body). Bạn phải cảm nhận áp lực khổng lồ lên cổ tay và vai trước.",
videoId: "oVpte1edulI"
},
{
name: "Dragon Flags",
sets: "4 hiệp x 5 reps (Hoặc giữ ngã người)",
target: "Cơ lõi toàn diện (Lý Tiểu Long)",
wrong: "Cong người lại ở phần thắt lưng để lấy đà.",
right: "Nằm ngửa nắm tay vào cột chắc chắn. Gồng cứng cơ thể và nhấc bổng toàn bộ mông và lưng dưới lên khỏi sàn.",
fix: "Trọng lượng duy nhất chạm sàn là phần bả vai và đầu của bạn. Hạ người xuống chậm nhất có thể.",
videoId: "pvz7k5gO-DE"
}
]
},
{
day: "Buổi 5",
title: "Hypertrophy Upper",
focus: "Phì đại cơ bắp, Khắc phục điểm yếu thân trên",
icon: <Activity className="text-purple-500" />,
exercises: [
{
name: "Incline Dumbbell Press (Rest-Pause)",
sets: "1 hiệp chính (Thất bại cơ) + 3 hiệp Rest-Pause",
target: "Ngực trên cực đại",
wrong: "Giảm biên độ khi đã mỏi.",
right: "Chọn mức tạ đẩy được 10 reps đến thất bại. Nghỉ 15 giây. Đẩy tiếp đến thất bại. Lặp lại 3 lần.",
fix: "Rest-Pause giúp bạn kích hoạt những sợi cơ ẩn sâu nhất (High threshold motor units) mà bình thường không với tới được.",
videoId: "8fXfwG4ftaQ"
},
{
name: "Chest Supported Row (Drop Set)",
sets: "3 hiệp x 8 reps -> Drop 30% -> Max reps",
target: "Lưng giữa, Độ dày lưng",
wrong: "Nhấc ngực khỏi ghế.",
right: "Kéo tạ sát sườn. Khi không kéo nổi nữa, thả tạ nặng, lấy tạ nhẹ hơn và kéo tiếp lập tức.",
fix: "Ghế nghiêng giúp loại bỏ sự tham gia của lưng dưới, cho phép bạn vắt kiệt cơ lưng giữa.",
videoId: "czoQ_ncuqqI"
},
{
name: "Zottman Curls",
sets: "3 hiệp x 10-12 reps",
target: "Nhị đầu và Cẳng tay (Quái vật cánh tay)",
wrong: "Xoay cổ tay khi đang đưa tạ lên.",
right: "Cuộn tạ lên với lòng bàn tay ngửa. Đỉnh điểm, xoay úp lòng bàn tay và hạ tạ chậm rãi đi xuống.",
fix: "Pha hạ tạ (Eccentric) với lòng bàn tay úp sẽ tra tấn cơ cẳng tay của bạn đến phát khóc.",
videoId: "D7bMA4WEKMI"
},
{
name: "Overhead Triceps Rope Extension",
sets: "3 hiệp x 12-15 reps (Super-set)",
target: "Đầu dài tay sau",
wrong: "Di chuyển cùi chỏ theo chiều kéo cáp.",
right: "Quay lưng lại với máy cáp. Vươn tay thẳng lên trời và ép dây thừng sang hai bên.",
fix: "Nên tập kết hợp (Superset) ngay sau bài tay trước để bơm máu tối đa vào bắp tay.",
videoId: "b5le--KkyH0"
}
]
},
{
day: "Buổi 6",
title: "Widowmaker Lower",
focus: "Thử thách địa ngục, Sức bền thần kinh chân",
icon: <Flame className="text-red-700" />,
exercises: [
{
name: "20-Rep Breathing Squat (Widowmaker)",
sets: "1 hiệp duy nhất x 20 reps",
target: "Đùi, Mông, Ý chí thép",
wrong: "Bỏ cuộc ở rep thứ 10. Bỏ tạ xuống giá.",
right: "Chọn mức tạ bằng 10RM của bạn. Đứng gánh tạ và thực hiện cho đủ 20 cái. Giữa mỗi cái được phép đứng thở 3-5 nhịp.",
fix: "Tuyệt đối không bỏ thanh tạ xuống. Hãy hít những hơi thở sâu, nén bụng và đẩy tiếp. Đây là bài kiểm tra bản lĩnh VĐV.",
videoId: "Qj0UtfzpWGM"
},
{
name: "GHD Raises (Glute Ham Raise)",
sets: "3 hiệp x 8-10 reps",
target: "Đùi sau (Hamstrings) đỉnh cao",
wrong: "Bẻ gập lưng dưới thay vì dùng đùi sau để kéo.",
right: "Khóa chặt chân. Duỗi thẳng người ra trước. Dùng sức gập của đùi sau và bắp chân để kéo toàn bộ cơ thể lên.",
fix: "Bài tập Bodyweight khủng khiếp nhất cho đùi sau. Nếu chưa đủ sức, hãy dùng tay chống nhẹ xuống đệm để hỗ trợ lên.",
videoId: "blX1If7ScxY"
},
{
name: "Hack Squat to Failure",
sets: "2 hiệp x Thất bại cơ bắp tuyệt đối",
target: "Giọt nước đùi trước (VMO)",
wrong: "Đẩy thẳng khóa gối.",
right: "Vào máy Hack Squat, đặt chân thấp. Hạ sâu hết cỡ để bắp chân chạm đùi sau.",
fix: "Hãy để cơ đùi cháy lên. Máy Hack Squat an toàn cho lưng nên bạn có thể thoải mái đẩy đến giới hạn cuối cùng.",
videoId: "g9i05umL5vc"
},
{
name: "Heavy Calf Raises on Leg Press",
sets: "4 hiệp x 10-15 reps (Giữ 2s ở đỉnh và đáy)",
target: "Sức mạnh bắp chân",
wrong: "Tập nhanh như cái máy khâu.",
right: "Dùng máy Leg Press chặn ngón chân. Đẩy tạ lên cực đại và giãn tạ sâu cực đại.",
fix: "Thêm thời gian chịu áp lực (Time under tension) là chìa khóa để bắp chân phát triển.",
videoId: "nDh_BlnLCGc"
}
]
}
];
