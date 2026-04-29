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
    Target,
    Wind,
    Droplets,
    Leaf
} from 'lucide-react';

const FALLBACK_VIDEO = "rT7DgCr-3pg";

export const mobilityPlan = [
{
day: "Buổi 1",
title: "Morning Flow",
focus: "Đánh thức cơ thể, Toàn thân cơ bản (Mức độ: ⭐)",
icon: <Wind className="text-sky-500" />,
exercises: [
{
name: "Cat-Cow Stretch",
sets: "2 hiệp x 10-12 lần chuyển đổi",
target: "Cột sống, Thắt lưng, Cổ",
wrong: "Gập/Ưỡn lưng quá nhanh hoặc dùng lực cánh tay để đẩy người.",
right: "Bắt đầu ở tư thế bò. Hít vào, võng lưng, ngẩng đầu (Cow). Thở ra, cuộn tròn cột sống lên cao, gập cằm (Cat). Chuyển động chậm theo nhịp thở.",
fix: "Hãy tưởng tượng cột sống của bạn là một sợi xích, hãy uốn cong từng mắt xích một từ xương cụt lên đến đỉnh đầu.",
videoId: "2of247Kt0tU"
},
{
name: "World's Greatest Stretch",
sets: "2 hiệp x 5 lần/mỗi bên (Giữ 3s)",
target: "Khớp háng, Lưng giữa, Đùi sau",
wrong: "Chân sau co gập chạm đất. Xoay người quá hẹp.",
right: "Bước một bước lunge thật dài. Đặt tay cùng bên gót chân trước xuống sàn. Vươn tay còn lại thẳng lên trần nhà và xoay ngực nhìn theo tay.",
fix: "Bài tập vua của Mobility. Hãy cố gắng ép hông chìm sâu xuống sàn nhà mỗi khi bạn thở ra.",
videoId: "-CiWQ2IvY34"
},
{
name: "Neck Circles & Tilts",
sets: "2 hiệp x 5 vòng mỗi hướng",
target: "Cổ, Vai gáy",
wrong: "Xoay quá nhanh, giật cục hoặc ngửa cổ ra sau quá sâu gây chèn ép mạch máu.",
right: "Thả lỏng hai vai. Xoay đầu thật chậm thành một vòng tròn lớn nhất có thể. Nếu đau, hãy bỏ qua điểm đó.",
fix: "Đừng dùng lực gồng cổ. Hãy tưởng tượng bạn đang dùng mũi để vẽ một hình tròn khổng lồ trên bức tường phía trước.",
videoId: "-dXpizOGkxI"
},
{
name: "Arm Circles & Band Pull-Aparts",
sets: "2 hiệp x 15 lần",
target: "Khớp vai, Khớp bả vai",
wrong: "Rụt cổ, nhún vai lên mang tai khi xoay tay.",
right: "Giữ vai thấp. Xoay cánh tay thành vòng tròn từ nhỏ đến lớn. Nếu có dây chun, kéo giãn dây sang hai bên ngực.",
fix: "Cảm nhận sự chuyển động của hai xương bả vai (bóp vào nhau và mở xa nhau) thay vì chỉ vung cánh tay.",
videoId: "SuvO4TBwSu4"
}
]
},
{
day: "Buổi 2",
title: "Giải Cứu Cột Sống",
focus: "Giảm đau mỏi vai gáy, Thắt lưng (Mức độ: ⭐)",
icon: <Droplets className="text-blue-400" />,
exercises: [
{
name: "Child's Pose",
sets: "3 hiệp x Giữ 30-45 giây",
target: "Lưng dưới, Lưng xô",
wrong: "Cố ép ngực xuống sàn làm võng lưng dưới quá mức.",
right: "Quỳ gối, ngồi mông chạm gót chân. Vươn hai tay thẳng ra xa phía trước, trán chạm sàn. Thả lỏng toàn thân.",
fix: "Để kéo giãn thêm xô, hãy bò hai bàn tay sang bên trái (kéo giãn xô phải) và ngược lại.",
videoId: "_ZX_zTOBgp8"
},
{
name: "Thread the Needle",
sets: "2 hiệp x 8 lần/mỗi bên",
target: "Lưng giữa (Thoracic Spine), Vai sau",
wrong: "Chỉ luồn tay mà không xoay vặn lồng ngực.",
right: "Tư thế bò. Luồn một tay qua dưới nách tay kia, trượt dài trên sàn cho đến khi vai chạm đất. Xoay ngực lên trần.",
fix: "Giữ cho hông cố định không bị lệch sang một bên, tập trung toàn bộ sự vặn xoắn vào phần lưng giữa.",
videoId: "gyew25Vaqj8"
},
{
name: "Cobra Stretch",
sets: "3 hiệp x Giữ 20 giây",
target: "Bụng, Lưng dưới",
wrong: "Gồng vai, rụt cổ. Đẩy tay quá thẳng làm gập thắt lưng gây đau.",
right: "Nằm sấp. Đặt tay cạnh ngực, từ từ đẩy phần thân trên lên. Giữ cùi chỏ hơi cong, hông vẫn chạm sàn.",
fix: "Siết nhẹ cơ mông để bảo vệ phần thắt lưng dưới khi bạn ngửa người lên cao.",
videoId: "NP4PrPHpQIE"
},
{
name: "Supine Spinal Twist",
sets: "2 hiệp x Giữ 30 giây/mỗi bên",
target: "Cột sống thắt lưng",
wrong: "Nhấc vai đối diện lên khỏi mặt sàn.",
right: "Nằm ngửa. Co một đầu gối và kéo nó chéo qua cơ thể sang bên kia. Dang thẳng tay còn lại sang ngang.",
fix: "Hãy để trọng lực làm việc. Mỗi lần thở ra, thả lỏng đầu gối cho nó chìm sâu xuống sàn hơn một chút.",
videoId: "ElKoMMaTPCM"
}
]
},
{
day: "Buổi 3",
title: "Mở Khớp Háng",
focus: "Cải thiện Squat, Giảm đau lưng (Mức độ: ⭐⭐)",
icon: <Leaf className="text-emerald-500" />,
exercises: [
{
name: "90/90 Hip Stretch",
sets: "2 hiệp x Giữ 30s + 5 lần nhấc chân",
target: "Khớp háng (Xoay trong & Xoay ngoài)",
wrong: "Cố gập người sát đất khiến lưng bị gù cong tôm.",
right: "Ngồi trên sàn, hai chân tạo thành hai góc 90 độ (một trước, một bên). Giữ lưng thẳng hàng và rướn người tới trước.",
fix: "Hãy rướn phần RỐN của bạn về phía đầu gối chân trước thay vì rướn cằm, bạn sẽ thấy đùi ngoài căng buốt.",
videoId: "VYvMMw8z3rE"
},
{
name: "Asian Deep Squat Hold",
sets: "3 hiệp x Giữ 45-60 giây",
target: "Khớp cổ chân, Khớp háng, Cột sống",
wrong: "Nhón gót chân, cụp đuôi (Butt wink) hoặc gù lưng trên.",
right: "Ngồi xổm sâu hết cỡ với hai gót chân chạm hẳn trên sàn. Dùng hai cùi chỏ đẩy hai đầu gối mở rộng ra.",
fix: "Nếu gót chân bị nhấc lên, hãy kê hai quyển sách mỏng dưới gót chân để giữ thăng bằng và tập dần.",
videoId: "6R6X6-qVjRE"
},
{
name: "Cossack Squats",
sets: "2 hiệp x 8 lần/mỗi chân",
target: "Đùi trong (Adductors), Khớp háng",
wrong: "Nhấc gót chân trụ, đổ người về trước quá nhiều.",
right: "Đứng dang rộng chân. Ngồi xổm lệch hẳn sang một bên, chân kia duỗi thẳng đứng với gót chân chạm đất, mũi chân hướng lên trời.",
fix: "Dùng tay chạm đất để giữ thăng bằng nếu bạn chưa quen. Mục tiêu là ngồi thấp nhưng thân người vẫn vươn thẳng.",
videoId: "2BdmWht-38k"
},
{
name: "Pigeon Pose",
sets: "3 hiệp x Giữ 45 giây/mỗi bên",
target: "Cơ mông, Cơ hình lê (Piriformis)",
wrong: "Ngả người sang một bên đùi thay vì úp hông thẳng xuống sàn.",
right: "Từ tư thế bò, gập một gối đưa lên trước, cẳng chân nằm ngang. Úp phần hông và chân còn lại thẳng xuống sàn.",
fix: "Nếu cơ mông quá cứng và không úp hông được, hãy lót một cái chăn mỏng ngay dưới mông của chân đang gập.",
videoId: "AI5A1PRYX7E"
}
]
},
{
day: "Buổi 4",
title: "Mở Lồng Ngực & Vai",
focus: "Sửa tư thế lưng gù, Cải thiện Pressing (Mức độ: ⭐⭐)",
icon: <Wind className="text-teal-400" />,
exercises: [
{
name: "Wall Angels",
sets: "3 hiệp x 10-12 lần",
target: "Lưng trên, Mở ngực, Vai",
wrong: "Lưng dưới võng lên không chạm tường. Tay nhấc khỏi tường khi đẩy lên.",
right: "Đứng dựa sát tường (gót chân, mông, lưng trên, và ĐẦU chạm tường). Giơ hai tay vuông góc ép sát tường và đẩy lên cao.",
fix: "Bài tập này nhìn rất dễ nhưng cực kỳ khó nếu bạn bị gù. Ưu tiên ép chặt lưng dưới vào tường trước khi cố đưa tay lên cao.",
videoId: "xg5fYtn305I"
},
{
name: "Prone Swimmers",
sets: "3 hiệp x 10 lần",
target: "Toàn bộ cơ vai, Bả vai",
wrong: "Ngẩng đầu lên cao hoặc giật cục khi chuyển động.",
right: "Nằm sấp, trán chạm sàn. Đưa hai tay ra sau lưng, rồi xoay một vòng tròn lớn đưa hai tay qua đầu (như bơi ếch trên cạn).",
fix: "Hãy cố gắng nhấc bàn tay cao cách mặt sàn khoảng 5cm trong toàn bộ quỹ đạo xoay.",
videoId: "zauTEhTdN0I"
},
{
name: "PVC Pipe Dislocates",
sets: "3 hiệp x 15 lần",
target: "Tăng biên độ xoay khớp vai",
wrong: "Cầm gậy quá hẹp khiến cùi chỏ phải cong lại để vòng qua đầu.",
right: "Cầm một cây gậy (hoặc khăn/dây chun) rộng tay. Cánh tay thẳng tắp, vòng gậy từ bụng qua đầu ra sau lưng.",
fix: "Từ từ thu hẹp khoảng cách tay cầm lại sau mỗi vài tuần khi khớp vai của bạn đã trở nên dẻo dai hơn.",
videoId: "-avWRzrrH-o"
},
{
name: "Doorway Pec Stretch",
sets: "3 hiệp x Giữ 30 giây/mỗi bên",
target: "Cơ ngực lớn, Ngực nhỏ",
wrong: "Rướn cổ về trước hoặc xoay hông thay vì xoay ngực.",
right: "Đặt cùi chỏ vuông góc vào khung cửa. Bước một chân lên trước và xoay lồng ngực ra xa khỏi khung cửa.",
fix: "Thay đổi góc của cùi chỏ (Cao hơn hoặc thấp hơn vai) để kéo giãn các bó cơ ngực ở những góc độ khác nhau.",
videoId: "B9uY01NoqBg"
}
]
},
{
day: "Buổi 5",
title: "Animal Flow",
focus: "Phối hợp thần kinh, Di chuyển tự do (Mức độ: ⭐⭐⭐)",
icon: <Activity className="text-orange-500" />,
exercises: [
{
name: "Bear Crawl",
sets: "3 hiệp x Bò 10m tới, 10m lùi",
target: "Core, Vai, Sự phối hợp",
wrong: "Nhấc mông quá cao. Đẩy gối ra xa khỏi sàn nhà.",
right: "Tư thế bò tứ chi, gối nhấc cách sàn nhà đúng 2cm. Lưng phẳng như cái bàn. Di chuyển tay này và chân kia cùng lúc.",
fix: "Tưởng tượng bạn đang đặt một ly nước đầy trên lưng, hãy bò sao cho ly nước không bị đổ.",
videoId: "LCVMqEmgglo"
},
{
name: "Crab Reach",
sets: "3 hiệp x 5 lần/mỗi bên",
target: "Mặt trước cơ thể (Cơ lõi, Khớp háng, Vai)",
wrong: "Không đẩy mông lên cao tối đa.",
right: "Ngồi tư thế cua (chống tay và chân). Đạp gót nâng mông lên cao hết cỡ, một tay trụ, tay kia vươn dài qua đầu lộn ngược ra sau.",
fix: "Mắt nhìn theo bàn tay trụ dưới đất để bảo vệ đốt sống cổ và giúp bạn rướn người sâu hơn.",
videoId: "BgNUcl8fYVM"
},
{
name: "Ape Walk",
sets: "3 hiệp x 10m di chuyển ngang",
target: "Khớp háng, Tính linh hoạt ngang",
wrong: "Ngồi xổm quá cao. Dùng lực nhảy bật thay vì kiểm soát hạ cánh.",
right: "Ngồi tư thế Deep Squat. Chống hai tay sang một bên, dồn trọng lượng vào tay và nhún chân nhảy lướt theo tay.",
fix: "Hạ cánh thật êm bằng mũi chân rồi mới đến gót chân, giữ cho hông luôn nằm ở vị trí thấp.",
videoId: "go6nl9zaW9Y"
},
{
name: "Scorpion Reach",
sets: "2 hiệp x 5 lần/mỗi bên",
target: "Chuỗi cơ chéo, Cột sống, Lưng dưới",
wrong: "Xoay hông quá vội làm mất thăng bằng tay chống.",
right: "Từ tư thế Push-up, co một gối về phía đối diện, sau đó đá vòng gót chân đó lên cao qua lưng theo hình đuôi bọ cạp.",
fix: "Chuyển động phải cực kỳ mượt mà. Hãy để trọng lượng của cái chân đang đá kéo lồng ngực của bạn vặn theo một cách tự nhiên.",
videoId: "xbRyRvwQXCc"
}
]
},
{
day: "Buổi 6",
title: "Deep Mastery",
focus: "Kiểm soát sâu, Xoạc chân, Ép dẻo (Mức độ: ⭐⭐⭐⭐)",
icon: <Flame className="text-red-500" />,
exercises: [
{
name: "Pancake Stretch",
sets: "4 hiệp x Giữ 45 giây",
target: "Khớp háng, Đùi trong, Lưng dưới",
wrong: "Gù lưng để cố ép trán xuống sàn.",
right: "Ngồi dang hai chân rộng hình chữ V. Giữ lưng thẳng đứng, rướn RỐN và NGỰC về phía trước chạm mặt sàn.",
fix: "Bí quyết là cuộn xương chậu (Anterior pelvic tilt). Hãy kê một tấm đệm mỏng dưới mông để dễ dàng cuộn hông tới trước hơn.",
videoId: "CHRUb43S6RM"
},
{
name: "Front Splits Progressions",
sets: "4 hiệp x Giữ 30-45 giây/mỗi chân",
target: "Đùi trước, Đùi sau, Khớp háng",
wrong: "Xoay hông mở ra ngoài (Lệch hông).",
right: "Một chân trượt ra trước, một chân trượt ra sau. Giữ hai gai hông luôn cân bằng hướng thẳng về phía trước (Square hips).",
fix: "Dùng hai khối gạch Yoga chống hai tay để đỡ trọng lượng cơ thể nếu bạn chưa thể hạ sát xuống sàn.",
videoId: "EQsf4Bw-PDM"
},
{
name: "Full Bridge",
sets: "3 hiệp x Giữ 10-15 giây",
target: "Mở ngực cực đại, Uốn dẻo cột sống",
wrong: "Dồn toàn bộ áp lực bẻ cong vào thắt lưng dưới thay vì lồng ngực.",
right: "Nằm ngửa, gập gối. Chống hai tay ngược về phía vai. Đạp mạnh chân và đẩy thẳng tay nâng cơ thể uốn cong như cây cầu.",
fix: "Hãy cố gắng đẩy ngực qua khỏi đường thẳng của cùi chỏ (hướng về phía bức tường sau đầu) để mở phần lưng trên.",
videoId: "tSvmWU-0Zo0"
},
{
name: "Jefferson Curl",
sets: "3 hiệp x 8-10 reps (Dùng tạ siêu nhẹ)",
target: "Kéo dãn dây thần kinh tọa, Sức bền cột sống",
wrong: "Xuống tạ quá nặng và quá nhanh.",
right: "Cầm tạ đơn siêu nhẹ (2-5kg). Cúi gập cằm, cuộn tròn từng đốt sống cổ, ngực, thắt lưng xuống dưới tận cùng.",
fix: "Đứng trên bục để tạ có thể đi sâu hơn mũi chân. Khi lên, hãy cuộn ngược lại từ dưới thắt lưng lên cổ cuối cùng. Lưng sẽ thẳng như dây dọi.",
videoId: "rJfehSZOZyU"
}
]
}
];
