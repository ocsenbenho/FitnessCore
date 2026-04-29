import React from 'react';
import { Sparkles, Sun, Moon, Heart, Wind, Star } from 'lucide-react';

const FALLBACK = "FPjppcOquE4";

export const yogaPlan = [
{
  day: "Buổi 1",
  title: "Sun Salutation",
  focus: "Chào Mặt Trời, Khởi động toàn thân (Mức độ: ⭐)",
  icon: <Sun className="text-yellow-500" />,
  exercises: [
    {
      name: "Surya Namaskar A (Chào Mặt Trời A)",
      sets: "5 vòng liên hoàn, nhịp nhàng theo hơi thở",
      target: "Toàn thân, Cột sống, Khớp vai, Khớp háng",
      wrong: "Nín thở khi thực hiện các tư thế. Bước chân không đều hoặc cong lưng đột ngột.",
      right: "Mỗi chuyển động phải khớp với một nhịp thở (Hít vào — Ngẩng lên, Thở ra — Gập xuống). Giữ lòng bàn tay và bàn chân ổn định.",
      fix: "Bắt đầu với 3 vòng chậm để làm quen nhịp thở, sau đó tăng dần tốc độ. Hơi thở là trung tâm, không phải tư thế.",
      videoId: "1xRX1MuoImw"
    },
    {
      name: "Warrior I (Chiến Binh 1 — Virabhadrasana I)",
      sets: "2 hiệp x Giữ 30 giây/mỗi bên",
      target: "Khớp háng, Cơ đùi trước, Mở ngực, Vai",
      wrong: "Hông xoay ngang thay vì vuông góc với phía trước. Gối trước vượt qua mũi chân.",
      right: "Chân sau đặt góc 45°, ép hông vuông về phía trước. Gối trước thẳng hàng với mắt cá. Hai tay vươn thẳng lên, lòng bàn tay hướng nhau.",
      fix: "Hãy nghĩ đến việc ép cả hai gai hông về phía trước, không phải chỉ xoay chân.",
      videoId: "fniJmxMyqBU"
    },
    {
      name: "Warrior II (Chiến Binh 2 — Virabhadrasana II)",
      sets: "2 hiệp x Giữ 30 giây/mỗi bên",
      target: "Cơ đùi trong, Khớp háng, Vai",
      wrong: "Gối sập vào trong (Knee Caving). Vai nhô lên mang tai.",
      right: "Gối trước thẳng hàng với ngón chân thứ 2. Hai tay dang ngang như cánh đại bàng, ngang vai. Mắt nhìn qua đầu ngón tay trước.",
      fix: "Siết cơ mông và đẩy gối ra ngoài theo hướng ngón chân để giữ vững tư thế.",
      videoId: "LGndyyZ7exw"
    },
    {
      name: "Downward Dog (Chó Úp Mặt — Adho Mukha Svanasana)",
      sets: "3 hiệp x Giữ 45 giây",
      target: "Lưng sau, Chuỗi cơ sau (Posterior Chain), Đùi sau",
      wrong: "Gù lưng giữa. Gót chân nhấc khỏi sàn và không cố gắng chạm xuống.",
      right: "Tạo hình chữ V ngược. Đẩy thẳng hai cánh tay, ấn lòng bàn tay xuống sàn. Cố gắng hạ gót chân từ từ xuống sàn.",
      fix: "Nếu gót chân chưa chạm sàn được, hãy gập nhẹ đầu gối để giữ lưng thẳng — ưu tiên cột sống thẳng hơn là gót chân chạm đất.",
      videoId: "Y0GDgQqt-bA"
    }
  ]
},
{
  day: "Buổi 2",
  title: "Balance & Core",
  focus: "Thăng bằng & Tăng cường cơ lõi (Mức độ: ⭐⭐)",
  icon: <Star className="text-indigo-500" />,
  exercises: [
    {
      name: "Tree Pose (Tư thế Cái Cây — Vrksasana)",
      sets: "3 hiệp x Giữ 30-45 giây/mỗi chân",
      target: "Thăng bằng, Cơ mông, Cơ lõi",
      wrong: "Đặt bàn chân lên khớp gối (gây hại cho sụn). Ngả người sang một bên.",
      right: "Đặt lòng bàn chân vào bên trong đùi hoặc bắp chân (tránh khớp gối). Hai tay chắp trước ngực hoặc giơ lên cao. Mắt nhìn vào một điểm cố định.",
      fix: "Tìm một điểm cố định phía trước mặt để nhìn vào (Drishti). Điều này giúp não bộ ổn định hệ thống thăng bằng.",
      videoId: "2KuBgfDoFyM"
    },
    {
      name: "Boat Pose (Tư thế Con Thuyền — Navasana)",
      sets: "3 hiệp x Giữ 20-30 giây",
      target: "Cơ lõi (Core), Cơ thắt lưng, Cơ đùi trước",
      wrong: "Gù lưng, cong tròn cột sống. Nín thở để chịu đựng.",
      right: "Ngồi, nhấc chân tạo góc 45° với sàn. Lưng thẳng, tay song song với mặt đất. Hít thở đều và kiểm soát.",
      fix: "Nếu khó giữ lưng thẳng, hãy cong gối lại. Siết cơ bụng nhẹ nhàng và kéo rốn vào trong.",
      videoId: "bdi9psw__4g"
    },
    {
      name: "Warrior III (Chiến Binh 3 — Virabhadrasana III)",
      sets: "2 hiệp x Giữ 20 giây/mỗi bên",
      target: "Cơ mông, Cơ lõi, Thăng bằng toàn thân",
      wrong: "Hông xoay không cân bằng (một bên cao hơn). Cúi đầu xuống.",
      right: "Từ đứng thẳng, nghiêng người và nâng một chân ra sau tạo thành đường thẳng từ đầu đến gót chân. Nhìn xuống sàn.",
      fix: "Siết cơ bụng và hãy tưởng tượng có một tấm kính áp sát hông để giữ cho hai gai hông luôn thẳng hàng.",
      videoId: "j423eDJ5mQg"
    },
    {
      name: "Plank to Chaturanga",
      sets: "3 hiệp x 8-10 lần",
      target: "Cơ lõi, Cơ ngực, Cơ tam đầu",
      wrong: "Hạ cánh tay xuống trước ngực thay vì sát hông. Mông nhô lên hoặc võng xuống.",
      right: "Từ Plank, gập khuỷu tay ép sát vào hông, hạ người thẳng xuống chỉ còn vài cm cách sàn. Cơ thể thẳng như tấm ván.",
      fix: "Đây là phiên bản Yoga của bài Push-up. Sức mạnh cơ ngực và tam đầu tốt sẽ giúp bạn chuyển đổi vô cùng mượt mà.",
      videoId: "sfnrqFYfLSw"
    }
  ]
},
{
  day: "Buổi 3",
  title: "Hip Opening Flow",
  focus: "Mở khớp háng sâu, Giải phóng cảm xúc (Mức độ: ⭐⭐)",
  icon: <Heart className="text-rose-500" />,
  exercises: [
    {
      name: "Lizard Pose (Tư thế Con Thằn Lằn — Utthan Pristhasana)",
      sets: "3 hiệp x Giữ 45 giây/mỗi bên",
      target: "Gấp khớp háng (Hip Flexors), Cơ đùi trong",
      wrong: "Gối sau chạm sàn nhưng hông không ở tư thế thấp.",
      right: "Bước một chân dài về phía trước, đặt tay phía trong chân. Hạ hông sâu xuống. Có thể hạ cùi chỏ xuống sàn nếu đủ dẻo.",
      fix: "Chú ý giữ lưng thẳng thay vì gù. Thở sâu và cảm nhận sự mở ra ở vùng bẹn sau mỗi lần thở ra.",
      videoId: "-6MGjYmHdYQ"
    },
    {
      name: "Happy Baby (Tư thế Em Bé Vui — Ananda Balasana)",
      sets: "2 hiệp x Giữ 60 giây",
      target: "Khớp háng, Lưng dưới, Bẹn",
      wrong: "Cố nhấc mông khỏi sàn. Giật cơ thể theo kiểu giật cục.",
      right: "Nằm ngửa, co gối lên bụng. Nắm bên ngoài hai bàn chân, kéo đầu gối xuống hướng nách. Lưng và xương cụt áp sàn.",
      fix: "Đây là tư thế thư giãn sau tập. Hãy nhắm mắt và hít thở sâu bụng, cảm nhận toàn bộ lưng được mát-xa trên sàn.",
      videoId: "Ppku7i3ypGM"
    },
    {
      name: "Pigeon Pose (Bồ Câu — Eka Pada Rajakapotasana)",
      sets: "3 hiệp x Giữ 60 giây/mỗi bên",
      target: "Cơ mông, Cơ hình lê (Piriformis), Hông ngoài",
      wrong: "Để hông lệch sang một bên thay vì úp vuông góc xuống sàn.",
      right: "Gối trước vuông góc hoặc chéo qua. Hạ thân người ôm sàn, hai tay vươn về trước. Hông cả hai bên cần đều nhau.",
      fix: "Yoga gọi khớp háng là 'cái kho chứa cảm xúc'. Nếu bạn cảm thấy muốn khóc khi giữ tư thế này, đó là bình thường hoàn toàn.",
      videoId: "F4rC8C-GbVk"
    },
    {
      name: "Bound Angle (Bướm — Baddha Konasana)",
      sets: "2 hiệp x Giữ 60 giây",
      target: "Đùi trong, Bẹn, Đùi sau",
      wrong: "Cố ép đùi xuống sàn bằng tay — dễ gây chấn thương.",
      right: "Ngồi thẳng, chắp hai lòng bàn chân vào nhau. Giữ lưng thẳng và để đùi tự nhiên hạ xuống theo trọng lực.",
      fix: "Để tăng độ sâu, hãy nắm bàn chân và từ từ gập người về trước với lưng thẳng (không gù).",
      videoId: "QTbmEqYmm24"
    }
  ]
},
{
  day: "Buổi 4",
  title: "Inversion & Backbend",
  focus: "Đảo ngược & Uốn lưng mở ngực (Mức độ: ⭐⭐⭐)",
  icon: <Wind className="text-violet-500" />,
  exercises: [
    {
      name: "Shoulder Stand (Đứng Vai — Sarvangasana)",
      sets: "2 hiệp x Giữ 30-45 giây",
      target: "Cải thiện tuần hoàn máu, Kích thích tuyến giáp, Cột sống cổ",
      wrong: "Quay đầu sang hai bên khi đang giữ tư thế.",
      right: "Nằm ngửa, nâng chân và thân lên vuông góc. Chống tay vào lưng (ngón tay hướng lên). Cằm ép vào ngực.",
      fix: "Tuyệt đối không quay đầu khi đang trong tư thế này. Nếu bạn có vấn đề cổ, hãy thay thế bằng Legs-Up-The-Wall (Viparita Karani).",
      videoId: "SOHsI7XI0mg"
    },
    {
      name: "Camel Pose (Lạc Đà — Ustrasana)",
      sets: "3 hiệp x Giữ 20-30 giây",
      target: "Cột sống, Mở ngực, Cơ đùi trước",
      wrong: "Ngửa cổ đột ngột ra sau gây chèn ép cổ. Dồn áp lực vào thắt lưng thay vì lồng ngực.",
      right: "Quỳ thẳng, đẩy hông về phía trước, từ từ ngửa người ra sau và chạm hai tay vào gót chân. Ngực đẩy lên trần nhà.",
      fix: "Hãy cúi nhẹ cằm thay vì thả đầu hoàn toàn ra sau — điều này giúp bảo vệ cổ. Nguồn uốn cong phải đến từ lồng ngực.",
      videoId: "cOq5nyrRu0c"
    },
    {
      name: "Wheel Pose (Bánh Xe — Urdhva Dhanurasana)",
      sets: "3 hiệp x Giữ 10-15 giây",
      target: "Mở ngực cực đại, Cột sống, Vai, Cơ mông",
      wrong: "Bàn tay chỉ thẳng song song thay vì xoay ra ngoài một chút.",
      right: "Nằm ngửa, đặt tay gần vai. Đạp chân và đẩy thẳng tay nâng cơ thể lên. Đẩy ngực về phía tường sau đầu.",
      fix: "Tập Camel và Bridge thuần thục trước khi chuyển sang Wheel. Đây là King of Backbends — đòi hỏi sự linh hoạt toàn thân.",
      videoId: "4F4lTh09Z5E"
    },
    {
      name: "Seated Forward Fold (Gập Người Ngồi — Paschimottanasana)",
      sets: "3 hiệp x Giữ 45 giây (Counterpose sau backbend)",
      target: "Đùi sau, Lưng dưới, Cột sống (giải phóng)",
      wrong: "Gù lưng để mặt chạm đầu gối.",
      right: "Ngồi duỗi thẳng chân. Hít vào — ngẩng lưng dài. Thở ra — rướn rốn về phía chân, lưng vẫn thẳng. Nắm cạnh bàn chân hoặc dùng dây.",
      fix: "Đây là tư thế đối nghịch bắt buộc sau khi tập backbend để cân bằng cột sống. Hãy thả lỏng hoàn toàn.",
      videoId: "wVdOp3h1nog"
    }
  ]
},
{
  day: "Buổi 5",
  title: "Yin Yoga",
  focus: "Giữ tư thế lâu, Thư giãn gân mô sâu (Mức độ: ⭐)",
  icon: <Moon className="text-slate-500" />,
  exercises: [
    {
      name: "Yin Dragon (Rồng Yin)",
      sets: "Giữ 3-5 phút/mỗi bên",
      target: "Gấu Flexors, Cơ tứ đầu, Vùng bẹn",
      wrong: "Cố gắng chịu đựng cơn đau sắc nhọn. Giữ cơ thể bằng cơ bắp thay vì để trọng lực làm việc.",
      right: "Vào tư thế Lunge thấp, thả lỏng hoàn toàn. Cảm nhận cảm giác căng buốt nhẹ — đó là tín hiệu mô đang được kéo giãn.",
      fix: "Yin Yoga không phải về tư thế hoàn hảo. Hãy để thân thể chìm xuống một cách tự nhiên sau 1-2 phút đầu.",
      videoId: "gEvkkr9VCro"
    },
    {
      name: "Yin Butterfly (Bướm Yin)",
      sets: "Giữ 3-5 phút",
      target: "Đùi sau, Cột sống, Vùng bẹn",
      wrong: "Ngồi quá thẳng và cứng nhắc.",
      right: "Ngồi, chắp hai lòng bàn chân. Gập người về trước thoải mái, cho phép lưng cong tròn hoàn toàn (khác với Yang Yoga).",
      fix: "Đặt tay hoặc trán lên chồng nắm tay và nhắm mắt. Trong Yin, cho phép lưng tròn là hoàn toàn ổn — mục tiêu là kéo giãn cột sống.",
      videoId: "orflHFw3icE"
    },
    {
      name: "Yin Sphinx / Seal",
      sets: "Giữ 4-5 phút",
      target: "Lưng dưới (Lumbar Spine), Bụng",
      wrong: "Siết cơ mông gây áp lực lên thắt lưng dưới.",
      right: "Nằm sấp, chống hai cùi chỏ trước. Thả lỏng hoàn toàn cơ mông. Cảm nhận áp lực nhẹ ở lưng dưới.",
      fix: "Để tăng cường độ, duỗi thẳng hai tay (Tư thế Seal). Để giảm, co cùi chỏ lại gần hơn (Tư thế Sphinx).",
      videoId: "fJY0Nwhl1kw"
    },
    {
      name: "Savasana (Tư thế Xác Chết — Nghỉ ngơi)",
      sets: "5-10 phút",
      target: "Thư giãn toàn thân, Hệ thần kinh, Não bộ",
      wrong: "Nhúc nhích, kiểm tra điện thoại, hoặc rời tư thế quá sớm.",
      right: "Nằm ngửa, hai tay mở rộng 45°, mắt nhắm. Thở bình thường. Để cơ thể hoàn toàn nặng trĩu trên sàn.",
      fix: "Savasana là tư thế khó nhất trong Yoga vì đòi hỏi bạn phải tắt hoàn toàn tâm trí. Đây là nơi cơ thể hấp thụ toàn bộ lợi ích của buổi tập.",
      videoId: "dXYtWuYxWmQ"
    }
  ]
},
{
  day: "Buổi 6",
  title: "Power Yoga",
  focus: "Yoga sức mạnh, đốt calo, tăng cơ (Mức độ: ⭐⭐⭐⭐)",
  icon: <Sparkles className="text-amber-400" />,
  exercises: [
    {
      name: "Surya Namaskar B x 10 vòng liên tục",
      sets: "10 vòng không nghỉ, Tốc độ vừa phải",
      target: "Toàn thân, Tim mạch, Sức bền",
      wrong: "Giảm biên độ chuyển động hoặc bỏ qua các tư thế khi mệt.",
      right: "Duy trì đúng form của từng tư thế dù nhịp tim đang cao. Hít — Chuyển động lên. Thở — Chuyển động xuống.",
      fix: "10 vòng Surya B tương đương một bài HIIT Yoga. Nếu đây là lần đầu, hãy bắt đầu với 5 vòng.",
      videoId: "LHmF4_k5EcU"
    },
    {
      name: "Side Plank (Tư thế Cái Nêm — Vasisthasana)",
      sets: "3 hiệp x Giữ 30 giây/mỗi bên",
      target: "Cơ lõi bên (Obliques), Vai, Thăng bằng",
      wrong: "Để hông võng xuống sàn.",
      right: "Nằm nghiêng, chống một tay thẳng. Nâng hông thẳng hàng từ vai đến gót chân. Tay còn lại vươn lên trần.",
      fix: "Nâng thêm một chân lên hoặc nắm ngón chân cái bằng tay trên để tăng độ khó.",
      videoId: "7d-HTp-0vL4"
    },
    {
      name: "Crow Pose (Tư thế Con Quạ — Bakasana)",
      sets: "5-8 lần thử, Giữ càng lâu càng tốt",
      target: "Cơ lõi, Cơ cánh tay, Sự tập trung",
      wrong: "Sợ ngã và không dám dồn trọng lượng về phía trước.",
      right: "Ngồi xổm, đặt tay trên sàn rộng hơn vai. Tựa đầu gối vào cùi chỏ. Nhìn về phía trước và từ từ nhấc chân lên.",
      fix: "Bí quyết là NHÌN VỀ PHÍA TRƯỚC (không nhìn xuống sàn). Và siết bụng thật chắc trước khi nhấc chân. Ngã vào thảm là phần của việc học.",
      videoId: "2uBjpDLf8bw"
    },
    {
      name: "Headstand Prep (Chuẩn bị Đứng Đầu — Sirsasana)",
      sets: "3 lần tập, Giữ 15-30 giây hoặc khi ổn định",
      target: "Vai, Cơ lõi, Thăng bằng, Tuần hoàn não",
      wrong: "Dùng lực đá chân lên thay vì nâng chân có kiểm soát. Dồn trọng lượng lên cổ.",
      right: "Khóa hai bàn tay lại, tạo chỗ tựa cho đỉnh đầu. Duỗi thẳng chân lên tường trước khi tập tự do. 70% trọng lượng đặt vào hai cùi chỏ, không phải đầu.",
      fix: "Tập sát tường trong 1-3 tháng đầu để xây dựng sức mạnh nền tảng. Đây là tư thế Vua của Yoga, đừng vội vàng.",
      videoId: "PpHYrgAdGHA"
    }
  ]
}
];
