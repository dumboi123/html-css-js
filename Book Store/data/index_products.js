const pstatus = true;
if (window.localStorage.status != pstatus || !window.localStorage.product) {
    window.localStorage.status = pstatus;
    window.localStorage.product = JSON.stringify({
        book: [
            {
                "id":1,
                "image": "img/book/TT2.jpg",
                "title": "Tiểu Thuyết Chuyển Thể - Thanh Gươm Diệt Quỷ",
                "author": "Koyoharu Gotouge",
                "price": 51,
                "type": ["All", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"Truyện kể về hành trình trở thành kiếm sĩ diệt quỷ của thiếu niên Kamado Tanjirō sau khi gia đình cậu bị quỷ sát hại và em gái Nezuko của cậu bị biến thành quỷ."
            },
            {
                "id":2,
                "image": "img/book/KT1.jpg",
                "title": "Lập Chiến Lược Kinh Doanh Tối Giản",
                "author": "Vaughan Evans",
                "price": 102,
                "type": ["All", "Kinh tế"],
                "description":"Trong Lập chiến lược kinh doanh tối giản, tác giả Vaughan Evans áp dụng nguyên tắc KISS vào việc xây dựng chiến lược với những ví dụ sống động, các giải pháp thực tế và cách tiếp cận dễ hiểu sẽ cho bạn thấy làm thế nào để phát triển nhanh chóng một chiến lược giúp cho doanh nghiệp của bạn tiến thẳng đến mục tiêu."
            },
            {
                "id":3,
                "image": "img/book/jujutsu.jpg",
                "title": "Jujutsu Kaisen - limited",
                "author": "Gege Akutami",
                "price": 50,
                "type": ["Truyện tranh", "All"],
                "description":"Trong Lập chiến lược kinh doanh tối giản, tác giả Vaughan Evans áp dụng nguyên tắc KISS vào việc xây dựng chiến lược với những ví dụ sống động, các giải pháp thực tế và cách tiếp cận dễ hiểu sẽ cho bạn thấy làm thế nào để phát triển nhanh chóng một chiến lược giúp cho doanh nghiệp của bạn tiến thẳng đến mục tiêu."
            },
            {
                "id":4,
                "image": "img/book/komi.jpg",
                "title": "Komi-san",
                "author": "Tomohito Oda",
                "price": 25,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"Vào ngày đầu tiên nhập học ở trường Cao trung Tư thục Itan danh tiếng, Komi Shōko lập tức nhận được sự chú ý từ mọi người qua ngoại hình xinh đẹp và sự lịch thiệp tao nhã. Tuy nhiên Tadano Hitohito, một cậu học sinh cao trung hết sức bình thường được xếp chỗ ngồi kế bên cô ấy, nhận ra rằng phía sau dáng vẻ quý phái đó, Komi lại mắc hội chứng về giao tiếp, không biết làm sao để nói chuyện và không thể kết bạn được với bất kì ai. Từ đó, Tadano quyết định đặt ra kế hoạch giúp Komi có được 100 người bạn, trong đó cậu chính là người bạn đầu tiên của Komi sẽ giúp cô kiếm thêm 99 người bạn nữa"
            },
            {
                "id":5,
                "image": "img/book/KT2.jpg",
                "title": "Đô Thị Thông Minh, Tương Lai Xán Lạn",
                "author": "Mike Barlow",
                "price": 133,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn sách là câu chuyện kể về những công dân thông minh mà cuộc sống của họ đã được biến đổi từ những chương trình, sáng kiến và dự án đô thị thông minh. Quyển sách là bản hướng dẫn đến với một thế giới đang dần nổi lên, trong đó con người không ngừng tương tác với máy móc thông minh, xe cộ, nhà cửa và các hệ thống thông minh."
            },
            {
                "id":6,
                "image": "img/book/TT6.jpg",
                "title": "Sword Art Online Progressive",
                "author": "REKI KAWAHARA",
                "price": 92,
                "type": ["All", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"“Không có cách nào để đăng xuất khỏi trò chơi này. Sự khác biệt duy nhất là bạn chết khi nào và ở đâu…” Xem thêm tại: https://www.galaxycine.vn/phim/sword-art-online-progressive-aria-of-a-starless-night"
            },
            {
                "id":7,
                "image": "img/book/chainsawman.jpg",
                "title": "Chainsaw man",
                "author": "Tatsuki Fujimoto",
                "price": 45,
                "type": ["Truyện tranh", "Kinh dị", "All"],
                "description":"Cậu thiếu niên Denji sống một cuộc sống nghèo khổ và phải làm việc vất vả để trả nợ. Cậu vừa sống vừa làm Thợ Săn Quỷ cùng với Pochita – loài quỷ Chainsaw, nhưng rồi một ngày cậu trở thành mục tiêu của một con quỷ tàn bạo…"
            },
            {
                "id":8,
                "image": "img/book/KT4.jpg",
                "title": "Tỷ Phú Không Tiền",
                "author": "Conor O Clery",
                "price": 132,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn Tỷ phú không tiền là tiểu sử về Chuck Feeney, tường thuật lại những sóng gió ông và các cộng sự trải qua trên thương trường để kiến tạo nên một đế chế bán lẻ hùng mạnh, cũng như những nỗ lực của ông trong việc đem toàn bộ gia sản đi làm từ thiện. Trong sách cũng có một chương kể về những hoạt động tài trợ của Chuck Feeney tại Việt Nam bao gồm việc hợp tác với tổ chức Đông Tây Hội Ngộ, hay tài trợ cho trường RMIT. Tác giả cũng nhấn mạnh tầm ảnh hưởng của Feeney trong việc khuyến khích các tỷ phú trên thế giới như Bill Gates và Warren Buffett cho đi khi còn sống."
            },
            {
                "id":9,
                "image": "img/book/KN17.jpg",
                "title": "Tâm Lý Học Thành Công",
                "author": "Carol S Dweck",
                "price": 153,
                "type": ["Kỹ năng sống", "All"],
                "description":"Cuốn sách sẽ cho bạn thấy không chỉ khả năng và tài trí mới mang lại thành công cho chúng ta, mà phần lớn do cách tiếp cận mục tiêu bằng lối tư duy nào. Việc tán dương trí thông minh và khả năng của con bạn không hề nuôi dưỡng lòng tự trọng và dẫn đến thành tựu, mà thậm chí còn phương hại đến thành công sau này. Với tư duy đứng đắn, chúng ta có thể tạo động lực cho con cái và giúp chúng phát triển trong trường học, cũng như đạt được mục tiêu của bản thân trong cuộc sống và sự nghiệp. Dweck đã giúp tất cả các bậc cha mẹ, giáo viên, CEO và vận động viên thấy một ý tưởng đơn giản về não bộ có thể tạo ra tình yêu học tập và sự kiên trì – cơ sở cho những thành tựu vĩ đại ở mọi lĩnh vực."
            },
            {
                "id":10,
                "image": "img/book/KN18.jpg",
                "title": "Thao túng tâm lý",
                "author": "Shannon Thomas",
                "price": 43,
                "type": ["Best seller","Kỹ năng sống", "All"],
                "description":"Bằng những kiến thức chuyên sâu và sự thấu hiểu, tác giả sẽ giúp bạn từng bước vượt qua những rắc rối của thao túng tâm lý, lạm dụng tiểm ẩn để có cuộc sống ý nghĩa và lành mạnh hơn."
            },
            {
                "id":11,
                "image": "img/book/KT13.jpg",
                "title": "Tinh Thần Chiến Đấu Rực Lửa",
                "author": "Inamori Kazuo",
                "price": 113,
                "type": ["All", "Kinh tế"],
                "description":"Hãy cùng tìm hiểu tinh thần của doanh nhân mạnh mẽ nhất Nhật Bản Sau tái sinh JAL, tái sinh Nhật Bản! Quyển sách truyền đạt triết lý thành công, biến nguy thành cơ! Tại sao quản trị của Inamori là mạnh mẽ nhất? Tại sao bây giờ triết lý quản trị ấy vẫn được quan tâm? Câu trả lời nằm trong quyển sách này."
            },
            {
                "id":12,
                "image": "img/book/KT3.jpg",
                "title": "Vị Tu Sĩ Bán Chiếc Ferrari",
                "author": "Robin Sharma",
                "price": 77,
                "type": ["All", "Kinh tế"],
                "description":"“Vị tu sĩ bán chiếc Ferrari” là một câu chuyện đầy cảm hứng cung cấp bạn đọc cách sống can đảm, cân bằng, phong phú và nhiều niềm vui hơn."
            },
            {
                "id":13,
                "image": "img/book/KD5.jpg",
                "title": "Truyện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 99,
                "type": ["Kinh dị", "All"],
                "description":"TRUYỆN KINH DỊ SỢ VÃI LINH HỒN, THỀ"
            },
            {
                "id":14,
                "image": "img/book/KD6.jpg",
                "title": "Tryện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 63,
                "type": ["Kinh dị", "All"],
                "description":"TRUYỆN KINH DỊ SỢ VÃI LINH HỒN, THỀ"
            },

            {
                "id":15,
                "image": "img/book/KT5.jpg",
                "title": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên",
                "author": "Ewen Chia",
                "price": 189,
                "type": ["All", "Kinh tế"],
                "description":"“Bằng cách thuật lại câu chuyện của chính mình về marketing liên kết, Ewen Chia đưa ra chỉ dẫn rõ ràng cho bất kỳ ai muốn sử dụng công thức mà ông thấy thành công.”"
            },
            {
                "id":16,
                "image": "img/book/KT6.jpg",
                "title": "Bất Động Sản Cho Thế Hệ Tương Lai",
                "author": "Vicki Wusche",
                "price": 67,
                "type": ["All", "Kinh tế"],
                "description":"Để đảm bảo tương lai tài chính của bản thân, gia đình và thế hệ tương lai, chúng ta phải hành động ngay bây giờ, và dạy con cái biết rằng tiền là một công cụ. Nếu tài sản được sử dụng tốt, chúng ta có thể mua các tài sản sinh ra tiền nhằm đảm bảo tương lai tài chính của gia đình suốt đời."
            },
            {
                "id":17,
                "image": "img/book/KT7.jpg",
                "title": "Think And Grow Rich",
                "author": "Napoleon Hill",
                "price": 104,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn sách sẽ giúp bạn trở nên giàu có, làm giàu cho cuộc sống của bạn trên tất cả các phương diện của cuộc sống chứ không chỉ về tài chính và vật chất."
            },
            {
                "id":18,
                "image": "img/book/KT8.jpg",
                "title": "Bezonomics - Kinh Tế Học Bezos",
                "author": "Brian Dumaine",
                "price": 151,
                "type": ["All", "Kinh tế", "Khoa học"],
                "description":"Amazon đã thay đổi cuộc sống loài người và trở thành công ty lớn nhất thế giới như thế nào?"
            },
            {
                "id":19,
                "image": "img/book/KT9.jpg",
                "title": "The Leadership Triangle",
                "author": "Kevin Ford",
                "price": 76,
                "type": ["Best seller","All", "Kinh tế", "Khoa học"],
                "description":"Phải biết cách tự lãnh đạo bản thân mình trước, nếu muốn lãnh đạo nhân viên tốt"
            },
            {
                "id":20,
                "image": "img/book/KT10.jpg",
                "title": "Xây Dựng Sự Độc Đáo",
                "author": "Riccardo Pozzoll",
                "price": 78,
                "type": ["All", "Kinh tế"],
                "description":"Khi một đam mê biến thành một hoạt động kinh doanh"
            },
            {
                "id":21,
                "image": "img/book/KT11.jpg",
                "title": "Stage Designer",
                "author": "Hoan Nguyễn",
                "price": 111,
                "type": ["All", "Kinh tế", "Khoa học"],
                "description":"STAGE DESIGNER LÀ NGƯỜI THIẾT LẬP Ý TƯỞNG THỊ GIÁC TỔNG THỂ TRONG SẢN XUẤT VÀ THIẾT KẾ KHÔNG GIAN S N KHẤU MANG TÍNH NGHỆ THUẬT."
            },
            {
                "id":22,
                "image": "img/book/KT12.jpg",
                "title": "Masayoshi Son",
                "author": "Onishi Takahiro",
                "price": 114,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn sách cho thấy hành trình sôi nổi của Son trong sự nghiệp kinh doanh cũng như hiểu rõ hơn về con người ông, làm sáng tỏ những điều mà nhiều bạn đọc quan tâm: lý tưởng kinh doanh của Son là gì, phương thức kinh doanh khó nắm bắt của ông được thực thi ra sao, và con người của Son thể hiện qua đời sống hằng ngày và trong công việc. "
            },

            {
                "id":23,
                "image": "img/book/KT14.jpg",
                "title": "Bí Mật Tư Duy Triệu Phú (Tái Bản 2021)",
                "author": "T Harv Eker",
                "price": 87,
                "type": ["All", "Kinh tế"],
                "description":"Trong cuốn sách này T. Harv Eker sẽ tiết lộ những bí mật tại sao một số người lại đạt được những thành công vượt bậc, được số phận ban cho cuộc sống sung túc, giàu có, trong khi một số người khác phải chật vật, vất vả mới có một cuộc sống qua ngày. Bạn sẽ hiểu được nguồn gốc sự thật và những yếu tố quyết định thành công, thất bại để rồi áp dụng, thay đổi cách suy nghĩ, lên kế hoạch rồi tìm ra cách làm việc, đầu tư, sử dụng nguồn tài chính của bạn theo hướng hiệu quả nhất."
            },
            {
                "id":24,
                "image": "img/book/TT1.jpg",
                "title": "Từ Điển Tiếng “Em” - Tái Bản 2021",
                "author": "Khotudien",
                "price": 55,
                "type": ["Best seller","All", "Tiểu thuyết"],
                "description":"Cuốn sách này giống như một chiếc hộp Pandora thú vị và hấp dẫn người đọc, vì bạn không thể đoán trước được tác giả sẽ “định nghĩa” câu nói đó theo nghĩa nào, cho ta thêm thích thú với những ngôn từ đáng yêu sử dụng mỗi ngày."
            },

            {
                "id":25,
                "image": "img/book/TT3.jpg",
                "title": "Bước Chậm Lại Giữa Thế Gian Vội Vã",
                "author": "Hae Min",
                "price": 58,
                "type": ["All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":26,
                "image": "img/book/thientai.jpg",
                "title": "Thiên tài bên trái, kẻ điên bên phải",
                "author": "Cao Minh",
                "price": 97,
                "type": ["Best seller","Khoa học", "All", "Tiểu thuyết"],
                "description":"Ra mắt lần đầu năm 2012, Bước chậm lại giữa thế gian vội vã của Đại đức Hae Min đã liên tục đứng đầu danh sách best-seller của nhiều trang sách trực tuyến uy tín của Hàn Quốc, trở thành cuốn sách chữa lành cho hàng triệu người trẻ luôn tất bật với nhịp sống hiện đại hối hả"
            },
            {
                "id":27,
                "image": "img/book/dac-nhan-tamjpg.jpg",
                "title": "Đắc Nhân Tâm",
                "author": "Nguyễn Văn Phước",
                "price": 70,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Đắc Nhân Tâm không chỉ là là nghệ thuật thu phục lòng người, Đắc Nhân Tâm còn đem lại cho độc giả góc nhìn, suy nghĩ sâu sắc về việc giao tiếp ứng xử."
            },
            {
                "id":28,
                "image": "img/book/yeu.jpg",
                "title": "OSHO - Yêu - Being In Love",
                "author": "OSHO",
                "price": 119,
                "type": ["All", "Tiểu thuyết", "Trẻ em"],
                "description":"Những người đói khát trong nhu cầu, những người luôn kỳ vọng ở tình yêu chính là những người đau khổ nhất. Hai kẻ đói khát tìm thấy nhau trong một mối quan hệ yêu đương cùng những kỳ vọng người kia sẽ mang đến cho mình thứ mình cần – về cơ bản sẽ nhanh chóng thất vọng về nhau và cùng mang đến ngục tù khổ đau cho nhau. Trong cuốn sách Yêu, Osho - bậc thầy tâm linh, người được tôn vinh là một trong 1000 người kiến tạo của thế kỷ 20 – đã đưa ra những kiến giải sâu sắc về nhu cầu tâm lý có sức mạnh lớn nhất của nhân loại và “chỉ cho chúng ta cách trải nghiệm tình yêu”."
            },
            {
                "id":29,
                "image": "img/book/TT4.jpg",
                "title": "Bố Già (Đông A)",
                "author": "Mario Puzo",
                "price": 104,
                "type": ["All", "Tiểu thuyết", "Kinh tế"],
                "description":"Với kết cấu hoàn hảo, cốt truyện không thiếu những pha hành động gay cấn, tình tiết bất ngờ và không khí kình địch đến nghẹt thở, Bố già xứng đáng là đỉnh cao trong sự nghiệp văn chương của Mario Puzo."
            },
            {
                "id":30,
                "image": "img/book/TT5.jpg",
                "title": "Thế Giới Otome Game",
                "author": "Mishima Yomu",
                "price": 112,
                "type": ["All","Best seller", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"Leon một nhân viên công sở tại Nhật Bản bị chuyển sinh sang thế giới “Otome game” của kiếm và phép thuật. Cậu tuyệt vọng với thế giới trọng nữ khinh nam đó. Tại thế giới này, đàn ông chỉ như loài súc vật với nhiệm vụ duy nhất là cung phụng phái nữ. Chỉ có Hoàng thái tử cùng nhóm trai đẹp mà ngài dẫn đầu là ngoại lệ."
            },

            {
                "id":31,
                "image": "img/book/TT7.jpg",
                "title": "Hai Số Phận",
                "author": "Jeffrey Archer",
                "price": 104,
                "type": ["All", "Tiểu thuyết"],
                "description":"Khi bạn yêu thích tác phẩm này, người ta sẽ nhìn ra cá tính và tâm hồn thú vị của bạn!"
            },
            {
                "id":32,
                "image": "img/book/TT8.jpg",
                "title": "Hai Vạn Dặm Dưới Đáy Biển ",
                "author": "Jules Verne",
                "price": 74,
                "type": ["All", "Tiểu thuyết"],
                "description":"Hai vạn dặm dưới đáy biển là một trong những tác phẩm thành công nhất của Jules Verne. Rất nhiều năm đã qua, những hiểu biết mọi mặt của con người về biển đã tiến những bước dài. Nhiều khái niệm đã đổi thay về căn bản. Nhưng sự phát triển của khoa học, kỹ thuật không làm chúng ta giảm lòng yêu mến và kính phục Jules Verne, vì cuốn sách này đã góp phần hướng biết bao thanh thiếu niên tiến vào khoa học, và bao người sau này đã trở thành những nhà hải dương học, ngư học và chế tạo tàu ngầm!"
            },
            {
                "id":33,
                "image": "img/book/KN1.jpg",
                "title": "Thay Đổi Cuộc Sống Với Nhân Số Học",
                "author": "Lê Đỗ Quỳnh Hương",
                "price": 177,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Cuốn sách “Thay đổi cuộc sống với Nhân số học”mang lại đầy đủ những kiến thức quan trọng nhất mà người hứng thú với Nhân số học cần tìm hiểu. Sách bao gồm các kiến thức về ba thể trong một con người, con số chủ đạo, biểu đồ ngày sinh, các mũi tên chỉ đặc điểm, con số ngày sinh, chu kỳ 9 năm, ba giai đoạn và bốn đỉnh cao của đời người cùng ý nghĩa, sức mạnh của cái tên của mỗi người. Các kiến thức này được diễn giải, phân tích và đi kèm các ví dụ cụ thể."
            },
            {
                "id":34,
                "image": "img/book/KN2.jpg",
                "title": "Đọc Vị Bất Kỳ Ai",
                "author": "TS David J Lieberman",
                "price": 54,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Hãy chiếm thế thượng phong trong việc chủ động nhận biết điều cần tìm kiếm - ở bất kỳ ai bằng cách “thâm nhập vào suy nghĩ” của người khác. ĐỌC VỊ BẤT KỲ AI là cẩm nang dạy bạn cách thâm nhập vào tâm trí của người khác để biết điều người ta đang nghĩ. Cuốn sách này sẽ không giúp bạn rút ra các kết luận chung về một ai đó dựa vào cảm tính hay sự võ đoán. Những nguyên tắc được chia sẻ trong cuốn sách này không đơn thuần là những lý thuyết hay mẹo vặt chỉ đúng trong một số trường hợp hoặc với những đối tượng nhất định. Các kết quả nghiên cứu trong cuốn sách này được đưa ra dựa trên phương pháp S.N.A.P - cách thức phân tích và tìm hiểu tính cách một cách bài bản trong phạm vi cho phép mà không làm mếch lòng đối tượng được phân tích. Phương pháp này dựa trên những phân tích về tâm lý, chứ không chỉ đơn thuần dựa trên ngôn ngữ cử chỉ, trực giác hay võ đoán."
            },
            {
                "id":35,
                "image": "img/book/KN3.jpg",
                "title": "Hiểu Về Trái Tim",
                "author": "Minh Niệm",
                "price": 126,
                "type": ["Kỹ năng sống", "Khoa học", "All", "Tiểu thuyết"],
                "description":"Hiểu Về Trái Tim – Cuốn Sách Mở Cửa Thề Giới Cảm Xúc Của Mỗi Người"
            },
            {
                "id":36,
                "image": "img/book/KN4.jpg",
                "title": "Tâm Lý Học - Phác Họa Chân Dung Kẻ Phạm Tội",
                "author": "Vũ",
                "price": 108,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Bằng giọng văn sắc bén, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” hứa hẹn dẫn dắt người đọc đi qua các cung bậc cảm xúc từ tò mò, ngạc nhiên đến sợ hãi, hoang mang tận cùng. Chúng ta sẽ lần tìm về quá khứ để từng bước gỡ những nút thắt chưa được giải, khiến ta 'ngạt thở' đọc tới tận trang cuối cùng."
            },
            {
                "id":37,
                "image": "img/book/tokyo.jpg",
                "title": "Tokyo Revengers - tập 6",
                "author": "Ken Wakui",
                "price": 115,
                "type": ["Best seller","Truyện tranh", "All"],
                "description":"Trận chiến Giáng sinh đã bắt đầu, gióng lên hồi chuông căng thẳng!"
            },
            {
                "id":38,
                "image": "img/book/spyxfamily.jpg",
                "title": "SPY x FAMILY",
                "author": "Tatsuya Endo",
                "price": 25,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"Nhằm ngăn chặn âm mưu gây chiến, giữ vững nền hòa bình Đông - Tây, điệp viên hàng đầu của Westalis, Twilight phải xây dựng một gia đình và cho con theo học tại học viện danh giá nhất Ostania hòng tiếp cận yếu nhân cầm đầu phe chủ chiến của đất nước này: Desmon Donavan! Và thật tình cờ, đứa trẻ mà Twilight nhận làm 'con' ở cô nhi viện, Anya, lại có khả năng đọc suy nghĩ của người khác. Chưa kể 'người vợ' anh buộc phải chọn lựa trong lúc vội vàng, Yor, lại là một… sát thủ...!!"
            },
            {
                "id":39,
                "image": "img/book/kimestu.jpg",
                "title": "Kimestu no Yaiba",
                "author": "Koyoharu Gotouge",
                "price": 25,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"Thanh gươm diệt quỷ, hay còn được biết tới với tên gốc Kimetsu no Yaiba là một bộ manga Nhật Bản do Gotōge Koyoharu sáng tác và minh hoạ. Truyện kể về hành trình trở thành kiếm sĩ diệt quỷ của thiếu niên Kamado Tanjirō sau khi gia đình cậu bị quỷ sát hại và em gái Nezuko của cậu bị biến thành quỷ."
            },
            {
                "id":40,
                "image": "img/book/KN5.jpg",
                "title": "Đời Ngắn Đừng Ngủ Dài",
                "author": "Robin Sharma",
                "price": 55,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Mọi lựa chọn đều giá trị. Mọi bước đi đều quan trọng. Cuộc sống vẫn diễn ra theo cách của nó, không phải theo cách của ta. Hãy kiên nhẫn. Tin tưởng. Hãy giống như người thợ cắt đá, đều đặn từng nhịp, ngày qua ngày. Cuối cùng, một nhát cắt duy nhất sẽ phá vỡ tảng đá và lộ ra viên kim cương. Người tràn đầy nhiệt huyết và tận tâm với việc mình làm không bao giờ bị chối bỏ. Sự thật là thế."
            },
            {
                "id":41,
                "image": "img/book/KN6.jpg",
                "title": "Rèn Luyện Tư Duy Phản Biện",
                "author": "Albert Rutherford",
                "price": 65,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Là một tác phẩm về tư duy phản biện, cuốn sách Rèn Luyện Tư Duy Phản Biện được trình bày rất logic, mạch lạc với nhiều dẫn chứng chi tiết. Sách giúp chúng ta hiểu rằng việc học vẹt hay nhồi nhét kiến thức sẽ chẳng có lợi ích gì cho sự phát triển của tư duy. Không quan trọng chúng ta nạp vào cái gì, mà là ta hiểu nó thế nào, sắp xếp ra sao và cách những kiến thức ấy được vận dụng trong đời sống."
            },
            {
                "id":42,
                "image": "img/book/KN7.jpg",
                "title": "Tuổi Trẻ Đáng Giá Bao Nhiêu",
                "author": "Rossie",
                "price": 63,
                "type": ["Kỹ năng sống", "All"],
                "description":"Nếu tôi còn ở tuổi đôi mươi, hẳn là tôi sẽ đọc Tuổi trẻ đáng giá bao nhiêu? nhiều hơn một lần"
            },
            {
                "id":43,
                "image": "img/book/KN8.jpg",
                "title": "Sức Mạnh Tiềm Thức ",
                "author": "Joseph Murphyc",
                "price": 102,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Sức Mạnh Tiềm Thức giới thiệu và giải thích các phương pháp tập trung tâm thức nhằm xoá bỏ những rào cản tiềm thức đã ngăn chúng ta đạt được những điều mình mong muốn."
            },
            {
                "id":44,
                "image": "img/book/KN9.jpg",
                "title": "Chủ Nghĩa Khắc Kỷ",
                "author": "William B Irvine",
                "price": 87,
                "type": ["Kỹ năng sống", "All"],
                "description":"Trời ơi dài quá không dám paste vô luôn đó"
            },
            {
                "id":45,
                "image": "img/book/KN10.jpg",
                "title": "Đừng Lựa Chọn An Nhàn Khi Còn Trẻ",
                "author": "Cảnh Thiên",
                "price": 87,
                "type": ["Kỹ năng sống", "All"],
                "description":"Nếu bạn lựa chọn an nhàn trong 10 năm, tương lai sẽ buộc bạn phải vất vả trong 50 năm để bù đắp lại. Nếu bạn bươn chải vất vả trong 10 năm, thứ mà bạn chắc chắn có được là 50 năm hạnh phúc. Điều quý giá nhất không phải là tiền mà là tiền bạc. Thế nên, bạn à, đừng lựa chọn an nhàn khi còn trẻ."
            },
            {
                "id":46,
                "image": "img/book/TE1.jpg",
                "title": "Cẩm Nang Cấu Trúc Tiếng Anh",
                "author": "Trang",
                "price": 72,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"Cuốn sách CẨM NANG CẤU TRÚC TIẾNG ANH gồm 25 phần, mỗi phần là một phạm trù kiến thức trong tiếng Anh được trình bày một cách ngắn gọn, đơn giản, cô đọng và hệ thống hoá dưới dạng sơ đồ, bảng biểu nhằm phát triển khả năng tư duy của người học và từ đó giúp người học nhớ kiến thức nhanh hơn và sâu hơn. Sau hầu hết các phần lí thuyết đều có 20-30 câu bài tập áp dụng để kiểm tra cũng như khắc sâu kiến thức cho người học. Tuy dày chưa đến 250 trang nhưng cuốn sách lại có thể bao trọn toàn bộ kiến thức từ đơn giản đến phức tạp cộng với cách tận dụng tối đa và áp dụng triệt để cách học tiếng Anh bằng sơ đồ tư duy."
            },
            {
                "id":47,
                "image": "img/book/TE2.jpg",
                "title": "Ngữ Pháp Tiếng Anh ",
                "author": "Mai Lan Hương",
                "price": 50,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"Giải thích Ngữ pháp Tiếng Anh là cuốn sách đã được phát hành và tái bản rất nhiều lần trong nhiều năm qua. Với lần tái bản năm 2021 này, cuốn sách đã được nâng cao chất lượng giúp người học trau dồi, củng cố và nâng cao kiến thức ngữ pháp tiếng Anh."
            },
            {
                "id":48,
                "image": "img/book/TE3.jpg",
                "title": "Tiếng Nhật Cho Mọi Người",
                "author": "Minna no Nihongo",
                "price": 71,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"“Minna no Nihongo” là bộ giáo trình sơ cấp dành cho những ai muốn tìm hiểu về tiếng Nhật rất thông dụng tại Châu Á và Việt Nam.Sách gồm 2 tập với 50 bài học, mỗi bài bao gồm phần Mẫu câu, Ví dụ, Hội thoại, Luyện tập và các câu hỏi đặt ra để trả lời."
            },
            {
                "id":49,
                "image": "img/book/TE4.jpg",
                "title": "Sách Tự Học Hiragana Katakana",
                "author": "AOTS",
                "price": 64,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"Sách tự học bảng chữ cái Nhật Bản (Hiragana và Katakana). Hướng dẫn cách viết các chữ cái Nhật, có kèm các câu ví dụ và bản dịch tiếng Việt dành cho những người muốn tự học."
            },
            {
                "id":50,
                "image": "img/book/KN11.jpg",
                "title": "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
                "author": "Trác Nhả",
                "price": 76,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Dài quá dài rùi..."
            },
            {
                "id":51,
                "image": "img/book/KN12.jpg",
                "title": "Người Giàu Có Nhất Thành Babylon",
                "author": "George S Clason",
                "price": 52,
                "type": ["Kỹ năng sống", "Trẻ em", "All"],
                "description":"Người giàu có nhất thành Babylon (tiếng Anh: The Richest Man in Babylon) được xem là một trong những tác phẩm truyền cảm hứng lớn nhất về chủ đề tiết kiệm, kế hoạch tài chính và sự giàu có cá nhân. Tác phẩm được viết bởi doanh nhân, nhà văn Mỹ George Samuel Clason vào năm 1926, kể về cách tiết kiệm, buôn bán và làm giàu của người dân ở thành Babylon cổ xưa."
            },
            {
                "id":52,
                "image": "img/book/KN13.jpg",
                "title": "Thần Số Học: Thấu Hiểu Nhân Tâm",
                "author": "Tống Khánh Thượng",
                "price": 76,
                "type": ["Kỹ năng sống", "All"],
                "description":"“Thần số học – Thấu hiểu nhân tâm” được viết dựa trên những nghiên cứu và chiêm nghiệm của bản thân tác giả Tống Khánh Thượng cùng với rất nhiều chia sẻ của học viên và khách hàng của anh. Tác giả thuộc típ người tư duy theo lô-gic, bản chất, cho nên thường quan sát và chiêm nghiệm thực tế những gì nghe được, đọc được và suy tưởng được."
            },
            {
                "id":53,
                "image": "img/book/KN14.jpg",
                "title": "Một Đời Như Kẻ Tìm Đường",
                "author": "Phan Văn Trường",
                "price": 320,
                "type": ["Kỹ năng sống", "All"],
                "description":"ến với cuốn sách này, tác giả lại muốn dành một khoảng không gian riêng để có thể phản ảnh những cảm nhận cá nhân về cuộc sống, với góc nhìn từ những năm tháng tuổi trẻ cho đến độ tuổi xế chiều này.Khoảnh khắc khó chịu nhất có lẽ là khi mình đã lỡ chọn một hướng đi, nhưng ngộ được rằng con đường này nhiều chông gai, lắm rào cản và lại còn không phù hợp."
            },
            {
                "id":54,
                "image": "img/book/KN15.jpg",
                "title": "Tư Duy Phản Biện",
                "author": "Zoe McKey",
                "price": 55,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Tư duy phản biện không phải là chỉ biết vài thứ, và chắc chắn không phải việc xác nhận những điều bạn đã biết. Thay vào đó, nó xoay quanh việc tìm kiếm sự thật – và biến chúng trở thành thứ bạn biết"
            },
            {
                "id":55,
                "image": "img/book/KN16.jpg",
                "title": "Kiếp Nào Ta Cũng Tìm Thấy Nhau ",
                "author": "Brian L Weiss",
                "price": 450,
                "type": ["Kỹ năng sống", "All", "Tiểu thuyết"],
                "description":"Kiếp nào ta cũng tìm thấy nhau nói về những linh hồn tri kỷ, những người có mối liên kết vĩnh viễn với nhau bằng tình yêu thương, luôn gặp lại nhau hết lần này đến lần khác, qua hết kiếp này tới kiếp khác. Chúng ta sẽ tìm thấy và nhận ra tri kỷ của mình như thế nào, rồi đưa ra những quyết định làm thay đổi cuộc sống của chính mình ra sao là những khoảnh khắc quan trọng và xúc động nhất trong c"
            },

            {
                "id":56,
                "image": "img/book/KN19.jpg",
                "title": "Cân Bằng Cảm Xúc, Cả Lúc Bão Giông",
                "author": "Richard Nicholls",
                "price": 74,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Học được cách cân bằng cảm xúc cũng chính là học được cách làm chủ cuộc đời mình thông minh, sáng suốt và đúng hướng. Cân bằng cảm xúc, cả lúc bão giông” khác biệt hoàn toàn so với những cuốn sách về cảm xúc thông thường khác khác"
            },

            {
                "id":57,
                "image": "img/book/TE6.jpg",
                "title": "Ngữ Pháp Tiếng Hàn Thông Dụng",
                "author": "Ahn Jean Myung",
                "price": 213,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"Hy vọng rằng với cuốn sách này, các bạn học sinh gặp nhiều khó khăn khi học tiếng Hàn Quốc sẽ có một cách tiếp cận mới dễ dàng và thú vị hơn. Đồng thời, các bạn có thể sử dụng tiếng Hàn thành thạo ở mức cơ bản, phục vụ cho việc học tập của các bạn. Sở hữu cuốn sách càng sớm, bạn càng nhanh chóng rút gọn được quá trình chinh phục ngữ pháp tiếng Hàn."
            },
            {
                "id":58,
                "image": "img/book/KD1.jpg",
                "title": "Dị Chủng 2 - Tàn Thế",
                "author": "Guillermo Del",
                "price": 114,
                "type": ["Kinh dị", "All", "Tiểu thuyết"],
                "description":"Một câu chuyện kinh dị hấp dẫn sẽ khiến bạn dựng tóc gáy. Dị Chủng là sự kết hợp giữa Bram Stocker với Stephen King và Michael Crichton. Khó có thể xuất sắc hơn được nữa"
            },
            {
                "id":59,
                "image": "img/book/KD2.jpg",
                "title": "Mùa Hạn Kinh Hoàng - The Dry",
                "author": "Jane Harper",
                "price": 70,
                "type": ["Kinh dị", "All"],
                "description":"Tại hiện trường, dưới cái nóng, lũ nhặng vẫn bu lấy nhung nhúc trong sự thỏa mãn, bởi máu tràn ra, tưới thẫm nền nhà và thảm trải sàn. Bên ngoài, đồ giặt giũ vẫn còn nguyên trên dây phơi, khô cong, cứng đờ dưới nắng. Một chiếc xe trượt của trẻ con nằm bơ vơ trên con đường lát đá. Trong vòng bán kính một cây số xung quanh nông trại đó, chỉ có một con người duy nhất mà trái tim còn đang đập"
            },
            {
                "id":60,
                "image": "img/book/KD3.jpg",
                "title": "Di Sản Kinh Hoàng",
                "author": "Lisa Gardner",
                "price": 137,
                "type": ["Best seller","Kinh dị", "All"],
                "description":"Tiểu thuyết trinh thám lôi cuốn bậc nhất của nhà văn bestseller theo New York Times"
            },
            {
                "id":61,
                "image": "img/book/KD4.jpg",
                "title": "Truyện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 406,
                "type": ["Kinh dị", "All"],
                "description":"TRUYỆN SỢ VÃI LINH HỒN"
            },

            {
                "id":62,
                "image": "img/book/KD7.jpg",
                "title": "Truyện Kinh Dị Việt Nam",
                "author": "Lan Khai",
                "price": 87,
                "type": ["Kinh dị", "All"],
                "description":"TRUYỆN SỢ VÃI LINH HỒN"
            },
            {
                "id":63,
                "image": "img/book/TE7.jpg",
                "title": "Tiếng Hàn Tổng Hợp",
                "author": "Cho Hang Rok",
                "price": 120,
                "type": ["Khoa học", "All"],
                "description":"a nhon a xê yo, sa kwa di khrap "
            },
            {
                "id":64,
                "image": "img/book/TE8.jpg",
                "title": "Giáo Trình Hán Ngữ 1",
                "author": "Chưa cập nhật",
                "price": 71,
                "type": ["Khoa học", "All"],
                "description":"wo shi tung kua rian"
            },
            {
                "id":65,
                "image": "img/book/TE9.jpg",
                "title": "Keep It Up - Tập Viết Chữ Hán",
                "author": "Jeyong",
                "price": 56,
                "type": ["All", "Trẻ em", "Khoa học"],
                "description":"ABCDEFG"
            },
            {
                "id":66,
                "image": "img/book/OP.jpg",
                "title": "Vivre Card ",
                "author": "Eiichiro Oda",
                "price": 120,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"Bộ sưu tập thẻ dữ liệu nhân vật có một không hai tại Việt Nam dành cho các fan của bộ truyện tranh nổi tiếng ONE PIECE!!"
            },
            {
                "id":67,
                "image": "img/book/blackjack.jpg",
                "title": "Black Jack - tập 11 ",
                "author": "Osamu Tezuka",
                "price": 30,
                "type": ["Truyện tranh", "Kinh dị", "All"],
                "description":"Đen năm trịu"
            },
            {
                "id":68,
                "image": "img/book/bleach.jpg",
                "title": "BLEACH - tập 70 ",
                "author": "Tite Kubo",
                "price": 25,
                "type": ["Truyện tranh", "All"],
                "description":"Jugo và Bazz đã thề sẽ cùng nhau mạnh lên sau khi mất đi quê hươ Song tương lai của đôi bạn đã rẽ theo 2 hướng khác nhau kể từ ngày Yhwach xuất hiện, để rồi hôm nay họ đối đầu như kẻ thù. Chỉ còn lại kí ức xưa cũ, mối liên kết giữa 2 người bắt đầu tan vỡ"
            },
            {
                "id":69,
                "image": "img/book/ranma.jpg",
                "title": "Ranma 1/2 - tập 19 ",
                "author": "Rumiko TAKAHASHI",
                "price": 70,
                "type": ["Truyện tranh", "All"],
                "description":"Ranma từ nhỏ đã theo cha đến Trung Quốc để luyện tập võ công. Vô tình cậu chàng bị rơi vào con suối khi tập võ và dính phải lời nguyền, biến thành con gái nếu bị tạt nước lạnh, và chỉ trở lại nguyên hình nếu bị tạt nước nóng.Đến năm 16 tuổi, cậu theo cha về Nhật cùng với một lời hứa hôn của cha thuở xưa. Bắt đầu từ đây là chuỗi ngày dở khóc dở cười bởi lời nguyền mà cậu đang mang trên người. Liệu cuối cùng Ranma có thoát được lời nguyền để đường đường chính chính đến với vị 'hôn thê' dữ như cọp của mình hay không?"
            },
            {
                "id":70,
                "image": "img/book/conan.jpg",
                "title": "CONAN - tập 98 ",
                "author": "Gosho Aoyama",
                "price": 20,
                "type": ["Truyện tranh", "Khoa học", "Kinh dị", "All"],
                "description":"NOTHING TO DESCRIPTION"
            },
            {
                "id":71,
                "image": "img/book/overlord.jpg",
                "title": "OVERLORD - tập 13 ",
                "author": "Maruyama Kugane",
                "price": 48,
                "type": ["Truyện tranh", "Khoa học", "All"],
                "description":"Cuộc xung đột tại vương đô dần đi đến hồi kết, với đỉnh điểm là trận chiến giữa ác quỷ Jaldabaoth và Dark Hero Momon."
            },

            {
                "id":72,
                "image": "img/book/tienganh.jpg",
                "title": "30 Chủ đề từ vựng tiếng anh",
                "author": "Trang Anh",
                "price": 308,
                "type": ["Best seller","Trẻ em", "Khoa học", "All"],
                "description":"Với khoảng hơn 4000 từ vựng cấu trúc và trên 2000 câu trắc nghiệm kèm đáp án có giải thích chi tiết, chắc chắn bộ sách sẽ là công cụ tự học hữu hiệu, giúp người học trau dồi vốn từ vựng một cách hiệu quả nhất."
            },
            {
                "id":73,
                "image": "img/book/hoahoc.jpg",
                "title": "Sổ tay hóa học",
                "author": "Trần Thị Yến",
                "price": 40,
                "type": ["All", "Khoa học", "Trẻ em"],
                "description":"Không phải hóa học, mà là chemistry"
            },
            {
                "id":74,
                "image": "img/book/giakim.jpg",
                "title": "Nhà giả kim",
                "author": "Paulo Coelho",
                "price": 65,
                "type": ["All", "Tiểu thuyết", "Kỹ năng sống"],
                "description":"Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc."
            },
            {
                "id":75,
                "image": "img/book/demvinhhang.jpg",
                "title": "Đêm Vĩnh Hằng",
                "author": "Guillermo Del Toro",
                "price": 140,
                "type": ["Kinh dị", "All", "Tiểu thuyết"],
                "description":"ĐÀM ZĨNH HƯNG"
            },
            {
                "id":76,
                "image": "img/book/eng.jpg",
                "title": "English Grammar in Use Book w Ans",
                "author": "Raymond Murphy",
                "price": 170,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"The world's best-selling grammar series for learners of English. English Grammar in Use Fourth edition is an updated version of the world's best-selling grammar title. It has a fresh, appealing new design and clear layout, with revised and updated examples, but retains all the key features of clarity and accessibility that have made the book popular with millions of learners and teachers around the world. This 'with answers' version is ideal for self-study. An online version, book without answers, and book with answers and CD-ROM are available separately."
            },
            {
                "id":77,
                "image": "img/book/kinang.jpg",
                "title": "Kĩ năng sống",
                "author": "PGS TS Huỳnh Văn Sơn",
                "price": 30,
                "type": ["Khoa học", "Kỹ năng sống", "All"],
                "description":"Các bậc phụ huynh chắc hẳn đều mong con mình có lòng quan tâm đến người khác, biết báo đáp cha mẹ. Nhưng dạy trẻ cách suy nghĩ cho người khác, quan tâm đến người khác không phải chuyện dễ dàng."
            },
            {
                "id":78,
                "image": "img/book/ando.jpg",
                "title": "mahabharata",
                "author": "DK",
                "price": 520,
                "type": ["All", "Tiểu thuyết", "Trẻ em", "All"],
                "description":"Nội dung cơ bản của bộ sử thi Mahabharata nói về cuộc chiến tranh khốc liệt giữa hai dòng họ Kaurava và Pandava, cả hai đều là dòng dõi vua Bharata vào khoảng thế kỷ 11 TCN đến thế kỷ 10 TCN. Do đó tên Mahabharata có nghĩa là 'các truyện vĩ đại của triều đại nhà Bharata'"
            }
        ],
        
        vpp: [
            {
                "id":500,
                "image": "img/book/but.jpg",
                "title": "Hộp 20 bút bi 0.5mm",
                "author": "Thiên Long",
                "price": 69,
                "description": "Đây là một trong những cây bút đang được học sinh sử dụng nhiều nhất tại Việt Nam. Bút có thiết kế tối giản, nhưng tinh tế và ấn tượng. Toàn bộ thân bút làm từ nhựa trong, phối hợp hoàn hảo với màu ruột bút bên trong."
            },
            {
                "id":501,
                "image": "img/book/tap.jpg",
                "title": "Tập Sinh Viên 4 Ô Ly",
                "author": "Elephant",
                "price": 17,
                "description": "Tập Sinh Viên 4 Ô Ly Ngang 120 Trang 80gsm Truewrite White - Elephant FI618445 Tập với mặt giấy láng mịn, viết êm tay, tạo nét chữ đẹp. Giấy viết không bị lem,không nhòe, không thấm mực ra trang sau, độ trắng không làm hại mắt, ăn mực hầu hết các loại bút. Quyển tập có đường kẻ ô ly rõ ràng, đều đặn giúp các em học sinh viết chữ đẹp hơn, nắn nót hơn. Bìa tập trang trí hình ảnh dễ thương, màu sắc nổi bật, tạo cảm hứng cho các em trong quá trình học tập. Sản phẩm sẽ là người bạn đồng hành giúp các bạn học tốt hơn."
            },
            {
                "id":502,
                "image": "img/book/balo.jpg",
                "title": "Cặp Đa Năng Simplex 06",
                "author": "STARGO",
                "price": 462,
                "description": "Sản phẩm được thiết kế và sản xuất theo tiêu chuẩn Sakostyle U.S.A. Được sản xuất và phân phối độc quyền bởi SAKOS Việt Nam."
            },
            {
                "id":503,
                "image": "img/book/chi.jpg",
                "title": "Ruột Chì Ngòi Lớn 2B",
                "author": "Uyên Loan",
                "price": 4,
                "description": "Ruột Chì Ngòi Lớn 8103 2B có ruột chì lớn, chuyên sử dụng cho bút chì bấm ngòi 2.0 mm, rất lý tưởng để sử dụng vẽ sketch, vẽ kỹ thuật,... Sản phẩm có chất chì cho màu đậm, nét chì mịn, sắc nét và có độ bền màu cao. Chì viết không tạo bột chì, không làm rách giấy khi đè mạnh. Chất chì đậm, mịn Ruột Chì Ngòi Lớn 8103-2b có chất chì cho màu đậm, khi sử dụng sẽ tạo nên những nét chì mịn và sắc nét. Chì có độ bền màu cao, lâu phai nhưng cũng dễ dàng xóa sạch bằng gôm, rất tiện lợi. Ruột chì ngòi lớn, nét to Ruột chì lớn, chuyên sử dụng cho bút chì bấm ngòi 2.0 mm, rất lý tưởng để sử dụng vẽ sketch, vẽ kỹ thuật, phác họa. Ruột chì cứng, bền, không bị gãy đứt khúc, được đặt gọn gàng trong hộp nhựa, giúp bạn dễ dàng bảo quản và mang theo. Chất liệu an toàn Ruột chì được sản xuất trên chất liệu cao cấp, không chứa hoá chất độc hại, an toàn cho sức khoẻ người dùng. Chì viết không tạo mịn chì, không làm rách giấy khi đè mạnh."
            },
            {
                "id":504,
                "image": "img/book/bothuchanh.jpg",
                "title": "Bộ 2 Hộp Thực Hành Toán Lớp 2",
                "author": "Việt Nam",
                "price": 188,
                "description": "Bộ 2 Hộp Thực Hành Toán Lớp 2 Dùng Cho Học Sinh Bộ Thực Hành Toán Lớp 2 Sản phẩm gồm một bộ thiết bị dạy so sánh số, bộ thiết bị dạy phép tính và bộ thiết bị dạy hình phẳng với màu sắc và kích thước đa dạng, giúp trẻ hứng thú và học tốt hơn môn Toán lớp 2. Bộ dụng cụ hỗ trợ tối đa các kiến thức về phép tính cộng, trừ, nhân, chia, là bước đệm quan trọng cho trẻ ở những năm Tiểu học. Đặc biệt, sản phẩm được làm bằng các chất liệu cao cấp, không chứa các chất độc hại ảnh hưởng đến sức khỏe người tiêu dùng."
            },
            {
                "id":505,
                "image": "img/book/puzzle.jpg",
                "title": "Bộ Xếp Hình Puzzle",
                "author": "Castorland",
                "price": 649,
                "description": "Bộ Xếp Hình Puzzle - Castorland C-300570 - Tavola Di Capri CASTORLAND là công ty sản xuất tranh xếp hình hàng đầu Ba Lan với 30 năm kinh nghiệm đã tạo nên sự phát triển liên tục và vững chắc ở nhiều thị trường trên thế giới. Castorland puzzle được xuất khẩu đi hơn 50 quốc gia trên thế giới. Các sản phẩm Castorland Puzzle mang tính trí tuệ và giáo dục cao cho trẻ em. Sản phẩm đáp ứng các tiêu chuẩn an toàn về đồ chơi trẻ em EU-71 của Châu Âu, an toàn cho trẻ và thân thiện với môi trường. Các tranh ghép của Castorland đều gắn với những câu chuyện cổ tích; phong cảnh đẹp và nổi tiếng trên khắp thế giới Trong quá trình ghép tranh, các bé không chỉ mở rộng được các kiến thức, phát triển dược các kỹ năng quan sát, kỹ năng giải quyết vấn đề, khả năng suy nghĩ logic, suy nghĩ độc lập, đồng thời rèn luyện tính kiên trì cao."
            },
            {
                "id":506,
                "image": "img/book/cal.jpg",
                "title": "Máy Tính Vinacal 570 ES Plus II ",
                "author": "Vinacal",
                "price": 540,
                "description": "Máy Tính Học Sinh Vinacal 570ES Plus II Máy Tính Học Sinh Vinacal 570ES Plus II là dòng máy tính được ưa chuộng với nhiều tính năng nổi bật,chắc chắn máy sẽ đáp ứng tốt những nhu cầu về làm việc và học tập của bạn. Đặc biệt, sản phẩm đã được Bộ Giáo dục ra công văn xác nhận được phép mang vào phòng thi, hỗ trợ hiệu quả trong việc tính toán bài thi. Thông tin sản phẩm: Kiểu dáng và màu sắc đẹp Với thiết kế năng động, dễ dàng cầm tay và thao tác nhanh chóng, Máy tính Vinacal 570ES Plus II sẽ là một sự lựa chọn tối ưu và hiệu quả cho người dùng. Kiểu dáng nắp trượt hiện đại và được phối màu rất tinh tế, máy tính Vinacal 570ES Plus II thể hiện được đăng cấp vượt trội hơn so với các dòng máy khác về kiểu dáng. Sản phẩm có 2 màu: hồng trắng và xám trắng cho các bạn lựa chọn. Bổ sung nhiều tính năng vượt trội Với nhiều tính năng vượt trội và các tính năng mới được bổ sung giúp các bạn giải quyết được hầu hết các dạng toán khó: Tìm giới hạn lim, Lưu nghiệm trong Mode EQN, Tính tích của một dãy số... Sản phẩm sẽ rất hữu ích vì nó hỗ trợ các bạn rất nhiều trong suốt các năm học, đặc biệt là các kỳ thi quan trọng như tốt nghiệp THPT, cao đẳng, đại học. Tích hợp nhiều tính năng tiện ích Ngoài tính năng phong phú và đa dạng, máy tính này còn đáng được chú ý ở khả năng tích hợp nhiều chức năng tiện ích: phím cuộn, chức năng hiển thị lại, copy lại, phím lùi, tính năng CALC, SOLVE, ANS, số nhớ. Đây là dòng máy đang được thầy cô và các bạn học sinh ưa chuộng nhất hiện nay. Phím bấm nhạy Phím bấm của máy tính khoa học Máy tính Vinacal 570ES Plus II rất nhạy, giúp cho các bạn học sinh, sinh viên có thể bấm phím nhanh bằng cả hai tay mà không sợ thiếu số hoặc sai kết quả tính toán. Bạn sẽ không còn gặp khó khăn và mất thời gian, mang lại hiệu quả sử dụng cao. "
            },
            {
                "id":507,
                "image": "img/book/butdaquang.jpg",
                "title": "Bút dạ quang",
                "author": "Schneider",
                "price": 17,
                "description": "Bút Dạ Quang Job - Schneider 1523 Bút đánh dấu với đầu đục 2 nét bút: 1 + 5 mm. Lượng mực nhiều, có thể đánh dấu được hơn 15.000 từ. Thân bút làm bằng nhựa PP chống bay hơi giữ cho bút luôn viết đều màu, bền màu. Màu phổ thông dùng cho giấy thường, giấy photo, giấy fax, có độ sáng tối đa và bắt sáng tốt, không làm lem nét chữ của mực khi viết chồng lên và không để lại vết khi qua photocopy. Kiểu dáng trẻ trung, hiện đaị, thân phẳng với các góc tròn, không lăn khi đặt trên bàn, rất thích hợp cho học sinh, sinh viên và nhân viên văn phòng."
            }
        ]
    });
}