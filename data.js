const DATA = {
  nav: [
    { group: "Fundamentals", items: [
      { id: "home", label: "Home", ico: "🏠", tier: "beginner" },
      { id: "stocks-101", label: "Stocks Masterclass", ico: "📈", tier: "beginner" },
      { id: "bonds-101", label: "Bonds Masterclass", ico: "💵", tier: "beginner" },
      { id: "mutual-funds", label: "Funds & ETFs", ico: "🎯", tier: "beginner" },
    ]},
    { group: "Intermediate", items: [
      { id: "portfolio", label: "Portfolio Building", ico: "🏗️", tier: "intermediate" },
      { id: "asset-allocation", label: "Asset Allocation", ico: "⚖️", tier: "intermediate" },
      { id: "risk-return", label: "Risk & Return", ico: "⚠️", tier: "intermediate" },
      { id: "diversification", label: "Diversification", ico: "🌍", tier: "intermediate" },
    ]},
    { group: "Advanced", items: [
      { id: "options-101", label: "Options 101", ico: "🎲", tier: "advanced" },
      { id: "technical-analysis", label: "Technical Analysis", ico: "📊", tier: "advanced" },
      { id: "market-cycles", label: "Market Cycles", ico: "🔄", tier: "advanced" },
      { id: "behavioral-finance", label: "Behavioral Finance", ico: "🧠", tier: "advanced" },
    ]},
    { group: "Tools", items: [
      { id: "calculators", label: "Calculators", ico: "🧮", tier: "beginner" },
      { id: "glossary", label: "Glossary (50+)", ico: "📚", tier: "beginner" },
      { id: "simulator", label: "Simulator", ico: "🎮", tier: "intermediate" },
    ]}
  ],

  lessons: {
    "stocks-101": {
      title: "Stocks: Complete A-Z",
      icon: "📈",
      tier: "beginner",
      sections: [
        {
          title: "Stock Ownership (Foundation)",
          content: `<p><strong>Definition:</strong> A stock is a unit of ownership in a corporation. Own 100 Apple shares = own 100/15.5B = 0.000000646% of Apple.</p>
            <h4>Why Companies Issue Stocks</h4><ul><li>Raise capital for expansion</li><li>Fund R&D and operations</li><li>Build credibility</li><li>Pay employees with equity</li></ul>
            <h4>Stock Exchanges</h4><p><strong>NYSE (New York Stock Exchange):</strong> 2,800+ companies, $28T+ market cap, Blue chips (Apple, JP Morgan, Coca-Cola)</p>
            <p><strong>NASDAQ:</strong> 3,200+ companies, $19T+ market cap, Tech-heavy (Google, Amazon, Tesla, Meta)</p>
            <p><strong>Others:</strong> LSE (London), TSE (Tokyo), SSE (Shanghai), ASX (Australia)</p>`
        },
        {
          title: "Stock Pricing Mechanics",
          content: `<h4>Supply & Demand</h4><p>More buyers than sellers → price up. More sellers than buyers → price down.</p>
            <h4>Price Drivers (Ranked by Importance)</h4>
            <table class="data-table"><tr><th>Driver</th><th>Impact</th><th>Example</th></tr>
            <tr><td>1. Earnings</td><td>30%</td><td>Strong earnings surprise → +5-10% stock jump</td></tr>
            <tr><td>2. Growth prospects</td><td>25%</td><td>New product success → valuation expansion</td></tr>
            <tr><td>3. Market sentiment</td><td>20%</td><td>Bull market → all stocks up</td></tr>
            <tr><td>4. Economic factors</td><td>15%</td><td>Interest rates up → stock valuations down</td></tr>
            <tr><td>5. News/events</td><td>10%</td><td>CEO scandal → immediate selloff</td></tr></table>
            <h4>Real Example: Apple Stock</h4><p>Price movement: $73 (2019) → $177 (2021) → $150 (2023) → $180 (2024)</p>
            <p><strong>Why?</strong> iPhone growth, services expansion, strong earnings, macro interest rate changes</p>`
        },
        {
          title: "Dividends (Detailed)",
          content: `<h4>Cash Dividends Explained</h4><p>Microsoft pays $2.72/year ($0.68 quarterly). Own 100 shares = $272/year = $68/quarter income.</p>
            <h4>Key Metrics</h4><ul>
            <li><strong>Dividend Yield:</strong> Annual dividend ÷ stock price. Example: $2.72 ÷ $310 = 0.88%</li>
            <li><strong>Payout Ratio:</strong> Dividends ÷ earnings. 40% ratio = 40% paid, 60% reinvested</li>
            <li><strong>Dividend Growth Rate:</strong> Year-over-year increase. Example: $2.50 → $2.72 = 8.8% growth</li>
            </ul><h4>Dividend Aristocrats</h4><p>Companies increasing dividends 25+ consecutive years: Procter & Gamble (67 years), Coca-Cola (61 years), Johnson & Johnson (61 years)</p>
            <h4>Ex-Dividend Date (Critical)</h4><p>Last day to own stock to receive dividend. Miss this date = miss the payment. Stock price drops by dividend amount on this date.</p>`
        },
        {
          title: "Stock Types & Classification",
          content: `<h4>By Market Cap Size</h4>
            <table class="data-table"><tr><th>Type</th><th>Cap Range</th><th>Volatility</th><th>Examples</th></tr>
            <tr><td>Mega-Cap</td><td>$200B+</td><td>10-15%</td><td>Apple, Microsoft</td></tr>
            <tr><td>Large-Cap</td><td>$10B-200B</td><td>15-20%</td><td>Nike, Disney</td></tr>
            <tr><td>Mid-Cap</td><td>$2B-10B</td><td>25-35%</td><td>Zoom, Square</td></tr>
            <tr><td>Small-Cap</td><td>$300M-2B</td><td>40-60%</td><td>Emerging companies</td></tr>
            </table>
            <h4>By Investment Style</h4><p><strong>Growth Stocks:</strong> High growth (20-50%/year), no dividends, volatile. Examples: Tesla, Nvidia, Amazon</p>
            <p><strong>Value Stocks:</strong> Trading below intrinsic value, 2-4% dividends, stable. Examples: Banks, utilities</p>
            <p><strong>Dividend Stocks:</strong> High yields (2-5%), stable earnings. Examples: Coca-Cola, Procter & Gamble</p>
            <p><strong>Defensive Stocks:</strong> Stable in recessions. Examples: Healthcare, utilities, consumer staples</p>
            <h4>By Sector</h4><p>Technology (0-1% yield), Healthcare (1-3%), Financials (2-4%), Energy (3-5%), Utilities (3-4%)</p>`
        },
        {
          title: "Stock Analysis Metrics",
          content: `<h4>P/E Ratio (Price-to-Earnings)</h4><p><strong>Formula:</strong> Stock Price ÷ EPS (Earnings Per Share)</p>
            <p>What it means: How much you pay for each $1 of earnings. Low = cheap, high = expensive.</p>
            <ul><li>P/E < 12: Undervalued</li><li>P/E 15-20: Fair value</li><li>P/E > 30: Growth premium</li><li>P/E > 50: Speculative</li></ul>
            <h4>PEG Ratio</h4><p><strong>Formula:</strong> P/E ÷ Earnings Growth Rate</p><p>Better than P/E because it considers growth. PEG < 1 = undervalued growth</p>
            <h4>Free Cash Flow</h4><p><strong>Why it matters:</strong> Actual cash available for dividends and buybacks, not accounting tricks</p>
            <h4>Return on Equity (ROE)</h4><p><strong>Formula:</strong> Net Income ÷ Shareholder Equity</p>
            <p>How efficiently company generates profits. ROE > 15% = excellent</p>
            <h4>Debt-to-Equity</h4><p><strong>Formula:</strong> Total Debt ÷ Total Equity</p>
            <p>Low (<0.5) = safe. High (>2.0) = risky leverage</p>`
        }
      ]
    },

    "bonds-101": {
      title: "Bonds: Complete Masterclass",
      icon: "💵",
      tier: "beginner",
      sections: [
        {
          title: "Bond Fundamentals",
          content: `<h4>Core Concept</h4><p>Bond = You loan money to borrower. Borrower pays you interest (coupon) and returns principal at maturity.</p>
            <h4>Bond Components</h4><ul>
            <li><strong>Face Value:</strong> $1,000 (standard). Amount returned at maturity</li>
            <li><strong>Coupon Rate:</strong> 5% annually = $50/year payment (usually $25 semi-annually)</li>
            <li><strong>Maturity:</strong> 10 years. When you get principal back</li>
            <li><strong>Current Yield:</strong> Annual coupon ÷ current price. Bond trading at $950 = 5.26% yield</li>
            <li><strong>YTM (Yield to Maturity):</strong> Total return if held to maturity (most important)</li>
            </ul>`
        },
        {
          title: "How Interest Rates Affect Bonds",
          content: `<h4>The Inverse Relationship (CRITICAL)</h4>
            <p>You own: $1,000 bond paying 4% ($40/year)</p>
            <table class="data-table"><tr><th>Scenario</th><th>New Bonds Pay</th><th>Your Bond Worth</th><th>Why</th></tr>
            <tr><td>Rates rise to 6%</td><td>$60/year</td><td>$667</td><td>Your $40 less attractive</td></tr>
            <tr><td>Rates fall to 2%</td><td>$20/year</td><td>$2,000</td><td>Your $40 more attractive</td></tr>
            <tr><td>Rates stay 4%</td><td>$40/year</td><td>$1,000</td><td>Par value</td></tr>
            </table>
            <h4>Duration Impact</h4><p>Long-term bonds = more price volatile. 30-year bond drops 15%+ if rates rise 1%. 2-year bond drops <2%</p>`
        },
        {
          title: "Bond Types Complete Guide",
          content: `<h4>Government Bonds (Safest)</h4>
            <table class="data-table"><tr><th>Type</th><th>Maturity</th><th>Current Yield (2024)</th><th>Use</th></tr>
            <tr><td>T-Bills</td><td><1 year</td><td>5.38%</td><td>Short-term safety</td></tr>
            <tr><td>T-Notes</td><td>2-10 yr</td><td>4.27-4.81%</td><td>Balanced income</td></tr>
            <tr><td>T-Bonds</td><td>20-30 yr</td><td>4.39%</td><td>Long-term income</td></tr>
            <tr><td>TIPS</td><td>5-30 yr</td><td>2.1%+inflation</td><td>Inflation protection</td></tr>
            </table>
            <h4>Corporate Bonds</h4><p><strong>Investment Grade (BBB+):</strong> Yield = Treasury + 1-2%. Safe</p>
            <p><strong>High-Yield (BB or lower):</strong> Yield = Treasury + 4-8%+. Risky</p>
            <h4>Municipal Bonds</h4><p>Tax-free interest income. Yields 3-4%, tax-free = equivalent to 4-6% taxable</p>`
        },
        {
          title: "Credit Ratings Explained",
          content: `<h4>Rating Scale & Risk</h4>
            <table class="data-table"><tr><th>Rating</th><th>Grade</th><th>Risk</th><th>Typical Yield</th></tr>
            <tr><td>AAA/Aaa</td><td>Best</td><td>Minimal</td><td>Treasury + 0.5%</td></tr>
            <tr><td>A/A</td><td>Good</td><td>Low</td><td>Treasury + 1.5%</td></tr>
            <tr><td>BBB/Baa</td><td>Adequate</td><td>Moderate</td><td>Treasury + 2.5%</td></tr>
            <tr><td>BB/Ba</td><td>Speculative</td><td>High</td><td>Treasury + 4%</td></tr>
            <tr><td>B/B</td><td>Very risky</td><td>Very High</td><td>Treasury + 6%+</td></tr>
            </table>
            <h4>Understanding Downgrades</h4><p>Rating agency reduces rating → investors demand higher yield → bond price falls. Example: From A to BBB could drop 10-20%</p>`
        }
      ]
    },

    "mutual-funds": {
      title: "Funds & ETFs: Deep Dive",
      icon: "🎯",
      tier: "beginner",
      sections: [
        {
          title: "How Mutual Funds Work",
          content: `<h4>Step-by-Step Process</h4>
            <ol><li>You invest money</li>
            <li>Money pools with thousands of investors</li>
            <li>Professional manager buys stocks/bonds</li>
            <li>Returns generated (gains + dividends)</li>
            <li>Expenses deducted (typically 0.5-1.5%/year)</li>
            <li>Net returns paid to shareholders</li></ol>
            <h4>NAV (Net Asset Value)</h4><p><strong>Price per share:</strong> Total Assets ÷ Total Shares</p>
            <p>Example: $1B in assets, 50M shares = $20 NAV per share</p>`
        },
        {
          title: "Fund Types & Strategies",
          content: `<h4>Equity Funds</h4>
            <p><strong>Large-Cap Growth:</strong> Big companies, high growth (Apple, Microsoft). Volatility: Moderate-High</p>
            <p><strong>Large-Cap Value:</strong> Big companies, cheap valuation. Volatility: Low</p>
            <p><strong>Small-Cap Growth:</strong> Small companies, high potential. Volatility: Very High</p>
            <h4>Fixed Income Funds</h4>
            <p><strong>Government Bond:</strong> Treasury bonds, safest, lowest yield (2-3%)</p>
            <p><strong>Corporate Bond:</strong> Company bonds, moderate risk, 3-5% yield</p>
            <p><strong>High-Yield Bond:</strong> Junk bonds, risky, 5-8%+ yield</p>
            <h4>Index Funds (Passive)</h4>
            <table class="data-table"><tr><th>Fund</th><th>Tracks</th><th>Holdings</th><th>Fee</th></tr>
            <tr><td>VOO/IVV</td><td>S&P 500</td><td>500 largest US</td><td>0.03%</td></tr>
            <tr><td>VTI/VTSAX</td><td>Total US Market</td><td>3,500+ US</td><td>0.03%</td></tr>
            <tr><td>VTIAX</td><td>Total International</td><td>10,000+ foreign</td><td>0.08%</td></tr>
            <tr><td>BND</td><td>Total Bond Market</td><td>10,000+ bonds</td><td>0.03%</td></tr>
            </table>`
        },
        {
          title: "Active vs Passive Fees Impact",
          content: `<h4>Fee Comparison Over 30 Years</h4>
            <table class="data-table"><tr><th>Fund Type</th><th>Annual Fee</th><th>$10K Investment</th><th>30-Year Value</th></tr>
            <tr><td>Index Fund</td><td>0.03%</td><td>$10,000</td><td>$87,650</td></tr>
            <tr><td>Moderate Fee</td><td>0.50%</td><td>$10,000</td><td>$81,340</td></tr>
            <tr><td>Typical Active</td><td>1.00%</td><td>$10,000</td><td>$75,290</td></tr>
            <tr><td>High Fee</td><td>1.50%</td><td>$10,000</td><td>$69,540</td></tr>
            </table>
            <p><strong>Impact:</strong> 0.03% vs 1.5% = $18,110 difference! That's 26% of your wealth gone to fees.</p>
            <h4>Active Manager Reality</h4><p>80-90% of active funds underperform their index over 15+ years</p>`
        }
      ]
    },

    "calculators": {
      title: "Investment Calculators",
      icon: "🧮",
      tier: "beginner",
      isCalculator: true,
      content: `<p>Use these tools to understand investment concepts and make informed financial decisions.</p>`,
      calculators: [
        { id: "compound-interest", title: "Compound Interest Calculator", description: "See how money grows over time", inputs: [
          { label: "Initial Investment ($)", field: "principal", value: 10000 },
          { label: "Annual Return (%)", field: "rate", value: 7 },
          { label: "Years", field: "years", value: 30 },
          { label: "Annual Contribution ($)", field: "contribution", value: 5000 }
        ]},
        { id: "stock-profit", title: "Stock Profit/Loss Calculator", description: "Calculate gains or losses", inputs: [
          { label: "Purchase Price ($)", field: "buyPrice", value: 50 },
          { label: "Current Price ($)", field: "sellPrice", value: 75 },
          { label: "Shares", field: "shares", value: 100 },
          { label: "Commission ($)", field: "commission", value: 10 }
        ]},
        { id: "dividend-income", title: "Dividend Income Calculator", description: "Project passive income", inputs: [
          { label: "Investment Amount ($)", field: "investment", value: 50000 },
          { label: "Dividend Yield (%)", field: "yield", value: 3.5 }
        ]}
      ]
    },

    "glossary": {
      title: "Financial Glossary (50+ Terms)",
      icon: "📚",
      tier: "beginner",
      isGlossary: true,
      terms: [
        { term: "Asset", definition: "Anything of value you own", example: "Stocks, bonds, real estate, cash" },
        { term: "Beta", definition: "Stock volatility vs market average", example: "Beta 2.0 = twice as volatile as S&P 500" },
        { term: "Blue-Chip", definition: "Large, stable, established company", example: "Apple, Microsoft, Coca-Cola" },
        { term: "Bond", definition: "Loan you give, receive interest payments", example: "$1,000 bond paying 4% = $40/year" },
        { term: "Bull Market", definition: "Market rising with investor optimism", example: "2009-2021 bull market (12 years)" },
        { term: "Bear Market", definition: "Market down 20%+ from peak", example: "2020 COVID crash (35% drop in weeks)" },
        { term: "Capital Gain", definition: "Profit from selling investment higher", example: "Buy Apple at $100, sell at $150 = $50 gain" },
        { term: "Certificate of Deposit (CD)", definition: "Bank savings account with fixed rate", example: "$10,000 CD at 5% for 2 years" },
        { term: "Coupon", definition: "Interest payment on bond", example: "5% coupon on $1,000 bond = $50/year" },
        { term: "Dividend", definition: "Cash payment from company to shareholders", example: "Apple dividend: $0.96 per share quarterly" },
        { term: "Diversification", definition: "Spread investments across multiple assets", example: "60% stocks, 40% bonds, 10% real estate" },
        { term: "Dollar-Cost Averaging", definition: "Invest fixed amount regularly", example: "Invest $500 every month for 30 years" },
        { term: "DCA", definition: "See Dollar-Cost Averaging", example: "" },
        { term: "ETF", definition: "Exchange-Traded Fund (trades like stock)", example: "SPY tracks S&P 500, trades all day" },
        { term: "Equity", definition: "Stock ownership in company", example: "Own 100 Apple shares = equity ownership" },
        { term: "Fee", definition: "Cost charged by investment manager", example: "Index fund: 0.03%, Active fund: 1.0%" },
        { term: "FOMO", definition: "Fear Of Missing Out (investing bias)", example: "Buying crypto at peak due to FOMO" },
        { term: "Fundamental Analysis", definition: "Analyze company earnings, growth, etc.", example: "Research P/E ratio, revenue, profitability" },
        { term: "Futures", definition: "Contract to buy/sell at future price", example: "Oil futures contract, stock index futures" },
        { term: "Hedge Fund", definition: "Private fund using aggressive strategies", example: "High fee, high risk strategies" },
        { term: "Inflation", definition: "General rise in prices over time", example: "3% inflation = 3% less purchasing power" },
        { term: "IPO", definition: "Initial Public Offering (company goes public)", example: "Airbnb IPO Dec 2020, Facebook IPO 2012" },
        { term: "Liquidity", definition: "How quickly asset converts to cash", example: "Stocks = liquid, Real estate = illiquid" },
        { term: "Market Cap", definition: "Stock price × shares outstanding", example: "Apple: $180 × 15.5B = $2.8 trillion" },
        { term: "NAV", definition: "Net Asset Value (mutual fund price per share)", example: "Fund worth $1B, 50M shares = $20 NAV" },
        { term: "Options", definition: "Right to buy/sell at predetermined price", example: "Apple call option: buy at $180, strike" },
        { term: "P/E Ratio", definition: "Price-to-Earnings (valuation metric)", example: "Stock $150, EPS $5 = P/E 30x" },
        { term: "Portfolio", definition: "Your collection of investments", example: "My portfolio: 20 stocks, 5 bonds, 1 property" },
        { term: "Rebalancing", definition: "Restore target asset allocation", example: "Was 70/30 stocks/bonds, now 80/20, rebalance back" },
        { term: "ROI", definition: "Return on Investment (profit %)", example: "Invest $1,000, make $100 = 10% ROI" },
        { term: "SEC", definition: "Securities and Exchange Commission (regulator)", example: "Reviews IPOs, enforces securities laws" },
        { term: "Stock Split", definition: "Split shares to lower price per share", example: "1-for-2 split: 100 shares at $200 → 200 shares at $100" },
        { term: "Technical Analysis", definition: "Chart patterns and price trends", example: "Support/resistance levels, moving averages" },
        { term: "Volatility", definition: "How much price fluctuates", example: "Tech stocks: 30-40%, Utility stocks: 5-10%" },
        { term: "Yield", definition: "Annual income as % of value", example: "Bond paying $50 on $1,000 = 5% yield" },
        { term: "Asset Allocation", definition: "How you split portfolio (%stocks/bonds)", example: "60/40 = 60% stocks, 40% bonds" },
        { term: "Bid-Ask Spread", definition: "Difference between buy and sell price", example: "Stock bid $99.50, ask $99.60 = 10 cent spread" },
        { term: "Book Value", definition: "Assets minus liabilities per share", example: "Company: $10B assets, $2B debt, 1B shares = $8 book value" },
        { term: "Earnings Yield", definition: "Earnings as % of stock price", example: "Stock $100, EPS $5 = 5% earnings yield" },
        { term: "Ex-Dividend Date", definition: "Last day to own stock for dividend", example: "Miss this = miss the payment" },
        { term: "Growth Stock", definition: "High growth potential, no dividends", example: "Tesla, Nvidia, Amazon" },
        { term: "Index", definition: "Market benchmark (collection of stocks)", example: "S&P 500, Nasdaq 100, Russell 2000" },
        { term: "Inverse ETF", definition: "ETF that goes up when market down", example: "ProShares Inverse: up 10% when market down 10%" },
        { term: "Junk Bond", definition: "High-yield bond with default risk", example: "BB-rated bond paying 6-8% yield" },
        { term: "Long Position", definition: "Buying expecting price to go up", example: "Buy Apple stock for profit" },
        { term: "Margin", definition: "Borrowing money to invest", example: "Buy $10,000 stock with $5,000 cash + $5,000 margin" },
        { term: "Mutual Fund", definition: "Pooled investment managed by professional", example: "Vanguard S&P 500 Fund, Fidelity Growth" },
        { term: "Penny Stock", definition: "Microcap stock trading under $5", example: "OTC markets, very risky" },
        { term: "Profit Taking", definition: "Selling winners to lock in gains", example: "Stock up 30%, sell to avoid loss" }
      ]
    }
  }
};
