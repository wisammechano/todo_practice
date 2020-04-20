const countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

const governorates = ["Al Anbar", "Al-Qādisiyyah", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Halabja", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Saladin", "Sulaymaniyah", "Wasit"];

const names = ["Reem", "Ahmed", "Sarah", "Qais", "Luma", "Karrar", "Tuqa", "Salim"];

const camera = {
    brand: "Nikon",
    make: 2019,
    width: 100,
    height: 50,
    depth: 37,
    units: 'mm',
    modes: ["Night", "Winter", "Summer", "HDR", "Manual"],
    color: "Black",
    lens: {
        focal_length_units: "mm",
        focal_length_min: 24,
        focal_length_max: 70,
        aperture_max: "f/2.8",
        aperture_min: "f/22",
        focus_type: "Autofocus"
    }
}

const data = [
  {
    "english_name": "Al Anbar",
    "arabic_name": "الأنبار",
    "post_code": "31",
    "iso_code": "AN",
    "area_miles": 53476,
    "area_kilometeres": 138501,
    "population": 1561400,
    "capital_english": "Ramadi",
    "capital_arabic": "رمادي"
  },
  {
    "english_name": "Al-Qādisiyyah",
    "arabic_name": "القادسية",
    "post_code": "58",
    "iso_code": "QA",
    "area_miles": 3148,
    "area_kilometeres": 8153,
    "population": 1134300,
    "capital_english": "Al Diwaniyah",
    "capital_arabic": "الديوانية"
  },
  {
    "english_name": "Babil",
    "arabic_name": "بابل",
    "post_code": "51",
    "iso_code": "BB",
    "area_miles": 1976,
    "area_kilometeres": 5603,
    "population": 1820700,
    "capital_english": "Hillah",
    "capital_arabic": "حلة"
  },
  {
    "english_name": "Baghdad",
    "arabic_name": "بغداد",
    "post_code": "10",
    "iso_code": "BG",
    "area_miles": 78.84,
    "area_kilometeres": 204.2,
    "population": 7055200,
    "capital_english": "Baghdad",
    "capital_arabic": "بغداد"
  },
  {
    "english_name": "Basra",
    "arabic_name": "بصرة",
    "post_code": "61",
    "iso_code": "BA",
    "area_miles": 7360,
    "area_kilometeres": 19070,
    "population": 2532000,
    "capital_english": "Basra",
    "capital_arabic": "بصرة"
  },
  {
    "english_name": "Dhi Qar",
    "arabic_name": "ذي قار",
    "post_code": "64",
    "iso_code": "DQ",
    "area_miles": 5000,
    "area_kilometeres": 12900,
    "population": 1836200,
    "capital_english": "Nasiriyah",
    "capital_arabic": "ناصرية"
  },
  {
    "english_name": "Diyala",
    "arabic_name": "ديالى",
    "post_code": "32",
    "iso_code": "DI",
    "area_miles": 6828,
    "area_kilometeres": 17685,
    "population": 1443200,
    "capital_english": "Baqubah",
    "capital_arabic": "بعقوبة"
  },
  {
    "english_name": "Dohuk",
    "arabic_name": "دهوك",
    "post_code": "42",
    "iso_code": "DA",
    "area_miles": 2530,
    "area_kilometeres": 6553,
    "population": 1128700,
    "capital_english": "Dohuk",
    "capital_arabic": "دهوك"
  },
  {
    "english_name": "Erbil",
    "arabic_name": "اربيل",
    "post_code": "44",
    "iso_code": "AR",
    "area_miles": 5820,
    "area_kilometeres": 15074,
    "population": 1612700,
    "capital_english": "Erbil",
    "capital_arabic": "اربيل"
  },
  {
    "english_name": "Halabja",
    "arabic_name": "حلبجة",
    "post_code": "46",
    "iso_code": "—",
    "area_miles": 1180,
    "area_kilometeres": 3060,
    "population": 337000,
    "capital_english": "Halabja",
    "capital_arabic": "حلبجة"
  },
  {
    "english_name": "Karbala",
    "arabic_name": "كربلاء",
    "post_code": "56",
    "iso_code": "KA",
    "area_miles": 1944,
    "area_kilometeres": 5034,
    "population": 1066600,
    "capital_english": "Karbala",
    "capital_arabic": "كربلاء"
  },
  {
    "english_name": "Kirkuk",
    "arabic_name": "كركوك",
    "post_code": "36",
    "iso_code": "KI",
    "area_miles": 3737,
    "area_kilometeres": 9679,
    "population": 1395600,
    "capital_english": "Kirkuk",
    "capital_arabic": "كركوك"
  },
  {
    "english_name": "Maysan",
    "arabic_name": "ميسان",
    "post_code": "62",
    "iso_code": "MA",
    "area_miles": 6205,
    "area_kilometeres": 16072,
    "population": 971400,
    "capital_english": "Amarah",
    "capital_arabic": "عماره"
  },
  {
    "english_name": "Muthanna",
    "arabic_name": "مثنى",
    "post_code": "66",
    "iso_code": "MU",
    "area_miles": 19980,
    "area_kilometeres": 51740,
    "population": 719100,
    "capital_english": "Samawah",
    "capital_arabic": "سماوه"
  },
  {
    "english_name": "Najaf",
    "arabic_name": "نجف",
    "post_code": "54",
    "iso_code": "NA",
    "area_miles": 11129,
    "area_kilometeres": 28824,
    "population": 1285500,
    "capital_english": "Najaf",
    "capital_arabic": "نجف"
  },
  {
    "english_name": "Nineveh",
    "arabic_name": "نينوى",
    "post_code": "41",
    "iso_code": "NI",
    "area_miles": 14410,
    "area_kilometeres": 37323,
    "population": 3270400,
    "capital_english": "Mosul",
    "capital_arabic": "موصل"
  },
  {
    "english_name": "Saladin",
    "arabic_name": "صلاح الدين",
    "post_code": "34",
    "iso_code": "SD",
    "area_miles": 9556,
    "area_kilometeres": 24751,
    "population": 1408200,
    "capital_english": "Tikrit",
    "capital_arabic": "تكريت"
  },
  {
    "english_name": "Sulaymaniyah",
    "arabic_name": "سليمانية",
    "post_code": "46",
    "iso_code": "SU",
    "area_miles": 6573,
    "area_kilometeres": 17023,
    "population": 1878800,
    "capital_english": "Sulaymaniyah",
    "capital_arabic": "سليمانية"
  },
  {
    "english_name": "Wasit",
    "arabic_name": "واسط",
    "post_code": "52",
    "iso_code": "WA",
    "area_miles": 6623,
    "area_kilometeres": 17153,
    "population": 1210600,
    "capital_english": "Kut",
    "capital_arabic": "كوت"
  }
]