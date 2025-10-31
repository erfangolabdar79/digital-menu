// داده‌های منو از Menu.txt
const menus = {
  breakfast: [
    { name: "نیمرو", desc: "تازه و داغ", img: "images/nimroo.jpg",price: "40,000 تومان" },
    { name: "املت سنتی", desc: "با گوجه تازه", img: "images/omlet.jpg",price: "40,000 تومان"  },
    { name: "املت سوسیس", desc: "املت با سوسیس", img: "images/omlet-sosis.jpg",price: "40,000 تومان"  },
    { name: "سوسیس تخم مرغ", desc: "سوسیس و تخم مرغ", img: "images/sosis-egg.jpg" ,price: "40,000 تومان" },
    { name: "سوسیس تخم مرغ ویژه", desc: "همراه با سیب زمینی و قارچ", img: "images/sosis-egg-special.jpg",price: "40,000 تومان"  },
    { name: "صبحانه سنتی", desc: "پنیر، گردو، خیار و گوجه", img: "images/traditional-breakfast.jpg",price: "40,000 تومان"  }
  ],
  main: [
    { name: "جگر", desc: "جگر تازه گوسفندی", img: "images/jigar.jpg",price: "40,000 تومان" },
    { name: "دل", desc: "دل تازه گوسفندی ", img: "images/del.jpg",price: "40,000 تومان" },
    { name: "قلوه", desc: "قلوه تازه گوسفندی", img: "images/gholveh.jpg",price: "40,000 تومان" },
    { name: "جگرپیچ", desc: "جگرپیچ مخصوص", img: "images/jigar-pich.jpg",price: "40,000 تومان" },
    { name: "دنبه", desc: "دنبه تازه کبابی", img: "images/donbeh.jpg",price: "40,000 تومان" },
    { name: "خوئک", desc: " خوئک تازه کبابی", img: "images/khoeyk.jpg",price: "40,000 تومان" },
    { name: "خوش گوشت", desc: "    ", img: "images/khoshgoosht.jpg",price: "40,000 تومان" },
    { name: "جوجه بدون استخوان", desc: "جوجه کباب بدون استخوان", img: "images/joje.jpg",price: "40,000 تومان" },
    { name: "چنجه", desc: "گوشت تازه و دنبه", img: "images/chenje.jpg",price: "40,000 تومان" },
    { name: "بال کبابی (5 تکه)", desc: "بال مرغ کبابی", img: "images/wing.jpg",price: "40,000 تومان" },
    { name: "بازو کبابی (4 تکه)", desc: "بازوی مرغ کبابی", img: "images/bazu.jpg",price: "40,000 تومان" },
    { name: "پنیر کبابی", desc: "پنیر مخصوص کبابی", img: "images/paneer.jpg",price: "40,000 تومان" },
    { name: "قارچ کبابی", desc: "قارچ تازه کبابی", img: "images/mushroom.jpg",price: "40,000 تومان" },
    { name: "سوسیس شکاری", desc: "سوسیس شکاری کبابی", img: "images/sausage.jpg",price: "40,000 تومان" },
    { name: "سوسیس پنیری", desc: "سوسیس پنیری کبابی", img: "images/cheese-sausage.jpg",price: "40,000 تومان" },
    { name: "سیب زمینی سرخ شده", desc: "سیب زمینی تازه و ترد", img: "images/fries.jpg",price: "40,000 تومان" },
    { name: "میرزاقاسمی", desc: "غذای سنتی شمالی", img: "images/mirza.jpg",price: "40,000 تومان" }
  ],
  snacks: [
    { name: "گوجه کبابی", desc: "گوجه تازه", img: "images/tomato.jpg",price: "40,000 تومان" },
    { name: "ماست موسیر", desc: "ماست موسیر محلی", img: "images/yogurt.jpg",price: "40,000 تومان" },
    { name: "زیتون", desc: "زیتون تازه", img: "images/olive.jpg" },
    { name: "زیتون پرورده", desc: "زیتون پرورده شمالی", img: "images/olive-mix.jpg",price: "40,000 تومان" },
    { name: "ترشی", desc: "ترشی خانگی", img: "images/torshi.jpg",price: "40,000 تومان" },
    { name: "چیپس", desc: "چیپس بسته‌ای", img: "images/chips.jpg",price: "40,000 تومان" },
    { name: "تخمه", desc: " ", img: "images/seeds.jpg",price: "40,000 تومان" },
    { name: "بادام زمینی", desc: "بادام زمینی بو داده", img: "images/peanut.jpg",price: "40,000 تومان" },
    { name: "بستنی", desc: "سنتی و میوه‌ای", img: "images/icecream.jpg",price: "40,000 تومان" }
  ],
  drinks: [
    { name: "نوشابه", desc: "کوکا، کوکا زیرو، فانتا، لیموناد، اسپرایت", img: "images/soda.jpg",price: "40,000 تومان" },
    { name: "دوغ", desc: "آبعلی و سنتی", img: "images/doogh.jpg",price: "40,000 تومان" },
    { name: "دلستر", desc: "استوایی و لیمویی", img: "images/delster.jpg",price: "40,000 تومان" },
    { name: "آب معدنی", desc: " ", img: "images/water.jpg",price: "40,000 تومان" }
  ],
  hot: [
    { name: "سرویس چای", desc: "چای ایرانی", img: "images/tea.jpg",price: "40,000 تومان" },
    { name: "چای دارچین", desc: "چای معطر دارچین", img: "images/cinnamon-tea.jpg",price: "40,000 تومان" },
    { name: "چای زعفران", desc: "چای با زعفران", img: "images/saffron-tea.jpg",price: "40,000 تومان" },
    { name: "چای گل محمدی", desc: "چای با گل محمدی", img: "images/rose-tea.jpg",price: "40,000 تومان" },
    { name: "چای بهار نارنج", desc: "چای معطر بهارنارنج", img: "images/orange-tea.jpg",price: "40,000 تومان" },
    { name: "اسپرسو", desc: "قهوه اسپرسو", img: "images/espresso.jpg",price: "40,000 تومان" },
    { name: "نسکافه", desc: "قهوه فوری", img: "images/nescafe.jpg",price: "40,000 تومان" }
  ],
  cold: [
    { name: "آب طالبی", desc: "خنک و طبیعی", img: "images/melon.png",price: "40,000 تومان" },
    { name: "آب هندوانه", desc: "آب هندوانه تازه", img: "images/watermelon.png",price: "40,000 تومان" },
    { name: "موهیتو طبیعی", desc: "موهیتوی خنک", img: "images/mojito.jpg",price: "40,000 تومان" },
    { name: "هندوانه", desc: "برش هندوانه تازه", img: "images/watermelon-slice.png",price: "40,000 تومان" }
  ],
  hookah: [
    { name: "پرتقال خامه", desc: "طعم پرتقال و خامه", img: "images/yek.png",price: "40,000 تومان" },
    { name: "پرتقال نعنا", desc: "پرتقال با نعنا", img: "images/hookah2.png" },
    { name: "لیمو نعنا", desc: "لیمو و نعنا", img: "images/hookah3.png" },
    { name: "آدامس نعنا", desc: "طعم آدامس و نعنا", img: "images/hookah4.png" },
    { name: "نعنا", desc: "نعنای خالص", img: "images/hookah5.png" },
    { name: "دوسیب", desc: "طعم کلاسیک دوسیب", img: "images/hookah6.png" },
    { name: "دوسیب آلبالو", desc: "دوسیب با آلبالو", img: "images/hookah7.png" },
    { name: "دوسیب نعنا", desc: "دوسیب با نعنا", img: "images/hookah8.png" },
    { name: "سیب یخ", desc: "سیب خنک", img: "images/hookah9.png" },
    { name: "لاو", desc: "طعم لاو", img: "images/hookah10.png" },
    { name: "بلوبری", desc: "بلوبری خنک", img: "images/hookah11.png" },
    { name: "شب های مسکو", desc: "طعم خاص شب‌های مسکو", img: "images/hookah12.png" },
    { name: "هندوانه یخ", desc: "هندوانه خنک", img: "images/hookah13.png" },
    { name: "آلو یخ", desc: "آلو خنک", img: "images/hookah14.png" },
    { name: "انگور سیاه", desc: "انگور سیاه", img: "images/hookah15.png" },
    { name: "انبه", desc: "انبه تازه", img: "images/hookah16.png" },
    { name: "آدامس دارچین", desc: "طعم آدامس دارچین", img: "images/hookah17.png" },
    { name: "تمشک بستنی", desc: "طعم تمشک با بستنی", img: "images/hookah18.png" }
  ]
};

// آپدیت بنر
function updateBanner(category) {
  const banner = document.getElementById("banner");
  if (!banner) return;
  if (category === "breakfast") {
    banner.innerHTML = "<p>صبحانه از ساعت 9 صبح تا 12 ظهر سرو می‌شود</p>";
    banner.style.display = "block";
  } else {
    banner.innerHTML = "";
    banner.style.display = "none";
  }
}

// ساخت کارت آیتم (عنوان، توضیح، تصویر روبه‌رو)
function createMenuItem(item) {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `
    <div class="text">
      <h3>${item.name}</h3>
      <p>${item.desc || ""}</p>
      <p class="price">${item.price || ""}</p>
    </div>
    <img src="${item.img || ''}" alt="${item.name}"
         onerror="this.style.display='none'">
  `;
  return div;
}

// نمایش آیتم‌های دسته
function showMenu(category) {
  const menuDiv = document.getElementById("menu");
  if (!menuDiv) return;

  updateBanner(category);
  menuDiv.innerHTML = "";

  const items = menus[category] || [];
  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "آیتمی برای نمایش وجود ندارد.";
    empty.className = "placeholder";
    menuDiv.appendChild(empty);
    return;
  }

  items.forEach(item => {
    menuDiv.appendChild(createMenuItem(item));
  });

  // فعال کردن دکمه انتخاب‌شده در نوار بالا
  document.querySelectorAll(".navbar button").forEach(btn => {
    if (btn.dataset.cat === category) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

// رویداد برای دکمه‌های نوار بالا
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar button").forEach(btn => {
    btn.addEventListener("click", () => showMenu(btn.dataset.cat));
  });
  // پیش‌فرض: صبحانه نمایش داده شود
  showMenu("breakfast");
});
