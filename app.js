(() => {
  console.log('App starting...');
  // Utility functions
  const $ = id => document.getElementById(id);
  const $$ = (sel, root) => (root || document).querySelectorAll(sel);
  const $s = (sel, root) => (root || document).querySelector(sel);

  console.log('DOM check:', { nav: $('nav'), view: $('view'), sidebar: $('sidebar') });

  let state = {
    currentLesson: null,
    progress: 0,
    completedLessons: JSON.parse(localStorage.getItem('completedLessons')) || []
  };

  // ============================================================
  // INITIALIZATION
  // ============================================================
  function init(){
    console.log('init() called');
    buildNav();
    updateProgress();
    $('navToggle').onclick = () => $('sidebar').classList.toggle('open');
    window.addEventListener('hashchange', () => {
      console.log('hashchange event fired, new hash:', location.hash);
      route();
    });
    if(!location.hash) location.hash = '#/home';
    console.log('Calling initial route()');
    route();
  }

  // ============================================================
  // NAVIGATION
  // ============================================================
  function buildNav(){
    console.log('buildNav called, DATA:', typeof DATA);
    const nav = $('nav');
    if (!nav) {
      console.error('nav element not found!');
      return;
    }
    console.log('nav element found, building...');
    nav.innerHTML = DATA.nav.map(g => `
      <div class="nav-group-label">${g.group}</div>
      ${g.items.map(i => `
        <a class="nav-link" data-id="${i.id}" href="#/${i.id}">
          <span>${i.ico}</span>
          <span>${i.label}</span>
          <span class="tier-dot"></span>
        </a>`).join("")}
    `).join("");

    $$('.nav-link', nav).forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth <= 768) $('sidebar').classList.remove('open');
      });
    });
  }

  function route(){
    const hash = location.hash.slice(2) || 'home';
    console.log('route() called with hash:', hash);
    state.currentLesson = hash;

    // Update active nav link
    $$('.nav-link').forEach(link => {
      link.classList.remove('active');
      if(link.dataset.id === hash) link.classList.add('active');
    });

    // Update breadcrumb
    const lesson = DATA.lessons[hash];
    $('crumbSection').textContent = lesson?.title || 'Home';

    console.log('Calling renderView with:', hash);
    renderView(hash);
  }

  // ============================================================
  // VIEW RENDERING
  // ============================================================
  function renderView(id){
    const view = $('view');

    if(id === 'home'){
      view.innerHTML = renderHome();
    } else if(id === 'calculators'){
      view.innerHTML = renderCalculators();
    } else if(id === 'glossary'){
      view.innerHTML = renderGlossary();
    } else if(id === 'simulator'){
      view.innerHTML = renderSimulator();
    } else if(DATA.lessons[id]){
      view.innerHTML = renderLesson(id);
    }

    // Attach event listeners after rendering
    attachEventListeners(id);
  }

  // ============================================================
  // HOME PAGE
  // ============================================================
  function renderHome(){
    return `
      <div class="view-enter">
        <p class="eyebrow">📈 Master Your Money</p>
        <h1 class="section-title">Build Wealth Through Smart Investing</h1>
        <p class="section-lede">
          Learn stocks, bonds, options, and investment strategies. From complete beginner to confident investor —
          understand the fundamentals, build portfolios, and make informed financial decisions.
        </p>

        <div class="grid g3" style="margin-bottom: 32px;">
          ${renderHomeCard('Stocks 101', '📈', 'Learn how stock markets work and what it means to own a piece of a company.', 'stocks-101')}
          ${renderHomeCard('Bonds & Fixed Income', '💵', 'Understand bonds, their role in portfolios, and how interest rates affect prices.', 'bonds-101')}
          ${renderHomeCard('Mutual Funds & ETFs', '🎯', 'Discover diversified investing through funds and exchange-traded funds.', 'mutual-funds')}
          ${renderHomeCard('Portfolio Building', '🏗️', 'Learn how to construct a balanced portfolio tailored to your goals.', 'portfolio')}
          ${renderHomeCard('Investment Calculators', '🧮', 'Explore compound interest, stock returns, and dividend income.', 'calculators')}
          ${renderHomeCard('Financial Glossary', '📚', 'Quick definitions of essential financial terms and concepts.', 'glossary')}
        </div>

        <div class="panel" style="background: linear-gradient(135deg, rgba(0,63,135,.05) 0%, transparent 100%); border-left: 4px solid var(--primary);">
          <h3 style="margin-top: 0;">Core Investing Principles</h3>
          <div class="grid g2" style="margin-top: 16px;">
            <div>
              <h4>🎯 Start with a Goal</h4>
              <p>Define what you're investing for: retirement, home purchase, education, wealth building.</p>
            </div>
            <div>
              <h4>📊 Diversify Always</h4>
              <p>Spread investments across stocks, bonds, sectors, and geographies to reduce risk.</p>
            </div>
            <div>
              <h4>⏰ Think Long-Term</h4>
              <p>Markets fluctuate short-term but trend upward long-term. Don't panic on bad days.</p>
            </div>
            <div>
              <h4>💰 Keep Costs Low</h4>
              <p>Fees and expenses compound over time. Choose low-cost index funds and ETFs.</p>
            </div>
            <div>
              <h4>🔄 Rebalance Regularly</h4>
              <p>Maintain your target allocation by periodic rebalancing (yearly or semi-annually).</p>
            </div>
            <div>
              <h4>📈 Dollar-Cost Average</h4>
              <p>Invest fixed amounts regularly to smooth out market volatility.</p>
            </div>
          </div>
        </div>

        <div style="margin-top: 32px; padding: 20px; background: var(--surface-2); border-radius: var(--r-lg); border-left: 4px solid var(--warning);">
          <p><strong>⚠️ Disclaimer:</strong> This is an educational resource. Always consult a qualified financial advisor before making investment decisions. Past performance does not guarantee future results.</p>
        </div>
      </div>
    `;
  }

  function renderHomeCard(title, icon, desc, id){
    return `
      <a href="#/${id}" class="lesson-card" style="text-decoration: none; color: inherit;">
        <div class="lesson-icon">${icon}</div>
        <div class="lesson-title">${title}</div>
        <div class="lesson-desc">${desc}</div>
        <div class="lesson-meta">
          <span>Learn more →</span>
        </div>
      </a>
    `;
  }

  // ============================================================
  // LESSON RENDERING
  // ============================================================
  function renderLesson(id){
    const lesson = DATA.lessons[id];
    if(!lesson) return '<p>Lesson not found.</p>';

    const html = `
      <div class="lesson-view">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <span style="font-size: 28px;">${lesson.icon}</span>
          <div>
            <p class="eyebrow">${lesson.tier ? lesson.tier.charAt(0).toUpperCase() + lesson.tier.slice(1) : 'Professional'} Level</p>
            <h1 style="margin: 0;">${lesson.title}</h1>
          </div>
        </div>

        ${lesson.isCalculator ? '' : `
          <div class="tabs" style="margin: 24px 0;">
            ${lesson.sections.map((s, i) => `
              <button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${i}">${s.title}</button>
            `).join('')}
          </div>

          ${lesson.sections.map((s, i) => `
            <div class="tab-content ${i === 0 ? 'active' : ''}" data-tab="${i}">
              <div class="lesson-content">${s.content}</div>
            </div>
          `).join('')}
        `}

        <div style="margin-top: 32px; display: flex; gap: 12px;">
          <button class="btn success mark-complete" data-id="${id}">✓ Mark Complete</button>
          <button class="btn secondary" onclick="location.hash='#/home'">Back Home</button>
        </div>
      </div>
    `;

    return html;
  }

  // ============================================================
  // CALCULATORS
  // ============================================================
  function renderCalculators(){
    const calc = DATA.lessons.calculators;
    let html = `
      <h1>${calc.icon} ${calc.title}</h1>
      <p>${calc.content}</p>

      <div class="grid g2" style="margin-top: 24px;">
    `;

    calc.calculators.forEach(c => {
      html += `
        <div class="calc-section">
          <h3>${c.icon} ${c.title}</h3>
          <p>${c.description}</p>
          <div id="calc-${c.id}"></div>
        </div>
      `;
    });

    html += '</div>';
    return html;
  }

  // ============================================================
  // GLOSSARY
  // ============================================================
  function renderGlossary(){
    const gloss = DATA.lessons.glossary;
    let html = `
      <h1>${gloss.icon} ${gloss.title}</h1>
      <p>Quick definitions of essential financial terms.</p>

      <div style="margin-top: 20px;">
        <input type="text" id="glossarySearch" placeholder="Search terms..."
          style="width: 100%; max-width: 400px; margin-bottom: 24px;">
      </div>

      <div id="glossaryTerms">
    `;

    gloss.terms.forEach(t => {
      html += `
        <div class="glossary-item" data-term="${t.term.toLowerCase()}">
          <div class="glossary-term">${t.term}</div>
          <div class="glossary-def">${t.definition}</div>
          <div class="glossary-example">💡 Example: ${t.example}</div>
        </div>
      `;
    });

    html += '</div>';
    return html;
  }

  // ============================================================
  // SIMULATOR
  // ============================================================
  function renderSimulator(){
    return `
      <h1>📊 Portfolio Simulator</h1>
      <p>Simulate different portfolio allocations and see potential long-term outcomes.</p>

      <div class="grid g2" style="margin-top: 24px;">
        <div class="calc-section">
          <h3>Portfolio Settings</h3>
          <div class="form-group">
            <label class="form-label">Initial Investment</label>
            <input type="number" id="simInitial" value="10000" min="1000" step="1000">
          </div>
          <div class="form-group">
            <label class="form-label">Stock Allocation (%)</label>
            <input type="range" id="simStocks" min="0" max="100" value="60"
              oninput="this.nextElementSibling.textContent = this.value + '%'">
            <span>60%</span>
          </div>
          <div class="form-group">
            <label class="form-label">Years to Invest</label>
            <input type="number" id="simYears" value="30" min="1" max="60">
          </div>
          <button class="btn" onclick="app.runSimulation()">Run Simulation</button>
        </div>

        <div class="calc-section">
          <h3>Results</h3>
          <div id="simResults" style="min-height: 200px;">Run a simulation to see results</div>
        </div>
      </div>
    `;
  }

  // ============================================================
  // EVENT LISTENERS & INTERACTIONS
  // ============================================================
  function attachEventListeners(id){
    // Tabs
    $$('.tab-btn').forEach(btn => {
      btn.onclick = () => {
        const tabNum = btn.dataset.tab;
        $$('.tab-btn').forEach(b => b.classList.remove('active'));
        $$('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        $$('.tab-content')[tabNum]?.classList.add('active');
      };
    });

    // Mark complete
    $$('.mark-complete').forEach(btn => {
      btn.onclick = () => {
        const lessonId = btn.dataset.id;
        if(!state.completedLessons.includes(lessonId)){
          state.completedLessons.push(lessonId);
          localStorage.setItem('completedLessons', JSON.stringify(state.completedLessons));
          updateProgress();
          btn.textContent = '✓ Completed!';
          btn.disabled = true;
        }
      };
    });

    // Glossary search
    const searchInput = $('glossarySearch');
    if(searchInput){
      searchInput.oninput = (e) => {
        const query = e.target.value.toLowerCase();
        $$('.glossary-item').forEach(item => {
          item.style.display = item.dataset.term.includes(query) ? 'block' : 'none';
        });
      };
    }

    // Calculators
    if(id === 'calculators'){
      renderCalculatorUI();
    }
  }

  function renderCalculatorUI(){
    const calc = DATA.lessons.calculators;

    // Compound Interest Calculator
    const compoundDiv = $('calc-compound-interest');
    if(compoundDiv){
      compoundDiv.innerHTML = `
        <div class="form-group">
          <label class="form-label">Initial Investment: $<span id="principalVal">10000</span></label>
          <input type="number" id="principal" value="10000" min="0" step="1000">
        </div>
        <div class="form-group">
          <label class="form-label">Annual Return: <span id="rateVal">7</span>%</label>
          <input type="range" id="rate" min="0" max="20" value="7" step="0.5">
        </div>
        <div class="form-group">
          <label class="form-label">Years: <span id="yearsVal">30</span></label>
          <input type="range" id="years" min="1" max="60" value="30">
        </div>
        <div class="form-group">
          <label class="form-label">Annual Contribution: $<span id="contribVal">5000</span></label>
          <input type="number" id="contribution" value="5000" min="0" step="1000">
        </div>
        <button class="btn" onclick="app.calculateCompound()">Calculate</button>
        <div id="compoundResult"></div>
      `;

      ['principal', 'rate', 'years', 'contribution'].forEach(id => {
        const el = $(id);
        el.oninput = () => {
          $(id + 'Val').textContent = el.value;
        };
      });
    }

    // Stock Profit Calculator
    const stockDiv = $('calc-stock-profit');
    if(stockDiv){
      stockDiv.innerHTML = `
        <div class="form-group">
          <label class="form-label">Purchase Price: $<span id="buyPriceVal">50</span></label>
          <input type="number" id="buyPrice" value="50" min="0.01" step="0.01">
        </div>
        <div class="form-group">
          <label class="form-label">Sell Price: $<span id="sellPriceVal">75</span></label>
          <input type="number" id="sellPrice" value="75" min="0.01" step="0.01">
        </div>
        <div class="form-group">
          <label class="form-label">Shares: <span id="sharesVal">100</span></label>
          <input type="number" id="shares" value="100" min="1" step="1">
        </div>
        <div class="form-group">
          <label class="form-label">Commission: $<span id="commissionVal">10</span></label>
          <input type="number" id="commission" value="10" min="0" step="1">
        </div>
        <button class="btn" onclick="app.calculateStock()">Calculate</button>
        <div id="stockResult"></div>
      `;

      ['buyPrice', 'sellPrice', 'shares', 'commission'].forEach(id => {
        const el = $(id);
        el.oninput = () => {
          $(id + 'Val').textContent = el.value;
        };
      });
    }

    // Dividend Income Calculator
    const divDiv = $('calc-dividend-income');
    if(divDiv){
      divDiv.innerHTML = `
        <div class="form-group">
          <label class="form-label">Investment: $<span id="investVal">50000</span></label>
          <input type="number" id="investment" value="50000" min="0" step="1000">
        </div>
        <div class="form-group">
          <label class="form-label">Dividend Yield: <span id="yieldVal">3.5</span>%</label>
          <input type="range" id="yield" min="0" max="10" value="3.5" step="0.1">
        </div>
        <button class="btn" onclick="app.calculateDividend()">Calculate</button>
        <div id="dividendResult"></div>
      `;

      $('yield').oninput = function(){
        $('#yieldVal').textContent = this.value;
      };
    }
  }

  // ============================================================
  // CALCULATIONS
  // ============================================================
  window.app = {
    calculateCompound(){
      const principal = parseFloat($('principal').value);
      const rate = parseFloat($('rate').value) / 100;
      const years = parseInt($('years').value);
      const contribution = parseFloat($('contribution').value);

      let total = principal;
      for(let i = 0; i < years; i++){
        total = total * (1 + rate) + contribution;
      }

      const totalContributed = principal + (contribution * years);
      const gain = total - totalContributed;

      $('compoundResult').innerHTML = `
        <div class="calc-result" style="margin-top: 16px;">
          <div class="calc-result-label">Final Amount</div>
          <div class="calc-result-value">$${total.toLocaleString('en-US', {maximumFractionDigits: 0})}</div>
          <div style="font-size: 12px; color: var(--text-light); margin-top: 12px;">
            Contributed: $${totalContributed.toLocaleString()}<br>
            Investment Gain: $${gain.toLocaleString('en-US', {maximumFractionDigits: 0})}
          </div>
        </div>
      `;
    },

    calculateStock(){
      const buyPrice = parseFloat($('buyPrice').value);
      const sellPrice = parseFloat($('sellPrice').value);
      const shares = parseInt($('shares').value);
      const commission = parseFloat($('commission').value);

      const buyCost = (buyPrice * shares) + commission;
      const saleProceeds = (sellPrice * shares) - commission;
      const profit = saleProceeds - buyCost;
      const roi = ((profit / buyCost) * 100).toFixed(2);

      $('stockResult').innerHTML = `
        <div class="calc-result" style="margin-top: 16px;">
          <div class="calc-result-label">Profit/Loss</div>
          <div class="calc-result-value" style="color: ${profit >= 0 ? 'var(--success)' : 'var(--danger)'};">
            ${profit >= 0 ? '+' : ''}$${profit.toLocaleString('en-US', {maximumFractionDigits: 2})}
          </div>
          <div style="font-size: 12px; color: var(--text-light); margin-top: 12px;">
            ROI: ${roi}%<br>
            Initial Cost: $${buyCost.toLocaleString('en-US', {maximumFractionDigits: 2})}<br>
            Proceeds: $${saleProceeds.toLocaleString('en-US', {maximumFractionDigits: 2})}
          </div>
        </div>
      `;
    },

    calculateDividend(){
      const investment = parseFloat($('investment').value);
      const yield_ = parseFloat($('yield').value) / 100;

      const annualIncome = investment * yield_;
      const monthlyIncome = annualIncome / 12;

      $('dividendResult').innerHTML = `
        <div class="calc-result" style="margin-top: 16px;">
          <div class="calc-result-label">Annual Dividend Income</div>
          <div class="calc-result-value">$${annualIncome.toLocaleString('en-US', {maximumFractionDigits: 0})}</div>
          <div style="font-size: 12px; color: var(--text-light); margin-top: 12px;">
            Monthly Income: $${monthlyIncome.toLocaleString('en-US', {maximumFractionDigits: 2})}
          </div>
        </div>
      `;
    },

    runSimulation(){
      const initial = parseFloat($('simInitial').value);
      const stocks = parseFloat($('simStocks').value) / 100;
      const bonds = 1 - stocks;
      const years = parseInt($('simYears').value);

      // Historical average returns
      const stockReturn = 0.10; // 10% avg
      const bondReturn = 0.05;  // 5% avg

      let value = initial;
      for(let i = 0; i < years; i++){
        const return_ = (stocks * stockReturn) + (bonds * bondReturn);
        value *= (1 + return_);
      }

      const gain = value - initial;

      $('simResults').innerHTML = `
        <div class="stat-box" style="margin-bottom: 12px;">
          <div class="stat-label">Final Portfolio Value</div>
          <div class="stat-value">$${value.toLocaleString('en-US', {maximumFractionDigits: 0})}</div>
          <div class="stat-change positive">+$${gain.toLocaleString('en-US', {maximumFractionDigits: 0})}</div>
        </div>
        <div style="font-size: 13px; color: var(--text-light);">
          <p><strong>Portfolio:</strong> ${Math.round(stocks*100)}% stocks, ${Math.round(bonds*100)}% bonds</p>
          <p><strong>Time:</strong> ${years} years</p>
          <p><strong>Assumed Returns:</strong> 10% stocks, 5% bonds (historical averages)</p>
        </div>
      `;
    }
  };

  // ============================================================
  // PROGRESS TRACKING
  // ============================================================
  function updateProgress(){
    const totalLessons = Object.keys(DATA.lessons).filter(k => !['calculators', 'glossary'].includes(k)).length;
    const completed = state.completedLessons.length;
    state.progress = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

    $('progPct').textContent = state.progress + '%';
    $('progBar').style.width = state.progress + '%';
  }

  // ============================================================
  // START APP
  // ============================================================
  // Initialize immediately (scripts are at end of body so DOM is ready)
  init();
})();
