# Публикация сайта Diadem на Vercel + домен diademai.ru на REG.RU

Инструкция для самостоятельного деплоя без помощи ИИ.  
Время: ~30–45 минут (первый раз).

---

## Почему Vercel, а не Host-0

Сайт на **Next.js 15** с:

- формой «Бесплатный аудит» и квизом;
- API `/api/lead` (отправка в Telegram);
- автоматической OG-картинкой (`opengraph-image.tsx`).

На обычном хостинге REG.RU (Host-0) **нет Node.js** — формы и API **не заработают**.  
На **Vercel** всё это работает как задумано, SSL и обновления — бесплатно на Hobby-тарифе.

Домен **остаётся у REG.RU**, меняются только DNS-записи.

---

## Что понадобится

| Что | Зачем |
|-----|--------|
| Аккаунт [GitHub](https://github.com) | Хранение кода и автодеплой (рекомендуется) |
| Аккаунт [Vercel](https://vercel.com) | Хостинг (войти через GitHub) |
| Личный кабинет [REG.RU](https://www.reg.ru) | Домен `diademai.ru` |
| Файл `.env.local` в проекте | Токены Telegram для заявок |

---

## Шаг 1. Загрузить код на GitHub

В терминале (папка проекта):

```bash
cd "/Users/cybermart/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site"

git init
git add .
git commit -m "Initial commit: Diadem site"
```

На GitHub: **New repository** → имя, например `diadem-site` → **без** README (репозиторий пустой).

Подставьте свой логин:

```bash
git remote add origin https://github.com/ВАШ_ЛОГИН/diadem-site.git
git branch -M main
git push -u origin main
```

> `.env.local` в репозиторий **не попадёт** (он в `.gitignore`) — так и должно быть.

**Альтернатива без GitHub:** деплой через CLI (шаг 2Б в конце документа).

---

## Шаг 2. Подключить проект к Vercel

1. Откройте [vercel.com](https://vercel.com) → **Sign Up** / **Log in** → **Continue with GitHub**.
2. **Add New…** → **Project**.
3. Найдите репозиторий `diadem-site` → **Import**.
4. Настройки сборки (обычно подставляются сами):

   | Поле | Значение |
   |------|----------|
   | Framework Preset | Next.js |
   | Build Command | `npm run build` |
   | Output Directory | *(оставить пустым)* |
   | Install Command | `npm install` |

5. **Перед Deploy** разверните **Environment Variables** и добавьте (значения из `.env.local`):

   | Name | Value |
   |------|--------|
   | `TELEGRAM_BOT_TOKEN` | токен бота |
   | `TELEGRAM_CHAT_ID` | ID чата/группы |
   | `TELEGRAM_THREAD_ID` | *(если есть)* ID топика |

   Для каждой переменной отметьте окружения: **Production**, **Preview**, **Development**.

6. Нажмите **Deploy** и дождитесь зелёной галочки (~2–3 мин).

Сайт откроется по адресу вида `https://diadem-site-xxxxx.vercel.app`.

---

## Шаг 3. Проверить, что формы работают

На временном URL Vercel:

1. Прокрутите до формы «Бесплатный аудит» → отправьте тестовую заявку.
2. Пройдите квиз → отправьте тест.
3. В Telegram должно прийти сообщение.

Если ошибка «сервер не настроен» — в Vercel не добавлены переменные `TELEGRAM_*` → **Settings → Environment Variables** → **Redeploy**.

---

## Шаг 4. Привязать домен diademai.ru

В Vercel: проект → **Settings** → **Domains**.

1. Добавьте: `diademai.ru` → **Add**.
2. Добавьте: `www.diademai.ru` → **Add** (рекомендуется редирект www → основной или наоборот — Vercel предложит).

Vercel покажет **точные DNS-записи**. Обычно для REG.RU:

### Записи в REG.RU

**Домены** → `diademai.ru` → **Управление DNS** / **DNS-серверы и зона**.

Убедитесь, что DNS обслуживается REG.RU (стандартные NS `ns1.reg.ru` и т.п.), не сторонний хостинг.

| Тип | Имя (хост) | Значение | TTL |
|-----|------------|----------|-----|
| **A** | `@` (или пусто) | `76.76.21.21` | 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 |

> Если Vercel в панели Domains показывает **другие** значения — используйте **их**, а не таблицу выше.

Сохраните записи. Распространение DNS: от 15 минут до 24 часов (часто 1–2 часа).

В Vercel у домена появится статус **Valid Configuration** и **SSL Certificate: Active** (Let's Encrypt автоматически).

---

## Шаг 5. Host-0 на REG.RU

Можно **не использовать** для сайта:

- сайт живёт на Vercel;
- Host-0 оставьте под **почту** на `@diademai.ru`, если настроите MX у REG.RU.

Не удаляйте MX-записи почты, если почта уже работает. Меняйте только **A** для `@` и **CNAME** для `www` (как в шаге 4).

---

## Шаг 6. Как обновлять сайт («в один клик»)

После связки GitHub + Vercel:

```bash
# внесли правки в код локально
git add .
git commit -m "Описание изменений"
git push
```

Vercel сам соберёт и опубликует новую версию за 1–3 минуты.  
Статус: Vercel → проект → **Deployments**.

---

## Чеклист перед «боевым» запуском

- [ ] Деплой на Vercel успешен (зелёный билд)
- [ ] `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в Environment Variables
- [ ] Тестовая заявка с `*.vercel.app` пришла в Telegram
- [ ] В REG.RU добавлены A и CNAME для Vercel
- [ ] `https://diademai.ru` открывается с замком (HTTPS)
- [ ] Форма и квиз на боевом домене отправляют в Telegram
- [ ] Вкладка браузера показывает иконку (favicon из `diadem-mark.svg`)

---

## Частые проблемы

| Проблема | Решение |
|----------|---------|
| Домен не открывается | Подождать DNS; в REG.RU проверить A/CNAME; в Vercel — Domains → Refresh |
| SSL «Pending» | Подождать до 24 ч; A-запись должна указывать на Vercel |
| Форма не шлёт в Telegram | Variables в Vercel → **Redeploy** |
| Старый сайт REG.RU вместо нового | A-запись `@` всё ещё на IP Host-0 → заменить на `76.76.21.21` |
| 404 на www | Добавить `www` в Vercel Domains + CNAME `www` |

---

## Шаг 2Б. Деплой без GitHub (только CLI)

```bash
cd "/Users/cybermart/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site"
npx vercel login
npx vercel
# ответьте на вопросы, первый деплой — preview

npx vercel --prod
```

Переменные окружения: [vercel.com](https://vercel.com) → проект → **Settings → Environment Variables** (как в шаге 2).

Домен и DNS — как в шагах 4–5.

Обновления: снова `npx vercel --prod` из папки проекта (без автоматики push — удобнее всё же GitHub).

---

## Полезные ссылки

- [Добавление домена в Vercel](https://vercel.com/docs/projects/domains/add-a-domain)
- [DNS на стороннем регистраторе](https://vercel.com/docs/projects/domains/working-with-dns)
- [Переменные окружения](https://vercel.com/docs/projects/environment-variables)

---

*Файл создан для проекта Diadem. Домен в примере: `diademai.ru` — замените, если у вас другой.*
