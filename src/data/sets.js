 const ALL_SETS = {
            // --- NHÓM ĐỘNG VẬT ---
            ma: {
                id: 'ma', category: 'nhom_dong_vat',
                name: 'Bộ chữ Mã', title: 'CHÚ NGỰA LEGO',
                subtitle: 'Chạm vào chú ngựa để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Chú ngựa Bính Ngọ: Mã Đáo Thành Công!',
                theme: { primary: 'bg-red-600', secondary: 'bg-yellow-400', text: 'text-red-700' },
                core: { char: '马', pinyin: 'Mǎ', hanviet: 'MÃ', meaning: 'Con ngựa', story: 'Đây là "người nhắc bài" về âm thanh. Thấy chú ngựa là thấy âm Ma/Mã!' },
                extensions: [
                    { id: 1, radical: '女', radicalName: 'Nữ', result: '妈', pinyin: 'mā', hanviet: 'MẸ', story: 'Người phụ nữ (女) vất vả lo cho con như chú ngựa (马) cần mẫn.', iconId: 'heart' },
                    { id: 2, radical: '口', radicalName: 'Khẩu', result: '吗', pinyin: 'ma', hanviet: 'CÂU HỎI', story: 'Dùng miệng (口) hỏi thăm chú ngựa (马) xem có mệt không?', iconId: 'yarn' },
                    { id: 3, radical: '虫', radicalName: 'Trùng', result: '蚂', pinyin: 'mǎ', hanviet: 'CON KIẾN', story: 'Loài sâu bọ (虫) mà chạy nhanh và chăm chỉ như ngựa (马) chính là con kiến.', iconId: 'feet' },
                    { id: 4, radical: '石', radicalName: 'Thạch', result: '码', pinyin: 'mǎ', hanviet: 'MÃ SỐ', story: 'Hòn đá (石) bên đường giúp ngựa (马) biết mình đã chạy được bao nhiêu dặm.', iconId: 'feet' },
                    { id: 5, radical: '口口', radicalName: 'Song Khẩu', result: '骂', pinyin: 'mà', hanviet: 'MẮNG', story: 'Hai cái miệng (口口) tranh nhau một chú ngựa (马) nên xảy ra cãi cọ.', iconId: 'heart' },
                    { id: 6, radical: '王', radicalName: 'Vương', result: '玛', pinyin: 'mǎ', hanviet: 'MÃ NÃO', story: 'Viên đá quý (王) đẹp như vẻ dũng mãnh của loài ngựa (马).', iconId: 'pearl' }
                ]
            },
            yang: {
                id: 'yang', category: 'nhom_dong_vat',
                name: 'Bộ chữ Dương', title: 'CHÚ DÊ LEGO',
                subtitle: 'Chạm vào chú dê để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Đàn dê thảo nguyên: Dương Dương Tự Đắc!',
                theme: { primary: 'bg-blue-600', secondary: 'bg-blue-300', text: 'text-blue-800' },
                core: { char: '羊', pinyin: 'Yáng', hanviet: 'DƯƠNG', meaning: 'Con dê', story: 'Chú dê (羊) hiền lành với bộ lông trắng muốt là người dẫn đường cho âm Yang!' },
                extensions: [
                    { id: 1, radical: '氵', radicalName: 'Thủy', result: '洋', pinyin: 'yáng', hanviet: 'ĐẠI DƯƠNG', story: 'Những con sóng biển (氵) trắng xóa như đàn dê (羊) đang chạy nhảy.', iconId: 'water' },
                    { id: 2, radical: '木', radicalName: 'Mộc', result: '样', pinyin: 'yàng', hanviet: 'KIỂU MẪU', story: 'Người ta dùng gỗ (木) để tạc tượng chú dê (羊) làm mẫu.', iconId: 'wood' },
                    { id: 3, radical: '飠', radicalName: 'Thực', result: '养', pinyin: 'yǎng', hanviet: 'NUÔI DƯỠNG', story: 'Muốn nuôi dê (羊) mau lớn, phải cho nó thức ăn (飠) thật ngon.', iconId: 'cake' },
                    { id: 4, radical: '气', radicalName: 'Khí', result: '氧', pinyin: 'yǎng', hanviet: 'Ô-XY', story: 'Khí (气) quan trọng như sự sống của đàn dê trên thảo nguyên.', iconId: 'sun' },
                    { id: 5, radical: '疒', radicalName: 'Bệnh', result: '痒', pinyin: 'yǎng', hanviet: 'NGỨA', story: 'Khi bị ốm (疒), da dẻ khó chịu như có chú dê đang cọ sừng gây ngứa!', iconId: 'feet' }
                ]
            },
            long: {
                id: 'long', category: 'nhom_dong_vat',
                name: 'Bộ chữ Long', title: 'BẠN RỒNG LEGO',
                subtitle: 'Chạm vào bạn rồng để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Bạn Rồng nhỏ nhắc âm đọc (long), học chữ Hán thật vui!',
                theme: { primary: 'bg-emerald-600', secondary: 'bg-emerald-200', text: 'text-emerald-900' },
                core: { char: '龙', pinyin: 'Lóng', hanviet: 'LONG', meaning: 'Con rồng', story: 'Bạn rồng nhỏ (龙) dũng mãnh là người dẫn đường cho âm Long!' },
                extensions: [
                    { id: 1, radical: '⺮', radicalName: 'Trúc', result: '笼', pinyin: 'lóng', hanviet: 'CÁI LỒNG', story: 'Đội mũ Tre (⺮) lên đầu bạn rồng (龙), hóa thành Cái Lồng (笼).', iconId: 'wood' },
                    { id: 2, radical: '扌', radicalName: 'Thủ', result: '拢', pinyin: 'lǒng', hanviet: 'GOM LẠI', story: 'Vẫy bàn Tay (扌) mời bạn rồng (龙) đến, Gom Lại (拢) thật đông vui.', iconId: 'yarn' },
                    { id: 3, radical: '耳', radicalName: 'Nhĩ', result: '聋', pinyin: 'lóng', hanviet: 'ĐIẾC', story: 'Có mỗi cái Tai (耳), nên rồng (龙) bị Điếc (聋) rồi!', iconId: 'feet' },
                    { id: 4, radical: '王', radicalName: 'Vương', result: '珑', pinyin: 'lóng', hanviet: 'LUNG LINH', story: 'Đeo viên Ngọc (王) quý cho rồng (龙), rồng tỏa sáng Lung Linh (珑).', iconId: 'pearl' },
                    { id: 5, radical: '氵', radicalName: 'Thủy', result: '泷', pinyin: 'shuāng', hanviet: 'THÁC', story: 'Dòng Nước (氵) chảy qua mình rồng (龙) tạo thành dòng Thác (泷).', iconId: 'water' },
                    { id: 6, radical: '土', radicalName: 'Thổ', result: '垄', pinyin: 'lǒng', hanviet: 'GÒ ĐẤT', story: 'Rồng (龙) đứng trên Đất (土), trông như một Gò Đất (垄) cao vút.', iconId: 'feet' }
                ]
            },
            // --- NHÓM GIA ĐÌNH ---
            di: {
                id: 'di', category: 'nhom_gia_dinh',
                name: 'Bộ chữ Đệ', title: 'EM TRAI LEGO',
                subtitle: 'Chạm vào em trai để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Em trai (弟) nhỏ, gọi là “đệ”. Cùng xem em trai biến hóa nhé!',
                theme: { primary: 'bg-indigo-600', secondary: 'bg-indigo-100', text: 'text-indigo-900' },
                core: { char: '弟', pinyin: 'Dì', hanviet: 'ĐỆ', meaning: 'Em trai', story: 'Bạn Đệ (弟) nhỏ nhắn là âm nhắc bài cho cả gia đình này đó!' },
                extensions: [
                    { id: 1, radical: '⺮', radicalName: 'Trúc', result: '第', pinyin: 'dì', hanviet: 'THỨ TỰ', story: 'Thêm bộ TRÚC (⺮) lên đầu, chúng ta xếp hàng theo THỨ TỰ (第).', iconId: 'list' },
                    { id: 2, radical: '辶', radicalName: 'Sước', result: '递', pinyin: 'dì', hanviet: 'CHUYỂN', story: 'Thêm bộ SƯỚC (辶) bước đi, em trai mang đồ đi CHUYỂN (递) thật nhanh.', iconId: 'feet' },
                    { id: 3, radical: '木', radicalName: 'Mộc', result: '梯', pinyin: 'tī', hanviet: 'THANG', story: 'Ghép với gỗ MỘC (木), em trai đóng thành chiếc cầu THANG (梯) leo cao.', iconId: 'wood' },
                    { id: 4, radical: '刂', radicalName: 'Đao', result: '剃', pinyin: 'tì', hanviet: 'CẠO', story: 'Dùng con dao ĐAO (刂), em trai tự CẠO (剃) râu thật sạch sẽ.', iconId: 'razor' },
                    { id: 5, radical: '氵', radicalName: 'Thủy', result: '涕', pinyin: 'tì', hanviet: 'NƯỚC MŨI', story: 'Gặp dòng nước THỦY (氵), em trai bị cảm nên NƯỚC MŨI (涕) chảy ra.', iconId: 'water' },
                    { id: 6, radical: '目', radicalName: 'Mục', result: '睇', pinyin: 'dì', hanviet: 'NHÌN/XEM', story: 'Em trai (弟) mở MẮT (目) to ra để NHÌN và XEM mọi thứ.', iconId: 'eye' }
                ]
            },
            ba_sound: {
                id: 'ba_sound', category: 'nhom_gia_dinh',
                name: 'Bộ chữ Ba', title: 'CHỮ BA LEGO',
                subtitle: 'Chạm vào chữ Ba để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Cùng xem bạn Ba (巴) biến hóa cùng gia đình nhé!',
                theme: { primary: 'bg-purple-600', secondary: 'bg-purple-100', text: 'text-purple-900' },
                core: { char: '巴', pinyin: 'Bā', hanviet: 'BA', meaning: 'Cái đuôi', story: 'Bạn Ba (巴) là "người nhắc bài" âm thanh cho cả gia đình chữ Ba đó!' },
                extensions: [
                    { id: 1, radical: '父', radicalName: 'Phụ', result: '爸', pinyin: 'bà', hanviet: 'BA/BỐ', story: 'Bạn Ba (巴) ghép với bộ PHỤ (父 - người cha) để gọi BA (爸).', iconId: 'heart' },
                    { id: 2, radical: '扌', radicalName: 'Thủ', result: '把', pinyin: 'bǎ', hanviet: 'CẦM/NẮM', story: 'Thêm bộ THỦ (扌) cái tay để CẦM hoặc NẮM (把) lấy đồ vật.', iconId: 'hand' },
                    { id: 3, radical: '口', radicalName: 'Khẩu', result: '吧', pinyin: 'ba', hanviet: 'NHÉ/NHỈ', story: 'Thay bộ KHẨU (口) miệng cười, nói lời nhẹ nhàng NHÉ, NHỈ (吧).', iconId: 'heart' },
                    { id: 4, radical: '疒', radicalName: 'Nạch', result: '疤', pinyin: 'bā', hanviet: 'SẸO', story: 'Bộ NẠCH (疒) bệnh tật, để lại vết SẸO (疤) trên da.', iconId: 'feet' },
                    { id: 5, radical: '王王', radicalName: 'Song Ngọc', result: '琶', pinyin: 'pá', hanviet: 'TỲ BÀ', story: 'Hai chữ NGỌC (王) quý ghép lại, tạo thành tiếng đàn TỲ BÀ (琶).', iconId: 'music' },
                    { id: 6, radical: '艹', radicalName: 'Thảo', result: '芭', pinyin: 'bā', hanviet: 'LÁ CHUỐI', story: 'Trên đầu có bộ CỎ (艹) xanh, tỏa rộng như tàu LÁ CHUỐI (芭).', iconId: 'leaf' },
                    { id: 7, radical: '爪', radicalName: 'Trảo', result: '爬', pinyin: 'pá', hanviet: 'LEO/BÒ', story: 'Dưới chân có móng VUỐT (爪) sắc, rồng và hổ dễ dàng LEO, BÒ (爬).', iconId: 'feet' }
                ]
            },
            gu_sound: {
                id: 'gu_sound', category: 'nhom_gia_dinh',
                name: 'Bộ chữ Cổ', title: 'BẠN CỔ LEGO',
                subtitle: 'Chạm vào chữ Cổ để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Em gái của Ba — là CÔ (姑) đó. Mảnh ghép CỔ nhắc âm, học thật hay!',
                theme: { primary: 'bg-violet-700', secondary: 'bg-violet-100', text: 'text-violet-900' },
                core: { char: '古', pinyin: 'Gǔ', hanviet: 'CỔ', meaning: 'Xưa cũ', story: 'Âm CỔ (古) nghĩa là xưa, là mảnh ghép gốc cho cả đại gia đình này!' },
                extensions: [
                    { id: 1, radical: '女', radicalName: 'Nữ', result: '姑', pinyin: 'gū', hanviet: 'CÔ', story: 'Ghép từ bộ NỮ (女) cùng âm CỔ, đó chính là người CÔ (姑) kính yêu.', iconId: 'woman' },
                    { id: 2, radical: '攵', radicalName: 'Phả', result: '故', pinyin: 'gù', hanviet: 'CỐ/CŨ', story: 'Thêm bộ PHẢ (攵), kể chuyện CỐ (故) tích ngày xửa ngày xưa.', iconId: 'book_icon' },
                    { id: 3, radical: '囗', radicalName: 'Vi', result: '固', pinyin: 'gù', hanviet: 'CHẮC CHẮN', story: 'Bộ VI (囗) vây quanh, giúp mọi thứ thêm CHẮC CHẮN (固) và bền vững.', iconId: 'shield' },
                    { id: 4, radical: 'Ref', radicalName: 'Nhân', result: '估', pinyin: 'gū', hanviet: 'ƯỚC TÍNH', story: 'Thêm bộ NHÂN (亻), con người đang ƯỚC TÍNH (估) hoặc ước chừng.', iconId: 'list' },
                    { id: 5, radical: '口', radicalName: 'Khẩu', result: '咕', pinyin: 'gū', hanviet: 'CỤC CỤC', story: 'Cái MIỆNG (口) nhỏ của chú gà kêu CỤC CỤC (咕) nghe thật vui tai.', iconId: 'music' },
                    { id: 6, radical: '木', radicalName: 'Mộc', result: '枯', pinyin: 'kū', hanviet: 'HÉO KHÔ', story: 'Gốc CÂY (木) già theo năm tháng đã HÉO KHÔ (枯) mất rồi.', iconId: 'wood' },
                    { id: 7, radical: '艹', radicalName: 'Thảo', result: '苦', pinyin: 'kǔ', hanviet: 'ĐẮNG/KHỔ', story: 'Thêm bộ THẢO (艹), cây cỏ nếm vào thấy vị ĐẮNG (苦) thay.', iconId: 'leaf' }
                ]
            },
            wei_sound: {
                id: 'wei_sound', category: 'nhom_gia_dinh',
                name: 'Bộ chữ Vị', title: 'MẢNH GHÉP VỊ',
                subtitle: 'Chạm vào mảnh ghép Vị để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Em gái (妹) nhỏ, mang mảnh ghép VỊ (未). Học thật là vui!',
                theme: { primary: 'bg-pink-600', secondary: 'bg-pink-100', text: 'text-pink-900' },
                core: { char: '未', pinyin: 'Wèi', hanviet: 'VỊ', meaning: 'Chưa/Vị', story: 'Mảnh ghép VỊ (未) nhắc âm MÈI hay VỊ cho cả nhà mình đó!' },
                extensions: [
                    { id: 1, radical: '女', radicalName: 'Nữ', result: '妹', pinyin: 'mèi', hanviet: 'EM GÁI', story: 'Bộ NỮ (女) dịu dàng ghép với Vị tạo thành EM GÁI (妹) nhỏ đáng yêu.', iconId: 'woman' },
                    { id: 2, radical: '口', radicalName: 'Khẩu', result: '味', pinyin: 'wèi', hanviet: 'HƯƠNG VỊ', story: 'Dùng MIỆNG (口) nếm thử, cảm nhận hương VỊ (味) thơm ngon của thức ăn.', iconId: 'cake' },
                    { id: 3, radical: '鬼', radicalName: 'Quỷ', result: '魅', pinyin: 'mèi', hanviet: 'MÊ HOẶC', story: 'Thêm bộ QUỶ (鬼) vào, tạo nên vẻ MÊ HOẶC (魅) quyến rũ lòng người.', iconId: 'ghost' },
                    { id: 4, radical: '日/目', radicalName: 'Nhật/Mục', result: '昧', pinyin: 'mèi', hanviet: 'U MÊ', story: 'MẮT (日/目) che mờ mịt, làm tâm trí u MÊ (昧) khờ khạo.', iconId: 'sun' },
                    { id: 5, radical: '宀', radicalName: 'Miên', result: '寐', pinyin: 'mèi', hanviet: 'NGỦ SAY', story: 'Dưới mái NHÀ (宀) nằm yên, bạn chìm vào giấc NGỦ (寐) thật say nồng.', iconId: 'house' }
                ]
            },
            // --- NHÓM TRĂM HỌ ---
            nguyen_set: {
                id: 'nguyen_set', category: 'nhom_tram_ho',
                name: 'Họ Nguyễn', title: 'MẢNH GHÉP NGUYÊN',
                subtitle: 'Chạm vào mảnh ghép Nguyên để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Họ NGUYỄN (阮) mình đây! Mảnh ghép Nguyên (元) đang chờ bạn khám phá.',
                theme: { primary: 'bg-emerald-700', secondary: 'bg-emerald-100', text: 'text-emerald-900' },
                core: { char: '元', pinyin: 'Yuán', hanviet: 'NGUYÊN', meaning: 'Đầu tiên/Tiền', story: 'Cầm tiền đi chợ tính bằng NGUYÊN (元). Mảnh ghép này nhắc âm Yuán đó!' },
                extensions: [
                    { id: 1, radical: '阝', radicalName: 'Phụ (Trái)', result: '阮', pinyin: 'ruǎn', hanviet: 'NGUYỄN', story: 'Dựa lưng vách NÚI (阝), âm là RUĂN, chính là họ NGUYỄN (阮) nhà mình.', iconId: 'mountain' },
                    { id: 2, radical: '宀', radicalName: 'Miên', result: '院', pinyin: 'yuàn', hanviet: 'VIỆN', story: 'Dưới mái NHÀ (宀) che chở, là ngôi VIỆN (院) to lớn đồ sộ.', iconId: 'house' },
                    { id: 3, radical: '囗', radicalName: 'Vi', result: '园', pinyin: 'yuán', hanviet: 'CÔNG VIÊN', story: 'Bộ VI (囗) bao quanh mảnh đất xanh, chính là CÔNG VIÊN (园) vui chơi.', iconId: 'tree' },
                    { id: 4, radical: '辶', radicalName: 'Sước', result: '远', pinyin: 'yuǎn', hanviet: 'XA', story: 'Vượt dặm ĐƯỜNG (辶) dài đằng đẵng, bạn đã đi thật XA (远) rồi.', iconId: 'road' },
                    { id: 5, radical: '王', radicalName: 'Vương', result: '玩', pinyin: 'wán', hanviet: 'CHƠI', story: 'Tay nâng viên NGỌC (王) quý, bạn mải mê ham CHƠI (玩) quá đi thôi.', iconId: 'toy' },
                    { id: 6, radical: '宀', radicalName: 'Miên', result: '完', pinyin: 'wán', hanviet: 'HOÀN THÀNH', story: 'Mái nhà (宀) đã lợp xong xuôi, công việc đã HOÀN THÀNH (完) rồi.', iconId: 'check' }
                ]
            },
            wang_set: {
                id: 'wang_set', category: 'nhom_tram_ho',
                name: 'Họ Vương', title: 'MẢNH GHÉP VƯƠNG',
                subtitle: 'Chạm vào mảnh ghép Vương để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Họ Vương (王) là vua — họ hoàng tộc. Cùng xem vua biến hóa nhé!',
                theme: { primary: 'bg-amber-600', secondary: 'bg-amber-100', text: 'text-amber-950' },
                core: { char: '王', pinyin: 'Wáng', hanviet: 'VƯƠNG', meaning: 'Vua/Họ Vương', story: 'Họ Vương (王) có nghĩa là vua, là âm nhắc bài cho cả một gia đình lớn!' },
                extensions: [
                    { id: 1, radical: '氵', radicalName: 'Thủy', result: '汪', pinyin: 'wāng', hanviet: 'LONG LANH', story: 'Ba chấm THỦY (氵) như nước ao hồ Uông, long lanh như ánh mắt trẻ thơ (汪).', iconId: 'water' },
                    { id: 2, radical: '木', radicalName: 'Mộc', result: '枉', pinyin: 'wǎng', hanviet: 'OAN UỔNG', story: 'Gỗ MỘC (木) cong queo chẳng thể thẳng, lẽ thẳng bị bẻ là OAN UỔNG (枉).', iconId: 'wood' },
                    { id: 3, radical: '日', radicalName: 'Nhật', result: '旺', pinyin: 'wàng', hanviet: 'THỊNH VƯỢNG', story: 'Mặt trời NHẬT (日) sáng rực rỡ, mang đến sự THỊNH VƯỢNG (旺).', iconId: 'sun' },
                    { id: 4, radical: '犭', radicalName: 'Khuyển', result: '狂', pinyin: 'kuáng', hanviet: 'CUỒNG ĐIÊN', story: 'Chó KHUYỂN (犭) dại thì CUỒNG ĐIÊN (狂) mất kiểm soát.', iconId: 'dog' },
                    { id: 5, radical: '匚', radicalName: 'Khuông', result: '匡', pinyin: 'kuāng', hanviet: 'KHUÔNG RÀO', story: 'Hộp KHUÔNG (匚) bao bọc xung quanh như một chiếc hàng rào bảo vệ (匡).', iconId: 'shield' },
                    { id: 6, radical: '竹', radicalName: 'Trúc', result: '筐', pinyin: 'kuāng', hanviet: 'GIỎ/KHAY', story: 'Thêm tre TRÚC (竹) vào, đan thành cái GIỎ hoặc cái KHAY (筐) đựng đồ.', iconId: 'basket' },
                    { id: 7, radical: '木', radicalName: 'Mộc', result: '框', pinyin: 'kuàng', hanviet: 'KHUÔN KHỔ', story: 'Ghép với gỗ MỘC (木), chúng ta có KHUNG hình hoặc KHUÔN KHỔ (框).', iconId: 'frame' }
                ]
            },
            truong_set: {
                id: 'truong_set', category: 'nhom_tram_ho',
                name: 'Họ Trương', title: 'MẢNH GHÉP TRƯỜNG',
                subtitle: 'Chạm vào mảnh ghép Trường để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Họ TRƯƠNG (张) dũng mãnh! Mảnh ghép Trường (长) đang chờ bạn khám phá.',
                theme: { primary: 'bg-yellow-600', secondary: 'bg-yellow-100', text: 'text-yellow-950' },
                core: { char: '长', pinyin: 'Zhǎng', hanviet: 'TRƯỜNG/TRƯỞNG', meaning: 'Dài/Lớn', story: 'Mảnh ghép TRƯỜNG (长) nhắc âm Zhāng cho cả gia đình dũng mãnh này!' },
                extensions: [
                    { id: 1, radical: '弓', radicalName: 'Cung', result: '张', pinyin: 'zhang', hanviet: 'TRƯƠNG', story: 'Hễ thấy bộ CUNG (弓) là bắn cung, căng dây ra, chính là họ TRƯƠNG (张).', iconId: 'bow' },
                    { id: 2, radical: '氵', radicalName: 'Thủy', result: '涨', pinyin: 'zhǎng', hanviet: 'DÂNG', story: 'Hễ thấy bộ THỦY (氵) là dòng nước dâng (涨) cao cuồn cuộn.', iconId: 'water' },
                    { id: 3, radical: '贝', radicalName: 'Bối', result: '账', pinyin: 'zhàng', hanviet: 'SỔ SÁCH', story: 'Hễ thấy bộ BỐI (贝) tiền bạc là liên quan đến SỔ SÁCH (账) tính toán.', iconId: 'bill' },
                    { id: 4, radical: '巾', radicalName: 'Cân', result: '帐', pinyin: 'zhàng', hanviet: 'MÀN VẢI', story: 'Hễ thấy bộ CÂN (巾) khăn vải là cái MÀN che hoặc cái LỀU (帐).', iconId: 'tent' },
                    { id: 5, radical: '月', radicalName: 'Nguyệt', result: '胀', pinyin: 'zhàng', hanviet: 'CĂNG', story: 'Hễ thấy bộ NGUYỆT (月) thịt thà là cái bụng đang CĂNG (胀) phồng lên.', iconId: 'feet' },
                    { id: 6, radical: '忄', radicalName: 'Tâm', result: '怅', pinyin: 'chàng', hanviet: 'BUỒN', story: 'Hễ thấy bộ TÂM (忄) trái tim là nỗi BUỒN (怅) man mác khôn nguôi.', iconId: 'sad' }
                ]
            },
            phuong_set: {
                id: 'phuong_set', category: 'nhom_tram_ho',
                name: 'Họ Phương', title: 'MẢNH GHÉP PHƯƠNG',
                subtitle: 'Chạm vào mảnh ghép Phương để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Họ PHƯƠNG (方) vuông vắn quý phái! Mảnh ghép Phương (方) đang chờ bạn khám phá.',
                theme: { primary: 'bg-sky-800', secondary: 'bg-sky-100', text: 'text-sky-950' },
                core: { char: '方', pinyin: 'Fāng', hanviet: 'PHƯƠNG', meaning: 'Vuông/Hướng', story: 'Bộ PHƯƠNG (方) vuông vắn đại diện cho phương hướng, là âm nhắc bài fāng cho cả nhà!' },
                extensions: [
                    { id: 1, radical: '攵', radicalName: 'Phản', result: '放', pinyin: 'fàng', hanviet: 'PHÓNG/THẢ', story: 'Gõ nhẹ tay PHẢN (攵), thả PHÓNG (放) tự do tung cánh bay xa.', iconId: 'sun' },
                    { id: 2, radical: '户', radicalName: 'Hộ', result: '房', pinyin: 'fáng', hanviet: 'PHÒNG/NHÀ', story: 'Dưới mái nhà HỘ (户) ấm áp, là căn PHÒNG (房) kín mái che mưa che nắng.', iconId: 'house' },
                    { id: 3, radical: '阝', radicalName: 'Phụ (Trái)', result: '防', pinyin: 'fáng', hanviet: 'PHÒNG THỦ', story: 'Đắp gò đất PHỤ (阝) cao lớn, ngăn PHÒNG (防) lũ lụt chảy tràn tràn.', iconId: 'shield' },
                    { id: 4, radical: '艹', radicalName: 'Thảo', result: '芳', pinyin: 'fāng', hanviet: 'THƠM NGÁT', story: 'Thêm khóm cỏ THẢO (艹) thơm, tỏa ngát hương PHƯƠNG (芳) dịu dàng khắp nơi.', iconId: 'leaf' },
                    { id: 5, radical: '亻', radicalName: 'Nhân', result: '仿', pinyin: 'fǎng', hanviet: 'PHỎNG THEO', story: 'Người NHÂN (亻) khéo léo tạo hình, PHỎNG (仿) theo dáng ngọc thanh cao.', iconId: 'eye' },
                    { id: 6, radical: '土', radicalName: 'Thổ', result: '坊', pinyin: 'fāng/fáng', hanviet: 'PHƯỜNG/XƯỞNG', story: 'Gò đất THỔ (土) vững vàng dựng lên xóm PHƯỜNG (坊) ngói đỏ đông vui.', iconId: 'house' },
                    { id: 7, radical: '讠', radicalName: 'Ngôn', result: '访', pinyin: 'fǎng', hanviet: 'PHỎNG VẤN', story: 'Dùng lời nói NGÔN (讠) lễ phép để trò chuyện, PHỎNG VẤN (访) cùng nhau.', iconId: 'book_icon' },
                    { id: 8, radical: '纟', radicalName: 'Mịch', result: '纺', pinyin: 'fǎng', hanviet: 'DỆT TƠ', story: 'Thêm sợi chỉ tơ MỊCH (纟), dệt PHƯỞNG (紡) xe sợi thành vần thơ.', iconId: 'yarn' },
                    { id: 9, radical: '女', radicalName: 'Nữ', result: '妨', pinyin: 'fáng', hanviet: 'PHƯƠNG HẠI', story: 'Người đàn bà NỮ (女) gây cản trở, PHƯƠNG HẠI (妨) chẳng vừa đâu nhé.', iconId: 'sad' }
                ]
            },
            he_sound: {
                id: 'he_sound', category: 'nhom_tram_ho',
                name: 'Họ Hà', title: 'MẢNH GHÉP KHẢ',
                subtitle: 'Chạm vào mảnh ghép Khả để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Họ HÀ (何) cổ xưa! Bạn Khả (可) có thể làm mọi thứ, là âm nhắc bài kě/hé cho cả nhà!',
                theme: { primary: 'bg-teal-700', secondary: 'bg-teal-100', text: 'text-teal-900' },
                core: { char: '可', pinyin: 'Kě', hanviet: 'KHẢ', meaning: 'Có thể', story: 'Chữ KHẢ (可) mang nghĩa có thể, là nền móng âm thanh cho gia đình họ Hà.' },
                extensions: [
                    { id: 1, radical: '亻', radicalName: 'Nhân', result: '何', pinyin: 'hé', hanviet: 'HỌ HÀ', story: 'Người NHÂN (亻) đứng cạnh bên bạn Khả, chính là họ HÀ (何) thân thương.', iconId: 'woman' },
                    { id: 2, radical: '氵', radicalName: 'Thủy', result: '河', pinyin: 'hé', hanviet: 'SÔNG HÀ', story: 'Dòng nước THỦY (氵) mát lành kết hợp với chữ Khả, tạo thành dòng SÔNG HÀ (河) xanh biếc.', iconId: 'water' },
                    { id: 3, radical: '艹', radicalName: 'Thảo', result: '苛', pinyin: 'kē', hanviet: 'HÀ KHẮC', story: 'Khóm cỏ THẢO (艹) gai góc đè nặng bạn Khả, sinh tính HÀ KHẮC (苛) khó chiều.', iconId: 'sad' },
                    { id: 4, radical: '口', radicalName: 'Khẩu', result: '呵', pinyin: 'hē', hanviet: 'TIẾNG CƯỜI', story: 'Cái MIỆNG (口) cười ha ha vui vẻ, phát ra tiếng CƯỜI (呵) giòn tan.', iconId: 'music' },
                    { id: 5, radical: '艹', radicalName: 'Thảo (Hoa)', result: '荷', pinyin: 'hé', hanviet: 'HOA SEN', story: 'Khóm cỏ THẢO (艹) dâng cao trên đầm nước, mọc lên đóa hoa SEN (荷) ngát hương.', iconId: 'leaf' },
                    { id: 6, radical: '木', radicalName: 'Mộc', result: '柯', pinyin: 'kē', hanviet: 'GỖ KHA', story: 'Dùng thân cây MỘC (木) cứng cáp ghép vào, tạo thành cây gỗ KHA (柯) dẻo dai.', iconId: 'wood' }
                ]
            },
            // --- NHÓM MÀU SẮC ---
            qing: {
                id: 'qing', category: 'nhom_mau_sac',
                name: 'Bộ chữ Thanh', title: 'BẠN THANH LEGO',
                subtitle: 'Chạm vào bạn Thanh để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Bạn Thanh nhắc âm đọc (青): Học chữ Hán thật vui!',
                theme: { primary: 'bg-cyan-500', secondary: 'bg-cyan-100', text: 'text-cyan-900' },
                core: { char: '青', pinyin: 'Qīng', hanviet: 'THANH', meaning: 'Màu xanh', story: 'Màu xanh của mầm non (青) là gốc rễ của sự sống và âm Thanh!' },
                extensions: [
                    { id: 1, radical: '氵', radicalName: 'Thủy', result: '清', pinyin: 'qīng', hanviet: 'TRONG', story: 'Thêm NƯỚC (氵) vào, nước thật TRONG xanh.', iconId: 'water' },
                    { id: 2, radical: '日', radicalName: 'Nhật', result: '晴', pinyin: 'qíng', hanviet: 'NẮNG', story: 'Chào MẶT TRỜI (日), bầu trời quang đãng NẮNG rực rỡ.', iconId: 'sun' },
                    { id: 3, radical: '讠', radicalName: 'Ngôn', result: '请', pinyin: 'qǐng', hanviet: 'MỜI', story: 'Mở LỜI (讠) lễ phép, là lời MỜI chân thành.', iconId: 'heart' },
                    { id: 4, radical: '忄', radicalName: 'Tâm', result: '情', pinyin: 'qíng', hanviet: 'TÌNH', story: 'Trao trái TIM (忄) ấm áp, chính là trao đi cảm TÌNH.', iconId: 'heart' },
                    { id: 5, radical: '虫', radicalName: 'Trùng', result: '蜻', pinyin: 'qīng', hanviet: 'CHUỒN CHUỒN', iconId: 'sun', story: 'Côn TRÙNG (虫) bay liệng là CHUỒN CHUỒN.' },
                    { id: 6, radical: '目', radicalName: 'Mục', result: '睛', pinyin: 'jīng', hanviet: 'CON NGƯƠI', iconId: 'sun', story: 'Đôi MẮT (目) sáng long lanh nhìn bằng CON NGƯƠI.' },
                    { id: 7, radical: '米', radicalName: 'Mễ', result: '精', pinyin: 'jīng', hanviet: 'TINH TÚY', iconId: 'sun', story: 'HẠT GẠO (米) trắng trong là sự TINH TÚY.' },
                    { id: 8, radical: '争', radicalName: 'Tranh', result: '静', pinyin: 'jìng', hanviet: 'YÊN TĨNH', iconId: 'sun', story: 'Dừng lại sự TRANH (争) giành, đời sẽ YÊN TĨNH.' }
                ]
            },
            zhu: {
                id: 'zhu', category: 'nhom_mau_sac',
                name: 'Bộ chữ Chu', title: 'BẠN CHU LEGO',
                subtitle: 'Chạm vào bạn Chu để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Bạn Chu (朱) đỏ thắm, chơi cùng ai?',
                theme: { primary: 'bg-orange-600', secondary: 'bg-orange-100', text: 'text-orange-900' },
                core: { char: '朱', pinyin: 'Zhū', hanviet: 'CHU', meaning: 'Đỏ thắm', story: 'Sắc đỏ thắm của bạn Chu (朱) rạng rỡ như ánh mặt trời!' },
                extensions: [
                    { id: 1, radical: '王', radicalName: 'Ngọc', result: '珠', pinyin: 'zhū', hanviet: 'TRÂN CHÂU', story: 'Đeo viên NGỌC (王) quý — TRÂN CHÂU (珠) sáng ngời.', iconId: 'pearl' },
                    { id: 2, radical: '虫', radicalName: 'Trùng', result: '蛛', pinyin: 'zhū', hanviet: 'CON NHỆN', story: 'Thêm loài TRÙNG (虫) nhỏ — CON NHỆN (蛛) giăng tơ.', iconId: 'feet' },
                    { id: 3, radical: '木', radicalName: 'Mộc', result: '株', pinyin: 'zhū', hanviet: 'CỘI RỄ', story: 'Bên gốc CÂY (木) già — là CỘI (株) rễ xưa.', iconId: 'wood' }
                ]
            },
            cam: {
                id: 'cam', category: 'nhom_mau_sac',
                name: 'Bộ chữ Cam (Đăng)', title: 'BẠN CAM LEGO',
                subtitle: 'Chạm vào bạn Cam để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Bạn Cam (橙) nhỏ, tìm cội nguồn. Gặp anh ĐĂNG (登) gợi âm đọc!',
                theme: { primary: 'bg-orange-500', secondary: 'bg-orange-100', text: 'text-orange-950' },
                core: { char: '登', pinyin: 'Dēng', hanviet: 'ĐĂNG', meaning: 'Lên/Đăng', story: 'Bạn Đăng (登) là "người nhắc bài" âm thanh cho cả nhà Cam đó!' },
                extensions: [
                    { id: 1, radical: '火', radicalName: 'Hỏa', result: '灯', pinyin: 'dēng', hanviet: 'ĐÈN', story: 'Muốn thắp sáng cần LỬA (火) hồng, anh là chiếc ĐÈN lung linh.', iconId: 'sun' },
                    { id: 2, radical: '⻊', radicalName: 'Túc', result: '蹬', pinyin: 'dēng', hanviet: 'ĐẠP', story: 'Dùng đôi CHÂN (⻊) dẻo dai, ĐẠP (蹬) xe thật nhanh về nhà.', iconId: 'feet' },
                    { id: 3, radical: '目', radicalName: 'Mục', result: '瞪', pinyin: 'dèng', hanviet: 'TRỪNG', story: 'Đôi MẮT (目) tròn xoe, TRỪNG (瞪) nhìn thật kỹ mọi thứ.', iconId: 'sun' },
                    { id: 4, radical: '... existing code ...' },
                    { id: 5, radical: '氵', radicalName: 'Thủy', result: '澄', pinyin: 'chéng', hanviet: 'RÕ RÀNG', story: 'Thêm dòng NƯỚC (氵) trong veo, làm mọi thứ trở nên RÕ ràng.', iconId: 'water' },
                    { id: 6, radical: '木', radicalName: 'Mộc', result: '橙', pinyin: 'chéng', hanviet: 'QUẢ CAM', story: 'Gặp gốc CÂY (木) xanh tốt, kết thành những QUẢ CAM ngọt lành.', iconId: 'sun' }
                ]
            },
            zong: {
                id: 'zong', category: 'nhom_mau_sac',
                name: 'Bộ chữ Tông (Nâu)', title: 'BẠN NÂU LEGO',
                subtitle: 'Chạm vào bạn Nâu để nghe âm thanh, hoặc nhấn bắt đầu để lắp ghép!',
                mascot: 'Bạn Nâu (棕) mộc mạc, Gặp anh TÔNG (宗) gợi âm đọc!',
                theme: { primary: 'bg-amber-800', secondary: 'bg-amber-100', text: 'text-amber-900' },
                core: { char: '宗', pinyin: 'Zōng', hanviet: 'TÔNG', meaning: 'Cội nguồn', story: 'Anh TÔNG (宗) lớn đang đứng đợi đầu thôn để nhắc bài âm thanh cho gia đình mình!' },
                extensions: [
                    { id: 1, radical: '木', radicalName: 'Mộc', result: '棕', pinyin: 'zōng', hanviet: 'NÂU', story: 'Ghép gốc CÂY (木) vào anh Tông, chúng ta có màu NÂU (棕) mộc mạc.', iconId: 'wood' },
                    { id: 2, radical: '糸', radicalName: 'Mịch', result: '综', pinyin: 'zōng', hanviet: 'TỔNG HỢP', story: 'Thêm sợi CHỈ (糸) để đan kết, mọi thứ được TỔNG HỢP (综) lại.', iconId: 'yarn' },
                    { id: 3, radical: '⻊', radicalName: 'Túc', result: '踪', pinyin: 'zōng', hanviet: 'VẾT TÍCH', story: 'Dùng đôi CHÂN (⻊) đi tìm kiếm, sẽ thấy VẾT TÍCH (踪) để lại.', iconId: 'feet' },
                    { id: 4, radical: '米', radicalName: 'Mễ', result: '粽', pinyin: 'zòng', hanviet: 'BÁNH CHƯNG', story: 'Gặp hạt GẠO (米) trắng ngần, gói thành chiếc BÁNH CHƯNG (粽) thơm ngon.', iconId: 'cake' }
                ]
            }
        };
export default ALL_SETS;