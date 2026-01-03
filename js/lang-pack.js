// FunnyTech21 Multi-Language Pack
// Supported Languages: Korean, English, Japanese, Chinese, German, Spanish, Vietnamese, Thai

const LANG_PACK = {
    // Language names for selector
    langNames: {
        ko: '한국어',
        en: 'English',
        ja: '日本語',
        zh: '中文',
        de: 'Deutsch',
        es: 'Español',
        vi: 'Tiếng Việt',
        th: 'ไทย'
    },

    // Navigation
    nav: {
        faceId: { ko: 'Face ID', en: 'Face ID', ja: 'Face ID', zh: 'Face ID', de: 'Face ID', es: 'Face ID', vi: 'Face ID', th: 'Face ID' },
        products: { ko: '제품 소개', en: 'Products', ja: '製品紹介', zh: '产品介绍', de: 'Produkte', es: 'Productos', vi: 'Sản phẩm', th: 'ผลิตภัณฑ์' },
        technology: { ko: '핵심 기술', en: 'Technology', ja: 'コア技術', zh: '核心技术', de: 'Technologie', es: 'Tecnología', vi: 'Công nghệ', th: 'เทคโนโลยี' },
        performance: { ko: '성능 데이터', en: 'Performance', ja: '性能データ', zh: '性能数据', de: 'Leistung', es: 'Rendimiento', vi: 'Hiệu suất', th: 'ประสิทธิภาพ' },
        applications: { ko: '적용 분야', en: 'Applications', ja: '適用分野', zh: '应用领域', de: 'Anwendungen', es: 'Aplicaciones', vi: 'Ứng dụng', th: 'การใช้งาน' },
        architecture: { ko: '시스템 구조', en: 'Architecture', ja: 'アーキテクチャ', zh: '系统架构', de: 'Architektur', es: 'Arquitectura', vi: 'Kiến trúc', th: 'สถาปัตยกรรม' },
        videos: { ko: '영상 소개', en: 'Videos', ja: '動画紹介', zh: '视频介绍', de: 'Videos', es: 'Videos', vi: 'Video', th: 'วิดีโอ' },
        demo: { ko: '데모 요청', en: 'Demo', ja: 'デモ', zh: '演示', de: 'Demo', es: 'Demo', vi: 'Demo', th: 'สาธิต' },
        contact: { ko: '문의하기', en: 'Contact', ja: 'お問い合わせ', zh: '联系我们', de: 'Kontakt', es: 'Contacto', vi: 'Liên hệ', th: 'ติดต่อ' },
        contactUs: { ko: '기술 문의', en: 'Contact Us', ja: 'お問い合わせ', zh: '技术咨询', de: 'Kontaktieren', es: 'Contáctenos', vi: 'Liên hệ', th: 'ติดต่อเรา' }
    },

    // Hero Section
    hero: {
        badge: {
            ko: '드라이버를 위한 안전 동반자',
            en: 'Safety Companion for Drivers',
            ja: 'ドライバーのための安全パートナー',
            zh: '驾驶员安全伙伴',
            de: 'Sicherheitspartner für Fahrer',
            es: 'Compañero de Seguridad para Conductores',
            vi: 'Đối tác An toàn cho Tài xế',
            th: 'คู่หูความปลอดภัยสำหรับผู้ขับขี่'
        },
        description: {
            ko: '카메라는 더 이상 보는 것에 그치지 않습니다.<br>운전자의 생체 신호를 읽고, 사고 이전의 위험을 예측합니다.',
            en: 'Cameras do more than just see.<br>They read driver vital signs and predict dangers before accidents occur.',
            ja: 'カメラは見るだけではありません。<br>ドライバーのバイタルサインを読み取り、事故前に危険を予測します。',
            zh: '摄像头不仅仅是观看。<br>它们读取驾驶员生命体征，在事故发生前预测危险。',
            de: 'Kameras tun mehr als nur sehen.<br>Sie lesen Vitalzeichen des Fahrers und sagen Gefahren voraus.',
            es: 'Las cámaras hacen más que solo ver.<br>Leen signos vitales del conductor y predicen peligros antes de accidentes.',
            vi: 'Camera không chỉ để nhìn.<br>Chúng đọc dấu hiệu sinh tồn của tài xế và dự đoán nguy hiểm trước khi xảy ra tai nạn.',
            th: 'กล้องทำได้มากกว่าแค่มอง<br>อ่านสัญญาณชีพของผู้ขับขี่และคาดการณ์อันตรายก่อนเกิดอุบัติเหตุ'
        },
        hardwareFree: {
            ko: 'Hardware-Free: 단일 카메라로 구현',
            en: 'Hardware-Free: Single Camera Solution',
            ja: 'ハードウェア不要: 単一カメラソリューション',
            zh: '无需硬件：单摄像头解决方案',
            de: 'Hardware-frei: Einzelkamera-Lösung',
            es: 'Sin Hardware: Solución de Cámara Única',
            vi: 'Không cần phần cứng: Giải pháp Camera đơn',
            th: 'ไม่ต้องใช้ฮาร์ดแวร์: โซลูชันกล้องตัวเดียว'
        },
        euroNcap: {
            ko: 'Euro NCAP 2026 대응',
            en: 'Euro NCAP 2026 Ready',
            ja: 'Euro NCAP 2026対応',
            zh: 'Euro NCAP 2026就绪',
            de: 'Euro NCAP 2026 Bereit',
            es: 'Euro NCAP 2026 Listo',
            vi: 'Sẵn sàng Euro NCAP 2026',
            th: 'พร้อมสำหรับ Euro NCAP 2026'
        },
        requestDemo: {
            ko: '기술 검증 요청 →',
            en: 'Request Demo →',
            ja: 'デモを依頼 →',
            zh: '请求演示 →',
            de: 'Demo anfordern →',
            es: 'Solicitar Demo →',
            vi: 'Yêu cầu Demo →',
            th: 'ขอสาธิต →'
        },
        learnMore: {
            ko: '더 알아보기',
            en: 'Learn More',
            ja: '詳細を見る',
            zh: '了解更多',
            de: 'Mehr erfahren',
            es: 'Saber más',
            vi: 'Tìm hiểu thêm',
            th: 'เรียนรู้เพิ่มเติม'
        }
    },

    // Products Section
    products: {
        sectionTag: { ko: '제품 소개', en: 'Products', ja: '製品紹介', zh: '产品介绍', de: 'Produkte', es: 'Productos', vi: 'Sản phẩm', th: 'ผลิตภัณฑ์' },
        subtitle: {
            ko: '운전 능력 상실을 실시간으로 판별하는 차세대 안전 솔루션',
            en: 'Next-gen safety solution detecting driver impairment in real-time',
            ja: '運転能力喪失をリアルタイムで判別する次世代安全ソリューション',
            zh: '实时检测驾驶能力下降的下一代安全解决方案',
            de: 'Nächste Generation Sicherheitslösung zur Echtzeit-Erkennung von Fahrbeeinträchtigungen',
            es: 'Solución de seguridad de próxima generación que detecta deterioro del conductor en tiempo real',
            vi: 'Giải pháp an toàn thế hệ mới phát hiện suy giảm khả năng lái xe theo thời gian thực',
            th: 'โซลูชันความปลอดภัยรุ่นใหม่ตรวจจับความบกพร่องของผู้ขับขี่แบบเรียลไทม์'
        },
        impairmentTitle: { ko: '운전자 손상 감지', en: 'Driver Impairment Detection', ja: '運転者障害検知', zh: '驾驶员损伤检测', de: 'Fahrer-Beeinträchtigungserkennung', es: 'Detección de Deterioro del Conductor', vi: 'Phát hiện Suy giảm Tài xế', th: 'การตรวจจับความบกพร่องของผู้ขับขี่' },
        impairmentDesc: { ko: '생체 신호 분석으로 음주 상태를 판단할 수 있습니다', en: 'Can determine alcohol impairment status via vital sign analysis', ja: 'バイタルサイン分析でアルコール状態を判断できます', zh: '通过生命体征分析判断酒精状态', de: 'Kann Alkoholbeeinträchtigung durch Vitalzeichenanalyse erkennen', es: 'Puede determinar estado de deterioro por alcohol mediante análisis de signos vitales', vi: 'Có thể xác định tình trạng say rượu qua phân tích dấu hiệu sinh tồn', th: 'สามารถระบุสถานะการมึนเมาจากแอลกอฮอล์ผ่านการวิเคราะห์สัญญาณชีพ' },
        viewPerformance: { ko: '📊 성능보기', en: '📊 View Performance', ja: '📊 性能を見る', zh: '📊 查看性能', de: '📊 Leistung ansehen', es: '📊 Ver Rendimiento', vi: '📊 Xem Hiệu suất', th: '📊 ดูประสิทธิภาพ' },
        drowsinessTitle: { ko: '졸음 감지', en: 'Drowsiness Detection', ja: '居眠り検知', zh: '疲劳检测', de: 'Müdigkeitserkennung', es: 'Detección de Somnolencia', vi: 'Phát hiện Buồn ngủ', th: 'การตรวจจับความง่วง' },
        drowsinessDesc: { ko: '눈 깜빡임, 하품, 머리 움직임 등 다중 지표 분석으로 피로도를 측정합니다', en: 'Measures fatigue through multi-indicator analysis: eye blinks, yawns, head movements', ja: '瞬き、あくび、頭の動きなど多指標分析で疲労度を測定', zh: '通过眨眼、打哈欠、头部运动等多指标分析测量疲劳度', de: 'Misst Müdigkeit durch Multi-Indikator-Analyse: Blinzeln, Gähnen, Kopfbewegungen', es: 'Mide fatiga mediante análisis multi-indicador: parpadeos, bostezos, movimientos de cabeza', vi: 'Đo độ mệt mỏi qua phân tích đa chỉ số: chớp mắt, ngáp, chuyển động đầu', th: 'วัดความเหนื่อยล้าผ่านการวิเคราะห์หลายตัวชี้วัด: กะพริบตา หาว การเคลื่อนไหวศีรษะ' },
        distractionTitle: { ko: '주의 분산 감지', en: 'Distraction Detection', ja: '注意散漫検知', zh: '分心检测', de: 'Ablenkungserkennung', es: 'Detección de Distracción', vi: 'Phát hiện Mất tập trung', th: 'การตรวจจับความเสียสมาธิ' },
        distractionDesc: { ko: '시선 추적 및 머리 방향 분석으로 운전 집중도를 모니터링합니다', en: 'Monitors driving focus through gaze tracking and head direction analysis', ja: '視線追跡と頭の向き分析で運転集中度をモニタリング', zh: '通过视线追踪和头部方向分析监控驾驶专注度', de: 'Überwacht Fahrfokus durch Blickverfolgung und Kopfrichtungsanalyse', es: 'Monitorea enfoque de conducción mediante seguimiento de mirada y análisis de dirección de cabeza', vi: 'Giám sát sự tập trung lái xe qua theo dõi ánh mắt và phân tích hướng đầu', th: 'ตรวจสอบการจดจ่อในการขับขี่ผ่านการติดตามสายตาและการวิเคราะห์ทิศทางศีรษะ' }
    },

    // Demo/PoC Section
    demo: {
        sectionTag: { ko: '데모 & PoC', en: 'Demo & PoC', ja: 'デモ & PoC', zh: '演示 & PoC', de: 'Demo & PoC', es: 'Demo & PoC', vi: 'Demo & PoC', th: 'สาธิต & PoC' },
        title: { ko: '시험판 솔루션', en: 'Trial Solution', ja: 'トライアルソリューション', zh: '试用解决方案', de: 'Testlösung', es: 'Solución de Prueba', vi: 'Giải pháp Dùng thử', th: 'โซลูชันทดลองใช้' },
        subtitle: {
            ko: '데모 및 PoC를 위한 시험판 솔루션을 제공합니다',
            en: 'Trial solution available for Demo and PoC evaluation',
            ja: 'デモとPoC評価用のトライアルソリューションを提供',
            zh: '提供用于演示和PoC评估的试用解决方案',
            de: 'Testlösung für Demo und PoC-Evaluierung verfügbar',
            es: 'Solución de prueba disponible para evaluación de Demo y PoC',
            vi: 'Giải pháp dùng thử có sẵn để đánh giá Demo và PoC',
            th: 'โซลูชันทดลองใช้สำหรับการประเมิน Demo และ PoC'
        },
        platformTitle: { ko: '지원 플랫폼', en: 'Supported Platforms', ja: '対応プラットフォーム', zh: '支持的平台', de: 'Unterstützte Plattformen', es: 'Plataformas Compatibles', vi: 'Nền tảng được Hỗ trợ', th: 'แพลตฟอร์มที่รองรับ' },
        linux: { ko: 'Linux (Ubuntu 20.04+)', en: 'Linux (Ubuntu 20.04+)', ja: 'Linux (Ubuntu 20.04+)', zh: 'Linux (Ubuntu 20.04+)', de: 'Linux (Ubuntu 20.04+)', es: 'Linux (Ubuntu 20.04+)', vi: 'Linux (Ubuntu 20.04+)', th: 'Linux (Ubuntu 20.04+)' },
        windows: { ko: 'Windows 10/11', en: 'Windows 10/11', ja: 'Windows 10/11', zh: 'Windows 10/11', de: 'Windows 10/11', es: 'Windows 10/11', vi: 'Windows 10/11', th: 'Windows 10/11' },
        mac: { ko: 'macOS (Intel/Apple Silicon)', en: 'macOS (Intel/Apple Silicon)', ja: 'macOS (Intel/Apple Silicon)', zh: 'macOS (Intel/Apple Silicon)', de: 'macOS (Intel/Apple Silicon)', es: 'macOS (Intel/Apple Silicon)', vi: 'macOS (Intel/Apple Silicon)', th: 'macOS (Intel/Apple Silicon)' },
        jetson: { ko: 'NVIDIA Jetson (AGX Orin, Orin NX)', en: 'NVIDIA Jetson (AGX Orin, Orin NX)', ja: 'NVIDIA Jetson (AGX Orin, Orin NX)', zh: 'NVIDIA Jetson (AGX Orin, Orin NX)', de: 'NVIDIA Jetson (AGX Orin, Orin NX)', es: 'NVIDIA Jetson (AGX Orin, Orin NX)', vi: 'NVIDIA Jetson (AGX Orin, Orin NX)', th: 'NVIDIA Jetson (AGX Orin, Orin NX)' },
        featuresTitle: { ko: '시험판 특징', en: 'Trial Features', ja: 'トライアル機能', zh: '试用功能', de: 'Testfunktionen', es: 'Características de Prueba', vi: 'Tính năng Dùng thử', th: 'คุณสมบัติการทดลองใช้' },
        feature1: { ko: '전체 기능 30일 무료 체험', en: '30-day free trial with full features', ja: '全機能30日間無料体験', zh: '30天全功能免费试用', de: '30-tägige kostenlose Testversion mit allen Funktionen', es: 'Prueba gratuita de 30 días con todas las funciones', vi: 'Dùng thử miễn phí 30 ngày với đầy đủ tính năng', th: 'ทดลองใช้ฟรี 30 วันพร้อมคุณสมบัติครบถ้วน' },
        feature2: { ko: '기술 지원 및 통합 가이드 제공', en: 'Technical support & integration guide included', ja: '技術サポートと統合ガイド付き', zh: '包含技术支持和集成指南', de: 'Technischer Support & Integrationshandbuch enthalten', es: 'Soporte técnico y guía de integración incluidos', vi: 'Bao gồm hỗ trợ kỹ thuật và hướng dẫn tích hợp', th: 'รวมการสนับสนุนทางเทคนิคและคู่มือการผสานรวม' },
        feature3: { ko: 'REST API & SDK 문서 제공', en: 'REST API & SDK documentation provided', ja: 'REST API & SDKドキュメント提供', zh: '提供REST API和SDK文档', de: 'REST API & SDK Dokumentation bereitgestellt', es: 'Documentación de REST API y SDK proporcionada', vi: 'Cung cấp tài liệu REST API & SDK', th: 'จัดเตรียมเอกสาร REST API & SDK' },
        feature4: { ko: '맞춤형 PoC 환경 구성 지원', en: 'Custom PoC environment setup support', ja: 'カスタムPoC環境構築サポート', zh: '定制PoC环境配置支持', de: 'Unterstützung für kundenspezifische PoC-Umgebungseinrichtung', es: 'Soporte de configuración de entorno PoC personalizado', vi: 'Hỗ trợ thiết lập môi trường PoC tùy chỉnh', th: 'รองรับการตั้งค่าสภาพแวดล้อม PoC แบบกำหนดเอง' },
        requestBtn: { ko: '데모 요청하기', en: 'Request Demo', ja: 'デモを依頼', zh: '请求演示', de: 'Demo anfordern', es: 'Solicitar Demo', vi: 'Yêu cầu Demo', th: 'ขอสาธิต' },
        downloadBtn: { ko: '시험판 다운로드', en: 'Download Trial', ja: 'トライアルダウンロード', zh: '下载试用版', de: 'Testversion herunterladen', es: 'Descargar Prueba', vi: 'Tải bản Dùng thử', th: 'ดาวน์โหลดทดลองใช้' }
    },

    // Contact Section
    contact: {
        title: {
            ko: '우리와 가장 확실한 파트너가 되어 주십시오',
            en: 'Become Our Trusted Partner',
            ja: '私たちの信頼できるパートナーになってください',
            zh: '成为我们值得信赖的合作伙伴',
            de: 'Werden Sie unser vertrauenswürdiger Partner',
            es: 'Conviértase en Nuestro Socio de Confianza',
            vi: 'Trở thành Đối tác Tin cậy của Chúng tôi',
            th: 'เป็นพันธมิตรที่เชื่อถือได้ของเรา'
        },
        subtitle: {
            ko: '기술 검증(PoC) 및 솔루션 도입 문의',
            en: 'Technical Verification (PoC) & Solution Inquiries',
            ja: '技術検証（PoC）およびソリューション導入のお問い合わせ',
            zh: '技术验证（PoC）和解决方案咨询',
            de: 'Technische Verifizierung (PoC) & Lösungsanfragen',
            es: 'Verificación Técnica (PoC) y Consultas de Soluciones',
            vi: 'Xác minh Kỹ thuật (PoC) & Yêu cầu Giải pháp',
            th: 'การตรวจสอบทางเทคนิค (PoC) และการสอบถามโซลูชัน'
        },
        emailInquiry: { ko: '📧 이메일 문의', en: '📧 Email Inquiry', ja: '📧 メールでのお問い合わせ', zh: '📧 邮件咨询', de: '📧 E-Mail-Anfrage', es: '📧 Consulta por Email', vi: '📧 Yêu cầu qua Email', th: '📧 สอบถามทางอีเมล' },
        scheduleMeeting: { ko: '📅 온라인 미팅 예약', en: '📅 Schedule Online Meeting', ja: '📅 オンラインミーティング予約', zh: '📅 预约在线会议', de: '📅 Online-Meeting planen', es: '📅 Programar Reunión Online', vi: '📅 Đặt lịch Họp Online', th: '📅 นัดประชุมออนไลน์' },
        name: { ko: '이름', en: 'Name', ja: '名前', zh: '姓名', de: 'Name', es: 'Nombre', vi: 'Tên', th: 'ชื่อ' },
        company: { ko: '회사명', en: 'Company', ja: '会社名', zh: '公司名称', de: 'Firma', es: 'Empresa', vi: 'Công ty', th: 'บริษัท' },
        email: { ko: '이메일', en: 'Email', ja: 'メール', zh: '邮箱', de: 'E-Mail', es: 'Correo', vi: 'Email', th: 'อีเมล' },
        message: { ko: '문의 내용', en: 'Message', ja: 'メッセージ', zh: '留言', de: 'Nachricht', es: 'Mensaje', vi: 'Tin nhắn', th: 'ข้อความ' },
        sendInquiry: { ko: '문의 이메일 보내기 →', en: 'Send Inquiry →', ja: 'お問い合わせを送信 →', zh: '发送咨询 →', de: 'Anfrage senden →', es: 'Enviar Consulta →', vi: 'Gửi Yêu cầu →', th: 'ส่งคำถาม →' },
        selectTime: { ko: '시간 선택', en: 'Select Time', ja: '時間を選択', zh: '选择时间', de: 'Zeit auswählen', es: 'Seleccionar Hora', vi: 'Chọn Thời gian', th: 'เลือกเวลา' },
        meetingType: { ko: '미팅 방식', en: 'Meeting Type', ja: 'ミーティング方式', zh: '会议方式', de: 'Meeting-Typ', es: 'Tipo de Reunión', vi: 'Loại Cuộc họp', th: 'ประเภทการประชุม' },
        requestMeeting: { ko: '미팅 예약 요청 →', en: 'Request Meeting →', ja: 'ミーティング予約 →', zh: '请求会议 →', de: 'Meeting anfordern →', es: 'Solicitar Reunión →', vi: 'Yêu cầu Cuộc họp →', th: 'ขอนัดประชุม →' },
        selectedSchedule: { ko: '선택된 일정:', en: 'Selected Schedule:', ja: '選択されたスケジュール:', zh: '已选择的日程:', de: 'Ausgewählter Zeitplan:', es: 'Horario Seleccionado:', vi: 'Lịch đã chọn:', th: 'ตารางที่เลือก:' },
        emailSuccess: { ko: '이메일 앱이 열렸습니다. 메일을 보내주세요!', en: 'Email app opened. Please send the email!', ja: 'メールアプリが開きました。メールを送信してください！', zh: '邮件应用已打开。请发送邮件！', de: 'E-Mail-App geöffnet. Bitte senden Sie die E-Mail!', es: '¡App de correo abierta. Por favor envíe el email!', vi: 'Ứng dụng email đã mở. Vui lòng gửi email!', th: 'แอปอีเมลเปิดแล้ว กรุณาส่งอีเมล!' },
        meetingSuccess: { ko: '미팅 예약 요청이 전송되었습니다! 확인 후 연락드리겠습니다.', en: 'Meeting request sent! We will contact you soon.', ja: 'ミーティング予約リクエストが送信されました！確認後ご連絡いたします。', zh: '会议请求已发送！我们将尽快与您联系。', de: 'Meeting-Anfrage gesendet! Wir werden Sie bald kontaktieren.', es: '¡Solicitud de reunión enviada! Le contactaremos pronto.', vi: 'Yêu cầu cuộc họp đã được gửi! Chúng tôi sẽ liên hệ với bạn sớm.', th: 'ส่งคำขอประชุมแล้ว! เราจะติดต่อกลับเร็วๆ นี้' },
        location: { ko: '📍 인천광역시 중구 인하대병원 개방형실험실', en: '📍 Inha University Hospital, Incheon, Korea', ja: '📍 韓国仁川市、仁荷大学病院オープンラボ', zh: '📍 韩国仁川市仁荷大学医院开放实验室', de: '📍 Inha Universitätskrankenhaus, Incheon, Korea', es: '📍 Hospital Universitario Inha, Incheon, Corea', vi: '📍 Bệnh viện Đại học Inha, Incheon, Hàn Quốc', th: '📍 โรงพยาบาลมหาวิทยาลัย Inha, อินชอน, เกาหลี' },
        weekdays: {
            sun: { ko: '일', en: 'Sun', ja: '日', zh: '日', de: 'So', es: 'Dom', vi: 'CN', th: 'อา' },
            mon: { ko: '월', en: 'Mon', ja: '月', zh: '一', de: 'Mo', es: 'Lun', vi: 'T2', th: 'จ' },
            tue: { ko: '화', en: 'Tue', ja: '火', zh: '二', de: 'Di', es: 'Mar', vi: 'T3', th: 'อ' },
            wed: { ko: '수', en: 'Wed', ja: '水', zh: '三', de: 'Mi', es: 'Mié', vi: 'T4', th: 'พ' },
            thu: { ko: '목', en: 'Thu', ja: '木', zh: '四', de: 'Do', es: 'Jue', vi: 'T5', th: 'พฤ' },
            fri: { ko: '금', en: 'Fri', ja: '金', zh: '五', de: 'Fr', es: 'Vie', vi: 'T6', th: 'ศ' },
            sat: { ko: '토', en: 'Sat', ja: '土', zh: '六', de: 'Sa', es: 'Sáb', vi: 'T7', th: 'ส' }
        }
    },

    // Footer
    footer: {
        copyright: {
            ko: '© 2025 (주)퍼니테크21. All rights reserved.',
            en: '© 2025 FunnyTech21 Co., Ltd. All rights reserved.',
            ja: '© 2025 FunnyTech21 Co., Ltd. All rights reserved.',
            zh: '© 2025 FunnyTech21 Co., Ltd. 版权所有。',
            de: '© 2025 FunnyTech21 Co., Ltd. Alle Rechte vorbehalten.',
            es: '© 2025 FunnyTech21 Co., Ltd. Todos los derechos reservados.',
            vi: '© 2025 FunnyTech21 Co., Ltd. Đã đăng ký bản quyền.',
            th: '© 2025 FunnyTech21 Co., Ltd. สงวนลิขสิทธิ์'
        }
    }
};

// Current language state
let currentLang = 'en';

// Initialize language from browser or localStorage
function initLanguage() {
    const savedLang = localStorage.getItem('funnytech_lang');
    if (savedLang && LANG_PACK.langNames[savedLang]) {
        currentLang = savedLang;
    } else {
        // Detect browser language
        const browserLang = navigator.language.substring(0, 2);
        if (LANG_PACK.langNames[browserLang]) {
            currentLang = browserLang;
        }
    }
    applyLanguage(currentLang);
    updateLangSelector();
}

// Apply language to all elements
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('funnytech_lang', lang);

    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const keys = el.getAttribute('data-lang-key').split('.');
        let text = LANG_PACK;
        for (const key of keys) {
            text = text[key];
            if (!text) break;
        }
        if (text && text[lang]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text[lang];
            } else {
                el.innerHTML = text[lang];
            }
        }
    });

    // Legacy support for data-ko/data-en attributes
    document.querySelectorAll('[data-ko][data-en]').forEach(el => {
        const text = el.getAttribute('data-' + lang) || el.getAttribute('data-en');
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.innerHTML = text;
            }
        }
    });

    updateLangSelector();
}

// Update language selector display
function updateLangSelector() {
    const selector = document.getElementById('langSelector');
    if (selector) {
        const currentName = LANG_PACK.langNames[currentLang];
        selector.querySelector('.lang-current').textContent = currentName;
    }

    // Update nav toggle button if exists
    const navToggle = document.getElementById('navLangToggle');
    if (navToggle) {
        navToggle.textContent = LANG_PACK.langNames[currentLang];
    }
}

// Change language
function changeLanguage(lang) {
    if (LANG_PACK.langNames[lang]) {
        applyLanguage(lang);
        // Close dropdown if open
        const dropdown = document.querySelector('.lang-dropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    }
}

// Toggle language dropdown
function toggleLangDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.lang-selector')) {
        const dropdown = document.querySelector('.lang-dropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initLanguage);
