import popularSpecialties from './ru/popularSpecialties.js'
import trainingProfiles from './ru/trainingProfiles.js'
import requalificationSpecialties from "./ru/requalificationSpecialties.js"
import monthes from './ru/monthes.js'
import form from './ru/form.js'
import documents from './ru/documents.js'
import questions from './ru/questions.js'

export default {
  "pages": {
    "home": {
      "home-header": {
        "title": "Это выбор лучших",
        "button": "Подача заявления онлайн"
      },
      "bseu-section": {
        "legend": "Белорусский государственный экономический университет -",
        "description_p1": "Является ведущим высшим учебным заведением страны экономического профиля,<br /> находится в постоянном развитии и поиске эффективных форм и методов обучения.",
        "description_p2": "В университете осуществляется подготовка специалистов широкого спектра специальностей в области экономики, управления, права, коммуникаций.",
        "description_p3": "Инфраструктуру учебно-научного комплекса БГЭУ составляют 11 факультетов, 49 кафедр, Институт повышения квалификации и переподготовки экономических кадров, Институт магистерской подготовки, филиалы: Минский торговый колледж, Минский финансово-экономический колледж, Новогрудский торгово-экономический колледж; библиотека, студенческий городок, спортивный и торговый комплексы.",
        "details": "Подробнее об университете"
      },
      "questions-section": {
        "legend": "Часто задаваемые вопросы",
        "show_questions": "Посмотреть все вопросы >",
        "hide_questions": "Скрыть часть вопросов <"
      },
      "specialties-section": {
        "legend": "Популярные специальности",
        specialties: popularSpecialties
      },
      "select-admission": {
        "legend": "Как поступить"
      },
      "faq-component": {
        questions: questions,
        documents: documents,
        "download": "Скачать"
      }
    },
    "first-higher": {
      "sidebar": {
        "bseu-education": "Высшее образование в БГЭУ",
        "specialties-list": "Список специальностей",
        "admission-documents": "Документы для поступления",
        "local-documents": "Документы по приезду",
        "admission": "Как поступить"
      },
      "bseu-section": {
        "legend": "Высшее образование в БГЭУ",
        "description_p1": "Для иностранных граждан решение поступить в БГЭУ в любом случае выигрышное. Данный ВУЗ является «законодателем мод» в сфере высшего экономического образования Беларуси. Осваиваемые здесь специальности актуальны, а выпускники всегда востребованы в своих странах. Белорусское экономическое образование, полученное в рамках первой ступени, находится на хорошем счету во многих странах, а сам университет постоянно занимает уверенные позиции в профильных рейтингах.",
        "description_p2": "Иностранные граждане получают высшее образование в БГЭУ на платной основе. Приемная кампания проходит в период с августа по октябрь. После успешного прохождения вступительных собеседований иностранные студенты вливаются в группы с белорусскими студентами и обучаются с ними на равных условиях. При необходимости до зачисления на учебные факультеты возможна адаптация в рамках подготовительного отделения (изучение русского, белорусского языков, подготовка к вступительным испытаниям).",
        "description_p3": "Желаете стать успешным маркетологом, банкиром, бухгалтером, первоклассным тур оператором, менеджером или юристом, освоить международную логистику или бизнес-администрирование? Доступен широкий выбор специальностей БГЭУ, полный перечень которых представлен далее на этой странице. Выбирайте подходящее направление!"
      },
      "specialties-data-section": {
        "legend": "Наши специальности/специализации",
        "ochno": "очно",
        "zaochno": "заочно"
      },
      "how-to-enter": {
        "legend": "Как поступить"
      }
    },
    "second-higher": {
      "sidebar": {
        "bseu-education": "Второе высшее в БГЭУ",
        "specialties-list": "Список специальностей",
        "admission-documents": "Документы для поступления",
        "local-documents": "Документы по приезду",
        "admission": "Как поступить"
      },
      "bseu-section": {
        "legend": "Второе высшее в БГЭУ",
        "description_p1": "Второе высшее образование в БГЭУ – это отличный вариант для получения углубленных знаний в определенной области либо освоения принципиально новой специальности. В современном мире важно оказаться подготовленным к новым вызовам и решению самых сложных задач. Так, будущему директору компании нужны знания не только управленческого, но и экономического порядка. Именно поэтому получение иностранными гражданами в 2019 году второго высшего образования в БГЭУ становится все более популярным направлением.",
        "description_p2": "Повторное поступление в ВУЗ открывает для обучающегося новые возможности. Некоторые в более зрелом возрасте понимают истинную ценность новых знаний и навыков, другие решают изменить свою жизнь через освоение новой для себя профессии. Вместе с тем, многие ценят белорусское высшее образование и для получения 2 специальности выбирают БГЭУ – ведущий экономический университет Беларуси.",
        "description_p3": "Ниже на странице представлены специальности в рамках второго высшего образования в БГЭУ. При возникновении каких-либо сложностей с выбором мы всегда поможем определиться!"
      },
      "specialties-data-section": {
        "legend": "Наши специальности/специализации",
        "zaochno": "Заочно",
        "remote": "Дистанционно"
      },
      "how-to-enter": {
        "legend": "Как поступить"
      }
    },
    "magistracy": {
      "sidebar": {
        "bseu-education": "Магистратура в БГЭУ",
        "specialties-list": "Список специальностей",
        "admission-documents": "Документы для поступления",
        "local-documents": "Документы по приезду",
        "admission": "Как поступить"
      },
      "bseu-section": {
        "legend": "Магистратура в БГЭУ",
        "description_p1": "Магистратура БГЭУ – место, которое благодаря должному техническому оснащению, высокой квалификации преподавателей и профессионально организованному учебному процессу позволяет обрести новые знания на качественно ином уровне. Степень магистра становится все более популярной и востребованной. Выпускник с подобным дипломом востребован компаниями государственного и частного сектора.",
        "description_p2": "Обучение на второй ступени высшего образования в БГЭУ открыто для всех желающих, в том числе для иностранных граждан. Университет предлагает более 40 магистерских программ, часть из которых преподаётся на иностранном (английском) языке. Поступающий может выбрать научно-ориентированное либо практико-ориентированное направление. По окончании магистратуры БГЭУ иностранцам выдается диплом государственного образца Республики Беларусь.",
        "description_p3": "Вступительные испытания проходят в устном порядке. Срок подачи документов для иностранных граждан – ежегодно с 27 июня по 30 октября. Для поступления на избранную специальность магистратуры БГЭУ необходимо получить высшее образование первой ступени и иметь соответствующий подтверждающий документ (диплом)."
      },
      "specialties-data-section": {
        "legend": "Наши специальности/программы",
        "zaochno": "Заочно",
        "ochno": "Очно"
      },
      "how-to-enter": {
        "legend": "Как поступить"
      }
    },
    "training-and-courses": {
      "sidebar": {
        "training": "Подготовительное отделение",
        "courses-russian": "Курсы русского языка"
      },
      "training-section": {
        "legend": "Подготовительное отделение ",
        "dot_text_1": "• Правоведение;",
        "dot_text_2": "• Экономический;",
        "dot_text_3": "• Иностранный язык;",
        "dot_text_4": "• Медицинский.",
        "description_p1": "Преподавание в БГЭУ ведется на русском языке, поэтому абитуриентам, которые владеют им в недостаточной мере, потребуется должным образом подготовиться к поступлению в ВУЗ. Это можно сделать, поступив на подготовительное отделение.",
        "description_p2": "Предусмотрено четыре программы, в рамках которых ведется адаптация иностранных граждан. Они зависят от предполагаемой специальности, которая в последующем будет осваиваться студентом:",
        "description_p3": "Подготовительное отделение для иностранцев – это отличный шанс повысить навыки владения не только русским языком, но и основами будущей специальности. Занятия проводятся в небольших группах по 8-10 человек. В ходе занятий применяются авторские методики, используются специальные учебники. Классы оснащены компьютерным и прочим оборудованием для просмотра видеоматериалов. При необходимости обучающимся на подготовительном отделении предоставляется платное место в студенческом общежитии (40-50 долларов США в месяц – дополнительно к стоимости за обучение). Занятия проводят опытные педагоги со стажем, в совершенстве владеющие преподаваемыми учебными дисциплинами.",
        "description_p4": "По окончании обучение все успешно завершившие подготовительное отделение слушатели получают свидетельство государственного образца, которое позволяет продолжить обучение в БГЭУ без вступительных экзаменов (дневное отделение, магистратура или аспирантура).",
        "icon-1": "Поступай без экзаменов *",
        "icon-2": "Группы по 8 - 10 человек",
        "icon-3": "Срок обучения 10 месяцев",
        "icon-4": "Общежитие 40-50$/ месяц",
        "additionally": "*  При успешном окончании подготовительного отделения и наличии документа об образовании необходимого уровня       иностранный гражданин получает свидетельство государственного образца, которое дает ему право продолжить обучение в    университете без вступительных испытаний в качестве студента, магистранта, аспиранта.",
      },
      "training-cost-data": {
        "legend": "Стоимость обучения (2018-2019)",
        "form-text": "Форма оплаты – поэтапно в размере 50 % стоимости обучения:",
        "stage-1": "1 этап – до 1 октября,",
        "stage-2": "2 этап – с 1 февраля до 1 марта.",
        "training-profiles": trainingProfiles
      },
      "how-to-enter": {
        "legend": "Как поступить"
      },
      "courses-section": {
        "legend": "Курсы русского языка",
        "description_p1": "Освоение специальностей первой ступени высшего образования в Белорусском государственном экономическом университете осуществляется на русском языке. Поэтому иностранным гражданам, не владеющим русским языком, предлагаются курсы русского языка. Занятия проводят опытнейшие педагоги, успешно обучившие множество будущих студентов.",
        "description_p2": "В зависимости от навыков владения русским языком предусмотрено несколько уровней обучения: от начального до продвинутого. Формирование учебных групп курсов русского языка в БГЭУ проводится по мере поступления заявок от абитуриентов. Максимальное количество обучающихся в группе - 8 человек. Занятия проводятся не реже пяти раз в неделю. Такая интенсивность предполагает быстрое и качественное освоение нового и весьма сложного для иностранных обучающихся языка. При необходимости в студенческом общежитии на время обучения может быть выделено платное место (40-50 долларов США в месяц).",
        "description_p3": "Стоимость обучения на курсах русского языка зависит от размера сформированной группы, интенсивности занятий и конкретной программы. Занятия базируются на авторских методиках, эффективность которых неоднократно успешно апробирована. Важной особенностью курса является знакомство с русской и белорусской культурами и национальными традициями белорусского народа. Организуются экскурсии по знаковым местам, посещение музеев, театров и историко-культурных мест."
      },
      "courses-data-section": {
        "legend": "Стоимость обучения (2018-2019)",
        "text": "Зависит от продолжительности обучения и колличесва человек в группе. Цена указана за ЦЕЛЫЙ курс.",
        "courses-price-table": {
          "one-month": "1 месяц (96 часов)",
          "two-months": "2 месяца (192 часа)",
          "three-months": "3 месяца (288 часов)",
          "four-months": "4 месяца (288 часов)",
          "five-months": "5 месяцев (480 часов)",
          "six-months": "6 месяцев (576 часов)",
          "human": "чел"
        }
      }
    },
    "about-university": {
      "sidebar": {
        "bseu-section": "БГЭУ",
        "hostel-section": "Общежитие",
        "sport-center-section": "Cпорткомплекс",
        "student-life-section": "Студенческая жизнь"
      },
      "bseu-section": {
        "legend": "Белорусский государственный экономический университет",
        "description_p1": "Для иностранных граждан решение поступить в БГЭУ в любом случае выигрышное. Данный ВУЗ является «законодателем мод» в сфере высшего экономического образования Беларуси. Осваиваемые здесь специальности актуальны, а выпускники всегда востребованы в своих странах. Белорусское экономическое образование, полученное в рамках первой ступени, находится на хорошем счету во многих странах, а сам университет постоянно занимает уверенные позиции в профильных рейтингах.",
        "description_p2": "Иностранные граждане получают высшее образование в БГЭУ на платной основе. Приемная кампания проходит в период с августа по октябрь. После успешного прохождения вступительных собеседований иностранные студенты вливаются в группы с белорусскими студентами и обучаются с ними на равных условиях. При необходимости до зачисления на учебные факультеты возможна адаптация в рамках подготовительного отделения (изучение русского, белорусского языков, подготовка к вступительным испытаниям).",
        "description_p3": "Желаете стать успешным маркетологом, банкиром, бухгалтером, первоклассным тур оператором, менеджером или юристом, освоить международную логистику или бизнес-администрирование? Доступен широкий выбор специальностей БГЭУ, полный перечень которых представлен далее на этой странице. Выбирайте подходящее направление!"
      },
      "hostel-section": {
        "legend": "Общежитие",
        "description_p1": "Студенческий городок объединяет 8 общежитий, из которых одно благоустроенное здание занимают иностранные студенты, аспиранты, слушатели подготовительного отделения и курсов русского языка. Это общежитие находится в 5 минутах ходьбы от учебных корпусов университета.",
        "description_p2": "В студенческом городке университета работает 31 спортивная секция по атлетике, ОФП, грации, мини-футболу, йоге, бильярду, настольному теннису, дартсу, борьбе. В секциях занимается более 600 человек.",
        "description_p3": "Современные и комфортные условия проживания подтверждают неоднократные победы общежитий студгородка в районных и городских смотрах-конкурсах на «Лучшее общежитие»."
      },
      "sport-center-section": {
        "legend": "Спорткомплекс",
        "dot_text_1": "• быстро трансформируемый зал для игровых видов спорта (волейбол, баскетбол);",
        "dot_text_2": "• тренажерный зал с новейшим оборудованием;",
        "dot_text_3": "• зал аэробики с необходимым спортивным инвентарем и приспособлениями;",
        "dot_text_4": "• плавательный бассейн, состоящий из 4-х дорожек (25 м. х 11 м., мелкая часть – 180 см., глубокая часть – 220 см.).",
        "description_p1": "Спортивный комплекс БГЭУ имеет современную спортивную базу, которая включает:",
        "description_p2": "В штате спорткомплекса имеются опытные медицинские работники и инструкторы-методисты, которые во время занятий обеспечивают безопасные условия посетителям и предоставляют необходимую консультацию при проведении групповых и индивидуальных занятий."
      },
      "student-life-section": {
        "legend": "Студенческая жизнь",
        "description_p1": "Студенческий клуб БГЭУ – это сплоченный коллектив талантливых сотрудников и одарённых студентов. Основная задача клуба - развитие художественного творчества студентов, поддержка культурных традиций разных народов и создание атмосферы добра и созидания.",
        "description_p2": "Художественные коллективы студенческого клуба участвуют и становятся призерами многочисленных фестивалей народного творчества республиканского и международного уровней.",
        "description_p3": "Кроме того, коллективы художественной самодеятельности принимают участие в шефской помощи и благотворительных концертах, спектаклях, районных, городских, республиканских культурно-массовых мероприятиях.",
        "description_p4": "При активном содействии и участии работников студенческого клуба в университете активно развиваются творческие студенческие проекты: конкурс «Студент года», фестиваль на лучшую тематическую программу «Осенний марафон», конкурс «Виват, первокурсник!», конкурс грации и артистического мастерства «Мисс БГЭУ», фестиваль художественного творчества «Студенческая весна БГЭУ»."
      }
    },
    "bseu-application": {
      "application-header": {
        "title": "Подача онлайн заявления",
        "text": "Инфраструктуру учебно-научного комплекса БГЭУ составляют 11 факультетов, 49 кафедр, Институт повышения квалификации и переподготовки экономических кадров, Институт магистерской подготовки, филиалы: Минский торговый колледж, Минский финансово-экономический колледж, Новогрудский торгово-экономический колледж; библиотека, студенческий городок, спортивный и торговый комплексы.",
        "warning": "Обращаем Ваше внимание, что все поля обязательны для заполнения"
      }
    },
    "requalification": {
      "sidebar": {
        "requalification": "Переподготовка",
        "refresher-training": "Повышение квалификации",
        "internship": "Стажировка"
      },
      "section-requalification": {
        "legend": "Переподготовка",
        "description_p1": "Основной целью переподготовки является освоение лицами, имеющими высшее образование, новых востребованных и перспективных специальностей, а также более углубленных практико-ориентированных, знаний. Благодаря новой присвоенной квалификации выпускник факультета может претендовать на высокооплачиваемую должность. Отличный вариант для собственного развития и инвестиции средств с целью обретения новых навыков и знаний.",
        "description_p2": "Иностранные граждане, желающие пройти переподготовку в БГЭУ, должны к моменту зачисления иметь высшее образование первой ступени и подтверждающий документ (диплом). Программа в основном рассчитана на лиц, желающих стать более универсальным специалистом, способным принимать взвешенные и эффективные управленческие решения.",
        "description_p3": "Иностранным гражданам, успешно завершившим курс переподготовки в БГЭУ, выдается диплом международного образца на английском языке. Длительность программы – 18-24 месяца в зависимости от избранной специальности (4 сессии). Форма обучения заочная. Стоимость обучения на факультете переподготовки составляет 1500-1700 долларов США за весь курс. Оплата проводится в пять этапов. Полный перечень специальностей и перечень необходимых для поступления документов можно изучить в тематическом разделе сайта университета.",
        "icon-1": "На базе высшего образования",
        "icon-2": "Диплом международного образца",
        "icon-3": "Срок обучения 18 - 24 месяца",
        "icon-4": "Заочная форма обучения"
      },
      "requalification-specialties-data": {
        "legend": "Наши специальности",
        "specialties": requalificationSpecialties
      },
      "section-refresher-training": {
        "legend": "Повышение квалификации",
        "dot_text_1": "• программы повышения квалификации;",
        "dot_text_2": "• обучающие курсы;",
        "dot_text_3": "• семинары, тенинги, мастер-классы;",
        "dot_text_4": "• стажировки.",
        "description_p1": "Институт повышения квалификации БГЭУ – структурное подразделение университета, осуществляющее дополнительное обучение лиц, владеющих высшим образованием, по экономическому, управленческому, финансовому и юридическому профилю. Набор в учебные группы проводится как для работников, занимающих руководящие должности, так и для выпускников, не имеющих достаточного опыта и желающих в короткий промежуток времени обрести новые навыки и знания.",
        "description_p2": "Программы повышение квалификации БГЭУ открыты для всех желающих, в том числе для иностранных граждан. Всего предусмотрено четыре направления:",
        "description_p3": "Комплексные курсы повышения квалификации БГЭУ – это отличная возможность за короткий срок (от 1 недели и выше) существенно углубить свои знания в определенном направлении. К числу наиболее востребованных относятся: международный маркетинг, бизнес-планирование и реализация инвестиционных проектов, правила ВТО и меры регулирования международной торговли, а также многие иные перспективные курсы. Занятия проводят опытные и квалифицированные преподаватели. Форма обучения – очная. При наличии мест иностранным слушателям предлагается место для проживания в студенческом общежитии (за дополнительную плату к стоимости обучения)."
      },
      "section-internship":{
        "legend": "Стажировка",
        "dot_text_1": "• для магистрантов (стоимость от 150 долларов США);",
        "dot_text_2": "• для преподавателей (стоимость от 250 долларов США).",
        "description_p1": "Программа обмена опытом и стажировок БГЭУ проводится для иностранных граждан на ежегодной основе. Ее цель – получение участниками нового опыта и апробация собственных знаний, умений и навыков. Минимальный срок стажировки составляет 1 неделю (конкретный период определяется индивидуально с учетом персональных пожеланий участника программы и направляющей организации). Рабочими языками являются русский, белорусский и английский.",
        "description_p2": "В БГЭУ действует два направления стажировок:",
        "description_p3": "В цену не входит проезд, проживание и питание. Иностранным гражданам на время пребывания в Беларуси предоставляется место в студенческом общежитии (дополнительно оплачиваемое, стоимости от 15 долларов США в неделю). Программа стажировки составляется индивидуально с учетом специализации, квалификации и персональных интересов стажера. Подготовка документов и организация визита осуществляется не позднее, чем за 30 дней до предполагаемой даты визита. По завершении стажировки выдается свидетельство на одном из рабочих языков.",
      }
    }
  },
  "components": {
    "navbar": {
      "magistracy": "Магистратура",
      "about-university": "Об университете",
      "requalification": "Переподготовка",
      "second-higher": "Второе высшее",
      "first-higher": "Первое высшее",
      "prepare-courses": "Подготовка и курсы",
      "documents-button": "Подача заявления"
    },
    "main-footer": {
      "link_1": "Главная",
      "link_2": "Об университете",
      "link_3": "Подача заявления онлайн",
      "development": "Разработка сайта, продвижение и коммуникации - ООО “Акториус”"
    },
    "specialty-modal": {
      "term_text_1": "Срок обучения",
      "term_text_2": "(кол-во лет)",
      "price": "Стоимость",
      "price_in_year": "в год",
      "education_form_text": "Обучение",
      "description_title": "Чему вы научитесь",
      "qualification_title": "Кем вы станете",
    },
    "documents-list": {
      "admission-documents": {
        "legend": "Документы, необходимые для поступления",
        "visa": "требуется виза",
        "without-visa": "виза не нужна",
        "description-p1": "Документы необходимо выслать в течение июля-сентября.",
        "description-p2": "Подавайте документы онлайн и после их рассмотрения<br />мы сообщим Вам, когда сможем выслать официальное приглашение!",
        "description-p2-no-visa": "Подавайте документы онлайн и после их рассмотрения<br />мы свяжемся с вами.",
        "online-application": "Онлайн-заявление",
        "application-details": ", в котором обязательно указываете:",
        "application-document-1": "факультет",
        "application-document-2": "специальность",
        "application-document-3": "форма обучения (очно, заочно)",
        "application-document-4": "полный почтовый адрес",
        "application-document-5": "адрес электронной почты или номер факса",
        "passport-copy": "Копии страниц паспорта",
        "passport-info": "со следующей личной информацией:",
        "passport-fullname": "полное имя латинскими буквами",
        "passport-number": "номер паспорта",
        "passport-term": "срок действия паспорта",
        "passport-country": "страна выдавшая документ",
        "passport-translate": "нотариально заверенный  перевод на русский язык копий страниц",
        "education-documents-copy": "Копии документов об образовании",
        "education-documents-info": "(полном среднем, высшем)",
        "education-documents-translate": "нотариально заверенный  перевод копий на русский язык"
      },
      "arriving-documents": {
        "legend": "Документы необходимые по приезду",
        "original-invitation": "Оригинал приглашения",
        "original-education-document": "Оригинал документа об образовании",
        "original-education-document-translate": "нотариально заверенный перевод на русский язык с указанием изученных предметов и полученных по ним на экзаменах отметок (баллов)",
        "original-birth-certificate": "Оригинал свидетельства о рождении",
        "original-birth-certificate-copy": "нотариально заверенная копия",
        "medical-certificate": "Медицинский сертификат о состоянии здоровья",
        "medical-certificate-vich": "отсутствие заболеваний ВИЧ, туберкулеза, гепатита",
        "medical-certificate-ebola": "отсутствие вируса Эбола (для африканских абитуриентов)",
        "medical-certificate-climat": "возможность проживания в климатических условиях Республики Беларусь",
        "medical-certificate-translate": "нотариально заверенный перевод сертификата на русский язык",
        "passport-study-visa": "Паспорт с учебной визой на въезд в РБ",
        "fotos": "10 фотографий (3х4см)"
      },
    },
    "visa-admission-scheme": {
      "first-step": "Оставьте заявку на сайте и мы свяжемся с вами",
      "second-step": "Высылайте нам копии необходимых документов",
      "third-step": "Мы готовим приглашение и отправляем в посольство",
      "fourth-step": "Вы получаете визу и покупаете билеты!",
      "details": "* сообщите нам за 3 дня дату прилета и мы, при необходимости, встретим вас в аэропорту"
    },
    "no-visa-admission-scheme": {
      "first-step": "Оставьте заявку на сайте и мы свяжемся с вами",
      "second-step": "Высылайте нам копии необходимых документов",
      "third-step": "Покупаете билеты!",
      "details": "* сообщите нам за 3 дня дату прилета и мы, при необходимости, встретим вас в аэропорту"
    },
    "date-picker": {
      "monthes": monthes,
      "day": "День",
      "month": "Месяц",
      "year": "Год"
    },
    "countries-select": {
      "placeholder": "Выберите страну"
    },
    "phone-input": {
      "placeholder": "Введите номер"
    },
    "form": form,
    "application_button": "Подача заявления онлайн"
  },
  "educationForm": {
    "ochno": "Очно",
    "zaochno": "Заочно",
    "remote": "Дистанционно"
  },
  "educationProgram": {
    "first": "Первое высшее",
    "second": "Второе высшее",
    "magistracy": "Магистратура",
    "retraining": "Переподготовка"
  },
  "visaMode": {
    "with-visa": "ТРЕБУЕТСЯ ВИЗА",
    "visa-free": "ВИЗА НЕ НУЖНА"
  }
}
