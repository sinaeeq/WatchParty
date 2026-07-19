# راه‌اندازی Watch Party

این راهنما مراحل نصب و اجرای پروژه Watch Party را به صورت لوکال و همچنین دیپلوی روی Railway توضیح می‌دهد.

<p align="center">
  <a href="./SETUP.md">📦 English Guide</a>
</p>

---

## راه‌اندازی لوکال

### پیش‌نیازها

- Node.js **≥ 20.9.0**
- PostgreSQL (در حال اجرا)

### مراحل

1. **پکیج‌ها را نصب کن:**

```bash
npm install
```

2. **یک فایل `.env` در ریشه پروژه بساز:**

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/watchparty"
PORT=3000
```

3. **مایگریشن‌های دیتابیس را اجرا کن:**

```bash
npm run db:migrate
```

4. **سرور توسعه را اجرا کن:**

```bash
npm run dev
```

5. **باز کن:**

```
http://localhost:3000
```

---

## دیپلوی روی Railway

### 1. Fork کردن ریپازیتوری

۱. برو به [github.com/sinapkn/WatchParty](https://github.com/sinapkn/WatchParty)
۲. روی دکمه **Fork** (بالا-راست) کلیک کن تا یک کپی از پروژه توی حساب گیت‌هاب خودت ساخته بشه

### 2. ساخت پروژه در Railway

1. وارد [Railway](https://railway.app) شو.
2. یک پروژه جدید بساز.
3. یک سرویس جدید از **GitHub Repository** اضافه کن.
4. ریپوی فورک شده خودت را انتخاب کن.

### 3. اضافه کردن PostgreSQL

1. داخل همان پروژه Railway روی **New** کلیک کن.
2. گزینه **Database** را انتخاب کن.
3. گزینه **PostgreSQL** را انتخاب کن.
4. صبر کن تا سرویس PostgreSQL اجرا شود.

### 4. تنظیم متغیرهای محیطی

وارد سرویس اصلی اپ در Railway شو و بخش **Variables** را باز کن. این متغیر را اضافه کن:

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
```

Railway این مقدار را از سرویس PostgreSQL همان پروژه می‌خواند.

### 5. فایل Railway کانفیگ

پروژه فایل `railway.json` دارد که کارهای زیر را انجام می‌دهد:

1. نصب dependencyها
2. اجرای `npm run build`
3. اجرای migrationهای Prisma
4. اجرای اپ با `npm run start`

### 6. اجرای Deploy

داخل سرویس اصلی اپ روی Railway روی **Deploy** یا **Redeploy** کلیک کن.

بعد از موفق شدن deploy، از بخش **Networking** یا **Settings** برای سرویس اپ یک Railway Domain بساز.

---

## دستورات کاربردی

| دستور | توضیح |
|-------|-------|
| `npm run dev` | اجرای سرور توسعه |
| `npm run build` | build گرفتن از پروژه |
| `npm run start` | اجرای نسخه production |
| `npm run db:migrate` | اجرای migrationها |
| `npm run db:push` | push مدل‌ها به دیتابیس |
| `npm run postinstall` | ساخت Prisma Client |
| `npm run lint` | بررسی lint |

---

## متغیرهای محیطی

| متغیر | توضیح | پیش‌فرض |
|-------|-------|---------|
| `DATABASE_URL` | آدرس اتصال PostgreSQL | `postgresql://user:pass@host:5432/db` |
| `PORT` | پورت سرور | `3000` |
