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

const FALLBACK_VIDEO = "hWbUlkb5Ms4";

export const level2Plan = [
{
day: "Buổi 1",
title: "Ngực (Chest)",
focus: "Cơ ngực lớn, ngực trên, ngực dưới",
icon: <Flame className="text-orange-600" />,
exercises: [
{
name: "Bench Press",
sets: "4 hiệp x 6-8 lần",
target: "Ngực giữa (Chest)",
wrong: "Vai nhô lên khỏi ghế. Mông cất khỏi ghế khi cố đẩy tạ lên.",
right: "Hai bả vai siết chặt áp sát mặt ghế. Đạp hai gót chân chặt xuống sàn để tạo lực nảy (Leg drive).",
fix: "Hạ thanh đòn chậm rãi chạm nhẹ vào phần dưới ngực (ngang vú), giữ 1 giây rồi đẩy dứt khoát lên trên.",
videoId: "4Y2ZdHCOXok"
},
{
name: "Incline Press",
sets: "4 hiệp x 8-10 lần",
target: "Ngực trên (Upper Chest)",
wrong: "Chỉnh ghế quá dốc (quá 45 độ) khiến bài tập ăn hết vào vai.",
right: "Ghế nghiêng lý tưởng ở 30 độ. Gồng ngực đẩy tạ lên, hạ xuống sâu để giãn tối đa cơ ngực.",
fix: "Ở điểm thấp nhất, hãy tưởng tượng bạn đang cố vươn lồng ngực lên chạm vào trần nhà để cơ ngực trên được kéo căng hết cỡ.",
videoId: "8fXfwG4ftaQ"
},
{
name: "Decline Press",
sets: "3 hiệp x 8-12 lần",
target: "Ngực dưới (Lower Chest)",
wrong: "Cầm đòn quá hẹp hoặc hạ thanh đòn vào cổ.",
right: "Hạ thanh đòn về phía xương ức dưới. Đẩy thẳng lên và hơi chéo về phía đầu.",
fix: "Bài này biên độ ngắn hơn Bench Press, hãy tập trung vào nhịp hạ tạ thật chậm để cảm nhận cơ ngực dưới.",
videoId: "MBJBG_D2tpg"
},
{
name: "Dumbbell Press",
sets: "3 hiệp x 8-12 lần",
target: "Ngực (Chest - Cân bằng cơ)",
wrong: "Hạ tạ thẳng tắp hai bên sườn tạo góc 90 độ phá hủy khớp vai.",
right: "Hạ tạ chậm với khuỷu tay khép nhẹ (góc 45-60 độ so với thân người).",
fix: "Tạ đơn cho phép biên độ sâu hơn đòn Barbell. Hãy tận dụng việc hạ sâu xuống để kéo dãn cơ ngực tối đa.",
videoId: "1V3vpcaxRYQ"
},
{
name: "Dumbbell Flys",
sets: "3 hiệp x 10-12 lần",
target: "Mở rộng cơ ngực",
wrong: "Gập cùi chỏ quá nhiều biến thành bài đẩy ngực. Thả tạ rớt quá sâu gây rách cơ vai.",
right: "Hơi cong nhẹ cùi chỏ và cố định góc đó. Mở rộng tay sang hai bên đến khi ngực căng cứng thì dừng.",
fix: "Hãy tưởng tượng bạn đang ôm một cái cây khổng lồ thay vì chỉ đẩy tạ lên.",
videoId: "rk8YayRoTRQ"
},
{
name: "Pec Deck Flys",
sets: "3 hiệp x 12-15 lần",
target: "Rãnh ngực",
wrong: "Ngồi quá thấp hoặc tay đẩy bằng bàn tay thay vì dùng cùi chỏ ép vào.",
right: "Chỉnh ghế sao cho cánh tay song song với sàn. Ép chặt hai đệm vào nhau.",
fix: "Ở điểm hai đệm chạm nhau, hãy gồng cứng ngực và giữ lại 1 giây trước khi từ từ nhả ra.",
videoId: "fgXSA2-o0NM"
},
{
name: "Cable Crossover Flys",
sets: "3 hiệp x 12-15 lần",
target: "Ngực dưới, Rãnh ngực",
wrong: "Kéo dây bằng cơ vai trước và bắp tay.",
right: "Hơi đổ người tới trước. Hai tay mở rộng hơi cong nhẹ cùi chỏ. Ôm vòng hai tay vào nhau hướng xuống dưới.",
fix: "Điểm giao nhau của hai tay quyết định vùng cơ tác động. Đan chéo hai tay vào nhau ở điểm cuối để vắt kiệt cơ ngực.",
videoId: "M97ra0UR-40"
},
{
name: "Push Ups",
sets: "3 hiệp x Max",
target: "Ngực tổng thể, Tay sau",
wrong: "Võng lưng, mông chổng lên trời. Cùi chỏ bành sang hai bên 90 độ.",
right: "Cơ thể tạo thành đường thẳng từ gót chân đến đầu. Khép cùi chỏ 45 độ.",
fix: "Nếu không hít nổi, hãy hạ đầu gối xuống sàn. Quan trọng nhất là biên độ phải đủ sâu (ngực gần chạm sàn).",
videoId: "_YrJc-kTYA0"
},
{
name: "Dips",
sets: "3 hiệp x 8-12 lần",
target: "Ngực dưới, Tay sau",
wrong: "Đu đưa người, hạ xuống nửa vời.",
right: "Hơi đổ người về phía trước để ăn vào ngực. Hạ người cho đến khi cùi chỏ tạo góc 90 độ.",
fix: "Gồng chặt cơ lõi (Core) để cơ thể không bị đung đưa trong suốt quá trình tập.",
videoId: "P5TlJiu68lA"
},
{
name: "Pullovers",
sets: "3 hiệp x 10-12 lần",
target: "Ngực trên, Răng cưa",
wrong: "Duỗi thẳng tay hoàn toàn gây áp lực lên khớp cùi chỏ.",
right: "Nằm ngang vai trên ghế. Cầm tạ đưa qua đầu với cánh tay cong nhẹ, kéo lên bằng sức ngực.",
fix: "Cảm nhận lồng ngực được mở tung ra khi tạ ở điểm sâu nhất ra phía sau đầu.",
videoId: "Datv2L6t3-4"
}
]
},
{
day: "Buổi 2",
title: "Lưng (Back)",
focus: "Lưng xô, Lưng giữa, Lưng dưới",
icon: <ShieldCheck className="text-emerald-600" />,
exercises: [
{
name: "Chin-Ups",
sets: "4 hiệp x Max",
target: "Lưng xô, Bắp tay trước",
wrong: "Nửa vời, không thẳng tay hẳn khi hạ xuống. Dùng đà lăng người.",
right: "Lòng bàn tay hướng vào trong. Kéo ngực lên sát thanh xà.",
fix: "Rút bả vai xuống trước khi kéo tay, điều này giúp cơ lưng xô được kích hoạt tối đa.",
videoId: "Oi3bW9nQmGI"
},
{
name: "Lat Pulldowns",
sets: "4 hiệp x 8-12 lần",
target: "Lưng xô (Chiều rộng)",
wrong: "Đu người ngửa ra sau quá nhiều để kéo tạ nặng.",
right: "Ưỡn ngực lên đón thanh đòn. Kéo thanh đòn xuống ngay dưới cằm (về phía ngực trên).",
fix: "Đừng nắm quá chặt thanh đòn. Hãy coi bàn tay như những chiếc móc câu, lực kéo phát ra từ nách và xô.",
videoId: "bNmvKpJSWKM"
},
{
name: "Seated Rows",
sets: "4 hiệp x 10-12 lần",
target: "Lưng giữa, Độ dày lưng",
wrong: "Đung đưa người ra sau để kéo tạ nặng (dùng sức hông).",
right: "Ngồi thẳng tựa tường vô hình. Kéo tay cầm sát bụng, rướn ngực tới trước.",
fix: "Khi nhả cáp, hãy để cáp kéo vai bạn hơi chuối về phía trước một chút để giãn toàn bộ cơ lưng trước khi kéo nhịp tiếp theo.",
videoId: "CsROhQ1onAg"
},
{
name: "Deadlifts",
sets: "3 hiệp x 5-8 lần",
target: "Toàn bộ Chuỗi cơ sau",
wrong: "Lưng gù (Cong như con tôm) khi nhấc tạ. Nhấc bằng lưng thay vì đạp chân.",
right: "Khóa chặt bả vai, ưỡn ngực. Đạp gót chân xuống sàn để đứng lên đồng thời đẩy hông tới trước.",
fix: "Giữ thanh đòn trượt sát vào cẳng chân và đùi trong suốt chuyển động để bảo vệ cột sống.",
videoId: "57dg94gYDI0"
},
{
name: "Shrugs (Cơ thang)",
sets: "3 hiệp x 12-15 lần",
target: "Cơ thang (Traps)",
wrong: "Xoay bả vai thành vòng tròn (Roll shoulders). Nhún cằm xuống.",
right: "Đứng thẳng. Nhún vai thẳng lên trên (như động tác nói 'Tôi không biết').",
fix: "Giữ 1 giây ở điểm cao nhất để vắt kiệt cơ thang trước khi hạ tạ xuống hoàn toàn.",
videoId: "rFsSeClGnNA"
},
{
name: "Back Extension",
sets: "3 hiệp x 15 lần",
target: "Lưng dưới (Erector Spinae)",
wrong: "Ngửa người ra sau quá mức gây chèn ép đĩa đệm.",
right: "Gập người xuống căng đùi sau, nâng người lên đến khi cơ thể tạo thành một đường thẳng.",
fix: "Cuộn cằm lại nhìn xuống ngực. Gồng mông đẩy xương chậu vào đệm để nâng người lên.",
videoId: "EBui4Bt5N7o"
}
]
},
{
day: "Buổi 3",
title: "Vai (Shoulders)",
focus: "Vai trước, Vai giữa, Vai sau",
icon: <Activity className="text-blue-500" />,
exercises: [
{
name: "Strict Press",
sets: "4 hiệp x 6-8 lần",
target: "Sức mạnh vai trước",
wrong: "Ngả lưng ra sau quá nhiều, không gồng bụng.",
right: "Đứng thẳng nghiêm. Đẩy tạ đòn qua đầu mà không dùng đà của chân.",
fix: "Khi tạ qua khỏi đầu, hãy đẩy đầu hơi rướn lên phía trước tạ một chút để khóa khớp vai an toàn.",
videoId: "nNMR9fRGRjQ"
},
{
name: "Push Press",
sets: "3 hiệp x 6-8 lần",
target: "Sức mạnh bùng nổ vai",
wrong: "Squat xuống quá sâu. Đẩy tạ bằng tay trước khi đạp chân lên.",
right: "Hé nhẹ gối, đạp mạnh chân xuống sàn tạo đà nảy tạ lên khỏi vai, sau đó dùng tay đẩy tiếp.",
fix: "Sử dụng mức tạ nặng hơn Strict Press. Tập trung vào tốc độ và sức mạnh bùng nổ từ hông lên.",
videoId: "i_1Sl4yHj44"
},
{
name: "Overhead Press (Dumbbell)",
sets: "3 hiệp x 8-10 lần",
target: "Vai tổng thể",
wrong: "Tạ kêu lanh canh ở đỉnh. Tay mở sang ngang 180 độ.",
right: "Tựa lưng thẳng. Đẩy tạ qua đầu, hai tạ gần chạm nhau nhưng không va đập.",
fix: "Hãy hướng cùi chỏ hơi chéo về trước khoảng 45 độ thay vì chĩa thẳng sang ngang để bảo vệ khớp vai an toàn tuyệt đối.",
videoId: "nNMR9fRGRjQ"
},
{
name: "Lateral Raises",
sets: "4 hiệp x 12-15 lần",
target: "Vai giữa (Tạo độ rộng vai)",
wrong: "Vung vẩy cả người để hất tạ lên. Nâng tạ cao hơn vai.",
right: "Hơi cúi nhẹ người. Dang hai tay sang ngang với cùi chỏ hơi gập nhẹ. Cùi chỏ dẫn đường đi lên.",
fix: "Hãy tưởng tượng bạn đang cầm hai bình nước và đang rót nước ra khỏi bình ở điểm cao nhất (úp nhẹ cổ tay).",
videoId: "Kl3LEzQ5Zqs"
},
{
name: "Front Raises",
sets: "3 hiệp x 12-15 lần",
target: "Vai trước",
wrong: "Dùng đà lưng đung đưa hất tạ lên.",
right: "Đứng tĩnh. Nâng tạ thẳng ra phía trước mặt đến ngang tầm mắt.",
fix: "Không cần tập quá nặng. Nâng tạ chậm và kiểm soát chiều hạ xuống để cơ vai trước luôn chịu áp lực.",
videoId: "h9xfpTrAvkE"
},
{
name: "Bent Over Lateral Raises",
sets: "4 hiệp x 12-15 lần",
target: "Vai sau",
wrong: "Kéo cùi chỏ về phía hông (biến thành bài tập xô).",
right: "Gập người song song với sàn. Nâng tạ dang rộng hai tay sang hai bên.",
fix: "Tưởng tượng bạn đang cố vươn tay sang hai bức tường hai bên, lực kéo xuất phát từ vai sau chứ không phải bắp tay.",
videoId: "Keims4EkSVc"
},
{
name: "Upright Rows",
sets: "3 hiệp x 10-12 lần",
target: "Vai giữa, Cơ thang",
wrong: "Kéo tạ lên quá cao (đến cằm) gây hội chứng chèn ép vai (Impingement).",
right: "Cầm tạ sát nhau. Kéo tạ dọc theo cơ thể lên đến ngang ngực (không cao hơn vai).",
fix: "Luôn luôn giữ cùi chỏ cao hơn bàn tay. Cùi chỏ là bộ phận dẫn động kéo tạ lên.",
videoId: "U-KG4oahSLA"
}
]
},
{
day: "Buổi 4",
title: "Tay (Arms)",
focus: "Nhị đầu, Tam đầu, Cẳng tay",
icon: <Activity className="text-purple-500" />,
exercises: [
{
name: "Bicep Curls",
sets: "3 hiệp x 10-12 lần",
target: "Nhị đầu (Biceps)",
wrong: "Đung đưa người tạo đà. Nhấc cùi chỏ lên cao khi cuộn tạ.",
right: "Đứng thẳng nghiêm trang. Cùi chỏ ghim chặt cạnh sườn, chỉ cuộn cẳng tay lên.",
fix: "Khi hạ tạ xuống, hãy hạ CỰC CHẬM (3 giây) cho đến khi thẳng tay để tối đa hóa sự phá vỡ sợi cơ.",
videoId: "XE_pHwbst04"
},
{
name: "Concentrated Curls",
sets: "3 hiệp x 10-12 lần/tay",
target: "Đỉnh cơ nhị đầu",
wrong: "Tỳ cùi chỏ lên đùi để lấy sức bẩy tạ lên.",
right: "Tỳ mặt sau của bắp tay (triceps) vào đùi trong. Cuộn tạ lên sát vai.",
fix: "Đây là bài cô lập hoàn toàn. Tập trung tối đa vào việc gồng cơ bắp tay ở điểm cao nhất (Squeeze).",
videoId: "EjUnEEfTSEY"
},
{
name: "Hammer Curls",
sets: "3 hiệp x 10-12 lần",
target: "Cơ cánh tay (Brachialis), Cẳng tay",
wrong: "Vung tay như đong đưa quả lắc đồng hồ.",
right: "Cầm tạ đơn theo chiều dọc (ngón cái hướng lên). Cuộn tạ lên.",
fix: "Bài này giúp tay bạn trông to và dày hơn khi nhìn từ góc nghiêng. Bóp chặt cán tạ để kích thích cơ cẳng tay.",
videoId: "BRVDS6HVR9Q"
},
{
name: "Preacher Curls",
sets: "3 hiệp x 10-12 lần",
target: "Cô lập Nhị đầu",
wrong: "Không duỗi thẳng tay hết cỡ, chỉ cuộn nửa biên độ.",
right: "Tỳ sát ngực vào bàn đệm. Đặt trọn vẹn bắp tay lên đệm. Cuộn tạ lên nhưng không quá cao để mất áp lực.",
fix: "Khi nhả tạ, giữ cho cơ tay căng cứng và không để khớp cùi chỏ gập quá gắt ở cuối biên độ.",
videoId: "Htw-s61mOw0"
},
{
name: "Tricep Pushdowns",
sets: "4 hiệp x 12-15 lần",
target: "Tay sau (Triceps)",
wrong: "Dùng đà gập người để ấn cáp xuống.",
right: "Đứng thẳng, cùi chỏ khóa chặt bên hông không xê dịch. Chỉ di chuyển cẳng tay.",
fix: "Ở điểm thấp nhất, hãy bẻ cổ tay ép tách hai đầu dây thừng sang hai bên đùi để ép khô cơ tay sau.",
videoId: "Rc7-euA8FDI"
},
{
name: "Triceps Extension",
sets: "3 hiệp x 10-12 lần",
target: "Tay sau (Nhóm cơ dài)",
wrong: "Bành hai cùi chỏ sang hai bên quá rộng.",
right: "Đưa tạ/cáp qua đầu. Khép cùi chỏ hướng lên. Thả tạ rơi chậm ra sau gáy.",
fix: "Sự co giãn cơ (Stretch) là chìa khóa. Hãy thả tạ xuống sâu nhất có thể trước khi đẩy lên.",
videoId: "fwzkg88Okwo"
},
{
name: "Triceps Dips",
sets: "3 hiệp x Max",
target: "Tay sau tổng thể",
wrong: "Hạ quá sâu khiến vai bị xé.",
right: "Giữ người thẳng đứng (không ngả về trước như ngực). Hạ cơ thể xuống bằng tay sau.",
fix: "Giữ hai cùi chỏ ép sát vào thân người. Đẩy lên thẳng tay để khóa chặt tay sau.",
videoId: "thx13oPVK5c"
},
{
name: "Reverse Curls",
sets: "3 hiệp x 12-15 lần",
target: "Cẳng tay mặt trên (Brachioradialis)",
wrong: "Cuộn cổ tay lên trước rồi mới cuộn bắp tay.",
right: "Cầm tạ đòn úp bàn tay. Giữ cổ tay thẳng khóa chặt. Cuộn cẳng tay lên.",
fix: "Đây là bài tập tuyệt vời để tăng kích thước cẳng tay. Chọn mức tạ nhẹ hơn bình thường để đảm bảo form.",
videoId: "ypfd1kaI1AU"
},
{
name: "Wrist Curls",
sets: "3 hiệp x 15-20 lần",
target: "Mặt trong cẳng tay",
wrong: "Nhấc toàn bộ cẳng tay khỏi ghế.",
right: "Tỳ cẳng tay lên đùi hoặc ghế. Để tạ lăn xuống các ngón tay, sau đó cuộn ngón tay và cổ tay lên.",
fix: "Biên độ rất ngắn, hãy tập số rep cao đến khi cẳng tay mỏi nhừ và có cảm giác bơm máu (Pump).",
videoId: "sKXqNO2KQp8"
},
{
name: "Reverse Wrist Curls",
sets: "3 hiệp x 15-20 lần",
target: "Mặt ngoài cẳng tay",
wrong: "Dùng sức bắp tay để giật tạ lên.",
right: "Cầm tạ úp tay, tỳ cẳng tay. Chỉ dùng sức bẻ cổ tay lên trên.",
fix: "Đừng tập quá nặng. Cơ cẳng tay ngoài rất nhỏ, ưu tiên sự kiểm soát chậm rãi.",
videoId: "sKXqNO2KQp8"
}
]
},
{
day: "Buổi 5",
title: "Đùi & Mông (Legs & Glutes)",
focus: "Đùi trước, Đùi sau, Mông, Bắp chân",
icon: <Footprints className="text-yellow-600" />,
exercises: [
{
name: "Squats",
sets: "4 hiệp x 6-8 lần",
target: "Đùi trước, Mông, Sức mạnh",
wrong: "Khóa gối cái cúp khi đứng lên. Nhón gót chân khi hạ xuống.",
right: "Gánh tạ vững chắc trên cầu vai. Ngồi lùi mông ra sau và xuống sâu qua điểm song song của đầu gối.",
fix: "Nhìn thẳng, hít một hơi thật sâu nén chặt bụng trước khi hạ xuống, và chỉ thở ra khi đã đẩy lên gần hết.",
videoId: "eFEVKmp3M4g"
},
{
name: "Leg Press",
sets: "4 hiệp x 10-12 lần",
target: "Đùi trước tổng khối lượng",
wrong: "Hạ tạ quá sâu làm mông cất khỏi ghế (cuộn xương chậu). Đẩy lên khóa thẳng khớp gối.",
right: "Lưng và mông áp sát ghế. Hạ đùi về phía ngực an toàn. Đẩy lên nhưng giữ đầu gối hơi cong.",
fix: "Đặt bàn chân thấp trên bàn đạp sẽ ăn nhiều vào đùi trước. Đặt cao sẽ ăn nhiều vào mông và đùi sau.",
videoId: "nDh_BlnLCGc"
},
{
name: "Leg Extensions",
sets: "3 hiệp x 12-15 lần",
target: "Cô lập đùi trước",
wrong: "Đá văng tạ tung lên không kiểm soát.",
right: "Ngồi sát tựa lưng. Đá thẳng chân lên và GIỮ LẠI 1 GIÂY ở điểm cao nhất, gồng cứng cơ đùi.",
fix: "Đừng hạ tạ rầm xuống. Kháng lại lực kéo của máy khi từ từ hạ chân.",
videoId: "uM86QE59Tgc"
},
{
name: "Lying Leg Curls",
sets: "3 hiệp x 10-12 lần",
target: "Cô lập đùi sau",
wrong: "Nhấc hông lên khỏi mặt nệm để dùng sức rướn của lưng dưới.",
right: "Ép chặt hông xuống mặt ghế. Cuộn đệm gót chân chạm sát vào mông.",
fix: "Tập thật chậm ở pha nhả tạ (duỗi chân). Cơ đùi sau phản ứng cực kỳ tốt với áp lực khi đang duỗi.",
videoId: "yjWAuFOjhuY"
},
{
name: "Lunges",
sets: "3 hiệp x 10-12 lần/chân",
target: "Đùi, Mông đơn chân",
wrong: "Bước quá hẹp khiến gối vượt qua mũi chân quá nhiều làm đau gối.",
right: "Bước một bước dài vừa phải. Hạ hông thẳng xuống sàn cho đến khi gối sau gần chạm sàn.",
fix: "Muốn ăn vào đùi trước: Giữ thân người thẳng. Muốn ăn vào mông: Hơi đổ thân người về phía trước.",
videoId: "1cS-6KsJW9g"
},
{
name: "Hip Thrust (Mông)",
sets: "4 hiệp x 10-12 lần",
target: "Cơ mông lớn (Glute Max)",
wrong: "Võng lưng dưới khi đẩy hông lên. Mắt nhìn lên trần nhà.",
right: "Tựa bả vai vững trên ghế. Gập cằm nhìn về phía trước. Đạp gót đẩy hông lên.",
fix: "Ở điểm cao nhất, gồng cứng mông mạnh nhất có thể trong 2 giây. Nếu thấy đau lưng dưới, bạn đang đẩy quá cao.",
videoId: "PqC0fmyNlmw"
},
{
name: "Sit/Stand Calf Raises",
sets: "4 hiệp x 15-20 lần",
target: "Bắp chân (Calves)",
wrong: "Nảy người quá nhanh, không thả gót xuống sâu.",
right: "Rớt gót chân xuống dưới mép bục để giãn gân, sau đó nhón lên cao hết cỡ.",
fix: "Bắp chân là nhóm cơ rất chai lỳ. Phải tập chậm, dừng 1 giây ở trên cùng và 1 giây ở dưới cùng.",
videoId: "BxfKOyI8sUg"
}
]
},
{
day: "Buổi 6",
title: "Bụng (Abdomen)",
focus: "Bụng trên, Bụng dưới, Core",
icon: <Activity className="text-teal-500" />,
exercises: [
{
name: "Crunches",
sets: "3 hiệp x 15-20 lần",
target: "Bụng trên",
wrong: "Đan tay sau gáy và giật mạnh cổ lên. Nâng hẳn lưng dưới lên khỏi sàn.",
right: "Để hờ tay hai bên mang tai. Ép chặt lưng dưới xuống sàn. Cuộn vai lên cao.",
fix: "Hãy tưởng tượng bạn đang cuộn tròn xương sườn lại sát vào khung chậu. Gập bụng là cuộn lại, không phải ngồi dậy.",
videoId: "GSjm29FESiQ"
},
{
name: "Sit-Ups",
sets: "3 hiệp x 12-15 lần",
target: "Toàn bộ Bụng",
wrong: "Dùng sức giật của tay và lưng dưới để bật dậy.",
right: "Móc chân vào điểm cố định. Dùng cơ bụng cuộn người ngồi hẳn dậy.",
fix: "Hạ người xuống thật chậm (3-4 giây). Pha hạ người (Eccentric) xây dựng cơ bụng rất tốt.",
videoId: "GSjm29FESiQ"
},
{
name: "Leg Raises",
sets: "3 hiệp x 12-15 lần",
target: "Bụng dưới",
wrong: "Võng lưng dưới lên khỏi sàn khi hạ chân xuống (rất đau lưng).",
right: "Nằm ngửa, ép chặt toàn bộ phần lưng dưới chạm sát mặt sàn. Nâng hai chân thẳng lên cao.",
fix: "Nếu cảm thấy võng lưng, hãy luồn hai bàn tay kê dưới mông hoặc không hạ chân quá sát sàn.",
videoId: "PpZxg66ftYc"
},
{
name: "Plank / Rollouts",
sets: "3 hiệp x Tới hạn",
target: "Sức chịu đựng Core",
wrong: "Sập hông hoặc chổng mông quá cao. Cắm mặt nhìn xuống rốn.",
right: "Cơ thể thẳng tắp như tấm ván. Gồng cứng cơ bụng, siết mông. Đầu trung lập nhìn xuống tay.",
fix: "Plank không phải là cuộc thi xem ai nằm được lâu nhất. Hãy gồng chặt BỤNG, MÔNG, ĐÙI đồng thời để phát huy tác dụng thực sự.",
videoId: "ndc391RFNUM"
}
]
}
];
