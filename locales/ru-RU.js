import popularSpecialties from './ru/popularSpecialties.js'
import trainingProfiles from './ru/trainingProfiles.js'
import monthes from './ru/monthes.js'
import form from './ru/form.js'
import documents from './ru/documents.js'

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
      },
      "specialties-section": {
        "legend": "Популярные специальности",
        specialties: popularSpecialties
      },
      "select-admission": {
        "legend": "Как поступить"
      },
      "faq-component": {
        questions: [
          {
            title: "БГЭУ – что это за университет?",
            description: "Белорусский государственный экономический университет (БГЭУ) – это ведущий научно-практический-центр в стране. Здесь ежегодно обучаются тысячи студентов, магистрантов и аспирантов (в том числе из-за рубежа). Все они успешно осваивают современные специальности. По окончании ВУЗа можно стать востребованным профессионалом как в Беларуси, так и своей стране по возвращении. Диплом о высшем образовании БГЭУ признается во многих странах по всему миру. Образовательный процесс интересный и содержательный. ",
            active: false
          },
          {
            title: "Какие документы нужны иностранцу для поступления?",
            description: "Иностранные граждане, поступающие в БГЭУ, предоставляют документы в два этапа: до приезда, по приезду. В первом случае необходимо заполнение онлайн-заявления, отправка по e-mail копий страниц паспорта и документов о полном начальном и/или среднем образовании. По прибытии в Беларусь потребуется паспорт с действующей учебной визой, оригинал приглашения, оригинал документа о полном о полном начальном и/или среднем образовании, оригинал свидетельства о рождении, медицинский сертификат о состоянии здоровья, 10 фотографий (формат 3х4 см).",
            active: false
          },
          {
            title: "Как проходит поступление и зачисление в студенты?",
            description: "Правила поступления в БГЭУ в 2018 году указаны на официальном сайте университете. Первое, что определяет приемная комиссия – уровень владения иностранным гражданином одним из государственных языков Республики Беларусь: русский или белорусский. Это важный момент, поскольку обучение происходит только на государственных языках (на английском обучение не ведется). По результатам собеседования и изучения предоставленных приемной комиссии документов принимается решение о зачислении в студенты.",
            active: false
          },
          {
            title: "Можно ли подготовиться к поступлению в БГЭУ?",
            description: "В случае, если уровень владения русским или белорусским языком окажется недостаточным для освоения содержания учебной программы, приемная комиссия может предложить поступить на специальный подготовительный факультет (подготовительное отделение). Все вопросы поступления можно уточнить у наших специалистов.",
            active: false
          },
          {
            title: "Какие специальности наиболее перспективные?",
            description: "Каждая из содержащихся в списке специальностей по-своему перспективная и востребованная. Вы можете стать специалистом в области управления внешнеэкономической деятельности, международного маркетинга, логистики, рекламной деятельности, бизнес-администрирования, международных инвестиций, туристической индустрии и иных направлениях. В зависимости от ваших предпочтений поможем определиться с наиболее подходящей специальностью.",
            active: false
          },
          {
            title: "Как организованы проживание и досуг?",
            description: "В материальную базу БГЭУ входит общежитие, специально предназначенное для иностранных граждан. Все комнаты оснащены необходимыми удобствами. Во всех учебных корпусах есть недорогие и уютные столовые и буфеты. Проводятся культурные и спортивные мероприятия. Другие студенты и преподаватели помогают освоиться иностранцам для максимально комфортного проживания в Минске во время учебы. Со своей стороны, мы помогаем решить все организационные и бытовые вопросы, всегда оставаясь на связи.",
            active: false
          }
        ],
        documents: documents
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
        "description_p1": "Решение – поступить в БГЭУ для иностранных граждан в любом случае выигрышное. Данный ВУЗ является ведущим научно-практическим центром Беларуси. Осваиваемые здесь специальности являются актуальными, а подготавливаемые специалисты всегда востребованы в своих странах. Белорусское экономическое образование, полученное в рамках первой ступени, находится на хорошем счету во многих зарубежных странах, а сам университет постоянно занимает уверенные позиции в профильных рейтингах.",
        "description_p2": "Иностранные граждане получают высшее образование в БГЭУ на платной основе. Приемная кампания длится с 30 августа до 15 октября. Наравне с остальными студентами сформированные учебные группы после успешного прохождения вступительных экзаменов приступают к занятиям. При необходимости перед непосредственным изучением экономики в БГЭУ возможна адаптация в рамках подготовительного факультета (изучение русского, белорусского языков, подготовка к вступительным экзаменам).",
        "description_p3": "Желаете стать успешным маркетологом, освоить международную логистику или бизнес-администрирование? Доступен широкий выбор специальностей БГЭУ, полный перечень которых представлен далее на этой странице. Выбирайте подходящее направление!"
      },
      "specialties-data-section": {
        "legend": "Наши специальности",
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
        "description_p1": "Второе высшее образование в БГЭУ – это отличный вариант для обретения углубленных знаний в определенной области либо освоении принципиально новой специальности. В современном, активно изменяющемся мире, важно оказаться подготовленным к новым вызовам и решению самых сложных задач. Так, будущему директору компании окажутся важны знания не только управленческого, но и экономического порядка. Во многом поэтому получение иностранными гражданами в 2018 году второго высшего образования в БГЭУ стало как никогда ранее популярным направлением",
        "description_p2": "Повторное поступление в ВУЗ открывает для обучающегося новые возможности. Некоторые в более зрелом возрасте понимают истинную ценность новых знаний и навыков, другие решают изменить свою жизнь в освоении новой для себя профессии. Вместе с тем, многие ценят белорусское высшее образование и для 2 специальности выбирают БГЭУ – ведущий экономический научно-практический центр.",
        "description_p3": "Ниже на странице представлены специальности в рамках второго высшего образования в БГЭУ. При возникновении каких-либо сложностей с выбором мы всегда поможем определиться!"
      },
      "specialties-data-section": {
        "legend": "Наши специальности",
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
        "description_p1": "Магистратура БГЭУ – место, которое благодаря должному техническому оснащению, высокой квалификации преподавателей и профессионально организованному учебному процессу позволяет обрести принципиально новые знания на качественно ином уровне. Степень магистра становится все более популярной и востребованной. Выпускник с подобным дипломом востребован компаниями государственного и частного сектора.",
        "description_p2": "Обучение на второй ступени высшего образования в БГЭУ открыто для всех желающих. Втом числе для иностранных граждан. Всего предусмотрено 42 программы, часть из которых предлагается на иностранном (английском) языке. Поступающий может выбрать научно-ориентированное либо практико-ориентированное направление. По окончании магистратуры БГЭУ иностранцам выдается диплом государственного образца Республики Беларусь.",
        "description_p3": "Вступительные испытания (экзамены) проходят в устном порядке. Срок подачи документов для иностранных граждан – ежегодно с 27 июня по 30 октября. Для поступления на избранную специальность магистратуры БГЭУ к этому моменту необходимо получить высшее образование первой ступени и иметь соответствующий подтверждающий документ (диплом). Гражданам Узбекистана потребуется прохождение процедуры признания диплома в Отделе признания иностранных документов об образовании РИВШ."
      },
      "specialties-data-section": {
        "legend": "Наши специальности",
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
        "description_p1": "Белорусский государственный экономический университет предлагает иностранным гражданам обучение на подготовительном отделении по профилю «Экономический», «Правоведение», «Иностранный язык», «Медицинский».",
        "description_p2": "При успешном окончании подготовительного отделения иностранный гражданин получает свидетельство государственного образца, которое дает ему право продолжить обучение в университете без вступительных испытаний в качестве студента, магистранта, аспиранта (при условии наличия документа об образовании необходимого уровня).",
        "description_p3": "При необходимости на время обучения университет предоставляет слушателям подготовительного отделения места в благоустроенном общежитии. Проживание в общежитии платное, его стоимость не входит в стоимость обучения и составляет 40-50 долларов США в месяц.",
        "description_p4": "Для слушателей подготовительного отделения деканат и кафедра белорусского и русского языков проводят экскурсии по историческим местам Беларуси, посещение театров и музеев в г. Минске.",
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
        "description_p1": "Белорусский государственный экономический университет предлагает иностранным гражданам обучение на подготовительном отделении по профилю «Экономический», «Правоведение», «Иностранный язык», «Медицинский».",
        "description_p2": "При успешном окончании подготовительного отделения иностранный гражданин получает свидетельство государственного образца, которое дает ему право продолжить обучение в университете без вступительных испытаний в качестве студента, магистранта, аспиранта (при условии наличия документа об образовании необходимого уровня).",
        "description_p3": "При необходимости на время обучения университет предоставляет слушателям подготовительного отделения места в благоустроенном общежитии. Проживание в общежитии платное, его стоимость не входит в стоимость обучения и составляет 40-50 долларов США в месяц."
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
    "bseu-application": {
      "application-header": {
        "title": "Подача онлайн заявления",
        "text": "Инфраструктуру учебно-научного комплекса БГЭУ составляют 11 факультетов, 49 кафедр, Институт повышения квалификации и переподготовки экономических кадров, Институт магистерской подготовки, филиалы: Минский торговый колледж, Минский финансово-экономический колледж, Новогрудский торгово-экономический колледж; библиотека, студенческий городок, спортивный и торговый комплексы.",
        "warning": "Обращаем Ваше внимание, что все поля обязательны для заполнения"
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
      "link_main": "Главная",
      "link_questions": "Частые вопросы",
      "link_documents": "Подача заявления онлайн",
      "link_news": "Новости",
      "development": "Разработка сайта, продвижение и коммуникации - ООО “Акториус”"
    },
    "documents-list": {
      "document-link": "Скачать список документов",
      "admission-documents": {
        "legend": "Документы необходимые для поступления",
        "visa": "требуется виза",
        "without-visa": "виза не нужна",
        "description-p1": "Документы необходимо выслать не позднее 15 сентября.",
        "description-p2": "Подавайте документы онлайн и после их рассмотрения<br />мы сообщим Вам, когда сможем выслать официальное приглашение!",
        "description-no-visa": "Документы спустя 2 недели",
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
        "passport-translate": "заверенный  перевод на русский язык копий страниц",
        "education-documents-copy": "Копии документов об образовании",
        "education-documents-info": "(полном среднем, высшем)",
        "education-documents-translate": "заверенный  перевод копий на русский язык"
      },
      "arriving-documents": {
        "legend": "Документы необходимые по приезду",
        "original-invitation": "Оригинал приглашения",
        "original-education-document": "Оригинал документа об образовании",
        "original-education-document-translate": "заверенный перевод на русский язык с указанием изученных предметов и полученных по ним на экзаменах отметок (баллов)",
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
      "monthes": monthes
    },
    "phone-input": {
      "placeholder": "Введите номер"
    },
    "form": form,
    "application_button": "Подача заявления онлайн"
  },
  "educationForm": {
    "Ochno": "Очное",
    "Zaochno": "Заочно",
    "Remote": "Дистанционно"
  },
  "educationType": {
    "First": "Первое высшее",
    "Second": "Второе высшее",
    "Magistracy": "Магистратура",
    "Retraining": "Переподготовка"
  },
  "visaMode": {
    "with-visa": "ТРЕБУЕТСЯ ВИЗА",
    "visa-free": "ВИЗА НЕ НУЖНА"
  }
}
