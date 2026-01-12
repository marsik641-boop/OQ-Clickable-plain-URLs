// ==UserScript==
// @name         OQ Clickable Plain URLs
// @namespace    https://github.com/marsik641-boop/oq-clickable-plain-urls
// @version      1.0.1
// @description  Make plain-text URLs clickable in CRM pages
// @match        https://crm.oqprint.ru/*
// @run-at       document-end
// @grant        none
// @updateURL    https://raw.githubusercontent.com/marsik641-boop/oq-clickable-plain-urls/main/oq-clickable-plain-urls.user.js
// @downloadURL  https://raw.githubusercontent.com/marsik641-boop/oq-clickable-plain-urls/main/oq-clickable-plain-urls.user.js
// ==/UserScript==
(() => {
  'use strict';

  const URL_RE = /^(https?:\/\/[^\s<>"]+)$/i;

  function makeLinkFromElement(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.tagName === 'A') return false;
    if (el.children && el.children.length) return false;

    const t = (el.textContent || '').trim();
    const m = t.match(URL_RE);
    if (!m) return false;

    const url = m[1];

    const a = document.createElement('a');
    a.href = url;
    a.textContent = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.color = '#06c';
    a.style.textDecoration = 'underline';
    a.style.cursor = 'pointer';
    a.style.wordBreak = 'break-word';

    el.replaceWith(a);
    return true;
  }

  function scan(root) {
    if (!root || root.nodeType !== 1) return;

    // div/span/p/li/td/th/label/strong/em and anything else later if надо
    const nodes = root.querySelectorAll('div, span, p, li, td, th, label');
    for (const el of nodes) makeLinkFromElement(el);

    makeLinkFromElement(root);
  }

  scan(document.body);

  const mo = new MutationObserver(muts => {
    for (const mut of muts) {
      for (const n of mut.addedNodes) {
        if (n && n.nodeType === 1) scan(n);
      }
    }
  });

  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
