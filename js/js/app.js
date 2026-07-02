// ==========================================
// E-HONOUR ROLL
// ==========================================

// ---------- PAGES ----------

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// ---------- BUTTONS ----------

const menuButtons = document.querySelectorAll(".menu-btn");

const backHome = document.getElementById("backHome");
const backClasses = document.getElementById("backClasses");
const overallBestBtn = document.getElementById("overallBestBtn");

// ---------- TITLES ----------

const yearTitle = document.getElementById("yearTitle");
const classTitle = document.getElementById("classTitle");

// ---------- CONTAINERS ----------

const classGrid = document.getElementById("classGrid");
const awardContainer = document.getElementById("awardContainer");

// ==========================================
// CLASS DATA
// ==========================================

const classes = {

    "Toddlers World":[
        "Coral",
        "Pearl",
        "Quartz",
        "Topaz"
    ],

    "Reception":[
        "Agate",
        "Chalcedony",
        "Diamond",
        "Onyx"
    ],

    "Nursery":[
        "Amber",
        "Jasper",
        "Ruby",
        "Sunstone"
    ],

    "Kindergarten":[
        "Jewel",
        "Jade",
        "Moonstone",
        "Spinel"
    ],

    "Year 2":[
        "Opal",
        "Zircon",
        "Crystal",
        "Garnet"
    ],

    "Year 3":[
        "Gold",
        "Peridot",
        "Turquoise",
        "Ivory"
    ],

    "Year 4":[
        "Emerald",
        "Fluorite",
        "Carnelian",
        "Amethyst"
    ],

    "Year 5":[
        "Larimar",
        "Sapphire",
        "Spectrolite",
        "Tourmaline"
    ],

    "Year 6":[
        "Beryl",
        "Citrine",
        "Achroite"
    ]

};

// ==========================================
// HONOUR ROLL DATA
// ==========================================

const honourRoll = {

    "Toddlers World": {

        "Coral": [

            {
                award: "Friendly Helper Hero",
                student: "UWAIFO ADRIEL"
            },

            {
                award: "Friendly Helper Heroine",
                student: "EROMONENE EJEMENIDARE JULIA"
            },

            {
                award: "Shape Expert Award",
                student: "JIMFRED-OBAIDIKU OHIREMEN MICAH"
            },

            {
                award: "Kind Heart Award (M)",
                student: "OMOROGIEVA DANIEL OSAZUWA"
            },

            {
                award: "Kind Heart Award (F)",
                student: "DESTINY OMOEGBHA EVANNA"
            },

            {
                award: "Cutest Giggle Champion",
                student: "BRIGHT IMADE ALORA"
            },

            {
                award: "Smart Cookie Award (M)",
                student: "CHIKEZIE KENDRICK KOBICHIMDI"
            },

            {
                award: "Smart Cookie Award (F)",
                student: "ESEWI ABIEYUWA NICOLE"
            },

            {
                award: "Sound Explorer Award (M)",
                student: "OZAH LEONEL EHIZOJIE"
            },

            {
                award: "Sound Explorer Award (F)",
                student: "IHENSEKHIEN ESOSA ANIYAH"
            },

            {
                award: "Number Ace Prince",
                student: "ERIYO WEALTH OSAYUWAMEN"
            },

            {
                award: "Number Ace Princess",
                student: "IMASUEN ABIEYUWA PRUDENCE"
            },

            {
                award: "Growing Strong Award (M)",
                student: "OYAKHILOME OSELUONAIME FREDERICK-PRINCE"
            },

            {
                award: "Growing Strong Award (F)",
                student: "MDONDO ITINADOO HAZEL"
            },

            {
                award: "Montessori Clean-up Champion (M)",
                student: "OYAKHILOME OSELUONAIME FREDERICK-PRINCE"
            },

            {
                award: "Montessori Clean-up Champion (F)",
                student: "EROMONENE EJEMENIDARE JULIA"
            },

            {
                award: "Sparkle Star Award",
                student: "CHIKEZIE KENDRICK KOBICHIMDI"
            },

            {
                award: "Colour Champion",
                student: "OMOROGIEVA DANIEL OSAZUWA"
            }

        ],

    

        "Pearl": [

            {
                award: "Friendly Helper Hero",
                student: "OISAMAYA OISAKHOJE NATHAN"
            },

        {
            award: "Friendly Helper Heroine",
            student: "CHUKWUMAH KIMBERLY ISIOMA"
        },

        {
            award: "Shape Expert Award",
            student: "OHIREMEN MICAH"
        },

        {
            award: "Kind Heart Award (Male)",
            student: "OSAZUWA OBI CHIEDU SAMUEL"
        },

        {
            award: "Kind Heart Award (Female)",
            student: "EVANNA OSARO EMERY IREDIA"
        },

        {
            award: "Cutest Giggle Champion",
            student: "RICHARD JAYCE UFOMA"
        },

        {
            award: "Smart Cookie Award (Male)",
            student: "KENDRICK KOBICHIMDI UGBOR TOBECHUKWU"
        },

        {
            award: "Smart Cookie Award (Female)",
            student: "ABIEYUWA NICOLE"
        },

        {
            award: "Sound Explorer Award (Male)",
            student: "LEONEL EHIZOJIE"
        },

        {
            award: "Sound Explorer Award (Female)",
            student: "IVIE ARMANI"
        },

        {
            award: "Number Ace Prince",
            student: "OISAMAYA OISAKHOJE NATHAN"
        },

        {
            award: "Number Ace Princess",
            student: "SINEMABASI NSIKAK UDO"
        },

        {
            award: "Growing Strong Award (Male)",
            student: "EXCEL UWAIFO"
        },

        {
            award: "Growing Strong Award (Female)",
            student: "OSARO EMERY IREDIA"
        },

        {
            award: "Montessori Clean-up Champion (Male)",
            student: "ELVIS BRYAN OSASERE"
        },

        {
            award: "Montessori Clean-up Champion (Female)",
            student: "ZANA ELOGHOSA"
        },

        {
            award: "Sparkle Star Award",
            student: "UGBOR TOBECHUKWU NATHAN"
        },

        {
            award: "Colour Champion",
            student: "AIGBOGUN ZANE EHIREMEN"
        }

    ],

    "Quartz": [

        {
            award: "Friendly Helper Hero",
            student: "AKHILOMHEN AKHERE PAXTON"
        },

        {
            award: "Friendly Helper Heroine",
            student: "WILLIAMS EFUE CARINA"
        },

        {
            award: "Shape Expert Award",
            student: "JORDAN LUMA"
        },

        {
            award: "Kind Heart Award (Male)",
            student: "AKHILOMHEN AKHERE PAXTON"
        },

        {
            award: "Kind Heart Award (Female)",
            student: "OMORUYI OZEMWONGIE ALISA"
        },

        {
            award: "Cutest Giggle Champion",
            student: "AGHEDO EKATA EBOSETALE DAMIAN"
        },

        {
            award: "Smart Cookie Award (Male)",
            student: "NIXON OSASERE"
        },

        {
            award: "Smart Cookie Award (Female)",
            student: "EDIAGBONYA MIKAYLA ELOGHOSA"
        },

        {
            award: "Sound Explorer Award (Male)",
            student: "OGHOGHO NOAH"
        },

        {
            award: "Sound Explorer Award (Female)",
            student: "EDIAGBONYA MIKAYLA ELOGHOSA"
        },

        {
            award: "Number Ace Prince",
            student: "ONUORAH CHUKWUEBUKA JOSIAH"
        },

        {
            award: "Number Ace Princess",
            student: "UHUNMWUAGHO AIZENOSA"
        },

        {
            award: "Growing Strong Award (Male)",
            student: "AIWANFO ALLEN OSASENAGA"
        },

        {
            award: "Growing Strong Award (Female)",
            student: "UYI AISOSA IVA"
        },

        {
            award: "Montessori Clean-up Champion (Male)",
            student: "LUMA JORDAN"
        },

        {
            award: "Montessori Clean-up Champion (Female)",
            student: "UHUNMWUAGHO AIZENOSA"
        },

        {
            award: "Sparkle Star Award",
            student: "OGHOGHO NOAH"
        },

        {
            award: "Colour Champion",
            student: "ONUORAH CHUKWUEBUKA JOSIAH"
        }

    ],

        "Topaz": [

        {
            award: "Friendly Helper Hero",
            student: "ARIEMETA EFEMENA BRYAN"
        },

        {
            award: "Friendly Helper Heroine",
            student: "ALLENAOTOR ZARA EFEOMO"
        },

        {
            award: "Shape Expert Award",
            student: "NIGEL UYINMHIN OSAYANGBON"
        },

        {
            award: "Kind Heart Award (Male)",
            student: "AVIOMOH JAYSON AYODELE"
        },

        {
            award: "Kind Heart Award (Female)",
            student: "OMORUYI OZEMWONGIE ALISA"
        },

        {
            award: "Cutest Giggle Champion",
            student: "OJEKERE TREASURE AMIEGHOGHO"
        },

        {
            award: "Smart Cookie Award (Male)",
            student: "ARIEMETA EFEMENA BRYAN"
        },

        {
            award: "Smart Cookie Award (Female)",
            student: "OSEMHEN EHINOMEN AMEERAH"
        },

        {
            award: "Sound Explorer Award (Male)",
            student: "DIBIE KIKACHUKWU NATHAN"
        },

        {
            award: "Sound Explorer Award (Female)",
            student: "OBASEKI AIZEYOSABOR ANNABELLA"
        },

        {
            award: "Number Ace Prince",
            student: "ADEWALE BRYAN AYOMIDE"
        },

        {
            award: "Number Ace Princess",
            student: "OSEMHEN EHINOMEN AMEERAH"
        },

        {
            award: "Growing Strong Award (Male)",
            student: "ILOBA CHIDERA DANIEL"
        },

        {
            award: "Growing Strong Award (Female)",
            student: "OJEKERE AMIEGHOGHO TREASURE"
        },

        {
            award: "Montessori Clean-up Champion (Male)",
            student: "AKPASUBI OMOEHI MEGHAN"
        },

        {
            award: "Montessori Clean-up Champion (Female)",
            student: "OSATOHANMWEN OSAHENRU EDMUND"
        },

        {
            award: "Sparkle Star Award",
            student: "AKPASUBI OMOEHI MEGHAN"
        },

        {
            award: "Colour Champion",
            student: "SIAKA PRAISE OJONUGWA"
        }

    ],
},

"Reception":{
    "Agate": [

        {
            award: "Astounding Attitude",
            student: "LIYOLATHA IBANIYE DATONJO FAVOUR"
        },

        {
            award: "Literacy King",
            student: "ODIASE EHINOMEN JESSE"
        },

        {
            award: "Literacy Queen",
            student: "IBANIYE DATONJO FAVOUR"
        },

        {
            award: "Numeracy King",
            student: "OSEMHEN IVAN EROMOSELE"
        },

        {
            award: "Numeracy Queen",
            student: "OKEKE ELIANA ZIRACHUKWU"
        },

        {
            award: "Happy Helper",
            student: "OKEKE ELIANA ZIRACHUKWU"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "OMOKHA SIOBHAN"
        },

        {
            award: "Super Reader",
            student: "EGHAREVBA ALVIN OSAWESE"
        },

        {
            award: "Kindness King",
            student: "OSARENTIN RICHIE AMADINAIYANGBON"
        },

        {
            award: "Kindness Queen",
            student: "AHANNO BETHEL IGUOSADIA"
        },

        {
            award: "Sunbeam",
            student: "IDELEGBAGBON JANAE ABIEYUWA OSIKPEMI"
        },

        {
            award: "Handwriting",
            student: "ADEWUNMI ADEOLA ADEYANJU ERICH"
        },

        {
            award: "Neatest Pupil",
            student: "IRABOR OSAYUWAMEN RUBY"
        },

        {
            award: "Growing Strong",
            student: "KENNETH-AKOUDO JASMINE AYOMIDE"
        },

        {
            award: "Star Award",
            student: "OSEMHEN IVAN EROMOSELE"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "AHANNO BETHEL IGUOSADIA"
        }

    ],

        "Chalcedony": [

        {
            award: "Astounding Attitude",
            student: "IKONAGBON EGHOSA"
        },

        {
            award: "Literacy King",
            student: "NZUBECHUKWU JAYDEN KAMSIYOCHUKWU"
        },

        {
            award: "Literacy Queen",
            student: "OSAGIE IWINOSA"
        },

        {
            award: "Numeracy King",
            student: "ONUORA CHIDUBEM ZANE"
        },

        {
            award: "Numeracy Queen",
            student: "EWUARE PRINCESS IRIAGBONSE"
        },

        {
            award: "Happy Helper",
            student: "NZUBECHUKWU JAYDEN KAMSIYOCHUKWU"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "ONAH EKHORIYAYI STERLING-GREENE"
        },

        {
            award: "Super Reader",
            student: "CHUKWUEMEKE JANICE"
        },

        {
            award: "Kindness King",
            student: "EWUARE PRINCE AMADINAIYANGBON"
        },

        {
            award: "Kindness Queen",
            student: "UGWOKE CHIDERA"
        },

        {
            award: "Sunbeam",
            student: "KINGSLEY JEREMY"
        },

        {
            award: "Handwriting",
            student: "CHUKWUEMEKE JANICE"
        },

        {
            award: "Neatest Pupil",
            student: "JOHN-SOLOMON JANESSA"
        },

        {
            award: "Growing Strong",
            student: "OBASUYI WEALTH"
        },

        {
            award: "Star Award",
            student: "OSAIGE IWINOSA"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "NZUBECHUKWU JAYDEN KAMSIYOCHUKWU"
        }

    ],

        "Diamond": [

        {
            award: "Astounding Attitude",
            student: "GIDEON NATHAN EHINOMEN"
        },

        {
            award: "Literacy King",
            student: "USIOMWANTA IDAHOSA JASON"
        },

        {
            award: "Literacy Queen",
            student: "EWUARE PRINCESS EVBAKHABOKUN"
        },

        {
            award: "Numeracy King",
            student: "EWUARE PRINCE ODOLIGIE"
        },

        {
            award: "Numeracy Queen",
            student: "ABOH-RICH AYEBANENGIMOTE IVY"
        },

        {
            award: "Happy Helper",
            student: "IGHAGBON ETHAN EHIZOGIE"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "OBAIDIKU JIMFRED AIGBOLOGA"
        },

        {
            award: "Super Reader",
            student: "AIWANFO ALVIN OSAYAMEN"
        },

        {
            award: "Kindness King",
            student: "EFOSA GRACIOUS UWA"
        },

        {
            award: "Kindness Queen",
            student: "OSAJIELE MICHELLE OFURE"
        },

        {
            award: "Sunbeam",
            student: "EWUARE PRINCE UTOMW-ENZAKA"
        },

        {
            award: "Handwriting",
            student: "FRED ZENITA CHIKAMSO"
        },

        {
            award: "Neatest Pupil",
            student: "EGBON SAMUEL ABIEYUWA"
        },

        {
            award: "Growing Strong",
            student: "OSEMWENGIE-IGUODALA ETHAN AISEOSA"
        },

        {
            award: "Star Award",
            student: "IGUE EHINOMEN MILDRED"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "FASEUN NATHAN WONUOLAOLUWA"
        }

    ],

        "Onyx": [

        {
            award: "Astounding Attitude",
            student: "BENYE AXEL"
        },

        {
            award: "Literacy King",
            student: "OSAYANHU NIGEL-UYINMHIN"
        },

        {
            award: "Literacy Queen",
            student: "MERAB EGHOBAMIEN"
        },

        {
            award: "Numeracy King",
            student: "GAVIN OKOJIE"
        },

        {
            award: "Numeracy Queen",
            student: "MBA DAVINA"
        },

        {
            award: "Happy Helper",
            student: "OSAYANHU NIGEL-UYINMHIN"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "SOMTOCHUKWU"
        },

        {
            award: "Super Reader",
            student: "MERAB EGHOBAMIEN"
        },

        {
            award: "Kindness King",
            student: "GOODLUCK LAWANI"
        },

        {
            award: "Kindness Queen",
            student: "EBUBECHUKWU UKPAKA"
        },

        {
            award: "Sunbeam",
            student: "GAVIN OKOJIE"
        },

        {
            award: "Handwriting",
            student: "MBA DAVINA"
        },

        {
            award: "Neatest Pupil",
            student: "BENYE AXEL"
        },

        {
            award: "Growing Strong",
            student: "DARREN EHIWE"
        },

        {
            award: "Star Award",
            student: "MERAB EGHOBAMIEN"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "MBA DAVINA"
        }

    ],
},

"Nursery":{
        "Amber": [

        {
            award: "Friendly Helper Hero",
            student: "OKOSUN HARVEY EHIREMEN"
        },

        {
            award: "Friendly Helper Heroine",
            student: "OSEGHALE MIKAYLA OFURE"
        },

        {
            award: "Shape Expert Award",
            student: "ATAGHOMAN ASHER EBOSEREMEN"
        },

        {
            award: "Kind Heart Award (M)",
            student: "EDEBILI KING-DAVID ONOSETALE"
        },

        {
            award: "Kind Heart Award (F)",
            student: "ABOLO TAMUNOIBI HADASSAH"
        },

        {
            award: "Cutest Giggle Champion",
            student: "OSUNDE ELOGHOSA ALIONA"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "NJOKU MICAH EHIMWENMA"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "KESENA ELIORA EVIOGHENE"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "OMOREDE KINGRAW IWINOSA"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "OGBEBOR NOELANI ESENOSARUMWEN"
        },

        {
            award: "Number Ace Prince",
            student: "AMAYE ORITSEJIMINEOYO NOSAKHARE"
        },

        {
            award: "Number Ace Princess",
            student: "OSAGHAE-OSAS SERENA"
        },

        {
            award: "Growing Strong Award (M)",
            student: "IBRAHIM MICAH OLAJIDE"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IMASUEN PEARL IWINOSA"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "UYI OSAOSE IVAN"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "AKPATI PREVAIL CHIDINMA"
        },

        {
            award: "Sparkle Star Award",
            student: "OKOUROMI KAREN"
        },

        {
            award: "Colour Champion",
            student: "OKHUAROBO ENOCH EGHOSA"
        }

    ],

        "Jasper": [

        {
            award: "Friendly Helper Hero",
            student: "JAKPA ANIREJUOR ITSE RYAN"
        },

        {
            award: "Friendly Helper Heroine",
            student: "AIBANGBE UWAILA PEACE"
        },

        {
            award: "Shape Expert Award",
            student: "OFIEBOR NADIA CHIZARA"
        },

        {
            award: "Kind Heart Award (M)",
            student: "OMUSI ELOGHOSA ALEX"
        },

        {
            award: "Kind Heart Award (F)",
            student: "OTAGBA ANABORHI MAYA"
        },

        {
            award: "Cutest Giggle Champion",
            student: "ANAGWU CHIAGOZIEM WISDOM"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "BENJAMIN OSAMWONYI MUNACHISON"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "OISAMAIYE IVY OSHUWARE"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "EGHOBAMIEN OSAGUONA DAVID"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "ESEIGBE ALIYAH ONOSE"
        },

        {
            award: "Number Ace Prince",
            student: "GODSPOWER JUSTIN EFEMENA"
        },

        {
            award: "Number Ace Princess",
            student: "ASUELIME ELENOR ONOSETALE"
        },

        {
            award: "Growing Strong Award (M)",
            student: "OSAHON-EKHATOR OSASENAGA LIAM"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IDOWU EBUNOLUWA ELVANA"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "MARTINS LUCIOUS"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "OMORODION ATIRA ODOSA"
        },

        {
            award: "Sparkle Star Award",
            student: "ANIZOR CAMILA CHISOM"
        },

        {
            award: "Colour Champion",
            student: "OGBOMO AINSLEY OMORUYI"
        }

    ],

        "Ruby": [

        {
            award: "Friendly Helper Hero",
            student: "EFOSA-AJAYI ELIYANAH"
        },

        {
            award: "Friendly Helper Heroine",
            student: "EICHIE ODIANOSE RYAN"
        },

        {
            award: "Shape Expert Award",
            student: "EGHOBAMIEN GRACE"
        },

        {
            award: "Kind Heart Award (M)",
            student: "LAWANI ALOAGBAMHE PROSPER"
        },

        {
            award: "Kind Heart Award (F)",
            student: "OGHENEFEJIRO ZURI"
        },

        {
            award: "Cutest Giggle Champion",
            student: "EICHIE ODIANOSE RYAN"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "ANIGBOGU IZUCHUKWU"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "OKOSOR TRINITY"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "OSAMWONYI WEALTH"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "DUDU TORISTEJU"
        },

        {
            award: "Number Ace Prince",
            student: "LAWANI ALOAGBAMHE PROSPER"
        },

        {
            award: "Number Ace Princess",
            student: "TERUNGWA CRYSTABEL"
        },

        {
            award: "Growing Strong Award (M)",
            student: "EZEH ELNATHAN"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IYAMU ISOKEN MIRABEL"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "NWIZU NATHANIEL"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "UTOMWEN NORA"
        },

        {
            award: "Sparkle Star Award",
            student: "OKOSOR TRINITY"
        },

        {
            award: "Colour Champion",
            student: "EBEGUE DIAMOND"
        }

    ],

        "Sunstone": [

        {
            award: "Friendly Helper Hero",
            student: "CHUKUMA-ANIEMENA KAINE GIOVANNI"
        },

        {
            award: "Friendly Helper Heroine",
            student: "OSAGIE-EFE OSASOGIE MORAYO ZARA"
        },

        {
            award: "Shape Expert Award",
            student: "ATAGHOMAN ALVIN OSEZUA"
        },

        {
            award: "Kind Heart Award (M)",
            student: "RICHARD JAMIE MAMUYOVWI"
        },

        {
            award: "Kind Heart Award (F)",
            student: "OSAROBO NERIAH OSAYEMWENRE"
        },

        {
            award: "Cutest Giggle Champion",
            student: "OMOBUDE ETINOSA JESSE"
        },

        {
            award: "Smart Cookie Award (M)",
            student: "SHILOH"
        },

        {
            award: "Smart Cookie Award (F)",
            student: "OGBUGHALU SHEILA OLANNA"
        },

        {
            award: "Sound Explorer Award (M)",
            student: "ANIGBOGU IZUCHUKWU SHILOH"
        },

        {
            award: "Sound Explorer Award (F)",
            student: "OGBUGHALU SHEILA OLANNA"
        },

        {
            award: "Number Ace Prince",
            student: "TOSAN-JEMERIGBE URIEL UWAWAREN"
        },

        {
            award: "Number Ace Princess",
            student: "OSHOMAH JANICE OSHOZENOYO"
        },

        {
            award: "Growing Strong Award (M)",
            student: "HARISSON NOLAN"
        },

        {
            award: "Growing Strong Award (F)",
            student: "IGBINOBARO IMADE APRIL"
        },

        {
            award: "Montessori Clean-up Champion (M)",
            student: "AKOGUN AYOMIDE DESTINY"
        },

        {
            award: "Montessori Clean-up Champion (F)",
            student: "OSAWENMWENZE ESOSA FEODORA"
        },

        {
            award: "Sparkle Star Award",
            student: "TOSAN-JEMERIGBE URIEL UWAWAREN"
        },

        {
            award: "Colour Champion",
            student: "ESOSA OSASOGIE STEPHANIE"
        }

    ],
},

"Kindergarten":{
        "Jewel": [

    {
        award: "Astounding Attitude",
        student: "ESEIGBE RYAN OSAMUDIAMEN"
    },

    {
        award: "Literacy King",
        student: "EWUARE PRINCE IDUGBOWA"
    },

    {
        award: "Literacy Queen",
        student: "OLOKOR KAYLA JANELLE"
    },

    {
        award: "Numeracy King",
        student: "IYIEWUARE"
    },

    {
        award: "Numeracy Queen",
        student: "EHOLOR MERCY ARINYA IYAYI"
    },

    {
        award: "Happy Helper",
        student: "OMOROGIUWA KAYLA AIZENOSA"
    },

    {
        award: "Perfect Attendance Pupil",
        student: "AIGBE PAMELA OSARIEMEN"
    },

    {
        award: "Super Reader",
        student: "EWUARE PRINCE IDUGBOWA"
    },

    {
        award: "Kindness King",
        student: "EKENEDARA MUNACHI GERALD"
    },

    {
        award: "Kindness Queen",
        student: "OLOKOR KAYLA JANELLE"
    },

    {
        award: "Sunbeam of the Class",
        student: "IDRIS KADMIEL ONUCHE-OJO"
    },

    {
        award: "Handwriting",
        student: "IME-OJEIKERE IKHIDE DAX"
    },

    {
        award: "Neatest Pupil",
        student: "OGBEBOR ETHAN"
    },

    {
        award: "Growing Strong",
        student: "OKOSUN ESELOSE HENDRIX"
    },

    {
        award: "Montessori Cultural Explorer Award",
        student: "EGBADON JAYDEN EHINOME"
    }

],

    "Jade": [

        {
            award: "Astounding Attitude",
            student: "OGBOMO AVERY OMOSEFE"
        },

        {
            award: "Literacy King",
            student: "OKOJIE CHRIS LONDIN"
        },

        {
            award: "Literacy Queen",
            student: "LEWIS ELISE IFAYENWAN"
        },

        {
            award: "Numeracy King",
            student: "IMASUEN PURITY OSAWESE"
        },

        {
            award: "Numeracy Queen",
            student: "AGHEDO-EKATA DAISY EHINOMEN"
        },

        {
            award: "Happy Helper",
            student: "GODIVA OSESENAGA OKOERI"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "ESEIGBE RYAN OSAMUDIAMEN"
        },

        {
            award: "Super Reader",
            student: "EBEGUE DODIE EFOSE"
        },

        {
            award: "Kindness King",
            student: "ESEIGBE RYAN OSAMUDIAMEN"
        },

        {
            award: "Kindness Queen",
            student: "ANIFOWOSHE IFEOLUWA"
        },

        {
            award: "Sunbeam of the Class",
            student: "SHAWN ELOGHOSA OSAGIE"
        },

        {
            award: "Handwriting",
            student: "OMORODION ELOGHOSA HAILEY"
        },

        {
            award: "Neatest Pupil",
            student: "TRUDY UWUMAROGIE IVANNA OSAWESE"
        },

        {
            award: "Growing Strong",
            student: "OKOJIE CHRIS LONDIN"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "OGBOMO AVERY OMOSEFE"
        }

    ],

        "Moonstone": [

        {
            award: "Star Pupil",
            student: "JOHN-SOLOMON JAYDEN ELOGHOSA"
        },

        {
            award: "Meritorious Pupil",
            student: "OKAFOR CHIMZITERE SKYLAR"
        },

        {
            award: "Commendable Pupil",
            student: "EWUARE-AIMIUWU OSAHERHUNMWEN OMOSEFE IYIEWUARE"
        },

        {
            award: "Astounding Attitude",
            student: "EVBUOMWAN JYOTI OSAWANAME"
        },

        {
            award: "Literacy King",
            student: "ASEMOTA FELIX OSAZEMEN"
        },

        {
            award: "Literacy Queen",
            student: "OKAFOR CHIMZITERE SKYLAR"
        },

        {
            award: "Numeracy King",
            student: "EWUARE-AIMIUWU OSAHERHUNMWEN OMOSEFE IYIEWUARE"
        },

        {
            award: "Numeracy Queen",
            student: "SAMEKI-AKHOR JANEL ONOSHOLEMA"
        },

        {
            award: "Happy Helper",
            student: "IBOMOR OGHENEMAIRO PRINCE JOHN"
        },

        {
            award: "Perfect Attendance Pupil",
            student: "NAWEI-JOSHUA PEREZ"
        },

        {
            award: "Super Reader",
            student: "ASEMOTA FELIX OSAZEMEN"
        },

        {
            award: "Kindness King",
            student: "IMASUEN JEDIDIAH"
        },

        {
            award: "Kindness Queen",
            student: "OBI NWAMAKA ELIANA"
        },

        {
            award: "Sunbeam of the Class",
            student: "OROBOSA PRINCE MOSES"
        },

        {
            award: "Handwriting",
            student: "SAMEKI-AKHOR JANEL ONOSHOLEMA"
        },

        {
            award: "Neatest Pupil",
            student: "YIMEYAHU TZEGULAH DESTA"
        },

        {
            award: "Growing Strong",
            student: "IDRIS KATRIEL UGBEDE-OJO"
        },

        {
            award: "Montessori Cultural Explorer Award",
            student: "OMOIKE-SUNDAY ARIEL OSELUMESE"
        }

    ],

    "Spinel": [

    {
        award: "Star Pupil",
        student: "CHIKE-LOUIS CHIMAMMA ROYALTY"
    },

    {
        award: "Meritorious Pupil",
        student: "IMASUEN PURITY OSAWESE"
    },

    {
        award: "Commendable Pupil",
        student: "OGBOMO AVERY OMOSEFE"
    },

    {
        award: "Astounding Attitude",
        student: "IRORERE FEDORA OSARUONAMEN"
    },

    {
        award: "Literacy King",
        student: "NJOKU MIRACLE CHUKWEBUKA"
    },

    {
        award: "Literacy Queen",
        student: "CHIKE-LOUIS CHIMAMMA ROYALTY"
    },

    {
        award: "Numeracy King",
        student: "SHAWN ELOGHOSA OSAGIE"
    },

    {
        award: "Numeracy Queen",
        student: "IMASUEN PURITY OSAWESE"
    },

    {
        award: "Happy Helper",
        student: "GODIVA OSESENAGA OKOERI"
    },

    {
        award: "Perfect Attendance Pupil",
        student: "ESEIGBE RYAN OSAMUDIAMEN"
    },

    {
        award: "Super Reader",
        student: "EBEGUE DODIE EFOSE"
    },

    {
        award: "Kindness King",
        student: "ESEIGBE RYAN OSAMUDIAMEN"
    },

    {
        award: "Kindness Queen",
        student: "ANIFOWOSHE IFEOLUWA"
    },

    {
        award: "Sunbeam of the Class",
        student: "SHAWN ELOGHOSA OSAGIE"
    },

    {
        award: "Handwriting",
        student: "OMORODION ELOGHOSA HAILEY"
    },

    {
        award: "Neatest Pupil",
        student: "TRUDY UWUMAROGIE IVANNA OSAWESE"
    },

    {
        award: "Growing Strong",
        student: "OKOJIE CHRIS LONDIN"
    },

    {
        award: "Montessori Cultural Explorer Award",
        student: "OGBOMO AVERY OMOSEFE"
    }

],
}

};
// ==========================================
// CURRENT SELECTION
// ==========================================

let currentYear = "";
let currentClass = "";

// ==========================================
// OPEN PAGE TWO
// ==========================================

menuButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        currentYear = button.dataset.year;

        yearTitle.textContent = currentYear;

        page1.style.display = "none";

        page2.style.display = "flex";

        loadClasses(currentYear);

    });

});

// ==========================================
// LOAD CLASSES
// ==========================================

function loadClasses(year){

    classGrid.innerHTML = "";

    const list = classes[year];

    if(!list){

        classGrid.innerHTML = "<p>No classes available.</p>";

        return;

    }

    list.forEach(className=>{

        const button = document.createElement("button");

        button.className = "menu-btn";

        button.textContent = className;

        button.addEventListener("click",()=>{

            openHonourRoll(year,className);

        });

        classGrid.appendChild(button);

    });

}

// ==========================================
// OPEN HONOUR ROLL
// ==========================================

function openHonourRoll(year, className) {

    currentClass = className;

    classTitle.textContent = year + " - " + className;

    page2.style.display = "none";
    page3.style.display = "flex";

    awardContainer.innerHTML = "";

    // Get the awards for this class
    const awards = honourRoll[year]?.[className];

    if (!awards || awards.length === 0) {

        awardContainer.innerHTML = `

            <div class="no-data">

                No Honour Roll available.

            </div>

        `;

        return;

    }

    awards.forEach(item => {

        const card = document.createElement("div");

        card.className = "award-card";

        card.innerHTML = `

            <div class="award-left">

                <div class="award-icon">

                    🏆

                </div>

                <div>

                    <div class="award-title">

                        ${item.award}

                    </div>

                </div>

            </div>

            <div class="student-name">

                ${item.student}

            </div>

        `;

        awardContainer.appendChild(card);

    });

}

// ==========================================
// BACK BUTTONS
// ==========================================

backHome.addEventListener("click",()=>{

    page2.style.display="none";

    page1.style.display="flex";

});

backClasses.addEventListener("click",()=>{

    page3.style.display="none";

    page2.style.display="flex";

});

// ==========================================
// OVERALL BEST OF THE YEAR
// ==========================================

overallBestBtn.addEventListener("click", () => {

    page2.style.display = "none";

    page3.style.display = "flex";

    classTitle.textContent = currentYear + " - Overall Best";

    awardContainer.innerHTML = `

        <div class="award-card">

            <div class="award-left">

                <div class="award-icon">🏆</div>

                <div>

                    <div class="award-title">

                        Overall Best of the Year

                    </div>

                </div>

            </div>

            <div class="student-name">

                Student Name

            </div>

        </div>

    `;

});

