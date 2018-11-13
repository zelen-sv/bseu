import popularSpecialties from './tm/popularSpecialties.js'
import trainingProfiles from './tm/trainingProfiles.js'
import requalificationSpecialties from "./tm/requalificationSpecialties.js"
import monthes from './tm/monthes.js'
import form from './tm/form.js'
import documents from './tm/documents.js'
import questions from './tm/questions.js'

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
        questions: questions,
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
        "description_p1": "BDYU-ne girmek karary, daşary ýurt raýatlary üçin hemme tarapdan bähbitli netije berer. Bu ýokary okuw jaýy Belarusyň öňde barýan ylmy-tejribe merkezi bolup durýar. Bu ýerde özleşdirilýän hünärler döwür bilen laýyk gelýär we bu ýokary okuw jaýyny gutaran talyplar öz ýurtlarynda talap edilýän hünärmenler bolýarlar. 1-nji basgançak çäklerinde alnan Belarus ykdysadyýet bilimi daşary ýurtlaryň köpüsinden abraýdan peýdalanýar, uniwersitetiň özi bolsa profil sanawnamalarynda hemişe ýokary derejeleri eýeleýär.",
        "description_p2": "Daşary ýurt raýatlary, BDYU-da tölegli esasda ýokary bilim alýarlar. Kabul ediş çäreleri 30-njy awgustdan 15-nji oktýabra çenli dowam edýär. Beýleki talyplar bilen bilelikde, taýýarlanan okuw toparlary giriş synaglaryndan üstünlik bilen geçenlerinden soň sapaklara başlaýarlar. Gerekli bolan ýagdaýynda BDYU-da ykdysadyýet öwrenmäge başlamazdan öň, taýýarlyk fakultetiniň çäklerinde uýgunlaşma geçmek hem mümkindir (rus, belarus dillerini öwrenmek, giriş synaglaryna taýýarlanmak).",
        "description_p3": "Üstünlikli marketolog bolmak, halkara logistikany ýa-da işewürlik-dolandyryşy özleşdirmek isleýäňizmi? BDYU-da saýlamak üçin hünärmenlikleriň dürli görnüşleri bar, şu sahypanyň aşagynda olaryň sanawnamasy görkezilendir. Özüňize laýyk ugry saýlap alyň!"
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
        "description_p1": "BDYU-da ikinji ýokary bilim – belli pudaklarda has çuňlaşdyrylan bilim almak ýa-da bütinleý täze bir hünär öwrenmek üçin örän ajaýyp pursatdyr. Häzirki, hemişe üýtgäp duran dünýäde täze meseleler we iň kyn soraglaryň çözülmegi üçin taýýarlykly bolmak uly ähmiýete eýedir. Şeýlelikde kompaniýanyň geljekdäki müdiri üçin diňe bir dolandyryş başarnyklaryna däl-de, eýsem ykdysady tertibe hem düşünmek gereklidir. Aýratyn hem şu sebäpden 2018-nji ýylda daşary ýurtly raýatlar tarapyndan BDYU-da ikinji ýokary bilim almak iň köp talap edilýän ugurlardan biri boldy.",
        "description_p2": "Täzeden ýokary okuw jaýyna girme talyplar üçin täze mümkinçilikleriň gapysyny açýar. Käbir adamlar täze bilimleriň we başarnyklaryň hakyky gymmatyna has kämil ýaşda düşünýärler, başgalary bolsa täze hünär öwrenmek bilen öz durmuşlaryny üýtgetmek karary alýarlar. Şunuň bilen bilelikde Belarus ýokary bilimine uly baha berilýär we 2 hünärlilik üçin BDYU – öňde baryjy ykdysady ylmy-amaly merkez saýlanýar.",
        "description_p3": "Aşakdaky sahypada BDYU-da ikinji ýokary okuw çäklerindäki hünärmenlikler görkezilendir. Eger saýlamak size kyn düşýän bolsa, hemişe size kömek etmäge taýýardyrys."
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
        "bseu-education": "Magistratura",
        "specialties-list": "Список специальностей",
        "admission-documents": "Документы для поступления",
        "local-documents": "Документы по приезду",
        "admission": "Как поступить"
      },
      "bseu-section": {
        "legend": "BDYU Magistratura",
        "description_p1": "BDYU Magistratura – bu ýerde, gerekli tehniki enjamlaşdyrma, ýokary kwalifikasiýaly mugallymlar we ussatlyk bilen gurnalan bilim beriş prosesi arkaly hil taýdan başga derejede düýbünden täze bilimleri almak mümkin. Magistrlik derejesi gün geçdigiçe has talap edilýän we soralýan ylmy derejä öwrülýär. Şeýle diploma eýe bolan uçurum döwlet kompanýialarynda we hususy pudakda işläp biler.",
        "description_p2": "BDYU-nyň ýokary okuwnyň ikinji basgançagynda bilim almak isleg bildirýänleriň ählisi üçin açykdyr, şol sanda daşary ýurtly talyplar üçin hem açykdyr. Jemi 42 programma göz öňünde tutulan, olaryň bir bölegi daşary ýurt (iňlis) dilinde hödürlenýär. BDYU magistraturasyny gutarmaklarynda daşary ýurtlulara Belarus Respublikasy döwlet nusgasynda diplom berilýär.",
        "description_p3": "Giriş synaglary dil üsti bilen geçirilýär. Daşary ýurtly talyplar üçin resminamalary tabşyrma möhleti – her ýyl 27-nji iýundan 30-njy oktýabra çenlidir. BDYU-da saýlan magistratura hünärmenligine girmek üçin şol wagt birinji basgançak ýokary bilimini alan we muny tassyklaýan resminama (diploma) eýe bolmak gereklidir."
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
        "dot_text_1": "• Hukukşynaslyk;",
        "dot_text_2": "• Ykdysadyýet;",
        "dot_text_3": "• Daşary ýurt dili;",
        "dot_text_4": "• Lukmançylyk.",
        "description_p1": "BGYU-da bilim almak isleýän daşary ýurt raýatlary, taýýarlyk bölümine gatnaşýarlar. Sapaklar rus dilinde geçirilýär, şol sebäpden rus dilinde ýeterlik başarnyklary bolmadyk abiturientleriň ýokary okuw jaýyna girmek üçin taýýarlanmaklary gerekli bolýar.",
        "description_p2": "Dört programma göz öňünde tutulan, şolaryň çäklerinde daşary ýurtly talyplaryň uýgunlaşmagy ýöredilýär. Olar okuwyň dowamynda talyp tarapyndan özleşdiriljek hünär tarapyndan anyklanylýar:",
        "description_p3": "Uniwersitetiň taýýarlyk bölümi kursuň gutarmagy, ony üstünlik bilen tamamlan gatnaşyjylara goşmaça giriş synaglaryna gatnaşmazdan okuwa dowam etmäge ygtyýar berýän şahadatnamanyň berilmegi bilen netijelenýär (gaýybana däl, magistratura ýa-da aspirantura). Sapaklar 8-10 adamlyk uly bolmadyk toparlar bilen geçirilýär.",
        "description_p4": "Daşary ýurtlylar üçin taýýarlyk bölümi – bu diňe bir rus dili boýunça başarnyklary däl-de eýsem geljekki hünärmenligiň esaslary bilen tanyşmak üçin hem ajaýyp mümkinçilikdir. Sapaklaryň dowamynda ýörite usullar ulanylýar, daşary ýurtlar üçin ýörite taýýarlanan okuw kitaplarynan peýdalanylýar. Synplar, kompýuterler we wideo materiallaryň görülmegi üçin beýleki enjamlar bilen enjamlaşdyrylandyr. Gerekli bolan ýagdaýynda okuwçylar talyp umumy ýaşaýyş jaýlarynda ýaşar ýaly ýer bilen üpjün edilerler (okuw töleginiň daşyndan – aýda 40-50 ABŞ dollary). Sapaklar, öwredýän ugurlaryny kämil derejede bilýän tejribeli mugallymlar tarapyndan geçiriler.",
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
        "description_p1": "Belarus döwlet ykdysadyýet uniwersitetinde hünärmenlikleriň köpüsiniň öwrenilmegi rus dilinde ýerine ýetirilýär. Şol sebäpden hem bu ýokary okuw jaýynda hünärmenlik öwrenmek isleýän daşary ýurtlylalaryň ilki bilen rus dili kurslaryny gutarmaklary gerek. Olar belarus we rus dili kafedralary tarapyndan gurnalandyrlar. Sapaklar geljekdäki talyplaryň köpçüligini taýýarlan tejribeli mugallymlar tarapyndan geçirilýär.",
        "description_p2": "Rus dilini biliş başarnygynyň derejesi bilen laýyklykda okuwyň birnäçe derejeleri göz öňünde tutulandyr: başlangyç derejeden başlap çaltlaşdyrylan derejä çenli. BDYU rus dili kurslary okuw toparlarynyň emele getirilmekleri abiturientler tarapyndan gelen arzalaryň esasynda ýerine ýetirilýär. Ol toparlaryň iň ulusy 8 adamlyk toparlardyr. Sapaklar hepdede bäş gezekden az bolmadyk ýygylykda geçirilýär. Sapaklaryň şeýle ýygylykda geçirilmekleri täze we daşary ýurtlular üçin kynlyk derejesi ýokary bolan diliň öwrenilmegine kömek edýär. Gerekli bolan ýagdaýynda okuw möhleti boýunça talyplaryň ýaşaýyş jaýynda tölegli ýer berilmegi mümkindir (aýlyk 40-50 ABŞ dollary).",
        "description_p3": "Daşary ýurtlylar üçin taýýarlyk kurslarynda öwredilýän rus diliniň bahasy, emele getirilýän toparlaryň ululyklary, sapaklaryň ýygylyklary we takyk programmalar bilen laýyklykda anyklanar. Sapaklar, netijeliligi köp gezek üstünlik bilen tassyklanan ýöriteleşdirilen usullar esasynda geçirilýärler. Kursuň ähmiýetli aýratynlyklaryndan biri hem talyplary belarus we rus medeniýetleri we milli däpleri bilen tanyşdyrmagydyr. Belli ýerlere, muzeýlere we teatrlara gezelençler gurnalýar."
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
    },
    "requalification": {
      "sidebar": {
        "requalification": "Переподготовка",
        "refresher-training": "Повышение квалификации",
        "internship": "Stažirowka"
      },
      "section-requalification": {
        "legend": "Переподготовка",
        "description_p1": "BGYU kämilleşdirme programmasy 1999-njy ýyldan bäri işleýär. Onuň esasy maksady ýokary bilimi bolan şahyslara täze, talap edilýän, geljegi bolan hünärleriň öwredilmegi we çuňlaşdyrylan amalyýet merkezli bilimleriň berilmegi bolup durýar. Berlen täze kwalifikasiýa saýasynda, fakultetiň uçurymy has ýokary töleglerde işlemäge dalaş edip biler. Öz ösüşiňiz, täze başarnyk we bilimleriň öwrenilmegi üçin serişdeleriň maýa goýumynyň örän gowy ýoly.",
        "description_p2": "BGYU kämilleşdirme, bar bolan ýokary bilimiň esasynda amala aşyrylýar. Şeýlelikde, täzeden taýýarlyk geçmek isleýän daşary ýurt raýatlarynyň hasaba alnan wagtlarynda birinji derejeli ýokary bilimleri we ony tassyklaýan resminamalary (diplom) bolmaly. Programma esasan hem deňagramlykly we netijeli dolandyryş kararlary almagy başarýan köp-ugurly hünärmen bolmaga ymtylýan şahyslar üçin niýetlenendir.",
        "description_p3": "Ýokary bilimi esasynda BGYU-da kämilleşdirme kursuny üstünlik bilen gutaran daşary ýurtly şahyslara, halkara görnüşli iňlis dilindäki diplom berilýär. Programmanyň möhleti, saýlanan hünärmenlik (4 sessiýa) bilen baglylykda 18-24 aýdyr. Okuw görnüşi – gaýybana. Kämilleşdirme fakultetinde bilim almagyň bahasy doly kurs üçin 1500-1700 ABŞ dollarydyr. Töleg bäş tapgyrda ýerine ýetirilýär. Hünärleriň we degişli resminamalaryň sanawyny uniwersitediň sahypasynyň tematik bölümini tapmak bolar.",
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
        "dot_text_1": "• Kwalifikasiýa ýokarlandyrma programmalary;",
        "dot_text_2": "• Bilim berýän kurslar;",
        "dot_text_3": "• Seminarlar, türgenleşikler, master-klaslar;",
        "dot_text_4": "• Stažirowkalar.",
        "description_p1": "BGYU kwalifikasiýa ýokarlandyrma institudy – uniwersitediň, ýokary bilimi bolan şahsylar üçin goşmaça bilim berýän düzüm bölümidir. Ykdysadyýet, dolandyryş, maliýe we hukuk profilleri boýunça hünärmenlik taýýarlyklary 2006-njy ýyldan bäri alnyp barylýar. Okuw toparlary üçin kabul ediş, dolandyryş wezipesindäki işgärlerden bolşy ýaly, ýeterlik tejribesi bolmadyk we gysga wagtyň içinde täze başarnyklar we bilimler öwrenmäge ymtylýan uçurymlardan hem ýygnalýar.",
        "description_p2": "BGYU kwalifikasiýa ýokarlandyrma programmalary isleg bildiýärnleriň ählisi üçin, şol sanda daşary ýurt raýatlary üçin hem açykdyr. Jemi dört ugur göz öňünde tutulandyr:",
        "description_p3": "BGYU kwalifikasiýa ýokarlandyrma toplumlaýyn kurslary – bu gysga wagtyň içinde (bir hepde we has köp) belli bir ugurdaky bilimiňi esli mukdarda çuňlaşdyrmak üçin taýsyz pursatdyr. Olaryň arasynda aýratyn talapdan peýdalanýanlar halkara marketing, işewürlik meýilleşdirme we maýa goýum taslamalarynyň durmuşa geçirilmegi, DSG kadalary we halkara söwdany kadalaşdyrmagyň çäreleri, şeýle-de başga birnäçe geljegi bolan ugurlar. Sapaklary tejribeli we ökde mugallymlar geçirýärler. Okuw görnüşi – gaýybana däl. Artykmaç ýerler bolan ýagdaýlarynda daşary ýurt raýatlaryna talyplaryň ýaşaýyş jaýlarynda ýaşamak üçin ýer hödürlenýär (goşmaça tölege degişli)."
      },
      "section-internship":{
        "legend": "Stažirowka",
        "dot_text_1": "• Magistrler üçin (bahasy 150 ABŞ dollaryndan başlaýar);",
        "dot_text_2": "• Mugallymlar üçin (bahasy 250 ABŞ dollaryndan başlaýar).",
        "description_p1": "Tejribe çalşygy we BDYU stažirowka programmalary daşary ýurtly raýatlar üçin ýyllyk tapgyrlarda geçirilýär. Onuň maksady, gatnaşyjylar tarapyndan täze tejribeleriň edilnilmegi, öz bilimiňi, ukybyňy we başarnyklaryňy barlamak mümkinçiligi bolup durýar. Stažirowka üçin iň gysga möhlet 1 hepde bolup durýar (takyk möhlet her gatnaşyjy üçin aýratynlykda onuň özüniň we ony ugradýan guramanyň islegleri göz öňünde tutulmak bilen anyklanýar). Iş dilleri rus, belarus we iňlis dilleri bolup durýar.",
        "description_p2": "BDYU-da stažirowkalaryň iki ugry bar:",
        "description_p3": "Ýol, ýaşaýyş we iýmit bu bahanyň içinde däldir. Daşary ýurt raýatlary üçin Belarusda bolan möhletlerinde talyplaryň umumy ýaşaýyş jaýlarynda ýer üpjün edilýär (goşmaça tölege degişli, bahasy hepdelik 15 ABŞ dollaryndan başlaýar). Programma, her şahys üçin aýratyn tertipde, gatnaşyjynyň hünäri, kwalifikasiýa we şahsy gyzyklanmalary göz öňünde tutulmak bilen taýýarlanýar. Resminamalaryň taýýarlanmagy we saparyň gurnalmagy, onuň meýilleşdirilýän senesinden 30 gün öňünden giç bolmadyk wagtda ýerine ýetirilýär. Stažirowkanyň soňunda iş dilleriniň birinde ýörite şahadatnama berilýär.",
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
      "admission-documents": {
        "legend": "Документы необходимые для поступления",
        "visa": "требуется виза",
        "without-visa": "виза не нужна",
        "description-p1": "Документы необходимо выслать не позднее 15 сентября.",
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
