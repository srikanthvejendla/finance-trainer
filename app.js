/* ============================================================
   FINLEARN — Financial Knowledge Base App
   Multi-chapter content with advanced navigation
   ============================================================ */

const App = (() => {
  let currentTopic = null;
  let currentChapter = null;
  const STORAGE_KEY = 'finlearn_state';

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // Initialize app
  function init() {
    loadState();
    renderTopicNav();
    attachEventListeners();
    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('scroll', updateTocHighlight);
  }

  // Render topic navigation in left sidebar
  function renderTopicNav() {
    const nav = $('#chapterNav');
    if (!nav) return;
    nav.innerHTML = '';

    DATA.nav.forEach((group) => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'chapter-group';

      const label = document.createElement('div');
      label.className = 'chapter-group-label';
      label.textContent = group.group;
      groupDiv.appendChild(label);

      group.items.forEach((item) => {
        const link = document.createElement('a');
        link.className = 'chapter-item';
        link.href = `#/${item.id}`;
        link.textContent = item.label;
        link.addEventListener('click', () => {
          $$('.chapter-item').forEach((el) => el.classList.remove('active'));
          link.classList.add('active');
          currentTopic = item.id;
          saveState();
        });
        groupDiv.appendChild(link);
      });

      nav.appendChild(groupDiv);
    });
  }

  // Handle routing
  function handleRoute() {
    const hash = window.location.hash.slice(2);
    const [topic, chapter] = hash.split('/');

    if (!topic || topic === 'home') {
      renderHome();
    } else if (DATA.lessons[topic]) {
      currentTopic = topic;
      currentChapter = chapter || null;
      renderLesson(topic);
      saveState();
    } else {
      renderHome();
    }
  }

  // Render home page
  function renderHome() {
    const view = $('#view');
    view.innerHTML = `
      <div class="chapter-intro">
        <h1>Welcome to FinLearn</h1>
        <p>A comprehensive financial knowledge base covering everything from fundamental investing concepts to advanced professional trading strategies. Explore topics at your own pace, from beginner fundamentals to Wall Street professional depth.</p>
      </div>
      <h2>Choose a Topic</h2>
      <div class="topics-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin: 40px 0;">
        ${DATA.nav.flatMap((group) =>
          group.items.map(
            (item) =>
              `<a href="#/${item.id}" style="text-decoration: none; padding: 20px; border: 1px solid var(--border); border-radius: var(--r-lg); transition: all .2s; display: block; cursor: pointer;">
                <div style="font-size: 32px; margin-bottom: 10px;">${item.ico}</div>
                <h3 style="margin: 0 0 8px 0; color: var(--primary);">${item.label}</h3>
                <p style="margin: 0; color: var(--text-light); font-size: 13px;">Deep comprehensive coverage from fundamentals to advanced</p>
              </a>`
          )
        )}
      </div>
    `;
    $('#breadcrumb').innerHTML = '<span id="breadcrumbText">Home</span>';
  }

  // Render lesson with chapters
  function renderLesson(topicId) {
    const lesson = DATA.lessons[topicId];
    if (!lesson) return;

    const view = $('#view');
    const chapters = lesson.chapters || [];

    // Find current chapter
    let selectedChapter = chapters[0];
    if (currentChapter) {
      selectedChapter = chapters.find((ch) => ch.id === currentChapter) || chapters[0];
    }

    if (!selectedChapter) {
      renderHome();
      return;
    }

    // Update breadcrumb
    $('#breadcrumbText').textContent = `${lesson.title} / ${selectedChapter.title}`;

    // Render chapter content
    const content = `
      <div class="lesson-content">
        <h1>${selectedChapter.title}</h1>
        <div style="color: var(--text-light); font-size: 13px; margin-bottom: 24px;">
          Part ${chapters.indexOf(selectedChapter) + 1} of ${chapters.length}
        </div>
        ${selectedChapter.content}
      </div>
    `;

    view.innerHTML = content;

    // Generate TOC
    generateTableOfContents();
    calculateReadingTime();

    // Make headers clickable for TOC
    makeHeadersClickable();

    // Attach expandable listeners
    attachExpandableListeners();
  }

  // Generate table of contents
  function generateTableOfContents() {
    const tocNav = $('#toc');
    if (!tocNav) return;
    tocNav.innerHTML = '';

    const headers = $$('.lesson-content h2, .lesson-content h3, .lesson-content h4');

    headers.forEach((header, index) => {
      const level = parseInt(header.tagName[1]);
      const id = `heading-${index}`;
      header.id = id;

      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = header.textContent;
      link.className = level === 2 ? '' : level === 3 ? 'nested-1' : 'nested-2';

      link.addEventListener('click', (e) => {
        e.preventDefault();
        header.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(updateTocHighlight, 100);
      });

      tocNav.appendChild(link);
    });
  }

  // Update TOC highlight on scroll
  function updateTocHighlight() {
    const headers = $$('.lesson-content h2, .lesson-content h3, .lesson-content h4');
    const tocLinks = $$('#toc a');

    let activeIndex = 0;
    headers.forEach((header, index) => {
      const rect = header.getBoundingClientRect();
      if (rect.top < 200) {
        activeIndex = index;
      }
    });

    tocLinks.forEach((link, index) => {
      link.classList.toggle('active', index === activeIndex);
    });
  }

  // Calculate reading time
  function calculateReadingTime() {
    const content = $('.lesson-content');
    if (!content) return;
    const wordCount = content.textContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
    const timeEl = $('#readingTime');
    if (timeEl) {
      timeEl.textContent = `${readingTime} min read`;
    }
  }

  // Make headers clickable
  function makeHeadersClickable() {
    const headers = $$('.lesson-content h2, .lesson-content h3, .lesson-content h4');
    headers.forEach((header, index) => {
      header.id = `heading-${index}`;
      header.style.cursor = 'pointer';
    });
  }

  // Attach expandable section listeners
  function attachExpandableListeners() {
    const headers = $$('.expandable-header');
    headers.forEach((header) => {
      header.addEventListener('click', () => {
        header.classList.toggle('expanded');
      });
    });
  }

  // Event listeners
  function attachEventListeners() {
    const sidebarToggle = $('#sidebarToggle');
    const themeToggle = $('#themeToggle');
    const searchInput = $('#searchInput');

    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        $('#sidebar').classList.toggle('open');
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('finlearn_theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = $$('.chapter-item');
        items.forEach((item) => {
          const matches = item.textContent.toLowerCase().includes(query);
          item.style.display = matches ? 'block' : 'none';
        });
      });
    }

    $$('.chapter-item').forEach((item) => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          const sidebar = $('#sidebar');
          if (sidebar) sidebar.classList.remove('open');
        }
      });
    });
  }

  // Save state
  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentTopic, currentChapter }));
  }

  // Load state
  function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const state = JSON.parse(saved);
        currentTopic = state.currentTopic;
        currentChapter = state.currentChapter;
      } catch (e) {
        console.error('Failed to load state:', e);
      }
    }

    const theme = localStorage.getItem('finlearn_theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

window.addEventListener('load', () => {
  if (!window.location.hash) {
    window.location.hash = '#/home';
  }
});
