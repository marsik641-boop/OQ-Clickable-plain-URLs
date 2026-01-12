# OQ Clickable Plain URLs

Userscript для Tampermonkey.
Делает кликабельными обычные URL вида `https://...`, написанные текстом в `div`, `span`, `p` и других тегах.
Работает на стороне клиента, без правок CRM.

## Установка
1. Установить расширение Tampermonkey по ссылке:
https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
2. Открыть ссылку на скрипт:
https://raw.githubusercontent.com/marsik641-boop/oq-clickable-plain-urls/main/oq-clickable-plain-urls.user.js
3. Подтвердить установку

Обновления подтягиваются автоматически.

## Что делает
- Ищет элементы, где весь текст — это URL
- Заменяет их на `<a>`
- Делает ссылку синей и подчёркнутой
- Открывает в новой вкладке
