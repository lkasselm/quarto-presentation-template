(function () {

// ============================================================
// CONFIGURATION — edit these values for each talk
// ============================================================
var CFG = {

    // Sections shown as browser-style tabs above the content box (in order)
    sections: ['Introduction', 'Methods', 'Results', 'Conclusion'],

    // Bottom bar
    speaker:  'Your Name',
    date:     'DD Month YYYY',
    logoSrc:  'logo.svg',
    logoAlt:  'Institution',

    // Background image applied to all slides that have no explicit background
    backgroundImage: 'background.svg',

    // ── Layout ──────────────────────────────────────────────
    // Heights are % of slide height; widths are % of slide width.
    // All values scale uniformly with window size (no aspect-ratio drift).

    baseFontSize:      23,    // pt  — base font size for slide text
    bottomBarHeight:    6,    // %h  — height of the bottom bar
    logoHeight:         11,   // %h  — logo height (may overlap content above)
    bottomFontSize:   2.5,    // %h  — text size in the bottom bar

    tabRowHeight:     5.5,    // %h  — total height of the section-tab row
    tabHeight:        4.5,    // %h  — height of an inactive tab (active = tabRowHeight)
    tabFontSize:      3.5,    // %h  — text size in each tab
    tabGap:             3,    // px  — gap between tabs

    contentBoxWidth:   95,    // %   — width of the folder wrapper
    contentBoxHeight:  95,    // %h  — total height of folder wrapper (tabs + body + footer)
    bodyBorderRadius:   5,    // px  — corner radius on the body box
    imgBorderRadius:    8,    // px  — corner radius on content images

    // ── Colors ───────────────────────────────────────────────

    boxBackground:    'rgba(255, 255, 255, 0.80)',
    boxBorder:        'rgba(140, 140, 140, 0.55)',
    boxShadow:        '0 4px 24px rgba(0, 0, 0, 0.20)',

    inactiveTabBg:    'rgba(200, 200, 200, 0.7)',
    inactiveTabColor: '#111',
    activeTabColor:   '#111',

    bottomBarBg:      'rgba(248, 248, 248, 0.97)',
    bottomBarBorder:  '#d0d0d0',

    titleBoxBg:       'rgba(255, 255, 255, 0.60)',
    titleBoxShadow:   '0 4px 24px rgba(0, 0, 0, 0.35)',
};

// ============================================================
// CSS — generated from CFG so every value stays in sync
// ============================================================
function injectCSS() {
    var c = CFG;
    var r = c.bodyBorderRadius + 'px';

    function sh(pct) { return 'calc(var(--slide-h) * ' + (pct / 100) + ')'; }
    function sw(pct) { return 'calc(var(--slide-w) * ' + (pct / 100) + ')'; }

    var style = document.createElement('style');
    style.textContent = [

        ':root { --slide-w: 1050px; --slide-h: 700px; }',

        '.reveal { font-size: ' + c.baseFontSize + 'pt; }',

        '.reveal .slide-background-content {',
        '  background-image: url("' + c.backgroundImage + '");',
        '  background-size: cover;',
        '  background-position: center;',
        '}',

        '#title-slide {',
        '  display: flex !important;',
        '  align-items: center !important;',
        '  justify-content: center !important;',
        '}',
        '#title-content-wrapper {',
        '  background: ' + c.titleBoxBg + ';',
        '  padding: 1em;',
        '  border-radius: ' + r + ';',
        '  box-shadow: ' + c.titleBoxShadow + ';',
        '  text-align: center;',
        '}',

        '.reveal .slides > section:not(#title-slide) {',
        '  display: flex !important;',
        '  align-items: center !important;',
        '  justify-content: center !important;',
        '  padding: 0 !important;',
        '}',

        '.slide-menu-button, .quarto-slide-menu, .reveal .controls {',
        '  display: none !important;',
        '}',

        '.folder-wrapper {',
        '  display: flex;',
        '  flex-direction: column;',
        '  align-items: flex-start;',
        '  width: '  + c.contentBoxWidth + '%;',
        '  height: ' + sh(c.contentBoxHeight) + ';',
        '  position: relative;',
        '}',

        '.folder-logo {',
        '  position: absolute;',
        '  bottom: 0;',
        '  left: ' + sh(0.5) + ';',
        '  height: ' + sh(c.logoHeight) + ';',
        '  width: auto;',
        '  z-index: 10;',
        '}',

        '.slide-section-tabs {',
        '  display: flex;',
        '  align-items: flex-end;',
        '  width: 100%;',
        '  height: ' + sh(c.tabRowHeight) + ';',
        '  flex-shrink: 0;',
        '  font-family: Arial, sans-serif;',
        '}',

        '.section-tab {',
        '  flex: 1;',
        '  height: ' + sh(c.tabHeight) + ';',
        '  display: flex;',
        '  align-items: center;',
        '  justify-content: center;',
        '  padding: 0 6px;',
        '  font-size: ' + sh(c.tabFontSize) + ';',
        '  font-weight: 500;',
        '  color: ' + c.inactiveTabColor + ';',
        '  background: ' + c.inactiveTabBg + ';',
        '  border: 1px solid ' + c.boxBorder + ';',
        '  border-bottom: none;',
        '  border-radius: ' + r + ' ' + r + ' 0 0;',
        '  margin-right: ' + c.tabGap + 'px;',
        '  user-select: none;',
        '  transition: background 0.15s, color 0.15s;',
        '}',
        '.section-tab:last-child { margin-right: 0; }',

        '.section-tab.active {',
        '  height: ' + sh(c.tabRowHeight) + ';',
        '  background: ' + c.boxBackground + ';',
        '  color: ' + c.activeTabColor + ';',
        '  font-weight: 600;',
        '  border-color: ' + c.boxBorder + ';',
        '  border-bottom: none;',
        '}',

        '.folder-body {',
        '  flex: 1;',
        '  align-self: stretch;',
        '  overflow-y: auto;',
        '  background: ' + c.boxBackground + ';',
        '  border: 1px solid ' + c.boxBorder + ';',
        '  border-top: none;',
        '  border-bottom: none;',
        '  border-radius: 0;',
        '  box-shadow: ' + c.boxShadow + ';',
        '  padding: 0.8em 1.2em;',
        '  position: relative;',
        '}',
        '.folder-body h2 {',
        '  margin-top: 0;',
        '  font-size: 1.1em;',
        '  color: #333;',
        '}',
        '.folder-body img {',
        '  border-radius: ' + c.imgBorderRadius + 'px;',
        '}',
        '.folder-body figure, .folder-body .cell-output-display {',
        '  text-align: center;',
        '}',
        '[style*="color: white"] .MathJax, [style*="color: white"] .katex {',
        '  color: white !important;',
        '}',

        '.folder-footer {',
        '  display: flex;',
        '  align-items: center;',
        '  flex-shrink: 0;',
        '  align-self: stretch;',
        '  height: ' + sh(c.bottomBarHeight) + ';',
        '  padding: 0 ' + sh(0.5) + ' 0 ' + sh(c.logoHeight) + ';',
        '  background: ' + c.bottomBarBg + ';',
        '  border: 1px solid ' + c.bottomBarBorder + ';',
        '  border-radius: 0 0 ' + r + ' ' + r + ';',
        '  font-family: Arial, sans-serif;',
        '}',
        '.folder-footer .bb-spacer { flex: 1; }',
        '.folder-footer .bb-name, .folder-footer .bb-date, .folder-footer .slide-counter {',
        '  font-size: ' + sh(c.bottomFontSize) + ';',
        '  color: #555;',
        '  white-space: nowrap;',
        '}',
        '.folder-footer .slide-counter {',
        '  color: #888;',
        '  font-variant-numeric: tabular-nums;',
        '  border-left: 1px solid ' + c.bottomBarBorder + ';',
        '  padding-left: ' + sh(1.2) + ';',
        '  margin-left: ' + sh(0.5) + ';',
        '}',

    ].join('\n');
    document.head.appendChild(style);
}

// ============================================================
// DOM LOGIC
// ============================================================
function applySlideVars() {
    if (typeof Reveal === 'undefined') return;
    var cfg = Reveal.getConfig();
    var root = document.documentElement;
    root.style.setProperty('--slide-w', cfg.width  + 'px');
    root.style.setProperty('--slide-h', cfg.height + 'px');
    document.querySelectorAll('.reveal .slides > section:not(#title-slide)').forEach(function (s) {
        if (s.dataset.backgroundImage) {
            s.style.flexDirection = 'column';
        } else {
            s.style.padding = '0';
        }
    });
}

function updateBodyBackground() {
    var slide = typeof Reveal !== 'undefined' ? Reveal.getCurrentSlide() : null;
    var img = (slide && slide.dataset.backgroundImage) || CFG.backgroundImage;
    document.body.style.backgroundImage    = 'url(' + img + ')';
    document.body.style.backgroundSize     = 'cover';
    document.body.style.backgroundPosition = 'center';
}

function updateActiveTab() {
    var slide = typeof Reveal !== 'undefined' ? Reveal.getCurrentSlide() : null;
    var active = slide ? slide.dataset.section : null;
    document.querySelectorAll('.section-tab').forEach(function (tab) {
        tab.classList.toggle('active', tab.dataset.section === active);
    });
    if (typeof Reveal !== 'undefined') {
        var idx = Reveal.getIndices();
        var label = (idx.h + 1) + ' / ' + Reveal.getTotalSlides();
        document.querySelectorAll('.slide-counter').forEach(function (el) {
            el.textContent = label;
        });
    }
    updateBodyBackground();
}

function createFooter() {
    var c = CFG;
    var footer = document.createElement('div');
    footer.className = 'folder-footer';

    [['bb-spacer', ''], ['bb-name', c.speaker], ['bb-spacer', ''],
     ['bb-date', c.date]].forEach(function (pair) {
        var el = document.createElement('span');
        el.className = pair[0];
        el.textContent = pair[1];
        footer.appendChild(el);
    });

    var counter = document.createElement('span');
    counter.className = 'slide-counter';
    footer.appendChild(counter);

    return footer;
}

function wrapTitleContent() {
    var titleSlide = document.getElementById('title-slide');
    if (titleSlide && !document.getElementById('title-content-wrapper')) {
        var wrapper = document.createElement('div');
        wrapper.id = 'title-content-wrapper';
        Array.from(titleSlide.children).forEach(function (child) {
            wrapper.appendChild(child);
        });
        titleSlide.appendChild(wrapper);
    }
}

function wrapAllSlides() {
    document.querySelectorAll('.reveal .slides > section').forEach(function (section) {
        if (section.id === 'title-slide') return;
        if (section.dataset.backgroundImage) return;
        if (section.querySelector('.folder-wrapper')) return;
        var h2 = section.querySelector('h2');
        if (!h2 || !h2.textContent.trim()) return;

        var tabsRow = document.createElement('div');
        tabsRow.className = 'slide-section-tabs';
        CFG.sections.forEach(function (s) {
            var tab = document.createElement('span');
            tab.className = 'section-tab';
            tab.textContent = s;
            tab.dataset.section = s;
            tabsRow.appendChild(tab);
        });

        var body = document.createElement('div');
        body.className = 'folder-body';
        Array.from(section.children).forEach(function (child) {
            body.appendChild(child);
        });

        var logo = document.createElement('img');
        logo.src = CFG.logoSrc;  logo.alt = CFG.logoAlt;
        logo.className = 'folder-logo';

        var wrapper = document.createElement('div');
        wrapper.className = 'folder-wrapper';
        wrapper.appendChild(tabsRow);
        wrapper.appendChild(body);
        wrapper.appendChild(createFooter());
        wrapper.appendChild(logo);
        section.appendChild(wrapper);
    });
}

// ============================================================
// INIT
// ============================================================
injectCSS();

window.addEventListener('load', function () {
    function run() {
        applySlideVars();
        wrapTitleContent();
        wrapAllSlides();
        updateActiveTab();
    }
    if (typeof Reveal !== 'undefined') {
        Reveal.on('ready', run);
        Reveal.on('slidechanged', updateActiveTab);
        setTimeout(run, 100);
    }
});

})();
