/* Consistent local line icons, no external runtime dependencies. */
(() => {
 const paths = {
 coffee:'<path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2M7 3v3m4-3v3M2 22h18"/>',
 glass:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="m4 14 8-11 8 11M4 14h16M12 3v18m-8-7 8 7 8-7"/>',
 wood:'<path d="m3 8 9-5 9 5-9 5-9-5Zm0 0v9l9 5 9-5V8M12 13v9M7 6l10 5M3 12l5 3m-5 1 5 3m7-3 6-3"/>',
 wrench:'<path d="M14.5 6.5 18 10l3-3a6 6 0 0 1-7.5 7.5L7 21a2.8 2.8 0 0 1-4-4l6.5-6.5A6 6 0 0 1 17 3l-2.5 3.5Z"/><path d="m5.5 18.5.1-.1"/>',
 pottery:'<path d="M8 3h8M9 3v4c0 3-5 4-5 8a8 8 0 0 0 2 6h12a8 8 0 0 0 2-6c0-4-5-5-5-8V3M5 13h14M5 17h14"/>',
 baking:'<path d="M4 12a4 4 0 0 1 1-8 4 4 0 0 1 7-1 4 4 0 0 1 7 1 4 4 0 0 1 1 8v8H4v-8ZM4 16h16M8 9v3m4-4v4m4-3v3"/>',
 camera:'<path d="M8 6 9.5 3h5L16 6h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4Z"/><circle cx="12" cy="13" r="4"/><path d="M18.5 9h.01"/>',
 sprout:'<path d="M12 21v-9M12 15C5 15 3 11 3 5c6 0 9 3 9 10ZM12 11c0-6 3-8 9-8 0 6-3 8-9 8ZM6 21h12"/>',
 tools:'<path d="m14 3 7 7-4 4-3-3-8 10-3-3 10-8-3-3 4-4Z"/><path d="m5 3 3 3M3 5l3 3m10 8 5 5m-2-7 2 2"/>',
 'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 'arrow-left':'<path d="M20 12H4m6-6-6 6 6 6"/>',
 'arrow-up-right':'<path d="M5 19 19 5M5 5h14v14"/>',
 'arrow-down':'<path d="M12 4v16m-6-6 6 6 6-6"/>',
 check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',
 location:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 'chevron-down':'<path d="m6 9 6 6 6-6"/>',
 shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
 copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V3H3v13h5"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 mark:'<path d="M4 20V9a8 8 0 0 1 16 0v11H4ZM4 10h16M12 2v18M4 16h16"/>'
 };
 window.siteIcon = (name, className = '') => `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] || paths.tools}</svg>`;
 document.querySelectorAll('span[data-icon]').forEach(el => el.innerHTML = window.siteIcon(el.dataset.icon));
})();
