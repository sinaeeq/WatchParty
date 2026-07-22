## 🎨 ری‌دیزاین صفحه اصلی — Glassmorphism + Aurora

### سبک
- **Glassmorphism**: کارت‌های شیشه‌ای با `backdrop-blur` و بوردر نیمه‌شفاف
- **Aurora**: نورهای متحرک پس‌زمینه (فیروزه‌ای + مرجانی) که آروم حرکت می‌کنن
- رنگ‌ها: همون پالت فعلی (فیروزه‌ای #00D4AA + مرجانی #FF6B6B)

### تغییرات فایل‌ها

---

#### ۱. `src/app/globals.css` — انیمیشن‌های Aurora

اضافه کردن:
```css
@keyframes aurora {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(30px, -50px) rotate(120deg) scale(1.1); }
  66% { transform: translate(-20px, 20px) rotate(240deg) scale(0.9); }
}
.animate-aurora { animation: aurora 20s ease-in-out infinite; }

.glass-card {
  background: rgba(24, 27, 34, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

---

#### ۲. `src/app/page.tsx` — بازطراحی کامل

**پس‌زمینه Aurora:**
- ۳ تا حباب نوری متحرک (فیروزه‌ای، مرجانی، آبی) با `animate-aurora` و `blur-[80px]`
- هر کدوم delay و duration متفاوت دارن

**هدر:**
- لوگو شیشه‌ای با `backdrop-blur` و بوردر نیمه‌شفاف
- برند "باهم" با افکت `gradient-text`

**Hero:**
- تایتل بزرگتر با `text-4xl sm:text-5xl md:text-7xl`
- استفاده از فونت `Arad Dots` (decorative) برای "باهم" بالای تایتل
- بج تایید "رایگان" با glassmorphism

**Feature cards:**
- کارت‌های شیشه‌ای `glass-card` با `backdrop-blur`
- هاور: بوردر روشن‌تر + سایه + آیکون scale
- انیمیشن stagger فعال (`animate-fade-in-up` + delay)
- آیکون‌های رنگی با پس‌زمینه شیشه‌ای

**CreateRoom:**
- فرم شیشه‌ای با `glass-card`
- دکمه‌ها و input‌ها با افکت شیشه‌ای
- دکمه submit با glow قوی‌تر

**فوتر:**
- ساده و شیشه‌ای

---

#### ۳. `src/components/CreateRoom.tsx` — استایل شیشه‌ای

- container: `glass-card` به جای `bg-[var(--bg-card)]`
- toggle buttons: افکت شیشه‌ای
- inputs: پس‌زمینه نیمه‌شفاف

### نتیجه نهایی
```
┌─────────────────────────────────────┐
│  ✨ نور متحرک فیروزه‌ای + مرجانی   │
│         (blur شده، آروم حرکت)       │
│                                     │
│         🎬 باهم                     │
│   با دوستات همزمان فیلم ببین       │
│      ✨ رایگان ✨                   │
│                                     │
│  ┌─────────┐ ┌─────────┐ ┌────────┐ │
│  │ 🎬 ویس  │ │ 💬 چت   │ │ 📝 زبن │ │
│  │  چت     │ │  زنده   │ │  هوشمند│ │
│  └─────────┘ └─────────┘ └────────┘ │
│   (کارت‌های شیشه‌ای با blur)        │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  [🎬 یوتیوب] [🔗 مستقیم]    │    │
│  │  نام اتاق: [__________]     │    │
│  │  لینک:    [__________]      │    │
│  │  [ساخت اتاق ✨]             │    │
│  └─────────────────────────────┘    │
│  (فرم شیشه‌ای با backdrop-blur)     │
└─────────────────────────────────────┘
```