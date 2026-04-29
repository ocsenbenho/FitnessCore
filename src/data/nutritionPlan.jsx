import React from 'react';
import { Utensils, Apple, Coffee, ChefHat } from 'lucide-react';

export const nutritionPlan = [
{
day: "Tuần 1",
title: "Làm quen Dinh Dưỡng",
focus: "Thiết lập thói quen ăn uống lành mạnh, nhanh gọn",
icon: <Apple className="text-red-500" />,
exercises: [
{
name: "Ngày 1: Ức gà xào sả ớt & Cơm lứt",
macros: "450 kcal | 40g Protein | 45g Carb | 10g Fat",
ingredients: "200g ức gà, 2 củ sả, 1 trái ớt, 1 chén cơm lứt, 100g rau muống luộc, nước mắm, xì dầu.",
recipe: "1. Thái ức gà hạt lựu vừa ăn.\n2. Băm nhỏ sả và ớt.\n3. Phi thơm sả ớt với 1 thìa dầu ô liu.\n4. Cho ức gà vào xào săn, nêm nước mắm và xì dầu vừa miệng.\n5. Xào lửa lớn đến khi gà chín tới (khoảng 5-7 phút) để tránh bị khô.",
fix: "Ức gà rất dễ bị khô nếu nấu quá lâu. Bí quyết là thái miếng nhỏ đều nhau và xào nhanh trên lửa lớn.",
videoId: "8ETQZmR0Onw" // Not used for nutrition
},
{
name: "Ngày 2: Bò lúc lắc khoai lang",
macros: "520 kcal | 35g Protein | 55g Carb | 15g Fat",
ingredients: "150g thịt bò nạc (thăn/mông), 150g khoai lang, 1/2 củ hành tây, 1/2 quả ớt chuông, dầu hào, tiêu.",
recipe: "1. Thịt bò cắt vuông lúc lắc, ướp dầu hào, tiêu, tỏi băm 15 phút.\n2. Khoai lang cắt vuông, luộc sơ rồi áp chảo xém cạnh (hoặc nướng nồi chiên không dầu).\n3. Xào nhanh thịt bò lửa lớn, cho hành tây và ớt chuông vào đảo đều.\n4. Trút ra dĩa ăn kèm khoai lang.",
fix: "Thịt bò chỉ nên xào tái chín tới để giữ độ mềm ngọt. Khoai lang thay thế khoai tây chiên giúp giảm lượng Fat xấu.",
videoId: "xabT_YwcyV0"
},
{
name: "Ngày 3: Cá chẽm áp chảo bơ tỏi",
macros: "400 kcal | 35g Protein | 30g Carb | 12g Fat",
ingredients: "200g phi lê cá chẽm (hoặc cá diêu hồng), 10g bơ lạt, tỏi băm, măng tây, 1 lát chanh, 1 chén cơm.",
recipe: "1. Ướp cá với muối tiêu.\n2. Cho bơ vào chảo, phi tỏi cho thơm.\n3. Áp chảo cá mỗi mặt 3-4 phút đến khi vàng ruộm.\n4. Áp chảo măng tây cùng lúc. Vắt chanh lên cá trước khi ăn.",
fix: "Bơ cung cấp chất béo tốt và mùi thơm tuyệt vời, nhưng hãy dùng bơ lạt (unsalted) để kiểm soát lượng muối.",
videoId: "FSAOyHGB3Fg"
},
{
name: "Ngày 4: Trứng đúc thịt băm mộc nhĩ",
macros: "480 kcal | 30g Protein | 40g Carb | 18g Fat",
ingredients: "3 quả trứng gà, 100g thịt nạc heo băm, mộc nhĩ (nấm mèo), hành lá, 1 chén cơm trắng.",
recipe: "1. Ngâm mềm mộc nhĩ, băm nhuyễn.\n2. Trộn đều thịt băm, mộc nhĩ, hành lá, tiêu, hạt nêm.\n3. Đập 3 quả trứng vào đánh tan cùng hỗn hợp.\n4. Phết ít dầu mỏng lên chảo chống dính, đổ hỗn hợp vào đậy nắp lửa nhỏ đến khi chín đều.",
fix: "Trứng là nguồn Protein hoàn chỉnh siêu rẻ. Lòng đỏ có Cholesterol nhưng chứa rất nhiều Vitamin, nếu không siết mỡ gắt gao thì ăn cả lòng đỏ là rất tốt.",
videoId: "I59viDDclY0"
},
{
name: "Ngày 5: Đậu hũ dồn thịt sốt cà",
macros: "420 kcal | 32g Protein | 45g Carb | 12g Fat",
ingredients: "2 miếng đậu hũ trắng, 100g thịt gà/heo băm, 2 quả cà chua, hành lá, 1 chén cơm.",
recipe: "1. Rạch một đường trên đậu hũ, nhồi thịt băm đã ướp gia vị vào giữa.\n2. Áp chảo đậu hũ cho xém vàng mặt thịt.\n3. Băm nhỏ cà chua, xào nát thành sốt, nêm nếm vừa ăn.\n4. Bỏ đậu hũ nhồi vào chảo sốt om lửa nhỏ 10 phút.",
fix: "Đậu nành cung cấp lượng đạm thực vật chất lượng cao. Việc kết hợp đạm động vật (thịt nhồi) và thực vật (đậu hũ) là cách thông minh để cân bằng dinh dưỡng.",
videoId: "bmzS3FXEDQs"
},
{
name: "Ngày 6: Cơm chiên ức gà ngũ sắc",
macros: "500 kcal | 38g Protein | 55g Carb | 10g Fat",
ingredients: "150g ức gà, 1 chén cơm nguội (lứt/trắng), đậu cô ve, cà rốt, bắp hạt, 1 quả trứng.",
recipe: "1. Luộc qua rau củ xắt hạt lựu. Ức gà xắt hạt lựu xào chín.\n2. Trộn trứng sống vào cơm nguội để hạt cơm tơi vàng.\n3. Đảo cơm xém hạt, cho gà và rau củ vào đảo chung. Nêm xì dầu, tiêu.",
fix: "Sử dụng cơm nguội (cơm để tủ lạnh qua đêm) sẽ tạo ra tinh bột kháng (Resistant starch) giúp đường huyết tăng chậm hơn so với cơm nóng.",
videoId: "9W85hbrhisI"
},
{
name: "Ngày 7: Mực xào cần tây",
macros: "380 kcal | 35g Protein | 40g Carb | 5g Fat",
ingredients: "200g mực ống tươi, cần tây, hành tây, cà chua, 1 chén cơm.",
recipe: "1. Mực làm sạch, khía vảy rồng, ướp chút gừng rượu khử tanh.\n2. Cần tây, hành tây, cà chua xắt múi cau.\n3. Phi thơm hành, xào nhanh mực lửa lớn rồi trút ra đĩa.\n4. Xào rau củ chín tới, đổ mực vào đảo nhanh 1 phút rồi tắt bếp.",
fix: "Mực chứa cực kỳ ít chất béo nhưng lại rát giàu Protein và Kẽm. Rất phù hợp cho một ngày ăn 'sạch' (Clean) cuối tuần.",
videoId: "AiB4FegeJm4"
}
]
},
{
day: "Tuần 2",
title: "Phát triển Đa Lượng",
focus: "Bổ sung nguồn Protein phong phú để nuôi dưỡng cơ bắp",
icon: <Utensils className="text-orange-500" />,
exercises: [
{
name: "Ngày 8: Thịt bò xào măng tây",
macros: "460 kcal | 35g Protein | 40g Carb | 15g Fat",
ingredients: "150g thịt thăn bò, 150g măng tây, tỏi băm, 1 chén cơm lứt.",
recipe: "1. Bò thái mỏng, ướp dầu hào.\n2. Măng tây bẻ khúc non, luộc sơ 1 phút rồi ngâm nước đá cho giòn.\n3. Phi tỏi, xào bò tái rồi trút ra. Xào măng tây nhanh tay rồi cho bò vào đảo lại. Rắc tiêu.",
fix: "Măng tây là 'vua rau xanh' cho dân tập gym nhờ lượng Folate, Kali và chất xơ tuyệt vời giúp phục hồi cơ.",
videoId: "PtfmA1iSckI"
},
{
name: "Ngày 9: Tôm rim mặn ngọt & Canh mồng tơi",
macros: "430 kcal | 32g Protein | 45g Carb | 8g Fat",
ingredients: "200g tôm sú/tôm thẻ bỏ đầu, 1 thìa mật ong, nước mắm, hành tím, mồng tơi, 1 chén cơm.",
recipe: "1. Tôm ướp nước mắm, tiêu, hành tím băm.\n2. Đun chảo nóng, cho tôm vào rim lửa riu riu. Thêm 1 thìa mật ong để tạo màu nâu cánh gián và vị ngọt thanh.\n3. Canh mồng tơi nấu tép hoặc thịt băm ăn kèm.",
fix: "Tôm cung cấp lượng Canxi dồi dào từ vỏ non. Dùng mật ong thay đường cát trắng giúp bữa ăn lành mạnh hơn.",
videoId: "lQTEN9TX9TI"
},
{
name: "Ngày 10: Gà áp chảo xốt nấm kem",
macros: "550 kcal | 42g Protein | 40g Carb | 20g Fat",
ingredients: "200g ức gà/đùi gà rút xương, 100g nấm đùi gà/nấm rơm, 50ml sữa tươi không đường, tỏi, 1 chén cơm/khoai lang.",
recipe: "1. Gà áp chảo chín vàng hai mặt. Trút ra dĩa.\n2. Dùng chảo đó xào nấm với tỏi.\n3. Đổ sữa tươi không đường vào chảo nấm đun sệt, nêm muối tiêu.\n4. Rưới xốt nấm sữa lên miếng gà.",
fix: "Dùng sữa tươi thay vì Heavy Cream giúp bạn có món xốt phong cách Âu cực ngon mà lượng Calo vẫn thấp.",
videoId: "5k09veeCu6c"
},
{
name: "Ngày 11: Cá hồi nướng măng tây",
macros: "520 kcal | 35g Protein | 30g Carb | 22g Fat",
ingredients: "150g cá hồi phi lê, 100g măng tây, nửa quả chanh vàng, muối hồng, tiêu, dầu oliu.",
recipe: "1. Rắc muối hồng và tiêu lên 2 mặt cá hồi.\n2. Lót măng tây dưới khay nướng, đặt cá hồi lên trên. Rưới 1 thìa dầu oliu và vài lát chanh vàng.\n3. Nướng nồi chiên không dầu 180 độ trong 12 phút.",
fix: "Mỡ cá hồi chứa rất nhiều Omega-3 siêu tốt cho khớp và giảm viêm sau những buổi tập tạ nặng.",
videoId: "5oBOsumL8Uo"
},
{
name: "Ngày 12: Bún gạo lứt xào thịt băm",
macros: "480 kcal | 35g Protein | 55g Carb | 12g Fat",
ingredients: "100g bún gạo lứt khô, 150g thịt bò/heo nạc băm, cải ngọt, cà rốt xắt sợi.",
recipe: "1. Trụng bún gạo lứt chín tới, vớt ra xả nước lạnh, trộn xíu dầu cho khỏi dính.\n2. Xào thịt băm chín tơi.\n3. Cho rau cải và cà rốt vào xào xẹp xuống.\n4. Đổ bún vào chảo đảo đều, nêm tương tương, dầu hào, tương ớt.",
fix: "Đổi gió sang ăn bún thay cơm để đỡ ngán. Bún lứt dai ngon và giàu chất xơ không kém gì cơm lứt.",
videoId: "DtEopJzqjDU"
},
{
name: "Ngày 13: Salad ức gà xé phay & Trứng luộc",
macros: "380 kcal | 45g Protein | 15g Carb | 15g Fat",
ingredients: "200g ức gà luộc xé sợi, 2 quả trứng luộc, xà lách, cà chua bi, dưa leo, sốt mè rang (1 thìa).",
recipe: "1. Trứng luộc lòng đào (6 phút), bổ đôi.\n2. Rau củ rửa sạch xắt miếng vừa ăn.\n3. Bày rau, ức gà xé sợi và trứng ra đĩa. Rưới 1-2 thìa sốt mè rang lên trên.",
fix: "Bữa ăn nhẹ bụng hoàn hảo cho những ngày Rest Day (Không tập luyện) vì lượng Carb rất thấp, tối ưu quá trình đốt mỡ.",
videoId: "KI7AtMZNlhQ"
},
{
name: "Ngày 14: Đậu cove xào bò",
macros: "450 kcal | 35g Protein | 45g Carb | 12g Fat",
ingredients: "150g thịt bò mông/thăn, 150g đậu cove, tỏi băm, 1 chén cơm.",
recipe: "1. Bò thái mỏng ướp gia vị.\n2. Đậu cove tước xơ, xắt chéo.\n3. Phi tỏi, xào bò xém cạnh trút ra.\n4. Xào đậu cove xém vàng, thêm tí nước om 2 phút cho mềm. Trút bò vào đảo lại.",
fix: "Đậu cove là nguồn chất xơ dai dẳng và no lâu. Xào đậu xém vàng trước khi om nước sẽ làm đậu có mùi thơm khói rất bắt cơm.",
videoId: "oVL8qGPYprA"
}
]
},
{
day: "Tuần 3",
title: "Bứt phá giới hạn",
focus: "Đa dạng hóa món ăn, giữ lửa động lực",
icon: <ChefHat className="text-amber-600" />,
exercises: [
{
name: "Ngày 15: Cơm lứt cuộn rong biển (Kimbap Lean)",
macros: "480 kcal | 35g Protein | 55g Carb | 12g Fat",
ingredients: "2 lá rong biển, 1 chén cơm lứt ấm, 150g ức gà/cá ngừ lon nước, dưa leo, cà rốt, 1 quả trứng chiên mỏng xắt sợi.",
recipe: "1. Trải rong biển, dàn mỏng cơm lứt (chừa 2cm viền).\n2. Xếp dọc ức gà xé/cá ngừ, dưa leo, cà rốt, trứng.\n3. Cuộn chặt tay và cắt khoanh tròn.",
fix: "Đem theo đi làm cực kỳ tiện lợi và ngon miệng khi chấm cùng chút nước tương pha wasabi.",
videoId: "peYF0o2X4Kk"
},
{
name: "Ngày 16: Nui xào bò xốt xì dầu",
macros: "500 kcal | 35g Protein | 60g Carb | 12g Fat",
ingredients: "100g nui ống (nui rau củ/nui lứt càng tốt), 150g thịt bò, hành tây, cải ngọt.",
recipe: "1. Luộc nui mềm, xả nước lạnh.\n2. Bò xào hành tây cho thơm tơi ra.\n3. Cho rau và nui vào đảo. Rưới hỗn hợp xì dầu + tương ớt + chút đường ăn kiêng vào.",
fix: "Pasta/Nui là dạng tinh bột giải phóng chậm tuyệt vời giúp bạn có năng lượng bền bỉ cho một buổi tập tạ kéo dài.",
videoId: "K3hbzLVI0yE"
},
{
name: "Ngày 17: Gà viên nướng xốt chua ngọt",
macros: "460 kcal | 40g Protein | 45g Carb | 10g Fat",
ingredients: "200g ức gà xay, hành tây băm nhuyễn, tương cà (ketchup), giấm táo, 1 chén cơm.",
recipe: "1. Trộn gà xay với hành tây, vo viên vừa ăn. Bỏ nồi chiên không dầu 15 phút.\n2. Đun sôi tương cà, giấm táo, chút đường ăn kiêng tạo thành xốt sệt.\n3. Lăn gà viên đã nướng vào xốt cho thấm đều.",
fix: "Hành tây băm nhuyễn trộn vào ức gà xay sẽ làm viên thịt khi nướng xong mọng nước (juicy) và không hề bị khô cứng.",
videoId: "qPdHe8ay_1A"
},
{
name: "Ngày 18: Bò nhúng dấm cuốn bánh tráng rau rừng",
macros: "420 kcal | 35g Protein | 40g Carb | 12g Fat",
ingredients: "150g thịt bò thăn thái lát mỏng, dứa (thơm), giấm gạo, sả, xà lách, rau thơm các loại, 2-3 xấp bánh tráng lứt.",
recipe: "1. Pha nước nhúng: Nước dừa tươi đun sôi cùng dấm, sả đập dập, hành tây xắt múi.\n2. Nhúng bò tái chín.\n3. Cuộn bò với rất nhiều rau sống, chấm nước mắm nêm hoặc mắm tỏi ớt.",
fix: "Bữa ăn cuối tuần đánh lừa vị giác (Cheat meal nhưng rất Clean) nhờ ăn được một lượng khổng lồ rau xanh và nói không với dầu mỡ.",
videoId: "WN5A-nsiB1A"
},
{
name: "Ngày 19: Cá hộp (Tuna) sốt cà chua",
macros: "380 kcal | 30g Protein | 45g Carb | 8g Fat",
ingredients: "1 hộp cá ngừ ngâm nước (Tuna in water), 2 quả cà chua, hành tím, 1 chén cơm.",
recipe: "1. Cà chua băm xào nát nhuyễn làm xốt.\n2. Trút lon cá ngừ (chắt bỏ nước) vào xốt cà, nêm nếm gia vị và tiêu sọ đập dập.\n3. Đun lửa riu riu 5 phút cho cá ngấm xốt.",
fix: "Ngày lười biếng không muốn đi chợ! Cá ngừ hộp in water chứa lượng protein tinh khiết cực khủng và hầu như không có mỡ.",
videoId: "ccccNoRJPLw"
},
{
name: "Ngày 20: Tôm xào bông cải xanh",
macros: "390 kcal | 32g Protein | 40g Carb | 6g Fat",
ingredients: "200g tôm thẻ làm sạch, 150g bông cải xanh (Broccoli), tỏi, 1 chén cơm.",
recipe: "1. Tôm xào xém vỏ trút ra đĩa.\n2. Bông cải xanh xào xém mặt, thêm 2 thìa nước lạnh đậy nắp vung 1 phút cho chín hơi.\n3. Trút tôm vào đảo đều với bông cải, rắc thật nhiều tiêu.",
fix: "Bông cải xanh (Broccoli) chứa Diindolylmethane (DIM) giúp cân bằng nội tiết tố và hỗ trợ sản sinh Testosterone tự nhiên tốt cho cơ bắp.",
videoId: "0sRIMseqN1w"
},
{
name: "Ngày 21: Gà áp chảo xốt Teriyaki Nhật",
macros: "470 kcal | 38g Protein | 50g Carb | 10g Fat",
ingredients: "200g ức gà/má đùi rút xương, 2 thìa xì dầu, 1 thìa mật ong, gừng băm, 1 chén cơm lứt.",
recipe: "1. Pha xốt Teriyaki: Xì dầu + mật ong + gừng băm + tí nước.\n2. Áp chảo gà hai mặt cho săn lại.\n3. Rưới xốt vào chảo, đun nhỏ lửa cho xốt kẹo lại áo một lớp bóng loáng lên miếng gà. Rắc mè rang.",
fix: "Món này ngon không kém nhà hàng Nhật. Đừng luộc ức gà nữa, Teriyaki là chân ái để xơi hết bát cơm gạo lứt khô khan.",
videoId: "gbfXhzofWKs"
}
]
},
{
day: "Tuần 4",
title: "Hoàn Thiện Thói Quen",
focus: "Bữa ăn sang trọng nhưng vẫn Clean & Lean",
icon: <Coffee className="text-stone-600" />,
exercises: [
{
name: "Ngày 22: Phở gà gạo lứt tự nấu",
macros: "410 kcal | 38g Protein | 45g Carb | 8g Fat",
ingredients: "200g ức gà/đùi gà luộc, 1 vắt phở gạo lứt, hành ngò, 1 củ hành tây nướng, hoa hồi/quế (nếu có).",
recipe: "1. Hầm xương gà/cổ cánh gà với hành tây nướng và hoa hồi lấy nước ngọt trong 30p.\n2. Trụng phở lứt.\n3. Xé thịt gà xếp lên phở, chan nước dùng trong vắt, thêm hành lá cắt nhỏ.",
fix: "Nước dùng hầm nhà tự làm không có bột ngọt và mỡ nổi. Bữa sáng sưởi ấm tâm hồn và cung cấp đầy đủ dưỡng chất.",
videoId: "36E3XXqab40"
},
{
name: "Ngày 23: Trứng ốp la cuộn thịt xông khói & Khoai lang",
macros: "450 kcal | 25g Protein | 40g Carb | 20g Fat",
ingredients: "2 quả trứng gà, 2 lát thịt xông khói (Bacon) chiên áp chảo cạn mỡ, 1 củ khoai lang luộc.",
recipe: "1. Áp chảo thịt xông khói cho mỡ tiết ra hết, chắt bỏ mỡ.\n2. Dùng chảo đó ốp la 2 quả trứng.\n3. Ăn kèm khoai lang luộc ngọt lịm.",
fix: "Bữa sáng phong cách Mỹ. Chất béo từ Bacon không hề xấu nếu bạn ăn vừa phải, nó kích thích hormone Testosterone.",
videoId: "eEwUNg3S78U"
},
{
name: "Ngày 24: Bò lúc lắc hạt điều",
macros: "540 kcal | 38g Protein | 40g Carb | 22g Fat",
ingredients: "150g thăn bò thái vuông, 20g hạt điều rang, ớt chuông, hành tây, 1 chén cơm.",
recipe: "1. Bò xào lúc lắc trên chảo nóng hổi cùng hành tây, ớt chuông.\n2. Khi tắt bếp, rắc hạt điều rang vào xóc đều để hạt điều vẫn giữ độ giòn.",
fix: "Hạt điều là nguồn chất béo không bão hòa cực kỳ tốt cho tim mạch và não bộ, biến đĩa bò lúc lắc thêm phần đẳng cấp.",
videoId: "xabT_YwcyV0"
},
{
name: "Ngày 25: Cơm cá thu xốt cà",
macros: "460 kcal | 30g Protein | 45g Carb | 15g Fat",
ingredients: "1 khúc cá thu tươi/đông lạnh, 2 quả cà chua, tỏi, 1 chén cơm lứt.",
recipe: "1. Cá thu chiên áp chảo xém vàng mặt ngoài.\n2. Nấu xốt cà chua nhuyễn mịn, nêm nếm chua ngọt mặn mặn.\n3. Đặt khúc cá thu vào xốt om 10 phút. Rắc hành ngò tiêu sọ.",
fix: "Cá thu thịt chắc nịch và giàu đạm như thịt bò, nhưng lại sở hữu lượng Omega-3 và Vitamin D cực lớn.",
videoId: "-CVggcq5GXg"
},
{
name: "Ngày 26: Salad ức gà áp chảo sốt chanh leo",
macros: "350 kcal | 42g Protein | 15g Carb | 10g Fat",
ingredients: "200g ức gà áp chảo, 2 quả chanh leo, 1 thìa mật ong, xà lách đủ loại.",
recipe: "1. Ức gà áp chảo nguyên miếng, để nguội bớt rồi thái lát.\n2. Xốt: Nước cốt chanh leo + mật ong + xíu muối, khuấy đều.\n3. Rưới xốt chanh leo chua ngọt lên dĩa salad ức gà.",
fix: "Low Carb day! Nước xốt chanh leo chua thanh giúp bạn ăn sạch sành sanh thau salad rau mà không hề bị ngấy.",
videoId: "laikQNPXlUA"
},
{
name: "Ngày 27: Cơm sườn cốt lết ram mặn ngọt",
macros: "500 kcal | 35g Protein | 45g Carb | 15g Fat",
ingredients: "150g sườn cốt lết (cắt mỏng, lược bỏ viền mỡ), hành tỏi băm, xì dầu, mật ong, 1 chén cơm.",
recipe: "1. Dần thịt cốt lết cho mềm. Ướp xì dầu, tiêu, hành tỏi băm.\n2. Áp chảo thịt với xíu dầu ô liu. Khi thịt xém mặt, đổ 1 thìa mật ong pha nước vào rim keo lại.",
fix: "Cốt lết heo là phần nạc nhất của con heo, lượng Protein cao gần bằng ức gà. Lưu ý chỉ rim chín tới để tránh thịt khô nhách.",
videoId: "I3Hefn1ynew"
},
{
name: "Ngày 28: Đậu hũ xào nấm đông cô & măng tây",
macros: "380 kcal | 20g Protein | 50g Carb | 10g Fat",
ingredients: "2 miếng đậu hũ non/trắng chiên sơ, nấm đông cô khô ngâm nở, măng tây, 1 chén cơm lứt.",
recipe: "1. Nấm đông cô luộc qua cho bớt mùi hăng. Thái lát.\n2. Xào măng tây và nấm, cho đậu hũ vào đảo nhẹ tay khỏi nát. Nêm dầu hào chay hoặc xì dầu nấm hương.",
fix: "Meatless day (Ngày không thịt) giúp hệ tiêu hóa được nghỉ ngơi, cơ thể detox nhẹ nhàng nhưng vẫn đủ Carb/Đạm thực vật để nạp năng lượng.",
videoId: "HPsrPZzuFgo"
},
{
name: "Ngày 29: Hamburger tự làm (Bò & Trứng)",
macros: "520 kcal | 40g Protein | 45g Carb | 18g Fat",
ingredients: "1 cặp vỏ bánh Hamburger (ưu tiên loại nguyên cám), 120g bò xay nhuyễn vo viên ép dẹp, 1 quả trứng ốp la, xà lách, cà chua.",
recipe: "1. Áp chảo miếng Patty (Bò xay ép dẹp) trên chảo gang.\n2. Ốp la trứng, nướng sơ hai vỏ bánh cho giòn.\n3. Xếp bánh: Vỏ bánh -> Xà lách -> Cà chua -> Bò -> Trứng -> Vỏ bánh. Xịt xíu tương ớt/Ketchup.",
fix: "Cheat meal thần thánh! Burger tự làm không độn mỡ, không xốt béo mayonaise mặn chát là món quà tự thưởng tuyệt vời sau 28 ngày kiên trì.",
videoId: "NI5He1KO4r0"
},
{
name: "Ngày 30: Yến mạch ngâm sữa (Overnight Oats) & Bột Whey",
macros: "400 kcal | 35g Protein | 45g Carb | 8g Fat",
ingredients: "50g yến mạch cán dẹt, 150ml sữa không đường, 1 muỗng Whey Protein (Vị socola/vani), nửa quả chuối, hạt chia.",
recipe: "1. Trộn yến mạch, sữa, bột Whey, hạt chia vào một cái hũ thủy tinh.\n2. Lắc đều, đóng nắp bỏ tủ lạnh để qua đêm.\n3. Sáng hôm sau lấy ra rắt chuối xắt lát lên trên và thưởng thức.",
fix: "Bữa sáng siêu tốc thần thánh không cần nổi lửa. Lạnh buốt, béo ngậy vị sữa và bùng nổ Protein. Chúc mừng bạn đã hoàn thành 30 Ngày Dinh Dưỡng!",
videoId: "AymAqwbKJZg"
}
]
}
];
