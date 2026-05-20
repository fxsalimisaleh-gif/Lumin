// دیکشنری متن‌ها
const translations = {
    fa: {
        name: "صالح سلیمی",
        title: "طراح سایت | فرانت‌اند",
        email: "Fxsalimi.saleh@gmail.com",
        phone: "09330434871",
        website: "lumin.ir",
        location: "ایران ، اراک",
        codeName: "Saleh",
        bioTitle: "طراحی به سبک خودم",
        bioText1: "من صالح هستم. طراحی رو با HTML و CSS به عنوان زبانی برای خلق تجربه‌های بصری متفاوت یاد می‌گیرم. به جای قالب‌های تکراری، به دنبال ایده‌های تازه و پروژه‌های خاص هستم.",
        bioText2: "اگر تو هم به فکر طراحی هستی که ردپای خودشو داشته باشه خوشحال می‌شم فرصت همکاری رو با هم بررسی کنیم.",
        bioBtn: "بریم برای همکاری →"
    },
    en: {
        name: "Saleh Salimi",
        title: "Front-End Developer | Web Designer",
        email: "Fxsalimi.saleh@gmail.com",
        phone: "09330434871",
        website: "lumin.ir",
        location: "Arak, Iran",
        codeName: "Saleh",
        bioTitle: "Design in My Own Style",
        bioText1: "I'm Saleh. I learn design with HTML and CSS as a language to create different visual experiences. Instead of repetitive templates, I look for fresh ideas and special projects.",
        bioText2: "If you're thinking of a design that has its own signature, I'd be happy to explore the opportunity to work together.",
        bioBtn: "Let's Collaborate →"
    }
};

let currentLang = 'fa';

function updateLanguage(lang) {
    currentLang = lang;

    // به‌روزرسانی متن‌ها
    document.getElementById('name').textContent = translations[lang].name;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('email-text').textContent = translations[lang].email;
    document.getElementById('phone-text').textContent = translations[lang].phone;
    document.getElementById('website-text').textContent = translations[lang].website;
    document.getElementById('location-text').textContent = translations[lang].location;
    document.getElementById('code-name').textContent = translations[lang].codeName;
    document.getElementById('bio-title').textContent = translations[lang].bioTitle;
    document.getElementById('bio-text1').textContent = translations[lang].bioText1;
    document.getElementById('bio-text2').textContent = translations[lang].bioText2;
    document.getElementById('bio-btn-text').textContent = translations[lang].bioBtn;

    // تغییر جهت صفحه (rtl برای فارسی، ltr برای انگلیسی)
    if (lang === 'fa') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'fa');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    // تغییر کلاس فعال دکمه‌ها
    document.getElementById('btn-fa').classList.toggle('active', lang === 'fa');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

// رویداد کلیک دکمه‌ها
document.getElementById('btn-fa').addEventListener('click', () => updateLanguage('fa'));
document.getElementById('btn-en').addEventListener('click', () => updateLanguage('en'));s