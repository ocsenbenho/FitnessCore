import React from 'react';
import {
    Activity,
    AlertTriangle,
    CheckCircle,
    Lightbulb,
    Flame,
    ShieldCheck,
    Footprints,
    Info
} from 'lucide-react';

export const workoutPlan = [
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
wrong: "Gót chân nhấc khỏi sàn. Đầu gối sập/chụm vào trong. Cuộn hông (cụp xương cụt) khi xuống quá sâu.",
right: "Trọng lượng dồn đều 3 điểm bàn chân. Đầu gối mở theo hướng mũi chân. Lưng thẳng tự nhiên.",
fix: "Hãy tưởng tượng bạn đang ngồi lùi mông xuống một chiếc ghế ở phía sau chứ không phải gập đầu gối chúi về trước.",
videoId: "lRYBbchqxtI"
},
{
name: "Dumbbell Lunges (Chùng chân)",
sets: "3 hiệp x 10 lần/chân",
target: "Đùi trước, Đùi sau, Mông",
wrong: "Đầu gối chân trước đẩy về trước quá xa vượt mũi chân gây nhấc gót. Mất thăng bằng, đổ người về trước quá nhiều.",
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
wrong: "Võng lưng dưới (rớt hông). Nhô mông lên quá cao. Cúi gập cổ nhìn vào bụng.",
right: "Thân người thành một đường thẳng như tấm ván. Khuỷu tay ngay dưới vai. Mắt nhìn xuống tay.",
fix: "Hơi cuộn xương chậu về phía rốn và gồng chặt cơ bụng để giữ thẳng lưng.",
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
title: "Bùng Nổ Đùi & Mông (Nâng Cao)",
focus: "Sức mạnh từng bên (Unilateral) & bùng nổ",
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
title: "Core Toàn Diện (Nâng Cao)",
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
title: "Phục Hồi & Lưng Khỏe",
focus: "Giãn cơ, giảm đau và củng cố toàn bộ vùng thắt lưng",
icon: <Info className="text-sky-500" />,
exercises: [
{
name: "Cat-Cow Stretch (Bò - Mèo)",
sets: "3 hiệp x 12 lần (Thở chậm)",
target: "Cột sống, Lưng dưới, Lõi",
wrong: "Gập cổ quá sâu hoặc ngửa cằm quá cao lên trần làm mỏi đốt sống cổ. Làm quá nhanh mất kiểm soát.",
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
title: "Chân Động Nâng Cao",
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
wrong: "Kê gối lệch, không tạo đủ góc 90 độ. Gập lưng uốn cong (C-shape) khi gập người.",
right: "Hai đùi tạo thành 2 góc vuông hoàn hảo trên sàn. Rướn thẳng ngực hướng xuống cẳng chân.",
fix: "Tưởng tượng ép mạnh 2 đầu gối xuống sàn trong 10 giây rồi thả lỏng, sau đó thả dần sức nặng lên cẳng chân.",
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
wrong: "Hai tay bẻ gập ra sau quá mức gây áp lực lên cột sống. Không xoay chân trụ theo nhịp.",
right: "Cố định hông và đùi, chỉ xoay vặn lồng ngực theo phương chéo. Giữ hai cánh tay vững chắc.",
fix: "Xoay nhẹ gót chân theo hướng vặn người để tạo lực xoắn thân trên hiệu quả nhất.",
videoId: "OgQU_bbdB7c"
},
{
name: "Good Mornings",
sets: "4 hiệp x 12 lần",
target: "Đùi sau (Hamstrings), Lưng dưới (Erector Spinae)",
wrong: "Cúi gập cong lưng. Khuỵu gối quá sâu giống bài squat (ngồi xổm).",
right: "Hơi gập nhẹ khớp gối để bảo vệ khớp, đẩy mông về sau cho đến khi lưng phẳng song song với mặt sàn.",
fix: "Tưởng tượng hông bạn là bản lề cánh cửa, luôn giữ lưng thẳng và không bẻ cong cột sống.",
videoId: "sAAn3y-qxP4"
},
{
name: "Standing Cross Crunch",
sets: "4 hiệp x 20 lần",
target: "Cơ bụng toàn diện (Cardio-Core)",
wrong: "Cố cúi gập cổ sát vào đùi thay vì nâng cao đầu gối.",
right: "Nâng cao gối chéo lên hướng về ngực. Vặn lồng ngực sao cho cùi chỏ chạm vào đầu gối đối diện.",
fix: "Ở khoảnh khắc chạm, thở mạnh ra để siết chặt tối đa cơ liên sườn và cơ bụng.",
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
wrong: "Đẩy tay lên trước khi hông mở hết biên độ. Không duy trì nhịp thở đều đặn.",
right: "Squat sâu, bật mạnh lên. Dùng toàn lực mông và đùi đẩy người đứng dậy, đồng thời đẩy tạ lên cao.",
fix: "Hãy nhớ đây là chuyển động truyền lực toàn thân, mượn lực từ chân đẩy thẳng lên tay.",
videoId: "qnOikHllwWc"
},
{
name: "Renegade Rows",
sets: "4 hiệp x 10 lần/bên",
target: "Lưng xô, Core cân bằng dưới tạ",
wrong: "Lắc lư hông và xương chậu để lấy đà kéo tạ lên.",
right: "Mở rộng chân bám chặt sàn. Siết chặt mông và cơ lõi khi lần lượt kéo tạ áp sát vào lườn.",
fix: "Điểm quan trọng nhất là giữ cố định phần hông, luôn duy trì sức căng ở cơ bụng và đùi.",
videoId: "0lj8lL2p9Z0"
},
{
name: "Burpee Broad Jump",
sets: "4 hiệp x 8 lần",
target: "Thể lực yếm khí, Đùi trước",
wrong: "Di chuyển chậm chạp, không kích thích nhịp tim. Bật nhảy với cự ly quá ngắn.",
right: "Thực hiện hít đất chuẩn. Bật thu chân về tư thế ngồi xổm và nhảy xa vọt về phía trước.",
fix: "Vung mạnh hai tay để lấy đà bật nhảy xa nhất có thể trước khi tiếp đất.",
videoId: "xaBTCkqiUKo"
}
]
}

,
{
day: "Buổi 13",
title: "Kiểm Soát Chân Trụ",
focus: "Thăng bằng đùi và mông một bên",
icon: <Footprints className="text-blue-600" />,
exercises: [
{
name: "Reverse Lunges",
sets: "4 hiệp x 12 lần/chân",
target: "Đùi trước, Mông, Đầu gối",
wrong: "Đầu gối đập mạnh xuống sàn. Bước lùi quá ngắn khiến đầu gối trước vượt xa mũi chân.",
right: "Bước lùi đủ dài. Hạ trọng tâm chậm rãi đến khi hai gối đều vuông góc 90 độ.",
fix: "Trọng tâm đặt 70% ở chân trước. Chân sau chỉ làm trụ thăng bằng nhẹ nhàng.",
videoId: "tTej-ax9XiA"
},
{
name: "Glute Bridge March",
sets: "4 hiệp x 20 bước",
target: "Mông, Cơ dựng cột sống động",
wrong: "Hông rơi xuống khi nhấc một chân lên. Võng thắt lưng quá mức.",
right: "Giữ hông thăng bằng trên cao. Nhấc luân phiên từng đầu gối về phía ngực chậm rãi.",
fix: "Hóp bụng và gồng cứng mông của chân đang chạm sàn để giữ khung chậu không bị xoay.",
videoId: "-sTDH8Chc1E"
},
{
name: "Wall Sit",
sets: "4 hiệp x 45-60 giây",
target: "Đùi trước tĩnh, Sức bền cơ bắp",
wrong: "Trượt mông quá cao hoặc quá thấp so với đầu gối. Chống tay lên đùi để ăn gian.",
right: "Lưng áp sát tường. Đùi song song với mặt sàn tạo góc vuông 90 độ. Tay buông thõng.",
fix: "Để phân tán sự chú ý khỏi cơn đau đùi, hãy tập trung ép chặt lưng dưới vào bức tường.",
videoId: "y-wV4Venusw"
}
]
},
{
day: "Buổi 14",
title: "Core Xoay Vặn & Bền",
focus: "Cơ liên sườn và khả năng chống xoay",
icon: <ShieldCheck className="text-emerald-600" />,
exercises: [
{
name: "Bicycle Crunches",
sets: "4 hiệp x 20 lần",
target: "Bụng, Liên sườn, Phối hợp",
wrong: "Kéo mạnh cổ về trước. Vặn cổ thay vì vặn lồng ngực. Đạp chân quá ngắn.",
right: "Cùi chỏ chạm vào đầu gối đối diện. Chân duỗi thẳng dài song song mặt sàn.",
fix: "Hãy tập thật chậm. Giữ lại 1 giây ở điểm cùi chỏ chạm đầu gối để cảm nhận cơ liên sườn cháy lên.",
videoId: "1we3bh9uhqY"
},
{
name: "Side Plank",
sets: "3 hiệp x 30 giây/bên",
target: "Cơ liên sườn (Obliques tĩnh)",
wrong: "Hông xệ xuống gần chạm sàn. Vai sập hoặc chúi về phía trước.",
right: "Cơ thể thành một đường thẳng từ vai đến gót chân. Khuỷu tay vuông góc ngay dưới vai.",
fix: "Tưởng tượng có một sợi dây kéo hông bạn vút lên trần nhà. Mắt nhìn thẳng về phía trước.",
videoId: "BFOyHDlY2UE"
},
{
name: "High Plank to Downward Dog",
sets: "3 hiệp x 12 lần",
target: "Core động, Vai, Lưng sau",
wrong: "Cong lưng khi đẩy mông lên. Hạ hông quá trớn thành võng lưng khi về Plank.",
right: "Đẩy mông lên cao nhất có thể thành chữ V ngược. Hạ về Plank kiểm soát, thân thẳng.",
fix: "Sử dụng bàn tay đẩy mạnh xuống sàn để đưa lực về phía gót chân khi đẩy mông lên.",
videoId: "59al36qfnU4"
}
]
},
{
day: "Buổi 15",
title: "Bản Lề Hông Tuyệt Đối",
focus: "Đùi sau, Mông và sự linh hoạt của hông",
icon: <Flame className="text-orange-600" />,
exercises: [
{
name: "B-Stance RDL",
sets: "3 hiệp x 10 lần/chân",
target: "Đùi sau (từng bên), Mông",
wrong: "Dồn đều lực vào hai chân. Gù lưng khi cúi xuống.",
right: "Chân trụ đặt phẳng, chân sau lùi nửa bước và nhón gót. Lực dồn 90% vào chân trụ phía trước.",
fix: "Chân sau chỉ hoạt động như một cái chân chống xe đạp. Tập trung đẩy hông của chân trụ về sau.",
videoId: "GUsVaTXNmpM"
},
{
name: "Hip Thrust (Tựa lưng)",
sets: "4 hiệp x 15 lần",
target: "Mông cực đại",
wrong: "Cong lưng dưới để đẩy tạ. Nhìn lên trần nhà thay vì nhìn tới trước. Chân đặt quá xa/gần.",
right: "Vai tựa vững trên ghế/giường. Đẩy bằng mông, mắt luôn nhìn về phía đầu gối.",
fix: "Hơi cuộn xương cụt về trước và gồng chặt mông ở điểm trên cùng. Lên chậm, xuống chậm.",
videoId: "rT7DgCr-3pg"
},
{
name: "Reverse Snow Angels",
sets: "3 hiệp x 15 lần",
target: "Lưng giữa, Vai sau, Cột sống",
wrong: "Ngóc đầu quá cao gây mỏi cổ. Tay chạm sàn khi quạt.",
right: "Trán hướng xuống thảm. Quạt hai tay rộng vòng cung từ hông lên khỏi đầu mà không chạm sàn.",
fix: "Siết chặt bả vai liên tục trong suốt hành trình cánh tay di chuyển. Nhấc tay cao hết mức.",
videoId: "rT7DgCr-3pg"
}
]
},
{
day: "Buổi 16",
title: "Đánh Thức Thân Trên",
focus: "Xô, Ngực, Vai và sức mạnh chống đẩy",
icon: <Activity className="text-red-500" />,
exercises: [
{
name: "Eccentric Push Ups (Hít đất hạ chậm)",
sets: "4 hiệp x 6-8 lần",
target: "Ngực, Tay sau, Sức mạnh cơ bản",
wrong: "Rớt hông khi hạ người. Khuỷu tay bành rộng 90 độ.",
right: "Thân người thẳng băng. Hạ xuống cực kỳ chậm (3-4 giây). Có thể dùng gối để đẩy người lên.",
fix: "Đây là cách tuyệt vời để tăng sức mạnh cho người chưa hít đất chuẩn được. Kiểm soát lực cản khi đi xuống.",
videoId: "rT7DgCr-3pg"
},
{
name: "Superman Pull Downs",
sets: "4 hiệp x 15 lần",
target: "Lưng xô (Lats), Lưng dưới",
wrong: "Chỉ nhấc ngực mà không kéo tay. Chân đập vung vẩy.",
right: "Nâng ngực khỏi sàn, tay vươn thẳng. Sau đó kéo giật cùi chỏ về phía hông (như đang kéo xà).",
fix: "Tưởng tượng bạn đang nắm một thanh xà và dùng sức mạnh của lưng kéo nó sát vào ngực.",
videoId: "rT7DgCr-3pg"
},
{
name: "Pike Push Ups",
sets: "3 hiệp x 8-10 lần",
target: "Vai, Triceps",
wrong: "Tư thế như hít đất thường. Đầu gối cong. Khuỷu tay loe ngang.",
right: "Vào tư thế chữ V ngược (mông nhô cao). Hạ đỉnh đầu xuống sàn tạo thành hình tam giác với hai bàn tay.",
fix: "Mắt nhìn về phía ngón chân. Đừng hạ mặt xuống giữa hai tay, hãy hạ đỉnh đầu hơi chếch về trước.",
videoId: "rT7DgCr-3pg"
}
]
},
{
day: "Buổi 17",
title: "HIIT: Sức Bền Thể Lực",
focus: "Đốt Calo cường độ cao, phối hợp liên hoàn",
icon: <Activity className="text-red-600" />,
exercises: [
{
name: "Squat Jacks",
sets: "4 hiệp x 30 giây",
target: "Đùi trước, Đùi trong, Nhịp tim",
wrong: "Không squat đủ sâu khi đáp xuống. Lưng gù cong.",
right: "Nhảy bật hai chân dang rộng, đồng thời squat chạm tay xuống sàn. Bật thu chân lại đứng thẳng.",
fix: "Tiếp đất nhẹ nhàng bằng mũi chân, đầu gối luôn mở theo hướng mũi giày để bảo vệ khớp.",
videoId: "rT7DgCr-3pg"
},
{
name: "Plank Jacks",
sets: "4 hiệp x 40 giây",
target: "Core tĩnh, Tim mạch",
wrong: "Mông nảy lên xuống dữ dội theo nhịp nhảy. Mất phom lưng thẳng.",
right: "Giữ tư thế Plank hoàn hảo. Chỉ có hai chân nhảy dang ra và khép lại nhẹ nhàng.",
fix: "Khoá chặt bụng và hông. Hình dung bạn đang phải giữ thăng bằng một ly nước trên lưng.",
videoId: "rT7DgCr-3pg"
},
{
name: "Tuck Jumps (Bật thu gối)",
sets: "4 hiệp x 10 lần",
target: "Bùng nổ toàn thân",
wrong: "Rơi rập mạnh bằng gót chân. Chỉ nhảy cao mà không co gối.",
right: "Bật nhảy mạnh, co nhanh hai đầu gối lên cao sát ngực. Tiếp đất êm bằng mũi chân rồi hạ gót.",
fix: "Cố gắng nảy lên ngay lập tức sau khi chạm đất. Sử dụng tay vung mạnh để tạo lực nâng.",
videoId: "rT7DgCr-3pg"
}
]
},
{
day: "Buổi 18",
title: "Mở Khớp & Linh Hoạt",
focus: "Giãn cơ động, nới lỏng bó cơ và gân kheo",
icon: <Info className="text-sky-500" />,
exercises: [
{
name: "Pigeon Pose",
sets: "3 hiệp x 45-60 giây/bên",
target: "Cơ hình lê (Mông sâu), Khớp háng",
wrong: "Lật hông ngã hẳn sang một bên. Không ép sát đùi chân sau xuống mặt sàn.",
right: "Gập chân trước nằm ngang trên sàn. Vuốt thẳng chân sau. Úp hông song song với mặt thảm.",
fix: "Nếu hông chưa đủ dẻo, hãy lót một chiếc khăn cuộn dưới mông chân trước để giữ khung chậu thăng bằng.",
videoId: "rT7DgCr-3pg"
},
{
name: "Thread the Needle",
sets: "3 hiệp x 10 lần/bên",
target: "Cột sống ngực, Bả vai",
wrong: "Chuyển động quá gấp gáp. Hông trượt xa khỏi tư thế cái bàn.",
right: "Luồn sâu một tay dưới nách tay kia đến khi vai chạm sàn. Thở ra khi xoay và hít vào khi vươn tay lên trần.",
fix: "Dùng bàn tay đang chống đất đẩy nhẹ xuống sàn để tạo thêm lực vặn cho lồng ngực xoay sâu hơn.",
videoId: "rT7DgCr-3pg"
},
{
name: "Couch Stretch",
sets: "3 hiệp x 45 giây/bên",
target: "Đùi trước (Quads), Gập hông (Hip Flexors)",
wrong: "Võng lưng dưới cong oằn để cố đứng thẳng. Trọng tâm dồn hết về trước.",
right: "Tựa gối sát vào tường/ghế sofa. Cẳng chân thẳng đứng. Giữ lưng thẳng, bụng siết.",
fix: "Cuộn xương chậu lên trên (gồng mông) trước khi cố gắng đẩy lưng thẳng ra sau. Sự căng đùi sẽ cực mạnh.",
videoId: "rT7DgCr-3pg"
}
]
}

,
{
day: "Buổi 19",
title: "Thể Lực Hô Hấp",
focus: "Tim mạch và sự lanh lẹ (Agility)",
icon: <Activity className="text-red-500" />,
exercises: [
{
name: "High Knees to Sprawl",
sets: "4 hiệp x 45 giây",
target: "Toàn thân, Mức tiêu thụ Oxy",
wrong: "Tiếp đất quá nặng nề. Hông rớt chạm sàn khi sprawl.",
right: "Chạy tại chỗ nâng cao đùi 4 nhịp, sau đó lập tức úp người xuống sprawl (như burpee không hít đất) rồi bật dậy.",
fix: "Phải giữ nhịp độ liên tục. Đừng nghỉ khi chuyển giữa chạy và sprawl, hãy biến nó thành một chuỗi mượt mà.",
videoId: "rT7DgCr-3pg"
},
{
name: "Jumping Lunges",
sets: "4 hiệp x 20 lần",
target: "Đùi trước, Mông, Bùng nổ",
wrong: "Đầu gối đập xuống sàn. Đổ người về phía trước làm mất trọng tâm.",
right: "Hạ lunge sâu, dùng lực cả hai chân nảy người lên không trung và đổi chân trước khi tiếp đất.",
fix: "Vung hai tay nhịp nhàng để tạo lực nâng cơ thể. Tập trung vào việc tiếp đất thật êm bằng mũi chân.",
videoId: "rT7DgCr-3pg"
},
{
name: "Speed Skaters",
sets: "4 hiệp x 45 giây",
target: "Mông ngang (Glute Medius), Đổi hướng",
wrong: "Khoảng cách nhảy quá ngắn. Đứng thẳng người khi nhảy.",
right: "Hạ thấp trọng tâm. Bật ngang mạnh từ chân này sang chân kia, tay chạm mũi chân đối diện.",
fix: "Hãy cố gắng nhảy ngang xa nhất có thể. Hình dung bạn đang vọt qua một vũng nước lớn.",
videoId: "IkGOdk2VDJw"
}
]
},
{
day: "Buổi 20",
title: "Chân Không Trọng Lực",
focus: "Plyometric cho đùi và mông",
icon: <Flame className="text-orange-600" />,
exercises: [
{
name: "Pause Jump Squats",
sets: "4 hiệp x 12 lần",
target: "Đùi trước, Sức nảy",
wrong: "Nhảy liên tục không có nhịp dừng làm mất kiểm soát cơ.",
right: "Squat xuống, giữ nguyên tư thế sâu nhất 2 giây, sau đó bật nổ lên cao hết mức.",
fix: "Khoảnh khắc dừng 2 giây sẽ triệt tiêu toàn bộ động năng, buộc cơ bắp phải phát lực 100% để đẩy bạn lên.",
videoId: "LNeXr1IMsJ0"
},
{
name: "Curtsy Lunges",
sets: "4 hiệp x 12 lần/chân",
target: "Mông chéo, Đùi trong/ngoài",
wrong: "Bước chân vắt chéo quá xa khiến hông bị xoay lệch khỏi hướng chính diện.",
right: "Bước chân vắt chéo ra sau giống tư thế chào hoàng gia. Hông và vai vẫn hướng thẳng về trước.",
fix: "Bài này ăn cực mạnh vào phần rãnh mông. Hãy xuống thật sâu và đẩy lên hoàn toàn bằng gót chân trước.",
videoId: "rT7DgCr-3pg"
},
{
name: "Glute Bridge Walkouts",
sets: "4 hiệp x 10 lần bước ra/vào",
target: "Đùi sau (Hamstrings) cực hạn",
wrong: "Hông xệ xuống mặt sàn khi bước chân ra xa.",
right: "Từ tư thế cây cầu, bước từng gót chân ra xa mông cho đến khi chân gần thẳng, sau đó bước thu lại.",
fix: "Gồng cứng cơ bụng. Nếu bạn cảm thấy đùi sau như sắp chuột rút, đó là bạn đang làm đúng. Làm thật chậm.",
videoId: "rT7DgCr-3pg"
}
]
},
{
day: "Buổi 21",
title: "Lõi Thép Vững Chắc",
focus: "Sự ổn định cốt lõi nâng cao",
icon: <ShieldCheck className="text-indigo-500" />,
exercises: [
{
name: "L-Sit Hold (Có chống chân)",
sets: "4 hiệp x 20-30 giây",
target: "Toàn bộ hệ Core, Cơ gập hông",
wrong: "Rụt vai lên mang tai. Lưng cong gập quá mức.",
right: "Ngồi bệt, chống hai tay xuống sàn ngang hông. Dùng lực bụng ấn tay xuống để nhấc mông và đùi khỏi sàn (gót chân có thể chạm đất).",
fix: "Ấn mạnh lòng bàn tay xuống sàn để bả vai được ghì chặt xuống. Siết bụng cực đại.",
videoId: "rT7DgCr-3pg"
},
{
name: "Plank with Arm/Leg Lift",
sets: "4 hiệp x 12 lần",
target: "Core chống xoắn vặn",
wrong: "Xoay hông ngả nghiêng khi nhấc tay/chân. Mất thăng bằng.",
right: "Từ tư thế Plank, từ từ nhấc tay phải và chân trái lên cùng lúc. Giữ 1 giây rồi đổi bên.",
fix: "Mở rộng khoảng cách hai chân bằng vai sẽ giúp bạn giữ thăng bằng dễ hơn rất nhiều.",
videoId: "eyeuugrpLYA"
},
{
name: "V-Ups",
sets: "4 hiệp x 15 lần",
target: "Bụng trên và dưới",
wrong: "Chỉ gập cổ và nhấc chân. Dùng đà vung tay quá mạnh.",
right: "Từ tư thế nằm duỗi thẳng, gập người hình chữ V sao cho hai tay chạm vào mũi chân.",
fix: "Hãy cố gắng giữ thẳng đầu gối nhất có thể. Xuống chậm để kiểm soát cơ bụng.",
videoId: "rT7DgCr-3pg"
}
]
},
{
day: "Buổi 22",
title: "Sức Mạnh Toàn Thân",
focus: "Bài tập kết hợp (Compound) nhiều nhóm cơ",
icon: <Flame className="text-orange-500" />,
exercises: [
{
name: "Squat to Overhead Press",
sets: "4 hiệp x 15 lần",
target: "Đùi, Mông, Vai, Core",
wrong: "Squat nông. Dùng tay đẩy tạ lên trước khi đứng thẳng.",
right: "Cầm tạ (hoặc chai nước) ngang vai. Squat sâu, khi đẩy người đứng dậy thì đồng thời vươn tay đẩy thẳng tạ lên trần.",
fix: "Tận dụng lực nảy từ dưới lên của hông để đẩy tạ lên cao dễ dàng hơn. Một chuyển động mượt mà duy nhất.",
videoId: "qnOikHllwWc"
},
{
name: "Renegade Rows to Push Up",
sets: "4 hiệp x 8-10 chu kỳ",
target: "Lưng xô, Ngực, Lõi",
wrong: "Hông xoay lật lên khi kéo tạ. Hít đất rớt hông.",
right: "Hít đất 1 lần, sau đó giữ Plank và kéo tạ lần lượt tay trái, tay phải. Lặp lại.",
fix: "Chân mở rộng hơn vai để tăng độ thăng bằng. Không vội vàng, kiểm soát từng nhịp.",
videoId: "0lj8lL2p9Z0"
},
{
name: "Broad Jumps to Backpedal",
sets: "4 hiệp x 10 lần",
target: "Sức mạnh bùng nổ, Lanh lẹ",
wrong: "Tiếp đất cứng đờ bằng gót chân.",
right: "Lấy đà nhảy bật xa hết mức về phía trước. Tiếp đất bằng tư thế squat sâu rồi lập tức chạy lùi về điểm xuất phát.",
fix: "Tiếp đất phải cực êm. Nếu bạn nghe thấy tiếng 'uỵch' lớn, hãy điều chỉnh lại kỹ thuật hãm xung bằng đùi.",
videoId: "xaBTCkqiUKo"
}
]
},
{
day: "Buổi 23",
title: "Sức Chịu Đựng Bức Rút",
focus: "Ngưỡng yếm khí (Anaerobic) và thể lực",
icon: <Activity className="text-red-600" />,
exercises: [
{
name: "Devil's Press (Mô phỏng)",
sets: "4 hiệp x 10 lần",
target: "Toàn thân, Nhịp tim cực đại",
wrong: "Gù lưng khi nhấc vật nặng từ dưới đất lên.",
right: "Làm 1 cái burpee, khi bật dậy túm lấy 2 quả tạ (hoặc chai nước) và vung mạnh thẳng qua đầu.",
fix: "Sử dụng lực bản lề hông (như bài Kettlebell Swing) để đưa tạ qua đầu chứ không dùng lực bả vai.",
videoId: "zlYA1SENYG4"
},
{
name: "Mountain Climber Twists",
sets: "4 hiệp x 40 giây",
target: "Core chéo, Vai, Cardio",
wrong: "Mông nhô cao, vai thụt lại sau. Đầu gối chỉ đưa thẳng.",
right: "Vào thế Plank. Kéo đầu gối chéo sang chạm vào khuỷu tay đối diện một cách liên tục và nhanh.",
fix: "Hãy siết chặt lườn mỗi khi vặn chéo đầu gối. Vai luôn khóa chặt vuông góc với cổ tay.",
videoId: "hZb6jTbCLeE"
},
{
name: "Sprinter Sit-Ups",
sets: "4 hiệp x 20 lần",
target: "Cơ bụng toàn diện, Tốc độ",
wrong: "Chỉ gập đầu lơ lửng mà không nhấc bả vai lên.",
right: "Nằm ngửa, bật gập thân trên ngồi dậy mạnh mẽ, đồng thời co 1 gối lên ngực và vung tay đối diện như tư thế chạy nước rút.",
fix: "Động tác cần thực hiện dứt khoát. Thở mạnh ra mỗi khi bật ngồi dậy.",
videoId: "aQFLVDY0DMU"
}
]
},
{
day: "Buổi 24",
title: "Kéo Giãn Phục Hồi Sâu",
focus: "Thư giãn thần kinh và hồi phục cơ bắp",
icon: <Info className="text-sky-500" />,
exercises: [
{
name: "Seated Forward Fold",
sets: "3 hiệp x 60 giây",
target: "Đùi sau (Hamstrings), Lưng dưới",
wrong: "Cố rướn vai và cổ để chạm tay vào mũi chân khiến lưng trên bị gù gập tồi tệ.",
right: "Ngồi thẳng duỗi chân. Rướn từ phần ngực đổ người về phía trước, giữ lưng thẳng.",
fix: "Đừng quan trọng việc tay có chạm mũi chân hay không. Cứ giữ lưng phẳng, bạn sẽ thấy đùi sau dãn cực sâu.",
videoId: "2of247Kt0tU"
},
{
name: "Lying Spinal Twist",
sets: "3 hiệp x 60 giây/bên",
target: "Cột sống, Lồng ngực, Hông",
wrong: "Nhấc bả vai khỏi mặt đất khi vặn mình.",
right: "Nằm ngửa, co 1 gối ép sang bên đối diện. Hai vai dán chặt xuống sàn nhà, mắt nhìn ngược lại với hướng đầu gối.",
fix: "Nhắm mắt lại, hít thở thật sâu. Mỗi lần thở ra, hãy để đầu gối chìm sát xuống sàn thêm một chút.",
videoId: "QxQDEH2KXps"
},
{
name: "Puppy Dog Pose",
sets: "3 hiệp x 60 giây",
target: "Vai, Lưng trên, Lồng ngực",
wrong: "Mông tuột ra sau chạm vào gót chân (thành bài Child's Pose).",
right: "Quỳ gối, hông thẳng góc 90 độ với gối. Bò hai tay ra xa và ép ngực xuống chạm mặt sàn.",
fix: "Nhấn cằm hoặc trán xuống thảm, thả lỏng hoàn toàn phần lưng trên và vai để ngực mở rộng tối đa.",
videoId: "AgwjXQJqfYo"
}
]
}

,
{
day: "Buổi 25",
title: "Nổ Đùi Tiên Tiến",
focus: "Sức mạnh bùng nổ thân dưới",
icon: <Flame className="text-orange-500" />,
exercises: [
{
name: "Pistol Squat (Có hỗ trợ)",
sets: "4 hiệp x 8 lần/chân",
target: "Đùi trước tĩnh, Thăng bằng tuyệt đối",
wrong: "Đổ sụp người xuống không kiểm soát. Lưng gù gập chữ C.",
right: "Dùng 1 tay bám vào cửa/cột. Hạ người trên 1 chân, chân kia duỗi thẳng về trước. Đẩy mạnh lên.",
fix: "Ngồi lùi mông ra sau. Sử dụng tay bám để kéo nhẹ người lên qua điểm yếu nhất ở dưới cùng.",
videoId: "uODWo4YqbT8"
},
{
name: "Jumping Bulgarian Split Squats",
sets: "4 hiệp x 10 lần/chân",
target: "Đùi trước, Bùng nổ đơn chân",
wrong: "Tiếp đất bằng gót chân cứng ngắc. Không nhún sâu.",
right: "Chân sau đặt trên ghế. Hạ lunge sâu và bật nhảy tung chân trước khỏi mặt đất. Tiếp đất êm ái.",
fix: "Cực kỳ mỏi! Hãy tập trung vào việc dùng mũi chân trước đẩy nảy người lên thay vì chỉ dùng đùi.",
videoId: "PzDbmqL6qo8"
},
{
name: "Frog Pumps",
sets: "4 hiệp x 25 lần",
target: "Mông cực đại (Glute Max)",
wrong: "Lưng dưới cất khỏi sàn quá cao. Chân không chạm nhau.",
right: "Nằm ngửa, hai lòng bàn chân áp sát vào nhau, gối mở rộng như đùi ếch. Đẩy hông lên cao.",
fix: "Giữ gáy chạm sàn. Bài này biên độ ngắn, hãy đẩy hông liên tục và nhịp nhàng để bơm máu tối đa vào mông.",
videoId: "WEvLyLsV0xs"
}
]
},
{
day: "Buổi 26",
title: "Thép Hóa Cột Sống",
focus: "Core chống uốn cong và cơ dựng cột sống",
icon: <ShieldCheck className="text-emerald-500" />,
exercises: [
{
name: "Dragon Flag (Hạ chân chậm)",
sets: "4 hiệp x 6-8 lần",
target: "Core toàn diện, Sức mạnh tuyệt đối",
wrong: "Rơi chân tự do cái rầm. Cong lưng dưới khi hạ chân.",
right: "Nằm ngửa, hai tay bám vật nặng phía sau đầu. Đẩy thẳng người lên trần nhà (trên bả vai), sau đó hạ toàn bộ thân dưới xuống CỰC CHẬM.",
fix: "Giữ cơ thể như một tấm ván cứng. Nếu không thể hạ thẳng, hãy co nhẹ hai đầu gối lại.",
videoId: "nDvUp4iAosU"
},
{
name: "Bird Dog Plank",
sets: "4 hiệp x 10 lần/bên",
target: "Chống xoay nâng cao",
wrong: "Võng lưng, hông rớt. Tay chân nhấc lảo đảo.",
right: "Từ tư thế Plank CẦN, nhấc tay phải và chân trái lên duỗi thẳng. Giữ thăng bằng tuyệt đối.",
fix: "Bài này vô cùng khó. Hãy tập mở rộng khoảng cách hai chân. Nếu rơi, hãy làm lại thật bình tĩnh.",
videoId: "_1j_HWknGLg"
},
{
name: "Back Extensions (Nằm sấp)",
sets: "4 hiệp x 15 lần",
target: "Cơ dựng cột sống, Lưng dưới",
wrong: "Ngóc đầu giật văng người lên cao làm nén cột sống.",
right: "Nằm sấp, hai tay sau gáy. Nhấc từ từ ngực và đùi lên khỏi mặt sàn bằng lực siết của lưng dưới và mông.",
fix: "Mắt luôn nhìn xuống sàn. Cố gắng giữ lại trên không 2 giây trước khi hạ xuống.",
videoId: "NmTKtiJfTOA"
}
]
},
{
day: "Buổi 27",
title: "Thể Lực Áp Lực Cao",
focus: "Đốt mỡ siêu tốc (Tabata Style)",
icon: <Activity className="text-red-500" />,
exercises: [
{
name: "Burpee to Tuck Jump",
sets: "4 hiệp x 10 lần",
target: "Nhịp tim, Bùng nổ toàn diện",
wrong: "Nhảy lên rụt rè không vung gối.",
right: "Thực hiện Burpee, khi bật đứng dậy lập tức tung người nhảy thu gối cao sát ngực.",
fix: "Đây là bài sát thủ thể lực. Hãy phân phối sức, hít sâu khi hạ người và thở rống ra khi nhảy.",
videoId: "zlYA1SENYG4"
},
{
name: "Surfer Jumps",
sets: "4 hiệp x 40 giây",
target: "Xoay hông, Mông, Chân",
wrong: "Chỉ xoay thân trên mà không xoay bàn chân.",
right: "Squat ngang như tư thế lướt ván. Bật nhảy xoay 180 độ và đáp nhẹ nhàng sang hướng ngược lại.",
fix: "Giữ trọng tâm thấp trong suốt bài tập. Tưởng tượng bạn đang nhún nhảy trên ván lướt sóng dập dềnh.",
videoId: "LNeXr1IMsJ0"
},
{
name: "Bear Crawl to Plank",
sets: "4 hiệp x 45 giây",
target: "Sức bền cơ vai, Lõi",
wrong: "Nhô mông cao. Bước tay chân sai nhịp.",
right: "Tư thế bò gấu. Bước hai tay xa ra phía trước thành thế Plank, sau đó lùi tay về tư thế bò gấu.",
fix: "Hông phải luôn giữ ổn định song song với mặt sàn, không lắc lư trái phải.",
videoId: "M1LgdyUDLsc"
}
]
},
{
day: "Buổi 28",
title: "Kỹ Thuật Động Tác Nhấn",
focus: "Ngực, Vai trước và sức mạnh thân trên",
icon: <Flame className="text-orange-600" />,
exercises: [
{
name: "Archer Push Ups (Biến thể)",
sets: "4 hiệp x 6-8 lần/bên",
target: "Ngực, Tay sau đơn bên",
wrong: "Rớt hông. Không duỗi thẳng cánh tay bên kia.",
right: "Mở rộng hai tay. Hạ ngực lệch hẳn sang bên phải trong khi tay trái duỗi thẳng cứng (như đang giương cung). Đổi bên.",
fix: "Nếu quá khó, hãy tập bài này với tư thế chống gối. Đây là bài tập sức mạnh tuyệt vời.",
videoId: "UIcct-7b6oE"
},
{
name: "Hindu Push Ups",
sets: "4 hiệp x 10 lần",
target: "Ngực trên, Vai, Linh hoạt cột sống",
wrong: "Điểm cong không mượt, giật cục.",
right: "Từ chữ V ngược, chúc đầu hạ ngực sà sát mặt đất về phía trước, trườn lên tư thế rắn hổ mang. Sau đó đẩy mông lùi về chữ V.",
fix: "Hình dung bạn đang lặn luồn qua một chiếc hàng rào rất thấp. Cần sự dẻo dai của vai và cột sống.",
videoId: "-blQ3If_HEI"
},
{
name: "Tricep Dips (Dùng ghế)",
sets: "4 hiệp x 15 lần",
target: "Tay sau (Triceps)",
wrong: "Nhấc mông quá xa khỏi mặt ghế. Rụt vai.",
right: "Hai tay chống mép ghế. Mông lướt thẳng xuống sát thành ghế. Hạ đến khi khuỷu tay vuông góc.",
fix: "Duỗi thẳng chân ra phía trước để tăng độ khó. Giữ ngực ưỡn cao để không bị khóa khớp vai.",
videoId: "rT7DgCr-3pg"
}
]
},
{
day: "Buổi 29",
title: "Bài Thi Đỉnh Cao",
focus: "Kiểm tra giới hạn Thể lực và Sức mạnh",
icon: <Activity className="text-red-600" />,
exercises: [
{
name: "Man Makers (Sử dụng tạ/chai nước)",
sets: "4 hiệp x 8 lần",
target: "Tất cả các nhóm cơ",
wrong: "Sử dụng đà giật tạ thay vì kiểm soát cơ bắp. Quên thở.",
right: "Chuỗi: Hít đất -> Kéo xô trái -> Kéo xô phải -> Bật dậy -> Clean tạ lên vai -> Squat -> Đẩy tạ qua đầu (Thruster).",
fix: "Một động tác bằng 6 động tác ghép lại. Hãy tập với nhịp độ chậm rãi, giữ form tuyệt đối chuẩn ở mỗi giai đoạn.",
videoId: "qnOikHllwWc"
},
{
name: "Jumping Lunges to Squat",
sets: "4 hiệp x 15 chu kỳ",
target: "Bắp đùi kêu gào, Bùng nổ",
wrong: "Không xuống đủ sâu. Nghỉ quá lâu giữa các lần nhảy.",
right: "Chuỗi: Nhảy đổi lunge chân trái -> Nhảy đổi lunge chân phải -> Nhảy chụm chân vào Squat sâu.",
fix: "Đây là bài vắt kiệt sức đùi. Giữ lưng thẳng và tiếp đất bằng ức bàn chân để phản xạ nảy lên ngay lập tức.",
videoId: "rT7DgCr-3pg"
},
{
name: "Hollow Rock",
sets: "4 hiệp x 45 giây",
target: "Lõi kiên cố",
wrong: "Đứt nhịp bập bênh do cong/thẳng gối liên tục. Võng thắt lưng.",
right: "Khóa chặt cơ thể trong tư thế Hollow (thuyền cong). Bập bênh toàn thân nhẹ nhàng bằng cách tạo đà từ gót chân.",
fix: "Tưởng tượng cơ thể bạn là một phần của chiếc ghế lật đật bị đóng băng. Bụng không bao giờ được nhả lỏng.",
videoId: "nDvUp4iAosU"
}
]
},
{
day: "Buổi 30",
title: "Chúc Mừng & Phục Hồi",
focus: "Giãn tĩnh sâu, ghi nhận thành quả 30 ngày",
icon: <Info className="text-sky-500" />,
exercises: [
{
name: "Kneeling Hip Flexor Stretch",
sets: "3 hiệp x 60 giây/bên",
target: "Cơ gập hông (Hip Flexors), Đùi trước",
wrong: "Ưỡn cong thắt lưng để cố đẩy hông tới trước.",
right: "Quỳ một gối. Cuộn xương chậu lên (gồng mông chân quỳ) và nhẹ nhàng đổ trọng tâm tới trước. Rướn tay cùng bên lên trần.",
fix: "Bài tập hoàn hảo sau 30 ngày cày ải đùi. Thở sâu và chậm.",
videoId: "rT7DgCr-3pg"
},
{
name: "Lying Figure 4 Stretch",
sets: "3 hiệp x 60 giây/bên",
target: "Mông sâu (Piriformis), Kháng mỏi",
wrong: "Cổ ngóc lên khỏi sàn. Không giữ gập cổ chân.",
right: "Nằm ngửa, gác gót chân phải lên đùi trái. Luồn tay qua đùi trái và kéo về phía ngực. Vai gáy chạm sàn.",
fix: "Gập mũi chân của bàn chân gác lên để bảo vệ khớp gối. Kéo ép càng sâu, mông càng dãn sướng.",
videoId: "QxQDEH2KXps"
},
{
name: "Corpse Pose (Savasana)",
sets: "1 hiệp x 5 phút",
target: "Thư giãn hệ thần kinh toàn diện",
wrong: "Bấm điện thoại hoặc suy nghĩ vẩn vơ.",
right: "Nằm nhắm mắt, dang rộng tay chân thoải mái. Hít thở sâu bằng bụng. Cảm nhận sự thay đổi của cơ thể sau 1 tháng.",
fix: "Bạn đã làm rất tuyệt vời! Đây là lúc để cơ bắp sửa chữa hoàn toàn và chuẩn bị cho Level 2: Trung Cấp.",
videoId: "AgwjXQJqfYo"
}
]
}
];
