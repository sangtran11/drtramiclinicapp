export * from "./themeConfiguration";

export const isEmail = (email: string) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const listInputForm = [
  {
    label: "Họ và tên",
    name: "fullName",
    placeholder: "Nhập họ và tên",
    isRequired: true,
    type: "text",
  },
  {
    label: "Số điện thoại",
    name: "phone",
    placeholder: "Nhập số điện thoại",
    isRequired: true,
    type: "number",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Nhập email",
    isRequired: false,
    type: "text",
  },
  {
    label: "Chọn ngày",
    name: "dateString",
    placeholder: "Chọn ngày/tháng/năm",
    isRequired: true,
    type: "dateInput",
  },
  {
    label: "Chọn giờ",
    name: "timeString",
    placeholder: "Chọn giờ",
    isRequired: true,
    type: "select",
    options: [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
    ],
  },
  {
    label: "Loại dịch vụ",
    name: "service",
    isRequired: true,
    type: "checkbox",
    options: [
      "Điều trị mụn",
      "Điều trị sẹo",
      "Điều trị nám",
      "Trẻ hoá da",
      "Tư vấn tiêm filler/botox",
      "Tư vấn tiêm mesotherapy/BAP",
      "Điều trị bệnh lý",
      "Khác",
    ],
  },
];

export const brandListLogo = [
  "bioderma",
  "celluma",
  "cerave",
  "cetaphil",
  "eucerin",
  "jeandarcel",
  "laroche",
  "ldm",
  "megawecare",
  "restylane",
  "skinceuticals",
  "skinclinic",
  "sylfirmx",
  "ultraformer",
  "vichy",
  "xcelene",
  "zo",
];

export const certificateImageList = [
  "bc1.jpg",
  "bc2.jpg",
  "bc3.jpg",
  "bc4.png",
  "bc5.jpg",
  "bc6.jpg",
  "bc7.png",
  "bc8.jpg",
  "bc9.jpg",
  "bc10.png",
];

export const servicesListLogo = [
  {
    id: 1,
    title: "ĐIỀU TRỊ MỤN",
    logo: "dieutrimun",
    content: {
      name: "Điều trị mụn",
      searchTag: "điều trị mụn dieu tri mun",
      desctiption: `
        <div class="mb-3">
          Mụn trứng cá là bệnh lý phổ biến, đặc biệt ở trẻ vị thành niên từ 12-24 tuổi và có thể mắc phải ở người trưởng thành. Nếu trước đây mụn trứng cá được xem là liên quan đến yếu tố nang lông tuyến bã, thì ngày nay khoa học đã tìm ra các tác nhân khác góp phần gây nên hoặc làm nặng hơn trình trạng mụn trứng cá như: chế độ ăn nhiều sữa, hút thuốc lá, căng thẳng, stress và sử dụng thuốc,…<br/>
        </div>
        <div class="mb-3">
          Điều trị mụn trứng cá cần kết hợp các sản phẩm chăm sóc da tại nhà kèm theo các thuốc thoa điều trị mụn và chiếu ánh sáng. Sử dụng sữa rửa mặt có chứa các thành phần như salicylic acid, AHA, ... để kiềm dầu và làm thông thoáng lỗ chân lông. Quan trọng nhất, bạn nên sắp xếp đến phòng khám để bác sĩ kiểm tra và có phác đồ điều trị phù hợp với tình trạng mụn của mình.
        </div>
        <div class="mb-3">
          Một số hình ảnh khách hàng điều trị mụn trứng cá thành công chỉ sau thời gian ngắn tại Phòng khám BSCKII Nguyễn Lê Trà Mi
        </div>`,
      imagesList: ["dieutrimun1", "dieutrimun2", "dieutrimun3"],
    },
  },
  {
    id: 2,
    title: "ĐIỀU TRỊ SẸO",
    logo: "dieutriseo",
    content: {
      name: "Điều trị sẹo",
      searchTag: "điều trị sẹo dieu tri seo",
      desctiption: `
        <div class="mb-3">
          Sẹo hình thành từ những tổn thương trên da, và sâu đến lớp trung bì da như bỏng, các thủ thuật, phẫu thuật xâm lấn trên da, vết thương châm lành do nhiễm trùng da, tổn thương sau mụn trứng cá,…
        </div>
        <div class="mb-3">
          Cơ chế hình thành sẹo liên quan tới bất thường trong việc lành sẹo. Khi lành sẹo, cơ thể sẽ huy động các tế bào như nguyên bào sợi, kích hoạt chúng tạo ra các chất như collagen, elastin, proteoglycan và protein chất nền để đóng vết thương lại. Tuy nhiên, sự điều hòa quá trình này trở nên rối loạn, việc tạo ra collagen bị tăng cường quá mức/ hoặc thiếu hụt dẫn tới sự hình thành các vết sẹo như sẹo rỗ, sẹo lồi, sẹo lõm,…
        </div>
        <div class="mb-3">
          Ngày nay dưới sự tiến bộ của y học và công nghệ trong thẩm mỹ da có nhiều phương pháp hiệu quả điều trị sẹo như: tiêm mesotherapy, lăn kim, PRP, laser, … Đặc biệt, phương pháp được xem là tối ưu nhất hiện nay được FDA approved đó chính là công nghê vi kim sóng kép SYLFIRM X. Một lưu ý đối với điều trị sẹo là bạn nên điều trị càng sớm càng tốt, tránh để lâu sẹo xơ cứng, khi đó việc điều trị sẽ tốn nhiều thời gian, tiền bạc và công sức hơn.
        </div>
        <div class="mb-3">
          Một số hình ảnh khách hàng điều trị sẹo tại Phòng khám BSCKII Nguyễn Lê Trà Mi
        </div>
      `,
      imagesList: ["triseoro1", "triseoro2"],
    },
  },
  {
    id: 3,
    title: "ĐIỀU TRỊ NÁM",
    logo: "dieutrinam",
    content: {
      name: "Điều trị nám",
      searchTag: "điều trị nám dieu tri nam",
      desctiption: `
        <div class="mb-3">
          Nám da là một tình trạng rối loạn tăng sắc tố mắc phải, mạn tính. Theo thống kê tỷ lệ mắc phải nám da ở nữ giới sẽ cao hơn nam giới. Cơ chế bệnh sinh của nám chưa được hiểu rõ hoàn toàn, nhưng hiện nay người ta thấy rằng nám má gây ra do sự phối hợp của bốn yếu tố chính như sau:
        </div>
        <ul class="mb-3 pl-5">
          <li class="list-disc">
            Di truyền: nghiên cứu những người có người thân, gia đình có tiền sử nám sẽ dễ có những yếu tố dễ bị nám má hơn những người khác.
          </li>
          <li class="list-disc">
            Ánh nắng mặt trời: là một yếu tố thúc đẩy quan trọng gây hình thành nám, bằng chứng là việc nám thường xuất hiện ở vùng phơi bày ánh sáng và nặng hơn khi tiếp xúc với nắng. Các tia bức xạ UVA, UVB có trong ánh nắng kích thích tế bào hắc tố, từ đó gây ra tình trạng rối loạn sắc tố trong đó có nám da.
          </li>
          <li class="list-disc">
            Phản ứng viêm: có thể khu trú hoặc toàn thân, gặp trong viêm da tiếp xúc ( dị ứng với một số mỹ phẩm, hoặc thoa mỹ phẩm không rõ nguồn gốc ), hoặc sau một số các thủ thuật thẩm mỹ.
          </li>
          <li class="list-disc">
            Nội tiết: Nám da thường xảy ra ở phụ nữ có thai hoặc phụ nữ sau sinh; những người sử dụng thuốc tránh thai, ngoài ra có thể gặp ở bệnh nhân mắc các bệnh lý nội tiết tại tuyến giáp, buồng trứng. Bởi vì ở những trường hợp này nội tiết tố trong cơ thể có thể bị thay thế hoặc là bị suy giảm. Chính vì lý do đó mà nám thường hay xuất hiện hơn. 
          </li>
        </ul>
        <div class="mb-3">
          Điều trị nám da cần phối hợp đa phương thức bao gồm liệu pháp ánh sáng, thuốc thoa, thuốc uống, tiêm mesotherapy,...nhằm đạt được hiệu quả cao, giúp khách hàng lấy lại làn da vốn có. Tuy nhiên, do cơ chế bệnh sinh phức tạp, việc điều trị dứt điểm nám vẫn còn là một bài toán khó, cần sự hợp tác giữa bác sĩ và khách hàng. Nếu khách hàng tuân thủ đúng phác đồ của bác sĩ, kết hợp chống nắng kỹ thì tình trạng nám được cải thiện rõ rệt và hạn chế tái phát.
        </div>
        <div class="mb-3">
          Bên cạnh đó, bước đầu tiên trong quy trình điều trị, bác sĩ khuyên bạn nên đến phòng khám để được bác sĩ soi da, thăm khám và chẩn đoán chính xác tình trạng nám mắc phải và đưa ra phác đồ điều trị phù hợp với tình trạng nám của bạn.
        </div>
        <div class="mb-3">
          Một số hình ảnh khách hàng điều trị nám thành công tại Phòng khám BSCKII Nguyễn Lê Trà Mi
        </div>
      `,
      imagesList: ["dieutrinam1", "dieutrinam2"],
    },
  },
  {
    id: 4,
    title: "TRẺ HOÁ DA",
    logo: "trehoada",
    content: {
      name: "Trẻ hóa da",
      searchTag: "trẻ hóa da tre hoa da",
      desctiption: `
        <div class="mb-3">
          Lão hóa da là một tình trạng da phổ biến và thường gặp phụ nữ tuổi trung niên, làn da chúng ta lão hóa theo thời gian do các yếu tố nội sinh và ngoại sinh gây nên. Trong đó yếu tố ngoại sinh chiếm khoảng 80% như: trọng lực hút của trái đất, ánh nắng mặt trời, ô nhiễm môi trường, khói bụi, stress căng thẳng, hút thuốc lá, sử dụng thực phẩm có chứa chất độc hại như thuốc trừ sâu,… Bên cạnh một số yếu tố nội sinh như gen di truyền, nội tiết tố.
        </div>
        <div class="mb-3">
          Một số biểu hiện làn da lão hóa như: da nhăn nheo, chùng nhão, kém đàn hồi và săn chắc, nếp nhăn trán, nếp nhăn mắt, rảnh cười sâu, trũng mắt sâu …
        </div>
        <div class="mb-3">
          Hiện nay có nhiều phương pháp và công nghệ tiên tiến giúp cải thiện tình trạng lão hóa, trẻ hóa da hiệu quả được kiểm nghiệm lâm sàng như: công nghệ Ultra Lift, RF microneedling, RF, peel da trẻ hóa, lăn kim, vi kim, tiêm mesotherapy, tiêm filler, botulinum toxin…
        </div>
        <div class="mb-3">
          Một số hình ảnh khách hàng trước và sau thực hiện thủ thuật trẻ hóa da tại Phòng khám BSCKII Nguyễn Lê Trà Mi
        </div>
      `,
      imagesList: ["trehoada1", "trehoada2"],
    },
  },
  {
    id: 5,
    title: "TƯ VẤN TIÊM FILLER/BOTOX",
    logo: "tiemfillerbotox",
    content: {
      name: "Tư vấn tiêm filler/botox",
      searchTag: "tư vấn tiêm filler botox tu van tiem",
      desctiption: `
        <div class="mb-3">
          Tiêm filler là phương pháp làm đẹp phổ biến, theo thống kê ở Mỹ có trên 3 triệu người lựa chọn phương thức làm đẹp này. Vậy tiêm Filler là gì? Có an toàn không? 
        </div>
        <div class="mb-3">
         Tiêm filler là tiêm chất làm đầy sinh học nhằm tạo hình các vùng da trên cơ thể. Nâng vùng mô dưới da để xóa nếp nhăn, tăng kích thước một số bộ phận trên cơ thể. Ưu điểm của tiêm filler:
        </div>
        <ul class="mb-3 pl-5">
          <li class="list-disc">
            Tạo thể tích cho vùng da được tiêm như thái dương, trán, rãnh lệ, cằm.
          </li>
          <li class="list-disc">
            Điều chỉnh các khuyết điểm, tạo cân đối cho khuôn mặt.
          </li>
          <li class="list-disc">
            Xóa bỏ các nếp nhăn sâu trên khuôn mặt như rãnh má mũi, phục hồi vẻ ngoài trẻ trung.
          </li>
          <li class="list-disc">
            Tăng độ căng bóng cho da và tạo sự thon gọn cho khuôn mặt.
          </li>
          <li class="list-disc">
            Tiêm filler thích hợp cho mọi lứa tuổi, từ thanh thiếu niên đến người trung niên và người cao tuổi.
          </li>
          <li class="list-disc">
            Phương pháp này cũng không phân biệt giới tính, dành cho cả nam và nữ để nâng cao vẻ đẹp.
          </li>
          <li class="list-disc">
            Cân chỉnh đường nét trên cơ thể 
          </li>
        </ul>
        <div class="mb-3">
          Một số hình ảnh khách hàng trước và sau thực hiện thủ thuật trẻ hóa da tại Phòng khám BSCKII Nguyễn Lê Trà Mi
        </div>
      `,
      imagesList: ["tiemfiller"],
    },
  },
  {
    id: 6,
    title: "TƯ VẤN TIÊM MESOTHERAPY",
    logo: "tiemmeso",
    content: {
      name: "Tư vấn tiêm mesotherapy",
      searchTag: "tư vấn tiêm mesotherapy meso tu van tiem",
      desctiption: `
        <div class="mb-3">
          Mesotherapy còn được gọi là tiêm Meso vi điểm. Phương pháp trị liệu này sử dụng một lượng thuốc hay dưỡng chất Vitamin, Enzyme, HA được tiêm trực tiếp vào da nhằm cung cấp dưỡng chất cho da để tạo ra các kích thích sinh học. Liệu pháp này đang được nhiều người ưa thích và sử dụng trên toàn thế giới, đặc biệt ở Việt nam rất ưa chuộng vì độ an toàn và hiệu quả của nó mang lại:
        </div>
        <div class="mb-3">
          Mesotherapy được chỉ định điều trị đơn độc hoặc phối hợp với các phương pháp làm đẹp khác với công dụng như: trẻ hóa da, săn chắc da, căng bóng da, cải thiện độ ẩm, sức khỏe của làn da, tăng cường độ đàn hồi của da, điều trị tan mỡ, điều trị thâm, nám, tàn nhang, rạn da, kích thích mọc tóc,...
        </div>
        <div class="mb-3">
          Một số hình ảnh khách hàng trước và sau thực hiện thủ thuật tiêm mesotherapy tại Phòng khám BSCKII Nguyễn Lê Trà Mi
        </div>
      `,
      imagesList: ["tiemmeso"],
    },
  },
  {
    id: 7,
    title: "ĐIỀU TRỊ CHÀM",
    logo: "dieutricham",
    content: {
      name: "Điều trị chàm",
      searchTag: "điều trị chàm dieu tri cham",
      desctiption: `
        <div class="mb-3">
          Thuật ngữ Chàm được dùng để mô tả biểu hiện lâm sàng của tình trạng viêm trong da gặp ở nhiều bệnh da khác nhau. Đây là một căn bệnh phổ biến, với biểu hiện triệu chứng đa dạng như da khô, đỏ, tróc vảy, mụn nước, rỉ dịch, vết cào gãi và thường ngứa nhiều.,. Chàm là một bệnh lý mạn tính có thể gặp ở cả người lớn và trẻ em, đặc biệt là các trẻ nhỏ nhũ nhi.
        </div>
        <div class="mb-3">
          <h4 class="font-bold">PHÂN LOẠI BỆNH CHÀM</h4>
          Có nhiều phân loại được đề xuất để phân biệt các bệnh da trong nhóm phát ban da dạng chàm như dựa vào nguyên nhân hoặc hình dạng thương tổn. <br/>
          Gần đây, chàm được phân loại thành hai nhóm chính:</br>
          <ul class="mb-3 pl-5">
            <li class="list-disc">
              Chàm ngoại sinh: viêm da tiếp xúc dị ứng, viêm da tiếp xúc kích ứng, …
            </li>
            <li class="list-disc">
              Chàm nội sinh: viêm da cơ địa, viêm da tiết bã, chàm đồng tiền, chàm ứ đọng….
            </li>
          </ul>
        </div>
      `,
      imagesList: ["dieutricham"],
    },
  },
  {
    id: 8,
    title: "ĐIỀU TRỊ RỤNG TÓC",
    logo: "dichvukhac",
    content: {
      name: "Điều trị rụng tóc",
      searchTag: "điều trị rụng tóc dieu tri rung toc",
      desctiption: `
        <div class="mb-3">
          Ngày nay, hiện tượng rụng tóc quá nhiều không chỉ là nỗi lo của những người lớn tuổi mà cả những bạn trẻ vẫn có thể gặp phải tình trạng này. Theo một số thông kê cho thấy, cứ 3 người trong độ tuổi 30 thì có 1 người bị rụng tóc. Và con số này ở độ tuổi 50 là 2/3. Trên da đầu lúc nào cũng có khoảng 90% tóc trong giai đoạn đang mọc và 10% tóc trong giai đoạn nghỉ. Bình thường tóc sẽ rụng từ 50-100 sợi. Nếu thấy rụng trên 100 sợi 1 ngày chứng tỏ bạn đã bị rụng tóc bệnh lý.
        </div>
        <div class="mb-3">
          Hiện nay, có rất nhiều nguyên nhân gây ra rụng tóc như do nội tiết, do di truyền, do miễn dịch, do bệnh lý da liễu, do stress, do chế độ dinh dưỡng,... Vì vậy, chúng ta cần kiểm soát được nguyên nhân kết hợp các biện pháp chăm sóc tóc hợp lý để cải thiện tình trạng.
        </div>
        <div class="mb-3">
          Một số phương pháp điều trị rụng tóc, được ứng dụng lâm sàng hiện nay giúp điều trị rụng tóc và kích thích mọc tóc trở lại như: tiêm mesotherapy, PRP, laser,... kết hợp thuốc thoa, gội, xịt dưỡng tóc và thuốc uống để đạt được hiệu quả tối ưu.
        </div>
      `,
      imagesList: ["rungtoc1"],
    },
  },
];

export const customerReviewList = [
  "dieutrimun1",
  "dieutrimun2",
  "dieutrimun3",
  "dieutricham",
  "tiemfiller",
  "tiemmeso",
  "trehoada1",
  "trehoada2",
  "triseoro1",
  "triseoro2",
  "dieutrinam1",
  "dieutrinam2",
];

export const youtubeVideoList = [
  "https://www.youtube.com/embed/U-CRdqDCAAU?si=b5FwrpfBcwHZQGoZ",
  "https://www.youtube.com/embed/k-fV_G-_QnE?si=T9PdX1aIcpM_YuHJ",
  "https://www.youtube.com/embed/NyOKpI8nt5s?si=5UBN4mqhPUrp4pN7",
  "https://www.youtube.com/embed/NkekZMJKPaA?si=lZDZCTinzF4fGAgL",
  "https://www.youtube.com/embed/RMWklHGGYyY?si=2qRAPWMcQyHG4-ad",
  "https://www.youtube.com/embed/6yaK8PHovqM?si=rOyTWjSGdsA7_tnF",
  "https://www.youtube.com/embed/cNW1Xxo88xY?si=nhVV6BV5xFZsdOSz",
];

export const seminarImageList = [
  "hoithao1.jpg",
  "hoithao2.png",
  "hoithao3.jpg",
  "hoithao4.jpg",
  "hoithao5.jpg",
  "hoithao6.jpg",
  "hoithao7.png",
  "hoithao8.png",
  "hoithao9.jpg",
];

export const clinicOfficeImagesList = [
  "pk4",
  "pk3",
  "pk2",
  "pk6",
  "pk5",
  "pk1",
];

export const knowledgeFilterTags = [
  {
    id: 1,
    label: "tất cả",
  },
  {
    id: 2,
    label: "chăm sóc da",
  },
  {
    id: 3,
    label: "làm đẹp",
  },
  {
    id: 4,
    label: "kiến thức skincare",
  },
  {
    id: 5,
    label: "bệnh lý da",
  },
];

export const knowledgeArticleList = [
  {
    id: 1,
    searchTag:
      "thức khuya tàn phá da bạn làm đẹp thuc khuya tan pha da ban lam dep",
    title: "Thức khuya tàn phá da bạn như thế nào?",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Nhiều người có thói quen thường xuyên thức khuya, đây là một thói quen không tốt cho sức khỏe ...",
    imageUrl: "/images/logo_kien_thuc/lamdep1.png",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
      <div class="mb-5">
        Nhiều người có thói quen thường xuyên thức khuya, đây là một thói quen không tốt cho sức khỏe. Tuy nhiên không phải ai cũng biết thức khuya tàn phá tới cơ thể và làn da của bạn như thế nào.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep1.png" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. Thói quen thức khuya</p>
      <div class="mb-5 pl-3">
        Sau một ngày làm việc mệt mỏi, thì ban đêm là thời gian mà cơ thể cần được nghỉ ngơi để phục hồi lại sức khỏe và cân bằng các yếu tố trong cơ thể, nhưng vì một nguyên nhân hoặc một thói quen nào đó mà chúng ta thường xuyên thức đêm và ngủ không đủ giấc. 
      </div>
      <p class="font-bold text-xl mb-3">2. Những tác hại của việc thức khuya</p>
      <p class="mb-3 font-semibold text-lg pl-3">2.1. Ảnh hưởng xấu tới thẩm mỹ</p>
      <div class="mb-5 pl-3">
        Ban đêm là lúc các tế bào da được tái tạo, mức độ tái tạo vào ban đêm nhanh hơn so với ban ngày. Việc thức khuya sẽ khiến cho hoạt động tái tạo và điều tiết các tế bào da bị rối loạn, ảnh hưởng đến chức năng của da. Điều này khiến cho da bị lão hóa sớm, da xỉn màu, xuất hiện nếp nhăn, khô da, xuất hiện mụn trứng cá...Hơn nữa hàng rào bảo vệ da dễ bị tổn thương bởi các yếu tố bên ngoài khiến da mất đi độ đàn hồi vốn có.
      </div>
      <p class="mb-3 font-semibold text-lg pl-3">2.2. Ảnh hưởng tới sức khỏe</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Ảnh hưởng nội tiết tố
        </li>
        <li class="list-disc">
          Gây suy giảm trí nhớ
        </li>
        <li class="list-disc">
          Ảnh hưởng hệ miễn dịch
        </li>
        <li class="list-disc">
          Giảm thị lực
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">3. Cần làm gì để duy trì để duy trì giấc ngủ ngon và sức khỏe làn da</p>
      <div class="mb-3 pl-3">
        Theo Dr. Trà Mi khuyến cáo, bạn nên xây dựng thói quen ngủ từ khoảng 7-9 tiếng đồng hồ mỗi ngày. Nếu bạn cảm thấy khó ngủ, hãy tham khảo những mẹo giúp ngủ ngon và sâu dưới đây:
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Tạo những thói quen tốt trước khi đi ngủ như hạn chế xem tivi, sử dụng điện thoại, thiền để thư giãn, giảm căng thẳng
        </li>
        <li class="list-disc">
          Rửa mặt sạch bằng sữa rửa mặt dịu nhẹ để loại bỏ dầu, bụi bẩn và lớp trang điểm trước khi đi ngủ
        </li>
        <li class="list-disc">
          Thoa kem dưỡng ẩm phù hợp để đảm bảo da được cung cấp đủ ẩm và các dưỡng chất cần thiết.
        </li>
        <li class="list-disc">
          Ngâm chân trong nước ấm hoặc uống 1 ly sữa ấm cũng sẽ giúp bạn dễ ngủ hơn.
        </li>
      </ul>
    `,
  },
  {
    id: 2,
    searchTag:
      "làm đẹp nổi mụn do nóng trong người lam dep noi mun do nong trong nguoi",
    title: "Nổi mụn do nóng trong người",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Nóng trong người là tình trạng gây khó chịu, mất ngủ và nổi mụn nhọt kéo dài ...",
    imageUrl: "/images/logo_kien_thuc/lamdep2.png",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
      <div class="mb-5">
        Nóng trong người là tình trạng gây khó chịu, mất ngủ và nổi mụn nhọt kéo dài. Tình trạng này có thể gây tích tụ độc tố, suy giảm sức đề kháng. Vậy bị nóng trong người nổi mụn nên có chế độ dinh dưỡng và chăm sóc da như thế nào để khắc phục tình trạng này? <br/>Cùng Dr. Trà Mi tìm giải pháp khắc phục nhé!
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep2.png" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. NHỮNG BIỂU HIỆN CỦA NÓNG TRONG NGƯỜI</p>
      <p class="mb-3 pl-3">
        Các triệu chứng như quầng thâm mắt, táo bón, chán ăn, khó tăng cân, nhiệt miệng, chảy máu cam, chảy máu chân răng,… Trong đó, nổi mụn cũng là một biểu hiện phổ biến của tình trạng này, cụ thể là nổi mẩn ngứa màu đỏ hoặc những nốt mụn nhọt đỏ và trắng,…thì cần đến ngay các cơ sở y tế để kiểm tra bởi đây có thể là triệu chứng của những bệnh lý.
      </p>
      <p class="font-bold text-xl mb-3">2. NGUYÊN NHÂN DẪN ĐẾN NÓNG TRONG NGƯỜI</p>
      <p class="mb-3 pl-3">Nóng trong người nổi mụn có thể do nhiều nguyên nhân khác nhau gây ra như:</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Sử dụng nhiều thực phẩm cay nóng,</span> nhiều dầu mỡ có thể khiến làn da đổ dầu nhiều hơn.
        </li>
        <li class="list-disc">
          <span class="font-bold">Uống ít nước: </span>Nước rất cần thiết trong việc hỗ trợ hoạt động và duy trì nhiệt độ của cơ thể. Mỗi ngày một người phải uống đủ lượng nước 
        </li>
        <li class="list-disc">
          <span class="font-bold">Khi bạn đối mặt với tình trạng stress, căng thẳng, lo âu kéo dài,</span> cơ thể sẽ tiết ra nhiều hormone Epinephrine và Norepinephrine làm tăng tuần hoàn máu, khiến cơ thể nóng lên gây mệt mỏi, nóng trong người
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">3. GIẢI PHÁP TỪ BÁC SĨ CHUYÊN KHOA DA LIỄU</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Trước tiên, để giảm tình trạng nóng trong người,</span> người bệnh cần thay đổi chế độ ăn uống hợp lý, bao gồm tăng cường ăn các loại rau củ thanh nhiệt giải độc, trái cây bổ sung vitamin và uống đủ 2 lít nước mỗi ngày để thanh lọc cơ thể. Thường xuyên tập thể dục, nghỉ ngơi đầy đủ và tránh ăn đồ cay, uống các chất kích thích như bia rượu nước tăng lực
        </li>
        <li class="list-disc">
          <span class="font-bold">Để tránh tình trạng nội nhiệt nghiêm trọng hơn,</span> người cần giảm căng thẳng, áp lực và ngủ đủ giấc, không thức khuya.
        </li>
        <li class="list-disc">
          <span class="font-bold">Nhìn chung bệnh nóng trong người </span>có thể gây ra nhiều hậu quả ảnh hưởng đến sức khỏe. Do đó, nếu có các dấu hiệu nóng trong, bạn nên thay đổi lối sống, có chế độ dinh dưỡng khoa học 
        </li>
      </ul>
    `,
  },
  {
    id: 3,
    searchTag: "phân biệt các loại mụn làm đẹp phan biet cac loai mun lam dep",
    title: "Phân biệt các loại mụn",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Mặc dù mụn trứng cá không gây ảnh hưởng nhiều tới sức khỏe nhưng lại gây mất thẩm mỹ ...",
    imageUrl: "/images/logo_kien_thuc/lamdep3.png",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
      <div class="mb-5">
        Mặc dù mụn trứng cá không gây ảnh hưởng nhiều tới sức khỏe nhưng lại gây mất thẩm mỹ đối với cả nữ giới và nam giới. Mỗi loại mụn khác nhau sẽ có đặc điểm nhận biết và cách điều trị khác nhau. Vì vậy, Dr. Trà Mi sẽ giúp bạn cần biết cách phân biệt các loại mụn thường gặp để có lựa chọn điều trị phù hợp nhất.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep3.png" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1.PHÂN BIỆT CÁC LOẠI MỤN KHÔNG VIÊM</p>
      <p class="font-bold text-lg mb-3 pl-3">1.1. Mụn đầu đen</p>
      <p class="mb-3 pl-3">
        Mụn đầu đen là loại mụn trứng cá không viêm, chúng có dạng nốt màu đen xuất hiện trên bề mặt da, nhân mụn hở. khi nhân mụn nhô lên sẽ tiếp xúc với oxy bên ngoài, trở thành màu đen. Mụn đầu đen hình thành do bã nhờn và tế bào chết tích tụ bên trong lỗ chân lông sau đó đẩy nhân mụn ra ngoài
      </p>
      <p class="font-bold text-lg mb-3 pl-3">1.2. Mụn đầu trắng</p>
      <p class="mb-3 pl-3">
        Mụn trắng hay còn được gọi là mụn cám, là một trong những loại mụn trứng cá thường gặp. Loại mụn này nằm ẩn dưới da, lỗ chân lông khép kín. Mụn đầu trắng xuất hiện phổ biến ở các vùng trên da mặt như má, mũi, trán,...
        Nguyên nhân: do sự tích tụ của bã nhờn, tế bào chết, bụi bẩn, vi khuẩn, làm bít tắc lỗ chân lông. 
      </p>
      <p class="font-bold text-xl mb-3">2.PHÂN BIỆT CÁC LOẠI MỤN VIÊM</p>
      <p class="font-bold text-lg mb-3 pl-3">2.1. Mụn mủ</p>
      <p class="mb-3 pl-3">
        Mụn mủ là một loại mụn viêm và có nguy cơ để lại sẹo mụn khá cao. Mủ trong mụn là xác chết của vi khuẩn và các bạch cầu đa nhân trung tính sau khi các tế bào miễn dịch của cơ thể tiêu diệt vi khuẩn.<br/>
        Dấu hiệu nhận biết: Nốt mụn màu vàng, có chứa mủ; viền mụn màu đỏ gây đau nhẹ.Bạn không nên chọc thủng hoặc bóp vỡ nốt mụn vì có thể gây sẹo, thâm hoặc khiến tình trạng viêm trở nên nặng hơn.
      </p>
      <p class="font-bold text-lg mb-3 pl-3">2.2. Mụn bọc</p>
      <p class="mb-3 pl-3">
        Nốt, nang hay cục có thể không nhô cao lên khỏi bề mặt da nhưng khi sờ vào là một khối rất lớn bên dưới có thể tạo thành áp xe. Mụn này tuyệt đối không sờ nặn.
      </p>
      <p class="font-bold text-lg mb-3">LỜI KHUYÊN TỪ BÁC SĨ MÀ BẠN NÊN ÁP DỤNG</p>
      <p class="mb-3 pl-3">
        Trên đây là thông tin chi tiết về các loại mụn thường gặp, Các loại mụn khác nhau sẽ có biện pháp can thiệp điều trị tương ứng. Để đối phó với mụn, việc hiểu rõ về nguyên nhân, các loại mụn và cách điều trị là rất quan trọng. Hy vọng hữu ích với mọi người.
      </p>
    `,
  },
  {
    id: 4,
    searchTag: "làm đẹp bệnh lý da mùa hè lam dep benh ly da mua he",
    title: "Ba bệnh lý da mùa hè",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Mùa hè đang đến gần và mọi người cần quan tâm đến ba bệnh da sau đây ...",
    imageUrl: "/images/logo_kien_thuc/lamdep4.jpg",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
      <div class="mb-5 text-center">
        Mùa hè đang đến gần và mọi người cần quan tâm đến ba bệnh da sau đây:
      </div>
      <p class="font-bold text-xl mb-3">1. Chốc</p>
      <p class="text-lg mb-3 pl-3">
        Chốc là nhiễm trùng da phổ biến, gây ra bởi tụ cầu khuẩn vàng (Staphylococcus aureus) và liên cầu khuẩn tán huyết b nhóm A (Streptococcus pyogenes).  Bệnh phổ biến ở trẻ dưới 6 tuổi, đỉnh điểm cuối mùa hè; gặp nhiều ở vùng đông dân cư, nơi điều kiện vệ sinh kém và trên người có sẵn bệnh da. Bệnh lây qua tiếp xúc trực tiếp hoặc đồ vật nhiễm khuẩn. Nếu điều trị và chăm sóc thích hợp, chốc thường tự giới hạn trong vài ngày đến vài tuần. Bệnh ít gây biến chứng, trừ người có cơ địa đặc biệt.<br/><b>Hai dạng chốc cần phân biệt:</b>
      </p>
      <p class="font-bold text-lg pl-3 mb-3">1.1 Chốc không bóng nước</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep6.jpg" alt="knowledge-detail" />
      </div>
      <p class="text-lg mb-3 pl-6">
        Vi khuẩn thường trú ở mũi di chuyển ra vùng da lành, sau đó đến vùng da bệnh - thường là mặt (đặc biệt là quanh mũi) và tứ chi sau chấn thương. Biểu hiện là những mụn nước, mụn mủ nổi trên nền da đỏ, xuất hiện thoáng qua để lại mảng đóng mài vàng mật ong, có thể có viền đỏ xung quanh. Sau đó, mài tróc dần, ban đỏ mờ dần, không để lại sẹo. Bệnh không có triệu chứng toàn thân. Chốc lành tự nhiên sau 2 – 3 tuần. Cho trẻ đi học sau khi bắt đầu uống kháng sinh 24 giờ. 
      </p>
      <p class="font-bold text-lg pl-3 mb-3">1.2 Chốc bóng nước</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep7.jpg" alt="knowledge-detail" />
      </div>
      <p class="text-lg mb-3 pl-6">
        Bệnh gặp nhiều ở trẻ sơ sinh và nhũ nhi. Sang thương da là mụn nước/bóng nước chùng, thường xuất hiện trên vùng da lành, chứa dịch vàng trong hay chuyển sang vàng sậm và đục, giới hạn rõ, không có ban đỏ xung quanh. Bóng nước dễ vỡ trong 2 – 3 ngày, tạo mài mỏng màu vàng nâu, rìa có viền vảy tróc, trung tâm lành. Nếu không điều trị, vi khuẩn có thể xâm nhập sâu gây viêm mô tế bào, viêm mạch bạch huyết, du khuẩn huyết, dẫn đến viêm xương - tủy xương, viêm khớp nhiễm trùng, viêm phổi và nhiễm trùng huyết
      </p>
      <p class="font-bold text-lg pl-3 mb-3">1.3 Điều Trị</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Rửa vết thương, đắp ướt để loại bỏ lớp mài.
        </li>
        <li class="list-disc">
          Che phủ vùng da bệnh.
        </li>
        <li class="list-disc">
          Kháng sinh thoa là ưu tiên hàng đầu. Có thể sử dụng kem hoặc mỡ mupirocin 2%, retapamulin 1%,acid fusidic 2%.
        </li>
        <li class="list-disc">
          Kháng sinh uống dùng trong các trường hợp trên 5 tổn thương, tổn thương sâu xuống lớp mỡ hoặc cơ, sốt, viêm hạch, nhiễm trùng khoang miệng, nhiễm trùng vùng da đầu. Khử khuẩn ở vùng mũi và da của bệnh nhân bị chốc do tụ cầu tái phát. Đối với vùng mũi, thoa mỡ mupirocin 2% ngày 2 lần, trong 5 – 10 ngày. Với da thì sử dụng mupirocin bôi tại chỗ, tắm giặt với các hoạt chất chlorhexidin, triclosan và sodium hypochlorid pha loãng.
        </li>
      </ul>
      <p class="font-bold text-lg pl-3 mb-3">1.4 Phòng bệnh</p>
      <p class="font-bold text-lg pl-6 mb-3">a. Tránh tái phát</p>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          Điều trị vùng thường mang vi trùng: Thoa kháng sinh vào lỗ mũi.
        </li>
        <li class="list-disc">
          Sử dụng xà bông diệt khuẩn để tắm rửa hoặc ngâm mình.
        </li>
        <li class="list-disc">
          Điều trị nguồn lây: Người đang bị chốc hoặc người lành mang khuẩn
        </li>
      </ul>
      <p class="font-bold text-lg pl-6 mb-3">b. Tránh lây nhiễm</p>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          Bệnh nhân hay bị tái phát nên được tầm soát vị trí mang khuẩn. Lỗ mũi là vị trí thường gặp nhất, tiếp theo là vùng chậu, nách, kẽ ngón chân. Kem hoặc mỡ Mupirocin thoa vùng lỗ mũi 2 lần/ngày trong 5 ngày giúp giảm đáng kể lượng vi khuẩn vùng mũi và bàn tay trong vòng một năm.
        </li>
        <li class="list-disc">
          Người bệnh tránh tiếp xúc trực tiếp với người khác.
        </li>
        <li class="list-disc">
          Trẻ em nên nghỉ học để cách ly cho tới khi sang thương đóng mài khô.
        </li>
        <li class="list-disc">
          Khăn và quần áo dùng riêng. Thay quần áo thường xuyên.  
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">2. Viêm nang lông</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep8.jpg" alt="knowledge-detail" />
      </div>
      <p class="text-lg mb-3 pl-3">
        Viêm nang lông là tình trạng viêm hoặc nhiễm trùng, ảnh hưởng đến một hoặc nhiều nang lông. Bệnh có thể xảy ra ở bất cứ vùng da nào (những nơi có nang lông), kể cả da đầu. Viêm nang lông thường xuất hiện dưới dạng vết sưng nhỏ, giống mụn trứngcá hoặc phát ban. Yếu tố thúc đẩy gồm bít tắc, ẩm ướt, cạo/nhổ hay wax lông, thoa corticoid, thời tiết nóng ẩm, viêm da cơ địa hay đái tháo đường 
      </p>
      <p class="font-bold text-lg pl-3 mb-3">2.1 Nguyên nhân</p>
      <p class="font-bold text-lg pl-6 mb-3">a. Vi khuẩn</p>
      <p class="text-lg pl-6 mb-3">Tụ cầu vàng (Staphylococcus aureus), trực khuẩn mủ xanh (Pseudomonas aeruginosa) và vi khuẩn gram âm là nguyên nhân gây bệnh hàng đầu. Chúng có thể tồn tại trên da mà không gây nhiễm khuẩn. Nhưng nếu da có vết xước, chúng sẽ xâm nhập vào và gây viêm nang lông. </p>
      <p class="font-bold text-lg pl-6 mb-3">b. Nấm</p>
      <p class="text-lg pl-6 mb-3">
        Viêm nang lông khu vực trên lưng, ngực, vai thường do nấm men Trichophyton rubrum, Malassezia folliculitis (Pityrosporum folliculitis) hoặc Candida gây ra. 
      </p>
      <p class="font-bold text-lg pl-6 mb-3">c. Nguyên nhân khác</p>
      <p class="text-lg pl-6 mb-3">
        Tình trạng lông mọc ngược hay ký sinh trùng Demodex folliculorum cũng gây viêm nang lông. Các yếu tố này thường gây viêm nang lông vùng cổ và mặt. Một số thuốc có thể gây ra viêm nang lông như corticoid (thường gặp đường toàn thân), vitamin (B1, B6, B12), kháng sinh penicillin và macrolide, kháng lao (INH, Rifambin).
      </p>
      <p class="font-bold text-lg pl-3 mb-3">2.2 Triệu chứng</p>
      <p class="font-bold text-lg pl-6 mb-3">a. Viêm nang lông nông</p>
      <p class="text-lg pl-6 mb-3">
        Là những sẩn mụn mủ ở nang lông, kích thước1 - 4mm, dễ vỡ, hình vòm hay sẩn đóng mài trên nền hồng ban, thường kết cụm, lành không để lại sẹo. Bệnh nhân có thể ngứa hay đau. Thường gặp ở vùng da đầu, cổ, thân trên, mông, chân, nách, bẹn 
      </p>
      <p class="font-bold text-lg pl-6 mb-3">b. Viêm nang lông sâu</p>
      <p class="text-lg pl-6 mb-3">
        Là tình trạng viêm toàn bộ nang lông hay phần sâu hơn của nang lông. Biểu hiện là sẩn cục sưng, đỏ và mụn mủ lớn hơn so với viêm nang lông nông. Bệnh thường gặp ở vùng có râu (viêm nang râu). Viêm nang râu là tình trạng viêm nang lông sâu với viêm xung quanh nang lông xảy ra ở vùng râu cằm và môi trên. Biểu hiện lâm sàng là những sẩn hồng ban với mụn mủ ở trung tâm. Có thể kèm ngứa hay đau nhẹ.
      </p>
      <p class="font-bold text-lg pl-3 mb-3">2.3 Điều trị</p>
      <p class="text-lg pl-6 mb-3">
        Đối với tổn thương khu trú, dùng kháng sinh tại chỗ như mupirocin 2% hay clindamycin trong 7 – 10 ngày. Nếu tổn thương lan rộng hay tái phát, dùng kháng sinh toàn thân.
        <br/>Điều trị hỗ trợ với kháng histamine, các vitamin nhóm C và B cũng có thể được sử dụng.  
      </p>
      <p class="font-bold text-xl mb-3">3. NHỌT</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep5.jpg" alt="knowledge-detail" />
      </div>
      <p class="text-lg mb-3 pl-3">
        Nhọt là tình trạng nhiễm trùng toàn bộ nang lông và quanh nang lông, thường bắt đầu từ 1 viêm nang lông nông đi trước và có thể tiến triển thành áp xe. Bệnh đái tháo đường, dùng thuốc ức chế miễn dịch, suy giảm miễn dịch là những yếu tố thuận lợi để phát triển bệnh 
      </p>
      <p class="font-bold text-lg pl-3 mb-3">3.1 Lâm sàng</p>
      <p class="text-lg pl-6 mb-3">
        Nhọt thường xuất hiện ở vùng có lông, nhất là vùng cọ xát, băng kín, đổ mồ hôi nhiều như cổ, mặt, nách và mông. Khởi đầu là 1 hay nhiều nốt, sưng, nóng đỏ đau tại nang lông, tiến triển to dần gây đau, nung mủ sau vài ngày (áp xe hóa). Sang thương sau đó vỡ mủ, đóng mài. Triệu chứng đau giảm, phù nề và sưng đỏ giảm dần sau vài ngày đến vài tuần.
        Nhiều nhọt tiến triển họp lại thành nhọt cụm, thường gặp ở vùng gáy, lưng, đùi. Biểu hiện bằng mảng đỏ, cứng, bề mặt có nhiều mụn mủ có khuynh hướng lan rộng ra xung quanh nang lông. Bệnh nhân thường sốt, mệt mỏi 
      </p>
      <p class="font-bold text-lg pl-3 mb-3">3.2 Điều trị</p>
      <p class="text-lg pl-6 mb-3">
        Điều trị hỗ trợ bằng chườm ấm trong giai đoạn nung mủ. Nhọt - nhọt cụm kèm viêm mô tế bào xung quanh hoặc có triệu chứng toàn thân nên được điều trị với kháng sinh toàn thân. Nếu nhiễm trùng nặng hay nhiễm trùng ở những vùng nguy hiểm, nên dùng kháng sinh liều cao và đường chích.
      </p>
    `,
  },
  {
    id: 5,
    searchTag:
      "kiến thức skincare kem chống nắng kien thuc skincare kem chong nang",
    title: "Bạn đã biết sử dụng kem chống nắng đúng cách hay chưa?",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "Kiến thức skincare",
    subTitle:
      "Tác hại từ ánh nắng mặt trời là một trong những nguyên nhân gây nên tình trạng da đen sạm, nám và lão hóa da hàng đầu ...",
    imageUrl: "/images/logo_kien_thuc/chongnang1.jpg",
    tagId: 4,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Kiến thức skincare
        </span>
      </div>
      <div class="mb-5">
        <span class='text-red-600'>Tác hại từ ánh nắng mặt trời là một trong những nguyên nhân gây nên tình trạng da đen sạm, nám và lão hóa da hàng đầu. Do đó, để bảo vệ làn da và sức khỏe tốt trước tác hại này, thì việc thoa kem chống nắng là rất cần thiết. </span>
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/chongnang1.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5">
        <span class='text-red-600'>Tác hại từ ánh nắng mặt trời là một trong những nguyên nhân gây nên tình trạng da đen sạm, nám và lão hóa da hàng đầu. Do đó, để bảo vệ làn da và sức khỏe tốt trước tác hại này, thì việc thoa kem chống nắng là rất cần thiết. </span>Tuy nhiên, có phải cứ thoa kem chống nắng là làn da của bạn đã được bảo vệ tốt nhất, nếu nghĩ như vậy thì bạn đã lầm rồi đấy! Cùng Dr. Trà Mi tìm hiểu về cách sử dụng kem chống nắng đúng cách bằng việc thoa đủ liều, đủ lượng để đạt được hiệu quả bảo vệ da tối ưu.
      </div>
      <p class="font-bold text-xl mb-3">1. Tầm quan trọng của việc bôi kem chống nắng.</p>
      <div class="mb-5 pl-3">
        Trong ánh nắng mặt trời có hai loại tia cực tím làm tổn thương da, đó là UVA và UVB. Tia UVB thay đổi cường độ theo từng thời điểm trong ngày, cao nhất là khoảng 10 -14 giờ. Những tháng hè là thời gian UVB gây tổn thương da nhiều nhất, UVB tác động trực tiếp lên da gây ra hầu hết các tổn thương tức thì như rám nắng, bỏng nắng, biến đổi màu sắc da. Cường độ UVA giữ ổn định trong ngày, không có thời điểm đạt mức độ tối da. UVA không bị lọc bởi các loại kính thông thường, do vậy tia có thể xuyên qua của kính cửa sổ và xe hơi. Tia UVA còn có khả năng xuyên sâu vào da, tác động lâu dài gây lão hóa da do ánh sáng và sinh ung thư. 
      </div>
      <div class="mb-5 pl-3">
        Tiếp xúc quá nhiều với ánh nắng mặt trời có thể làm tổn thương làn da của bạn. Do đó việc sử dụng kem chống nắng là điều cần thiết cho tất cả mọi người thuộc mọi loại da, lứa tuổi và giới tính. Bôi kem chống nắng đúng cách sẽ giúp bảo vệ làn da của bạn chống lại các tác hại do tia UV gây ra.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/chongnang3.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">9 sai lầm phổ biến về kem chống nắng chúng ta thường mắc phải?! </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 1: Thời điểm ra nắng không quan trọng?</p>
      <p class="mb-3 pl-3">
        Đối với các nước ở gần xích đạo như Việt Nam, các chuyên gia da liễu khuyên bạn nên bắt đầu thoa kem chống nắng từ 9h- 17h chiều. Đặc biệt, bạn nên hạn chế ra nắng từ 11-14h hàng ngày vì đây là thời điểm tia UV cao nhất. 
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 2: Tia UV của ánh nắng mặt trời hoạt động yếu khi trời nhiều mây, mưa hoặc trong mùa đông.</p>
      <p class="mb-3 pl-3">
        Sự thật. Nếu mặt trời mọc và bạn đang ở ngoài trời, làn da của bạn sẽ tiếp xúc với tia UV. Ngay cả trong những ngày nhiều mây, có tới 90% tia nắng vẫn có thể xuyên qua làn da của bạn. Nước, cát và tuyết có thể phản chiếu ánh nắng mặt trời, khiến làn da của bạn tiếp xúc với tia UV gián tiếp. Bất kể thời tiết hay mùa nào, việc thoa kem chống nắng mỗi ngày là điều bắt buộc.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 3: Da ngăm không cần dưỡng trắng da thì không cần tránh nắng.</p>
      <p class="mb-3 pl-3">
        Sự thật là ngay cả việc chỉ nhận được một chút "ánh sáng" cũng có thể làm hỏng DNA của làn da bạn, đồng thời làm tăng quá trình lão hóa và nguy cơ ung thư da. Do đó, dù không có ý định dưỡng trắng da thì bạn vẫn nên áp dụng các biện pháp tránh nắng khi tiếp xúc trực tiếp với ánh nắng.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 4: Tôi không cần kem chống nắng vì tôi có làn da sẫm màu.</p>
      <p class="mb-3 pl-3">
        Sự thật. Da sẫm màu không bị cháy nắng nhanh, mặc dù vẫn dễ bị tổn thương do ánh nắng mặt trời, bao gồm các vết thâm, nếp nhăn và cháy nắng. Bất kể màu da của bạn là gì, đừng bỏ qua kem chống nắng.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 5: Sử dụng sản phẩm make-up có thành phần chống nắng thì không cần thoa kem chống nắng?!</p>
      <p class="mb-3 pl-3">
        Sự thật. Kem nền có hệ số chống nắng, hoặc SPF, ít nhất là 30 sẽ cung cấp khả năng chống nắng nhất định, nhưng khả năng bảo vệ kém hơn so với kem chống nắng. Ngoài ra, hầu hết mọi người thường chỉ trang điểm cho khuôn mặt chứ không phải cổ, sau cổ hoặc các khu vực nhạy cảm với ánh nắng khác. Hãy nhớ thoa một lớp kem chống nắng dưới lớp kem nền cũng như bất kỳ khu vực nào sẽ tiếp xúc với ánh nắng mặt trời.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 6: Cơ thể bạn sẽ bị thiếu hụt Vitamin D nếu bôi kem chống nắng.</p>
      <p class="mb-3 pl-3">
        Sự thật. Ngay cả kem chống nắng được bôi đúng cách cũng cho phép 2% đến 3% tia cực tím B của mặt trời chiếu tới da bạn và cơ thể bạn chỉ cần một lượng nhỏ để sản xuất vitamin D. Thay vì đối mặt với nguy cơ bị ung thư da, tốt hơn hết bạn nên cung cấp và bổ sung nhu cầu vitamin D của mình thông qua chế độ ăn uống.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 7: Tất cả các loại quần áo đều bảo vệ làn da bạn khỏi ánh nắng mặt trời.</p>
      <p class="mb-3 pl-3">
        Sự thật. Các loại vải tối màu, nặng hơn với kiểu dệt chặt hơn mang lại khả năng bảo vệ tốt hơn so với quần áo nhẹ và sáng màu. Bạn cũng có thể nhận được sự bảo vệ công nghệ cao và khả năng thoáng khí từ nhiều loại vải mới. Hãy tìm chỉ số bảo vệ khỏi tia cực tím hoặc UPF trên quần áo. Chỉ số UPF từ 30 đến 49 mang lại khả năng bảo vệ tốt, trong khi UPF từ 50 trở lên được đánh giá là tuyệt vời. Càng che phủ nhiều da thì càng tốt cho da. Đừng quên trang bị thêm một chiếc mũ rộng vành và kính râm bảo vệ da dưới tia UV.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm 8: Chỉ số SPF càng cao thì khả năng bảo vệ da càng tốt.</p>
      <p class="mb-3 pl-3">
        Sự thật. Không có loại kem chống nắng nào có thể chặn 100% ánh nắng mặt trời. Kem chống nắng có chỉ số SPF 100 chỉ chặn được nhiều hơn 1% đến 2% tia nắng so với kem có chỉ số SPF 30 vốn đã chặn được 97% tia nắng. Ngoài ra, SPF không ảnh hưởng đến thời gian bạn sẽ được bảo vệ. Khả năng bảo vệ thường kéo dài hai giờ hoặc ít hơn đối với tất cả các loại kem chống nắng. Hãy tìm loại kem chống nắng phổ rộng - ngăn chặn tia UVA và UVB - kem chống nắng chịu nước với chỉ số SPF ít nhất là 30. Thoa lại thường xuyên, đặc biệt là sau khi ở dưới nước hoặc đổ mồ hôi.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sai lầm số 9: Tất cả các loại kem chống nắng đều hoạt động và có công dụng chống nắng như nhau.</p>
      <p class="mb-3 pl-3">
        Có hai loại kem chống nắng chính: vật lý và hóa học. Cả hai lựa chọn đều có ưu và nhược điểm.
      </p>
      <p class="mb-3 pl-3">
        Kem chống nắng vật lý, còn được gọi là kem chống nắng khoáng chất, hoạt động giống như một tấm chắn và nằm trên bề mặt da để làm chệch hướng tia nắng. Chúng chứa các thành phần hoạt chất oxit kẽm hoặc titan dioxide. Kem chống nắng khoáng chất được coi là an toàn hơn cho bạn và môi trường. Chúng phù hợp cho những người có làn da nhạy cảm, trẻ em và những người có vấn đề về sắc tố, chẳng hạn như nám. Trong khi các loại kem chống nắng vật lý truyền thống để lại vệt trắng trên da của bạn thì hiện nay đã có sẵn các loại kem chống nắng khoáng chất có màu và ít nhìn thấy hơn.
      </p>
      <p class="mb-3 pl-3">
        Kem chống nắng hóa học hoạt động giống như một miếng bọt biển. Chúng hấp thụ tia nắng mặt trời vào da và chuyển đổi tia UV thành nhiệt, sau đó tiêu tan. Ở Hoa Kỳ, các loại kem chống nắng này có chứa một hoặc nhiều hoạt chất sau: oxybenzone, avobenzone, octisalate, octocrylene, homosalate và octinoxate. Kem chống nắng hóa học dễ thoa hơn và không để lại vệt trắng trên da. Tuy nhiên, chúng có thể gây kích ứng mắt và gây dị ứng ở một số người.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Lựa chọn kem chống nắng như thế nào?</p>
      <p class="mb-3 pl-3">
        Nên chọn loại có chỉ số SPF từ 30 trở lên. SPF thể hiện khả năng ngăn tia UVB và phòng ngừa bỏng nắng so với da không được bảo vệ.
      </p>
      <p class="mb-3 pl-3">
        Chọn loại kem chống nắng phổ rộng, nghĩa là bảo vệ da khỏi tác hại của cả tia UVA và UVB. 
      </p>
      <p class="mb-3 pl-3">
        Chọn loại kháng nước vì sẽ giữ tác dụng được lâu kể cả khi ra mồ hôi
      </p>
      <p class="mb-3 pl-3">
        Chọn loại kem chống nắng phù hợp với loại da của mình. Nếu không biết chọn loại nào, bạn nên tham khảo ý kiến của bác sĩ chuyên khoa da liễu.
      </p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <span class="font-bold">Dạng kem: </span>thích hợp cho da thường và da khô
        </li>
        <li class="list-disc">
          <span class="font-bold">Dạng gel: </span>thích hợp cho da thường và da nhờn
        </li>
        <li class="list-disc">
          <span class="font-bold">Dạng xịt (spray): </span>sử dụng trên diện rộng
        </li>
        <li class="list-disc">
          <span class="font-bold">Dạng thỏi: </span>bảo vệ vùng môi
        </li>
        <li class="list-disc">
          <span class="font-bold">Dạng bánh: </span>phấn nền trong trang điểm
        </li>
      </ul>
      <p class="mb-3 pl-3">
        Như nhiều nghiên cứu về việc sử dụng kem chống nắng đã phát hiện ra, bất kể mọi người đang sử dụng loại SPF nào, họ thường xuyên bôi ít kem chống nắng hơn mức cần thiết (dù là kem dưỡng da, xịt hay dạng dính) để bảo vệ tối ưu và cũng không bôi lại đủ thường xuyên.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Sử dụng kem chống nắng như thế nào là đúng cách?</p>
      <p class="mb-3 pl-3">
        Nên sử dụng kem chống nắng mọi lúc bạn ra ngoài tiếp xúc với ánh nắng mặt trời trong hơn 20 phút, không chỉ những ngày nắng nóng mà còn cả những ngày có mây. 
      </p>
      <p class="mb-3 pl-3">
        Bôi kem chống nắng trước khi ra ngoài nắng khoảng 15-20 phút để hấp thu kem chống nắng và cho hiệu quả bảo vệ vì kem cần thời gian để kem ngấm vào để phát huy hiệu quả cao nhất. Quy tắc này được áp dụng bất kể bạn sử dụng loại kem chống nắng nào, dù là loại kem chống nắng hóa học, vật lý hay công thức kết hợp.
      </p>
      <p class="mb-3 pl-3">
        Sử dụng đủ lượng kem chống nắng, tránh bỏ sót những vùng cơ thể tiếp xúc ánh nắng.
      </p>
      <p class="mb-3 pl-3">
        Bôi kem trên những vùng da không được che chắn như cổ, mặt, tai, đầu ngón tay, chân. Những vùng cơ thể khó bôi như lưng, hãy nhờ người thân giúp bôi. Để bảo bệ môi, cần loại kem có SPF từ 15. 
      </p>
      <p class="mb-3 pl-3">
        Bôi lại kem chống nắng mỗi 2 giờ để duy trì hiệu quả bảo vệ, hoặc bôi lại ngay sau khi bơi, hay đổ mồ hôi nhiều ngay cả khi sử dụng loại kem chống nắng kháng nước. 
      </p>
      <p class="mb-3 pl-3">
        Kiểm tra hạn sử dụng của kem chống nắng. Thường là khoảng 3 năm. Tuy nhiên, nhiệt độ quá cao có thể làm ngắn lại hạn sử dụng của kem.
      </p>
      <p class="mb-3 pl-3 text-red-600">
        Có thể kết hợp viên uống chống nắng với kem chống nắng để cho hiệu quả tối ưu.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Nên thoa lượng kem chống nắng bao nhiêu là đủ?</p>
      <p class="mb-3 pl-3">
        Nhiều người cho rằng, sử dụng lượng kem chống nắng càng nhiều thì hiệu quả chống nắng càng tốt. Thế nhưng, cách này hoàn toàn không đúng. Bôi quá nhiều kem chống nắng sẽ tạo nên một lớp kem dày gây bí da và bít tắc lỗ chân lông. Đây cũng là một trong những nguyên nhân gây mụn trên da.
      </p>
      <p class="mb-3 pl-3">
        Ngược lại, bôi kem chống nắng quá ít cũng không thể phát huy được hiệu quả chống nắng. Lớp màng bao phủ quá mỏng, không đủ để chống lại tác động của tia UV và tác nhân gây hại khác. Theo thời gian, da sẽ bị sạm đen, xuất hiện nhiều nếp nhăn, đẩy nhanh quá trình lão hóa da.
      </p>
      <p class="mb-3 pl-3">
        Như vậy, bôi quá nhiều hay quá ít kem chống nắng đều không tốt, thậm chí còn gây hại cho da. Để bảo vệ da tối ưu, bạn cần bôi kem chống nắng đủ liều lượng, đảm bảo lượng kem đủ để che phủ toàn bộ khuôn mặt cũng như cơ thể.
      </p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/chongnang2.jpg" alt="knowledge-detail" />
      </div>
      <p class="mb-3 pl-3">
        Với kem chống nắng dạng bôi, bác sĩ da liễu khuyến nghị nên sử dụng khoảng 2mg/1cm2 diện tích da. Vì vậy, thông thường khi bôi kem chống nắng toàn bộ khuôn mặt là dùng từ 1-2 gram, còn toàn bộ cơ thể là khoảng 25-30 gram. Một cách đơn giản hơn giúp ước lượng được lượng kem chống nắng đủ bằng cách sử dụng thìa cà phê, 1-2 gram kem dùng cho bôi mặt sẽ rơi vào khoảng 1/3 tới 1/4 thìa. Để sử dụng lượng kem chống nắng toàn thân 25-30 gram sẽ bằng khoảng 1 chén rượu nhỏ.
      </p>
      <p class="mb-3 pl-3">
        Còn 1 cách khác để đong liều lượng kem chống nắng bôi toàn thân là khi bóp kem chống nắng, trải đều 3 đốt tay của ngón tay trỏ.
      </p>
      <p class="mb-3 pl-3">
        Với kem chống nắng dạng xịt, bôi kem chống nắng bao nhiêu là đủ? Bạn cần khoảng 4 lần xịt để bảo vệ da hiệu quả trước ánh nắng mặt trời, 4 lần xịt sẽ tạo thành 4 lớp kem trải đều trên trên da, bạn cần dùng tay vỗ nhẹ để sản phẩm thẩm thấu sâu vào da và phát huy tối đa hiệu quả chống nắng.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Cách thoa kem chống nắng đúng cách?</p>
      <p class="mb-3 pl-3">
        Dưỡng ẩm trước khi chống nắng: điều này là cần thiết khi bạn sử dụng kem chống nắng không có chứa thành phần dưỡng ẩm. Tuy nhiên, hiện nay trên thị trường xuất hiện rất nhiều sản phẩm hội tụ đủ 2 yếu tố: chống tia UVA và UVB và dưỡng ẩm. Bởi vậy, bạn có thể lựa chọn chúng để tiết kiệm thời gian trong vấn đề chăm sóc da hàng ngày. Việc sử dụng kem dưỡng chống nắng còn giúp làn da không cảm thấy bí bách, khó chịu khi thoa quá nhiều lớp sản phẩm.
      </p>
      <p class="mb-3 pl-3">
        Cách tốt nhất để bôi kem chống nắng là chấm thành nhiều điểm nhỏ lên mặt. Bôi kem chống nắng theo cách này giúp da dễ dàng hấp thụ kem cũng như giúp che phủ đều hơn.
      </p>
      <p class="mb-3 pl-3">
        Nhẹ nhàng xoa kem chống nắng bằng chuyển động tròn nhỏ bằng tay, có thể kết hợp với vỗ nhẹ và tán đều khắp mặt. Dùng cách này kem chống nắng sẽ tạo thành lớp nền bảo vệ da hiệu quả và không bị để lại vệt trắng trên da.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">Kết Luận</p>
      <p class="mb-3 pl-3">
        Chống nắng cho da là bước quan trọng và cần thiết trong chu trình chăm sóc da mà bạn nhất định không được bỏ qua. Bôi kem chống nắng đúng cách sẽ giúp làn da của bạn được bảo vệ kỹ lưỡng và tránh được tia UV có hại trong ánh sáng mặt trời. Nếu bạn cảm thấy làn da của mình bị tổn thương do ánh nắng mặt trời, bác sĩ da liễu có thể kiểm tra làn da của bạn và đưa ra khuyến nghị cho bạn. Không ai hiểu rõ làn da của bạn hơn bác sĩ da liễu!
      </p>
    `,
  },
  {
    id: 6,
    searchTag: "bệnh lý da rụng tóc benh ly da rung toc",
    title: "Rụng tóc & những điều bạn cần biết",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Theo một số thông kê cho thấy, cứ 3 người trong độ tuổi 30 thì có 1 người bị rụng tóc, và con số này ở độ tuổi 50 là cứ 3 người thì 2 người bị rụng tóc ...",
    imageUrl: "/images/logo_kien_thuc/rungtoc1.jpg",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-3">
        Xã hội càng phát triển, cùng với những căng thẳng trong cuộc sống thì vấn đề về rụng tóc vẫn là điều khiến chúng ta lo lắng. Theo một số thông kê cho thấy, cứ 3 người trong độ tuổi 30 thì có 1 người bị rụng tóc, và con số này ở độ tuổi 50 là cứ 3 người thì 2 người bị rụng tóc.
      </div>
      <div class="mb-3">
        Xã hội càng phát triển, cùng với những căng thẳng trong cuộc sống thì vấn đề về rụng tóc vẫn là điều khiến chúng ta lo lắng. Theo một số thông kê cho thấy, cứ 3 người trong độ tuổi 30 thì có 1 người bị rụng tóc. và con số này ở độ tuổi 50 là cứ 3 người thì 2 người bị rụng tóc. Hiện nay, có rất nhiều nguyên nhân gây ra rụng tóc như do nội tiết, do di truyền, do miễn dịch, do bệnh lý da liễu, do stress, do chế độ dinh dưỡng,... Vì vậy, chúng ta cần kiểm soát được nguyên nhân kết hợp các biện pháp chăm sóc tóc hợp lý để cải thiện tình trạng.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/rungtoc1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. Làm sao để phân biệt rụng tóc bình thường và rụng tóc bất thường?</p>
      <div class="mb-3 pl-3">
        Bình thường, tóc chúng ta có 90% là các sợi đang ở giai đoạn phát triển gọi là anagen. Khi tóc già sẽ chuyển qua giai đoạn catagen. Cuối cùng ở giai đoạn telogen tóc sẽ yếu dần và rụng để bắt đầu một chu kì mới. Bình thường tóc sẽ rụng từ 50-100 sợi. Nếu thấy rụng trên 100 sợi 1 ngày chứng tỏ bạn đã bị rụng tóc bệnh lý.
      </div>
      <div class="mb-3 pl-3">
        Một người bình thường mất khoảng 100 sợi tóc mỗi ngày, song điều này thường không gây ảnh hưởng đáng kể bởi vì tóc mới sẽ mọc lên song song. Như vậy, rụng tóc xảy ra khi chu kỳ mọc tóc này bị gián đoạn hoặc khi nang lông bị phá hủy và thay thế bằng mô sẹo, khiến cho lượng tóc rụng nhiều hơn lượng tóc mọc hàng ngày.
      </div>
      <div class="mb-3 pl-3">
        Rụng tóc thường liên quan đến một hoặc nhiều yếu tố sau đây:
      </div>
      <p class="mb-3 font-semibold text-lg pl-3">1.1 Tiền sử gia đình (di truyền)</p>
      <p class="mb-3 pl-3">
        Nguyên nhân phổ biến nhất của rụng tóc nam là di truyền, gây ra hói đầu. Đôi khi nguyên nhân này cũng gặp ở một số trường hợp rụng tóc nữ. Tình trạng này thường xảy ra song song với lão hóa và gần như có thể dự đoán được hình thái của tóc qua thời gian (xuất hiện các đốm hói đối với rụng tóc nam và tóc mỏng dần đối với rụng tóc nữ)
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">1.2 Căng thẳng stress</p>
      <p class="mb-3 pl-3">
        “Các nang tóc có chu kỳ sống riêng – sinh trưởng, chuyển tiếp, ngừng phát triển và rụng tóc. Stress sẽ bẻ cong đồng hồ sinh học này”. Theo đó, sự căng thẳng tâm lý làm thay đổi tỷ lệ phần trăm của tóc trong giai đoạn sinh trưởng và chuyển chúng đến thẳng giai đoạn ngừng phát triển, hay còn gọi là hiện tượng telogen. Giai đoạn Telogen đến sớm khiến tóc rụng ồ ạt
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">1.3 Thay đổi nội tiết tố và bệnh lý</p>
      <p class="mb-3 pl-3">
        Một loạt các rối loạn liên quan đến hormone có thể gây rụng tóc vĩnh viễn hoặc tạm thời, bao gồm thay đổi nội tiết tố trong thai kỳ, sinh nở, mãn kinh và các vấn đề về tuyến giáp. Những nguyên nhân từ bệnh lý bao gồm bệnh rụng tóc từng vùng (alopecia areata), nhiễm trùng da đầu như khi nhiễm giun đũa và một hội chứng gọi là “nghiện giật tóc” (trichotillomania);
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">1.4 Thuốc và chất bổ sung</p>
      <p class="mb-3 pl-3">
        Rụng tóc có thể gây ra do tác dụng phụ của một số loại thuốc, chẳng hạn như thuốc trị ung thư, viêm khớp, trầm cảm, thuốc dùng trong bệnh tim, huyết áp cao và thuốc trị gout;
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">1.5 Xạ trị lên phần đầu</p>
      <p class="mb-3 pl-3">
        Tóc có nguy cơ không thể mọc lại như trước;
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">1.6 Nguyên nhân khác</p>
      <p class="mb-3 pl-3">
        Nhiều người gặp tình trạng tóc rụng nhiều sau khi nhận một cú sốc về thể chất hoặc tinh thần. Loại này chỉ xuất hiện tạm thời;
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">1.7 Một số kiểu tóc và phương pháp điều trị</p>
      <p class="mb-3 pl-3">
        Những kiểu “làm tóc” lạ hoặc thắt tóc quá chặt, chẳng hạn như thắt bím tóc hoặc thắt tóc kiểu cornrow (tóc dính sát da đầu kiểu hình hạt bắp) có thể là nguyên nhân gây rụng tóc. Ngoài ra, việc áp dụng những phương pháp điều trị trên tóc (như dùng dầu nóng) tiến hành lâu dài có thể gây viêm nang lông, dẫn đến rụng tóc. Nếu để xảy ra sẹo, có thể rụng tóc vĩnh viễn.
      </p>
      <p class="font-bold text-xl mb-3">2. Điều trị theo nguyên nhân là cách hiệu quả nhất để ngăn ngừa tình trạng rụng tóc.</p>
      <p class="mb-3 pl-3">
        <span class="font-bold">2.1 Nếu rụng tóc là do nội tiết tố ở thời kỳ mãn kinh và thời kỳ sau sinh</span> thì cần sử dụng các biện pháp cải thiện, cân bằng nội tiết tố.
      </p>
      <p class="mb-3 pl-3">
        <span class="font-bold">2.2 Nếu rụng tóc do căng thẳng và thiếu chất</span> thì cần giải tỏa căng thẳng, giữ thái độ lạc quan vui vẻ, sống tích cực hơn, đồng thời bổ sung dinh dưỡng cho cơ thể và kết hợp vận động chăm chỉ. Đây là những yếu tố quan trọng để cải thiện hiện tượng rụng tóc. 
      </p>
      <p class="mb-3 pl-3">
        <span class="font-bold">2.3 Nếu rụng tóc là do bệnh lý:</span> Lúc này, cơ thể đang không được khỏe và cần được điều trị sớm để đẩy lùi bệnh tật. Khi bệnh được điều trị hiệu quả thì tình trạng rụng tóc cũng sẽ được giảm đi đáng kể. Đối với những trường hợp này bác sĩ sẽ hướng dẫn, điều trị và kê đơn thuốc phù hợp. Tuyệt đối không tự ý dùng thuốc để tránh những hậu quả nguy hại đến sức khỏe. 
      </p>
      <p class="mb-3 pl-3">
        <span class="font-bold">Áp dụng kỹ thuật cấy tóc:</span> đây vẫn là một kỹ thuật phức tạp đòi hỏi người bác sĩ phải có kỹ năng tốt và có loại máy móc hiện đại hỗ trợ. Biện pháp này gây đau đớn cho người bệnh và có nguy cơ rủi ro cao. 
      </p>
      <p class="font-bold text-xl mb-3">Kết luận</p>
      <p class="mb-3 pl-3">
        Rụng tóc là một bệnh lý khá phổ biến ngày nay, gây ra do cả nguyên nhân bên trong lẫn tác nhân bên ngoài như di truyền, căng thẳng stress, thay đổi nội tiết tố, chế độ dinh dưỡng không hợp lý, sử dụng thuốc điều trị bệnh,… Ngày nay dưới sự phát triển của ngành da liễu thẩm mỹ da, đã cho ra đời nhiều phương pháp hiệu quả điều trị rụng tóc như huyết tương giàu tiểu cầu PRP kết hợp với lăn kim, tiêm mesotherapy kích thích mọc tóc,… Để điều trị hiệu quả bệnh nhân cần hợp tác tốt với bác sĩ, đến thăm khám định kỳ và tuân thủ phác đồ điều trị.
      </p>
    `,
  },
  {
    id: 7,
    searchTag:
      "phòng ngừa chăm sóc da điều trị nám má phong ngua cham soc dieu tri nam ma",
    title: "Cách phòng ngừa và điều trị nám má",
    isOutstanding: true,
    isShowBadge: true,
    badgeLabel: "chăm sóc da",
    subTitle:
      "Nám da (Rám da) là một tình trạng rối loạn tăng sắc tố mắc phải, mạn tính, thường gặp. Phụ nữ hay bị ảnh hưởng hơn nam giới ...",
    imageUrl: "/images/logo_kien_thuc/danam1.jpg",
    tagId: 2,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Chăm Sóc Da
        </span>
      </div>
      <div class="mb-5">
        <span class="font-bold">Nám da (Rám da)</span> là một tình trạng rối loạn tăng sắc tố mắc phải, mạn tính, thường gặp. Phụ nữ hay bị ảnh hưởng hơn nam giới. Những người với type da III trở lên theo phân loại da của Fitzpatrick có nguy cơ mắc tình trạng này nhiều hơn. Nám có thể ảnh hưởng tiêu cực đến chất lượng cuộc sống, do đó nhu cầu điều trị nám đang ngày càng gia tăng. 
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/danam1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. Nguyên nhân hình thành nám</p>
      <div class="mb-5 pl-3">
        Cơ chế bệnh sinh của nám chưa được hiểu rõ hoàn toàn, nhưng hiện nay người ta thấy rằng nám má gây ra do sự phối hợp của bốn yếu tố chính: di truyền, môi trường ( tia UV), nội tiết tố (hormone giới tính, mang thai), phản ứng viêm. 
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Di truyền:</span> bản thân người đó có những yếu tố dễ bị nám má hơn những người khác. Điều này được ủng hộ bởi sự gia tăng nguy cơ nám ở những người có họ hàng trực hệ bị nám ( Theo một báo cáo ở Brazil, thì tỉ lệ này là 40-60%)
        </li>
        <li class="list-disc">
          <span class="font-bold">Ánh nắng mặt trời:</span> là một yếu tố thúc đẩy quan trọng gây hình thành nám, bằng chứng là việc nám thường xuất hiện ở vùng phơi bày ánh sáng và nặng hơn khi tiếp xúc với nắng. Các tia bức xạ UVA, UVB có trong ánh nắng kích thích tế bào hắc tố, từ đó gây ra tình trạng rối loạn sắc tố. Ngoài ra, các tia bức xạ này sẽ thúc đẩy quá trình lão hóa da nhanh hơn và có thể gây ra nguy cơ nám cao hơn. 
        </li>
        <li class="list-disc">
          <span class="font-bold">Phản ứng viêm:</span> có thể khu trú hoặc toàn thân, gặp trong viêm da tiếp xúc ( dị ứng với một số mỹ phẩm, hoặc thoa mỹ phẩm không rõ nguồn gốc ), hoặc sau một số các thủ thuật thẩm mỹ. 
        </li>
        <li class="list-disc">
          <span class="font-bold">Nội tiết:</span> Nám da thường xảy ra ở phụ nữ có thai hoặc phụ nữ sau sinh; những người sử dụng thuốc tránh thai, ngoài ra có thể gặp ở bệnh nhân mắc các bệnh lý nội tiết tại tuyến giáp, buồng trứng. Bởi vì ở những trường hợp này nội tiết tố trong cơ thể có thể bị thay thế hoặc là bị suy giảm. Chính vì lý do đó mà nám thường hay xuất hiện hơn. 
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">2. Nám da thường xuất hiện ở những vị trí nào?</p>
      <div class="mb-5 pl-3">
        Nám da thường xuất hiện ở vùng mặt. Ba loại nám theo vị trí bao gồm: trung tâm mặt, má và hàm dưới. Loại ở trung tâm mặt thường gặp nhất với sang thương ở trán, má, mũi, môi trên và cằm. Ngoài ra, nám cũng được ghi nhận ở các vùng khác trên cơ thể, đặc biệt là những vùng da thường xuyên phơi bày ánh sáng mặt trời ( cổ, ngực, cánh tay), tuy nhiên những vùng này ít gặp hơn. 
      </div>
      <p class="font-bold text-xl mb-3">3. Những đối tượng dễ bị nám: </p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Gia đình có người bị nám
        </li>
        <li class="list-disc">
          <span class="font-bold">Phụ nữ trong độ tuổi sinh sản:</span> Nội tiết tố trong cơ thể ổn định sẽ giúp sức khỏe và làn da được nuôi dưỡng tốt nhất. Thế nhưng, khi hormone rối loạn sẽ kích thích sự tăng sinh quá mức của hắc tố melanin, gây nên nám da. Đó là lí do vì sao nám hay gặp ở phụ nữ mang thai, sau sinh hoặc tiền mãn kinh
        </li>
        <li class="list-disc">
          <span class="font-bold">Người người thường xuyên tiếp xúc với ánh nắng mặt trời: </span>Trong ánh nắng mặt trời có tia UV nếu trực tiếp tác động lên da sẽ làm vỡ cấu trúc da, phá hủy tế bào da, kích thích sự tăng sinh quá mức của hắc tố melanin dẫn đến hình thành nám.
        </li>
        <li class="list-disc">
          <span class="font-bold">Chăm sóc da sai cách: </span>Sử dụng mỹ phẩm kém chất lượng, lạm dụng, tẩy lông mặt không đúng cách… khiến da suy yếu, tổn thương dẫn đến rối loạn sắc tố da.
        </li>
        <li class="list-disc">
          <span class="font-bold">Do tâm lý căng thẳng, stress kéo dài:</span> Thường xuyên bị căng thẳng, stress sẽ khiến nội tiết tố bị rối loạn, mất cân bằng dẫn đến kích thích tăng sinh sắc tố melanin, hình thành nám da.
        </li>
        <li class="list-disc">
          <span class="font-bold">Tác động từ môi trường: </span>Tiếp xúc với môi trường ô nhiễm, nhiều khói bụi… cũng tạo điều kiện thuận lợi để nám hình thành.
        </li>
        <li class="list-disc">
          <span class="font-bold">Sử dụng biện pháp tránh thai: </span>( chứa estrogen hoặc progesteron), cũng liên quan đến rối loạn các hormon. Một số loại thuốc chống co giật cũng có thể là nguyên nhân gây ra nám da.
        </li>
        <li class="list-disc">
          <span class="font-bold">Tăng sắc tố sau viêm: </span>Là tình trạng tăng hắc tố melanin do các phản ứng sau viêm sau khi bị bệnh về da như mụn trứng cá, triệt lông, thực hiện các thủ thuật da.
        </li>
        <li class="list-disc">
          <span class="font-bold">Chế độ ăn uống, sinh hoạt không lành mạnh: </span>Sử dụng thường xuyên các thực phẩm, gia vị cay nóng dễ gây nám như ớt, tiêu, rượu bia, ít bổ sung hoa quả trong thực đơn...
        </li>
        <li class="list-disc">
          <span class="font-bold">Yếu tố khác: </span>Bị suy giáp, sử dụng giường tắm nắng cũng có thể ảnh hưởng đến làn da và tăng nguy cơ bị nám.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">4. Nám da có biểu hiện như thế nào? Và có mấy loại nám da?</p>
      <p class="mb-3 font-semibold text-lg pl-3">4.1. Biểu hiện của nám da:</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Nám đặc trưng</span> bởi những dát giới hạn rõ, màu nâu nhạt đến đậm, hoặc xám nâu, đối xứng hai bên
        </li>
        <li class="list-disc">
          <span class="font-bold">Kích thước</span> từ 0.5 đến lớn hơn 10 cm. 
        </li>
        <li class="list-disc">
          <span class="font-bold">Vị trí hay gặp nhất:</span> mặt 
        </li>
      </ul>
      <p class="mb-3 font-semibold text-lg pl-3">4.2. Các loại nám da:</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Nám nông (nám mảng): </span>Là nám có chân nám nằm ở lớp ngoài cùng của cấu trúc da - lớp biểu bì. Nám xuất hiện nhiều ở hai bên gò má và theo từng mảng với màu nâu nhạt cho đến nâu sẫm. Nám mảng hình thành do các yếu tố như: Ánh nắng mặt trời, phản ứng với mỹ phẩm, căng thẳng, sử dụng thuốc ngừa thai trong thời gian dài. Nám mảng là đáp ứng tốt với các phương pháp điều trị và dễ dàng trị dứt điểm nhất.
        </li>
        <li class="list-disc">
          <span class="font-bold">Nám đốm (nám chân sâu, nám chân đinh): </span>Nám có chân ăn sâu vào lớp hạ bì nên cần nhiều thời gian để điều trị. Kích thước nhỏ như đầu đinh với màu sắc từ nâu nhạt đến nâu đậm, màu đen. Nám chân sâu xuất hiện nhiều ở vùng trán, má, cằm. Tình trạng rối loạn nội tiết, thay đổi hormone đột ngột, di truyền là nguyên nhân khiến nám đốm hình thành.
        </li>
        <li class="list-disc">
          <span class="font-bold">Nám hỗn hợp: </span>Là tình trạng da mặt có sự xuất hiện của cả nám mảng và nám đốm. Cách điều trị loại nám này cũng gặp không ít khó khăn vì phải giải quyết đồng thời hai loại nám.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">5. Sự khác nhau giữa nám và tàn nhang như thế nào?</p>
      <div class="mb-3 pl-3">
        Tàn nhang, nám da đều là những vấn đề về da gây ảnh hưởng nhiều đến thẩm mỹ, gây nhiều khó chịu cho người mắc phải. Nếu không điều trị kịp thời sẽ có khả năng cao lan sang các vùng da khác. Tuy nhiên đây là hai tình trạng hoàn toàn khác nhau. Vậy chúng ta cùng tìm hiểu tàn nhang là gì, và tàn nhang khác nám ở điểm nào?
      </div>
      <p class="font-bold text-xl mb-3 pl-3">Tàn nhang</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/danam2.jpg" alt="knowledge-detail" />
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Là những nốt nhỏ</span>, kích thước chỉ từ 1-5mm, có thể nằm riêng lẻ hoặc liên kết thành từng mảng nhưng không đều nhau.
        </li>
        <li class="list-disc">
          <span class="font-bold">Tàn nhang</span> có xu hướng đậm màu hơn khi ra nắng và nhạt dần vào những tháng mùa đông.
        </li>
        <li class="list-disc">
          <span class="font-bold">Đối tượng: </span>Phổ biến ở người da trắng ( châu  u), đặc biệt là trẻ em tóc đỏ.
        </li>
      </ul>
      <p class="text-xl mb-3 pl-3 font-bold">Nguyên nhân</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Chủ yếu là nguyên nhân di truyền, liên quan đến đột biến gen: </span>MC1R đóng vai trò chủ yếu.
        </li>
        <li class="list-disc">
        <span class="font-bold">Cơ chế: </span>Tàn nhang có màu nâu là do sắc tố Melanin. Melanin được sản xuất bởi các tế bào sắc tố. Sự sản xuất melanin giảm vào mùa đông, và gia tăng khi da tiếp xúc với tia UV. Trong tàn nhang thì các tế bào sắc tố sản xuất nhiều sắc tố hơn bình thường ( nhưng không thay đổi số lượng tế bào sắc tố).
        </li>
      </ul>
      <p class="text-xl mb-3 pl-3 font-bold">Đặc điểm</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Nằm ở lớp nông của da,</span> ngoài xuất hiện trên mặt còn có thể thấy ở các vị trí khác như cổ, cánh tay, ngực...
        </li>
        <li class="list-disc">
          <span class="font-bold">Trong khi đó nám có thể nằm ở </span>lớp nông (thượng bì) hoặc lớp sâu (lớp bì) của da. 
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">6. Điều trị nám da gồm những phương pháp nào? Thời gian điều trị khoảng bao lâu?</p>
      <div class="mb-3 pl-3">
        Nám có thể điều trị hiệu quả nếu áp dụng đúng phương pháp, tuân thủ đúng phác đồ, liệu trình được chỉ định. Tuy nhiên, nhiều trường hợp, nám có thể khó điều trị, và việc xử trí thích hợp là phối hợp nhiều phương pháp. 
      </div>
      <div class="mb-3 pl-3">
        Hiện tại để điều trị nám, bạn có thể sử dụng các những phương pháp như:
      </div>
      <div class="mb-3 pl-3">
        <span class="font-bold">Kem chống nắng: </span>bắt buộc, sử dụng hằng ngày kết hợp với quần áo chống nắng, đội nón, tránh tiếp xúc trực tiếp với ánh nắng mặt trời
      </div>
      <div class="mb-3 pl-3">
        <span class="font-bold">Thuốc thoa tại chỗ: </span>
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <span class="font-bold">Axit retinoid: </span>tretinoin
        </li>
        <li class="list-disc">
          <span class="font-bold">Điều trị kết hợp: </span>nhiều liệu pháp kết hợp kép và kết hợp ba loại đã được sử dụng để điều trị nám, nhưng hiệu quả nhất là bộ ba: retinoid tại chỗ, hydroquinone giúp làm đều màu da, corticosteroid để giảm viêm. 
        </li>
        <li class="list-disc">
          <span class="font-bold">Ngoài ra, có thể sử dụng một số loại thuốc có chứa các hoạt chất làm trắng da</span> như axit azelaic, axit kojic, acid ascorbic, arbutin, …
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Ngoài việc dùng thuốc, để điều trị nám da còn có các liệu pháp khác như:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          RF micro needling.
        </li>
        <li class="list-disc">
          Peel da 
        </li>
        <li class="list-disc">
          Chiếu laser
        </li>
        <li class="list-disc">
          Lăn kim
        </li>
        <li class="list-disc">
          Huyết tương giàu tiểu cầu PRP
        </li>
        <li class="list-disc">
          Mesotherapy (tiêm vi điểm)
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Trong một số trường hợp nám khó điều trị, có thể kết hợp với thuốc uống. Tranexamic acid là một dẫn xuất tổng hợp của axit amin lysine có công dụng làm sáng da và cải thiện sự xuất hiện của các vết thâm, giúp da đều màu hơn, nhờ tác dụng làm chậm quá trình tổng hợp melanin.
      </div>
      <div class="mb-3 pl-3">
        Tuy nhiên, dù áp dụng cách điều trị nào thì quan trọng nhất bạn vẫn nên đi thăm khám để được các bác sĩ xác định chính xác tình trạng da và có hướng điều trị phù hợp. Tùy từng trường hợp mà bác sĩ sẽ chỉ định loại thuốc hoặc phương pháp điều trị phù hợp nhất.
      </div>
      <div class="mb-3 pl-3">
        <span class="font-bold">Thời gian điều trị: </span>thường cần vài tháng để có thể thấy được hiệu quả điều trị, và cần phải duy trì lâu dài để tránh tái phát.
      </div>
      <p class="font-bold text-xl mb-3">7. Nám da có lây từ vị trí này qua vị trí khác hay không? Nám da có điều trị dứt điểm không?</p>
      <div class="mb-3 pl-3">
        Nám da có cơ chế bệnh sinh rất phức tạp, liên quan nhiều yếu tố. Làn da của của chúng ta có màu sắc là từ sắc tố melanin, melanin giúp cho da chống lại tác hại của tia UV có hại cho da. Do đó khi chúng ta tiếp xúc nhiều với ánh sáng mặt trời sẽ kích thích làn da tập trung sản xuất nhiều melanin hơn để bảo vệ da từ đó hình thành sắc tố nám da. Đồng thời khi gặp thay đổi về nội tiết, lạm dụng mỹ phẩm, ô nhiễm môi trường cũng kích thích tăng sản xuất quá mức melanin. 
      </div>
      <div class="mb-3 pl-3">
        Sắc tố melanin bình thường ở lớp sâu của da sẽ đi dần lên bề mặt da, hình thành các đốm, mảng nâu tạo thành nám da. Do đó, trả lời cho thắc mắc của nhiều người là nám da có lây sang vị trí khác không, thì nám da không lây. Mà do sắc tố từ sâu trong da ngày càng đi dần lên bề mặt nên mình sẽ ngày càng thấy vết nám rõ hơn và lan rộng hơn.
      </div>
      <div class="mb-3 pl-3">
        Việc nám da có điều trị dứt điểm được không? 
      </div>
     <div class="mb-3 pl-3">
        Nám da có thể điều trị hiệu quả nếu khách hàng tuân thủ, kiên trì theo điều trị của bác sĩ, bằng các phương pháp điều trị mà bác sĩ đã đề cập trước đó. Tuy nhiên, nám da rất dễ tái phát nếu khách hàng không tránh nắng nghiêm ngặt, do đó điều trị sẽ có hiệu quả và lâu dài khi có sự phối hợp chặt chẽ của bác sĩ và bệnh nhân, duy trì chăm sóc da đúng cách, điều trị duy trì sẽ giúp hạn chế tình trạng nám tái phát.
      </div>
      <p class="font-bold text-xl mb-3">8. Có nên tự ý điều trị, thoa thuốc điều trị nám da?</p>
      <div class="mb-3 pl-3">
        Việc áp dụng các phương pháp điều trị nám sai cách không chỉ khiến nám không khỏi mà còn có thể để lại nhiều hậu quả nặng nề và khiến điều trị nám da trở nên khó khăn. Bởi nếu như ban đầu, điều trị nám chỉ là ức chế và loại bỏ melanin ra khỏi cơ thể thì với các trường hợp đã gặp phải biến chứng, các bác sĩ sẽ phải giải quyết thêm các vấn đề:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <span class="font-bold">Bệnh lý rối loạn sắc tố hỗn hợp, gây tăng sắc tố hoặc mất sắc tố. </span>Tăng sắc tố có thể khiến da thâm sạm, đậm màu hơn, da có thể bị đỏ và ngứa. Còn mất sắc tố có thể khiến tế bào sắc tố bị tê liệt, mất chức năng tạo màu khiến da xuất hiện đốm sẹo trắng.
        </li>
        <li class="list-disc">
          <span class="font-bold">Tổn thương cấu trúc da, da có thể trở nên khô, mỏng và yếu. </span>Ngoài ra, điều trị nám da sai cách còn có thể gây tình trạng teo da và giãn mạch ( thường gặp trong trường hợp dùng mỹ phẩm có chứa corticoids)
        </li>
        <li class="list-disc">
          <span class="font-bold">Sắc tố da biến đổi. </span>Đối với những trường hợp bị tổn thương nặng, tế bào sắc tố bị phản ứng oxi hóa với các chất trị nám, vết nám từ màu nâu chuyển thành màu đen hoặc xám khói gây mất thẩm mỹ.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">9. Nám da ở mẹ bầu có nên điều trị hay không?</p>
      <div class="mb-3 pl-3">
        Nám da là tình trạng xuất hiện phổ biến trong thai kì, chiếm khoảng 50-70%. Nguyên nhân là do sự thay đổi nồng độ hormon ( estrogen và progesteron) gây nên những rối loạn sắc tố da. Nám có thể xuất hiện bất kì thời điểm nào trong thời kì mang thai, nhưng phổ biến nhất là trong 3 tháng giữa và 3 tháng cuối thai kì. Tuy nhiên, tình trạng này chỉ là tạm thời và thường mờ dần sau khi sinh con hoặc sau thời kỳ cho con bú. 
      </div>
      <div class="mb-3 pl-3">
        Một số khuyến cáo không điều trị nám trong thời kì mang thai. Lý do thứ nhất là nó có thể tự giải quyết. Lí do thứ hai là một số phương pháp điều trị có thể không an toàn, và có thể ảnh hưởng tới em bé. 
      </div>
      <div class="mb-3 pl-3">
        Phương pháp điều trị tốt nhất thực sự có thể là phòng ngừa, với sự trợ giúp của một vài thay đổi trong lối sống:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <span class="font-bold">Tránh ánh nắng mặt trời: </span>Sử dụng kem chống nắng có chỉ số SPF cao, ít nhất là trên 30 cho da mặt cả ngày, ngay cả khi bạn không ra ngoài. Nếu bắt buộc phải ra khỏi nhà thì nên che chắn bằng cách đeo kính râm, khẩu trang, đội mũ rộng vành và mặc áo chống nắng.
        </li>
        <li class="list-disc">
          <span class="font-bold">Che phủ nám: </span>Sử dụng kem nền và kem che khuyết điểm không gây mụn, không gây dị ứng và thiết kế dành riêng cho làn da nám.
        </li>
        <li class="list-disc">
          Ăn uống đầy đủ, nghỉ ngơi và bổ sung đầy đủ chất dinh dưỡng, tránh stress. 
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">10. Lời khuyên từ BSCKII Nguyễn Lê Trà Mi giúp chị em phòng ngừa cũng như điều trị nám da hiệu quả?</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/danam3.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-3">
        <span class="font-bold">Để phòng ngừa nám, chúng ta cần: </span>
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <span class="font-bold">Sử dụng kem chống nắng hằng ngày có chỉ số SPF từ 30 trở lên,</span> hạn chế tiếp xúc quá nhiều với ánh nắng trong khoảng thời gian từ 10-16 giờ và kết hợp che chắn cẩn thận bằng mũ, ô, khẩu trang, áo, váy chống nắng.
        </li>
        <li class="list-disc">
          <span class="font-bold">Làm sạch da mặt kỹ càng</span> bằng sữa rửa mặt 2 lần/ngày, tẩy trang vào mỗi tối và tẩy tế bào chết ít nhất 1 lần/tuần để đảm bảo làn da được làm sạch sâu nhất. 
        </li>
        <li class="list-disc">
          <span class="font-bold">Sử dụng mặt nạ </span>là một cách bổ sung độ ẩm, cung cấp vitamin cho da rất tốt, từ đó ngăn ngừa các dấu hiệu lão hóa, nuôi dưỡng làn da trắng sáng, khỏe mạnh. Thực hiện đều đặn (2-3 lần/tuần) và đặc biệt là luôn kết hợp với bảo vệ da thật kỹ càng để đảm bảo không khiến da bị bắt nắng.
        </li>
        <li class="list-disc">
          <span class="font-bold">Chế độ ăn lành mạnh, </span>nhiều rau củ quả và đặc biệt là luôn bổ sung đủ lượng nước cho cơ thể.
        </li>
        <li class="list-disc">
          <span class="font-bold">Luôn giữ tinh thần thoải mái, giảm stress. </span>Trong các nguyên nhân hình thành nên nám da, yếu tố tâm lý cũng là một trong những nguyên nhân chính. Bởi stress, mệt mỏi liên tục sẽ khiến nội tiết tố bị rối loạn, kích thích cơ thể sản sinh melanin và hình thành nám da nhanh chóng. Đặc biệt, khi đã bị nám nội tiết, bạn sẽ rất khó loại bỏ nếu không cân bằng được tâm lý và kết hợp điều trị từ trong ra ngoài. Do đó, nếu muốn phòng ngừa nám da hiệu quả, bạn hãy luôn chú ý đến yếu tố tinh thần. 
        </li>
      </ul>
      <p class="text-lg mb-3">
        Để điều trị hiệu quả nám, cần tuân thủ theo liệu trình của bác sĩ, để giúp đạt được hiệu quả tối ưu và ngăn ngừa nám tái phát.
      </p>
    `,
  },
  {
    id: 8,
    searchTag:
      "nguyên nhân chăm sóc da khô nhạy cảm nguyen nhan cham soc da kho nhay cam",
    title: "Nguyên nhân và cách chăm sóc da khô, nhạy cảm",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "chăm sóc da",
    subTitle:
      "Da khô, nhạy cảm và bong tróc là một vấn đề da liễu phổ biến, bên cạnh yếu tố di truyền, còn có nhiều nguyên nhân tiềm ẩn làm cho làn da trở nên khô hơn ...",
    imageUrl: "/images/logo_kien_thuc/dakho1.jpg",
    tagId: 2,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Chăm Sóc Da
        </span>
      </div>
      <div class="mb-5">
        Da khô, nhạy cảm và bong tróc là một vấn đề da liễu phổ biến, bên cạnh yếu tố di truyền, còn có nhiều nguyên nhân tiềm ẩn làm cho làn da trở nên khô hơn. Các tình trạng da như chàm, bệnh trứng cá đỏ và bệnh vẩy nến cũng như một số bệnh nhiễm nấm có thể làm cho da khô và bong tróc. Nếu bạn mắc phải tình trạng khô da và có các triệu chứng nghiêm trọng như ngứa, nứt nẻ kéo dài, lúc đó bạn nên đến gặp bác sĩ da liễu để được thăm khám và điều trị.
      </div>
      <div class="mb-5">
        Trong bài viết này, Bác sĩ sẽ đề cập đến cách chăm sóc và một số thành phần tốt cho làn da da khô, nhạy cảm.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dakho1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-5">1. Nguyên nhân da khô thường bong tróc bong tróc?</p>
      <div class="mb-3 pl-3">
        Chức năng chính của lớp biểu bì da (lớp ngoài cùng, liên tục được đổi mới) là hàng rào bảo vệ với thế giới bên ngoài. Nó bảo vệ chống lại các yếu tố bên ngoài có thể làm hỏng cấu trúc sâu hơn của da, chẳng hạn như tia UV và ô nhiễm. Nó cũng cung cấp lớp phòng thủ đầu tiên của hệ thống miễn dịch của cơ thể chống lại vi khuẩn và có chức năng ngăn ngừa mất nước qua biểu bì (TEWL) để duy trì mức độ hydrat hóa ở các lớp sâu hơn của da.
      </div>
      <div class="mb-3 pl-3">
        Hàng rào biểu bì này dựa vào một số yếu tố để duy trì tính toàn vẹn của nó, cụ thể là:
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Sản xuất đủ các tế bào da mới </span>(được gọi là tế bào sừng) phân chia ở lớp dưới cùng (tầng đáy), chết đi và lấp đầy bằng một loại protein không thấm nước được gọi là keratin.
        </li>
        <li class="list-disc">
          <span class="font-bold">Sản xuất đủ lượng dầu tự nhiên của da,</span> có tác dụng chống thấm nước cho lớp biểu bì.
        </li>
        <li class="list-disc">
          <span class="font-bold">Duy trì độ pH cân bằng trên da.</span>
        </li>
        <li class="list-disc">
          <span class="font-bold">Cân bằng thảm vi sinh vật</span> giúp ngăn ngừa nhiễm trùng.
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Khi bất kỳ yếu tố nào trong số này bị phá vỡ, sự cân bằng sẽ bị mất đi và tình trạng da khô và bong tróc có thể xảy ra. Các nguyên nhân phổ biến nhất liên quan đến việc tiếp xúc với môi trường (chẳng hạn như thay đổi độ ẩm không khí, tiếp xúc với tia UV, v.v.) và những thay đổi trong môi trường bên trong cơ thể - đặc biệt là sự dao động về nồng độ hormone. Sự dao động này đảo lộn việc sản xuất dầu trên da bởi tuyến bã nhờn.
      </div>
      <div class="mb-3 pl-3">
        Khi hàng rào biểu bì bị phá vỡ, điều này có xu hướng làm lộ ra các lớp sâu hơn của da trước các yếu tố gây hại, gây ra một vòng luẩn quẩn kích ứng và viêm nhiễm, gây khô và bong tróc hơn nữa.
      </div>
      <p class="font-bold text-xl mb-5">2. Thành phần chăm sóc da giúp cải thiện làn da khô, nhạy cảm.</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dakho2.jpg" alt="knowledge-detail" />
      </div>
      <p class="mb-3 font-semibold text-lg pl-3">2.1. Axit hyaluronic:</p>
      <p class="mb-3 pl-5">là một phân tử cấu trúc được tìm thấy khắp cơ thể, trong da và hầu hết các mô khác, hoạt động như một chất ‘giữ ẩm’ tự nhiên, nghĩa là nó tự hút nước. Nó được tạo thành từ chuỗi dài các axit amin và phân tử đường nên được gọi là glycosaminoglycan. Axit hyaluronic trong chăm sóc da tận dụng tác dụng giữ ẩm này để hút nước vào da và hoạt động như một loại kem dưỡng ẩm. Bằng cách bôi axit hyaluronic hoặc glycerin tại chỗ, bạn có thể tăng độ ẩm của các lớp trên của da nhờ tác dụng giữ ẩm của nó - tức là nó hút các phân tử nước từ sâu hơn trong da đến các lớp bề mặt hơn. Nó có thể được sử dụng trong kem dưỡng ẩm, huyết thanh và thậm chí cả mặt nạ lột tại nhà - nó là một thành phần rất hữu ích và thường không gây kích ứng.</p>
      <p class="mb-3 font-semibold text-lg pl-3">2.2. Ceramides:</p>
      <p class="mb-3 pl-5">
        Giảm thiểu sự mất độ ẩm của da bằng cách sử dụng các phân tử như ceramides cũng rất quan trọng. Đây thực chất là các axit béo (tồn tại tự nhiên trong da) giúp duy trì hàng rào bảo vệ da và hỗ trợ da duy trì độ ẩm. Các axit béo này cũng hoạt động như một nguồn thức ăn cho vi khuẩn tốt của hệ vi sinh vật trên da, điều này cũng rất quan trọng đối với chức năng rào cản của da.
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">2.3. Vitamin E, hay tocopherol:</p>
      <p class="mb-3 pl-5">
        là một loại vitamin tan trong dầu, rất quan trọng trong nhiều quá trình tế bào trên khắp cơ thể. Nó được tìm thấy ở nhiều nguồn trong tự nhiên và có 8 phân nhóm chính. Alpha-tocopherol có nhiều nhất trong các mô của con người. Nó đã được sử dụng trong hơn 50 năm trong chăm sóc da vì đặc tính làm dịu và trẻ hóa. Là một chất chống oxy hóa mạnh, vitamin E giúp vừa sửa chữa những tổn thương trên da vừa bảo vệ da khỏi những tổn thương trong tương lai. Ngày càng có nhiều bằng chứng cho thấy vitamin E có đặc tính bảo vệ da mạnh mẽ (tức là nó giúp bảo vệ chống lại tổn thương da trong tương lai do tia UV từ mặt trời). Hòa tan trong chất béo, nó có thể giúp sửa chữa hàng rào tự nhiên của da và cũng có một số khả năng kích thích collagen - do đó nó được ưa chuộng như một thành phần quan trọng trong chăm sóc da chống lão hóa.
      </p>    
      <p class="mb-3 font-semibold text-lg pl-3">2.4. Panthenol:</p>
      <p class="mb-3 pl-5">
        Vitamin dưỡng ẩm tối ưu, panthenol (hoặc pro-vitamin B5) có tác dụng chống viêm và dưỡng ẩm sâu cho da - đặc biệt khi kết hợp với axit hyaluronic, nó có thể hydrat hóa nhiều cấp độ của da. Cả hai phân tử này cũng có tác dụng chống oxy hóa, và đặc biệt panthenol đã được chứng minh là làm giảm vết đỏ do tiếp xúc với tia cực tím (tức là cháy nắng). Nó cũng có thể làm giảm cảm giác ngứa ở những người có tình trạng da khô, ví dụ như da khô do bệnh chàm
      </p>
      <p class="mb-3 font-semibold text-lg pl-3">2.5. Axit azelaic:</p>
      <p class="mb-3 pl-5">
        Axit Azelaic là một thành phần ngày càng phổ biến trong chăm sóc da. Thường được tìm thấy trong các sản phẩm trị mụn và trị bệnh trứng cá đỏ, nó có tác dụng chống viêm và chống oxy hóa mạnh, nên có thể cải thiện da khô và bị kích ứng.
      </p>
      <p class="font-bold text-xl mb-5">3. Cách ngăn ngừa da khô, nhạy cảm.</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dakho3.jpg" alt="knowledge-detail" />
      </div>
      <p class="mb-3 pl-5">
        Đối với những người có làn da khô, dưỡng ẩm và phục hồi hàng rào bảo vệ da là chìa khóa để giảm tình trạng khô và bong tróc. Bác sĩ thường khuyên bệnh nhân tránh bất cứ thứ gì có thể tẩy da chết quá mức và gây kích ứng. Hàng rào tự nhiên của da thường bị phá vỡ khi da bị khô. Điều quan trọng là giúp sửa chữa điều này. Tốt nhất nên tránh các thành phần như axit salicylic, cũng như nồng độ cao của một số AHA nhất định như axit glycolic - có thể làm khô da. Việc sử dụng retinoid phải được kiểm soát cẩn thận và trong khi retinoid nhẹ có thể phù hợp, thì retinoid mạnh hơn và retinoid kê đơn có thể làm khô da quá mức, làm tăng kích ứng và viêm.
      </p>
      <p class="mb-3 pl-5">
        Tóm lại, Bác sĩ Trà Mi khuyên bạn nên dưỡng ẩm cho da khô ít nhất hai lần mỗi ngày. Do nguy cơ nhạy cảm và kích ứng cao hơn, dẫn đến viêm nhiễm, việc sử dụng kem chống nắng là đặc biệt quan trọng để ngăn ngừa kích ứng thêm do tiếp xúc với tia UVA và UVB. 
      </p>  
    `,
  },
  {
    id: 9,
    searchTag: "chăm sóc da mụn trứng cá cham soc da mun trung ca",
    title: "Chăm sóc da mụn trứng cá",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "chăm sóc da",
    subTitle:
      "Mụn trứng cá là vấn đề phải được lưu ý đến trong thực hành thẩm mỹ - da liễu ...",
    imageUrl: "/images/logo_kien_thuc/damun1.jpg",
    tagId: 2,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Chăm Sóc Da
        </span>
      </div>
      <div class="mb-5 text-right">
        BS.CKII. Nguyễn Lê Trà Mi
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/damun1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">I. Đại cương về mụn trứng cá và da mụn trứng cá</p>
      <div class="mb-3 pl-3">
        Mụn trứng cá là vấn đề phải được lưu ý đến trong thực hành thẩm mỹ - da liễu. Mụn trứng cá không phải là vấn đề thẩm mỹ đơn thuần, tuy nhiên, do mụn trứng cá phân bố ở những vùng dễ nhận thấy nên bệnh nhân rất thường than phiền với bác sĩ về mặt thẩm mỹ. Mụn trứng cá cũng có thể có tác động sâu sắc đến sức khỏe tâm thần của bệnh nhân. Gần đây, một nghiên cứu đánh giá tác động của mụn trứng cá lên hình ảnh bản thân và chất lượng cuộc sống nhận thấy mụn trứng cá có tác động ngang ngửa với các bệnh lý nặng nề hơn như hen phế quản hay động kinh. Mụn có thể đặc biệt gây khó chịu cho người trưởng thành vì họ nghĩ rằng mình đã quá tuổi bị mụn trứng cá. 
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/damun2.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-3">
        Mụn trứng cá thường khởi phát vào đầu giai đoạn dậy thì, hầu hết các trường hợp đều thuộc giai đoạn giữa sau của quá trình dậy thì với khoảng hơn 85% thanh thiếu niên bị ảnh hưởng (12-24 tuổi), sau đó, tần suất sẽ giảm dần theo tuổi. Tuy vậy, đặc biệt ở nữ, mụn trứng cá có thể kéo dài cho đến những năm 30 tuổi hoặc thậm chí trễ hơn.
      </div>
      <div class="mb-3 pl-3">
        Cơ chế bệnh sinh của mụn trứng cá bao gồm rất nhiều yếu tố, tuy nhiên, có 4 cơ chế chính gây ra mụn là (1) tăng sản thượng bì vùng nang lông (sừng hóa nang lông), (2) tăng tiết bã nhờn, (3) viêm, (4) sự hiện diện và hoạt động của vi khuẩn Propionibacterium acnes (P. acnes)
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">1. Sừng hóa nang lông</p>
      <div class="mb-3 pl-5">
        Sừng hóa nang lông là nguồn gốc đưa đến sang thương đầu tiên của mụn, đó là nhân trứng cá. Phần trên của nang lông (phễu nang lông) có hiện tượng tăng sừng kèm sự tăng kết dính của tế bào sừng. Điều này hình thành một nút chặn làm chất sừng, chất bã bị nghẽn lại, đồng thời gây tích tụ vi khuẩn trong nang lông. Khối tích tụ này gây dãn phía trên của nang lông tạo nên vi nhân mụn. Một vài yếu tố góp phần vào sự tăng sinh tế bào thượng bì, bao gồm: sự kích thích của androgen, giảm acid linoleic, tăng hoạt động của interleukin 1α và tác động của vi khuẩn P.acnes 
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">2. Tăng tiết chất bã</p>
      <div class="mb-3 pl-5">
        Bệnh nhân mụn trứng cá có sự tăng tiết chất bã quá mức mặc dù thành phần chất bã vẫn không thay đổi so với bệnh nhân không có mụn trứng cá. Triglyceride và lipoperoxide là 2 thành phần trong chất bã đóng vai trò quan trọng trong bệnh sinh mụn trứng cá: vi khuẩn P. acnes phân giải triglyceride thành axit béo tự do, thúc đẩy vi khuẩn tăng sinh và kéo theo hiện tượng viêm. Lipoperoxide tạo ra các chất tiền viêm và hoạt hóa con đường dẫn đến gia tăng tiết bã 
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">3. Vai trò của viêm</p>
      <div class="mb-3 pl-5">
        Vi nhân mụn tiếp tục to dần do sự tích tụ keratin, chất bã và vi khuẩn. Sự lan rộng này khiến cho thành nang lông bị vỡ. Chất keratin, chất bã và vi khuẩn tràn ra lớp bì gây đáp ứng viêm mạnh. Những tế bào ưu thế trong 24h đầu tại nhân mụn bị vỡ là các lympho bào. 1-2 ngày sau bạch cầu đa nhân trung tính đến và trở nên ưu thế tại vùng nhân mụn vỡ.
      </div>
      <div class="mb-3 pl-5">
        Trước đây cho rằng hiện tượng viêm đi sau sự tạo thành nhân mụn, nhưng gần đây những chứng cứ mới cho thấy hiện tượng viêm ở lớp bì có thể xảy ra trước cả hiện tượng tạo nhân mụn. 
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">4. Vai trò của vi khuẩn</p>
      <div class="mb-3 pl-5">
        P. acnes là chủng vi khuẩn Gram dương, vi ái khí và kị khí được tìm thấy trong hệ khuẩn chí ở nang lông tuyến bã. Nhiều nghiên cứu cho thấy rằng số lượng P. acnes nhiều hơn ở những bệnh nhân mụn, nhưng không thấy có mối liên quan giữa số lượng P. acnes với mức độ nặng của bệnh. Kháng thể chống vi khuẩn kích thích phản ứng viêm thông qua quá trình hoạt hóa bổ thể, dẫn đến phóng thích các chất tiền viêm. P.acnes sản xuất các men lipase, protease, hyaluronidase, đây là các yếu tố hóa ứng động kích hoạt phản ứng quá mẫn muộn. P. acnes cũng kích thích tăng biểu hiện các cytokine khi kết hợp với Toll-like receptor 2 trên các tế bào đơn nhân và đa nhân quanh nang lông tuyến bã; sau khi gắn kết với Toll-like receptor 2, sẽ gây phóng thích các cytokine tiền viêm như IL-1, IL-8, IL-12 và TNF-α.  
      </div>
      <div class="mb-3 pl-5">
        Gần đây, vai trò của chế độ ăn trong mụn trứng cá đang được quan tâm. Đặc biệt liên quan với chỉ số đường và mức độ tiêu thụ các sản phẩm từ sữa. Cả hai đều được cho là làm tăng yếu tố tăng trưởng giống insulin (insulin-like growth factor, IGF-1) có khả năng tác động lên quá trình tạo mụn và tăng hoạt động của androgen.
      </div>
      <div class="mb-3 pl-5">
        Tóm lại, 4 yếu tố trong cơ chế bệnh sinh của mụn tương tác với nhau, do đó, để điều trị mụn cần điều trị đa cơ chế. Hiểu được cơ chế và liệu pháp điều trị đa cơ chế sẽ giúp hiệu quả điều trị tốt hơn.
      </div>
      <div class="mb-3 pl-5">
        Làn da của bệnh nhân bị mụn trứng cá đã được phân loại theo hệ thống Baumann thành một type da riêng biệt.
      </div>
      <div class="mb-3 pl-5">
        Baumann phân loại da dựa trên 4 thang đo
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          1. Dầu >< Khô
        </li>
        <li class="list-disc">
          2. Nhạy cảm >< Không nhạy cảm
        </li>
        <li class="list-disc">
          3. Tăng sắc tố >< Không tăng sắc tố
        </li>
        <li class="list-disc">
          4. Dễ tạo nếp nhăn >< Không dễ tạo nếp nhăn
        </li>
      </ul>
      <div class="mb-3 pl-5">
        Từ đó, hình thành 16 type da. Da mụn trứng cá được xếp vào loại da nhạy cảm, và là da nhạy cảm type 1. Hiểu rõ cách phân loại này sẽ giúp chúng ta lựa chọn cách thức và sản phẩm chăm sóc da phù hợp. 
      </div>
      <div class="mb-5 pl-5">
        *Da mụn = da nhờn??? Độ nặng của mụn trứng cá tương quan và tỉ lệ thuận trực tiếp với mức độ chất bã nhờn được tiết ra. Bệnh nhân mụn trứng cá có nồng độ chất bã nhờn trên da cao hơn ở nhóm không mụn trứng cá trong nhiều nghiên cứu. Tuy nhiên, cần phải hiểu rõ rằng dù mụn trứng cá liên quan với tăng tiết bã nhờn, không phải tất cả những người da nhờn đều bị mụn trứng cá. Da nhờn nhưng không bị mụn trứng cá được xếp vào loại da nhờn không nhạy cảm theo phân loại Baumann. 
      </div>
      <p class="font-bold text-xl mb-3">II. Chăm sóc da mụn trứng cá hàng ngày</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/damun3.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-5">
        Vai trò của chăm sóc da mụn trứng cá đúng cách hàng ngày là để giảm thiểu tác dụng không mong muốn của điều trị (kích ứng, khô da), cung cấp tác dụng hiệp đồng với các điều trị chính thống, giảm các hậu quả của mụn (tăng sắc tố sau viêm hay sẹo), và cải thiện chất lượng cuộc sống. Chế độ chăm sóc da đúng sẽ cải thiện mụn sau 8-12 tuần, nên bệnh nhân cần được tư vấn để tuân thủ tốt. Các bước chăm sóc da cơ bản bao gồm rửa mặt, kế đến là thoa toner và cuối cùng là dưỡng ẩm. Chống nắng và trang điểm sẽ được thực hiện sau khi da đã được chuẩn bị đầy đủ với 3 bước cơ bản trên.
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">1. Rửa mặt</p>
      <div class="mb-3 pl-5">
        Công dụng chính của rửa mặt là để loại bỏ chất bã nhờn, bụi bẩn, và các vi sinh vật<br/>
        Lựa chọn loại sản phẩm rửa mặt: không chứa xà phòng, không sinh nhân mụn, không gây kích ứng (đặc biệt nếu đang dùng retinoid thoa), không gây dị ứng, kiểm soát nhờn tốt mà không làm khô da, cân bằng pH da<br/>
        Rửa mặt hai lần mỗi ngày là đủ, trừ phi có quá nhiều chất nhờn hay bụi bẩn
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">2. Toner</p>
      <div class="mb-3 pl-5">
        Toner là những sản phẩm có vai trò (1) sửa chữa các khiếm khuyết của chất tẩy rửa hoặc (2) bổ sung tác dụng của dưỡng ẩm. 
      </div>
      <div class="mb-3 pl-5">
        Da mụn trứng cá là da nhạy cảm, có tăng tiết bã nhờn. Toner dành cho da nhờn có công thức hóa học phù hợp để loại bỏ mọi chất bã nhờn còn sót lại sau rửa mặt, hoặc để dẫn truyền các chất tiêu sừng như salicylic acid, glycolic acid vào da tốt hơn. Vài toner được thiết kế cho da nhạy cảm có chứa hoạt chất dưỡng ẩm như propylene glycol hay glycerin, và hoạt chất làm dịu da như allantoin, guaiazulene hay quaternium-1927, và thường là loại không có cồn.
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">3. Dưỡng ẩm</p>
      <div class="mb-3 pl-5">
        Bệnh nhân mụn trứng cá thường có tâm lý e ngại sử dụng dưỡng ẩm, nhưng đã có ít nhất một nghiên cứu cho thấy mụn trứng cá cải thiện chỉ với dưỡng ẩm da đúng cách. Chất dưỡng ẩm không chứa các thành phần sinh nhân mụn như isopropyl myristate, isopropyl palmitate, dầu dừa,…nên được lựa chọn. Bệnh nhân mụn trứng cá có tăng tiết bã nhờn nên tránh các chất dưỡng ẩm dạng dầu hoặc kem đặc mà nên dùng các chất dưỡng ẩm dạng kem lỏng, lotion, hoặc serum, hoạt động thông qua cơ chế hút ẩm như hyaluronic acid và chất tương tự heparan sulfate. Nếu da bệnh nhân quá bóng nhờn, có thể chỉ cần sử dụng kem chống nắng thay thế cho cả chất dưỡng ẩm.
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">4. Dược mỹ phẩm trong chăm sóc da mụn trứng cá</p>
      <p class="font-semibold mb-3 pl-5">a. Sản phẩm thoa giúp kiểm soát nhờn</p>
      <div class="mb-3 pl-8">
        Dù nhiều sản phẩm công bố là có hoạt tính ức chế tiết bã nhờn, nhưng chỉ có rất ít được chứng minh công hiệu. Một số chất đang được sử dụng như 
      </div>
      <div class="mb-3 pl-8">
        Muối kẽm gluconate hay PCA: tác động lên men 5-α-reductase hay hoạt động tuyến bã 
      </div>
      <div class="mb-3 pl-8">
        Nicotinamide/niacinamide: giảm tiết bã nhờn, được chứng mình qua nghiên cứu 4 tuần ở người Nhật 
      </div>
      <div class="mb-3 pl-8">
        Hiện tại chưa thấy khuyến cáo hay đồng thuận chung nào trong việc sử dụng các chất giảm tiết bã nhờn hàng ngày trong chăm sóc da mụn trứng cá.
      </div>
      <p class="font-semibold mb-3 pl-5">b. Sản phẩm thoa ly giải nhân mụn</p>
      <div class="mb-3 pl-8">
        Các hoạt chất có tính chất tiêu sừng thường được sử dụng trong dược mỹ phẩm chăm sóc da gồm: alpha hydroxy acids, salicylic acid, polyhydroxy acid, retinaldehyde, và retinol. 
      </div>
      <p class="font-semibold mb-3 pl-5">c. Sản phẩm thoa hỗ trợ giảm viêm</p>
      <div class="mb-3 pl-8">
        Một số chất kháng viêm cũng được đưa vào các sản phẩm chăm sóc da mụn trứng cá, như Nicotinamide 5% , 1%, triethyl citrate và ethyl linoleate. 
      </div>
      <p class="font-semibold mb-3 pl-5">d. Sản phẩm thoa hỗ trợ giảm vi khuẩn trên da</p>
      <div class="mb-3 pl-8">
        Một số hợp chất đã được nghiên cứu và ứng dụng lâm sàng là ethyl lactate, phytosphingosine, hoạt chất kháng bám dính của vi khuẩn (ABA), tinh dầu tràm trà, triclosane. Tuy nhiên, vẫn cần những nghiên cứu xa hơn về khả năng làm giảm số lượng P. acnes của các sản phẩm này.
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">5. Chống nắng</p>
      <div class="mb-3 pl-8">
        Khuyến cáo về chống nắng trong mụn trứng cá (guideline Singapore 2019)
      </div>
      <div class="mb-3 pl-8">
        Công dụng chính: chống nắng là rất quan trọng, đặc biệt ở những bệnh nhân điều trị retinoids, thuốc ngừa thai uống, hay bị tăng sắc tố sau viêm<br/>
        Khuyến cáo sử dụng kem chống nắng hàng ngày và thực hành các thói quen tránh nắng thích hợp 
      </div>
      <div class="mb-3 pl-8">
        Lựa chọn loại sản phẩm chống nắng không chứa dầu, được thiết kế riêng cho da mụn trứng cá
      </div>
      <p class="font-semibold text-lg mb-3 pl-3">6. Trang điểm</p>
      <div class="mb-3 pl-8">
        Bệnh nhân mụn trứng cá có nhu cầu trang điểm để che phủ các khuyết điểm trên da. Lựa chọn loại mỹ phẩm phù hợp với type da và tình trạng mụn là quan trọng để không làm nặng hơn mụn trứng cá, và cải thiện chất lượng cuộc sống bệnh nhân.
      </div>
      <p class="font-bold text-xl mb-3">II. Kết luận</p>
      <div class="mb-3 pl-8">
        Mụn trứng cá là tình trạng bệnh mạn tính, tái phát, thường gặp ở người trưởng thành. Da mụn là loại da nhạy cảm, và thường kèm tình trạng tăng tiết bã nhờn. Chăm sóc da hàng ngày đúng các bước, đúng thao tác, lựa chọn sản phẩm chăm sóc da phù hợp có vai trò quan trọng trong cải thiện bệnh, giảm tác dụng phụ điều trị, nâng cao chất lượng cuộc sống. Chăm sóc da tại cơ sở y tế đúng cách hỗ trợ và có tác dung hiệp đồng với các phương pháp điều trị dùng thuốc. 
      </div>
      <p class="text-xl mb-3">TÀI LIỆU THAM KHẢO</p>
      <ul class="mb-3 pl-8">
        <li class="list-decimal mb-2">
          Carolyn Goh, Carol Cheng, George Agak (2019), “Acne Vulgaris”, In: Fitzpatrick’s Dermatology 9th e, McGrawHill
        </li>
        <li class="list-decimal mb-2">
          Andrea L. Zaenglein and Diane M. Thiboutot (2018), ‘Acne Vulgaris”, In: Dermatology 4th e, Elsevier
        </li>
        <li class="list-decimal mb-2">
          Zaenglein et al, “Guidelines of care for the management of acne vulgaris”, j am acad Dermatol, 2016, volume 74, issue 5, pages 945–973.e33
        </li>
        <li class="list-decimal mb-2">
          OON, WONG, et al, „“Acne Management Guidelines by the Dermatological Society of Singapore, J Clin Aesthet Dermatol, 2019;12(7):34–50
        </li>
        <li class="list-decimal mb-2">
          Rodan, Katie et al. “Skincare Bootcamp: The Evolving Role of Skincare.” Plastic and reconstructive surgery. Global open vol. 4,12 Suppl Anatomy and Safety in Cosmetic Medicine: Cosmetic Bootcamp e1152. 14 Dec. 2016
        </li>
      </ul>
    `,
  },
  {
    id: 10,
    searchTag: "chăm sóc da thường cham soc da thuong",
    title: "Chăm sóc da thường",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "chăm sóc da",
    subTitle:
      "Đây là làn da đẹp với độ PH lý tưởng, hàng rào bảo vệ da khỏe, vì vậy mà da ít khi gặp các vấn đề da liễu ...",
    imageUrl: "/images/logo_kien_thuc/dathuong1.jpg",
    tagId: 2,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Chăm Sóc Da
        </span>
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dathuong1.jpg" alt="dathuong1" />
      </div>
      <div class="mb-5">
        Chúc mừng bạn nếu bạn sở hữu làn da thường! Đây là làn da đẹp với độ PH lý tưởng, hàng rào bảo vệ da khỏe, vì vậy mà da ít khi gặp các vấn đề da liễu. Không những vậy, da thường còn là làn da có độ ẩm tốt, mềm mại, mịn màng, lỗ chân lông nhỏ, ít gặp phải tình trạng mụn. Dưới đây là một số tips giúp bạn duy trì làn da thường luôn khỏe đẹp.
      </div>
      <ul class="mb-3 pl-8">
        <li class="mb-2">
          <span class="font-bold">1. Thoa kem chống nắng mỗi ngày trước khi ra ngoài.</span> Chống nắng là bước đơn giản nhất giúp bạn chống lại lão hóa từ bên ngoài. Đồng thời kem chống nắng cũng có thể giúp bạn ngăn ngừa ung thư da. Bạn nên chọn kem chống nắng phổ rộng, có khả năng bảo vệ tốt với chỉ số SPF 30 (hoặc cao hơn) và có khả năng chống nước.
        </li>
        <li class="mb-2">
          <span class="font-bold">2. KHÔNG hút thuốc. </span>Thuốc lá góp phần làm tăng tốc độ lão hóa da của bạn. Đồng thời, khói thuốc lá cũng làm chậm quá trình lành thương, dẫn đến vết thương lâu lành hơn so với những người không hút. Các nghiên cứu cho thấy hút thuốc làm trầm trọng thêm một số bệnh về da, bao gồm bệnh vẩy nến và viêm tuyến mồ hôi mủ.
        </li>
        <li class="mb-2">
          <span class="font-bold">3. Tự kiểm tra sức khỏe làn da.</span> Tự kiểm tra da có thể giúp bạn phát hiện sớm một số bệnh lý như nám da, đốm nâu,… thậm chí ung thư da khi mới khởi phát. Nếu bạn nhận thấy có vùng da khác thường so với các vùng da lân cận hoặc ngứa, chảy máu, khi đó bạn nên hẹn gặp bác sĩ da liễu.
        </li>
        <li class="mb-2">
          <span class="font-bold">4. Sử dụng các sản phẩm chăm sóc da phù hợp với nhu cầu làn da của bạn.</span> Da của bạn thuộc loại da nào - dầu, khô, bình thường, hỗn hợp hay nhạy cảm? Và tình trạng da hiện tại của bạn như thế nào? Sử dụng các sản phẩm có công thức phù hợp với nhu cầu của làn da, sẽ giúp bạn sở hữu làn da khỏe và đẹp nhất.
        </li>
        <li class="mb-2">
          <span class="font-bold">5. Không chà xát mạnh tay.</span> Nếu làn da bạn đổ mồ hôi nhiều hoặc bị mụn trứng cá nghiêm trọng, việc chà xát khi làm sạch da có vẻ là điều tự nhiên. Nếu bạn có quan điểm này, bạn nên BỎ ngay lập tức. Vì việc chà xát sẽ gây kích ứng da, có thể khiến mọi tình trạng da trở nên trầm trọng hơn, kể cả mụn trứng cá.
        </li>
        <li class="mb-5">
          <img src="/images/logo_kien_thuc/dathuong2.jpg" alt="dathuong2" />
        </li>
        <li class="mb-2">
          <span class="font-bold">6. Rửa mặt khi thức dậy trước, khi đi ngủ và sau khi đổ mồ hôi.</span> Rửa mặt khi thức dậy sẽ loại bỏ bụi bẩn và vi khuẩn bám trên mặt bạn khi ngủ. Trước khi đi ngủ, bạn nên tẩy trang và rửa sạch bụi bẩn, cặn trang điểm còn sót lại trên da. Bạn cũng nên rửa mặt bằng sữa rửa mặt dịu nhẹ ( không nên lạm dụng rửa nhiều lần trong ngày) hoặc nước ấm, hoặc nước lạnh sau khi tập luyện, đổ nhiều mồ hôi. 
        </li>
        <li class="mb-2">
          <span class="font-bold">7. Rửa mặt nhẹ nhàng.</span> Để nhẹ nhàng làm sạch khuôn mặt của bạn, hãy làm ướt nó bằng nước ấm. Sau đó thoa sữa rửa mặt dịu nhẹ, nhẹ nhàng thoa sữa rửa mặt theo chuyển động tròn bằng đầu ngón tay. Kết thúc bằng cách rửa sạch hoàn toàn sữa rửa mặt và nhẹ nhàng lau khô mặt bằng khăn sạch.
        </li>
        <li class="mb-2">
          <span class="font-bold">8. Tránh căng thẳng. </span>Thay vì stress căng thẳng, bạn hãy tìm những cách lành mạnh để kiểm soát căng thẳng, chúng sẽ giúp ích cho làn da của bạn. Một số bệnh lý như: bệnh vẩy nến và viêm da dị ứng (eczema), thường xuất hiện lần đầu tiên khi người bệnh cảm thấy thực sự căng thẳng. Căng thẳng cũng có thể gây bùng phát nhiều tình trạng da, bao gồm mụn trứng cá, chàm, bệnh vẩy nến, bệnh trứng cá đỏ, và bạch biến.
        </li>
        <li class="mb-2">
          <span class="font-bold">9. Hãy gặp bác sĩ da liễu nếu bạn có bất kỳ vấn đề nào về làn da của mình, </span> hoặc mong muốn cải thiện 1 vấn đề nào về làn da của mình. Khi nói đến làn da, các bác sĩ da liễu là những chuyên gia. Các bác sĩ có kinh nghiệm chẩn đoán và điều trị hàng ngàn bệnh về da khác nhau. Bên cạnh đó bác sĩ da liễu cũng có chuyên môn cần thiết để giúp mọi người trẻ hóa và chăm sóc làn da một cách an toàn.
        </li>
      </ul>
    `,
  },
  {
    id: 11,
    searchTag: "chăm sóc da dầu mụn cham soc da dau mun",
    title: "Chăm sóc da dầu mụn",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "chăm sóc da",
    subTitle:
      "Bên cạnh việc da dầu có thể làm tắc nghẽn lỗ chân lông và dẫn đến mụn trứng cá gia tăng, thì làn da dầu cũng có nhiều lợi ích ...",
    imageUrl: "/images/logo_kien_thuc/dadau1.jpg",
    tagId: 2,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Chăm Sóc Da
        </span>
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dadau1.jpg" alt="dadau1" />
      </div>
      <div class="mb-5">
        Bên cạnh việc da dầu có thể làm tắc nghẽn lỗ chân lông và dẫn đến mụn trứng cá gia tăng, thì làn da dầu cũng có nhiều lợi ích. Chúng giúp bảo vệ làn da, các nhà khoa học nhận thấy những người có làn da dầu thường sở hữu làn da dày và ít nếp nhăn hơn. Điều quan trọng là đạt được sự cân bằng giữa việc có quá nhiều dầu và duy trì độ ẩm tự nhiên cho làn da dầu của bạn. Để kiểm soát lượng dầu nhờn trên da, dưới đây là 10 lời khuyên NÊN và KHÔNG NÊN làm để chăm sóc làn da dầu mụn từ Bác sĩ Trà Mi như sau:
      </div>
      <ul class="mb-3 pl-8">
        <li class="mb-2">
          <span class="font-bold">1. NÊN</span> rửa mặt mỗi sáng, tối và sau khi tập thể dục, tránh chà xát mạnh tay gây kích ứng da.
        </li>
        <li class="mb-2">
          <span class="font-bold">2. NÊN</span> chọn các sản phẩm chăm sóc da “không chứa dầu” và “không gây mụn” trên bao bì để tránh làm tắc nghẽn lỗ chân lông hoặc sinh mụn trứng cá.
        </li>
        <li class="mb-2">
          <span class="font-bold">3. NÊN</span> sử dụng sữa rửa mặt tạo bọt nhẹ nhàng. Nhiều người cho rằng họ cần sử dụng sữa rửa mặt mạnh dành cho da dầu để làm khô da. Tuy nhiên, sử dụng sữa rửa mặt quá mạnh có thể gây kích ứng da và kích thích sản xuất dầu nhiều hơn. Thay vào đó, hãy tìm loại sữa rửa mặt dịu nhẹ.
        </li>
        <li class="mb-2">
          <span class="font-bold">4. KHÔNG</span> sử dụng chất tẩy rửa gốc dầu hoặc cồn. Những thứ này có thể gây kích ứng da của bạn.
        </li>
        <li class="mb-2">
          <span class="font-bold">5. NÊN</span> thoa kem dưỡng ẩm hàng ngày. Mặc dù bạn có làn da dầu nhưng việc thoa kem dưỡng ẩm để giữ ẩm cho da vẫn rất quan trọng. Để không gây bít tắc lỗ chân lông bạn nên ưu tiên chọn loại kem dưỡng ẩm có kết cấu mỏng nhẹ, thấm nhanh.
        </li>
        <li class="mb-2">
          <span class="font-bold">6. NÊN</span> bôi kem chống nắng khi ra ngoài trời. Kem chống nắng giúp ngăn ngừa tác hại của ánh nắng mặt trời có thể dẫn đến nếp nhăn, đốm đồi mồi và thậm chí là ung thư da. Để ngăn ngừa mụn trứng cá, hãy tìm loại kem chống nắng có chứa oxit kẽm và titan dioxide, đồng thời không sử dụng kem chống nắng có chứa hương liệu hoặc dầu.
        </li>
        <li class="mb-2">
          <span class="font-bold">7. NÊN,/span> chọn sản phẩm trang điểm không chứa dầu, gốc nước.
        </li>
        <li class="mb-2">
          <span class="font-bold">8. KHÔNG</span> đi ngủ với lớp trang điểm của bạn. Luôn tẩy sạch mọi lớp trang điểm trước khi đi ngủ.
        </li>
        <li class="mb-2">
          <span class="font-bold">9. NÊN</span> sử dụng giấy thấm suốt cả ngày. Nhẹ nhàng ấn tờ giấy lên mặt và để yên trong vài giây để thấm dầu. Đừng chà xát giấy lên mặt vì điều này sẽ làm dầu lan ra các khu vực khác.
        </li>
        <li class="mb-2">
          <span class="font-bold">10. KHÔNG</span> chạm vào mặt bạn suốt cả ngày. Mặc dù bạn rất muốn chạm vào mặt nhưng làm như vậy có thể làm lây lan bụi bẩn, dầu và vi khuẩn từ tay sang mặt. Chỉ chạm vào mặt khi bạn đang làm sạch, dưỡng ẩm hoặc thoa kem chống nắng hoặc trang điểm và trước tiên hãy đảm bảo tay bạn sạch sẽ.
        </li>
      </ul>
      <div class="mb-5">
        Làn da của mỗi người là khác nhau và không có phương pháp chăm sóc da nào “phù hợp cho tất cả”. Nếu bạn lo lắng về lượng dầu mà làn da mình tiết ra, hoặc nếu bạn đang đau đầu với mụn đầu đen hoặc mụn trứng cá, đừng chần chừ đến ngay bác sĩ da liễu để được thăm khám.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dadau2.jpg" alt="dadau2" />
      </div>
      <div class="mb-5 pl-3">
        <span class="font-bold">Kết Luận:</span> Da dầu mụn là làn da gặp phải vấn đề tăng tiết bã nhờn quá mức, làm cho bề mặt da thường xuyên bóng dầu, lỗ chân lông to và dễ bị nổi mụn,… Tuy nhiên, làn da dầu lại là làn da ít gặp phải vấn đề về lão hóa da.
        Để chăm sóc làn da dầu mụn, bạn cần có chế độ chăm sóc, nghỉ ngơi và tránh nắng phù hợp. Một số thành phần chăm sóc da có lợi cho làn da dầu mụn từ bước làm sạch sâu, cho đến dưỡng da như acid salicylic, zn, azelaic acid, ferulic acid, retinoids, benzol peroxide,…. Đây là những thành phần giúp kiểm soát dầu nhờn, kháng viêm, và kháng khuẩn. Bên cạnh đó nếu gặp phải tình trạng mụn trung bình, kéo dài, bạn nên đến các phòng khám da liễu để được bác sĩ thăm khám và điều trị kết hợp với các liệu pháp ánh sáng để nhanh chóng kiểm soát mụn và hạn chế sẹo rỗ, sẹo xấu sau mụn.
      </div>
    `,
  },
  {
    id: 12,
    searchTag:
      "thâm mụn nguyên nhân cách điều trị làm đẹp tham mun nguyen nhan cach dieu tri lam dep",
    title: "Mụn đi thâm ở lại, nguyên nhân & cách điều trị?",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Vết thâm mụn hình thành là kết quả của phản ứng viêm hoặc tổn thương da ...",
    imageUrl: "/images/logo_kien_thuc/lamdep9.png",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
      <p class="font-bold text-xl mb-3">1. Tại sao nặn mụn lại bị thâm?</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep9.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5 pl-3">
        Vết thâm mụn hình thành là kết quả của phản ứng viêm hoặc tổn thương da. Trong quá trình lành thương, do hiện tượng viêm cùng với tổn thương da do cào gãi, nặn mụn sẽ làm da dễ tăng sắc tố, làm xáo trộn sự cân bằng và sản sinh nhiều Melanin. Ngoài ra, khi bạn tiếp xúc nhiều với tia UV từ ánh nắng mặt trời sẽ làm vết thâm mụn tối màu hơn. Từ đó vùng tổn thương bị đen sậm lại, tạo thành vết thâm mụn kém thẩm mỹ, làm da kém mịn màng và không đều màu.
      </div>
      <p class="font-bold text-xl mb-3">2. Làm sao để hết thâm mụn?</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep10.jpg" alt="knowledge-detail" />
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Trước hết bạn phải điều trị mụn,</span> khi giảm thiểu mụn thì sẽ ngăn ngừa các vết thâm mụn mới
        </li>
        <li class="list-disc">
          <span class="font-bold">Khi bị mụn,</span> tránh cào gãi, sờ nắn hoặc tự nặn mụn, vì khi sờ hay nặn không đúng sẽ làm mụn bị viêm, dễ nhiễm trùng, da bị tổn thương sẽ làm thâm mụn khó điều trị hơn
        </li>
        <li class="list-disc">
          <span class="font-bold">Chống nắng thật kĩ: </span>sử dụng kem chống nắng có SPF cao và đội mũ, đeo khẩu trang khi tiếp xúc ánh nắng.
        </li>
        <li class="list-disc">
          <span class="font-bold">Ăn uống lành mạnh,</span> ăn nhiều trái cây, rau xanh, bổ sung thêm bằng viên uống vitamin C, L-cystein,…
        </li>
        <li class="list-disc">
          <span class="font-bold">Thuốc thoa tại chỗ: </span>sử dụng thuốc thoa có hoạt chất làm sáng da, ức chế hình thành sắc tố như vitamin C, azaleic acid, retinoid, kojic acid, arbutine, niaciamide, hydroquinone,…
        </li>
        <li class="list-disc">
          <span class="font-bold">Có thể kết hợp với các phương pháp khác</span> như peel da hóa học, laser sắc tố, mesotherapy,… nếu như thâm mụn dai dẳng, kém đáp ứng với thuốc thoa
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">3. Làm sao để hết mụn thâm tụ máu?</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">Đầu tiên tránh cào gãi, </span>sờ nắn hoặc tự nặn mụn, vì khi sờ hay nặn không đúng sẽ làm mụn bị viêm, dễ nhiễm trùng, làm tình trạng tụ máu nặng nề hơn
        </li>
        <li class="list-disc">
          <span class="font-bold">Cần giữ cho khu vực xung quanh mụn sạch</span> bằng cách rửa sạch vùng da ít nhất hai lần mỗi ngày, sử dụng chất tẩy rửa nhẹ hoặc xà phòng và nước sạch.
        </li>
        <li class="list-disc">
          <span class="font-bold">Có thể kết sử dụng một số loại thuốc thoa có hoạt tính kháng viêm:</span> acid benzoperoxide, retinoids thoa, kháng sinh thoa, lưu huỳnh,…
        </li>
        <li class="list-disc">
          <span class="font-bold">Tình trạng nặng có thể sử dụng thuốc uống</span> như kháng sinh, isotretinoin,… tuy nhiên đây là những thuốc kê đơn, cần bác sĩ thăm khám xác định tình trạng và chỉ định
        </li>
        <li class="list-disc">
         <span class="font-bold">Ngoài ra</span> tùy vào từng tình huống cụ thể có thể phải kết hợp rạch mủ, laser,…để hiệu quả đạt tối ưu
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">4. Kem gì trị thâm mụn tốt?</p>
      <div class="mb-5 pl-3">
        Sử dụng các loại kem trị thâm mụn luôn là lựa chọn của nhiều người đang có nhu cầu trị các vết thâm mụn. Tuy nhiên không phải sản phẩm trị thâm mụn nào cũng hiệu quả và phù hợp với da. Việc dùng sản phẩm không đúng cách, không thích hợp cho da còn khiến da dễ bị sạm đen hoặc nổi mụn nhiều hơn. Thuốc trị thâm mụn hay serum trị thâm thường chứa các hoạt chất làm trắng da, ức chế melanin, kích thích tăng sinh collagen làm giảm thâm mụn hiệu quả: vitamin C, azaleic acid, retinoid, kojic acid, arbutine, niaciamide, hydroquinone, AHA…. Đồng thời trong các sản phẩm trị thâm mụn ngoài khả năng loại bỏ nhanh chóng vết thâm còn giúp dưỡng ẩm và bảo vệ khỏi tình trạng khô da và các tác động gây lão hóa. Mỗi sản phẩm sẽ có những cơ chế điều trị thâm khác nhau, tùy vào thành phần có trong sản phẩm.
      </div>
      <div class="mb-5 pl-3">
        Lựa chọn những sản phẩm trị thâm có hoạt chất làm sáng da, có nguồn gốc xuất xứ rõ ràng, và tốt nhất nên được tư vấn bởi bác sĩ Da liễu
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep11.jpg" alt="knowledge-detail" />
      </div>
    `,
  },
  {
    id: 13,
    searchTag: "điều trị làm đẹp sẹo rỗ dieu tri lam dep seo ro",
    title: "Các phương pháp tiên tiến hiện nay trong điều trị sẹo rỗ",
    isOutstanding: true,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Sẹo rỗ là tên gọi chung của các loại sẹo lõm, chúng được hình thành do sự thiếu hụt collagen trong tiến trình lành thương ...",
    imageUrl: "/images/logo_kien_thuc/lamdep13.jpg",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
            <div class="mb-5 pl-3">
        Sẹo rỗ là tên gọi chung của các loại sẹo lõm, chúng được hình thành do sự thiếu hụt collagen trong tiến trình lành thương. Chúng ta có thể bị sẹo lõm sau mụn trứng cá, nốt, nang nhiều, mụn viêm lâu ngày không điều trị; sau chấn thương, cào gãi, nặn mụn hay các thương tổn trên da và sau thủy đậu hay một số bệnh lý da. 
      </div>
      <p class="font-bold text-xl mb-3">1. Phân loại sẹo lõm</p>
      <p class="mb-3">Sẹo lõm được chia làm 3 loại chính, mỗi loại có đặc điểm và độ sâu khác nhau. </p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep12.jpg" alt="knowledge-detail" />
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">1.1 Sẹo đáy nhọn: </span>là những vết sẹo hẹp, có đường ranh giới rõ ràng, hình dạng hình V, đường kính <2 mm, kéo dài sâu vào lớp hạ bì sâu hoặc thậm chí là mô dưới da. 
        </li>
        <li class="list-disc">
          <span class="font-bold">1.2 Sẹo đáy tròn: </span>có thể có đường kính lên đến ⩾5 mm. Chúng có hình dạng giống như một chiếc chảo hoặc nhấp nhô do sự liên kết của sợi lớp hạ bì với lớp dưới da. 
        </li>
        <li class="list-disc">
          <span class="font-bold">1.3 Sẹo Box đáy vuông: </span>là những vết sẹo lõm có đường kính lớn hơn (1–4 mm), hình dạng hình U, với các cạnh sắc nét, kéo dài 0.1–0.5 mm vào lớp hạ bì. Bề mặt của chúng lớn hơn so với sẹo đáy nhọn và không thuôn nhọn về một điểm ở đáy.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">2. Các phương pháp điều trị sẹo rỗ:</p>
      <div class="mb-3">
        Việc chọn lựa phương pháp điều trị phụ thuộc nhiều vào loại sẹo. Mỗi loại sẹo có phương pháp điều trị khác nhau. Trong đó, sẹo đáy nhọn là loại sẹo rất sâu, sâu vào lớp bì, khiến chúng khó cải thiện với các phương pháp tái tạo da thông thường. Thường một bệnh nhân có tồn tại nhiều loại sẹo cùng một lúc. 
      </div>
      <div class="mb-3">
        Có nhiều phương pháp điều trị có thể sử dụng để điều trị sẹo bao gồm laser tái tạo bề mặt, lăn kim, cắt đáy sẹo, mài mòn da, tái tạo da bằng hoá chất, tiêm chất làm đầy... Sự lựa chọn phương pháp điều trị thích hợp phụ thuộc vào loại sẹo và mức độ nghiêm trọng của sẹo lõm, cũng như mong đợi và ưu tiên của bệnh nhân.
      </div>
      <div class="mb-3">
        Phương pháp điều trị sẹo được sử dụng nhiều nhất hiện nay phải kể đến các loại laser tái tạo bề mặt. Các laser này cải thiện sẹo thông qua việc tạo ra các tổn thương nhỏ trên da và tác động nhiệt làm kích thích tăng sinh collagen và là đầy các sẹo lõm. Hai loại laser thường được sử dụng nhất là laser CO2 và laser Er:YAG.
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          <span class="font-bold">2.1 Lăn kim: </span>có tác dụng tương tự laser vi điểm trên da nhưng không có hiệu ứng nhiệt. Lựa chọn điều trị dành cho sẹo lõm đáy tròn hoặc đáy vuông nông. Dụng cụ lăn kim gồm một con lăn vô trùng mang nhiều kim, tạo ra nhiều vi lỗ trên da ở mức độ trung bì – nhú bì tùy theo độ dài kim. Kỹ thuật này tương đối an toàn cho tất cả loại da và ít nguy cơ tăng sắc tố da sau viêm. 
        </li>
        <li class="list-disc">
          <span class="font-bold">2.2 Laser và lăn kim: </span>có thể phối hợp với huyết tương giàu tiểu cầu (PRP) hay các yếu tố tăng trưởng khác giúp nâng cao hiệu quả điều trị.  
        </li>
        <li class="list-disc">
          <span class="font-bold">2.3 Lột da bằng hoá chất (Peel da sinh học): </span>cũng là một phương pháp tái tạo bề mặt, giúp tăng sinh collgen và cải thiện sẹo lõm. Trong đó, người ta sử dụng các loại hoá chất như  salicylic acid, glycolic acid, pyruvic acid, hoặc trichloroacetic acid… Lựa chọn hoá chất và nồng độ của hoá chất tái tạo da cần phụ thuộc đặc điểm của vùng da điều trị và mức độ nặng của sẹo. Do đó, việc thực hiện kỹ thuật lột da bằng hóa chất nên được thực hiện tại các cơ sở y tế để tránh nguy cơ tạo sẹo và giảm sắc tố da.
        </li>
       <li class="list-disc">
          <span class="font-bold">2.4 Siêu mài mòn da: </span>là một kỹ thuật tái tạo bề mặt để điều trị sẹo lõm. Trong đó người ta sử dụng tinh thể aluminum oxide bào mòn cơ học da tổn thương để kích thích tái tạo da mới. Microdermabrasion tác động trên da một cách nhẹ nhàng, chỉ loại bỏ lớp ngoài cùng của da, thúc đẩy quá trình bong vảy tự nhiên. Kỹ thuật này có thể thực hiện nhiều lần với khoảng cách ngắn, gây ít đau đớn, không cần gây tê và có thể thực hiện nhiều đợt. Tuy nhiên, có thể xuất hiện tác dụng phụ như vết bầm, cảm giác bỏng châm chích, nhạy cảm ánh sáng và đôi khi đau.
        </li>
        <li class="list-disc">
          <span class="font-bold">2.5 Tách đáy sẹo: </span>
          đây là kỹ thuật giúp giải phóng các xơ sợi kéo bề mặt da lõm xuống tạo sẹo. Với phương pháp này, các sẹo được cải thiện hiệu quả sau 1-3 lần điều trị, đặc biệt là các sẹo đáy tròn. Lợi ích của phương pháp mới này là dễ thực hiện, chi phí thấp, thời gian nghỉ dưỡng ngắn, phù hợp với nhiều loại da (I-IV), ít biến chứng đáng kể, cải thiện đáng kể và kéo dài trong thời gian ngắn mà không gây tổn thương bề mặt da. Nhược điểm là có thể gây đau trong một số trường hợp. Biến chứng như bầm và sưng thường xuất hiện trong 1-2 tuần. Tuy nhiên cần thực hiện đúng kĩ thuật bởi các bác sĩ da liễu có kinh nghiệm nhằm không gây ra các biến chứng làm tình trạng sẹo nặng hơn.<br/>Với những sẹo khó cải thiện hơn, bác sĩ có thể thực hiện kĩ thuật cắt bỏ sẹo và nâng, khâu mô hay ghép mô. Hoặc có thể sử dụng  các chất làm đầy, tiêm dưới sẹo nhằm làm đầy sẹo một cách nhanh chóng. 
        </li>
        <li class="list-disc">
          <span class="font-bold">2.6 Công nghệ RF Microneedling SYLFIRM X: </span>Đây là công nghệ được FDA Hoa Kỳ chứng nhận hiệu quả trong điều trị sẹo rỗ. Công nghệ RF Microneedling SYLFIRM X sử dụng những đầu kim siêu nhỏ, có chứa sóng điện từ tạo ra những tổn thương trên da một cách có kiểm soát, kích thích tiến trình lành thương, tái tạo và sửa chữa làn da, tăng sinh collagen và sợi đàn hồi. Từ đó mang đến hiệu quả vượt trội trong điều trị sẹo rỗ, sẹo sau mụn, trẻ hóa da, nâng cơ, giảm nhăn, trị nám và làm trắng sáng da. 
        </li>
      </ul>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep13.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lamdep14.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">3. Kết luận:</p>
      <div class="mb-5">
        Có nhiều phương pháp điều trị sẹo rỗ được phát triển và mỗi phương pháp đều đóng vai trò khác nhau trong việc điều trị sẹo trứng cá. Vì nhiều loại sẹo có thể xuất hiện trên cùng một bệnh nhân, việc kết hợp các phương pháp khác nhau là quan trọng để đạt được hiệu quả điều trị tốt nhất. Hiện nay, không có phương pháp nào có thể chữa trị hoàn toàn sẹo rỗ do mụn trứng cá để lại. Phương pháp tốt nhất để ngăn chặn sẹo là điều trị mụn trứng cá kịp thời để giảm thiểu sự lan rộng và thời gian viêm nhiễm. Và khi có sẹo, bạn nên đến khám, tư và điều trị với bác sĩ da liễu để giúp sẹo có thể cải thiện một cách hiệu quả và an toàn.
      </div>
    `,
  },
  {
    id: 14,
    searchTag:
      "bệnh lý da điều trị bớt đen bẩm sinh benh ly da dieu tri bot den bam sinh",
    title: "Bớt đen bẩm sinh có thể điều trị khỏi?",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Bớt đen bẩm sinh trong y khoa được biết đến với tên gọi bớt sắc tố ...",
    imageUrl: "/images/logo_kien_thuc/botden1.jpg",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-3">
        Bớt đen bẩm sinh trong y khoa được biết đến với tên gọi bớt sắc tố. Bớt sắc tố là những tổn thương tăng sắc tố xuất hiện từ lúc mới sinh hoặc những năm đầu đời, với tần suất mắc phải khoảng 1/10,000 người, gây nhiều ảnh hưởng đến tâm lý, sự tự ti, mặc cảm và trở ngại trong giao tiếp cho người mắc phải. Nếu như trước đây bớt sắc tố thường được quan niệm là không thể điều trị khỏi thì hiện nay với sự phát triển của khoa học công nghệ, bớt sắc tố đã có thể được điều trị hiệu quả và an toàn bằng công nghệ laser. Đây là kỹ thuật ít xâm lấn, không cần thời gian nghỉ dưỡng sau điều trị và không để lại sẹo như điều trị bằng phẫu thuật. Tuy nhiên để đạt được hiệu quả, người bệnh cần được thăm khám kỹ lưỡng bởi bác sĩ chuyên khoa để chẩn đoán chính xác dạng tổn thương tăng sắc tố, từ đó chọn lựa phương pháp điều trị và chăm sóc phù hợp.
      </div>
      <p class="font-bold text-xl mb-3">1. Phân loại bớt sắc tố</p>
      <div class="mb-3 pl-5">
        Bớt sắc tố là các tổn thương lành tính, được phân thành nhiều nhóm với lâm sàng đa dạng cùng sinh bệnh học phức tạp. Trong đó có thể kể đến như các bớt sắc tố bẩm sinh, bớt sắc tố phân phối theo cấu trúc đặc biệt của cơ thể, bớt sắc tố do tăng tế bào hắc tố ở lớp bì. Thông thường bớt sắc tố xuất hiện đơn độc hoặc số lượng ít, kích thước nhỏ, trong những trường hợp bớt có số lượng nhiều và kích thước lớn, có thể gợi ý một số tình trạng bệnh lý nghiêm trọng hơn, đòi hỏi sự thăm khám toàn diện. Hiệu quả điều trị bằng laser của mỗi loại bớt sắc tố là khác nhau. Một số dạng bớt sắc tố thường gặp có thể điều trị hiệu quả bằng laser bao gồm bớt Ota, dát cà phê sữa và bớt sắc tố bẩm sinh.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/botden1.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">Cơ chế điều trị bớt sắc tố bằng laser</span><br/>
        Nhờ vào cơ chế phân huỷ quang nhiệt chọn lọc, tia laser có thể tác động chọn lọc lên các hạt sắc tố ở lớp sâu trong da, làm vỡ các hạt sắc tố mà không gây tổn thương cho vùng da bình thường xung quanh. Do đó phương pháp điều trị bằng laser rất hiệu quả và an toàn, ít tác dụng phụ và không để lại sẹo. Với những bớt sắc tố phẳng như bớt Ota hoặc dát cà phê sữa, laser được lựa chọn là các loại laser không xâm lấn như laser Q-switched hoặc laser picosecond. Trong khi với những bớt sắc tố đậm màu và thường nổi gồ trên bề mặt da như bớt sắc tố bẩm sinh, sự phối hợp giữa laser xâm lấn CO2 hoặc Erbium và laser không xâm lấn sẽ mang lại hiệu quả điều trị tốt hơn. 
      </div>
      <p class="font-bold text-xl mb-3">2. Hiệu quả của điều trị bớt sắc tố bằng laser</p>
      <div class="mb-3 pl-5">
        Tuỳ vào dạng bớt sắc tố cũng như các đặc điểm của bớt như độ nông sâu, màu sắc, kích thước mà số lần điều trị và hiệu quả điều trị sẽ thay đổi. Thông thường một liệu trình điều trị bớt sắc tố bằng laser được thực hiện từ 3 lần trở lên, thời gian giữa hai lần cách nhau 1 đến 2 tháng. 
      </div>
      <p class="font-bold text-xl mb-3">3. Tác dụng phụ</p>
      <div class="mb-3 pl-5">
        Các tác dụng phụ do điều trị bằng laser thường nhẹ và thoáng qua. Một số tác dụng phụ thường gặp như đau rát, da đỏ, sưng nề sau điều trị có thể tự khỏi sau vài giờ đến vài ngày. Tăng giảm sắc tố có thể gặp ở loại da sậm màu, trong khi hình thành sẹo ít gặp hơn.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/botden2.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">4. Chăm sóc sau điều trị</p>
      <div class="mb-3 pl-5">
        Vì laser là kỹ thuật ít xâm lấn, rất an toàn khi được thực hiện bởi bác sĩ chuyên khoa, quá trình chăm sóc sau điều trị tương đối đơn giản. Người bệnh có thể sinh hoạt bình thường ngay sau khi điều trị. Tại nhà, cần lưu ý chăm sóc da như chống nhiễm trùng, dưỡng ẩm và tránh nắng để da phục hồi nhanh và tránh được các tác dụng phụ như kích ứng, tăng sắc tố sau viêm hoặc để lại sẹo. 
      </div>
      <p class="font-bold text-xl mb-3">5. Kết luận</p>
      <div class="mb-3 pl-5">
        Bớt sắc tố nên được thăm khám và điều trị sớm để đạt được hiệu quả, giúp giảm thiểu gánh nặng tâm lý và những cản trở đến giao tiếp xã hội của người mắc phải. Vì sự đa dạng trong biểu hiện và sinh bệnh học của các loại bớt sắc tố, việc điều trị chỉ đạt được hiệu quả và an toàn khi bạn được thăm khám và điều trị bởi các bác sĩ chuyên khoa giàu kinh nghiệm tại những cơ sở khám chữa bệnh uy tín. 
      </div>
    `,
  },
  {
    id: 15,
    searchTag: "bệnh lý da corticoid benh ly da corticoid",
    title: "Lạm dụng Corticoid gây ra tác hại khôn lường đối với làn da!",
    isOutstanding: true,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Trong quá trình thực hành lâm sàng của các bác sĩ Da Liễu việc đối mặt với các tình huống biến chứng ...",
    imageUrl: "/images/logo_kien_thuc/corticoid1.jpg",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-5 text-right">
        BS.CKII. Nguyễn Lê Trà Mi
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/corticoid1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3 capitalize">1. Mở đầu</p>
      <div class="mb-3 pl-3">
        Trong quá trình thực hành lâm sàng của các bác sĩ Da Liễu việc đối mặt với các tình huống biến chứng xảy ra do thuốc thoa chứa corticoid diễn ra rất thường xuyên và là một vấn đề khó giải quyết, cần phải phục hồi trong một thời gian lâu dài và phối hợp nhiều phương thức điều trị. Trên thực tế thuốc thoa chứa corticoid là một vũ khí quan trọng trong việc điều trị các bệnh lý về da, nhưng về cơ bản đây sẽ là con dao hai lưỡi nếu chúng ta sử dụng không đúng cách, sẽ khiến hàng rào bảo vệ da trở nên suy yếu trầm trọng nếu kéo dài. Đặc biệt tình trạng này diễn ra tương đối phổ biến ở Viêt Nam khi chưa quản lý chặt chẽ các thuốc thoa và mỹ phẩm chứa corticoid, khiến người dân sử dụng một cách bừa bãi, từ đó để lại các di chứng như teo da, giãn mạch, phát ban mụn trứng cá,…
      </div>
      <div class="mb-3 pl-3">
        Corticosteroid có tác dụng chống viêm, ức chế miễn dịch, chống tăng sinh và co mạch. Nhiều tác động trong số này được điều hòa bởi thụ thể glucocorticoid có trong nhân tế bào, từ đó điều khiển quá trình phiên mã protein nên được gọi là cơ chế trong gen của corticoid. Ngoài ra, các cơ chế ngoài gen đã được đề xuất để giải thích một số tác dụng tức thời mà cơ chế thụ thể glucocorticoid cổ điển không thể giải thích được. 
      </div>
      <p class="font-bold text-xl mb-3 capitalize">2. LẠM DỤNG CORTICOID TRONG LĨNH VỰC THẨM MỸ</p>
      <div class="mb-3 pl-3">
        Việc sử dụng và lạm dụng không đúng cách corticoid dạng thoa hiện nay dẫn đến ngày càng xuất hiện nhiều các loại kem chứa thành phần corticoid đóng vai trò như một mỹ phẩm làm trắng da được giới thiệu bắt nguồn từ người thân, bạn bè, hàng xóm, các beauty blogger, người bán hàng online,… Tình trạng nghiện và lạm dụng kem corticoid này đặc biệt là trên vùng mặt đã dẫn đến tình trạng “viêm da do corticoid”. Hiệu quả nhanh chóng, rẻ tiền, dễ dàng có được, thiếu hiểu biết về tác dụng phụ, tiếp thị không phù hợp và thái độ của xã hội đối với màu da sáng là một số lý do khiến bệnh nhân (chủ yếu là nữ) bắt đầu sử dụng corticoid dưới dạng kem mỹ phẩm. Khuôn mặt bị tổn thương do corticoid thực sự rất khó điều trị phục hồi, do đó cần có các biện pháp ngăn chặn lạm dụng nó làm kem mỹ phẩm. Cung cấp những thông tin đúng đắn về corticoid cần được phổ biến ở cấp độ cá nhân cũng như lan tỏa trong cộng đồng bằng cách sử dụng tất cả các nguồn lực sẵn có để ngăn chặn việc lạm dụng nó làm kem mỹ phẩm. Cần đảm bảo corticoid chỉ được kê đơn phù hợp bởi các bác sĩ chuyên khoa được ủy quyền. 
      </div>
      <div class="mb-3 pl-3">
        Ngoài ra việc bôi lượng lớn và kéo dài vượt quá khuyến cáo trong một số tình trạng bệnh lý cũng là một trong những vấn đề đáng quan tâm, dẫn đến tình trạng lệ thuộc corticoid. Cần phải tư vấn và hướng dẫn chi tiết về cách sử dụng cho các đối tượng, hẹn tái khám theo dõi trong một khoảng thời gian phù hợp để có thể điều chỉnh thuốc thoa corticoid một cách hợp lý, phòng tránh xảy ra các tác dụng phụ không mong muốn.
      </div>
      <p class="font-bold text-xl mb-3 capitalize">3. TÁC DỤNG PHỤ CỦA THUỐC THOA CORTICOID</p>
      <div class="mb-3 pl-3">
        Tình trạng tổn thương da mặt do thuốc thoa corticoid (Topical Steroid Damaged/ Dependent Face - TSDF) chủ yếu gây ra bởi việc sử dụng sai chỉ định và liều lượng thuốc thoa. Đó là tình trạng lạm dụng corticoid trên mặt đối với da bị bệnh (ví dụ: nám, mụn trứng cá, v.v.) hoặc làn da bình thường (như kem làm trắng da), từ đó xuất hiện các tổn thương như phát ban dạng mụn, sẩn hồng ban, mụn mủ, viêm da quanh miệng, da khô, giãn mao mạch, các đặc điểm giống trứng cá đỏ, tăng sắc tố, giảm sắc tố, nhạy cảm với ánh sáng hoặc viêm da tiếp xúc dị ứng. Sau đó nghi nhận ra tác hại, các đối tượng sẽ có xu hướng ngưng dùng các sản phẩm chưa corticoid, sẽ dẫn đến hiện tượng rebound. Da mặt sẽ xuất hiện hồng ban, theo sau đó là hiện tượng bong vảy trong khoảng 2 tuần. Cơn bùng phát này sẽ hết nhưng có thể xuất hiện trở lại nếu bệnh nhân không tiếp tục sử dụng thuốc thoa chứ corticoid nữa (hiện tượng dội ngược). Hiện tượng này đôi khi xảy ra ở một khu vực rộng hơn so với vị trí thoa ban đầu hoặc thậm chí ở các vị trí ở xa với các triệu chứng tương tự như tình trạng viêm da. Tuy nhiên, đặc điểm lâm sàng chính và dấu hiệu đặc trưng của TSDF là hồng ban lan tỏa, biểu hiện ban đầu được ghi nhận là hội chứng mặt đỏ (red face syndrome). 
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/corticoid2.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/corticoid3.jpg" alt="knowledge-detail" class="w-[300px]"/>
      </div>
      <div class="mb-3 pl-3">
        Các tác dụng phụ hệ thống tương tự với việc dung corticoid đường toàn thân nhưng nhìn chung hiếm khi xảy ra và ít nghiêm trọng hơn. Sự xuất hiện tăng nhãn áp khi thoa corticoid xung quanh mắt nhìn chung khá hiếm gặp nhưng gây ra những hậu quả nghiêm trọng, thậm chí dẫn đến mù lòa, theo như nghiên cứu sự hấp thu corticoid ở vùng mí mắt lớn hơn gấp 300 lần so với những vị trí khác trên cơ thể. Về các vấn đề nội tiết, có thể gây giảm corticol máu buổi sáng, hội chứng Cushing, trong đó cơn suy thượng thận cấp tuy hiếm gặp nhưng có thể gây tử vong. Ngoài ra thoa corticoid loại mạnh - rất mạnh trong thời gian dài có thể ảnh hưởng đến sự tăng trưởng của trẻ nhỏ. Chậm phát triển và dậy thì muộn được thấy ở trẻ em, đặc biệt là những trẻ bị viêm da cơ địa và được điều trị thuốc thoa corticoid trong thời gian dài. Nguyên nhân là do nồng độ hormone tăng trưởng (GH) và hormone tuyến giáp thấp là kết quả của sự ức chếchức năng vùng hạ đồi và tuyến yên do corticoid. 
      </div>
      <p class="font-bold text-xl mb-3 capitalize">4. QUẢN LÝ VÀ ĐIỀU TRỊ TÁC DỤNG PHỤ DO CORTICOID</p>
      <p class="font-bold text-lg mb-3 pl-3">4.1 Một số nguyên tắc chung khi dùng corticoid</p>
      <div class="mb-3 pl-5">
        <span class="font-bold">1. Các khu vực có lớp sừng dày, </span>ví dụ như lòng bàn tay và lòng bàn chân, cần các chế phẩm có hiệu lực cao hơn , trong khi thuốc bôi corticoid có hiệu lực thấp hơn được ưu tiên sử dụng cho những vùng có lớp sừng mỏng, ví dụ như các mặt, bìu và nếp kẽ. Vì những khu vực này có thể có sự gia tăng sự xâm nhập của thuốc qua da và do đó làm tăng nguy cơ mắc các ADR.
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">2. Corticosteroid </span>hiệu lực từ nhẹ đến trung bình có thể được sử dụng cho các bệnh lý có khả năng đáp ứng cao; những tình trạng dai dặng kém đáp ứng cần phải được điều trị bằng corticosteroid hiệu lực cao hơn.
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">3. Một cân nhắc khác khi lựa chọn corticosteroid tại chỗ</span> là phạm vi diện tích bề mặt của da liên quan. Tác dụng phụ toàn thân của thuốc có thể xảy ra nếu điều trị trên một diện tích rộng.
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">4. Sử dụng băng kín có thể tăng tính thấm lên gấp 10 lần.</span> Việc sử dụng phương tiện này nhìn chung đã giảm do hiện đã có sẵn các loại corticosteroid tại chỗ cực mạnh.
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">5. Mức độ hấp thụ qua da cũng thay đổi theo tình trạng bệnh,</span> ví dụ: trong viêm da dị ứng, có sự gia tăng hấp thu corticosteroid tại chỗ qua lớp biểu bì bị khiếm khuyết.     
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">6. Nên tránh sử dụng corticosteroid </span>tại chỗ trên vùng da bị loét hoặc teo hoặc nếu có bệnh da liễu nhiễm trùng.
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">7. Nếu nghi ngờ có phản ứng phụ toàn thân của thuốc,</span> thì nên chỉ định các xét nghiệm liên quan để xác định.
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">Nguyên tắc để kiếm soát tác dụng phụ</span> khi sử dụng thuốc thoa corticoid: Một khi đã có thể kiểm soát bệnh bằng corticoid hoạt lực mạnh, thì nên tiếp tục dùng với các loại có hoạt lực yếu hơn, sau đó giảm dần tần suất sử dụng, thoa cách ngày hoặc sử dụng vào cuối tuần. Đặc biệt cần lưu ý ở các đối tượng trẻ em và người lớn tuổi ở các vùng da như bìu, mặt, nếp hoặc khu vực quanh mắt.
      </div>
      <div class="mb-3 pl-5">
        <span class="font-bold">Thời gian điều trị phụ thuộc vào độ mạnh của corticosteroid</span> và tình trạng da đang được điều trị. Nhìn chung, corticosteroid tại chỗ có hiệu lực rất mạnh nên được sử dụng không quá ba tuần trong một đợt. Corticosteroid hiệu lực cao và trung bình nên được sử dụng không quá 12 tuần. Đối với các phương pháp điều trị cần kéo dài thời gian hơn, một loại corticosteroid mạnh có thể được sử dụng không liên tục hoặc chuyển dần sang một loại corticosteroid nhẹ hơn để kiểm soát liên tục. Các tổn thương trên mặt, háng và nếp gấp da có thể được dùng trong khoảng thời gian từ một đến hai tuần. 
      </div>
      <p class="font-bold text-lg mb-3 pl-3">4.2 Điều chỉnh thuốc để tránh hiện tượng bùng phát</p>
      <div class="mb-3 pl-5">
        Tình trạng viêm da do thuốc thoa chứa corticoid là một trong những thách thức điều trị khó khăn nhất đối với bác sĩ da liễu. Hàng rào bảo vệ da bị tổn thương khiến bệnh nhân không dung nạp với bất kỳ điều trị tại chỗ nào. Các đối tượng này cần phải được hỗ trợ tâm lý, tư vấn cần được thực hiện liên quan đến các tác động xấu của thuốc thoa chứa corticoid cũng như việc sử dụng quá mức và lạm dụng nó. Bệnh nhân cũng phải được thông báo rằng khi ngừng sử dụng, tình trạng có thể xấu đi lúc đầu nhưng sẽ cải thiện sau đó. Các loại mỹ phẩm, xà phòng và chất làm mềm có chứa axit glycolic, axit lactic nên tránh trong thời gian bị bùng phát, chỉ rửa mặt bằng nước ấm.
      </div>
      <div class="mb-3 pl-5">
        Mặc dù việc ngừng thuốc thoa corticoid là điều cần thiết, nhưng có thể dẫn đến hiện tượng bùng phát (rebound) dẫn đến tình trạng viêm da trở nên nặng nề hơn. Chuyển từ từ sang các nhóm thuốc thoa corticoid yếu hơn trước khi ngưng hẳn. Tuy nhiên một số ý kiến lại ủng hộ việc ngừng thuốc thoa đột ngột hoàn toàn ngay khi bắt đầu để ngăn ngừa tổn thương thêm cho da mặt. Thuốc ức chế calcineurin cũng có thể được sử dụng làm liệu pháp thay thế. Tuy nhiên, quan sát thấy rằng nhiều bệnh nhân phàn nàn về cảm giác nóng rát khi sử dụng thuốc. 
      </div>
      <p class="font-bold text-lg mb-3 pl-3">4.3 Chăm sóc da phù hợp - phục hồi hàng rào bảo vệ da</p>
      <div class="mb-3 pl-5">
        Thuốc thoa corticoid tại chỗ có thể dẫn đến những biến đổi trong hàng rào biểu bì được quan sát thấy với sự giảm hình thành các phiến lipid và quá trình phục hồi hàng rào bị trì trệ. Làn da bị nhiễm corticoid được xếp vào da đang có tình trạng nhạy cảm với các triệu chứng ngứa rát, bong tróc, châm chích,… Chính vì vậy việc ưu tiên lựa chọn các sản phẩm dịu nhẹ có tác dụng phục hồi hàng rào bảo vệ da, đồng thời tránh các chất dễ gây kích ứng (retinol, BHA,...) trong giai đoạn này là hết sức cần thiết. Một số loại acid béo bão hòa có khả năng cấp ẩm tốt cho da như ceramide, các chất chống oxy hóa như tocopherol được khuyến cáo sử dụng. 
      </div>
      <p class="font-bold text-lg mb-3 pl-3">4.4 Điều trị một số tác dụng phụ hay gặp</p>
      <div class="font-bold mb-3 pl-5">
        a) Giãn mạch:
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc mb-2">
          <span class="font-bold">Tranexamic acid tiêm trong sáng thương</span> cũng là một lựa chọn để điều trị tình trạng giãn mao mạch bởi hoạt chất này hoạt động như một chất ức chế plasmin, ngăn chặn sự hình thành mạch máu bằng cách ức chế hoạt động của plasmin, đồng thời làm giảm VEGF và endothelin - là một chất co mạch mạnh. 
        </li>
        <li class="list-disc mb-2">
          <span class="font-bold">PDL</span> cũng là một phương pháp điều trị hiệu quả cao cho các tổn thương mạch máu. 
        </li>
        <li class="list-disc mb-2">
          <span class="font-bold">IPL </span>có thể nhắm vào thể màu hemoglobin cực kỳ hiệu quả để giảm tình trạng giãn mạch. 
        </li>
        <li class="list-disc mb-2">
          <span class="font-bold">Các laser khác có thể được sử dụng</span> là KTP 532 nm và Laser Nd:YAG xung dài 1064 nm có thể thâm nhập sâu hơn PDL với khả năng phá hủy mô cao hơn
        </li>
      </ul>
      <div class="font-bold mb-3 pl-5">
        b) Điều trị phát ban mụn trứng cá
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc mb-2">
          <span class="font-bold">Điều trị trong những tình huống này nên tiếp tục dùng thuốc trị mụn tại chỗ</span> và toàn thân phù hợp với mức độ nghiêm trọng của mụn. Retinoids tại chỗ nên được sử dụng một cách thận trọng vì chúng có thể gây kích ứng thêm cho vùng da mặt bị viêm đỏ do ngừng sử dụng steroid. 
        </li>
        <li class="list-disc mb-2">
         <span class="font-bold">Peel da với sự kết hợp axit salicylic-mandelic trong nền gel </span>là một quy trình hữu hiệu khác trong các trường hợp kháng thuốc. Bệnh nhân nên được bôi kem chống nắng trước khi thực hiện peel vì nhạy cảm với ánh sáng sẽ thường gặp ở những bệnh nhân lạm dụng corticoid. Khoảng thời gian giữa những lần peel nên ít nhất 3–4 tuần để có thể giúp da hồi phục hoàn toàn giữa các lần peel
      </ul>
      <div class="font-bold mb-3 pl-5">
        c) Điều trị teo da - rạn da
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc mb-2">
          <span class="font-bold">Kết hợp các chất tương tự vitamin D </span>có thể làm giảm tỷ lệ teo da do corticoid, chúng hoạt động dựa trên cơ chế khôi phục chức năng hàng rào thượng bì bị suy giảm khi sử dụng corticosteroid. 
        </li>
        <li class="list-disc mb-2">
          <span class="font-bold">Ngoài ra, tretinoin tại chỗ có thể được kết hợp với TCS để ngăn ngừa teo da</span> do sử dụng corticosteroid tại chỗ trong thời gian dài mà không làm giảm tác dụng chống viêm của chúng
        </li>
        <li class="list-disc mb-2">
          <span class="font-bold">Xét về tình trạng rạn da, trên thực tế có thể được coi </span>là giai đoạn tiến triển của teo da do corticoid, có hai dạng: Giai đoạn cấp tính (striae rubrae) được đặc trưng bởi các tổn thương ban đầu ban đỏ và căng, vuông góc với hướng căng của da. Trong khi giai đoạn mãn tính (striae albae) được phân loại khi sang thương mờ dần và có vẻ teo, nhăn nheo và giảm sắc tố. 
        </li>
        <li class="list-disc mb-2">
          <span class="font-bold">Trong giai đoạn đầu, retinoids tại chỗ </span>như tretinoin 0,1% đã được sử dụng [28]. Ở giai đoạn rạn da mạn tính sau này, điều trị thủ thuật có thể giúp ích một phần. Peel da hóa học cũng được xem là một phương pháp hữu hiệu
        </li>
        <li class="list-disc mb-2">
          <span class="font-bold">Liệu pháp laser cũng đã được ứng dụng trong lĩnh vực này, </span>ựa chọn các loại laser khác nhau tùy thuộc vào sự xuất hiện và giai đoạn của vết rạn da. PDL với bước sóng 585 nm có hiệu quả vừa phải trong điều trị chứng rạn da ở giai đoạn sớm. Laser excimer 308 nm đã được sử dụng để điều trị rạn da trắng. IPL và laser CO2 fractional cũng đem lại hiệu quả trung bình với tác dụng phụ tối thiểu. 
        </li>
      </ul>
      <div class="font-bold mb-3 pl-5">
        d) Điều trị tình trạng nhiễm trùng
      </div>
      <div class="mb-3 pl-12">
        Điều trị khi có các dấu hiệu bội nhiễm vi khuẩn, nấm, herpes, demodex trên vùng da sử dụng thuốc thoa corticoid trong một thời dài.
      </div>
      <div class="font-bold mb-3 pl-5">
        e) Điều trị rậm lông
      </div>
      <div class="mb-3 pl-12">
        Ở hầu hết các bệnh nhân, tình trạng này sẽ thoái lui nó sau khi ngừng sử dụng steroid. Ở những bệnh nhân bị rậm lông dai dẳng và rõ rệt, tẩy lông bằng laser được xem là một lựa chọn khả thi. Nhiều loại máy năng lượng cao khác nhau đã được sử dụng như laser diode (850 nm), laser Nd:YAG (1064 nm) và IPL.
      </div>
      <div class="font-bold mb-3 pl-5">
        f) Điều trị mất sắc tố
      </div>
      <div class="mb-3 pl-12">
        Việc điều trị mất sắc tố nhìn chung tương đối khó khăn, cần nhiều thời gian và cũng vẫn còn chưa có nhiều dữ liệu nghiên cứu về việc khắc phục tình trạng này do corticoid gây ra. Điều trị giảm-mất sắc tố có thể sử dụng thuốc thoa tacrolimus, thuốc thoa chứa vitamin D, quang trị liệu nếu diện tích lớn, laser… Và quan trọng là chống nắng kĩ vùng sang thương.
      </div>
      <p class="font-bold text-xl mb-3 capitalize">5. KẾT LUẬN</p>
      <div class="mb-3 pl-3">
        Cho đến hiện tại việc phục hồi và điều trị các di chứng do việc lạm dụng thuốc thoa chứa corticoid vẫn còn là một thách thức đối với các bác sĩ Da Liễu. Đây là một quá trình dài, cần phối hợp nhiều biện pháp khác nhau với trọng tâm vẫn là phục hồi hàng rào bảo vệ da bị suy yếu. Bên cạnh đó, với sự phát triển của truyền thông giáo dục sức khỏe, việc phòng tránh các trường hợp sử dụng sản phẩm không rõ nguồn gốc chứa corticoid là hết sức cần thiết. Đồng thời cần nâng cao trình độ chuyên môn và khả năng tư vấn sử dụng thuốc thoa trong quá trình điều trị các bệnh lý về da của đội ngũ bác sĩ, sẽ góp phần hạn chế tình trạng sử dụng sai và kéo dài các chế phẩm corticoid.
      </div>
    `,
  },
  {
    id: 16,
    searchTag: "botox xóa nhan trẻ hóa da botox xoa nhan tre hoa da",
    title: "Bác sĩ Trà Mi giải đáp thắc mắc về Botox xóa nhăn, trẻ hóa da",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Thời gian tác dụng cho một lần tiêm Botox thẩm mỹ kéo dài hiệu quả từ 3-6 tháng ...",
    imageUrl: "/images/logo_bai_bao/hinh1.png",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_bai_bao/hinh1.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình: Bác sĩ Trà Mi tư vấn cặn kẽ cho khách hàng trước khi điều trị botox
      </div>
      <p class="font-bold text-xl mb-3">1. Tiêm botox giữ được bao lâu?</p>
      <div class="mb-5 pl-3">
        Thời gian tác dụng cho một lần tiêm Botox thẩm mỹ kéo dài hiệu quả từ 3-6 tháng. Tuy nhiên thời gian này có thể khác nhau tùy thuộc vào các yếu tố như: độ tuổi; giới tính; khối lượng cơ; kỹ thuật tiêm; nồng độ chất tiêm; thể tích tiêm; vị trí tiêm.
      </div>
      <p class="font-bold text-xl mb-3">2. Tiêm botox bao lâu thì gọn hàm?</p>
      <div class="mb-5 pl-3">
        Hiệu quả thu gọn hàm của BOTOX thường bắt đầu xuất hiện trong vòng vài ngày sau khi tiêm. Tuy nhiên, hiệu quả đầy đủ thường chỉ xuất hiện một cách rõ rệt sau khoảng 2 tuần kể từ khi tiến hành điều trị. Do đó, khách hàng không nên quá nôn nóng tìm phương pháp điều trị khác vì cần thời gian để botox có hiệu quả tối ưu.
      </div>
      <p class="font-bold text-xl mb-3">3. Có nên tiêm botox xóa nhăn?</p>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/botox1.jpg" alt="botox" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình minh họa tiêm botox xóa nhăn đuôi mắt
      </div>
      <div class="mb-3 pl-3">
        Botox sử dụng dạng độc tố botulinum để tạm thời làm tê liệt hoặc thư giãn hoạt động của cơ và là một lựa chọn tốt cho điều trị các nếp nhăn động. Nó có thể giúp làm mờ nếp nhăn và phục hồi vẻ ngoài trẻ trung cho khách hàng.
      </div>
      <div class="mb-3 pl-3">
        Một số chỉ định tiêm botox rất hiệu quả như  giảm vết chân chim ở đuôi mắt; nếp nhăn trên trán; đường nhăn giữa lông mày.
      </div>
      <div class="mb-3 pl-3">
        Tiêm botox khá an toàn, tuy nhiên cũng  có thể gặp một số tác dụng phụ không mong muốn như: sụp mi, yếu cơ, bầm tím, đau,… chủ yếu do kĩ thuật thực hiện chưa đúng. Do đó, khách hàng nên tìm đến những cơ sở y tế có chuyên môn cao, được bác sĩ Da liễu thực hiện để đạt hiệu quả cao và an toàn.
      </div>
      <p class="font-bold text-xl mb-3">4. Ai không nên tiêm botox?</p>
      <div class="mb-1 pl-3">
        Botox khá an toàn, tuy nhiên một số đối tượng sau đây không nên thực hiện thủ thuật này:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Phụ nữ mang thai.
        </li>
        <li class="list-disc">
          Phụ nữ cho con bú.
        </li>
        <li class="list-disc">
          Trẻ dưới 18 tuổi, ngoại trừ trường hợp được bác sĩ chỉ định là cần thiết về mặt y tế.
        </li>
        <li class="list-disc">
          Bệnh lý rối loạn thần kinh cơ.
        </li>
        <li class="list-disc">
          Teo cơ.
        </li>
        <li class="list-disc">
          Bị dị ứng với bất kỳ thành phần nào trong dung dịch tiêm.
        </li>
        <li class="list-disc">
          Đã từng có phản ứng bất lợi với botox.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">5. Sau khi tiêm botox nên kiêng gì?</p>
      <div class="mb-1 pl-3">
        Sau khi tiêm, khách hàng sẽ được dặn dò tránh một số hoạt động như:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Không </b>nằm sau khi điều trị ít nhất 4 giờ.
        </li>
        <li class="list-disc">
          <b>Không </b>xoa bóp hoặc chườm nóng khu vực này trong 24 giờ.
        </li>
        <li class="list-disc">
          <b>Vận động nhẹ nhàng</b>, tránh tập thể dục cường độ cao trong 24 giờ.
        </li>
        <li class="list-disc">
          <b>Tránh </b>uống rượu trong 24 giờ.
        </li>
        <li class="list-disc">
          <b>Tránh </b>chạm, cọ xát hoặc tác dụng vật lý lên vùng bị tiêm
        </li>
        <li class="list-disc">
          <b>Tránh </b>tiếp xúc với ánh nắng mạnh, nhiệt độ quá lạnh và phòng xông hơi khô trong 2 tuần tới
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">6. Tiêm botox bao lâu hết sưng?</p>
      <div class="mb-3 pl-3">
        Sau khi tiêm botox có thể xuất hiện những triệu chứng như sưng đau tại vị trí tiêm, mỏi hàm, chóng mặt,… Các bạn không nên quá lo lắng vì đây là những phản ứng thường gặp. Khách hàng có thể chườm lạnh để giảm sưng tại vị trí tiêm trong khoảng 15 đến 20 phút. Việc chườm lạnh này các bạn có thể thực hiện nhiều lần trong ngày để giảm sưng nhanh hơn. Thông thường sau khoảng vài ngày thì tình trạng sưng sẽ được giải quyết.
      </div>
      <div class="mb-3 pl-3">
        Nếu sau vài ngày thực hiện việc chườm lạnh nhưng tại vị trí tiêm cơn sưng không những không thuyên giảm mà còn có chiều hướng trở nên nghiêm trọng hơn thì các bạn cần liên hệ bác sĩ ngay để được chẩn đoán và xử lý chính xác nhất tình trạng mà bản thân đan gặp phải.
      </div>
      <p class="font-bold text-xl mb-3">7. Tiêm botox có biến chứng không?</p>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/botox2.jpg" alt="botox" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình minh họa Biến chứng gương mặt bất đối xứng sau tiêm botox.
      </div>
      <div class="mb-1 pl-3">
        Mặc dù Botox thường an toàn nhưng nó có thể gây ra một số tác dụng không mong muốn như:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Sụp mày. Sụp mi, bất đối xứng.
        </li>
        <li class="list-disc">
          Chứng khó nuốt, khàn giọng và yếu cổ.
        </li>
        <li class="list-disc">
          Khó thở.
        </li>
        <li class="list-disc">
          Yếu cơ.
        </li>
        <li class="list-disc">
          Biến chứng tại chỗ tiêm.
        </li>
        <li class="list-disc">
          Phản ứng tại chỗ tiêm: sưng phù, bầm tím và đau tại chỗ tiêm và các vị trí lân cận, nhiễm trùng.
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Những tác dụng này có thể xuất hiện ngay sau khi tiêm Botox hoặc sau khi thực hiện thủ thuật này vài tuần, nếu khi khách hàng có bất cứ triệu chứng nào hãy đến ngay cơ sở y tế gần nhất để được điều trị kịp thời.
      </div>
      <p class="font-bold text-xl mb-3">8. Tiêm botox nhiều có hại không?</p>
      <div class="mb-3 pl-3">
        Nhiều khách hàng trước khi sử dụng thường thắc mắc rằng tiêm Botox nhiều có hại không. Về cơ bản, tiêm Botox là một phương pháp thẩm mỹ tương đối an toàn trong điều trị da. Nếu khách tuân thủ theo hướng dẫn của bác sĩ với khoảng cách giữa những lần tiêm và liều lượng tiêm phù hợp thì tác hại không đáng kể.
      </div>
      <div class="mb-3 pl-3">
        Và thực tế ghi nhận có một số lợi ích khi tiếp tục tiêm BOTOX đều đặn. Một số lượng lớn bệnh nhân duy trì lịch tiêm BOTOX đều đặn cho thấy họ có thể thời gian tác dungk dài hơn và/hoặc cần lượng BOTOX ít hơn trong mỗi lần điều trị. Tương tự như vậy, việc tiêm BOTOX đều đặn có thể làm chậm quá trình hình thành các nếp nhăn do các cơ ở trạng thái thư giãn trong một thời gian dài.
      </div>
      <p class="font-bold text-xl mb-3">9. Tiêm botox bị đơ mặt phải làm sao?</p>
      <div class="mb-3 pl-3">
        Khác với việc khi tiêm filler gặp biến chứng, bạn có thể tiêm tan thì hiện nay botox vẫn chưa có “thuốc giải”. Vậy phải làm sao khi tiêm botox mà mặt bị đơ? Nếu bạn cảm thấy gương mặt bị đơ cứng sau khi tiêm botox, hãy đến cơ sở y tế chuyên khoa Da liễu để được các bác sĩ thăm khám và xác định tình trạng hiện tại.
      </div>
      <div class="mb-3 pl-3">
        Ngoài ra bạn có thể thực hiện một số tips sau đây để cải thiện tình trạng này:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Bạn có thể thực hiện xông hơi hoặc xông mặt để kích thích cho botox tan tự nhiên một cách nhanh chóng hơn.
        </li>
        <li class="list-disc">
          Bạn có thể sở nắn một cách nhẹ nhàng tại vùng da tiêm botox bị đơ để cải thiện điều này.
        </li>
        <li class="list-disc">
          Tắm hay rửa mặt bằng nước ấm cũng là một gợi ý để xử lý các tình trạng tiêm botox gọn hàm bị đơ.
        </li>
        <li class="list-disc">
          Nếu sau tiêm botox không cười được hay bị đơ bạn nên vận động cơ hàm nhiều hơn như nói nhiều, cười nhiều, nhai nhiều hơn
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Tuy nhiên, bạn có thể phòng tránh bằng cách chỉ đến những cơ sở y tế chuyên môn, được Bác sĩ Da liễu thực hiện thăm khám, và tiêm đúng kỹ thuật.
      </div>
      <p class="font-bold text-xl mb-3">10. Sau sinh bao lâu có thể tiêm botox?</p>
      <div class="mb-3 pl-3">
        Mặc dù hầu như botox chỉ đi trực tiếp vào cơ và chỉ tác động đến vùng được tiêm và không đi qua sữa mẹ nên vẫn đảm bảo được chất lượng của sữa mẹ và không tác động xấu tới sức khỏe của trẻ. Tuy nhiên hiện nay chưa có nghiên cứu về tính an toàn của botox ở phụ nữa có thai và cho con bú, vì vậy bạn nên đợi cho đến khi bạn cho con bú xong trước khi điều trị.
      </div>
      <p class="font-bold text-xl mb-3">11. Tiêm botox loại nào tốt?</p>
      <div class="mb-3 pl-3">
        Trên thị trường hiện giờ có rất nhiều loại botox, khi chọn lựa còn lưu ý:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Chọn sản phẩm đến từ thương hiệu uy tín, nổi tiếng, được đánh giá cao
        </li>
        <li class="list-disc">
          Có nguồn gốc xuất xứ rõ ràng, đầy đủ giấy tờ.
        </li>
        <li class="list-disc">
          Được kiểm chứng về chất lượng, được Bộ Y tế cấp phép lưu hành công khai.
        </li>
        <li class="list-disc">
          Đầy đủ các thông tin liên quan và tem phụ tiếng Việt.
        </li>
        <li class="list-disc">
          Kiểm tra thuốc trước khi tiêm còn nguyên nhãn bọc, không hư hại. Còn hạn sử dụng, không có dấu hiệu lạ về màu sắc.
        </li>
      </ul>
      <div class="mb-5">
        Dù chọn tiêm loại Botox nào cũng cần lưu ý chọn địa chỉ uy tín, người tiêm phải là bác sĩ được đào tạo bài bản, có kiến thức chuyên môn y khoa.
      </div>
    `,
  },
  {
    id: 17,
    searchTag:
      "tư vấn cách chăm sóc da mụn tránh tái phát tu van cach cham soc da mun tranh tai phat",
    title:
      "Bác sĩ CKII Nguyễn Lê Trà Mi Tư vấn cách chăm sóc da mụn tránh tái phát?",
    isOutstanding: true,
    isShowBadge: true,
    badgeLabel: "chăm sóc da",
    subTitle:
      "Mụn trứng cá là bệnh lý của vùng nang lông-tuyến bã nhờn, thường gặp ở lứa tuổi dậy thì ...",
    imageUrl: "/images/logo_hinh_phong_kham/pk5.jpg",
    tagId: 2,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Chăm Sóc Da
        </span>
      </div>
      <div class="mb-3">
        Mụn trứng cá là bệnh lý của vùng nang lông-tuyến bã nhờn, thường gặp ở lứa tuổi dậy thì. Mặc dù bệnh không ảnh hưởng đến tính mạng, nhưng có tác động rất lớn đến tâm lý và chất lượng cuộc sống. Nếu không điều trị đúng cách và kịp thời, có thể để lại nhiều hậu quả như sẹo mụn và những vết thâm tồn tại lâu dài, rất khó điều trị. 
      </div>
      <div class="mb-5">
        Tất cả những quy trình cần thiết để cải thiện làn da mụn và các di chứng do mụn để lại cần được tư vấn, điều trị và theo dõi bởi BS chuyên khoa da liễu tại các cơ sở điều trị da – thẩm mỹ da uy tín.
      </div>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_hinh_phong_kham/pk5.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình Bác sĩ Trà Mi thăm khám và tư vấn điều trị mụn cho bệnh nhân.
      </div>
      <p class="font-bold text-xl mb-3">1. Cơ chế sinh mụn?</p>
      <div class="mb-3 pl-3">
        Cơ chế bệnh sinh của mụn trứng cá bao gồm rất nhiều yếu tố. Tuy nhiên có 4 cơ chế chính gây ra mụn cùng hiện diện và tác động qua lại với nhau là:
      </div>
      <div class="mb-2 pl-7">
        <b>(1) Tắc nghẽn lỗ nang lông (sừng hóa nang lông): </b>biểu hiện bằng sự xuất hiện của các mụn cồi là do chất bã, chất sừng và vi khuẩn bị ứ lại không thoát ra được. Đây là điểm khởi đầu của mụn. 
      </div>
      <div class="mb-2 pl-7">
        <b>(2) Tăng tiết bã nhờn: </b>Những bệnh nhân bị mụn có sự tăng tiết nhiều chất nhờn nhiều hơn là những bệnh nhân không mụn. Chất béo có trong chất nhờn do da tiết ra là môi trường thích hợp cho vi khuẩn phát triển nên đây là 1 yếu tố thuận lợi góp phần vào gây mụn.
      </div>
      <div class="mb-2 pl-7">
        <b>(3) Sự hiện diện và hoạt động của vi khuẩn Propionibacterium acnes </b>tại vùng nang lông-tuyến bã. 
      </div>
      <div class="mb-2 pl-7">
        <b>(4) Viêm: </b>Sự tích tụ quá mức các chất bên trong nang lông làm cho vi nhân mụn (mụn cồi) vỡ ra, kích thích cơ thể sinh ra đáp ứng viêm.
      </div>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/csdamun1.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Cơ chế của mụn trứng cá
      </div>
      <p class="font-bold text-xl mb-3">2. Nguyên nhân của mụn</p>
      <div class="mb-3 pl-3">
        Mụn trứng cá thông thường gặp ở lứa tuổi dậy thì do hoạt động mạnh của tuyến bã làm tăng tiết bã nhờn, cộng thêm quá trình rối loạn tạo nút sừng tại nang lông. Tuy nhiên, nếu mụn trứng cá xuất hiện đột ngột, mức độ nặng,  kèm theo những dấu hiệu khác như lông mọc nhiều bất thường, chu kì kinh nguyệt rối loạn, … thì phải được bác sĩ chuyên khoa khám và cho xét nghiệm tầm soát nguyên nhân gây mụn. Chỉ khi điều trị dứt điểm nguyên nhân thì mụn mới được điều trị hiệu quả được.
      </div>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/csdamun2.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình minh họa: Mụn trứng cá thường gặp nhất ở tuổi dậy thì.
      </div>
      <p class="font-bold text-xl mb-3">3. Các mức độ của mụn</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Mụn nhẹ: </b>chỉ có mụn cồi
        </li>
        <li class="list-disc">
          <b>Mụn trung bình: </b>chủ yếu là có những mụn mủ, mụn viêm đỏ
        </li>
        <li class="list-disc">
          <b>Mụn trung bình nặng: </b>có thêm những cục dưới da, thường < 5 cục
        </li>
        <li class="list-disc">
          <b>Mụn nặng: </b>chủ yếu là cục dưới da
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">4. Điều trị mụn thế nào để tránh tái phát?</p>
      <div class="mb-3 pl-3">
        Điều trị mụn là quá trình lâu dài, liên tục, bao gồm cả việc thay đổi lối sống, chăm sóc da đúng cách và dùng thuốc theo hướng dẫn của bác sĩ chuyên khoa da. Vì cơ chế sinh mụn là sự kết hợp của nhiều yếu tố nến điều trị mụn phải chăm sóc và điều trị toàn diện mới mong đạt hiệu quả cao.
      </div>
      <div class="mb-3 pl-3">
        <b>4.1 Vệ sinh da đúng cách</b>
      </div>
      <div class="mb-3 pl-5">
        1. Rửa mặt là bước quan trọng trong chăm sóc da mụn. Làn da mụn là da nhạy cảm, rất dễ bị kích thích bởi các hóa chất trong các sản phẩn rửa mặt thông thường. Các chất có trong các sản phẩm rửa mặt thông thường có thể làm suy yếu hàng rào bảo vệ da, làm da dễ khô và mất nước, dễ nhiễm trùng và dễ bị kích ứng hơn. Chính vì vậy, việc hiểu rõ cách chọn và sử dụng các sản phẩm rửa mặt là vô cùng quan trọng. Các sản phẩm rửa mặt sẽ giúp lấy đi các tế bào chết, lượng nhờn dư thừa trên da. Tuy nhiên rửa mặt quá nhiều hoặc sử dụng những chế phẩm kiềm có thể làm mất cân bằng môi trường của da gây kích ứng da nhiều hơn. Vì vậy, nên chọn các sản phẩm rửa mặt có nguồn gốc rõ ràng, đáng tin cậy. Những sản phẩm dành cho da mụn trên nhãn có ghi “soap-free”, “acidic” hoặc “pH balance”, không có chất bào mòn (non-abrasive), không cồn (non-alcohol), không sinh nhân mụn (non-comedongenic). 
      </div>
      <div class="mb-3 pl-5">
        2.Rửa mặt sáng, tối với sữa rửa mặt dành cho da mụn. Những lần còn lại trong ngày thì rửa mặt bằng nước ấm. Khi rửa mặt cần thật nhẹ nhàng, khi đang có mụn viêm thì không nên dùng những sản phẩm rửa mặt có hạt, những hạt này sẽ cọ xát trên da, làm da dễ bị trầy xước. 
      </div>
      <div class="mb-3 pl-5">
        3.Lau mặt nhẹ nhàng bằng bông tẩy trang. Không nên dùng khăn có bề mặt sợi thô ráp để chà xát và lau trên da vì sẽ làm da tổn thương thêm và ngoài ra, khăn sử dụng cũng có thể là nơi vi trùng trú ngụ làm nhiễm trùng da nặng thêm.
      </div>
      <div class="mb-3 pl-5">
        4. Không nặn, không cào gãi vùng da mụn.
      </div>
      <div class="mb-3 pl-5">
        5. Không để tóc lòa xòa che vùng mặt.
      </div>
      <div class="mb-3 pl-5">
        6. Không lấy tay sờ lên mặt (không chống cằm, không sờ nắn mụn)
      </div>
      <div class="mb-3 pl-5">
        7. Nên mang khẩu trang, nón rộng vành khi ra đường. Lưu ý giặt nón và khẩu trang thường xuyên.
      </div>
      <div class="mb-3 pl-5">
        8. Không nên trang điểm trong thời gian điều trị mụn nếu chưa được bác sĩ tư vấn và hướng dẫn. Lí do vì nếu sử dụng không đúng cách và chọn không đúng loại mỹ phẩm thì da sẽ ngày càng xấu hơn vì mụn sẽ nổi nhiều hơn.
      </div>
      <div class="mb-3 pl-3">
        <b>4.2 Chế độ ăn uống hợp lí</b>
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Uống nhiều nước (tránh nước ngọt, rượu, bia…), trung bình uống khoảng 1,5 đến 2 lít nước/ngày (lưu ý uống rải đều trong ngày, không đợi khát mới uống).
        </li>
        <li class="list-disc">
          Không ăn thức ăn ngọt, béo, mỡ (kiêng bánh ngọt, kem, fast food, đồ chiên xào, bánh mì, mì gói, trái cây có vị ngọt đậm, và tất cả những thức ăn dễ gây nổi mụn theo cảm nhận cá nhân).
        </li>
        <li class="list-disc">
          Ăn nhiều rau xanh, trái cây.
        </li>
      </ul>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/csdamun3.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình minh họa Chế độ ăn hợp lý góp phần cải thiện mụn.
      </div>
      <div class="mb-3 pl-3">
        <b>4.3 Chế độ sinh hoạt điều độ</b>
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Nên tập thể dục rèn luyện sức khỏe hàng ngày
        </li>
        <li class="list-disc">
          Không thức khuya, nên đảm bảo giấc ngủ từ 0h-3h hàng ngày
        </li>
        <li class="list-disc">
          Ngủ đủ giấc 8 giờ/ngày
        </li>
        <li class="list-disc">
          Tránh lo lắng, căng thẳng
        </li>
        <li class="list-disc">
          Tránh nắng (nên sử dụng kem chống nắng phù hợp hàng ngày, hạn chế ra đường từ 10h sáng đến 4h chiều)
        </li>
      </ul>
      <div class="mb-3 pl-3">
        <b>4.4 Chế độ điều trị</b>
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Điều trị mụn cần có thời gian mới đạt được hiệu quả (ít nhất là 2 tháng, tùy theo từng tình trạng mụn mà bác sĩ sẽ tư vấn kĩ hơn).
        </li>
        <li class="list-disc">
          Không nên nóng vội kết luận là không hiệu quả mà ngưng điều trị. Điều trị mụn bao gồm cả việc sử dụng kháng sinh, do đó nếu ngưng điều trị sẽ làm cho vi trùng dễ kháng thuốc và hiệu quả điều trị không duy trì được lâu.
        </li>
        <li class="list-disc">
          Điều trị mụn bao gồm thuốc thoa và thuốc uống theo toa và sự hướng dẫn của bác sĩ chuyên khoa da liễu. 
        </li>
      </ul>
    `,
  },
  {
    id: 18,
    searchTag:
      "bệnh zona và những điều bạn cần biết benh zona va nhung dieu ban can biet",
    title: "Bệnh Zona và những điều bạn cần biết",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Herpes zoster (bệnh zona) là sự tái hoạt của VZV, sau khi nhiễm thủy đậu ban đầu, vi rút sẽ sống tiềm ẩn và tồn tại ở hạch rễ lưng cảm giác và hạch thần kinh sọ ...",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-3">
        Dưới góc nhìn chuyên môn, BS.CKII Nguyễn Lê Trà Mi, Giảng viên Bộ môn Da liễu Đại học Y Dược TP.HCM sẽ giúp bạn hiểu rõ hơn về bệnh lý Zona.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_bai_bao/hinh2.png" alt="knowledge-detail" />
      </div>
      <div class="mb-3">
        Herpes zoster (bệnh zona) là sự tái hoạt của VZV, sau khi nhiễm thủy đậu ban đầu, vi rút sẽ sống tiềm ẩn và tồn tại ở hạch rễ lưng cảm giác và hạch thần kinh sọ. Theo ghi nhận, có khoảng 20% người trưởng thành khỏe mạnh sau khi mắc thủy đậu sẽ tái hoạt VZV gây bệnh zona, đặc biệt là sau 50 tuổi và con số này lên đến 50% ở nhóm bệnh nhân suy giảm miễn dịch đồng thời có liên quan đến biến cố tử vong. Độ trễ sự tái hoạt là do phản ứng miễn dịch đặc hiệu của cơ thể với VZV, bất kỳ khi nào khả năng kiểm soát vi rút bị suy giảm như quá trình lão hóa (lão hóa hệ miễn dịch) hoặc khiếm khuyết trong khả năng miễn dịch tế bào, chẳng hạn ung thư hạch, nhiễm HIV hoặc sử dụng liệu pháp ức chế miễn dịch thì VZV tiềm ẩn có thể tái hoạt.
      </div>
      <p class="font-bold text-xl mb-3">1. Dịch tễ học</p>
      <div class="mb-3 pl-3">
        Bệnh zona xảy ra rải rác quanh năm, không có tỷ lệ lưu hành bệnh theo mùa cũng như không phụ thuộc và tỷ lệ lưu hành bệnh thủy đậu. Cho đến nay, vẫn không có bằng chứng thuyết phục nào cho thấy herpes zoster lây truyền qua việc tiếp xúc với người mắc thủy đậu hoặc bệnh zona thay vào đó tỷ lệ mắc bệnh được xác định bởi các yếu tố tác động vào mối quan hệ giữa vật chủ, vi rút và hệ thống miễn dịch ngăn ngừa sự tái hoạt VZV tiềm ẩn.
      </div>
      <div class="mb-3 pl-3">
        Yếu tố nguy cơ chính của bệnh herpes zoster là tuổi. Trong nhóm tuổi từ 10 – 49, tỷ lệ mắc bệnh là khoảng 4/1.000 người - năm. Sau 50 tuổi, tỷ lệ mắc bệnh sẽ tăng dần đều và lên đến khoảng 14/1.000 người – năm ở tuổi 75, sau độ tuổi này tỷ lệ mắc bệnh dần ổn định. Một yếu tố nguy cơ khác đối với bệnh herpes zoster là sự suy giảm hệ miễn dịch qua trung gian tế bào. Có đến 15% trường hợp mắc herpes zoster xảy ra ở nhóm người suy giảm miễn dịch như ghép tủy hoặc tặng đặc, ung thư thư máu, các khối u ác tính, bệnh qua trung gian miễn dịch (ví dụ: lupus ban đỏ hệ thống, viêm khớp dạng thấp), bệnh nhân được hóa trị, sử dụng các thuốc ức chế miễn dịch, corticosteroid. 
      </div>
      <p class="font-bold text-xl mb-3">2. Cơ chế bệnh sinh</p>
      <div class="mb-3 pl-3">
        Trong bệnh thủy đậu, VZV di chuyển từ các tổn thương da và bề mặt niêm mạc theo đầu tận dây thần kinh cảm giác đi dọc theo sợi thần kinh và đến các hạch cảm giác. Tại đây, vi rút sẽ sống trong tế bào thần kinh và tồn tại suốt đời. Do mật độ VZV sống tiềm ẩn nhiều nhất ở vùng hạch thần kinh chi phối cho vùng da có nhiều sang thương thủy đậu nhất vì vậy herpes zoster sẽ tái hoạt ở vùng dermatomes từng có phát ban thủy đậu dày đặc như vùng mắt chi phối bởi hạch thần kinh sinh ba và các vùng chi phối bởi hạch cảm giác cột sống từ T1 – L2.
      </div>
      <div class="mb-3 pl-3">
        Một số trường hợp VZV tái hoạt nhưng không gây bệnh rõ ràng, giải thích cho tình trạng này có thể là do sự nhân lên và lây lan của vi rút bị chấm dứt bởi sự tồn tại hoặc huy động nhanh chóng từ hệ thống miễn dịch đặc hiệu có trước. Tuy nhưng khi miễn dịch đặc hiệu qua trung gian tế bào lympho T bị sụt giảm tới một giới hạn, vi rút được kích hoạt và không được ngăn chặn sẽ lan rộng tại hạch, gây hoại tử tế bào thần kinh và viêm dữ dội, tạo nên các cơn đơn thần kinh nghiêm trọng. Sau đó, VZV di chuyển ngược chiều dây thần kinh cảm giác và được giải phóng khỏi các đầu tận để đến da.
      </div>
      <div class="mb-3 pl-3">
        Ngoài ra nếu sự nhiễm trùng lan rộng theo rễ thần kinh sau đến màng não và tủy sống có thể dẫn đến viêm màng não cục bộ, tăng bạch cầu dịch não tủy và viêm tủy từng đoạn. Sự tổn thương của các tế bào thần kinh ở sừng sau cũng góp phần trong cơ chế gây đau dây thần kinh sau zona; ngược lại sự tổn thương thần kinh vận động ở sừng trước và viêm rễ thần kinh trước gây ra liệt khu trú. Trong các trường hợp hiếm gặp, khi nhiễm trùng lan rộng vào hệ thống thần kinh trung ương có thể gây viêm màng não hoặc viêm tủy cắt ngang
      </div>
      <p class="font-bold text-xl mb-3">3. Đặc điểm lâm sàng</p>
      <p class="font-bold text-xl mb-3 pl-3">3.1 Đặc điểm của zona điển hình</p>
      <p class="mb-3 pl-3">
        Giai đoạn tiền triệu: 90% bệnh nhân mắc herpes zoster có cảm giác bất thường trên một vùng da như bỏng rát, châm chích, tê, đau dữ dội. Cơn đau trước zona đôi khi bị nhầm lẫn với cơn đau do các bệnh lý nội – ngoại khoa khác như nhồi máu cơ tim, viêm túi mật, cơn đau quặn thận, thoát vị đĩa đệm. Thông thường tiền triệu sẽ diễn ra từ 1 – 3 ngày trước khi các sang thương herpes zoster xuất hiện, số ít có thể kéo dài hơn. Ở nhóm bệnh nhân <30 tuổi và có hệ miễn dịch khỏe mạnh, đau trước khởi phát zona thường không phổ biến. Trong trường hợp bệnh nhân có tiền triệu zona mà không xuất hiện tổn thương da sau đó được gọi là “zoster sine herpete”.
      </p>
      <p class="mb-3 pl-3">
        Giai đoạn toàn phát: sang thương zona bắt đầu bằng sẩn, mảng hồng ban trải dài theo khoanh da (dermatome). Sau 12 – 24 giờ, tại vị trí ban đầu sẽ hình thành mụn nước, các mụn nước có thể hòa vào nhau tạo thành bóng nước, thường rất đau và ngứa. Tiếp theo, mụn nước dần hóa mủ vào ngày thứ 3 và cuối cùng khô, đóng mài vào ngày thứ 7 – 10. Mài sau đó sẽ bong trong 2 – 3 tuần kế tiếp. Ở người khỏe mạnh, trong khi các sang thương cũ lành thì các tổn thương mới vẫn tiếp tục xuất hiện trong 1 – 4 ngày (đôi khi kéo dài đến 7 ngày), tình trạng phát ban sẽ kéo dài và nặng nề nhất ở nhóm người cao tuổi và nhẹ nhất ở trẻ em. Một đặc điểm đặc trưng của herpes zoster là vị trí và phân bố của sang thương khi toàn bộ tổn thương sẽ nằm về một bên cơ thể và giới hạn trong khoanh da mà chi phối bởi một hạch cảm giác duy nhất. Vị trí bị ảnh hưởng phổ biến nhất là vùng thân từ T3 – L2 chiếm >50% trường hợp, theo sau là vị trí chi phối bởi hạch sinh ba chiếm 10 – 15%. Các tổn thương trong zona thường hiếm gặp ở các vùng xa như dưới khuỷu hoặc dưới gối.
      </p>
      <p class="mb-3 pl-3">
        Về mặt mô học không thể phân biệt được các tổn thương của bệnh zona và thủy đậu nhưng trên lâm sàng, tổn thương mụn của zona sẽ phân bố dày đặc trên nền hồng ban thuộc dermatome trong khi mụn nước thủy đậu sẽ phân bộ ngẫu nhiên và rời rạc hơn.
      </p>
      <p class="mb-3 pl-3">
        Giai đoạn hồi phục: bệnh zona thường tự khỏi mà không để lại di chứng ở nhóm trẻ em và người trưởng thành có hệ miễn dịch khỏe mạnh. Tuy nhưng, đau thần kinh sau zona thường gặp nhất, đặc biệt ở người lớn tuổi và suy giảm miễn dịch, gây ảnh hưởng đến 10 – 20% trong tổng số bệnh nhân mắc bệnh và tình trạng này tăng dần về tỷ lệ và độ nặng theo tuổi.
      </p>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/zona2.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình ảnh biểu hiện của bệnh zona
      </div>
      <p class="font-bold text-xl mb-3 pl-3">3.2. Các biến thể của zona</p>
      <p class="mb-3 pl-5">
        <b>a) Herpes zoster mắt (Herpes zoster ophthalmicus – HZO): </b>là tổn thương zona liên quan đến nhánh V1 của dây thần kinh sinh ba. Khoảng 50 – 80% trường hợp HZO liên quan đến các tổn thương về mắt như viêm kết mạc, viêm màng bồ đào, viêm thượng củng mạc, viêm giác mạc hoặc viêm võng mạc với biểu hiện lâm sàng đa dạng gồm suy giảm thị lực, đau mắt, sợ ánh sáng, giảm độ nhạy giác mạc, áp xe mống mắt vô trùng, liệt dây thần kinh vận nhãn.
      </p>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/zona3.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình ảnh biểu hiện của bệnh zona
      </div>
      <p class="mb-3 pl-5">
        <b>b) Hội chứng Ramsay Hunt: </b>là một biến thể hiếm gặp của herpes zoster liên quan đến hạch gối và dây thần kinh số VII, chiếm <1% trường hợp mắc herpes zoster. Các triệu chứng lâm sàng điển hình gồm liệt mặt một bên, đau tai và các mụn nước ở vành tai và/hoặc ống tai ngoài. 
      </p>
      <p class="mb-3 pl-5">
        <b>c) Herpes zoster thể lan tỏa: </b>thường gặp ở bệnh nhân suy giảm miên dịch. Hiếm hơn, đồng nhiễm herpes zoster và herpes simplex có thể là nguyên nhân đưa đến thể bệnh này.
      </p>
      <p class="mb-3 pl-5">
        <b>d) Herpes zoster sâu (Herpes zoster deep): </b>sự lây nhiễm herpes zoster trong các tế bào stromal thì được biết đến rộng rãi do đó các vị trí khác thường ít được báo cáo trong y văn. Các vị trí tổn thương ít phổ biến được đề cập đến gồm vùng quanh hậu môn, vùng mông hoặc các cơ quan nội tạng. Yếu tố nguy cơ chính đối với herpes zoster sâu là tình trạng ức chế miễn dịch.
      </p>
      <p class="mb-3 pl-5">
        <b>e) Herpes zoster thể ban xuất huyết (purpuric herpes zoster): </b>rất hiếm, cần chẩn đoán phân biệt với viêm mạch máu ở da. Trong trường hợp này, sinh thiết chẩn đoán là một phương tiện hữu ích.
      </p>
      <p class="mb-3 pl-5">
        <b>f) Herpes zoster hệ thần kinh trung ương (central nervous system herpes zoster): </b>herpes zoster có thể ảnh hưởng đến hệ thần kinh trung ướng ở những bệnh nhân suy giảm miễn dịch chẳng hạn như bệnh nhân AIDS/HIV hoặc bệnh nhân lớn tuổi (>75 tuổi). 
      </p>
      <p class="font-bold text-xl mb-3">4. Các biến chứng của zona</p>
      <p class="mb-3 pl-5">
        <b>4.1 Đau dây thần kinh sau zona: </b>
        là biến chứng phổ biến nhất của herpes zoster, đặc trưng bởi cơn đau dữ dội kéo dài sau 1 tháng, 3 tháng, 4 tháng hoặc 6 tháng tùy vào định nghĩa sử dụng.
      </p>
      <p class="mb-3 pl-5">
        <b>4.2 Hội chứng cầu bàng quang trong viêm màng não: </b>
        là tình trạng bí tiểu cấp tính do viêm màng não vô khuẩn – một dạng nhẹ của bệnh não tủy lan tỏa cấp tính. Điều này giải thích tại sao ở những bệnh nhân mắc tình trạng này thường có kèm sốt, đau đầu, cổ cứng và có dấu hiệu minor pyramidal (dấu tháp nhỏ)
      </p>
      <p class="mb-3 pl-5">
        <b>4.3 Giả tắc đại tráng cấp tính (hội chứng Ogilvie): </b>
        là một biến chứng hiếm gặp của herpes zoster, thường xảy ra ở nam giới (76%) với độ tuổi trung bình mắc phải > 61 tuổi.
      </p>
      <p class="mb-3 pl-5">
      <b>4.4 Hồng ban đa dạng: </b>
        biểu hiện phản ứng quá mẫn với nhiễm trùng hoặc thuốc. Lâm sàng đặc trưng bởi sự phát ban hình bia bắn.
      </p>
      <p class="mb-3 pl-5">
        <b>4.5 Viêm mạch: </b>
        varicella zoster vi rút có thể gây viêm mạch hoặc bệnh lý mạch máu ở nhiều vị trí khác nhau như viêm động mạch thần kinh trung ương, viêm võng mạch,…
      </p>
      <p class="mb-3 pl-5">
        <b>4.6 Sẹo lồi</b>
      </p>
      <p class="font-bold text-xl mb-3">5. Cận lâm sàng</p>
      <p class="font-bold text-xl mb-3 pl-3">5.1 Tế bào học Tzanck</p>
      <p class="mb-3 pl-3">
        Tế bào học Tzanck là một xét nghiệm lâm sàng hữu ích giúp phân biệt các tổn thương không phải do herpes vi rút gây ra. Mặc dù độ nhạy và độ đặc hiệu thấp hơn đáng kể so với kỹ thuật PCR.
      </p>
      <p class="font-bold text-xl mb-3 pl-3">5.2 Phản ứng chuỗi polymerase</p>
      <p class="mb-3 pl-3">
        Việc phát hiến phân tử DNA VZV từ mẫu mụn nước được coi là tiêu chuẩn vàng trong chẩn đoán. Nếu đươc thực hiện đúng kỹ thuật và trogn điều kiện không bị nhiễm chéo, PCR có thể cho độ nhạy và đặc hiệu gần 100%. Trong trường hợp lâm sàng, không thể lấy mụn nước, PCR cũng có thể phát hiện DNA vi rút từ các sang thương dát, sẩn hồng ban, thậm chí khi sang thương đã đóng mài với độ tin cậy cao. Nếu nghi ngờ bệnh nhân có nhiễm trùng liên quan hệ thần kinh trưng ương, PCR VZV được thực hiện bằng mẫu dịch não tủy.
      </p>
      <p class="mb-3 pl-3">
        Cần lưu ý không cần thực hiện xét nghiệm để khẳng định chẩn đoán đối với các trường hợp herpes zoster biểu hiện lâm sàng điển hình.
      </p>
      <p class="font-bold text-xl mb-3 pl-3">5.3. Huyết thanh học</p>
      <p class="mb-3 pl-3">
        Mặc dù các xét nghiệm huyết thanh tìm kháng thể IgM, IgG và IgA đặc hiệu với VZV bằn kỹ thuật miễn dịch không phù hợp trong chẩn đoán zona cấp tính nhưng có vai trò trong chẩn đoán phân biệt cơn đau giống herpes zoster và liệt liên quan đến zoster (dây thần kinh số VII). Trong quá trình nhiễm, nồng độ kháng thể IgG kháng VZV tăng lên đáng kể, ngoài ra kháng thể IgA kháng VZV và ít gặp hơn là kháng thể IgM kháng VZV cũng có thể được phát hiện. Bất kỳ kết quá đo nồng độ kháng thể nào cũng cần được so với nồng độ kháng thể nền vì sự tái hoạt của vi rút dưới lâm sàng cũng có thể gây ra sự gia tăng nồng độ kháng thể.
      </p>
      <p class="font-bold text-xl mb-3 pl-3">5.4 Nuôi cấy vi rút</p>
      <p class="mb-3 pl-3">
        Vi rút có thể được phân lập trong môi trường nuôi cấy nguyên bào sợi lưỡng bội của phổi người hoặc tế bào biểu mô sắc tố võng mạch người. Dựa theo định đề thứ hai của Koch, quy trình này từ lâu đã được coi là tiêu chuẩn vàng tuy nhưng do tính không ổn định của vi rút herpes nên độ nhạy thường dao động cao từ 20 – 80% trong điều kiện tối ưu.
      </p>
      <p class="font-bold text-xl mb-3">6. Chẩn đoán</p>
      <p class="mb-3 pl-3">
        Chẩn đoán thường dựa vào lâm sàng, dịch tễ và cận lâm sàng. Trong một số trường hợp cần phân biệt với các bệnh lý khác.
      </p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Giai đoạn khởi phát: </b>đau đầu, viêm mống mắt, đau ngực kiểu màng phổi, viêm thần kinh cánh tay, nhồi máu cơ tim, viêm ruột thừa, viêm túi mất, cơn đau quặn thận, thoát vị đĩa đệm, …
        </li>
        <li class="list-disc">
          <b>Mụn trung bình: </b>chủ yếu là có những mụn mủ, mụn viêm đỏ
        </li>
        <li class="list-disc">
          <b>Giai đoạn mụn nước, bóng nước: </b>herpes simplex, viêm da tiếp xúc dị ứng.
        </li>
        <li class="list-disc">
          <b>Herpes zoster thể lan tỏa: </b>pemphigus, pemphigoid, viêm da dạng herpes, IgA bọng nước thành đường.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">7. Điều trị</p>
      <p class="font-bold text-xl mb-3 pl-3">7.1 Mục tiêu điều trị</p>
      <p class="mb-3 pl-3">
        Mục tiêu điều trị: làm liền tổn thương, giảm đau, ngăn ngừa biến chứng
      </p>
      <p class="font-bold text-xl mb-3 pl-3">7.2 Phác đồ điều trị</p>
      <p class="mb-3 pl-3">
        <i>a) Trường hợp không biến chứng và ở người có miễn dịch bình thường:</i>
      </p>
      <p class="mb-3 pl-3">
        Tại chỗ: bôi hồ nước, dung dịch màu milian, castellani, mỡ acyclovir, mỡ kháng sinh nếu có nhiễm khuẩn. 
      </p>
      <p class="mb-3 pl-3">
        Toàn thân: các lựa chọn kháng vi rút được khuyến cáo trong điều trị herpes zoster gồm acyclovir, valacyclovir, famciclovir và brivudine với cấu trúc tương tự nucleoside, thuốc kháng vi rút có vai trò làm gián đoạn quá trình sao chép DNA. Liều khuyến cáo được trình bày trong Bảng với thời gian khởi trị nên bắt đầu càng sớm càng tốt (trong vòng 72 giờ sau khi xuất hiện triệu chứng).
      </p>
      <table class="border border-solid border-black ml-5 mb-5">
        <thead>
          <tr>
            <th class="border border-solid border-black p-3">Hoạt Chất</th>
            <th class="border border-solid border-black p-3">Liều</th>
            <th class="border border-solid border-black p-3">Tấn Suất</th>
            <th class="border border-solid border-black p-3">Khoảng thời gian</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-solid border-black p-3">Acyclovir (uống)</td>
            <td class="border border-solid border-black p-3">800 mg</td>
            <td class="border border-solid border-black p-3">5 lần/ngày</td>
            <td class="border border-solid border-black p-3">7 ngày</td>
          </tr>
          <tr>
            <td class="border border-solid border-black p-3">Acyclovir (IV)</td>
            <td class="border border-solid border-black p-3">8 – 10 mg/kg</td>
            <td class="border border-solid border-black p-3">3 lần/ngày</td>
            <td class="border border-solid border-black p-3">7 – 10 ngày</td>
          </tr>
          <tr>
            <td class="border border-solid border-black p-3">Brivudine (uống)</td>
            <td class="border border-solid border-black p-3">125 mg</td>
            <td class="border border-solid border-black p-3">1 lần/ngày</td>
            <td class="border border-solid border-black p-3">7 ngày</td>
          </tr>
          <tr>
            <td class="border border-solid border-black p-3">Famciclovir (uống)</td>
            <td class="border border-solid border-black p-3">250 mg</td>
            <td class="border border-solid border-black p-3">3 lần/ngày</td>
            <td class="border border-solid border-black p-3">7 ngày</td>
          </tr>
          <tr>
            <td class="border border-solid border-black p-3">Valacyclovir (uống)</td>
            <td class="border border-solid border-black p-3">1000 mg</td>
            <td class="border border-solid border-black p-3">3 lần/ngày</td>
            <td class="border border-solid border-black p-3">7 ngày</td>
          </tr>
        </tbody>
      </table>
      <p class="mb-3 pl-3">
        Ngoài ra, kháng sinh chống bội nhiễm; giảm đau, kháng viêm, an thần, sinh tố nhóm B liều cao. Nếu đau dai dẳng: bôi kem chứa lidocain và prilocain, kem capsaicin, lidocain gel, uống thuốc chống trầm cảm ba vòng, phong bế thần kinh và vật lý trị liệu kết hợp. Corticoid: có tác dụng giảm đau trong thời kỳ cấp tính và nhiều tác giả cho rằng thuốc có tác dụng giảm đau sau zona.
      </p>
      <p class="mb-3 pl-3">
        <i>b) Trường hợp suy giảm miễn dịch hay tổn thương lan rộng:</i>
      </p>
      <p class="mb-3 pl-3">
        Tiêm tĩnh mạch acyclovir 30mg/kg/ngày, chia 3 lần x 7 ngày hoặc cho đến khi thương tổn đóng vảy tiết.
      </p>
      <p class="mb-3 pl-3">
        <i>c) Trường hợp có tổn thương mắt:</i>
      </p>
      <p class="mb-3 pl-3">
        Kết hợp khám chuyên khoa mắt, điều trị acyclovir đường tĩnh mạch.
      </p>
      <p class="mb-3 pl-3">
        <i>d) Đau sau zona (post herpetic neuralgia-PHN): </i>
      </p>
      <p class="mb-3 pl-3">
        Là hiện tượng đau dai dẳng trên 1 tháng, thậm chí hàng năm với biểu hiện đau nhạy cảm, rát bỏng, đau âm ỉ hay đau nhói như dao đâm ở vùng da tổn thương zona đã lành sẹo. Bệnh thường xuất hiện ở người già, người suy giảm miễn dịch, mắc bệnh ung thư. Nguyên nhân: do VZV gây viêm, hoại tử và xơ hóa các đầu mút thần kinh. Một số trường hợp có thể kèm đau cơ, đau khớp, ảnh hưởng nhiều đến chất lượng cuộc sống.
      </p>
      <p class="font-bold text-lg mb-3">
        Điều trị và dự phòng PHN:
      </p>
      <p class="mb-3 pl-3">
        Điều trị bệnh zona bằng thuốc kháng virus sớm trong vòng 72 giờ đầu.
      </p>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          Amitripylin viên 25mg, liều 25-75mg/ngày. Tác dụng phụ: hạ huyết áp tư thế, ngủ gà, khô miệng, lú lẫn, táo bón, bí tiểu, tăng cân. Hạn chế tác dụng phụ bằng cách dùng liều tăng dần.
        </li>
        <li class="list-disc mb-1">
          Carbamazepin viên nén 200mg, liều 400-1.200mg/ngày. Tác dụng phụ: chóng mặt, buồn nôn lúc bắt đầu điều trị, hạn chế bằng cách tăng dần liều.
        </li>
        <li class="list-disc mb-1">
          Gabapentin viên 300mg, liều 900-2.000mg/ngày. Tác dụng phụ: ngủ gà, nhức đầu, chóng mặt, buồn nôn, đi loạng choạng, run. Hạn chế tác dụng phụ bằng cách tăng dần liều.
        </li>
        <li class="list-disc mb-1">
          Pregabalin 150mg-300mg/ngày.
        </li>
        <li class="list-disc mb-1">
          Bôi kem chứa lidocain và prilocain tại chỗ, ngày 3-4 lần.
        </li>
      </ul>
      <p class="font-bold text-lg mb-3">
        TÀI LIỆU THAM KHẢO
      </p>
      <ul class="mb-3 pl-10">
        <li class="list-decimal mb-1">
          L. Bolognia JVS, Lorenzo Cerroni, Human Herpesviruses. Dermatology Elsevier. 2018:p1408-1415. 
        </li>
        <li class="list-decimal mb-1">
          In: Kang S, Amagai M. Varicella and Herpes Zoster. Fitzpatrick's Dermatology, 9e. McGraw-Hill Education; 2019: p3035-3058.
        </li>
        <li class="list-decimal mb-1">
          Bệnh Zona. Hướng dẫn chẩn đoán và điều trị các bệnh da liễu Bộ Y Tế 2015.
        </li>
      </ul>
    `,
  },
  {
    id: 19,
    searchTag: "bệnh lý viêm da cơ địa benh ly viem da co dia",
    title: "Bệnh lý viêm da cơ địa",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Viêm da cơ địa (chàm thể tạng) là một bệnh lý phổ biến trên toàn thế giới, tỷ lệ mắc bệnh dao động khoảng 20-30% ở trẻ em và 2-10% ở người lớn ...",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-3">
        Dưới góc nhìn chuyên môn, BS.CKII Nguyễn Lê Trà Mi, giảng viên bộ môn Da liễu Đại học Y Dược TP.HCM sẽ giúp bạn hiểu rõ hơn về bệnh lý Viêm Da Cơ Địa
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_bai_bao/hinh2.png" alt="knowledge-detail" />
      </div>
      <div class="mb-3">
        Viêm da cơ địa (chàm thể tạng) là một bệnh lý phổ biến trên toàn thế giới, tỷ lệ mắc bệnh dao động khoảng 20-30% ở trẻ em và 2-10% ở người lớn. Viêm da cơ địa là một bệnh da viêm, ngứa nhiều kèm khô da, diễn tiến mạn tính với những đợt bùng phát. Bệnh thường xuất hiện ở trẻ em nhưng có thể gặp ở bất cứ tuổi nào. Nguy cơ mắc bệnh tăng ở những người có tiền sử gia đình có cha hoặc mẹ có cơ địa dị ứng, tuy nhiên, yếu tố môi trường dường như cũng đóng vai trò trong sự phát triển bệnh, đặc biệt những người sống ở các nước công nghiệp phát triển có tỷ lệ viêm da cơ địa cao hơn. 
      </div>
      <p class="font-bold text-xl mb-3">1. Viêm da cơ địa có phải kiêng gì không?</p>
      <div class="mb-3 pl-3">
        Điều trị dự phòng bệnh viêm da cơ địa tái phát là một trong những mục tiêu được ưu tiên hàng đầu. Một trong những biện pháp phòng ngừa là hạn chế sử dụng các thực phẩm hoặc hoạt chất có khả năng gây kích ứng, dị ứng cho người sử dụng. Việc biết được viêm da cơ địa kiêng gì sẽ giúp người bệnh đảm bảo tốt công tác dự phòng.
      </div>
      <div class="mb-3 pl-3">
        Tuy nhiên, cần lưu ý rằng dị ứng thức ăn nếu có chỉ là tình trạng đi kèm thúc đẩy bùng phát chứ không phải là nguyên nhân gây bệnh. Kiêng ăn quá mức là không cần thiết và có thể ảnh hưởng đến dinh dưỡng của trẻ, chỉ nên kiêng những loại thức ăn có gây dị ứng rõ ràng. Một số thực phẩm người bị viêm da cơ địa có thể gây dị ứng bao gồm:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Thịt: </b>Đây là một sản phẩm đến từ động vật, thành phần chứa nhiều chất béo bão hòa nên dễ thúc đẩy các phản ứng viêm. Nhiều nghiên cứu chỉ ra rằng bệnh nhân viêm da cơ địa không nên ăn nhiều thịt đỏ. Thịt trắng như thịt gà, vịt và cá có thể sử dụng như một nguồn chất đạm thay thế cho thịt bò hoặc thịt heo trong khẩu phần ăn hằng ngày.
        </li>
        <li class="list-disc">
          <b>Sữa và các sản phẩm từ sữa: </b>
          Đây là nhóm thực phẩm thường gây dị ứng với nguồn chất béo bão hòa phong phú.
        </li>
        <li class="list-disc">
          <b>Kẹo: </b>Thực phẩm chứa nhiều đường có thể làm nặng hơn các triệu chứng viêm da, nhất là các nhóm đường hóa học.
        </li>
        <li class="list-disc">
          <b>Tinh bột: </b>Nên thay thế các thực phẩm giàu tinh bột như mì hoặc bánh mì bằng các loại hạt ngũ cốc nguyên cám để tăng cường hoạt động hệ tiêu hóa và hệ miễn dịch của cơ thể. Các loại thực phẩm quá giàu tinh bột là tăng cường biểu hiện các triệu chứng của viêm da cơ địa.
        </li>
      </ul>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/viemdacodia1.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/viemdacodia2.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">2.  Dấu hiệu nhận biết viêm da cơ địa?</p>
      <div class="mb-3 pl-3">
        Viêm da cơ địa (chàm) là trình trạng viêm da, ngứa mãn tính. Bệnh lý này có thể đi kèm với các bệnh lý dị ứng khác như hen suyễn, viêm mũi dị ứng... Các triệu chứng của viêm da cơ địa thường khởi phát rất sớm, ngay từ tuổi sơ sinh, có thể tiếp tục đến lúc trưởng thành hoặc cũng có thể xuất hiện bất cứ thời điểm nào trong đời.
      </div>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/viemdacodia3.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình viêm da cơ địa thường khởi phát từ tuổi sơ sinh.
      </div>
      <div class="mb-3 pl-3">
        Viêm da cơ địa có thể ảnh hưởng đến bất kỳ vùng da nào nhưng thường vị trí đặc trưng theo tuổi mắc bệnh, hai bên má và mặt duỗi chi ( nhũ nhi), các nếp gấp (gấp khoeo chân, gấp khuỷu tay...) ở người trưởng thành. Các triệu chứng rầm rộ từng đợt rồi thuyên giảm và sau một thời gian sẽ tái phát. Chính vì vậy, bệnh lý này ảnh hưởng rất nhiều đến chất lượng cuộc sống, làm người bệnh mệt mỏi và khó chịu.
      </div>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/viemdacodia4.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/viemdacodia5.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình Viêm da cơ địa ở nếp gấp khuỷu chân và gấp khuỷu tay.
      </div>
      <div class="mb-3 pl-3">
        Viêm da cơ địa thường tiến triển thành từng đợt, trong đợt cấp tính, người bệnh thấy một vùng da nổi mẩn đỏ và ngứa. Mức độ ngứa đôi khi rất nghiêm trọng, đặc biệt là vào ban đêm khiến người bệnh mất ngủ. Khi bệnh lui dần, vùng da sẽ chuyển sang màu nâu, xám, hoặc để lại các mảng dày da do chà xát nhiều.
      </div>
      <div class="mb-3 pl-3">
        Do ngứa nhiều người bệnh phải gãi, vùng da bệnh rất dễ bị trầy xước, có thể bị nhiễm trùng, tổn thương sẽ sưng viêm, tiết mủ đục, có mùi hôi. Tình trạng ngứa mạn tính và việc chà xát kéo dài sẽ khiến da dày lên. Đặc điểm da của người bệnh viêm da cơ địa thường khô, nứt nẻ.
      </div>
      <p class="font-bold text-xl mb-3">3. Viêm da cơ địa bao lâu thì khỏi?</p>
      <div class="mb-3 pl-3">
        Viêm da cơ địa đa số xuất hiện ở trẻ em và có thể tồn tại kéo dài đến tuổi thanh thiếu niên và người lớn. Đối với nhiều người, bệnh có thể có những đợt cấp theo từng giai đoạn, sau đó biến mất trong một khoảng thời gian dài, đôi khi nhiều năm.
      </div>
      <div class="mb-3 pl-3">
        Bệnh viêm da cơ địa thường kéo dài dai dẳng. Bệnh nhân cần được điều trị trong một khoảng thời gian dài, thường nhiều tháng đến nhiều năm để được kiểm soát tốt. Tuy nhiên, những dấu hiệu và triệu chứng của bệnh vẫn có thể tái phát sau đó.
      </div>
      <div class="mb-3 pl-3">
        Bệnh viêm da cơ địa hiện chưa có phương pháp điều trị đặc hiệu. Điều quan trọng cần lưu ý là việc chẩn đoán sớm và điều trị sớm sẽ mang lại nhiều lợi ích.
      </div>
      <p class="font-bold text-xl mb-3">4. Viêm da cơ địa có bị lây không?</p>
      <div class="mb-3 pl-3">
        Viêm da cơ địa đặc trưng với những tổn thương nổi gồ lên và nằm nông trên bề mặt da. Mối băn khoăn lớn của bệnh nhân và người chăm sóc thường liên quan tới câu hỏi viêm da cơ địa có lây không. Không giống như nhiều bệnh lý về da khác, bệnh viêm da cơ địa không có tính lây lan. Điều này có nghĩa là việc tiếp xúc trực tiếp với chất dịch từ các mụn nước hoặc dịch tiết, máu từ thương tổn do gãi hoặc trầy xước trên da không làm tăng nguy cơ mắc bệnh.
      </div>
      <div class="mb-3 pl-3">
        Tuy nhiên, bệnh viêm da cơ địa có tính di truyền. Nhiều trường hợp trên lâm sàng ghi nhận viêm da cơ địa di truyền từ thế hệ bố mẹ sang thế hệ con cái. Khi có đồng thời bố và mẹ mắc bệnh viêm da cơ địa, hơn 80% các trường hợp con sinh ra sẽ bị bệnh. Tỷ lệ này giảm xuống còn khoảng 50% nếu chỉ có bố hoặc mẹ mắc bệnh. Viêm da cơ địa di truyền còn được thể hiện thông qua việc tăng tỷ lệ mắc bệnh khi có các thành viên khác trong gia đình bị bệnh. Vì vậy, bố mẹ nên lưu ý trong cách chăm sóc da cho trẻ và đưa trẻ đến khám tại các bác sĩ chuyên khoa da liễu để được tư vấn và điều trị phù hợp.
      </div>
      <p class="font-bold text-xl mb-3">5. Cơ chế viêm da cơ địa</p>
      <div class="mb-3 pl-3">
        Sinh bệnh học của viêm da cơ địa phức tạp với sự tham gia của nhiều yếu tố, đến nay vẫn chưa được hiểu hoàn toàn. Tuy nhiên, nhìn chung có sự đồng thuận rằng bệnh viêm da cơ địa có liên quan đến bất thường hàng rào bảo vệ da, rối loạn đáp ứng miễn dịch và bất thường hệ vi sinh thường trú. Mỗi cơ chế đều chịu sự tác động của yếu tố di truyền và môi trường
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          <b>Yếu tố di truyền: </b>
          Viêm da cơ địa là một bệnh di truyền phức tạp. Yếu tố di truyền chiếm 90% các trường hợp viêm da cơ điạ khởi phát sớm, tỷ lệ cùng mắc bệnh của cặp sinh đôi cùng trứng là 77%, cao hơn một cách có ý nghĩa khi so với tỷ lệ cùng mắc là 15% của cặp sinh đôi khác trứng. Có 20 gien đã được đề cập liên quan đến sinh bệnh học, trong đó có gen FLG mã hóa filaggrin, là thành phần quan trọng trong hàng rào bảo vệ da. 
        </li>
        <li class="list-disc mb-1">
          <b>Rối loạn chức năng hàng rào bảo vệ da: </b>
          Hàng rào bảo vệ da có chức năng phòng tránh sự mất nước qua da và ngăn chặn xâm nhập của tác nhân bên ngoài. Khi hàng rào bảo vệ da bị tổn thương dẫn đến hai hậu quả là sự mất nước qua da làm cho da càng khô và sự xâm nhập dễ dàng của tác nhân từ môi trường bên ngoài, làm kích hoạt đáp ứng miễn dịch của cơ thể, gây tăng nhạy cảm đối với kháng nguyên bao gồm dị ứng nguyên và vi sinh vật. 
        </li>
        <li class="list-disc mb-1">
          <b>Rối loạn chức năng miễn dịch: </b>
          Trong cơ thể chúng ta có 2 loại đáp ứng miễn dịch: bẩm sinh ( sinh ra đã có sẵn) và đáp ứng miễn dịch thích nghi (hình thành khi cơ thể tiếp xúc với tác nhân gây bệnh), trong bệnh viêm da cơ địa, cả 2 loại đáp ứng miễn dịch này đều có vai trò và tác động qua lại với nhau. 
          <br />
          Trong các giai đoạn khác nhau của viêm da cơ địa, thì có sự liên quan đến các tế bào gây viêm khác nhau: giai đoạn cấp tính ( TH2 chiếm ưu thế), khi tổn thương lui đi và trở nên mạn tính thì TH1, Th22 chiếm ưu thế. Ngoài ra còn có sự tham gia của các tế bào các cytokine gây viêm khác như bạch cầu đa nhân trung tính, IL31, ….
          </li>
        <li class="list-disc mb-1">
          <b>Hệ vi sinh ở da: </b>
          Vi sinh vật trên da rất đa dạng và phức tạp gồm: vi khuẩn, vi nấm, siêu vi, chúng đóng vai trò quan trọng trong việc cân bằng nội môi của biểu bì ở da. Hơn 90% bệnh nhân viêm da cơ địa có da bị nhiễm tụ cầu. Điều này được cho là do sự suy giảm các peptide kháng khuẩn. Và trong đợt bùng phát cuả bệnh, sự đa dạng của hệ VSV bị giảm đi, trong đó tụ cầu chiếm từ 35-90%. 
        </li>
        <li class="list-disc mb-1">
          <b>Các yếu tố khác: </b>
          Một số yếu tố có liên quan tới sự khởi phát bệnh hoặc làm nặng tình trạng bệnh:<br />
          <ul class="mb-3 pl-10">
            <li class="list-disc mb-1">
              Yếu tố tinh thần: lo lắng, căng thẳng quá mức...
            </li>
            <li class="list-disc mb-1">
              Sự thay đổi thời tiết, khí hậu: bệnh thường nặng lên vào mùa đông, thời tiết hanh khô, độ ẩm thấp.
            </li>
            <li class="list-disc mb-1">
              Dị ứng thức ăn, nước uống, xà phòng, hóa chất, mỹ phẩm
            </li>
          </ul>
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">6. Các giai đoạn viêm da cơ địa</p>
      <p class="mb-3 pl-3">Quá trình diễn tiến bệnh theo tuổi có thể được chia làm 3 giai đoạn: </p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Viêm da cơ địa ở nhũ nhi
        </li>
        <li class="list-disc">
          Viêm da cơ địa ở trẻ em
        </li>
        <li class="list-disc">
          Viêm da cơ địa ở người lớn
        </li>
      </ul>
      <div class="mb-3 pl-3">Trong mỗi giai đoạn, có thể biểu hiện thương tổn là cấp tính, bán cấp và mạn tính. Viêm da cơ địa ở nhũ nhi có đặc trưng là viêm nhiều, thương tổn thường ở mặt. Viêm da cơ địa ở trẻ em thì thương tổn thường ở mặt duỗi tay chân. Viêm da cơ địa ở người lớn thường ít viêm hơn và có xu hướng lichen hóa, thường xuất hiện ở các nếp gấp. </div>
      <div class="mb-3 pl-3">
        Đặc điểm chung của các dạng bệnh là ngứa dữ dội, với những đợt bùng phát của bệnh cảnh viêm da mạn tính. Ngứa thường xảy ra ban đêm và thường tăng lên khi trời nóng, đổ mồ hôi nhiều hoặc tiếp xúc với quần áo làm từ len. 
      </div>
      <div class="mb-3 pl-3">
        Chứng khô da thường gặp ở hầu hết bệnh nhân viêm da cơ địa, xuất hiện ở nhiều vùng da trên cơ thể chứ không chỉ riêng vùng da đang viêm.
      </div>
      <p class="font-bold text-xl mb-3">6. Các giai đoạn viêm da cơ địa</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          <b>Viêm da cơ địa ở nhũ nhi: </b>
          Thường gặp ở trẻ < 2 tuổi, đặc trưng bởi các mảng da viêm đỏ, ngứa dữ dội. Trên bề mặt có mụn nước hay rỉ dịch, đóng mài, bong vảy, nhiều vết cào gãi. Vị trí thường gặp ở mặt, chủ yếu là hai má, thường không ảnh hưởng tới vùng trung tâm mặt. Vùng da đầu, cổ, mặt duỗi các chi và lưng có thể gặp. Vùng tã lót thường không bị ảnh hưởng. 
        </li>
        <li class="list-disc mb-1">
          <b>Viêm da cơ địa trẻ em: </b>
          được định nghĩa xảy ra ở trẻ từ 2-12 tuổi. Ở giai đoạn sớm, triệu chứng da cũng biểu hiện viêm nhiều như dạng viêm da cơ địa nhũ nhi, dần dần diễn tiến theo hướng viêm da cơ địa người lớn, thương tổn khô hơn và ít tiết dịch hơn
        </li>
        <li class="list-disc mb-1">
          <b>Viêm da cơ địa ở người lớn/ thanh thiếu niên > 12 tuổi: </b>
           thường là các thương tổn bán cấp và mạn tính. Triệu chứng da gồm ít ban đỏ sậm màu, bề mặt có ít mụn nước hoặc chỉ rỉ dịch và vết tích mụn nước, đóng mài, có thể tăng sừng, bong vảy, dày sừng lichen hóa. Vị trí ưu thế ở mặt gấp vùng cổ, nếp khuỷu, nếp khoeo, tuy nhiên cũng thường xuất hiện ở bàn tay và mí mắt. 
        </li>
        <li class="list-disc mb-1">
          Ở bệnh nhân lớn tuổi, đặc điểm nổi bật là da khô và không có thương tổn ở vùng nếp điển hình như bệnh nhân trẻ em. 
          <br/><b>Các biến thể đặc biệt khác: </b>biểu hiện đơn độc hoặc đi kèm với các biểu hiện lâm sàng nêu trên.
        </li>
        <li class="list-disc mb-1">
          <b>Chàm mi mắt: </b>
          có thể là biểu hiện duy nhất trong bệnh viêm da cơ địa, với đặc điểm lichen hóa.
        </li>
        <li class="list-disc mb-1">
          <b>Chàm môi: </b>
          là tình trạng khô môi và viền môi, bong vảy và có thể nứt nẻ. Bệnh nhân cố gắng liếm môi để làm ẩm nhưng càng làm kích ứng da quanh miệng.
        </li>
        <li class="list-disc mb-1">
          <b>Chàm bàn tay: </b>
          chiếm 60% trường hợp viêm da cơ địa người lớn mặc dù có thể xuất hiện ở trẻ em. Biểu hiện điển hình liên quan đến mặt gấp cổ tay, mặt lưng của bàn tay. Mặt bên ngón tay và lòng bàn tay có thể có mụn nước sâu như tổ đỉa (chàm dạng tổ đỉa). Ngoài cơ chế bệnh sinh nêu trên, tiếp xúc nước, chất tẩy rửa vệ sinh gia dụng hoặc nghề nghiệp là yếu tố nguy cơ khác. 
        </li>
        <li class="list-disc mb-1">
          <b>Thương tổn dạng sẩn ngứa: </b>
          biểu hiện là cá nốt hình vòm, chắc, với trung tâm đóng mài, phân bố ưu thế ở mặt duỗi chi tương tự như bệnh sẩn ngứa của bệnh nhân không viêm da cơ địa
        </li>
        <li class="list-disc mb-1">
          <b>Thương tổn dạng đồng tiền: </b>
          biểu hiện là những mảng ban đỏ hình tròn như đồng xu, kích thước khoảng 1-3 cm đường kính, thường xuất tiết và đóng mài, tương tự như bệnh chàm đồng tiền ở bệnh nhân không có viêm da cơ địa. Vị trí: ở mặt duỗi ở cả trẻ em và người lớn.
        </li>
        <li class="list-disc mb-1">
          Chàm quầng vú với xuất tiết, đóng mài, tróc vảy quầng vú
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">8. Bà bầu bị viêm da cơ địa phải làm sao?</p>
      <div class="mb-3 pl-3">
        Viêm da cơ địa khi mang thai là trường hợp không phải hiếm gặp. Bệnh có thể xảy ra lần đầu tiên trong thai kỳ. Nếu trước đây bạn đã từng bị viêm da cơ địa, thì việc mang thai có thể khiến bệnh bùng phát. Người ta ước tính rằng chỉ có khoảng 20 đến 40 phần trăm phụ nữ bị viêm da cơ địa mang thai có tiền sử bị bệnh trước đó.
      </div>
      <div class="mb-3 pl-3">
        Nỗi lo chung của các mẹ bầu là viêm da cơ địa có ảnh hưởng đến thai nhi hay không. Thực tế, bệnh viêm da cơ địa chỉ là bệnh ngoài da nhưng lại có liên quan đến di truyền. Bên cạnh đó việc mẹ bầu sử dụng thuốc điều trị sai cách có thể gây ảnh hưởng trực tiếp hoặc gián tiếp đến thai nhi.
      </div>
      <div class="mb-3 pl-3">
        Do đó, khi lựa chọn phương pháp điều trị viêm da cơ địa khi mang thai cần đảm bảo các yếu tố sau:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          Yếu tố quan trọng nhất là phải đảm bảo an toàn cho cả mẹ và bé, hạn chế tối đa các tác dụng phụ, không sử dụng thuốc trong thời gian quá dài.
        </li>
        <li class="list-disc mb-1">
          Hiệu quả nhanh chóng, ngăn ngừa tái phát.
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Điều trị Viêm da cơ địa ở phụ nữ mang thai: 
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          Dưỡng ẩm vẫn là điều quan trọng trong quản lý viêm da cơ địa ở tất cả bệnh nhân. 
        </li>
        <li class="list-disc mb-1">
          Tắm nước ấm, sử dụng sữa tắm không chứa xà phòng có thể giảm thiểu sự phá vỡ hàng rào bảo vệ da.
        </li>
        <li class="list-disc mb-1">
          Steroid tại chỗ vừa phải đến mạnh kết hợp với kem dưỡng ẩm vẫn là trụ cột điều trị bệnh chàm nhẹ đến trung bình, có thể tiếp tục được sử dụng tương đối an toàn trong suốt thai kỳ.
        </li>
        <li class="list-disc mb-1">
          Đối với trường hợp bệnh mức độ trung bình, nặng không kiểm soát được bằng các phương pháp trên, có thể cần kết hợp với các thuốc khác theo chỉ định của các bác sĩ. 
        </li>
        <li class="list-disc mb-1">
          Steroid đường uống có liên quan đến dị tật hở môi và vòm miệng ở chuột, nhưng có rất ít bằng chứng chứng minh điều này xảy ra ở người, hiếm khi được các bác sĩ da liễu sử dụng để điều trị.
        </li>
        <li class="list-disc mb-1">
          Tia UVB dải hẹp đã được chứng minh là làm giảm mức độ nghiêm trọng của bệnh hơn 30% trong một thử nghiệm ngẫu nhiên có đối chứng và có lẽ là phương pháp điều trị bậc hai an toàn nhất trong thai kỳ.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">9. Trẻ bị viêm da cơ địa phải làm sao?</p>
      <div class="mb-3 pl-3">
        Bệnh viêm da cơ địa là bệnh da phổ biến nhất ở trẻ em, gây nhiều khó chịu cho trẻ. Chăm sóc da đúng cách không những làm giảm bớt khó chịu ở trẻ mà còn giúp phòng tránh những biến chứng của bệnh.
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          <b>Kiểm soát ngứa cho trẻ:</b>
          <br />Ngứa sẽ khiến trẻ gãi nhiều và làm cho bệnh viêm da cơ địa ở trẻ trở nên nặng hơn, thậm chí gây nhiễm trùng. Để giảm ngứa cho trẻ có thể sử dụng một số cách sau:
          <ul class="mb-3 ml-7">
            <li class="list-disc mb-1">
              Đắp ẩm hoặc sử dụng băng ướt cho vùng da tổn thương.
            </li>
            <li class="list-disc mb-1">
              Vệ sinh sạch sẽ bàn tay của trẻ, không để móng tay trẻ dài.
            </li>
            <li class="list-disc mb-1">
              Đánh lạc hướng sự tập trung chú ý của trẻ khi trẻ đang ngứa và gãi nhiều, như chơi trò chơi, xem TV,...
            </li>
            <li class="list-disc mb-1">
              Sử dụng thuốc cho trẻ theo hướng dẫn của bác sĩ: thuốc thoa tại chỗ như Tacrolimus, corticosteroid vào vùng da khô, sẩn đỏ.
            </li>
            <li class="list-disc mb-1">
              Bôi kem dưỡng ẩm toàn thân.
            </li>
          </ul>
        </li>
        <li class="list-disc mb-1">
          <b>Dưỡng ẩm cho da:</b>
          <div class="mb-3 pl-3">
            Nên thường xuyên sử dụng kem dưỡng ẩm ít gây kích ứng da khi trẻ xuất hiện dấu hiệu của bệnh và ngay cả khi bệnh đã hết. Nên bôi toàn thân kem dưỡng chứ không chỉ riêng vùng da tổn thương. Nếu bác sĩ có chỉ định bôi thuốc thì bôi thuốc trước rồi thoa một lớp kem dưỡng ẩm phủ lên trên. 
          </div>
          <div class="mb-3 pl-3">
            Số lần sử dụng kem dưỡng tùy thuộc mức độ nặng của bệnh và nên bôi kem sau khi làm ẩm da (tắm, băng ướt,...). Khi lấy kem để bôi cần chú ý nên sử dụng một dụng cụ sạch lấy ra một lượng vừa đủ để bôi, tránh làm bẩn lượng kem còn lại chưa dùng đến.
          </div>
        </li>
        <li class="list-disc mb-1">
          <b>Cách tắm cho trẻ:</b>
          <div class="mb-3 pl-3">
            Nước quá nóng sẽ làm da trẻ khô và ngứa nhiều hơn, do đó không nên tắm cho trẻ với nước quá nóng, chỉ nên dùng nước ấm (không quá 30 độ C hoặc mát hơn, phụ thuộc thời tiết lúc tắm). Tắm cho trẻ cần tiến hành hằng ngày, nên sử dụng sữa tắm thay thế cho xà phòng (bởi xà phòng làm da khô hơn). 
          </div>
        </li>
      </ul>
      <div class="mb-3 pl-3">
        <b>Những lưu ý khác khi chăm sóc trẻ viêm da cơ địa: </b>
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          Nếu trẻ bị viêm da quanh miệng liên quan đến thức ăn hoặc nước bọt thì vùng da quanh miệng cần được vệ sinh sạch bằng khăn mềm và ướt, sau đó bôi một lớp kem dưỡng ẩm.
        </li>
        <li class="list-disc mb-1">
          Quần áo cho trẻ nên lựa chọn chất liệu cotton mềm mại, nhãn mác nên được loại bỏ để tránh cọ xát vào da. 
        </li>
        <li class="list-disc mb-1">
          Tránh các chất dễ gây kích ứng cho da (chất tẩy rửa, xà phòng,...) và các yếu tố làm bệnh của trẻ nặng lên.
        </li>
        <li class="list-disc mb-1">
          Trẻ nên được sống trong môi trường thoáng mát cả ngày lẫn đêm.
        </li>
        <li class="list-disc mb-1">
          Trẻ cần đi khám ngay nếu không cải thiện sau 2 ngày điều trị hoặc có biểu hiện nhiễm trùng (trẻ bị sốt cao, vùng da tổn thương nứt, chảy nước vàng đục,...)
        </li>
      </ul>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/viemdacodia6.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình viêm da cơ địa thường khởi phát từ tuổi sơ sinh.
      </div>
      <p class="font-bold text-xl mb-3">10. Làm sao để chữa bệnh viêm da cơ địa?</p>
      <div class="mb-3 pl-3">
        Bởi vì bệnh viêm da cơ địa là bệnh mạn tính cho nên điều trị là nhắm đến giai đoạn bùng phát với liệu trình ngắn hạn và điều trị duy trì trong giai đoạn lui bệnh với chăm sóc da, phòng tránh các yếu tố thúc đẩy. Các biện pháp bao gồm: giáo dục sức khỏe, chăm sóc da nhẹ nhàng, sử dụng kem dưỡng ẩm, điều trị kháng viêm và kháng sinh nếu cần. Thuốc bôi đóng vai trò chính, trường hợp bệnh nặng có thể cần dùng thuốc hệ thống, liệu pháp ánh sáng kết hợp với điều trị tại chỗ. 
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          <b>Giáo dục sức khỏe: </b>
          Cần giáo dục sức khỏe cho bệnh nhân viêm da cơ địa, nhấn mạnh đây là bệnh mạn tính hay tái phát. Tránh tiếp xúc các yếu tố khởi phát như hương liệu, xà phòng có tính kiềm, tẩy tế bào chết cơ học, xi măng,…Cần hướng dẫn cho bệnh nhân và gia đình là dị ứng thức ăn nếu có chỉ là tình trạng đi kèm thúc đẩy bùng phát chứ không phải là nguyên nhân gây bệnh. Kiêng ăn quá mức là không cần thiết và có thể ảnh hưởng đến dinh dưỡng của trẻ, chỉ nên kiêng những loại thức ăn có gây dị ứng rõ ràng. 
        </li>
        <li class="list-disc mb-1">
          <b>Tắm và dưỡng ẩm: </b>
          Cốt lõi của chăm sóc da là sử dụng dưỡng ẩm thường xuyên để tăng cường độ ẩm và chức năng hàng rào bảo vệ da. Nhìn chung, dạng mỡ và dạng kem duy trì độ ẩm cho da tốt, do đó hiệu quả hơn dạng lotion. Kem chứa ceramide rất hiệu quả . Dưỡng ẩm nên được thoa trong vòng vài phút ngay sau khi tắm. Bệnh nhân nên tắm hàng ngày với sữa tắm không xà phòng, không mùi thơm, thời gian tắm nên ít hơn 10 phút và không nên tắm nước quá nóng. Nếu dự định sử dụng thuốc thoa corticoid hay thuốc kháng viêm khác thì nên thoa ngay sau khi tắm và trước khi thoa dưỡng ẩm. 
        </li>
        <li class="list-disc mb-1">
          <b>Thuốc kháng viêm tại chỗ: </b>
          <div class="mb-3 pl-5">
            1. Corticosteroid thoa tại chỗ: là thuốc thoa đầu tay trong điều trị viêm da cơ địa, dùng điều trị sang thương tất cả giai đoạn và làm giảm ngứa. Thuốc nên được thoa 2 lần/ngày trong đợt cấp, giảm liều dần (giảm độ mạnh của thuốc, giảm số lần thoa trong ngày, số ngày trong tuần) khi triệu chứng cải thiện. Tác dụng phụ khi dùng lâu dài: teo da, giãn mạch, phát ban mụn trứng cá, …
          </div>
          <div class="mb-3 pl-5">
            2. Thuốc ức chế calcineurin (Tacrolimus): nồng độ 0.03% và 0.1%, dùng được cho trẻ em trên 2 tuổi. Thuốc ưu tiên lựa chọn trong điều trị thương tổn ở mặt ( đặc biệt vùng quanh mắt), vùng nếp như cổ, nách, bẹn. Thuốc có thể gây kích ứng làm cho bệnh nhân cảm thấy nóng rát, nhất là khi mới bắt đầu điều trị. 
          </div>
        </li>
        <li class="list-disc mb-1">
          <b>Thuốc kháng viêm toàn thân và ức chế miễn dịch:  </b>
          <div class="mb-3 pl-5">
            1. Chỉ định trong trường hợp bệnh viêm da cơ địa mức độ trung bình và nặng đã thất bại với điều trị tại chỗ. Các thuốc sử dụng đường toàn thân bao gồm: corticosteroid, cyclosporin, methotrexate, mycophenolate mofetil, azathioprine, các thuốc sinh học như dupilumab, omalizumab,…
          </div>
          <div class="mb-3 pl-5">
            2. Khi có chỉ định sử dụng các thuốc này, cần phải cân nhắc lợi ích và nguy cơ trong từng trường hợp cụ thể. Kết hợp điều trị toàn thân và tại chỗ giúp tối ưu hóa hiệu quả. 
          </div>
        </li>
        <li class="list-disc mb-1">
          <b>Kháng histamin: </b>
          <div class="mb-3 pl-5">
            Thuốc kháng histamin ít đóng vai trò trong viêm da cơ địa. Kháng histamin có tính an thần như hydroxyzine, diphehydramine và doxepin có thể dùng để giảm ngứa, từ đó giảm cào gãi, dùng buổi tối giúp bệnh nhân dễ ngủ. 
          </div>
        </li>
        <li class="list-disc mb-1">
          <b>Kháng sinh: </b>khi nghi ngờ có nhiễm trùng.
        </li>
      </ul>
    `,
  },
  {
    id: 20,
    searchTag: "mụn bọc nguyên nhân và cách điều trị mun boc nguyen nhan va cach dieu tri",
    title: "Mụn bọc nguyên nhân và cách điều trị",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Mụn bọc xuất hiện là kết quả của quá trình viêm nhiễm trên da, kết hợp với lỗ chân lông bị bã nhờn, bụi bẩn ...",
    imageUrl: "/images/logo_kien_thuc/munboc1.jpg",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/munboc1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">Vì sao bạn bị nổi mụn bọc?</p>
      <div class="mb-3 pl-3">
        Mụn bọc xuất hiện là kết quả của quá trình viêm nhiễm trên da, kết hợp với lỗ chân lông bị bã nhờn, bụi bẩn, phấn trang điểm gây bít tắc khiến vi khuẩn Propionibacterium phát triển hoặc do hiện tượng sừng hóa. Sự xâm nhập của vi khuẩn này gây tổn thương và kích ứng nang lông nặng hơn, dẫn đến mụn bọc hình thành. Loại mụn này là hậu quả của quá trình viêm nhiễm mụn trong thời gian dài mà không được xử lý, dẫn đến các vi khuẩn viêm tấn công sâu và gây tổn thương vào cấu trúc bên trong của da. Mụn bọc thường có kích thước khá lớn và gây cảm giác đau nhức cho người bệnh.
      </div>
      <p class="font-bold text-xl mb-3">Mụn bọc bao lâu thì hết?</p>
      <div class="mb-3 pl-3">
        Tùy vào kích thước mụn, tình trạng viêm và cách điều trị sẽ ảnh hưởng đến thời gian hết mụn bọc.Thông thường các tổn thương dạng mụn mủ hoặc mụn nang có thể kéo dài vài tuần một khi chúng bắt đầu hình thành, cho đến khi tình trạng viêm thuyên giảm. Đừng cố nặn mụn nang khi mụn còn chưa “chín” vì điều này sẽ khiến cho tình trạng mụn trở nên tồi tệ hơn.
      </div>
      <p class="font-bold text-xl mb-3">Mụn bọc khi nào nặn được?</p>
      <div class="mb-3 pl-3">
        Từ lúc mụn xuất hiện vết đỏ rồi sưng lên cho tới khi chín sẽ mất khoảng 5 - 6 ngày. Tuy nhiên, tùy vào cơ địa của mỗi người, thời gian mụn bọc chín sẽ khác nhau. Do đó, bạn cần giữ gìn vệ sinh vùng da mặt sạch sẽ và tuyệt đối không nặn khi mụn bọc chưa chín. Việc nặn mụn sẽ gây ảnh hưởng không nhỏ, khiến cho da bị tổn thương và để lại những hậu quả nặng nề.
      </div>
      <div class="mb-3 pl-3">
        Mụn bọc đã chín là khi cồi mụn khô lại, nhô cao lên bề mặt da và sờ vào không thấy đau nhức. Ngược lại, khi sờ vào mà bạn cảm thấy đau, còn mủ bên trong thì rất có thể mụn bọc chưa chín.
      </div>
      <p class="font-bold text-xl mb-3">Làm sao để mụn bọc nhanh xẹp?</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Đầu tiên, bạn cần tuyệt đối tránh sờ tay lên mặt hoặc nặn mụn khi chưa chín cồi.
        </li>
        <li class="list-disc">
          Luôn giữ cho vùng da bị mụn sạch sẽ, rửa mặt hai lần mỗi ngày. Chú ý sử dụng sản phẩm rửa mặt dịu nhẹ,nhẹ nhàng dùng ngón tay làm sạch, tránh chà xát mạnh tay làm vỡ nhân mụn.
        </li>
        <li class="list-disc">
          Chườm mát cho nốt mụn cũng rất hữu ích, việc này giúp giảm viêm và làm mụn nhanh xẹp.
        </li>
        <li class="list-disc">
          Có thể kết sử dụng một số loại thuốc thoa có hoạt tính kháng viêm: benzoyl peroxide, retinoids thoa, và kháng sinh thoa theo chỉ định của bác sĩ.
        </li>
        <li class="list-disc">
          Riêng tình trạng mụn bọc nặng, bạn cần đến bác sĩ da liễu thăm khám để được điều trị kết hợp giữa thuốc thoa và thuốc uống, nhằm kiểm soát mụn tốt hơn ngăn chặn các đợt bùng phát mụn. 
        </li>
      </ul>
      <div class="mb-1 flex justify-center">
        <img src="/images/logo_kien_thuc/munboc2.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình: Để mụn bọc nhanh xẹp bạn nên thoa một số thuốc kháng viêm như benzoyl peroxide.
      </div>
    `,
  },
  {
    id: 21,
    searchTag: "Điều Trị Nám Bằng Laser Liệu Có Thực Sự Hiệu Quả dieu tri nam bang laser lieu co thuc su hieu qua",
    title: "Điều Trị Nám Bằng Laser Liệu Có Thực Sự Hiệu Quả?",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Nám da là một tình trạng da liễu phổ biến, xuất hiện các đốm sắc màu nâu nhạt đến đậm, hoặc xám nâu, đối xứng hai bên và thường thấy ở mặt ...",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-3 pl-3">
        Nám da là một tình trạng da liễu phổ biến, xuất hiện các đốm sắc màu nâu nhạt đến đậm, hoặc xám nâu, đối xứng hai bên và thường thấy ở mặt. Do đó, chúng gây mất thẩm mỹ và ảnh hưởng đến vẻ ngoài cũng như sự tự tin của người bệnh. Ngày nay, dưới sự tiến bộ của y học, có nhiều phương pháp hữu hiệu được ứng dụng điều trị nám da. Trong đó, phải kể đến phương pháp được nhiều người quan tâm đó là laser, liệu laser có thực sự hiệu quả trong điều trị nám da? Cùng tìm hiểu bài phân tích dưới đây qua dưới góc nhìn của Bác sĩ CKII, Giảng viên trường Đại Học Y Dược Thành Phố Hồ Chí Minh. 
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_bai_bao/hinh2.png" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. Nguyên Nhân Nội Sinh Của Nám Da</p>
      <div class="mb-3 pl-3">
        Nám da là một bệnh lý có cơ chế hình thành phức tạp, cho đến nay ngành y học vẫn chưa hiểu hết về nám. Tuy nhiên các chuyên gia da liễu nhận thấy nám da có thể được tạo ra bởi một loạt các nguyên nhân nội sinh, bao gồm các yếu tố di truyền, tăng sản xuất melanin do biến đổi hormone, và các tác động của các loại thuốc và các điều kiện nội tiết khác. Cụ thể:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Di Truyền: </b>nguyên nhân di truyền có thể đóng vai trò quan trọng trong việc phát triển nám da. Các nghiên cứu cho thấy rằng tiền sử gia đình có người mắc nám da có thể tăng nguy cơ cho việc xuất hiện nám da ở thế hệ tiếp theo.
        </li>
        <li class="list-disc">
          <b>Thay Đổi Hormone: </b>sự thay đổi hormone trong cơ thể, như khi mang thai hoặc trong quá trình lão hóa, có thể dẫn đến sự tăng sản xuất melanin và do đó góp phần vào việc hình thành nám da.
        </li>
        <li class="list-disc">
          <b>Sử Dụng Thuốc: </b>
          một số loại thuốc, như thuốc tránh thai hoặc thuốc điều trị rối loạn nội tiết, cũng có thể tăng nguy cơ cho việc xuất hiện nám da.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">2. Nguyên Nhân Ngoại Sinh Của Nám Da</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lasernam2.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-3">
        Ngoài các yếu tố nội sinh, nám da cũng có thể được tạo ra do tác động của một số yếu tố ngoại sinh, bao gồm:
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Sự tác động của ánh sáng mặt trời: </b>
          ánh sáng mặt trời chứa các tia UV có thể kích thích sản xuất melanin trong da, dẫn đến việc hình thành nám da.
        </li>
        <li class="list-disc">
          <b>Sử dụng mỹ phẩm không phù hợp: </b>
          một số loại mỹ phẩm chứa các hợp chất có thể làm da nhạy cảm với ánh sáng mặt trời, từ đó góp phần vào việc hình thành nám da.
        </li>
        <li class="list-disc">
          <b>Tác động của môi trường: </b>
          các yếu tố môi trường như ô nhiễm không khí cũng có thể góp phần vào việc tạo ra nám da.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">3. Phương Pháp Laser Trong Điều Trị Nám Da</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lasernam3.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-3">
        Laser là các tia sáng đơn sắc có cường độ cao.<br/>
        Phương pháp điều trị nám da bằng laser đã trở thành một trong những phương pháp phổ biến được nhiều người quan tâm và lựa chọn. Laser là một công nghệ tiên tiến có khả năng tác động chính xác vào melanin, chất gây ra sắc tố da, nằm trong các túi melanosome trên da mà không gây tổn thương cho các cấu trúc da xung quanh. Điều này giúp loại bỏ hoặc làm nhạt các 
      </div>
      <p class="font-bold text-xl mb-3">4. Ưu điểm của phương pháp Laser:</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Hiệu quả cao: </b>
          laser có thể tiêu diệt melanin một cách chính xác và hiệu quả, giúp làm giảm hoặc loại bỏ các vết nám một cách đáng kể.
        </li>
        <li class="list-disc">
          <b>An toàn: </b>
          các loại laser được thiết kế để phá hủy melanin mà không làm tổn thương da xung quanh, đảm bảo tính an toàn trong quá trình điều trị
        </li>
        <li class="list-disc">
          <b>Không đau và ít tác dụng phụ: </b>
          quá trình điều trị bằng laser thường không gây đau đớn và ít tác động phụ so với các phương pháp điều trị khác như tẩy da hoặc phẫu thuật.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">5. Nhược điểm của phương pháp Laser:</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Yêu cầu số lần điều trị nhiều: </b>
          để đạt được kết quả tốt nhất, thường cần phải thực hiện một loạt các buổi điều trị, đặc biệt là với các trường hợp nám da nặng.
        </li>
        <li class="list-disc">
          <b>Chi phí tương đối cao: </b>
          phương pháp điều trị bằng laser có thể đòi hỏi chi phí đáng kể so với các phương pháp khác.
        </li>
        <li class="list-disc">
          <b>Cần thời gian hồi phục: </b>
          sau quá trình điều trị, có thể xuất hiện các tác động phụ như đỏ da, sưng tấy, và da mỏng yếu. Việc phục hồi có thể mất một khoảng thời gian nhất định.
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Mặc dù có những nhược điểm nhất định, nhưng ưu điểm về hiệu quả và tính an toàn của phương pháp laser trong điều trị nám da thường làm cho nó trở thành lựa chọn hàng đầu của nhiều người
      </div>
      <p class="font-bold text-xl mb-3">6. Lưu ý sau điều trị:</p>
      <div class="mb-3 pl-3">
        Sau khi điều trị nám da bằng laser, da thường trở nên mỏng và yếu hơn, có thể xuất hiện phản ứng viêm. Để bảo vệ và duy trì kết quả tốt sau điều trị, cần tuân thủ các biện pháp sau:
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lasernam4.jpg" alt="knowledge-detail" />
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Làm sạch: </b>
          sử dụng sữa rửa mặt dịu nhẹ để loại bỏ bụi bẩn và dầu nhờn, nhưng tránh chà sát mạnh để không làm tổn thương da.
        </li>
        <li class="list-disc">
          <b>Dưỡng ẩm: </b>
          cung cấp độ ẩm cho da để ngăn chặn tình trạng bong tróc và nhanh chóng hồi phục.
        </li>
        <li class="list-disc">
          <b>Chống nắng: </b>
          sử dụng kem chống nắng để ngăn chặn thâm sạm sau điều trị và bảo vệ da khỏi tác động của tia UV.
        </li>
        <li class="list-disc">
          <b>Chế độ ăn uống khoa học: </b>
          ăn uống giàu vitamin và chất chống oxy hóa giúp da phục hồi nhanh chóng và duy trì làn da khỏe mạnh
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">Kết Luận</p>
      <div class="mb-3 pl-3">
        Phương pháp điều trị nám da bằng laser là một trong những lựa chọn hiệu quả và an toàn được khá nhiều bác sĩ da liễu. Tuy nhiên, để đạt được kết quả tốt nhất, việc lựa chọn cơ sở thẩm mỹ uy tín và chuyên gia có kinh nghiệm là vô cùng quan trọng. Bên cạnh đó, sau quá trình điều trị, việc chăm sóc da đúng cách và tuân thủ các hướng dẫn của bác sĩ là rất quan trọng để đảm bảo hiệu quả và an toàn cho da.
      </div>
      <div class="mb-3 pl-3">
        Vì vậy, laser chữa nám da là một trong những giải pháp hàng đầu cho việc làm đẹp da mặt, mang lại cho người dùng hy vọng và tự tin trong việc giảm bớt các vấn đề về nám da và cải thiện làn da một cách tự nhiên và hiệu quả.
      </div>
            <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/lasernam5.png" alt="knowledge-detail" />
      </div>
    `,
  },
  {
    id: 22,
    searchTag: "bệnh thủy đậu benh thuy dau nguyen nhan va cach dieu tri",
    title: "Bệnh thủy đậu nguyên nhân và cách điều trị",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Thủy đậu (chickenpox) là bệnh truyền nhiễm cấp tính do varicella zoster virus (VZV) gây ra, đặc trưng bởi phát ban và mụn nước ...",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-3 pl-3">
        Dưới góc nhìn chuyên môn, BS.CKII Nguyễn Lê Trà Mi, giảng viên bộ môn Da liễu Đại học Y Dược TP.HCM sẽ giúp bạn hiểu rõ hơn về bệnh Thủy đậu.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_bai_bao/hinh2.png" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. Thủy đậu là gì?</p>
      <div class="mb-3 pl-3">
        Thủy đậu (chickenpox) là bệnh truyền nhiễm cấp tính do varicella zoster virus (VZV) gây ra, đặc trưng bởi phát ban và mụn nước. Bệnh lây truyền qua tiếp xúc với giọt khí dung từ dịch tiết mũi họng của người bệnh hoặc do tiếp xúc trực tiếp với dịch mụn nước từ sang thương da. Nhiễm thủy đậu nguyên phát ở trẻ em có diễn tiến bệnh thường lành tính trong khi các biểu hiện nặng chủ yếu xảy ra ở người lớn hoặc người suy giảm miễn dịch.
      </div>
      <p class="font-bold text-xl mb-3">2. Dịch tễ học</p>
      <div class="mb-3 pl-3">
        Thủy đậu xảy ra trên toàn thế giới và lưu hành ở những quần thể đông dân nơi có khả năng duy trì sự lây truyền quanh năm, với đỉnh dịch xảy ra mỗi 2 – 3 năm. Tỷ lệ mắc thủy đậu dao động từ 13 – 16 trường hợp trên 1000 người mỗi năm. Ở vùng khí hậu ôn đới, tỷ lệ mắc bệnh chủ yếu ở trẻ em độ tuổi mẫu giáo (1 – 4 tuổi) hoặc trẻ học tiểu học (5 – 9 tuổi) với tỷ lệ nhiễm bệnh trước tuổi thiếu niên thường cao hơn 90%, chỉ một tỷ lệ nhỏ dưới 10% xảy ra sau độ tuổi này. Ngược lại ở vùng khí hậu nhiệt đới, độ tuổi trung bình mắc thủy đậu thường cao hơn, giải thích cho việc này có thể liên quan đến các đặc tính của VZV như bất hoạt bởi nhiệt độ và/hoặc độ ẩm cũng như một số yếu tố khác ảnh hưởng đến nguy cơ phơi nhiễm (tỷ lệ tiêm vắc xin thủy đậu ở khu viện ôn đới thường thấp hơi khu vực nhiệt đới).
      </div>
      <p class="font-bold text-xl mb-3">3. Tác nhân gây bệnh</p>
      <div class="mb-3 pl-3">
        Vi rút gây bệnh thủy đậu có tên là varicella zoster virus, sở dĩ có tên gọi như vậy là do cùng một tác nhân nhưng VZV có thể gây ra hai bệnh cảnh khác nhau trên lâm sàng là thủy đậu (varicella – nhiễm VZV tiên phát) và zona (zoster – sự tái hoạt của VZV). VZV thuộc phân nhóm Alpha herpesvirinae, có đặc tính hướng thần kinh, họ Herpesviridae, có khả năng sống tiềm ẩn vĩnh viễn trong cơ thể ký chủ, cấu tạo với lõi là DNA, bên ngoài có vỏ bọc, kích thước khoảng 150 – 200nm.
      </div>
      <div class="mb-3 pl-3">
        Khi sống ở điều kiện ngoại cảnh, VZV có tính đề kháng kém, dễ bị phá hủy bởi các chất tẩy rửa, hóa chát diệt trùng thông thường, dung môi hòa tan lipid và tia cực tím. Trong điều kiện nội bào, VZV có khả năng di chuyển trực tiếp từ tế bào này sang tế bào khác thông qua tiếp xúc trực tiếp và hiếm khi ở dạng tự do trong máu vì vậy có khả năng tránh được các đáp ứng miễn dịch của cơ thể như kháng thể lưu hành trong máu.
      </div>
      <p class="font-bold text-xl mb-3">4. Cơ chế bệnh sinh</p>
      <div class="mb-3 pl-3">
        Ban đầu, VZV xâm nhập vào cơ thể thông qua niêm mạc đường hô hấp trên và hầu họng. Từ đây, siêu vi lây nhiễm và nhân lên trong các tế bào lympho T tại chỗ rồi phát tán vào máu lần thứ nhất. Tế bào lympho T bị nhiễm mang theo VZV chu du trong máu rồi tới hệ võng nội mô, vị trí chính cho sự nhân lên của vi rút trong suốt khoảng thời gian còn lại trước khi chúng xâm nhập vào máu lần thứ 2. Mặc dù, trong toàn bộ giai đoạn này vi rút xuất hiện rất sớm trong máu của bệnh nhân nhưng sự nhân lên và gây biểu hiện lâm sàng của VZV vẫn bị trì hoãn là do phản ứng miễn dịch bẩm sinh của vật chủ (ví dụ: interferon, các tế bào diệt tự nhiên và sự phát triển của phản ứng miễn dịch đặc hiệu với VZV). Cuối cùng, khi sự phát triển của siêu vi vượt qua được hàng rào bảo vệ, lượng vi rút tăng sinh thứ phát trong máu gia tăng đáng kể thì các biểu hiện lâm sàng của thủy đậu mới bắt đầu diễn ra. Điều này giải thích vì sao, khoảng 10 – 14 ngày sau khi nhiễm VZV người bệnh mới xuất hiện các triệu chứng toàn thân và tổn thương da. Ngoài ra, do thời gian ủ bệnh tương đối kéo dài, nếu được chích ngừa sớm sau phơi nhiễm thì hiệu quả vắc xin vẫn phát huy tác dụng một phần giúp làm giảm triệu chứng thậm chí cả phòng ngừa bệnh.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/thuydau1.png" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-3">
        Trong giai đoạn tiến triển của bệnh, các đợt phát ban, mụn nước xuất hiện thành nhiều đợt liên tiếp phản ánh chu kỳ nhân lên của VZV trong máu. Tổn thương da ở bệnh nhân mắc thủy đậu là do siêu vi xâm nhập vào lớp thượng bì thông qua tế bào nội mô mạch máu. Cuối cùng, từ da VZV sẽ di chuyển đến các tế bào hạch rễ lưng, nơi chúng tồn tại tiềm ẩn cho đến khi được tái kích hoạt trở lại. Thông thường, các đợt phát ban sẽ chấm dứt sau 3 – 5 ngày khi hệ thống miễn dịch đặc hiệu đạt hiệu quả, trong đó chủ yếu là đáp ứng qua trung gian tế bào lympho T đặc hiệu. Trí nhớ miễn dịch phát triển trong bệnh thủy đậu sẽ tiếp tục tồn tại đến suốt đời giúp cơ thể chống lại các đợt xâm nhập tiếp theo của thủy đậu cũng như góp phần chống lại herpes zoster.
      </div>
      <p class="font-bold text-xl mb-3">5. Đặc điểm lâm sàng</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/thuydau2.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5 italic flex justify-center">
        Hình: Triệu chứng lâm sàng của bệnh thủy đậu. Hình A-C: sang thương ở các giai đoạn khác nhau bao gồm: mụn nước, mụn mủ, xuất huyết, đóng mài. Hình D: sang thương ở niêm mạc miệng cũng có thể gặp. (Nguồn: Bolognia 4th 2018)
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-2">
          <b>5.1 Thời kỳ ủ bệnh: </b>
          là khoảng thời gian từ khi tiếp xúc với nguồn bệnh cho đến khi tổn thương da đầu tiên xuất hiện. Thời kỳ này thay đổi từ 11 – 20 ngày, trung bình là khoảng 14 ngày. Bệnh có khả năng lây trong vòng 1 – 2 ngày trước khi tổn thương da xuất hiện và kéo dài đến khi tất cả các mụn nước đóng mài.
        </li>
        <li class="list-disc mb-2">
          <b>5.2 Thời kỳ khởi phát: </b>
          sự thay đổi hormone trong cơ thể, như khi mang thai hoặc trong quá trình lão hóa, có thể dẫn đến sự tăng sản xuất melanin và do đó góp phần vào việc hình thành nám da.
          <div class="mb-5 flex justify-center">
            <img src="/images/logo_kien_thuc/thuydau3.png" alt="knowledge-detail" />
          </div>
          <div class="mb-5 italic flex justify-center">
            Hình 2: Triệu chứng lâm sàng của bệnh thủy đậu. Hình A-C: sang thương ở các giai đoạn khác nhau bao gồm: mụn nước, mụn mủ, xuất huyết, đóng mài. Hình D: sang thương ở niêm mạc miệng cũng có thể gặp. (Nguồn: Bolognia 4th 2018)
          </div>
        </li>
        <li class="list-disc mb-2">
          <b>5.3 Thời kỳ toàn phát: </b>
          ở người chưa từng được tiêm vắc xin, phát ban sẽ tiến triển theo thứ tự từ trên xuống dưới và phân bố ly tâm, khởi đầu là ở da đầu, mặt rồi dần lan nhanh đến thân mình và rải rác ở tứ chi. Tình trạng phát ban có xu hướng dày đặc ở vùng lưng, cụ thể là giữa 2 xương bả vai hơn là 2 bên, bên trên nhiều hơn bên dưới và phía trong nhiều hơn là mặt bên của các chi. Tại các vùng da viêm như vùng tả lót hoặc vùng phơi bày ánh sáng đôi khi là nơi xuất hiện tổn thương đầu tiến với số lượng và kích thước mụn nước thường lớn hơn. Một đặc điểm đặc trưng của thủy đậu là các sang thương diễn tiến nhanh chóng, chỉ sau 12 giờ các sẩn hồng ban không tẩm nhuận ban đầu sẽ tiến triển thành mụn nước 🡪 mụn mủ 🡪 đóng mài. Một mụn nước điển hình thường có kích thước từ 2 – 3mm, hình elip, sắp xếp song song với nếp gấp của da. Các mụn nước có thành mỏng bao quanh là vùng da đỏ không đồng đều, tạo thành hình ảnh “giọt sương trên cánh hoa hồng”. Mụn nước sau đó hóa đục thành nhiều mụn mủ do sự tẩm nhuận của vô số tế bào viêm bên trong. Cuối cùng, mụn mủ dần khô lại từ trung tâm tạo thành hình ảnh rốn lõm và bắt đầu đóng mài. Lớp mài sẽ bong ra một cách tự nhiên trong 1 – 3 tuần kế tiếp để lại những vết lõm nông, màu hồng rồi dân biến mất. Sự xuất hiện các mụn nước ở các vùng niêm mạc như mũi, miệng, hầu, thanh quản, khí quản, thực quản, đường tiêu hóa, đường tiết niệu và âm đạo tạo thành các vết trợt với kích thước khoảng 2 – 3 mm tuy nhưng do tính chất mụn nước dễ vỡ nên thường chỉ quan sát thấy các tổn thương thứ phát qua thăm khám lâm sàng. Về di chứng, thủy đậu rất hiếm khi để lại sẹo mà sẹo thường hình thành là do bệnh nhân cào gãi gây ra các chấn thương tại chỗ hoặc do tình trạng bội nhiễm da đi kèm. Ngoài ra, một đặc điểm đặc trưng khác của thủy đậu là bởi sự nhân lên của vi rút trong máu nên sang thương da sẽ mọc lên thành nhiều đợt khác nhau. Hậu quả, trên cùng một vị trí tổn thương có thể dễ dàng bắt gặp nhiều loại sang thương khác nhau trong toàn bộ giai đoạn phát triển.
          <br/>
          Đối với bệnh nhân bị suy giảm miễn dịch (có bệnh ác tính tiềm ẩn, đang điều trị với steroid hoặc các thuốc ức chế miễn dịch, nhiễm HIV hoặc ghép tạng), các tổn thương có thể không có hồng ban xung quanh và việc tiến triển mụn nước thành mụn mủ có thể bị trì hoãn hoặc không có. Bên cạnh đó, bệnh nhân có thể xuất hiện các tổn thương da không điển hình khác như mụn nước xuất huyết, ban xuất huyết đi kèm tổn thương của phổi, gan và hệ thần kinh trung ương.
        </li>
        <li class="list-disc mb-2">
          <b>5.4 Thời kỳ hồi phục: </b>
          khi toàn bộ tổn thương đóng mài bệnh nhân sẽ giảm ngứa. Các tổn thương cũ lành dần để lại những vết tăng sắc tố sau viêm tồn tại vài tuần – vài tháng.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3 pl-7">Một số biến thể lâm sàng của bệnh thủy đậu:</p>
      <div class="mb-3 pl-10">
        Thủy đậu ở trẻ sơ sinh: là tình trạng trẻ khởi phát thủy đậu trong vòng 2 tuần sau sinh, nguyên nhân chủ yếu là do mẹ mắc VZV hoặc có thể do nhiễm trùng bệnh viện. Tổn thương trên lâm sàng của trẻ sơ sinh mắc thủy đậu rất đa dạng, từ bệnh nhẹ giống như thủy đậu ở người trưởng thành cho đến các trường hợp nhiễm trùng lan toa giống biểu hiện người suy giảm miễn dịch.
      </div>
      <div class="mb-3 pl-10">
        Thủy đậu ở phụ nữ mang thai: là nguyên nhân gây ra hội chứng thủy đậu bẩm sinh (congenital varicella syndrome). Có đến khoảng 2% trẻ sinh ra mắc thủy đậu bẩm sinh nếu mẹ mắc thủy đậu trước khi thai 20 tuần tuổi và 1% nếu trước 13 tuần tuổi. Hậu quả của thủy đậu thai kỳ sẽ gây ra các tình trạng dị tật thai nhi như bé chậm tăng trưởng trong tử cung, sẹo ở da do thủy đậu, dị tật ở mắt (đục thủy tinh thể, hội chứng Horner, rung giật nhãn cầu), bất thường các chi (giảm sản xương), bất thường hệ thần kinh trung ương (teo vỏ não, thiểu năng). Đồng thời trẻ có mẹ mắc thủy đậu trong thời kỳ mang thai cũng có thể phát triển bệnh zona sớm trong đời mà không cần mắc thủy đậu trước đó.
      </div>
      <div class="mb-3 pl-10">
        Thủy đậu ở người đã được tiêm chủng: có khoảng 10 - 15% số người sau khi tiêm chủng với một liều vắc xin có thể bị nhiễm thủy đậu sau khi tiếp xúc với VZV đang hoạt động, trường hợp này được gọi là “breakthrough”. Đối với các trường hợp này, biểu hiện lâm sàng thường không điển hình. Phát ban xuất hiện chủ yếu là dát, sẩn, mụn nước xuất hiện ít hơn (số lượng tổn thương <60) và cũng ít khi sốt hơn thủy đậu điển hình. Việc tiêm chủng đủ 2 mũi phòng ngừa sẽ giúp giảm tỷ lệ mắc bệnh cũng như giảm đáng kể tình trạng “breakthrough”.
      </div>
      <p class="font-bold text-xl mb-3">6. Biến chứng</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-2">
          <b>6.1 Nhiễm trùng da và mô mềm: </b>
           nhiễm thủy đậu nguyên phát ở trẻ em có liên quan đến tăng tỷ lệ nhiễm trùng da với tác nhân phổ biến là Staphylococci và Streptococci, gây ra: chốc, viêm mô bào, viêm quầng và thậm chí viêm cân hoại tử ở trẻ. Bội nhiễm tại chỗ là nguyên nhân chính gây ra sẹo do thủy đậu tuy nhưng hiếm khi dẫn đến nhiễm trùng di căn hoặc nhiễm trùng huyết trên lâm sàng.
        </li>
        <li class="list-disc mb-2">
          <b>6.2 Biến chứng thần kinh: </b>
          hội chứng Reye và viêm não do thủy đậu là 2 biến chứng thần kinh nghiêm trọng. Các biến chứng khác ít gặp hơn bao gồm: viêm màng não vô trùng, viêm tủy cắt ngang, liệt nửa người,…
        </li>
        <li class="list-disc mb-2">
          <b>6.3 Viêm phổi: </b>
          là nguyên nhân chiếm phần lớn gây tử vong ở người mắc thủy đậu, với tỷ lệ được báo cáo từ 10 – 30% và con số này lên đến 50% ở bệnh nhân suy hô hấp cần thở máy. 
        </li>
        <li class="list-disc mb-2">
          <b>6.4 Viêm gan: </b>
          các kết quả sinh thiết gan đã chứng minh không có mối liên hệ giữa tổn thương gan và bệnh thủy đậu tuy nhưng ở bệnh nhân suy giảm miễn dịch (người nhận cấy ghép và bệnh nhân AIDS) thường bị ảnh hưởng bởi tình trạng này. Các đặc điểm phổ biến gợi ý viêm gan bao gồm sốt, đau bụng hoặc đau lưng cấp tính.
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">7. Chẩn đoán</p>
      <div class="mb-3 pl-10">
        Chẩn đoán bệnh thủy đậu thường dựa vào đặc điểm dịch tễ, lâm sàng, cận lâm sàng đặc trưng của bệnh. 
      </div>
      <div class="mb-3 pl-10">
        Trong một số trường hợp, chúng ta cần phân biệt thủy đậu với một số bệnh lý khác như: Phát ban mụn nước do vi rút Coxsackie và các vi rút đường ruột khác, Eczema herpeticum, Herpes zoster lan tỏa, côn trùng cắn, chốc, viêm da tiếp xúc, bệnh đậu mùa do Rickettsia, Herpes simplex lan tỏa.
      </div>
      <p class="font-bold text-xl mb-3">8. Điều trị</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-2">
          <b>8.1 Nguyên tắc điều trị: </b>
          Điều trị thủy đậu ở người miễn dịch bình thường chủ yếu là điều trị hỗ trợ, bao gồm hạ nhiệt và chăm sóc tổn thương da. Điều trị kháng virus Herpes có tác dụng giảm mức độ nặng và thời gian bị bệnh, đặc biệt có chỉ định đối với những trường hợp suy giảm miễn dịch.
        </li>
        <li class="list-disc mb-2">
          <b>8.2 Điều trị kháng virus: </b>
          Acyclovir uống 800 mg 5 lần/ngày trong 5-7 ngày; trẻ dưới 12 tuổi có thể dùng liều 20 mg/kg 6 giờ một lần. Điều trị có tác dụng tốt nhất khi bắt đầu sớm, trong vòng 24 giờ đầu sau khi phát ban.
          <br/>
          Người bệnh suy giảm miễn dịch nặng, thủy đậu biến chứng viêm não: ưu tiên acyclovir tĩnh mạch, ít nhất trong giai đoạn đầu, liều 10-12,5 mg/kg, 8 giờ một lần, để làm giảm các biến chứng nội tạng. Thời gian điều trị là 7 ngày. Đối với người bệnh suy giảm miễn dịch nguy cơ thấp có thể chỉ cần điều trị bằng thuốc kháng virus uống.
          </li>
        <li class="list-disc mb-2">
          <b>8.3 Điều trị hỗ trợ: </b>
          Điều trị hạ nhiệt bằng paracetamol, tránh dùng aspirin để ngăn ngừa hội chứng Reye. Điều trị kháng histamin nếu người bệnh ngứa tại nơi tổn thương da.
          <br/>
          Chăm sóc các tổn thương da: làm ẩm tổn thương trên da hàng ngày, bôi thuốc chống ngứa tại chỗ, ngăn ngừa bội nhiễm vi khuẩn bằng thuốc sát khuẩn tại chỗ (như các thuốc chứa muối nhôm acetat).
          <br/>
          Điều trị hỗ trợ hô hấp tích cực khi người bệnh bị viêm phổi do thủy đậu. Điều trị kháng sinh khi người bệnh thủy đậu có biến chứng bội nhiễm tổn thương da hoặc bội nhiễm tại các cơ quan khác.
        </li>
      </ul>
    `,
  },
  {
    id: 23,
    searchTag: "ngứa da nguyên nhân và cách điều trị ngua da nguyen nhan va cach dieu tri",
    title: "Ngứa da nguyên nhân và cách điều trị",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "bệnh lý da",
    subTitle:
      "Ngứa là một cảm giác khó chịu kích thích gãi để loại bỏ ký sinh trùng hoặc chất gây ngứa có hại khác ...",
    imageUrl: "/images/logo_kien_thuc/nguada1.jpg",
    tagId: 5,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Bệnh Lý Da
        </span>
      </div>
      <div class="mb-3 pl-3">
        Ngứa là một cảm giác khó chịu kích thích gãi để loại bỏ ký sinh trùng hoặc chất gây ngứa có hại khác. Ngứa là một triệu chứng thường gặp nhất và tác động tiêu cực lên chất lượng cuộc sống của người bệnh.
      </div>
      <div class="mb-3 pl-3">
        Sinh lý bệnh của ngứa đa dạng và liên quan đến mạng lưới phức tạp của tế bào da, tế bào thần kinh và các hóa chất trung gian ở trung ương hoặc ngoại biên. Cơ chế gây ngứa là do kích hoạt hệ thần kinh cảm giác. 
      </div>
      <div class="mb-3 pl-3">
        Có rất nhiều nguyên gây ngứa và đây là một thách thức trên lâm sàng đối với việc tìm nguyên nhân và hướng xử trí thích hợp. 
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/nguada1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. Phân loại và nguyên nhân</p>
      <div class="mb-3 pl-3">
        Hệ thống phân loại ngứa về mặt lâm sàng theo Diễn đàn Quốc tế Nghiên cứu Ngứa năm 2007 đã chia ngứa thành 3 nhóm: 
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          <b>Ngứa do bệnh da (thương tổn nguyên phát): </b>
          bao gồm bệnh da do viêm, nhiễm, tự miễn, di truyền, dị ứng thuốc, thai kì và bệnh lymphoma da
        </li>
        <li class="list-disc">
          <b>Ngứa không có tổn thương hoặc bệnh da: </b>
          do bệnh hệ thống như bệnh lý ở gan, thận, nội tiết, huyết học, ác tính, tâm thần kinh, và do thuốc
        </li>
        <li class="list-disc">
          <b>Các thương tổn da do cào gãi mạn tính (thương tổn da thứ phát): </b>
          như lichen đơn dạng mạn tính, sẩn ngứa cục. 
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Ngoài ra, ngứa được gọi là cấp tính khi ngứa kéo dài dưới 6 tuần và ngứa mạn tính khi ngứa kéo dài trên 6 tuần. 
      </div>
      <p class="font-bold pl-10">1.1 Một số bệnh da nguyên phát gây ngứa hay gặp:</p>
      <p class="font-bold pl-14">a) Vết cắn do côn trùng/ nhiễm động vật chân đốt</p>
      <ul class="mb-3 pl-20">
        <li class="list-disc">
          Ghẻ
        </li>
        <li class="list-disc">
          Chí, rận
        </li>
        <li class="list-disc">
          Côn trùng đốt
        </li>
      </ul>
      <p class="font-bold pl-14">b) Bệnh da viêm:</p>
      <ul class="mb-3 pl-20">
        <li class="list-disc">
          Viêm da cơ địa
        </li>
        <li class="list-disc">
          Viêm da ứ đọng
        </li>
        <li class="list-disc">
          Viêm da tiếp xúc dị ứng/kích ứng
        </li>
        <li class="list-disc">
          Viêm da tiết bã (da đầu)
        </li>
        <li class="list-disc">
          Vảy nến
        </li>
        <li class="list-disc">
          Mày đay
        </li>
        <li class="list-disc">
          Phát ban do thuốc
        </li>
        <li class="list-disc">
          Lichen phẳng
        </li>
      </ul>
      <p class="font-bold pl-14">c) Nhiễm trùng:</p>
      <ul class="mb-3 pl-20">
        <li class="list-disc">
          Vi trùng (viêm nang lông)
        </li>
        <li class="list-disc">
          Siêu vi: thủy đậu, Herpes, Zona
        </li>
        <li class="list-disc">
          Vi nấm: nấm da do dermatophyte
        </li>
        <li class="list-disc">
          Kí sinh trùng: ấu trùng di chuyển
        </li>
      </ul>
      <p class="pl-14"><b>d) Nguyên nhân khác: </b>khô da/chàm khô, ngứa do thần kinh, lupus đỏ, bệnh da thai kì, sẩn ngứa cục, Lichen phẳng, …</p>
      <p class="font-bold pl-10">1.2 Nguyên nhân hệ thống</p>
      <p class="pl-14">
        <b>e) Mắc bệnh nội khoa: </b> như bệnh gan, suy thận, thiếu máu do thiếu sắt, các vấn đề ở tuyến giáp và một số bệnh ung thư, thủy đậu, bệnh sởi, phát ban do nấm, mắc ký sinh trùng như giun chỉ và giun xoắn, HIV, bệnh chân tay, đa xơ cứng, đái tháo đường hay tắc nghẽn đường ống mật ...
      </p>
      <p class="font-bold text-xl mb-3">2. Dấu hiệu và triệu chứng ngứa da</p>
      <div class="mb-3 pl-3">
        Bệnh nhân cảm thấy ngứa một vùng nhỏ nhất định, như ở cánh tay, chân hoặc ngứa trên toàn bộ cơ thể. Vùng da bị ngứa không có bất kỳ dấu hiệu thay đổi đáng chú ý nào hoặc bị đỏ, sưng, nổi nốt sần hoặc mụn nước, da khô, nứt nẻ, da sần sùi hoặc có vảy…Tình trạng ngứa da càng lâu thì càng tệ hơn, đôi khi, chà hoặc gãi ở vùng da đó, cảm giác ngứa sẽ tăng, tạo ra một chu kỳ luẩn quẩn, kéo dài.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/nguada2.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold mb-3 pl-3">Đặc điểm của một số bệnh lý da gây ngứa hay gặp</p>
      <p class="font-bold mb-3 pl-3">2.1 Mày đay</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/nguada3.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-6">
        Mày đay là bệnh da rất ngứa và đôi khi có cảm giác châm chích, kiến bò. Thương tổn da là những mảng phù màu hồng, giới hạn rõ, rất ngứa và kéo dài không quá 24h. Cơ chế liên quan đến sự phóng thích histamin là chất trung gian gây viêm và giãn mạch máu ở da. 
      </div>
      <p class="font-bold mb-3 pl-3">2.2 Viêm da cơ địa</p>
      <div class="mb-3 pl-6">
        Ngứa là triệu chứng quan trọng và tiêu chuẩn phải có trong chẩn đoán bệnh viêm da cơ địa. Ngứa thường xuất hiện từng đợt và ảnh hưởng đến chất lượng cuộc sống của bệnh nhân. Trong viêm da cơ địa, các dị nguyên không khí, thức ăn, stress, nóng, tăng tiết mồ hôi, thậm chí không khí cũng có thể gây ngứa và làm bùng phát bệnh.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/nguada4.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold mb-3 pl-3">2.3 Vảy nến</p>
      <div class="mb-3 pl-6">
        Có đến khoảng 85% bệnh nhân vảy nến có ngứa, có thể do khô da, nóng và stress. Ngứa có tính chất chu kì, thường nặng về đêm và ảnh hưởng đến giấc ngủ. Những vị trí thường ngứa nhiều như da đầu, lưng, bụng, chi. Ngứa toàn thân đôi khi xảy ra trong thể vảy nến mảng, vảy nến đỏ da và vảy nến mủ. Bệnh nhân thường mô tả ngứa có cảm giác kiến bò, châm chích và bỏng rát đi kèm. 
      </div>
      <p class="font-bold mb-3 pl-3">2.4 Nấm da</p>
      <div class="mb-3 pl-6">
        Nhiễm nấm da thường gây ngứa khu trú với hình ảnh lâm sàng đặc trưng là mảng đỏ da hình vòng hoặc đa cung, bong vảy ở ngoại biên và lành ở trung tâm. Vị trí bất kì nhưng thường ở bẹn và thân mình.
      </div>
    <p class="font-bold mb-3 pl-3">2.5 Ghẻ</p>
      <div class="mb-3 pl-6">
        Bệnh ghẻ có thể gây ngứa toàn thân hoặc khu trú. Ngứa thường xuất hiện nhiều về đêm. Nhiều người trong gia đình có triệu chứng ngứa tương tự. Hình ảnh đặc trưng là những rãnh nhỏ màu nâu đỏ, dài khoảng 2-20 mm, ở kẽ ngón tay, lòng bàn tay và các sẩn, mụn nước ở vùng da non như mặt trước cổ tay, bụng, quanh rốn, nách, đùi, mông và bộ phận sinh dục ngoài. 
      </div>
      <p class="font-bold mb-3 pl-3">2.6 Sẩn ngứa dạng cục:</p>
      <div class="mb-3 pl-6">
        Trong bệnh sẩn ngứa dạng cục, sự cào gãi kéo dài và lặp đi lặp lại tại một vùng da gây ra các thương tổn thứ phát. Các cục này rất ngứa và gây ra chu kỳ ngứa – cào gãi. Bệnh này thường gặp ở phụ nữ tuổi trung niên, tuy nhiên có thể gặp ở trẻ em và thanh thiếu niên nhất là ở những người có cơ địa dị ứng. 
      </div>
      <div class="mb-3 pl-6">
        Các thương tổn da phân bố đối xứng ở mặt duỗi chi. Các vị trí khác như lưng trên, mông, vùng cùng cụt có thể bị tổn thương,  nhưng giữa vùng lưng trên (vùng khó cào gãi) thường ít tổn thương.
      </div>
      <div class="mb-3 pl-6">
        Sang thương da là những sẩn -cục, hình vòm, sờ chắc, bề mặt có thể đóng vảy, đóng mài, trợt hoặc loét. Màu sắc thương tổn thay đổi từ màu da đến đỏ và nâu hoặc tăng sắc tố nhất là ở người da sậm màu. 
      </div>
      <div class="mb-3 pl-6">
        Nhiều bệnh nhân bị sẩn ngứa dạng cục là do viêm da cơ địa, khô da, bệnh da khác, bệnh hệ thống (rối loạn chức năng gan, thận, nhược giáp hoặc lymphoma) hoặc do rối loạn tâm thần kinh gây cào gãi liên tục. 
      </div>
      <p class="font-bold mb-3 pl-3">2.7 Lichen đơn dạng mãn tính</p>
      <div class="mb-3 pl-6">
        Trong bệnh lichen đơn dạng mạn tính, thói quen chà xát hoặc cào gãi mạn tính tại một vùng da làm dày lớp thượng bì. Bệnh thường gặp ở người lớn và ít gặp ở trẻ em.
      </div>
      <div class="mb-3 pl-6">
        Thương tổn da là những mảng, giới hạn rõ, bề mặt hiện rõ các đường vân da (lichen hóa), màu sắc thay đổi từ hồng đến tăng sắc tố. Số lượng có thể một hoặc nhiều, tập trung chủ yếu ở vùng cổ sau, vùng chẩm, vùng hậu môn sinh dục và mặt lưng bàn tay, bàn chân. 
      </div>
      <div class="mb-3 pl-6">
        Một số yếu tố có thể gây ra tình trạng này như da khô, cơ địa dị ứng, vảy nến, viêm da ứ đọng, lo lắng, ngứa khu trú do thần kinh và ngứa do bệnh hệ thống. 
      </div>
      <p class="font-bold mb-3 pl-3">2.8 Ngứa do khô da ở người già</p>
      <div class="mb-3 pl-6">
        Là nguyên nhân gây ngứa thường gặp nhất ở người già, tần suất 38-85%.
      </div>
      <div class="mb-3 pl-6">
        Nguyên nhân bệnh sinh:
      </div>
      <p class="pl-8">
        f) Thay đổi chức năng hàng rào bảo vệ da, đặc biệt là lớp sừng (giảm khả năng giữ nước): Thượng bì giảm ceramides trong lớp sừng, có thể do tăng hoạt của men gây thoái biến ceramides. Hiện tượng giảm tiết thể lá cũng được ghi nhận ở người già. Aquaporin 3 (AQP3) là một protein vận chuyển nước, có chức năng vận chuyển nước để duy trì độ ẩm thượng bì bị ghi nhận giảm ở người già -> khô da
      </p>
      <p class="pl-8">
        g) pH bị kiềm hoá -> tạo yếu tố ẩm tự nhiên, tăng hoạt men tiêu ceramide
      </p>
      <p class="pl-8">
        h) Thay đổi hoạt tính SC proteases à tăng hoạt tính protease-activated receptor 2 (PAR2) receptors -> ngứa
      </p>
      <p class="pl-8">
        i) Giảm hoạt động tuyến bã nhờn, tuyến mồ hôi
      </p>
      <p class="pl-8">
        j) Giảm nồng độ oestrogen.
      </p>
      <p class="font-bold mb-3 pl-3">2.9 Ngứa trong các bệnh hệ thống</p>
      <p class="mb-3 pl-3 font-bold">a) Bệnh thận</p>
      <p class="mb-3 pl-3">
        Ngứa là triệu chứng thường gặp ở bệnh nhân bệnh thận mạn tính và tiến triển, nhất là những người đang chạy thận nhân tạo. Ngứa trong bệnh thận có thể khu trú hoặc toàn thân với độ nặng và vị trí thay đổi theo thời gian. Các thương tổn da thứ phát như sẩn ngứa dạng cục có thể xuất hiện do chà xát hoặc cào gãi. Ngứa trong bệnh thận không liên quan đến độ nặng của bệnh nhưng gây rối loạn giấc ngủ, trầm cảm, ảnh hưởng chất lượng cuộc sống người bệnh.
      </p>
      <p class="mb-3 pl-3 font-bold">b) Ngứa do ứ mật</p>
      <p class="mb-3 pl-3">
        Đa số bệnh gan đều có thể gây ngứa nhưng hay gặp hơn trong các bệnh như: Xơ gan ứ mật nguyên phát, viêm túi mật xơ hóa, sỏi túi mật gây tắc nghẽn, carcinoma ống mật, ứ mật, viêm gan siêu vi C mạn tính và các thể viêm gan siêu vi khác. 
      </p>
      <p class="mb-3 pl-3">
        Ngứa trong bệnh gan thường toàn thân, di chuyển và không giảm dù cào gãi. Bệnh nhân thường ngứa nhiều ở lòng bàn tay, lòng bàn chân, vùng cơ thể tiếp xúc quần áo và nhiều về đêm. Bệnh nhân ứ mật mạn tính, ngứa có thể là ngứa triệu chứng sớm xuất hiện nhiều năm trước khi có các biểu hiện của bệnh gan. 
      </p>
      <p class="mb-3 pl-3 font-bold">c) Ngứa trong các bệnh lý khác:</p>
      <p class="mb-3 pl-5">
        k) Bệnh huyết học: thiếu sắt, bệnh đa hồng cầu<br/>
        l) Bệnh ác tính<br/>
        m) Bệnh nội tiết: bệnh tuyến giáp, đái tháo đường, nhiễm HIV/AIDS<br/>
      </p>
      <p class="font-bold text-xl mb-3">3. Điều trị ngứa da như thế nào?</p>
      <p class="mb-3 pl-3">
        Ngứa da nghiêm trọng hoặc kéo dài hơn sáu tuần (ngứa mãn tính) có thể ảnh hưởng đến chất lượng cuộc sống. Như làm gián đoạn giấc ngủ của bạn hoặc gây ra lo lắng hoặc trầm cảm. Ngứa và gãi kéo dài có thể làm tăng cường độ ngứa, có thể dẫn đến tổn thương da, nhiễm trùng và để lại sẹo. Người bệnh nên đến gặp bác sĩ da liễu để được đánh giá đầy đủ nguyên nhân và điều trị toàn diện.
      </p>
      <p class="mb-3 pl-3">
        Cho đến nay chúng ta vẫn chưa có thuốc đặc hiệu có khả năng làm giảm tất cả mọi dạng ngứa. Vì vậy, việc xử trí cần dựa vào từng nguyên nhân, diễn tiến bệnh và từng cá thể bệnh nhân. Bác sĩ sẽ khuyên dùng một số thuốc trị ngứa theo đơn hoặc các phương pháp điều trị khác như kem bôi hoặc thuốc mỡ chứa corticosteroid, dùng thuốc uống, sử dụng liệu pháp ánh sáng (quang trị liệu).
      </p>
      <p class="mb-3 pl-3">
        Hướng xử trí gồm những biện pháp chung và các phương pháp điều trị chuyên biệt.
      </p>
      <p class="font-bold mb-3 pl-3">3.1 Biện pháp chung</p>
      <p class="mb-3 pl-3">
        Giáo dục bệnh nhân và loại bỏ các yếu tố gây ngứa là việc quan trọng cần thực hiện, bao gồm 
      </p>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          Mặc quần áo thoáng mát, tránh tắm quá nhiều, tắm nước ấm với sữa tắm nhẹ không chứa xà phòng
        </li>
        <li class="list-disc mb-1">
          Sử dụng dưỡng ẩm mỗi ngày, nhất là ngay sau khi tắm
        </li>
        <li class="list-disc mb-1">
          Các biện pháp hạn chế cào gãi như đắp khăn lạnh, xoa nhẹ nhàng, cắt móng tay
        </li>
        <li class="list-disc mb-1">
          Tránh nóng, tiếp xúc bụi, giảm căng thẳng và lo lắng cũng góp phần trong điều trị ngứa. 
        </li>
      </ul>
      <p class="font-bold mb-3 pl-3">3.2 Ngứa do bệnh da</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          Bước đầu tiên là khám và chẩn đoán bệnh da gây ngứa.
        </li>
        <li class="list-disc mb-1">
          Ngoài việc áp dụng các biện pháp chung trong xử trí bệnh nhân ngứa, bác sĩ sẽ điều trị đặc hiệu theo toa từng bệnh da gây ngứa. Ví dụ:
          <div class="pl-3">
            n) Mày đay: uống thuốc kháng histamin H1 thế hệ 2 như Bilastin, Desloratadine, Loratadine, cetirizine,…
          </div>
          <div class="pl-3">
            o) Viêm da cơ địa: dưỡng ẩm, thuốc thoa tại chỗ ( Corticosteroid, Tacrolimus), trường hợp nặng thì kết hợp điều trị toàn thân như Corticoid uống, Methotrexate, Azathioprine,…
          </div>
        </li>
      </ul>
      <p class="font-bold mb-3 pl-3">3.3 Ngứa toàn thân và không có bệnh da đặc hiệu</p>
      <ul class="mb-3 pl-10">
        <li class="list-disc mb-1">
          Tại chỗ: các loại thuốc thoa tại chỗ có tác dụng giảm ngứa như corticosteroid, tacrolimus,…
        </li>
        <li class="list-disc mb-1">
          Toàn thân: Các thuốc chống ngứa toàn thân thường có tác dụng trung ương và an thần. Gồm kháng histamin không an thần và an thần, thuốc điều hòa thần kinh: gabapentin, pregabalin, thuốc chống trầm cảm: ức chế tái hấp thu serotonin chọn lọc như fluoxetine, paroxetine, sertraline hoặc chống trầm cảm 3 vòng như amitriptyline hoặc mirtazapine, chất đối kháng opioid và thuốc khác như thalidomide. 
        </li>
        <li class="list-disc mb-1">
          Phương pháp khác:
          <div class="pl-3">
            Quang liệu pháp: chiếu tia tử ngoại (UV) có hiệu quả trong điều trị một số bệnh da viêm gây ngứa, mày đay sắc tố, ngứa do bệnh thận và ứ mật, ngứa do nước và sẩn ngứa dạng cục.
          </div>
          <div class="pl-3">
            Các yếu tố tâm thần kinh có thể làm tăng hoặc giảm ngứa do đó liệu pháp tâm lý cũng có thể giúp giảm ngứa và cải thiện chất lượng cuộc sống. 
          </div>
        </li>
      </ul>
      <p class="font-bold mb-3 pl-3">3.4 Các biện pháp phòng ngừa tại nhà:</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/nguada5.jpg" alt="knowledge-detail" />
      </div>
      <div class="mb-3 pl-3">
        Về phòng ngừa có các biện pháp tại nhà giúp giảm bớt ngứa da như tránh tiếp xúc với các tác nhân khiến bạn bị kích ứng, dị ứng gây ngứa. Giữ ẩm, sử dụng kem bôi, kem dưỡng thể hoặc gel có tác dụng làm dịu, mát da. Hạn chế gãi nên cắt ngắn móng tay hoặc có thể đeo bao tay vào ban đêm để tránh gãi mạnh trong khi ngủ. Tắm nước ấm và thêm muối Epsom, bột baking soda, bột yến mạch thô có thể giúp giảm ngứa ở một số người. Giảm stress như thiền, tập yoga, châm cứu, nhận tư vấn cùng các chuyên gia.  Ngoài ra cũng nên mang trang phục mỏng nhẹ, rộng rãi thoải mái để giữ cho da thông thoáng, dễ chịu, giảm cảm giác ngứa ngáy
      </div>
    `,
  },
  {
    id: 24,
    searchTag:
      "Mesotherapy là gì mesotherapy la gi",
    title: "Mesotherapy là gì?",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "làm đẹp",
    subTitle:
      "Mesotherapy là phương pháp tiêm trực tiếp một lượng rất nhỏ thuốc hay dưỡng chất vào da nhằm cung cấp các dưỡng chất cho da hoặc tạo ra các kích thích sinh học ...",
    imageUrl: "/images/logo_kien_thuc/meso1.jpg",
    tagId: 3,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Làm Đẹp
        </span>
      </div>
      <div class="mb-5">
        Hiện nay, có rất nhiều phương pháp làm đẹp được sử dụng để cải thiện nhiều tình trạng da khác nhau. Trong đó, phải kể đến phương pháp Mesotherapy. Liệu pháp này đang được nhiều người ưa thích và sử dụng ở Việt Nam và trên toàn thế giới bởi hiệu quả và độ an toàn mà nó mang lại. Vậy Mesotherapy là gì?
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/meso1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">1. Phương pháp mesotherapy là gì?</p>
      <div class="mb-5 pl-3">
        Mesotherapy là phương pháp tiêm trực tiếp một lượng rất nhỏ thuốc hay dưỡng chất vào da nhằm cung cấp các dưỡng chất cho da hoặc tạo ra các kích thích sinh học. Từ đó, giúp trẻ hóa, săn chắc da và loại bỏ mỡ thừa. Michel Pistor, một bác sĩ người Pháp - chính là cha đẻ của phương pháp này. Kỹ thuật mesotherapy ra đời vào năm 1952. Mục đích ban đầu của nó là để giảm đau. Hiện nay, mesotherapy tại Việt Nam đang là phương pháp làm đẹp ít xâm lấn cho hiệu quả vượt trội và cực kỳ an toàn. Mesotherapy đưa trực tiếp dưỡng chất vào trực tiếp trong da nên hiệu quả điều trị cao gấp nhiều lần sao với sử dụng các sản phẩm bôi ngoài da thông thường. Ngày nay, mesotherapy được ứng dụng để điều trị nhiều tình trạng da khác nhau như: 
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Làm tan mỡ ở các vùng như bụng, mông, đùi, hông, mặt, chân, tay
        </li>
        <li class="list-disc">
          Xóa mờ nếp nhăn
        </li>
        <li class="list-disc">
          Làm săn chắc, căng bóng da
        </li>
        <li class="list-disc">
          Giúp làm sáng da, điều trị nám
        </li>
        <li class="list-disc">
          Điều trị rụng tóc
        </li>
      </ul>
      <div class="mb-5 pl-3">
        Kỹ thuật tiêm mesotherapy sử dụng những mũi kim rất nhỏ để đưa hoạt chất vào lớp trung bì của da. Ý tưởng đằng sau liệu pháp mesotherapy là giúp khắc phục các vấn đề tiềm ẩn như tuần hoàn kém và viêm nhiễm gây tổn thương da. Không có công thức tiêu chuẩn cho các chất được tiêm trong liệu pháp mesotherapy. Các thành phần sẽ được điều chỉnh để phù hợp với tình trạng da và nhu cầu của khách hàng. Bác sĩ có thể sử dụng nhiều thành phần khác nhau, bao gồm:
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Thuốc theo đơn như thuốc giãn mạch và thuốc kháng sinh
        </li>
        <li class="list-disc">
          Các kích thích tố như calcitonin và thyroxin
        </li>
        <li class="list-disc">
          Các enzym như collagenase và hyaluronidase
        </li>
        <li class="list-disc">
          Chiết xuất thảo mộc
        </li>
        <li class="list-disc">
          Vitamin và khoáng chất
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">2. Chỉ định của liệu pháp Mesotherapy là gì?</p>
      <p class="mb-3">
        <b>2.1 Trẻ hóa da: </b>Lão hóa da là một quá  trình tự nhiên mà ai cũng phải trải qua. Lão hóa khiến cho da trở nên chùng nhão, chảy xệ, hình thành nếp nhăn. Tiêm Meso sẽ giúp đưa các dưỡng chất trực tiếp vào sau bên trong da, nhờ đó kích thích sản sinh collagen giúp cho da trở nên căng bóng, săn chắc và mịn màng hơn.
      </p>
      <p class="mb-3">
        <b>2.2 Làm sáng da: </b>
        Các dưỡng chất được tiêm vào trong da sẽ giúp loại bỏ và ngăn chặn sự hình thành các sắc tố da. Mesotherapy giúp hỗ trợ các vấn đề rối loạn sắc tố da như tàn nhang, nám da, sạm da, thâm mụn một cách hiệu quả. Trong đó, nám da là một tình trạng phổ biến và được điều trị hiệu quả bằng mesotherapy.
      </p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/meso2.jpg" alt="knowledge-detail" />
      </div>
      <p class="mb-3">
        <b>2.3 Thon gọn cơ thể: </b>
        Một số dưỡng chất được sử dụng trong phương pháp Mesotherapy sẽ có công dụng phá hủy các tế bào mỡ dư thừa. Nhờ vậy giúp loại bỏ nọng, mỡ thừa và giúp cơ thể bạn thon gọn hơn.
      </p>
      <p class="mb-3">
        <b>2.4 Kích thích mọc tóc: </b>
        Liệu pháp mesotherapy có thể giúp điều chỉnh sự mất cân bằng hormone trong và xung quanh nang tóc, cung cấp chất dinh dưỡng cho tóc, cải thiện lưu thông máu. Phương pháp điều trị là tiêm trực tiếp các dưỡng chất, các loại thuốc vào da đầu giúp nuôi dưỡng nang tóc và kích thích mọc tóc, giảm nhanh lượng tóc gãy rụng và bổ sung dinh dưỡng để tóc chắc khỏe hơn...
      </p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/meso3.png" alt="knowledge-detail" />
      </div>
      <p class="mb-3">
        <b>2.5 Điều trị chứng tăng tiết mồ hôi: </b>
        Ra mồ hôi nhiều vùng bàn tay, bàn chân, hoặc vùng nách là một vấn đề khiến nhiều người cảm thấy tự ti và mặc cảm. Liệu pháp Mesotherapy có thể giúp giảm lượng mồ hôi tiết mồ hôi và là một phương điều trị hiệu quả chứng tăng tiết mồ hôi. 
      </p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/meso4.jpg" alt="knowledge-detail" />
      </div>
      <p class="mb-3">
        <b>2.6 Điều trị chứng tăng tiết mồ hôi: </b>
        Phương pháp Mesotherapy có công dụng làm mờ các vết rạn da và đặc biệt hiệu quả với chị em phụ nữ bị rạn da sau sinh hoặc rạn da do tăng giảm cân đột ngột.
      </p>
      <p class="font-bold text-xl mb-3">3. Chống chỉ định của phương pháp mesotherapy</p>
      <div class="mb-5 pl-3">
        Mặc dù là phương pháp cực kì an toàn và đem lại hiệu quả đáng kể, nhưng mesotherapy không nên chỉ định ở những trường hợp sau:
      </div>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Người đang có dấu hiệu viêm nhiễm, tổn thương da như bị mụn bọc, mụn viêm, viêm da, các vết trầy xước ở da.
        </li>
        <li class="list-disc">
          Người có vấn đề về rối loạn đông máu như máu khó đông hoặc máu không đông.
        </li>
        <li class="list-disc">
          Phụ nữ đang mang thai hoặc đang cho con bú.
        </li>
        <li class="list-disc">
          Có tiền sử dị ứng với các thành phần trong liệu pháp Mesotherapy
        </li>
        <li class="list-disc">
          Có các bệnh lý toàn thân chưa kiểm soát tốt như đái tháo đường, tăng huyết áp, bệnh tim mạch vành...
        </li>
      </ul>
      <p class="font-bold text-xl mb-3">4. Phương pháp mesotherapy được tiến hành như thế nào?</p>
      <p class="mb-3 pl-3">Quy trình tiêm Meso chuẩn Y khoa</p>
      <p class="mb-3 pl-3">Để đạt được hiệu quả điều trị ở mức tối đa trong việc sử dụng phương pháp tiêm meso. Cần được thực hiện bởi các bác sĩ có nhiều năm kinh nghiệm và theo các bước chuẩn y khoa cụ thể như sau:</p>
      <p class="mb-3 pl-3">Bước 1: Khám và chẩn đoán tình trạng da</p>
      <p class="mb-3 pl-3">Bước 2: Chụp hình lưu hồ sơ.</p>
      <p class="mb-3 pl-3">Bước 3: Làm sạch vùng da cần điều trị.</p>
      <p class="mb-3 pl-3">Bước 4: Ủ tê chuẩn Y khoa</p>
      <p class="mb-3 pl-3">Bước 5: Chuẩn bị dụng cụ, dưỡng chất tiêm meso</p>
      <p class="mb-3 pl-3">Bước 6: Lau tê và sát khuẩn vùng da</p>
      <p class="mb-3 pl-3">Bước 7: Bác sĩ da liễu thực hiện tiêm Meso trực tiếp vào da cho khách hàng.</p>
      <p class="mb-3 pl-3">Bước cuối: Bác sĩ dặn dò khách hàng theo dõi và chăm sóc da sau điều trị tại nhà trước khi ra về.</p>
      <p class="font-bold text-xl mb-3">5. Một số biến chứng có thể gặp</p>
      <p class="mb-3 pl-3">Mặc dù được cho là khá an toàn, song mesotherapy vẫn tồn tại một số biến chứng không mong muốn. Tuy nhiên, rủi ro của liệu pháp tiêm meso rất thấp, cho đến nay chưa ghi nhận trường hợp tử vong nào. Các biến chứng tiêm meso thường gặp như:</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Châm chích, mẩn đỏ, sưng tấy ở khu vực tiêm sau 24 - 48 giờ. Đôi khi có thể bầm tím. Tuy nhiên, đây chỉ là các biến chứng nhẹ, chỉ xảy ra tạm thời. 
        </li>
        <li class="list-disc">
          Nhiễm trùng, đây là trường hợp rất hiếm. Điều này do địa điểm thực hiện không thực hiện sát khuẩn nghiêm ngặt dụng cụ tiêm. Hay các sản phẩm không có xuất xứ, nguồn gốc, thương hiệu rõ ràng, sản phẩm kém chất lượng cũng là nguyên nhân gây nhiễm trùng da. Biểu hiện của nhiễm trùng do tiêm meso như: vết thương bị sưng viêm, tấy đỏ kéo dài, tiết ra các dịch vàng, hình thành mủ.
        </li>
        <li class="list-disc">
          U hạt: Một phản ứng của hệ miễn dịch cơ thể khi có hoạt chất lạ xâm nhập vào cơ thể. Các biểu hiện phổ biến như nốt, sẩn, mảng đỏ. U hạt thường xuất hiện ngay tại vị trí tiêm meso. 
        </li>
      </ul>
      <p class="mb-3 pl-3">
        Một số biến chứng của tiêm meso khác có thể gặp phải như: áp xe chỗ tiêm, hoại tử, hồng ban nút. Tuy nhiên, các biến chứng này rất hiếm khi xảy ra nếu được thực hiện bởi các bác sĩ có kinh nghiệm. 
      </p>
      <p class="font-bold text-xl mb-3">6. Chăm sóc da sau Mesotherapy</p>
      <ul class="mb-3 pl-8">
        <li class="list-disc">
          Chườm lạnh 2-3 tiếng 1 lần, mỗi lượt khoảng 15 phút giúp da giảm nhanh vấn đề sưng tấy và bầm tím sau tiêm.
        </li>
        <li class="list-disc">
          Ngày đầu tiên sau khi tiêm, bạn chỉ nên vệ sinh vùng điều trị bằng nước sạch hoặc nước muối sinh lý nhẹ nhàng. 
        </li>
        <li class="list-disc">
          Dùng các sản phẩm dưỡng hay tế bào gốc được bác sĩ phê duyệt để chăm sóc da sau tiêm meso ngay ngày đầu tiên. 
        </li>
        <li class="list-disc">
          Từ ngày thứ 2 trở đi, có thể vệ sinh và chăm sóc da sau tiêm meso như bình thường kết hợp xài thêm kem dưỡng ẩm. Lưu ý khi ra ngoài cần thoa kem chống nắng thường xuyên. 
        </li>
        <li class="list-disc">
          Khi gặp tình trạng bất thường về da như: sưng tấy, chảy dịch vàng, mưng mủ cần gặp ngay bác sĩ để được điều trị kịp thời.
        </li>
        <li class="list-disc">
          Tránh tiếp xúc với nhiệt độ cao và hạn chế xông hơi tối thiểu 2 tuần sau khi tiêm.
        </li>
      </ul>
      <p class="pl-3 mb-3">Nhìn chung, Mesotherapy được xem là phương pháp tương đối an toàn, tuy nhiên nó vẫn có thể gây ra một số biến chứng. Trong đó, tình trạng nhiễm trùng sau tiêm Mesotherapy được xem là biến chứng nguy hiểm nhất. Do vậy, khi muốn tiêm Mesotherapy với bất kỳ mục đích nào, bạn nên đến gặp bác sĩ chuyên khoa thẩm mỹ có nhiều kinh nghiệm về liệu pháp này để được tư vấn.</p>
    `,
  },
  {
    id: 25,
    searchTag:
      "dược mỹ phẩm trong chăm sóc da duoc my pham trong cham soc",
    title: "Dược mỹ phẩm trong chăm sóc da?",
    isOutstanding: false,
    isShowBadge: true,
    badgeLabel: "Kiến thức skincare",
    subTitle:
      "BS.CKII Nguyễn Lê Trà Mi, giảng viên bộ môn Da liễu Đại học Y Dược TP.HCM sẽ giúp bạn hiểu rõ hơn về dược mỹ phẩm chăm sóc da ...",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    tagId: 4,
    fullContent: `
      <div class="mb-5 text-center">
        <span class="px-3 py-0.5 rounded-full bg-[#FDEEEE] text-[#EF5C76] font-bold">
          Kiến thức skincare
        </span>
      </div>
      <div class="mb-5">
        Dưới góc nhìn chuyên môn, BS.CKII Nguyễn Lê Trà Mi, giảng viên bộ môn Da liễu Đại học Y Dược TP.HCM sẽ giúp bạn hiểu rõ hơn về dược mỹ phẩm chăm sóc da. 
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_bai_bao/hinh2.png" alt="knowledge-detail" />
      </div>
      <div class="mb-5">
      Thuật ngữ “dược - mỹ phẩm” (cosmeceuticals) được đưa ra bởi bác sĩ Albert Kligman: những sản phẩm được thấm qua lớp sừng với nồng độ tại mô đích đủ có tác dụng trong thời gian tương ứng với chuyển hóa của hoạt chất, có cơ chế hóa sinh chuyên biệt trên mô đích (da, tế bào, mô) và những dữ liệu nghiên cứu về các ghi nhận trên sản phẩm có ý nghĩa thống kê và đã được công bố.
      </div>
      <div class="mb-5">
        Dược mỹ phẩm không phải là thuốc điều trị bệnh, nhưng có ảnh hưởng tích cực đến vẻ đẹp và sức khỏe của da, có hiệu quả về mặt sinh lý học ở mức tế bào. 
      </div>
      <p class="font-bold text-xl mb-3">I. PHÂN LOẠI</p>
      <div class="mb-3 pl-3">
        Các loại dược mỹ phẩm chăm sóc da bao gồm: 
      </div>
      <ul class="mb-3 pl-10">
        <li class="list-disc">
          Làm sạch da
        </li>
        <li class="list-disc">
          Sản phẩm dưỡng ẩm, giảm khô da
        </li>
        <li class="list-disc">
          Sản phẩm chống nhăn
        </li>
        <li class="list-disc">
          Sản phẩm nhuộm màu da
        </li>
        <li class="list-disc">
          Sản phẩm giúp cân bằng, giảm nhờn, giảm mụn
        </li>
        <li class="list-disc">
          Sản phẩm làm trắng
        </li>
        <li class="list-disc">
          Sản phẩm chống nắng.
        </li>
      </ul>
      <div class="mb-3 flex justify-center">
        <img src="/images/logo_kien_thuc/dmp1.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">II. GIÁ TRỊ CỦA DƯỢC MỸ PHẨM ĐEM LẠI CHO DA</p>
      <div class="mb-3 pl-3">
        Dược mỹ phẩm tạo nét đẹp bề ngoài, giúp che giấu khuyết điểm và thay đổi ngoại hình cho bắt mắt hoặc có giá trị như một nghi thức trong giao tiếp.
      </div>
      <div class="mb-3 pl-3">
        Trong chăm sóc thẩm mỹ da, chúng làm chậm lại các biến đổi sinh lý của da (lão hóa, khô da), bảo vệ chống lại các tác nhân bên ngoài (ô nhiễm, ánh nắng, chất kích ứng...) và giúp sửa chữa, khắc phục các tổn thương da (làm căng, làm ẩm, làm láng, làm sáng...)
      </div>
      <div class="mb-3 pl-3">
        Ngoài ra, mỹ phẩm còn góp phần hoàn thiện các trị liệu bằng thuốc, duy trì hiệu quả sau khi đã điều trị với thuốc và thay thế thuốc trong một số trường hợp không chấp nhận được các tác dụng phụ của thuốc thoa.
      </div>
      <div class="mb-3 flex justify-center">
        <img src="/images/logo_kien_thuc/dmp2.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">III. CÁC CHẮT THÔNG DỤNG TRONG CHĂM SÓC THẨM MỸ DA</p>
      <p class="font-bold mb-3">1. Retinoids</p>
      <div class="mb-3 pl-3">
        Các chất retinoid bao gồm tretinoin (với các nồng độ 0,001%, 0,025%, 0,05%, 0,1%), adapalene (0,1%), tarazotene (0,05 và 0,1%) và các chất chuyển hóa của tretinoin như retinol, retinaldehyde, retinyl ester, acid retinoic (vitamin A).
      </div>
      <div class="mb-3 pl-3">
        Chúng có công dụng cải thiện tình trạng da lão hóa, giảm mụn. Trên thượng bì, các retinoid làm giảm sừng hóa, tiêu nhân mụn, giảm melanosome, giảm melanin, tăng sợi neo bám. Trên bì chúng giúp tăng nguyên sinh bào sợi, tăng sản sinh collagen, cải thiện tuần hoàn và tăng sinh mạch máu. 
      </div>
      <div class="mb-3 pl-3">
        Các chất tretinoin và tarazotene gây kích ứng da nhiều nhưng hiệu quả nhanh trong việc điều hòa sự sừng hóa thượng bì.
      </div>
      <div class="mb-3 pl-3">
        Các chất chuyển hóa của tretinoin thì ít kích ứng hơn, thường dùng phổ biến trong mỹ phẩm, đặc biệt cho người có làn da nhạy cảm, có thể thay thế tretinoin cho đối tượng không thoa được chất này. 
      </div>
      <div class="mb-3 pl-3">
        Dùng thường xuyên các sản phẩm có chứa retinoid sẽ cải thiện đến một mức độ nhất định các dấu hiệu của da lão hóa do ánh nắng và do tuổi.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dmp3.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold mb-3">2. Các chất AHA, BHA, PHA.</p>
      <div class="mb-3 pl-3">
        Sau tretinoin, các hợp chất chứa AHA, BHA, PHA đóng vai trò quan trọng chiếm hàng thứ nhì trong chăm sóc thẩm mỹ da và hiện diện trên hầu hết các nhãn hàng mỹ phẩm.
      </div>
      <p class="font-bold mb-3 pl-3">a) AHA (alpha hydroxy acid)</p>
      <div class="mb-3 pl-3">
        AHA là những acid carbocylic hữu cơ, trong công thức hóa học có chứa một nhóm acid carbocylic (COOH) và một nhóm hydroxy (OH) ở vị trí carbon alpha. Đa số chất AHA có trong trái cây (chính vì thế, chúng còn được gọi bằng cái tên thân thiện là những acid trái cây), rau tươi, một ít trong tế bào cơ thể người.
      </div>
      <div class="mb-3 pl-3">
        Chúng bao gồm acid lactic (trong sữa chua), acid tartaric (trong rượu vang), acid malic (trong nho), acid glycolic (trong mía), acid citric (trong cam, chanh), acid phytic (từ gạo),…
      </div>
      <div class="mb-3 pl-3">
        AHA có công dụng giảm mụn, giảm tổn thương da do ánh sáng, giảm sắc tố da, giữ ẩm, chống oxy hóa, giảm dấu hiệu lão hóa, làm da mượt mà và đồng đều hơn 
      </div>
      <div class="mb-3 pl-3">
        Các cơ chế tác động bao gồm bong vảy, điều hòa sừng hóa thượng bì, tiêu nhân mụn, tăng sự tan rã của melanin ở mảng đáy nên giúp cải thiện tăng sắc tố sau viêm, tăng mucopolysaccharide lên giúp giữ ẩm da.
      </div>
      <div class="mb-3 pl-3">
        Trên thị trường, có thể chia thành ba nhóm nồng độ AHA:
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          Nồng độ thấp (< 10%): được bán tự do, không có sự giám sát của bác sĩ, thay đổi từ. nước này sang nước khác, phù hợp với quy định của cơ quan cấp phép địa phương.
        </li>
        <li class="list-disc">
          Nồng độ từ 10% đến 50%; đòi hỏi sự giám sát của bác sĩ, thường được sử dụng trong một loạt phương pháp điều tị, được lặp đi lặp lại mỗi vài ngày. 
        </li>
        <li class="list-disc">
          Nồng độ 50% đến 70% được sử dụng bởi các bác sĩ chuyên khoa nhằm mục đích lột da.
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Nhìn chung, hiệu quả của AHAs phụ thuộc chủ yếu vào nồng độ của chúng, pH của da, độ dài của thời gian tiếp xúc với da và tần số của ứng dụng. Nồng độ cao sẽ cho hiệu quả hơn trong điều trị, nhưng có nhiều khả năng kích ứng da và tác dụng phụ không mong muốn. Khi pH của da thấp hơn, ảnh hưởng của nó trên da sẽ mạnh hơn.
      </div>
      <div class="mb-3 pl-3">
        Nông độ 2-20% AHA thường được sử dụng cho các sản phẩm chăm sóc da.
      </div>
      <div class="mb-3 pl-3">
        Glycolic acid hoạt động như một chất giữ ẩm, bằng cách hấp thụ nước. Do đó, nó có chức năng như một loại kem dưỡng ẩm, giúp da giảm khô và trở nên mượt mà.
      </div>
      <div class="mb-3 pl-3">
        Ngoài ra, một số AHAs còn có khả năng chống oxy hóa, ngăn chặn tác hại từ các gốc oxy tự do.
      </div>
      <p class="font-bold mb-3 pl-3">b) BHA (beta hydroxy acid)</p>
      <div class="mb-3 pl-3">
        BHA là các hợp chất thơm, dung nạp tốt, thường dùng trong mỹ phẩm nhằm thay thể các tretinoin thoa. Chất phổ biển của BHA là acid salicylic, có tác động làm tan liên kết giữa các tế bào sừng, tiêu nhân mụn. Hoạt tính và ứng dụng của nó thay đổi tùy theo nồng độ:
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          20-30% giúp lột da.
        </li>
        <li class="list-disc">
          5% giúp tiêu sừng, tiêu cồi mụn, diệt một số vi nấm trên da.
        </li>
        <li class="list-disc">
          0,5-2% thường dùng trong mỹ phẩm chăm sóc da mụn và tẩy tế bào chết.
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Các BHAs khác bao gồm 2-hydroxy-5-octanoyl acid benzoic, còn được gọi là betalipohydroxyacid (B-LHA) và acid tropic cũng được dùng trong mỹ phẩm nhưng ít phổ biến hơn.
      </div>
      <p class="font-bold mb-3 pl-3">c) PHA (polyhydroxy acid)</p>
      <div class="mb-3 pl-3">
        PHA là thế hệ mới của AHA, trong công thức có chứa nhiều gốc OH, Vì thế, chúng vừa phát huy các công dụng của AHA như chống lão hóa, làm mượt da nhưng giúp giữ ẩm tốt hơn và ít kích ứng da hơn, thích hợp với người có làn da nhạy cảm, trứng cá đỏ hoặc viêm da cơ địa. Ngoài ra, chúng còn giúp ngăn ngừa tổn thương hàng rào bảo vệ da khi dùng các sản phẩm trị mụn.
      </div>
      <div class="mb-3 pl-3">
        Chất lactobionic acid và gluconotactone là những chất thuộc nhóm PHA thông dụng.
      </div>
      <div class="mb-3 pl-3">
        Nghiên cứu cho thấy AHAs có thể làm tăng nhạy cảm với bức xạ tia cực tím và việc thoa kem chống nắng được khuyên dùng khi sử dụng các sản phẩm này.
      </div>
      <div class="mb-3 pl-3">
        Các hình thức chứa AHAs và PHAs: các loại kem, nhũ tương lỏng, thuốc mỡ, gel và sản phẩm làm sạch.
      </div>
      <p class="font-bold mb-3">3. Các chất làm sáng da.</p>
      <p class="font-bold mb-3 pl-3">a) Azelaic acid</p>
      <div class="mb-3 pl-3">
        Là một acid dicarboxylic bão hòa được phân lập từ Pityrosporum ovale. Trong tự nhiên, azelaic acid được tìm thấy trong lúa mì, lúa mạch đen và lúa mạch.
      </div>
      <div class="mb-3 pl-3">
        Azelaic acid có tính ức chế cạnh tranh với tyrosinase trong điều kiện thực nghiệm (khá yếu), chống tăng sinh và độc tế bào với melanocyte. Ngoài ra, nó giúp ngưng và diệt khuẩn P.aenes, bình thường sự sừng hóa nang lông, tiêu nhân mụn và chống tăng sắc tố nên có công dụng trị mụn và làm giảm sắc tố da. Azelaic acid có thể là một lựa chọn cho phụ nữ mang thai, cho con bú.
      </div>
      <div class="mb-3 pl-3">
        Acid azelaic thường không có tác dụng đối với da có sắc tố bình thường, tàn nhang, đốm nâu... nhưng sẽ hiệu quả hơn với những trường hợp tổng hợp melanin bất thường.
      </div>
      <p class="font-bold mb-3 pl-3">b) Vitamin C (ascorbic acid)</p>
      <div class="mb-3 pl-3">
        Hiện diện trong cam chanh, rau có lá xanh. Ascorbic theo nghĩa latin là “không bị bệnh scorbut”: a (không) và scorbuticus (bệnh scorbut). Mặc dù giải Nobel về phát kiến ra chất này được trao từ năm 1937 nhưng các tính năng thẩm mỹ của nó được nhìn nhận muộn hơn, từ cuối những năm 1980.
      </div>
      <div class="mb-3 pl-3">
        Đây là chất được dùng phổ biển trong dược và mỹ phẩm, giúp làm sáng da, khử gốc tự do, tăng tổng hợp collagen và elastin nên giúp trẻ da. Ngoài ra, còn giúp chống viêm và bảo vệ da với nắng. Tuy nhiên, hiệu quả của vitamine C lệ thuộc rất nhiều vào sự ổn định của nó trong thành phẩm. Hai ester của vitamin C là ascorbyl-6-palmitate và magnesium ascorbyl phosphate cho kết quả tốt hơn các dẫn xuất chứa vitamin C khác.
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dmp4.jpg" alt="knowledge-detail" class="w-1/2" />
      </div>
      <p class="font-bold mb-3 pl-3">c) Kojic acid</p>
      <div class="mb-3 pl-3">
        Được dùng trong mỹ phẩm, đặc biệt ở Nhật từ 1988 -2003. Nó có công dụng chống viêm, kháng khuẩn, giảm đau và làm sáng da. Đây là chất chuyền hóa của nấm từ nhiều loại bao gồm Acetobacter, Penicillium và Aspergillus đặc biệt Aspergillus oryzae, một loại nấm được dùng phổ biển ở châu Á để sản xuất nước tương, miso và sake.
      </div>
      <div class="mb-3 pl-3">
        Kojic acid được sử dụng ở nồng độ 1-4%, Nó cũng có khả năng gây kích ứng và viêm da tiếp xúc dị ứng.
      </div>
      <p class="font-bold mb-3 pl-3">d) Arbutin</p>
      <div class="mb-3 pl-3">
        Một dẫn xuất tự nhiên beta-D-glucopyranoside của HQ, có tác động ức chế tyrosinase và cho hiệu quả ở nồng độ 1%
      </div>
      <p class="font-bold mb-3 pl-3">e) Nhiều chất khác</p>
      <div class="mb-3 pl-3">
        Glaridin, acid ellagic, hydroxycoumarin, chiết xuất licorice, chiết xuất đậu nành, chiết xuất dâu tằm, emblicanin, Arctostaphylos patula, Aratostaphylos viscida, melatonin, một số acid béo chưa no, aleosin, niacinamide.
      </div>
      <p class="font-bold mb-3">4. Các chất chống oxy hóa</p>
      <div class="mb-3 pl-3">
        Là các hợp chất giúp trung hòa, ức chế hình thành hoặc tăng đào thải các gốc tự do. Gốc tự do được xem như là “rác” và các chất chống oxy hóa có nhiệm vụ như “người nhặt rác”.
      </div>
      <div class="mb-3 pl-3">
        Việc thoa tại chỗ các chất chống oxy hóa mang lại lợi ích cho vùng da được chăm sóc vì nồng độ tại da cao hơn cách uống toàn thân và sự tồn tại hoạt chất trong da sẽ kéo dài hơn. 
      </div>
      <div class="mb-3 pl-3">
        Phân Loại
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          Nhóm tan trong nước: Glutathione, vitamin C, trà xanh, Silymarin, reservatrol, lựu, chiết xuất hạt nho
        </li>
        <li class="list-disc">
          Nhóm tan trong dầu: vitamin E, carotenoid, coQ10, Idebenone, lycopene, curcumine
        </li>
        <li class="list-disc">
          Nhóm tan trong nước và dầu: lipoic acid, melatonin, một số flavonoides
        </li>
        <li class="list-disc">
          Chất khác: genistein, pycnogenol, DHEA, melatonin, selenium
        </li>
      </ul>
      <p class="font-bold mb-3">5. Chất giữ ẩm</p>
      <div class="mb-3 pl-3">
        Là những chất giúp da duy trì độ ẩm thông qua việc ngăn ngừa mất nước qua da hoặc thu hút nước vào da
      </div>
      <div class="mb-3 pl-3">
        Phân Loại
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          Emolliens = làm mềm
        </li>
        <li class="list-disc">
          Humectants = làm ẩm
        </li>
        <li class="list-disc">
          Occludents = chất băng bịt
        </li>
        <li class="list-disc">
          Miscellaneous = kết hợp
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Các thành phản giúp giữ ẩm cho da bao gồm: nhóm polyols (như glycerin, sorbitol), nhóm glycols (như butylene glycol, propylene glycol), glycerine, urea, alpha hydroxy acids như lactic acid hoặc glycolic acid, petrolatum, sáp ong, shea butter, lanolin, collagen và peptides.
      </div>
      <div class="mb-3 pl-3">
        Chất thường được quan tâm dùng trong dược mỹ phẩm là acid hyaluronic (HA). Đây là một glycosaminoglycan, có tính ưa nước và thu hút nước, Không chỉ được dùng như một chất độn, HA gắn kết các phân tử nước và giúp giữ nước (1 gam của HA liên kết với 3 lít nước)
      </div>
      <div class="mb-3 pl-3">
        Trong da: HA có trong chất nền ngoại bào giúp duy trì cấu trúc và độ dày của da bằng cách thu hút nước, giúp bảo vệ mô và là một chất chống oxy hóa mạnh mẽ. Việc mất HA trong da sẽ gây các biểu hiện của lão hóa da.
      </div>
      <div class="mb-3 pl-3">
        Một số chất giữ ẩm khác cũng “kiêm nhiệm” thêm các lợi ích trong chăm sóc da lão hóa như đóng vai trò chống oxy hóa (vitamin E), giảm tổn thương da do ánh sáng và sắc tố da (acid glycolic).
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dmp5.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold mb-3">6. Chất chống nắng.</p>
      <div class="mb-3 pl-3">
        Ở Mỹ, chất chống nắng được xem là thuốc bán theo diện OTC. Ở châu Âu, chất chống nắng được xem là mỹ phẩm, Cũng có một số chất được dùng ở châu Âu nhưng không được FDA công nhận
      </div>
      <div class="font-bold mb-3 pl-3">
        a) Chất chống nắng thoa
      </div>
      <div class="mb-3 pl-3">
        Người ta chia làm hai nhóm, dựa theo cơ chế tác động của chúng:
      </div>
      <div class="font-bold mb-3 pl-3">
        b) Chất chống nắng hữu cơ (hóa học)
      </div>
      <div class="mb-3 pl-3">
        Hấp thu tia cực tím bằng cách kích thích tới mức năng lượng cao hơn, tính thẩm mỹ cao nhưng hiệu quả chống nắng thì không bằng chất chồng nắng vô cơ.
      </div>
      <div class="font-bold mb-3 pl-3">
        c) Chất chống nắng vô cơ (vật lý)
      </div>
      <div class="mb-3 pl-3">
        Tác động như tấm màn che, giúp ngăn ngừa hoặc phản xạ hoặc phân tán các tia làm cho chúng không đến da được.
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          Gồm các oxide kim loại, phổ biển nhất là dioxide titanium và dioxide kẽm
        </li>
        <li class="list-disc">
          Ưu điểm: cho hiệu quả chồng nắng cao
        </li>
        <li class="list-disc">
          Bất lợi: tạo một lớp mảng trắng thấy rõ và khá dày.
        </li>
      </ul>
      <div class="mb-3 pl-3">
        Trên thực tế, một sản phẩm chống nắng thường phối hợp nhiều chất với cả hai loại để tăng hiệu quả, tính thẩm mỹ và sự chấp nhận của người dùng.
        Chất chống nắng được thoa 15-30 phút trước khi ra nắng, thoa lặp lại sau 2 giờ, sau khi xuống nước hoặc đổ mồ hôi nhiều và thoa trên toàn bộ các vùng da phơi bày ra nắng. 
      </div>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dmp6.jpg" alt="knowledge-detail" />
      </div>
      <p class="font-bold text-xl mb-3">IV. TÁC DỤNG PHỤ CỦA DƯỢC - MỸ PHẨM CHĂM SÓC DA</p>
      <div class="mb-5 flex justify-center">
        <img src="/images/logo_kien_thuc/dmp7.jpg" alt="knowledge-detail" />
      </div>
      <div class="font-bold mb-3 pl-3">
        1. Sự kích ứng
      </div>
      <div class="mb-3 pl-3">
        Gây đỏ da, cảm giác châm chích, khô, bong da, Các tác dụng phụ này thường gắn liền với hiệu quả điều trị của thuốc, mỹ phẩm và sẽ giảm dẫn khi thoa với một lượng ít hoặc thưa dần.
      </div>
      <div class="mb-3 pl-3">
        Các chất thuộc nhóm retinoid, AHA, BHA, peroxide benzoyl và một số chắt giúp làm nhạt màu da thường có thể gây kích ứng cho da
      </div>
      <div class="font-bold mb-3 pl-3">
        2. Dị ứng
      </div>
      <div class="mb-3 pl-3">
        Do cơ thể người dùng nhạy cảm với một trong các thành phần của sản phẩm, thông qua cơ chế miễn dịch - đi ứng. Tùy từng cơ địa, được biểu hiện với những mức độ năng nhẹ khác nhau: ngứa, nổi hồng ban, có thể có mụn nước, bóng nước hoặc sung phủ ở vùng thoa sản phẩm, thâm chí cả vùng lân cận
      </div>
      <div class="mb-3 pl-3">
        Cần ngưng sử dụng và điều trị các biểu hiện da do dị ứng.
      </div>
      <div class="mb-3 pl-3">
        Các dị ng nguyên có thể có trong mỹ phẩm chăm sóc da.
      </div>
      <ul class="mb-3 pl-12">
        <li class="list-disc">
          Dị ứng nguyên nguồn gốc từ thực phẩm, thực vật (tinh dầu, chiết xuất thực vật...)
        </li>
        <li class="list-disc">
          Lanolin
        </li>
        <li class="list-disc">
          Các hoạt chắt chống nắng: octocryle, dibenzoylmethanes, salicylates, cinnamales, benzophenones, para-iminobenzoie acid (PABA)
        </li>
        <li class="list-disc">
          Chất bảo quản: chất bảo quản được sử dụng trong mỹ phẩm nhằm ngăn ngừa sự phát triển của các vì sinh vật, làm sản phẩm không bị đổi màu và có mùi hôi đồng thời bảo vệ sản phẩm không bị tia UV làm biến chất, Có ba nhóm chất bảo quản: (1) kháng khuẩn, (2) chống quá trình oxy hóa, (3) hấp thu tia tử ngoại
        </li>
        <li class="list-disc">
          Chất tạo mùi hương: hiện diện trong nhiều sản phẩm chăm sóc da, tóc, răng miệng, cơ thể, nước hoa. Cần lưu ý có những sản phẩm được quảng cáo là không mùi hương nhưng vẫn có thể có các chất tạo mùi giấu mặt. Chất tạo mùi hương và chất bảo quản là hai nhóm dị ứng nguyên thường gặp trong mỹ phẩm.
        </li>
        <li class="list-disc">
          Chất tạo màu, tá dược, chất “tạo dáng” cho sản phẩm (các chất nhũ tương hóa và các thành phần nền)
        </li>
      </ul>
      <div class="font-bold mb-3 pl-3">
        3. Gây mụn
      </div>
      <div class="mb-3 pl-3">
        Thông qua cơ chế sinh nhân mụn (comedogenic) và gây tắc nghẽn cơ học
      </div>
      <div class="mb-3 pl-3">
        Nhiều thành phần mỹ phẩm đã được liệt kê có khả năng tạo nhân mụn với nhiều mức độ cao, trung bình hoặc thấp. Do đó, cần chọn lựa các sản phẩm không sinh nhân mụn, thuờng được ghi chữ noneomedogenic hoặc nonacnenegenic, Tuy nhiên vẫn có thể có sự không tương ứng giữa quảng cáo trên bao bì với thực chất của sản phẩm.
      </div>
      <div class="font-bold mb-3 pl-3">
        4. Tác dụng phụ của corticoid
      </div>
      <div class="mb-3 pl-3">
        Khi bôi lâu trên da sẽ gây teo da, giãn mạch, tăng nguy cơ nhiễm khuẩn, nhiễm nấm hoặc siêu vi, nổi mụn, tình trạng lệ thuộc, rạn da, ...
      </div>
      <div class="mb-3 pl-3">
        Mức độ biến chứng tùy thuộc hoạt lực của thuốc, thời gian, vị trí và diện tích da sử dụng. 
      </div>
    `,
  },
];

export const newspaperList = [
  {
    id: 1,
    title: "Điều trị nám da như thế nào để hiệu quả?",
    isShowBadge: false,
    badgeLabel: "",
    subTitle:
      "BS.CKII Nguyễn Lê Trà Mi, giảng viên Bộ môn Da liễu Đại học Y Dược TP.HCM, Đơn vị Da liễu - Thẩm mỹ da",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    fullContent:
      "https://thanhnien.vn/dieu-tri-nam-da-nhu-the-nao-de-hieu-qua-185240309090938696.htm?fbclid=IwZXh0bgNhZW0CMTAAAR1B8SadWUsJnlpmQAMoxkYm8JgSQ6EVa646H99iy99JQSSwcVGAifUcCew_aem_AT7u7WL77no-ps3eqBpHuYc2mkEbPtBSqSUyCRBaPRWhtHIvR4fp_oc0_N-HWuCLxXCz51Suc4F0P2ZHm68UBvuR",
  },
  {
    id: 2,
    title: "Chất làm đầy (fillers) có nguy hiểm không?",
    isShowBadge: false,
    badgeLabel: "",
    subTitle:
      "BS.CKII Nguyễn Lê Trà Mi, giảng viên Bộ môn Da liễu Đại học Y Dược TP.HCM, Đơn vị Da liễu - Thẩm mỹ da",
    imageUrl: "/images/logo_bai_bao/hinh1.png",
    fullContent:
      "https://thanhnien.vn/chat-lam-day-fillers-co-nguy-hiem-khong-185240515175648893.htm?fbclid=IwZXh0bgNhZW0CMTAAAR2WnHh3m9Dirps6I_zb5kaKl7oJ_HQ9VwjiEHkE5bPoOcWU1Q6fnnxx29g_aem_AT7Ik0fKGni4nJvQWf_1NuacWbqGCH_0sytf9ZAnUiViHkexXoMpoaIu-JPbGYPCkAClyDNLNLghQoL5Cqpl8boA",
  },
  {
    id: 3,
    title: "Xóa nhăn bằng Botulinum Toxin hiệu quả thế nào?",
    isShowBadge: false,
    badgeLabel: "",
    subTitle:
      "BS.CKII Nguyễn Lê Trà Mi, giảng viên Bộ môn Da liễu Đại học Y Dược TP.HCM, Đơn vị Da liễu - Thẩm mỹ da",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    fullContent:
      "https://thanhnien.vn/xoa-nhan-bang-botulinum-toxin-hieu-qua-the-nao-185240621181547026.htm?fbclid=IwZXh0bgNhZW0CMTAAAR2NbpWu9dUDWSvqberVKwqTJkYPxKSG-X177nN0n2l4XrJnP8SedtE87rQ_aem__xLU-WexRLuo2tTK4KiGwg",
  },
  {
    id: 4,
    title: "Chăm sóc da mụn thế nào để tránh tái phát?",
    isShowBadge: false,
    badgeLabel: "",
    subTitle:
      "Học cách BS.CKII Nguyễn Lê Trà Mi, giảng viên bộ môn Da liễu Đại học Y Dược TP.HCM, đơn vị Da liễu - Thẩm mỹ da",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    fullContent:
      "https://thanhnien.vn/cham-soc-da-mun-the-nao-de-tranh-tai-phat-185240825113859219.htm",
  },
  {
    id: 5,
    title: "Nồng độ interleukin 6 huyết thanh trên bệnh nhân mày đay mạn tính",
    isShowBadge: false,
    badgeLabel: "",
    subTitle:
      "Xác định nồng độ IL-6 huyết thanh và mối liên quan với các đặc điểm lâm sàng ở bệnh nhân mày đay mạn tính điều trị tại bệnh viện Da liễu TP. Hồ Chí Minh.",
    imageUrl: "/images/logo_bai_bao/hinh2.png",
    fullContent:
      "https://nsti.vista.gov.vn/publication/view/nong-do-interleukin-6-huyet-thanh-tren-benh-nhan-may-day-man-tinh-353681.html",
  },
];

export const productFilterTags = [
  {
    id: 1,
    label: "tất cả",
  },
  {
    id: 2,
    label: "kem chống nắng",
  },
  {
    id: 3,
    label: "kem dưỡng ẩm",
  },
  {
    id: 4,
    label: "nước tẩy trang",
  },
  {
    id: 5,
    label: "sữa rửa mặt",
  },
  {
    id: 6,
    label: "serum",
  },
  {
    id: 7,
    label: "toner",
  },
  {
    id: 8,
    label: "trị mụn",
  },
  {
    id: 99,
    label: "khác",
  },
];

export const originProductList = [
  {
    id: 1,
    tagId: 2,
    searchTag: "kem chống nắng anthelios uvmune 400 oil control fluid 50ml kem chong nang",
    badgeLabel: "Kem chống nắng",
    imageUrl: "/images/logo_san_pham/sp1.png",
    discountNote: "",
    name: "KEM CHỐNG NẮNG ANTHELIOS UVMUNE 400 OIL CONTROL FLUID 50ML",
    fromPlace: "pháp",
    price: "560.000",
    oldPrice: "",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/26359990198/  ",
  },
  {
    id: 2,
    tagId: 2,
    searchTag: "kem chống nắng anthelios uvmune 400 invisible fluid 50ml kem chong nang",
    badgeLabel: "Kem chống nắng",
    imageUrl: "/images/logo_san_pham/sp2.png",
    discountNote: "",
    name: "KEM CHỐNG NẮNG ANTHELIOS UVMUNE 400 INVISIBLE FLUID 50ML",
    fromPlace: "Pháp",
    price: "560.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/26060531953/",
  },
  {
    id: 3,
    tagId: 3,
    searchTag: "kem dưỡng ẩm lipikar baume ap+m triple-action balm 75ml kem duong am",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp3.png",
    discountNote: "",
    name: "KEM DƯỠNG LIPIKAR BAUME AP+M TRIPLE-ACTION BALM 75ML",
    fromPlace: "pháp",
    price: "325.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/28110379043/",
  },
  {
    id: 4,
    tagId: 4,
    searchTag: "nước tẩy trang xanh effaclar micellar water ultra 400ml nuoc tay trang xanh",
    badgeLabel: "Nước tẩy trang",
    imageUrl: "/images/logo_san_pham/sp4.png",
    discountNote: "",
    name: "NƯỚC TẨY TRANG XANH EFFACLAR MICELLAR WATER ULTRA 400ML",
    fromPlace: "pháp",
    price: "520.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/26610374204/",
  },
  {
    id: 5,
    tagId: 4,
    searchTag: "nước tẩy trang trắng micellar water ultra sensitive skin 400ml nuoc tay trang trang",
    badgeLabel: "Nước tẩy trang",
    imageUrl: "/images/logo_san_pham/sp5.png",
    discountNote: "",
    name: "NƯỚC TẨY TRANG TRẮNG MICELLAR WATER ULTRA SENSITIVE SKIN 400ML",
    fromPlace: "pháp",
    price: "525.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/29960369501/",
  },
  {
    id: 6,
    tagId: 3,
    searchTag: "kem dưỡng ẩm liftactiv collagen specialist night 50ml kem duong am",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp6.png",
    discountNote: "",
    name: "KEM DƯỠNG LIFTACTIV COLLAGEN SPECIALIST NIGHT 50ML",
    fromPlace: "pháp",
    price: "1.165.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/28010374645/",
  },
  {
    id: 7,
    tagId: 99,
    searchTag: "dầu gội dercos technique anti -dandruff ds dermatological shampoo dandruff & itchy scalp normal to oily hair 200ml dau goi",
    badgeLabel: "Khác (Dầu gội)",
    imageUrl: "/images/logo_san_pham/sp7.png",
    discountNote: "",
    name: "DẦU GỘI DERCOS TECHNIQUE ANTI -DANDRUFF DS DERMATOLOGICAL SHAMPOO DANDRUFF & ITCHY SCALP NORMAL TO OILY HAIR 200ML",
    fromPlace: "pháp",
    price: "415.000",
    oldPrice: "",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/26460374670/",
  },
  {
    id: 8,
    tagId: 99,
    searchTag: "dầu gội dercos technique energising stimulating shampoo complements hair loss treatments 200ml dau goi",
    badgeLabel: "Khác (Dầu gội)",
    imageUrl: "/images/logo_san_pham/sp8.png",
    discountNote: "",
    name: "DẦU GỘI DERCOS TECHNIQUE ENERGISING STIMULATING SHAMPOO COMPLEMENTS HAIR LOSS TREATMENTS 200ML",
    fromPlace: "pháp",
    price: "415.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/25885713388/",
  },
  {
    id: 9,
    tagId: 3,
    searchTag: "effaclar duo+m 40ml kem duong am",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp9.png",
    discountNote: "",
    name: "EFFACLAR DUO+M 40ml",
    fromPlace: "pháp",
    price: "480.000",
    oldPrice: "",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/29610374724/",
  },
  {
    id: 10,
    tagId: 5,
    searchTag: "sữa rửa mặt sua rua mat effaclar purifying foaming gel for oily sensitive skin 200ml",
    badgeLabel: "Sữa rửa mặt",
    imageUrl: "/images/logo_san_pham/sp10.png",
    discountNote: "",
    name: "EFFACLAR PURIFYING FOAMING GEL FOR OILY SENSITIVE SKIN 200ml",
    fromPlace: "pháp",
    price: "410.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/27760374960/",
  },
  {
    id: 11,
    tagId: 5,
    searchTag: "sữa rửa mặt sua rua mat effaclar purifying foaming gel for oily sensitive skin 400ml",
    badgeLabel: "Sữa rửa mặt",
    imageUrl: "/images/logo_san_pham/sp11.png",
    discountNote: "",
    name: "EFFACLAR PURIFYING FOAMING GEL FOR OILY SENSITIVE SKIN 400ml",
    fromPlace: "pháp",
    price: "625.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/29060380139/",
  },
  // SangNote: Thiếu linkShoppe + imageUrl
  // {
  //   id: 12,
  //   tagId: 3,
  //   searchTag: "kem dưỡng ẩm cicaplast baume b5+ kem duong am",
  //   badgeLabel: "Kem dưỡng ẩm",
  //   imageUrl: "/images/logo_san_pham/sp12.png",
  //   discountNote: "",
  //   name: "CICAPLAST BAUME B5+",
  //   fromPlace: "pháp",
  //   price: "410.000",
  //   oldPrice: "",
  //   isBestSeller: false,
  //   linkShoppe: "",
  // },
  {
    id: 13,
    tagId: 3,
    searchTag: "liftactiv specialist b3 serum dark spots & wrinkles kem dưỡng ẩm kem duong am",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp13.png",
    discountNote: "",
    name: "LIFTACTIV SPECIALIST B3 SERUM DARK SPOTS & WRINKLES",
    fromPlace: "pháp",
    price: "1.250.000",
    oldPrice: "",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/29410374920/",
  },
  {
    id: 14,
    tagId: 3,
    searchTag: "kem dưỡng ẩm sáng da ban ngày dermedic melumin brightening protective day cream spf 50+ kem duong am sang da ban ngay",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp14.png",
    discountNote: "Giảm 5%",
    name: "Kem Dưỡng Sáng Da Ban Ngày DERMEDIC MELUMIN Brightening protective day cream SPF 50+",
    fromPlace: "ba lan",
    price: "920.000",
    oldPrice: "968.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/29458557320/",
  },
  {
    id: 15,
    tagId: 3,
    searchTag: "kem dưỡng sáng da ban đêm kem duong am sang da ban dem dermedic melumin anti-dark spots concentrated night cream 50g",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp15.png",
    discountNote: "Giảm 5%",
    name: "Kem dưỡng sáng da ban đêm DERMEDIC MELUMIN Anti-dark spots concentrated night cream 50g",
    fromPlace: "ba lan",
    price: "920.000",
    oldPrice: "968.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/24285065860/",
  },
  {
    id: 16,
    tagId: 4,
    searchTag: "nước tẩy trang nuoc tay trang cho da nhay cam, man do dermedic cho da nhạy cảm, mẩn đỏ redness micellar water h2o 500 ml",
    badgeLabel: "Nước tẩy trang",
    imageUrl: "/images/logo_san_pham/sp16.png",
    discountNote: "Giảm 5%",
    name: "Nước tẩy trang Dermedic cho da nhạy cảm, mẩn đỏ REDNESS micellar water H2O 500 ml",
    fromPlace: "ba lan",
    price: "500.000",
    oldPrice: "528.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/29158554163/",
  },
  {
    id: 17,
    tagId: 5,
    searchTag: "bot rua mat danh cho da nhay cam bọt rửa mặt dành cho da nhạy cảm dermedic redness soothing cleansing foam 170ml",
    badgeLabel: "Sữa rửa mặt",
    imageUrl: "/images/logo_san_pham/sp17.png",
    discountNote: "Giảm 5%",
    name: "Bọt rửa mặt dành cho da nhạy cảm Dermedic Redness Soothing Cleansing Foam 170ml",
    fromPlace: "ba lan",
    price: "625.000",
    oldPrice: "660.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/28258559409/",
  },
  // SangNote: Thiếu linkShoppe + imageUrl
  // {
  //   id: 18,
  //   tagId: 3,
  //   searchTag: "kem duong phuc hoi da mong yeu nhay cam kem dưỡng dermedic phục hồi da mỏng yếu nhạy cảm redness concentrate cream for chronic diseases 40ml",
  //   badgeLabel: "Kem dưỡng ẩm",
  //   imageUrl: "/images/logo_san_pham/sp18.png",
  //   discountNote: "Giảm 5%",
  //   name: "Kem dưỡng Dermedic phục hồi da mỏng yếu nhạy cảm Redness Concentrate Cream For Chronic Diseases 40ml",
  //   fromPlace: "ba lan",
  //   price: "815.000",
  //   oldPrice: "858.000",
  //   isBestSeller: false,
  //   linkShoppe: "",
  // },
  {
    id: 19,
    tagId: 2,
    searchTag: "kem chong nang cho da nhay cam kem chống nắng cho da nhạy cảm dermedic sunbrella spf 50+ sun protection cream skin with fragile capillaries 50 g",
    badgeLabel: "Kem chống nắng",
    imageUrl: "/images/logo_san_pham/sp19.png",
    discountNote: "Giảm 5%",
    name: "Kem chống nắng cho da nhạy cảm Dermedic Sunbrella SPF 50+ Sun Protection Cream Skin With Fragile Capillaries 50 G",
    fromPlace: "ba lan",
    price: "606.000",
    oldPrice: "638.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/27958565355/",
  },
  {
    id: 20,
    tagId: 4,
    searchTag: "nuoc tay trang cho da kho 2 trong 1 cap am nước tẩy trang dermedic 2 in 1 cho da khô cấp ẩm ha hydrain3 hialuro micellar water h2o 500 ml",
    badgeLabel: "Nước tẩy trang",
    imageUrl: "/images/logo_san_pham/sp20.png",
    discountNote: "Giảm 5%",
    name: "Nước tẩy trang Dermedic 2 in 1 cho da khô cấp ẩm HA Hydrain3 Hialuro Micellar water H2O 500 ml",
    fromPlace: "ba lan",
    price: "500.000",
    oldPrice: "528.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/26258570409/",
  },
  {
    id: 21,
    tagId: 6,
    searchTag: "cap nuoc cap am cho da kho serum dermedic hydrain3 cấp nước, cấp ẩm cho da khô hydrain3 hialuro hydrating serum for face, neck and decolltage 30 ml",
    badgeLabel: "Serum",
    imageUrl: "/images/logo_san_pham/sp21.png",
    discountNote: "Giảm 5%",
    name: "Serum Dermedic Hydrain3 cấp nước, cấp ẩm cho da khô Hydrain3 Hialuro Hydrating Serum For Face, Neck And Decolltage 30 ml",
    fromPlace: "ba lan",
    price: "740.000",
    oldPrice: "780.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/29658566029/",
  },
  {
    id: 22,
    tagId: 3,
    searchTag: "kem duong 2 trong 1 chong nang cap am cho da kho kem dưỡng dermedic ha 2 in 1 chống nắng cấp ẩm cho da khô hydrain3 hialuro deeply moisturizing cream spf 15  50 g",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp22.png",
    discountNote: "Giảm 5%",
    name: "Kem dưỡng Dermedic HA 2 in 1 chống nắng cấp ẩm cho da khô Hydrain3 Hialuro Deeply Moisturizing Cream SPF 15 - 50 G",
    fromPlace: "ba lan",
    price: "710.000",
    oldPrice: "748.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/25935083808/",
  },
  {
    id: 23,
    tagId: 3,
    searchTag: "kem duong ban dem cap am da kho mat nuoc kem dưỡng dermedic ha ban đêm cấp âm da khô mất nước hydrain3 hialuro cream-gel ultra-hydrating 50 g",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp23.png",
    discountNote: "Giảm 5%",
    name: "Kem dưỡng Dermedic HA ban đêm cấp âm da khô mất nước Hydrain3 Hialuro Cream-Gel Ultra-Hydrating 50 G",
    fromPlace: "ba lan",
    price: "710.000",
    oldPrice: "748.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/25935079379/",
  },
  {
    id: 24,
    tagId: 2,
    searchTag: "kem chong nang cho da thuong va da kho kem chống nắng dermedic cho da thường và da khô sunbrella spf 50+ sun protection cream dry and normal skin 50 g",
    badgeLabel: "Kem chống nắng",
    imageUrl: "/images/logo_san_pham/sp24.png",
    discountNote: "Giảm 5%",
    name: "Kem Chống Nắng Dermedic Cho Da Thường và Da Khô Sunbrella Spf 50+ Sun Protection Cream Dry And Normal Skin 50 G",
    fromPlace: "ba lan",
    price: "606.000",
    oldPrice: "638.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/28758632158/",
  },
  {
    id: 25,
    tagId: 5,
    searchTag: "sua rua mat kiem dau giam mun lam sach sau Sữa Rửa Mặt Dermedic Kiềm Dầu, Giảm Mụn, Làm Sạch Sâu Normacne Preventi Antibacterial Cleansing Gel 200 ML",
    badgeLabel: "Sữa rửa mặt",
    imageUrl: "/images/logo_san_pham/sp25.png",
    discountNote: "Giảm 5%",
    name: "Sữa Rửa Mặt Dermedic Kiềm Dầu, Giảm Mụn, Làm Sạch Sâu Normacne Preventi Antibacterial Cleansing Gel 200 ML",
    fromPlace: "ba lan",
    price: "470.000",
    oldPrice: "495.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/28208637941/",
  },
  {
    id: 26,
    tagId: 7,
    searchTag: "da dau mun lam diu se khi lo chan long toner dermedic da dầu mụn, làm dịu, se khít lỗ chân lông normacne preventi cleansing and regulating skin toner 200 ml",
    badgeLabel: "Toner",
    imageUrl: "/images/logo_san_pham/sp26.png",
    discountNote: "Giảm 5%",
    name: "Toner Dermedic da dầu mụn, làm dịu, se khít lỗ chân lông Normacne Preventi Cleansing And Regulating Skin Toner 200 ml",
    fromPlace: "ba lan",
    price: "334.000",
    oldPrice: "352.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/25635079935/",
  },
  {
    id: 27,
    tagId: 3,
    searchTag: "kem duong am ban ngay kiem dau giam mun kem dưỡng ẩm ban ngày dermedic kiềm dầu giảm mụn normacne mattifying moisturising cream 40ml",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp27.png",
    discountNote: "Giảm 5%",
    name: "Kem Dưỡng Ẩm Ban Ngày Dermedic Kiềm Dầu Giảm Mụn Normacne Mattifying Moisturising Cream 40Ml",
    fromPlace: "ba lan",
    price: "710.000",
    oldPrice: "748.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/29808638164/",
  },
  {
    id: 28,
    tagId: 8,
    searchTag: "cham mun chấm mụn dermedic normacne therapy h2o2 acne spot treatment 15ml",
    badgeLabel: "Trị mụn",
    imageUrl: "/images/logo_san_pham/sp28.png",
    discountNote: "Giảm 5%",
    name: "Chấm mụn Dermedic NORMACNE Therapy H2O2 acne spot treatment 15ml",
    fromPlace: "ba lan",
    price: "365.000",
    oldPrice: "385.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/28708633735/",
  },
  {
    id: 29,
    tagId: 3,
    searchTag: "kem duong am lam diu da kem dưỡng ẩm làm dịu da dermedic cicatopy soothing moisturising cream 200ml",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp29.png",
    discountNote: "Giảm 5%",
    name: "Kem dưỡng ẩm làm dịu da Dermedic Cicatopy Soothing Moisturising Cream 200ML",
    fromPlace: "ba lan",
    price: "370.000",
    oldPrice: "390.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/26858634047/",
  },
  {
    id: 30,
    tagId: 99,
    searchTag: "dau goi ngan rung toc dầu gội ngăn rụng tóc dermedic capilarte strengthening shampoo anti hair loss 300ml",
    badgeLabel: "Khác (dầu gội)",
    imageUrl: "/images/logo_san_pham/sp30.png",
    discountNote: "Giảm 5%",
    name: "Dầu gội ngăn rụng tóc Dermedic Capilarte Strengthening Shampoo Anti Hair Loss 300ml",
    fromPlace: "ba lan",
    price: "427.000",
    oldPrice: "450.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/29208629012/",
  },
  {
    id: 31,
    tagId: 5,
    searchTag: "sua rua mat diu nhe khong kho da sữa rửa mặt dịu nhẹ không khô da skinclinic cleansing milk 200ml",
    badgeLabel: "Sữa rửa mặt",
    imageUrl: "/images/logo_san_pham/sp31.png",
    discountNote: "Giảm 5%",
    name: "Sữa Rửa Mặt Dịu Nhẹ, Không Khô Da SkinClinic Cleansing Milk 200ml",
    fromPlace: "tây ban nha",
    price: "1.235.000",
    oldPrice: "1.300.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/28108638791/",
  },
  {
    id: 32,
    tagId: 6,
    searchTag: "ngan lao hoa va tang sac to cho da nam serum skinclinic melanyc serum 30ml ngăn lão hóa và tăng sắc tố cho da nám",
    badgeLabel: "Serum",
    imageUrl: "/images/logo_san_pham/sp32.png",
    discountNote: "Giảm 5%",
    name: "Serum SkinClinic Melanyc Serum 30ml - Ngăn Lão Hóa Và Tăng Sắc Tố Cho Da Nám",
    fromPlace: "tây ban nha",
    price: "2.850.000",
    oldPrice: "3.000.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/24535090164/",
  },
  {
    id: 33,
    tagId: 3,
    searchTag: "kem duong am phuc hoi da nam nang kem dưỡng  ẩmphục hồi da nám nặng skinclinic melanyc 50ml ban đêm",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp33.png",
    discountNote: "Giảm 5%",
    name: "Kem Dưỡng Phục Hồi Da Nám Nặng SkinClinic Melanyc 50ml - Ban Đêm",
    fromPlace: "tây ban nha",
    price: "2.850.000",
    oldPrice: "3.000.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/26208629477/",
  },
  {
    id: 34,
    tagId: 3,
    searchTag: "kem duong am phuc hoi da nam ban ngay kem dưỡng ẩm skinclinic melanyc daily 50ml phục hồi da nám ban ngày",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp34.png",
    discountNote: "Giảm 5%",
    name: "Kem Dưỡng SkinClinic Melanyc Daily 50ml - Phục Hồi Da Nám Ban Ngày",
    fromPlace: "tây ban nha",
    price: "2.850.000",
    oldPrice: "3.000.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/28558629802/",
  },
  {
    id: 35,
    tagId: 6,
    searchTag: "serum duong sang tre hoa toan dien skinclinic serum prp 100ml dưỡng sáng trẻ hóa toàn diện",
    badgeLabel: "serum",
    imageUrl: "/images/logo_san_pham/sp35.png",
    discountNote: "Giảm 5%",
    name: "SkinClinic Serum PRP 100ml - Dưỡng Sáng, Trẻ Hóa Toàn Diện",
    fromPlace: "tây ban nha",
    price: "7.410.000",
    oldPrice: "7.800.000",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/27858639511/",
  },
  // SangNote: thiếu linkShoppe và imageUrl
  // {
  //   id: 36,
  //   tagId: 6,
  //   searchTag: "serum chong lao hoa va ho tro giam nhon cho da dau mun serum chống cão hóa và hỗ trợ giảm nhờn cho da dầu mụn skinclinic zalyc serum 30ml",
  //   badgeLabel: "serum",
  //   imageUrl: "/images/logo_san_pham/sp36.png",
  //   discountNote: "",
  //   name: "Serum Chống Lão Hóa Và Hỗ Trợ Giảm Nhờn Cho Da Dầu Mụn SkinClinic Zalyc Serum 30ml",
  //   fromPlace: "tây ban nha",
  //   price: "1.805.000",
  //   oldPrice: "1.900.000",
  //   isBestSeller: true,
  //   linkShoppe: "",
  // },
  {
    id: 37,
    tagId: 3,
    searchTag: "kem duong am ban ngay phuc hoi da nam nám lao hoa kem dưỡng ẩm ban ngày skinclinic m cream 50ml phục hồi da nám lão hóa",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp37.png",
    discountNote: "Giảm 5%",
    name: "Kem Dưỡng Ban Ngày SkinClinic M Cream 50ml - Phục Hồi Da Nám, Lão Hóa",
    fromPlace: "tây ban nha",
    price: "2.850.000",
    oldPrice: "3.000.000",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/25085089479/",
  },
  {
    id: 38,
    tagId: 3,
    searchTag: "kem duong tre hoa va sang da te bao goc JEAN D'ARCEL Renewing Face Cream Stemcell - kem dưỡng trẻ hóa và sáng da (tế bào gốc) 30ml",
    badgeLabel: "Kem dưỡng ẩm",
    imageUrl: "/images/logo_san_pham/sp38.png",
    discountNote: "",
    name: "JEAN D'ARCEL Renewing Face Cream Stemcell - Kem dưỡng trẻ hóa và sáng da (tế bào gốc) 30ml",
    fromPlace: "đức",
    price: "1.280.000",
    oldPrice: "",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/27461419799/",
  },
  {
    id: 39,
    tagId: 8,
    searchTag: "ho tro ngua mun trung ca ngua tham duong da Gel Megaduo AHA & Azelaic acid hỗ trợ ngừa mụn trứng cá, ngừa thâm, dưỡng da (15g)",
    badgeLabel: "Trị mụn",
    imageUrl: "/images/logo_san_pham/sp39.png",
    discountNote: "",
    name: "Gel Megaduo AHA & Azelaic acid hỗ trợ ngừa mụn trứng cá, ngừa thâm, dưỡng da (15g)",
    fromPlace: "việt nam",
    price: "130.000",
    oldPrice: "",
    isBestSeller: false,
    linkShoppe: "https://shopee.vn/product/1270181330/26761435297/",
  },
  {
    id: 40,
    tagId: 8,
    searchTag: "kem lam giam mun JEAN D'ARCEL Blemish Control Kem Làm Giảm Mụn 30ml",
    badgeLabel: "Trị mụn",
    imageUrl: "/images/logo_san_pham/sp40.png",
    discountNote: "",
    name: "JEAN D'ARCEL Blemish Control - Kem Làm Giảm Mụn 30ml",
    fromPlace: "đức",
    price: "489.000",
    oldPrice: "",
    isBestSeller: true,
    linkShoppe: "https://shopee.vn/product/1270181330/26561419369/",
  },
];
