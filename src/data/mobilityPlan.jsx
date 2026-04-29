import React from "react";
import { Activity, AlertTriangle, CheckCircle, Lightbulb, Flame, ShieldCheck, Footprints, Info, Dumbbell, Zap, Target, Wind, Droplets, Leaf, RefreshCw, Sparkles, Heart, Sun, Moon, Layers } from "lucide-react";

const FALLBACK_VIDEO = "2IcWJobNDck";

export const mobilityPlan = [
  {
    day: "Buổi 1", title: "Morning Flow", focus: "Đánh thức cơ thể (⭐)", icon: <Sun className="text-yellow-500" />,
    exercises: [
      { name: "Cat-Cow Stretch", sets: "2 hiệp x 12 lần", target: "Cột sống", wrong: "Gập lưng quá nhanh.", right: "Uốn từng mắt xích cột sống.", fix: "Hít vào võng lưng, thở ra cuộn tròn.", videoId: "2of247Kt0tU" },
      { name: "World's Greatest Stretch", sets: "2 hiệp x 6 lần/bên", target: "Toàn thân", wrong: "Chân sau co gập.", right: "Lunge dài, xoay ngực lên trần.", fix: "Ép hông chìm sâu mỗi nhịp thở.", videoId: "-CiWQ2IvY34" },
      { name: "Neck Circles", sets: "2 hiệp x 5 vòng", target: "Cổ & Vai gáy", wrong: "Xoay quá nhanh.", right: "Thả lỏng vai, xoay chậm.", fix: "Dùng mũi vẽ vòng tròn lớn.", videoId: "JlvYbtQWwEs" },
      { name: "Arm Circles", sets: "2 hiệp x 15 lần", target: "Khớp vai", wrong: "Nhún vai lên tai.", right: "Xoay cánh tay vòng tròn lớn.", fix: "Cảm nhận xương bả vai di động.", videoId: "qpIWSNpENGA" }
    ]
  },
  {
    day: "Buổi 2", title: "Giải Cứu Cột Sống", focus: "Giảm mỏi thắt lưng (⭐)", icon: <Droplets className="text-blue-400" />,
    exercises: [
      { name: "Child's Pose", sets: "3 hiệp x 45s", target: "Lưng dưới", wrong: "Mông nhấc khỏi gót.", right: "Ngồi lên gót, vươn tay dài.", fix: "Bò tay sang bên để giãn thêm xô.", videoId: "kH12QrSGedM" },
      { name: "Thread the Needle", sets: "2 hiệp x 8 lần/bên", target: "Lưng giữa", wrong: "Không xoay ngực.", right: "Luồn tay sâu, xoay ngực lên.", fix: "Giữ hông cố định không lệch.", videoId: "gyew25Vaqj8" },
      { name: "Cobra Stretch", sets: "3 hiệp x 20s", target: "Bụng, Lưng dưới", wrong: "Gồng vai rụt cổ.", right: "Đẩy thân trên lên, hông chạm sàn.", fix: "Siết mông bảo vệ thắt lưng.", videoId: "NP4PrPHpQIE" },
      { name: "Supine Spinal Twist", sets: "2 hiệp x 30s/bên", target: "Thắt lưng", wrong: "Nhấc vai khỏi sàn.", right: "Nằm ngửa kéo gối chéo qua người.", fix: "Để trọng lực kéo gối xuống sàn.", videoId: "ElKoMMaTPCM" }
    ]
  },
  {
    day: "Buổi 3", title: "Mở Khớp Háng", focus: "Cải thiện Squat (⭐⭐)", icon: <Leaf className="text-emerald-500" />,
    exercises: [
      { name: "90/90 Hip Stretch", sets: "3 hiệp x 30s/bên", target: "Xoay hông", wrong: "Gù lưng để gập người.", right: "Lưng thẳng, rướn rốn về phía trước.", fix: "Giữ hai gối vuông góc 90 độ.", videoId: "VYvMMw8z3rE" },
      { name: "Asian Deep Squat", sets: "3 hiệp x 60s", target: "Cổ chân & Háng", wrong: "Nhón gót chân.", right: "Ngồi xổm sâu, gót chạm sàn.", fix: "Dùng cùi chỏ đẩy gối mở rộng.", videoId: "6R6X6-qVjRE" },
      { name: "Cossack Squats", sets: "3 hiệp x 8 lần/bên", target: "Đùi trong & Háng", wrong: "Nhấc gót chân trụ.", right: "Hạ mông sang bên, chân kia duỗi thẳng.", fix: "Giữ thân người vươn thẳng.", videoId: "2BdmWht-38k" },
      { name: "Pigeon Pose", sets: "3 hiệp x 45s/bên", target: "Cơ mông", wrong: "Lệch hông sang bên.", right: "Úp hông thẳng xuống sàn.", fix: "Lót gối dưới mông nếu quá cứng.", videoId: "AI5A1PRYX7E" }
    ]
  },
  {
    day: "Buổi 16", title: "Kích Hoạt Vai & Lưng", focus: "Upper Body Prep (⭐⭐)", icon: <Activity className="text-blue-600" />,
    exercises: [
      { name: "Scapular Push-ups", sets: "3 hiệp x 12 lần", target: "Cơ răng trước", wrong: "Cong cùi chỏ.", right: "Tay thẳng, chỉ di chuyển bả vai.", fix: "Tưởng tượng đẩy sàn ra xa.", videoId: "NKekqeudgWs" },
      { name: "Banded Face Pulls", sets: "3 hiệp x 15 lần", target: "Vai sau", wrong: "Kéo dây về ngực.", right: "Kéo về trán, mở cùi chỏ.", fix: "Gồng bụng không để võng lưng.", videoId: "0Po47vvj9g4" },
      { name: "Shoulder Dislocations", sets: "3 hiệp x 10 lần", target: "Khớp vai", wrong: "Cong tay khi qua đầu.", right: "Tay thẳng, cầm gậy rộng.", fix: "Thu hẹp tay khi vai dẻo hơn.", videoId: "-avWRzrrH-o" },
      { name: "Thoracic Bridge", sets: "2 hiệp x 8 lần/bên", target: "Lưng giữa", wrong: "Mông không đẩy cao.", right: "Lật người đẩy hông cao vươn tay.", fix: "Mắt nhìn theo tay đang vươn.", videoId: "BgNUcl8fYVM" }
    ]
  },
  {
    day: "Buổi 17", title: "Cơ Lõi & Linh Hoạt", focus: "Core Stability (⭐⭐⭐)", icon: <Target className="text-red-400" />,
    exercises: [
      { name: "Bird-Dog", sets: "3 hiệp x 10 lần/bên", target: "Core & Thăng bằng", wrong: "Võng lưng dưới.", right: "Tay chân đối diện duỗi thẳng.", fix: "Lưng phẳng như mặt bàn.", videoId: "wiFNA3sqjCA" },
      { name: "Dead Bug", sets: "3 hiệp x 12 lần", target: "Bụng sâu", wrong: "Nhấc lưng khỏi sàn.", right: "Ép lưng sàn, hạ tay chân đối diện.", fix: "Thở mạnh ra khi hạ chân.", videoId: "AErXJd5JN8g" },
      { name: "Side Plank Star", sets: "3 hiệp x 20s/bên", target: "Cơ lõi bên", wrong: "Hạ hông xuống sàn.", right: "Plank nghiêng, nhấc chân trên lên.", fix: "Đẩy hông về phía trước.", videoId: "XeN4pEZZJNI" },
      { name: "Bear Crawl Shoulder Taps", sets: "3 hiệp x 12 lần", target: "Core toàn diện", wrong: "Lắc lư hông.", right: "Tư thế Gấu, chạm tay vào vai.", fix: "Giữ gối cách sàn 2cm.", videoId: "LCVMqEmgglo" }
    ]
  },
  {
    day: "Buổi 18", title: "Bảo Vệ Đầu Gối", focus: "Knee Health (⭐⭐)", icon: <ShieldCheck className="text-emerald-500" />,
    exercises: [
      { name: "Poliquin Step-ups", sets: "3 hiệp x 15 lần/bên", target: "Cơ VMO quanh gối", wrong: "Dùng chân dưới nhún.", right: "Hạ gót chân chạm sàn chậm.", fix: "Tập trung vào cơ sát đầu gối.", videoId: "GDgQ9gCuuTo" },
      { name: "Tibialis Raises", sets: "3 hiệp x 20 lần", target: "Cơ ống quyển", wrong: "Dùng hông nhấc chân.", right: "Dựa tường nhấc mũi chân lên cao.", fix: "Giảm áp lực gối khi chạy nhảy.", videoId: "m0w97wrIO14" },
      { name: "Couch Stretch", sets: "3 hiệp x 45s/bên", target: "Đùi trước & Gập hông", wrong: "Võng lưng dưới.", right: "Chân đặt tường, quỳ người thẳng.", fix: "Siết mông chân sau để giãn sâu.", videoId: "B3rOeBLqlF4" },
      { name: "Knee Circles", sets: "2 hiệp x 15 vòng", target: "Khớp gối", wrong: "Xoay quá nhanh.", right: "Chụm chân xoay gối nhẹ nhàng.", fix: "Bôi trơn khớp trước khi tập nặng.", videoId: "uftXc67QUH8" }
    ]
  },
  {
    day: "Buổi 19", title: "Giảm Căng Thẳng Cổ", focus: "Neck Relief (⭐)", icon: <Wind className="text-slate-400" />,
    exercises: [
      { name: "Chin Tucks", sets: "3 hiệp x 12 lần", target: "Cơ cổ sâu", wrong: "Ngửa đầu lên.", right: "Thu cằm về sau (tạo nọng cằm).", fix: "Sửa tư thế cổ rùa cực tốt.", videoId: "KqR1EoEmq9c" },
      { name: "Scalene Stretch", sets: "3 hiệp x 30s/bên", target: "Cơ cổ bên", wrong: "Nhún vai lên.", right: "Nghiêng đầu, kéo nhẹ tay đối diện.", fix: "Hít thở sâu để cơ thả lỏng.", videoId: "FenCkiOIJKk" },
      { name: "Levator Scapulae Stretch", sets: "3 hiệp x 30s/bên", target: "Cơ nâng vai", wrong: "Xoay hông theo đầu.", right: "Nhìn vào nách, kéo nhẹ đầu xuống.", fix: "Giải cứu cơn đau vai gáy.", videoId: "q6Ay3voSdx8" },
      { name: "Jaw Release Massage", sets: "2 phút", target: "Cơ hàm", wrong: "Dùng lực quá mạnh.", right: "Massage vùng cơ nhai cạnh tai.", fix: "Giảm căng thẳng vùng đầu.", videoId: "EM18snVgV_c" }
    ]
  },
  {
    day: "Buổi 20", title: "Dòng Chảy Toàn Thân", focus: "Full Body Flow (⭐⭐⭐)", icon: <Zap className="text-yellow-500" />,
    exercises: [
      { name: "Sun Salutation A", sets: "5 vòng", target: "Hệ vận động", wrong: "Nín thở.", right: "Chuyển động theo nhịp thở.", fix: "Làm chậm để cảm nhận khớp.", videoId: "1xRX1MuoImw" },
      { name: "Downward Dog to Cobra", sets: "3 hiệp x 8 lần", target: "Chuỗi trước & sau", wrong: "Vai gồng cứng.", right: "Từ V ngược lướt người lên rắn.", fix: "Mở rộng vai ở tư thế rắn.", videoId: "Y0GDgQqt-bA" },
      { name: "Lizard with Rotation", sets: "3 hiệp x 8 lần/bên", target: "Háng & Lưng giữa", wrong: "Gối sau chạm sàn.", right: "Lunge sâu, xoay tay lên trần.", fix: "Xoay lồng ngực hết biên độ.", videoId: "4mu5Pbs_v7o" },
      { name: "Deep Squat to Fold", sets: "3 hiệp x 10 lần", target: "Háng & Đùi sau", wrong: "Gù lưng.", right: "Squat sâu rồi đẩy mông lên cao.", fix: "Giữ tay chạm sàn suốt bài tập.", videoId: "6R6X6-qVjRE" }
    ]
  },
  {
    day: "Buổi 21", title: "Vùng Chậu & Hông Sâu", focus: "Pelvic Mobility (⭐⭐⭐)", icon: <Leaf className="text-green-500" />,
    exercises: [
      { name: "Frog Stretch", sets: "3 hiệp x 60s", target: "Bẹn & Háng", wrong: "Võng thắt lưng.", right: "Mở rộng gối, đẩy mông ra sau.", fix: "Kê đệm dưới gối nếu đau.", videoId: "CHRUb43S6RM" },
      { name: "Happy Baby", sets: "2 hiệp x 60s", target: "Hông & Lưng dưới", wrong: "Nhấc vai khỏi sàn.", right: "Nằm ngửa nắm chân kéo xuống.", fix: "Lắc nhẹ để massage cột sống.", videoId: "Ppku7i3ypGM" },
      { name: "Adductor Rock-backs", sets: "3 hiệp x 12 lần/bên", target: "Cơ khép đùi", wrong: "Gù lưng trên.", right: "Một chân ngang, đẩy mông ra sau.", fix: "Giữ bàn chân áp sát sàn.", videoId: "nxuwq178gLA" },
      { name: "Pelvic Tilts", sets: "3 hiệp x 15 lần", target: "Kiểm soát chậu", wrong: "Dùng chân đẩy.", right: "Nằm ngửa, cuộn chậu lên xuống.", fix: "Kích hoạt cơ bụng dưới.", videoId: "u0AJnVg0tcc" }
    ]
  },
  {
    day: "Buổi 30", title: "Bài Kiểm Tra Tổng Lực", focus: "Final Assessment (⭐⭐⭐⭐⭐)", icon: <Sparkles className="text-yellow-600" />,
    exercises: [
      { name: "Deep Squat Test", sets: "Giữ 60s", target: "Háng & Cổ chân", wrong: "Gót chân nhấc.", right: "Ngồi xổm sâu lưng thẳng.", fix: "Đánh giá sự tiến bộ 30 ngày.", videoId: "6R6X6-qVjRE" },
      { name: "Overhead Reach Test", sets: "10 lần", target: "Vai & Ngực", wrong: "Võng lưng dưới.", right: "Sát tường giơ tay chạm tường.", fix: "Vai chạm tường dễ dàng không?", videoId: "xg5fYtn305I" },
      { name: "Toe Touch Test", sets: "Giữ 30s", target: "Đùi sau", wrong: "Cong đầu gối.", right: "Đứng thẳng gập người chạm sàn.", fix: "Lòng bàn tay đã chạm sàn chưa?", videoId: "wVdOp3h1nog" },
      { name: "90/90 Hip Flow Test", sets: "10 lần chuyển", target: "Khớp háng", wrong: "Phải dùng tay chống.", right: "Chuyển hông không dùng tay.", fix: "Háng linh hoạt tối đa chưa?", videoId: "VYvMMw8z3rE" }
    ]
  }
];