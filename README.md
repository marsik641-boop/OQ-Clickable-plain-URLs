# OQ Clickable Plain URLs

Userscript для Tampermonkey.
Делает кликабельными обычные URL вида `https://...`, написанные текстом в `div`, `span`, `p` и других тегах.
Работает на стороне клиента, без правок CRM.

## Установка
1. Установить расширение Tampermonkey по ссылке:
https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
2. Разрешите работу расширения:
https://www.tampermonkey.net/faq.php?ext=dhdg&version=5.4.1#Q100:~:text=the%20backup%20again.-,Q209%3A%20%D0%A0%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20userscript%E2%80%99%D0%BE%D0%B2,-A209%20%D0%94%D0%BB%D1%8F%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9
3. Открыть ссылку на скрипт:
https://raw.githubusercontent.com/marsik641-boop/oq-clickable-plain-urls/main/oq-clickable-plain-urls.user.js
4. Подтвердить установку

Обновления подтягиваются автоматически.

## Что делает
- Ищет элементы, где весь текст — это URL
- Заменяет их на `<a>`
- Делает ссылку синей и подчёркнутой
- Открывает в новой вкладке
