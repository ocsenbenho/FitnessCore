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

const App = () => {
const [activeDay, setActiveDay] = useState(0);
const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);

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
},
{
day: "Buổi 4",
title: "Nổ Đùi & Mông (Nâng Cao)",
focus: "Sức mạnh đơn phương (Unilateral) & bùng nổ",
icon: <Flame className="text-orange-600" />,
exercises: [
{
name: "Bulgarian Split Squat",
sets: "4 hiệp x 10 lần/chân",
target: "Đùi trước, Mông, Cân bằng",
wrong: "Đầu gối sau đâm thẳng xuống quá sâu. Bàn chân trước đặt quá gần hoặc quá xa ghế.",
right: "Lưng giữ thẳng, hơi nghiêng nhẹ về trước. Trọng tâm dồn vào gót chân trước khi đẩy lên.",
fix: "Để tìm khoảng cách chân chuẩn: Hãy ngồi lên mép ghế, duỗi thẳng 1 chân ra trước. Chỗ gót chân chạm đất chính là vị trí đặt chân lý tưởng.",
videoId: "uODWo4YqbT8"
},
{
name: "Kettlebell Swing",
sets: "4 hiệp x 15 lần",
target: "Đùi sau, Mông, Lườn",
wrong: "Dùng tay nâng tạ (như bài squat rồi vung tay). Cong lưng dưới.",
right: "Bản lề hông mạnh mẽ. Đẩy hông nhanh về phía trước để ép tạ văng lên. Tay chỉ đóng vai trò như sợi dây thừng.",
fix: "Hãy tưởng tượng bạn đang đẩy mạnh một cánh cửa đang bật mở bằng hông của mình, chứ không dùng tay nhấc tạ.",
videoId: "aSYap2yhW8s"
},
{
name: "Single Leg Glute Bridge",
sets: "3 hiệp x 12 lần/chân",
target: "Mông, Cơ dựng cột sống (Đơn)",
wrong: "Đẩy hông quá cao làm võng thắt lưng. Lắc lư khung xương chậu hai bên.",
right: "Mông gồng cứng đưa chân và thân lên thành đường thẳng. Giữ xương chậu thăng bằng cân xứng.",
fix: "Giữ gót chân làm trụ thật sát vào mông. Tưởng tượng một ly nước đặt trên bụng không được đổ.",
videoId: "n1IZ168x2Bw"
}
]
},
{
day: "Buổi 5",
title: "Core Toàn Diện (Tiên Tiến)",
focus: "Kiểm soát lõi tuyệt đối & chống xoay hông",
icon: <ShieldCheck className="text-indigo-500" />,
exercises: [
{
name: "Hollow Body Hold",
sets: "4 hiệp x 30 giây",
target: "Cơ bụng sâu, Toàn bộ hệ core",
wrong: "Lưng dưới tạo khoảng trống với mặt sàn. Sập vai, không gồng cơ bụng cong.",
right: "Lưng dưới áp chặt xuống sàn thành hình vành cung (thuyền). Hai tay hai chân duỗi thẳng vươn dài.",
fix: "Nếu lưng bị hõm lên, hãy giơ chân cao hơn một chút hoặc co gối lại cho đến khi kiểm soát được thắt lưng chạm sàn.",
videoId: "nDvUp4iAosU"
},
{
name: "Russian Twist",
sets: "4 hiệp x 20 lần",
target: "Cơ liên sườn (Obliques)",
wrong: "Chỉ đung đưa hai tay sang hai bên trong khi thân người đứng im. Cong gập cổ quá mức.",
right: "Xoay toàn bộ thân trên (vai đi theo tay). Giữ chân thăng bằng không chạm đất.",
fix: "Hãy nhìn theo bàn tay khi bạn xoay để đảm bảo toàn bộ lồng ngực xoay theo chứ không chỉ có cùi chỏ.",
videoId: "KUsvxlmpPoI"
},
{
name: "Bear Crawl (Bò gấu)",
sets: "4 hiệp x 40 giây",
target: "Core động, Vai, Thể lực",
wrong: "Mông nhô lên quá cao như chóp núi. Hông lắc lư trái phải biên độ lớn khi bò.",
right: "Đầu gối chỉ cách mặt đất khoảng 3-5cm. Lưng phẳng như bàn. Core siết chặt duy trì thăng bằng.",
fix: "Giả lập một mâm cỗ đặt trên lưng, mục tiêu bò tiến/lùi mà mâm cỗ không được rơi.",
videoId: "M1LgdyUDLsc"
}
]
},
{
day: "Buổi 6",
title: "Stamina Bứt Tốc (HIIT)",
focus: "Sức bền tim mạch tột độ & Đốt Calo",
icon: <Activity className="text-red-500" />,
exercises: [
{
name: "Burpees",
sets: "4 hiệp x 10-15 lần",
target: "Toàn thân, Tim mạch phổi",
wrong: "Võng lưng rớt hông khi nhảy ra sau. Cúi gập người để chống tay thay vì squat xuống.",
right: "Squat sâu xuống để đặt tay. Phóng hai chân ra sau về tư thế Plank chuẩn, hít đất, nhảy rập và bật cao.",
fix: "Người mới không cần hít đất (dùng Sprawl) và có thể bước từng chân ra sau thay vì nhảy nhảy.",
videoId: "zlYA1SENYG4"
},
{
name: "High Knees",
sets: "4 hiệp x 40 giây",
target: "Sức bật, Nhịp tim cao",
wrong: "Đầu gối nâng quá thấp. Đổ người ngả ra phía sau.",
right: "Lưng thẳng hơi chúi nhẹ về phía trước vài độ. Nâng gối cao ít nhất ngang thắt lưng. Tiếp đất êm bằng mũi chân.",
fix: "Sử dụng tay vung nhịp nhàng ngược với gối để duy trì thăng bằng và tạo đà chạy bốc hơn.",
videoId: "0X0Q8wKLEfo"
},
{
name: "Jump Squat",
sets: "4 hiệp x 15 lần",
target: "Đùi, Bắp chân, Sức mạnh bùng nổ",
wrong: "Rơi tự do uỵch xuống sàn gây chấn thương khớp gối. Tiếp đất bằng cả bàn chân gầm thịch.",
right: "Dùng lực mông đẩy bật lên cao. Khi rơi xuống, mũi chân chạm trước rồi mới tới gót, vào tư thế squat ngay lập tức để giảm xóc.",
fix: "Hãy cố gắng nhảy cao nhất có thể nhưng khi tiếp đất phải hoàn toàn không phát ra tiếng động nào.",
videoId: "LNeXr1IMsJ0"
}
]
},
{
day: "Buổi 7",
title: "Trị Liệu & Lưng Khoẻ",
focus: "Giãn cơ, giảm đau và củng cố toàn bộ vùng thắt lưng",
icon: <Info className="text-sky-500" />,
exercises: [
{
name: "Cat-Cow Stretch (Bò - Mèo)",
sets: "3 hiệp x 12 lần (Thở chậm)",
target: "Cột sống, Lưng dưới, Lõi",
wrong: "Gập cổ quá sâu hoặc ngửa cổ chĩa cằm gắt lên trần làm mỏi đốt sống cổ. Làm quá nhanh mất kiểm soát.",
right: "Di chuyển nhịp nhàng theo hơi thở (Hít vào võng lưng - Thở ra gù lưng). Đẩy cao lồng ngực khỏi mặt sàn.",
fix: "Bài này là để mát-xa cột sống. Hãy hình dung từng đốt sống lưng đang cuộn và giãn nở nhẹ nhàng.",
videoId: "2of247Kt0tU"
},
{
name: "Superman Hold",
sets: "4 hiệp x 20-30 giây",
target: "Cơ dựng cột sống, Lưng dưới, Mông",
wrong: "Ép gáy quá ngưỡng (ngóc đầu lên). Dùng đà văng giật cánh tay và chân lên cùng lúc.",
right: "Mắt nhìn xuống sàn để cổ thả lỏng. Từ từ nhắc ngực và đùi khỏi sàn bằng cách gồng mông và lưng dưới.",
fix: "Tưởng tượng bạn đang vươn hai tay ra đằng trước xa nhất có thể thay vì chỉ tập trung nhấc cao lên trời.",
videoId: "NmTKtiJfTOA"
},
{
name: "Child's Pose (Tư thế em bé)",
sets: "3 hiệp x 45-60 giây",
target: "Giãn thắt lưng, Thư giãn thần kinh",
wrong: "Gồng ép lồng ngực, nín thở để cố vươn tay. Nhấc hông nằm lơ lửng không ép vào gót chân.",
right: "Hạ toàn bộ hông ngồi đè lên gót chân. Thả lỏng trán tựa vào thảm. Vươn tay dài thoải mái.",
fix: "Xoè rộng hai đầu gối sang hai bên sẽ giúp ngực chìm sâu xuống sàn hơn, giãn lưng dưới sướng hơn.",
videoId: "AgwjXQJqfYo"
}
]
},
{
day: "Buổi 8",
title: "Thân Trên Toàn Diện",
focus: "Ngực, Vai, Lưng xô và Kiểm soát cơ core tĩnh",
icon: <Flame className="text-orange-500" />,
exercises: [
{
name: "Push Ups (Hít đất)",
sets: "4 hiệp x 8-15 lần",
target: "Ngực, Vai trước, Tay sau",
wrong: "Khuỷu tay xoè rộng sang hai bên tạo góc 90 độ. Võng lưng rớt hông khi đẩy lên.",
right: "Lưng và mông siết chặt thành đường thẳng. Khuỷu tay khép lại tạo góc 45 độ so với thân người.",
fix: "Hít đất không chỉ là tập ngực - nó là một bài Plank di động. Hãy gồng chặt mông và đùi trước khi hạ ngực xuống.",
videoId: "UIcct-7b6oE"
},
{
name: "Prone YTW",
sets: "3 hiệp x 15 lần",
target: "Vai sau, Chóp xoay, Lưng giữa",
wrong: "Nhấc ngực quá cao khỏi mặt sàn. Dùng đà quăng tay mạnh về sau.",
right: "Trán chạm sàn. Gồng chặt bả vai để ép cánh tay tạo thành các chữ Y, T, W.",
fix: "Ép chặt hai xương bả vai lại với nhau ở điểm cao nhất (như đang kẹp một cây bút chì giữa lưng).",
videoId: "HvdLRWBprws"
},
{
name: "Plank Shoulder Taps",
sets: "3 hiệp x 20 lần (Cả 2 bên)",
target: "Core chống xoay, Vai, Thăng bằng",
wrong: "Hông lắc lư dữ dội sang hai bên mỗi khi nhấc tay lên. Mất thăng bằng.",
right: "Hông giữ vững song song với mặt sàn như bị đóng băng. Chuyển tay chậm và kiểm soát.",
fix: "Dang rộng hai chân bằng vai hoặc hơn một chút sẽ giúp tạo chân đế vững vàng, khoá chặt eo dễ hơn.",
videoId: "eyeuugrpLYA"
}
]
},
{
day: "Buổi 9",
title: "Chân Động Tiên Tiến",
focus: "Đùi trong, Mông và Chuyển động đa chiều",
icon: <Activity className="text-red-500" />,
exercises: [
{
name: "Lateral Lunges",
sets: "4 hiệp x 10 lần/chân",
target: "Đùi trong, Mông, Khớp hông",
wrong: "Đầu gối đâm về trước quá đà thay vì đẩy mông ra sau. Lưng gù gập xuống sàn.",
right: "Bước chân sang ngang, đẩy mông lùi về sau như đang ngồi lên chiếc ghế. Chân trụ giữ thẳng.",
fix: "Xoay nhẹ mũi chân của chân lunge ra ngoài khoảng 15 độ để đầu gối di chuyển mượt mà hơn.",
videoId: "8ANwlFziwtk"
},
{
name: "Step Ups",
sets: "4 hiệp x 10 lần/chân",
target: "Đùi trước, Mông (Sức mạnh đơn)",
wrong: "Dùng chân ở dưới đất để 'nhún rập' quăng đà đẩy người lên. Đổ thân quá xa về sau.",
right: "Ngả nhẹ người tới trước 10-15 độ. Dùng 100% sức kéo của chân CÓ ở trên ghế để đạp lên.",
fix: "Nhấc cất ngón chân của bàn chân dưới đất lên trời trước khi đẩy sức để vô hiệu hóa lực lún.",
videoId: "PzDbmqL6qo8"
},
{
name: "Skater Jumps",
sets: "4 hiệp x 30 giây",
target: "Sức bật ngang, Tim mạch, Mông hai bên",
wrong: "Khoảng cách nhảy quá ngắn. Thân người cứng đờ không nhấp nhô nhún nhảy.",
right: "Nhảy vọt ngang mạnh mẽ hai bên. Vào tư thế khuỵu gối để hãm xung, chân sau vắt nhẹ sang đối diện.",
fix: "Tưởng tượng bạn là một vận động viên trượt băng: Đạp mạnh - Bay vút - Bám dính và giữ vững mặt sàn.",
videoId: "IkGOdk2VDJw"
}
]
},
{
day: "Buổi 10",
title: "Giãn Cơ Phục Hồi",
focus: "Linh hoạt vùng hông, bảo vệ khớp và hồi phục",
icon: <Info className="text-sky-500" />,
exercises: [
{
name: "World's Greatest Stretch",
sets: "3 hiệp x 5 lần/chân",
target: "Toàn thân, Hông mở rộng",
wrong: "Tập quá nhanh lướt qua các điểm cần giãn. Gù quặp lưng quá mức.",
right: "Giữ gối gót chân sau căng nảy khỏi mặt đất. Đưa cùi chỏ sát vào cổ chân trước rồi vươn tay nhìn trần.",
fix: "Mỗi khi đến một điểm giới hạn, hãy thở hắt ra thật sâu để hệ thần kinh trung ương ra lệnh thư giãn cơ bắp.",
videoId: "-CiWQ2IvY34"
},
{
name: "Downward Dog to Cobra",
sets: "3 hiệp x 10 chu kỳ",
target: "Lưng sau, Vai, Ngực, Cột sống",
wrong: "Ép gót chân xuống sàn bằng mọi giá khiến khung chậu gù lưng. Ngửa cổ gắt quá mức gây nguy cơ chấn thương.",
right: "Vuốt thẳng lumbars ở Downward Dog (mông nhô lên cao nhất). Từ từ lòn sóng trườn xuống và ưỡn ngực lên Cobra.",
fix: "Nếu gân kheo (sau đùi) quá cứng cỏi, hãy hơi cong nhẹ hai đầu gối. Ưu tiên số 1 là đẩy ngực giải lưng.",
videoId: "-blQ3If_HEI"
},
{
name: "90/90 Hip Stretch",
sets: "3 hiệp x 1 phút/bên",
target: "Khớp háng, Mông, Cải thiện dáng đi",
wrong: "Kê gối lệch bậy bạ không đủ 90 độ. Gập lưng xuống uốn cong (C-shape).",
right: "Hai đùi vế tạo 2 góc vuông hoàn hảo dưới sàn. Rướn ngược phần ngực xuống thẳng tới cẳng chân.",
fix: "Tưởng tượng như ép 2 đầu gối xuống sàn lực cực mạnh 10s rồi nhả lỏng, thả nhẹ cả sức nặng đè lên cẳng bộ.",
videoId: "QxQDEH2KXps"
}
]
},
{
day: "Buổi 11",
title: "Core Đứng Từ Xa",
focus: "Bụng đứng, Eo và sức mạnh Lưng dưới tĩnh",
icon: <ShieldCheck className="text-emerald-500" />,
exercises: [
{
name: "Standing Wood Chop",
sets: "3 hiệp x 15 lần/bên",
target: "Xiên bụng, Sức mạnh xoắn",
wrong: "Hai tay bẻ ngoặt ra đằng sau gây hỏng hệ khung xương. Không xoay hướng chân trụ.",
right: "Khóa chặt hông đùi, chỉ lồng ngực xoay vặn theo phương xiên kéo mộc. Hai cánh tay vững chắc.",
fix: "Xoay nhẹ cái gót chân rướn qua để tạo cảm giác xoắn thân trên mạnh nhất.",
videoId: "OgQU_bbdB7c"
},
{
name: "Good Mornings",
sets: "4 hiệp x 12 lần",
target: "Đùi sau (Hamstrings), Lưng dưới (Erector Spinae)",
wrong: "Cúi gập lưng cong hình con tôm. Khuỵu gối y hệt như bài chùng gối - sai trầm trọng.",
right: "Hé nhẹ khớp gối vài nanomet để tránh tổn thương khớp, vươn dài mông đập mạnh ra sau tới khi lưng vươn phẳng như mặt bàn.",
fix: "Hãy mường tượng 1 bàn tay bạn đặt hững hờ sau gáy, hông là bản lề cánh cửa, lưng diệt trừ không suy chuyển.",
videoId: "sAAn3y-qxP4"
},
{
name: "Standing Cross Crunch",
sets: "4 hiệp x 20 lần",
target: "Cơ bụng toàn diện (Cardio-Core)",
wrong: "Cố gập cổ chúc chích dọng mũi đập vào đùi thay vì giục đầu gối phóng cao.",
right: "Quạt gối chấn mạnh bay cắt chéo lên. Lồng ngực vặn uốn gắt lấy cùi chỏ khóa lấy đích đầu gối kia.",
fix: "Ở khoảnh khắc chạm tiếp ứng cao này, thở dồn nén ra y như đấm túi cát để lườn quặn cực hạn.",
videoId: "aQFLVDY0DMU"
}
]
},
{
day: "Buổi 12",
title: "Cường Độ Cao Vòng Lặp",
focus: "Tim mạch tột độ, Đốt Calo tổng hợp (AMRAP)",
icon: <Activity className="text-red-600" />,
exercises: [
{
name: "Thrusters",
sets: "4 hiệp x 10 lần",
target: "Đùi trước, Vai, Toàn Thân",
wrong: "Lẩy tay lên ngang ngửa đùi đẩy trước khi hông kích nổ đủ biên độ. Phá nhịp thở nối đoạn.",
right: "Lặn sâu bằng Squat nảy bật chỏ. Xực toàn lực mông đùi kéo gót đứng dậy xả tạ xuyên thấu nóc nhà trần vách.",
fix: "Quán triệt đây là 1 chuyển hoán truyền động nguyên khối từ lòng bàn chân xả bắn vào bàn tay.",
videoId: "qnOikHllwWc"
},
{
name: "Renegade Rows",
sets: "4 hiệp x 10 lần/bên",
target: "Lưng xô, Core cân bằng dưới tạ",
wrong: "Lật tráo chậu xương nghiêng lả lướt để lấy gia tốc đà quăng cho tạ.",
right: "Hãm chân ngang bửa sàn bê tông. Siết mông chằng đai 100% khi lần lượt nhặt bứt rút tạ vào xô lườn.",
fix: "Mọi trọng điểm ăn tiền nhất nằm ở sự đóng đinh tuyệt đối của hai gót chân, đừng xót sức căng bụng đùi nhé.",
videoId: "0lj8lL2p9Z0"
},
{
name: "Burpee Broad Jump",
sets: "4 hiệp x 8 lần",
target: "Thể lực yếm khí, Đùi trước",
wrong: "Trèo thó leo chậm chạp không tạo ra nhịp thở. Chường mũi tiếp đất ngắn ngủi.",
right: "Đạp cút chống bằng Pushup chuẩn. Thu đùi về tư thế như chú ếch và tung phốc lao xa.",
fix: "Sốc vung cặp tay thật đanh thép như xông vách chướng ngại vật trước khi thu hạ thân.",
videoId: "xaBTCkqiUKo"
}
]
}
];

const handleDayChange = (idx) => {
setActiveDay(idx);
setActiveExerciseIdx(0); // Reset exercise selection when switching tabs
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
