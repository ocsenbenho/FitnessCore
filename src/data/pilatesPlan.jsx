import React from 'react';
import { Circle, Zap, Shield, Target, Layers, RefreshCw } from 'lucide-react';

const FALLBACK = "UaqpuUzs1i8";

export const pilatesPlan = [
{
  day: "Buổi 1",
  title: "Hundred & Fundamentals",
  focus: "Kích hoạt Powerhouse, Nền tảng Pilates (Mức độ: ⭐)",
  icon: <Circle className="text-pink-500" />,
  exercises: [
    {
      name: "The Hundred (Bài Một Trăm)",
      sets: "1 lần, 10 hơi thở (100 nhịp bơm tay)",
      target: "Cơ lõi sâu, Ổn định cột sống, Phổi",
      wrong: "Gù cổ và vai thay vì cong phần lưng trên. Nín thở.",
      right: "Nằm ngửa, nhấc chân 45°, cuộn đầu và vai lên. Cánh tay thẳng bơm nhịp nhàng. Hít vào 5 nhịp, thở ra 5 nhịp.",
      fix: "Hãy để ý phần thắt lưng dưới luôn áp sàn. Nếu cổ đau, hãy đặt đầu xuống — đó không phải bài tập cổ.",
      videoId: "UaqpuUzs1i8"
    },
    {
      name: "Single Leg Stretch",
      sets: "3 hiệp x 10 lần/mỗi bên",
      target: "Cơ lõi, Phối hợp tay-chân",
      wrong: "Kéo đầu gối bằng lực cổ. Hông lật bên này sang bên kia.",
      right: "Cuộn phần trên thân lên. Kéo đầu gối về ngực bằng cả hai tay trong khi duỗi thẳng chân kia ra góc 45°.",
      fix: "Hít vào khi chuyển đổi chân. Hãy tưởng tượng hai chân như cánh cần cù bay của chiếc máy bay — nhịp nhàng và đều đặn.",
      videoId: "woYtwok_YUQ"
    },
    {
      name: "Double Leg Stretch",
      sets: "3 hiệp x 10 lần",
      target: "Cơ lõi, Sức mạnh kéo trung tâm",
      wrong: "Lưng dưới nhấc khỏi sàn khi duỗi chân ra.",
      right: "Co hai chân vào ngực, hít vào — duỗi tay và chân ra đường chéo. Thở ra — vòng tay ra ngoài và kéo chân về.",
      fix: "Giảm độ khó bằng cách tăng góc chân (gần 90° hơn). Tăng độ khó khi hạ dần chân về phía sàn (45°, rồi 30°).",
      videoId: "N-jZas9tMSU"
    },
    {
      name: "Spine Stretch Forward",
      sets: "3 hiệp x 8 lần",
      target: "Cột sống, Đùi sau",
      wrong: "Gù lưng hoặc nhún vai khi gập người về trước.",
      right: "Ngồi thẳng, chân dang rộng. Hít vào — cao lên. Thở ra — rướn ngón tay về phía trước, cuộn cột sống từng đốt một.",
      fix: "Hình dung đầu bạn chạm vào một bức tường phía trước và bạn đang trượt dọc theo nó — không phải gập gãy.",
      videoId: "lHzmq4CalFE"
    }
  ]
},
{
  day: "Buổi 2",
  title: "Roll & Articulate",
  focus: "Phân đốt cột sống, Kiểm soát chuyển động (Mức độ: ⭐⭐)",
  icon: <RefreshCw className="text-sky-500" />,
  exercises: [
    {
      name: "Roll Up (Cuộn Người Lên)",
      sets: "3 hiệp x 8-10 lần",
      target: "Cơ lõi, Kiểm soát cột sống",
      wrong: "Dùng đà lắc người để ngồi dậy.",
      right: "Nằm thẳng, tay vươn qua đầu. Hít vào — cằm về ngực. Thở ra — cuộn từng đốt sống lên dần cho đến khi ngồi thẳng. Rồi cuộn ngược về.",
      fix: "Roll Up là bài kiểm tra sức mạnh cơ bụng kinh điển của Pilates. Nếu quá khó, hãy dùng dây kháng lực để hỗ trợ lúc đầu.",
      videoId: "PGnibcCcAUE"
    },
    {
      name: "Rolling Like a Ball",
      sets: "3 hiệp x 10 lần",
      target: "Massage cột sống, Cân bằng, Cơ lõi",
      wrong: "Để cổ chạm sàn khi lăn ra sau.",
      right: "Ngồi ôm gối, cân bằng trên xương ngồi. Hít vào — lăn ra sau đến lưng trên. Thở ra — lăn về và cân bằng lại.",
      fix: "Đừng bao giờ để đầu hoặc cổ tiếp đất. Chuyển động phải được kiểm soát bởi cơ bụng, không phải quán tính.",
      videoId: "Bf9H5FmVRFc"
    },
    {
      name: "Spine Twist",
      sets: "3 hiệp x 6 lần/mỗi bên",
      target: "Cột sống, Cơ lõi chéo (Obliques)",
      wrong: "Hông lệch khỏi vị trí trung tâm khi xoay.",
      right: "Ngồi thẳng, chân khép song song, tay dang ngang. Hít vào — cao lên. Thở ra — xoay thân trên sang một bên 2 lần gập giảm dần.",
      fix: "Hãy nghĩ đến việc vặn xoắn một chiếc khăn — phần trên xoay nhưng phần dưới (hông) không nhúc nhích.",
      videoId: "XbQzj8rjBbw"
    },
    {
      name: "Saw",
      sets: "3 hiệp x 6 lần/mỗi bên",
      target: "Xoay cột sống, Đùi sau, Cơ lõi chéo",
      wrong: "Xoay bằng vai và cánh tay thay vì bằng eo.",
      right: "Ngồi dang chân rộng. Xoay thân sang phải, tay trái cưa về phía chân phải (ngón út nhỏ cưa qua ngón chân út).",
      fix: "Bài tập Saw kết hợp xoay cột sống và gập người — đây là một trong những bài tập kinh điển nhất trong hệ thống Pilates.",
      videoId: "1XcU-WsTcaU"
    }
  ]
},
{
  day: "Buổi 3",
  title: "Side Series",
  focus: "Sculpt cơ đùi, mông và eo (Mức độ: ⭐⭐)",
  icon: <Target className="text-emerald-500" />,
  exercises: [
    {
      name: "Side-Lying Leg Kicks (Đá Chân Nằm Nghiêng)",
      sets: "3 hiệp x 10 lần/mỗi chân",
      target: "Cơ mông giữa, Cơ đùi ngoài",
      wrong: "Xoay hông ra trước hoặc ra sau khi đá chân.",
      right: "Nằm nghiêng thẳng hàng. Hít vào — đá chân trên về phía trước. Thở ra — đưa chân về sau mông.",
      fix: "Giữ cho cơ thể hoàn toàn thẳng hàng như đang kẹp giữa hai tấm kính. Chỉ chân di chuyển, phần thân không lắc.",
      videoId: "nG9JfDHJJlY"
    },
    {
      name: "Clam (Nghêu Mở)",
      sets: "3 hiệp x 15 lần/mỗi bên",
      target: "Cơ mông nhỡ (Gluteus Medius), Xoay ngoài khớp háng",
      wrong: "Hông lăn ra sau khi mở đầu gối.",
      right: "Nằm nghiêng, gối chồng lên nhau. Giữ hông cố định và chỉ mở đầu gối trên lên như vỏ nghêu.",
      fix: "Dây kháng lực quanh đùi sẽ tăng hiệu quả gấp đôi. Đây là bài tập mông cực kỳ phổ biến trong Rehabilitation (Phục hồi chức năng).",
      videoId: "KKi4xbGjfLo"
    },
    {
      name: "Side Plank with Hip Dip",
      sets: "3 hiệp x 12 lần/mỗi bên",
      target: "Cơ lõi bên (Obliques), Cơ đùi ngoài, Vai",
      wrong: "Để hông sập xuống giữa các lần Dip.",
      right: "Tư thế Side Plank. Từ từ hạ hông xuống gần sàn và đẩy lên lại bằng cơ hông, không phải lưng.",
      fix: "Đây là một trong những bài tập eo đẹp hiệu quả nhất. Tập chậm và kiểm soát từng động tác.",
      videoId: "XeN4pEZZJNI"
    },
    {
      name: "Mermaid Stretch (Nàng Tiên Cá)",
      sets: "2 hiệp x Giữ 30 giây/mỗi bên",
      target: "Cơ lõi bên, Eo, Kéo giãn lưng bên",
      wrong: "Ngả người về trước hoặc ra sau thay vì nghiêng sang bên thẳng.",
      right: "Ngồi kiểu nàng tiên cá (một chân trước, một sau). Một tay đặt sàn, tay kia vươn cao và nghiêng người sang bên.",
      fix: "Hít vào để mở rộng lồng ngực, thở ra để nghiêng sâu hơn. Cảm nhận sườn dưới của bên đang kéo giãn.",
      videoId: "iEUBi98L16M"
    }
  ]
},
{
  day: "Buổi 4",
  title: "Teaser & Advanced",
  focus: "Các bài tập nâng cao kinh điển (Mức độ: ⭐⭐⭐)",
  icon: <Zap className="text-yellow-500" />,
  exercises: [
    {
      name: "Teaser I (Cổ Điển Pilates)",
      sets: "3 hiệp x 5-8 lần",
      target: "Cơ lõi toàn bộ, Kiểm soát cột sống",
      wrong: "Dùng đà lắc người. Để lưng dưới nhấc khỏi sàn trước.",
      right: "Nằm ngửa, nâng chân 45°. Hít vào — cuộn thân và chân lên cùng lúc tạo hình chữ V. Thở ra — cuộn về chậm rãi.",
      fix: "Teaser là bài kiểm tra tổng hợp sức mạnh Pilates của bạn. Nếu chưa làm được, hãy tập Roll Up và Double Leg Stretch thành thục trước.",
      videoId: "UJ5gZQSqlXo"
    },
    {
      name: "Corkscrew (Vặn Nút Chai)",
      sets: "3 hiệp x 4 vòng/mỗi hướng",
      target: "Cơ lõi, Ổn định vai, Xoay cột sống",
      wrong: "Lắc lư và xoay hông bằng lực quán tính.",
      right: "Nằm ngửa, chân thẳng lên trần. Vẽ vòng tròn với hai chân, mỗi vòng được điều khiển bởi cơ bụng. Hai vai áp sàn.",
      fix: "Bắt đầu với vòng tròn nhỏ rồi dần mở rộng. Cơ bụng phải làm việc liên tục trong toàn bộ chuyển động.",
      videoId: "Go6UA7SHdoE"
    },
    {
      name: "Swan (Thiên Nga)",
      sets: "3 hiệp x 8 lần",
      target: "Cơ lưng (Erector Spinae), Mở ngực",
      wrong: "Ấn tay xuống sàn bằng lực cánh tay để đẩy người lên.",
      right: "Nằm sấp, tay đặt cạnh ngực. Hít vào — kéo dài cột sống và nâng thân lên từ cơ lưng. Cánh tay chỉ hỗ trợ nhẹ.",
      fix: "Hãy nghĩ đến việc kéo dài chiều dài cột sống thay vì chỉ đẩy người lên. Thiên Nga dài đẹp chứ không phải cong gập.",
      videoId: "Ab4eTe2R8z4"
    },
    {
      name: "Jackknife (Dao Gấp)",
      sets: "3 hiệp x 6-8 lần",
      target: "Cơ lõi toàn bộ, Cơ lưng, Kiểm soát sâu",
      wrong: "Lăn lên bằng quán tính và đá chân lên.",
      right: "Nằm ngửa. Hít vào — cuộn chân lên qua đầu (như Rollover). Thở ra — đẩy chân thẳng lên trần nhà thành hình thẳng đứng. Cuộn người về chậm.",
      fix: "Kiểm soát việc cuộn người xuống chậm hơn việc đẩy lên — đó mới là nơi sức mạnh cơ lõi thực sự được xây dựng.",
      videoId: "OA1MloQcPu0"
    }
  ]
},
{
  day: "Buổi 5",
  title: "Reformer on Mat",
  focus: "Mô phỏng bài Reformer trên thảm (Mức độ: ⭐⭐⭐)",
  icon: <Layers className="text-purple-500" />,
  exercises: [
    {
      name: "Footwork (Mô phỏng Reformer)",
      sets: "3 hiệp x 15 lần/mỗi vị trí bàn chân",
      target: "Cơ chân, Ổn định cột sống",
      wrong: "Để lưng dưới nhấc khỏi sàn khi duỗi chân.",
      right: "Nằm ngửa, chân co gối 90°. Dùng dây kháng lực quanh chân và đạp thẳng theo 3 vị trí: Ngón chân, Lòng bàn chân, Gót chân.",
      fix: "Đây là mô phỏng Footwork cổ điển trên máy Reformer. Tập trung vào việc ổn định cột sống trong khi chân đang hoạt động.",
      videoId: "QDBzjlhKsco"
    },
    {
      name: "Long Stretch Series (Plank Variations)",
      sets: "3 hiệp x 10 lần",
      target: "Chuỗi sau lưng, Cơ lõi, Vai",
      wrong: "Để hông nhấc lên hoặc võng xuống.",
      right: "Tư thế Plank, di chuyển cơ thể theo hai hướng: Đẩy tay về phía gót chân (Nằm nghiêng dài) và kéo lại.",
      fix: "Trong Reformer, Carriage di chuyển. Trên thảm, bạn mô phỏng bằng cách dùng tấm trượt hoặc vớ trơn trên sàn gỗ.",
      videoId: "BfRY99Ka-zQ"
    },
    {
      name: "Short Box Series",
      sets: "3 hiệp x 8 lần/mỗi biến thể",
      target: "Cơ lõi toàn bộ, Cột sống",
      wrong: "Kéo đầu bằng tay khi ngửa người ra sau.",
      right: "Ngồi thẳng, tay khoanh trước ngực. Hít vào — hơi nổi cột sống về phía sau kiểu C-curve. Thở ra — trở lại thẳng.",
      fix: "Biến thể này mô phỏng Short Box trên Reformer. Thêm xoay sang hai bên để kích hoạt cơ Oblique.",
      videoId: "wULLO16q8so"
    },
    {
      name: "Swimming (Bơi trên Cạn)",
      sets: "3 hiệp x 10 nhịp",
      target: "Cơ lưng, Cơ mông, Phối hợp đối xứng",
      wrong: "Nâng quá cao và gập cổ quá mạnh.",
      right: "Nằm sấp, duỗi thẳng tay và chân. Nâng tay/chân đối diện lên cùng lúc theo nhịp bơi. Cằm nhìn xuống sàn.",
      fix: "Đây là bài kinh điển của Pilates cho cơ lưng. Hãy tập trung vào việc kéo dài từ đầu đến ngón chân.",
      videoId: "rbcvbbtB6E0"
    }
  ]
},
{
  day: "Buổi 6",
  title: "Peak Session",
  focus: "Chuỗi đỉnh cao — toàn thân kiểm soát (Mức độ: ⭐⭐⭐⭐)",
  icon: <Shield className="text-rose-600" />,
  exercises: [
    {
      name: "Control Balance (Kiểm Soát Thăng Bằng)",
      sets: "3 hiệp x 5 lần/mỗi bên",
      target: "Cơ lõi toàn bộ, Chuỗi sau, Thăng bằng",
      wrong: "Mất kiểm soát và để chân ngã đột ngột.",
      right: "Từ Rollover (chân qua đầu), giữ một chân thẳng lên trời trong khi chân kia hạ xuống sàn. Đổi chân có kiểm soát.",
      fix: "Tư thế này yêu cầu sức mạnh, sự linh hoạt và sự kiểm soát đồng thời. Tập chắc các bài trước mới chuyển sang bài này.",
      videoId: "0O_Tay-g3NY"
    },
    {
      name: "Boomerang",
      sets: "3 hiệp x 5 lần",
      target: "Toàn thân, Chuỗi liên hoàn cổ điển",
      wrong: "Tách biệt từng động tác thay vì chảy liền mạch.",
      right: "Chuỗi: Teaser lên → chân chéo qua nhau → lăn ra sau → đổi chân chéo → lăn về Teaser → mở rộng ngực → cúi người về trước.",
      fix: "Boomerang là chuỗi tổng hợp toàn bộ nguyên tắc Pilates. Chuyển động phải chảy như nước, không có điểm dừng.",
      videoId: "SRonJI25raE"
    },
    {
      name: "Push Up (Pilates Style)",
      sets: "3 hiệp x 10 lần",
      target: "Cơ ngực, Cơ tam đầu, Cơ lõi",
      wrong: "Tách Push-Up ra khỏi chuỗi chuyển động.",
      right: "Từ đứng, cuộn người xuống Walk-out đến Plank → thực hiện 5 Push-Up Pilates (cùi chỏ sát thân) → Walk-in → cuộn người lên đứng thẳng.",
      fix: "Đây là lần duy nhất trong Pilates cổ điển bạn thực sự đứng dậy và đứng thẳng trong chuỗi. Hãy tận hưởng và tập trung vào sự hoàn hảo của mỗi Push-Up.",
      videoId: "KJ_UP2m1hmk"
    },
    {
      name: "The Seal (Con Hải Cẩu — Phiên bản nâng cao Rolling Like a Ball)",
      sets: "3 hiệp x 10 lần",
      target: "Massage cột sống, Cơ lõi, Cân bằng",
      wrong: "Để cổ va vào sàn khi lăn.",
      right: "Ngồi cân bằng, đưa tay qua dưới cẳng chân nắm bàn chân. Vỗ bàn chân 3 lần ở mỗi đầu lăn.",
      fix: "Đây là bài tập cuối cùng truyền thống trong hệ thống Mat Pilates của Joseph Pilates. Kết thúc buổi tập bằng nụ cười!",
      videoId: "G5zO03AJlwU"
    }
  ]
}
];
