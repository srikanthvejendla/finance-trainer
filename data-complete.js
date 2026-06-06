const DATA = {
  nav: [
    { group: "Fundamentals", items: [
      { id: "home", label: "Home", ico: "🏠", tier: "beginner" },
      { id: "stocks-masterclass", label: "Stocks Masterclass", ico: "📈", tier: "beginner" },
      { id: "bonds-masterclass", label: "Bonds Masterclass", ico: "💵", tier: "beginner" },
      { id: "funds-etf-masterclass", label: "Funds & ETFs", ico: "🎯", tier: "beginner" },
    ]},
    { group: "Intermediate", items: [
      { id: "options-masterclass", label: "Options Complete", ico: "🎲", tier: "intermediate" },
      { id: "technical-analysis-complete", label: "Technical Analysis", ico: "📊", tier: "intermediate" },
      { id: "derivatives-complete", label: "Derivatives & Futures", ico: "🔗", tier: "intermediate" },
      { id: "portfolio-theory-complete", label: "Portfolio Theory", ico: "🏗️", tier: "intermediate" },
    ]},
    { group: "Advanced", items: [
      { id: "market-cycles-complete", label: "Market Cycles", ico: "🔄", tier: "advanced" },
      { id: "behavioral-finance-complete", label: "Behavioral Finance", ico: "🧠", tier: "advanced" },
      { id: "risk-management-complete", label: "Risk Management", ico: "⚠️", tier: "advanced" },
      { id: "quant-finance-complete", label: "Quantitative Finance", ico: "🔬", tier: "advanced" },
    ]},
    { group: "Professional", items: [
      { id: "valuation-models", label: "Valuation Models", ico: "💎", tier: "advanced" },
      { id: "trading-strategies", label: "Trading Strategies", ico: "📈", tier: "advanced" },
      { id: "credit-fixed-income", label: "Credit & Fixed Income", ico: "💳", tier: "advanced" },
      { id: "market-microstructure", label: "Market Microstructure", ico: "⚙️", tier: "advanced" },
    ]},
    { group: "Specialized", items: [
      { id: "crypto-blockchain", label: "Crypto & Blockchain", ico: "₿", tier: "advanced" },
      { id: "real-estate-alts", label: "Real Estate & Alts", ico: "🏠", tier: "advanced" },
      { id: "international-markets", label: "International Markets", ico: "🌍", tier: "advanced" },
      { id: "retirement-tax", label: "Retirement & Tax", ico: "🎯", tier: "advanced" },
    ]},
    { group: "Tools", items: [
      { id: "calculators", label: "Calculators", ico: "🧮", tier: "beginner" },
      { id: "glossary", label: "Glossary (200+ Terms)", ico: "📚", tier: "beginner" },
      { id: "simulator", label: "Simulator", ico: "🎮", tier: "intermediate" },
    ]}
  ],

  lessons: {
    // ============================================================
    // STOCKS (Tier 1 - Complete from previous)
    // ============================================================
    "stocks-masterclass": {
      title: "Stocks Masterclass: From Beginner to Professional",
      icon: "📈",
      sections: [
        { title: "BEGINNER: Stock Fundamentals", content: `<h4>What Is a Stock?</h4><p>Unit of ownership in corporation. 100 Apple shares = ownership stake. As company grows, your stake worth more.</p><h4>Why Companies Issue Stock</h4><ul><li>Raise capital for expansion</li><li>Fund operations and R&D</li><li>Execute acquisitions</li><li>Gain public market credibility</li><li>Employee compensation</li></ul><h4>Key Metrics</h4><table class="data-table"><tr><th>Metric</th><th>Formula</th><th>Example</th></tr><tr><td>Market Cap</td><td>Price × Shares Outstanding</td><td>$180 × 15.5B = $2.79T</td></tr><tr><td>P/E Ratio</td><td>Price ÷ EPS</td><td>$180 ÷ $6.05 = 29.8x</td></tr><tr><td>Dividend Yield</td><td>Dividend ÷ Price</td><td>$0.96 ÷ $180 = 0.53%</td></tr><tr><td>ROE</td><td>Net Income ÷ Equity</td><td>90%+ (exceptional)</td></tr></table><h4>Dividends</h4><p>Companies share profits with shareholders. Apple: $0.96/share × 1,000 = $960 annual income. Passive wealth building.</p>` },
        { title: "INTERMEDIATE: Markets and Valuation", content: `<h4>Stock Exchanges</h4><table class="data-table"><tr><th>Exchange</th><th>Companies</th><th>Character</th></tr><tr><td>NYSE</td><td>2,800+</td><td>Blue chips, traditional</td></tr><tr><td>NASDAQ</td><td>3,200+</td><td>Tech-heavy</td></tr></table><h4>Fundamental Metrics</h4><ul><li><strong>P/E Ratio:</strong> 12-15 cheap, 20-30 fair, 40+ expensive</li><li><strong>PEG Ratio:</strong> P/E ÷ growth rate (better than P/E)</li><li><strong>Price-to-Book:</strong> P/B < 1 = undervalued, >3 = expensive</li><li><strong>Free Cash Flow:</strong> Operating CF - CapEx (real cash available)</li></ul><h4>Apple Analysis</h4><ul><li>Price: $180, Market Cap: $2.79T (largest)</li><li>EPS: $6.05, P/E: 29.8x (premium justified by ecosystem)</li><li>ROE: 90%+ (generates enormous profit on shareholder money)</li><li>FCF: $110B/year (produces massive amounts of actual cash)</li></ul>` },
        { title: "ADVANCED: Valuation and Microstructure", content: `<h4>DCF (Discounted Cash Flow) Model</h4><p>Stock value = PV of all future cash flows. Formula: Stock = Σ(FCF_t / (1+WACC)^t) + Terminal Value</p><ul><li>WACC typical 8-12% (discount rate)</li><li>Terminal value often 60-70% of total</li><li>Apple DCF: $200-250/share depending on assumptions</li></ul><h4>Comparable Company Analysis</h4><p>Compare to peers. If Microsoft P/E 35x and similar growth, Google P/E 25x may be cheap.</p><h4>Bid-Ask Spreads and Market Makers</h4><p>NYSE average spread $0.01-0.05. Market makers (Citadel, Virtu) profit from spread. Large orders create price impact. Algorithmic execution slices orders to minimize this.</p><h4>Circuit Breakers</h4><p>S&P 500 down 7% = 15-min halt. Down 13% = another halt. Down 20% = market closes. Prevents panic crashes.</p>` }
      ]
    },

    // ============================================================
    // OPTIONS (Tier 1 - Complete from previous)
    // ============================================================
    "options-masterclass": {
      title: "Options Masterclass: Calls to Exotic Derivatives",
      icon: "🎲",
      sections: [
        { title: "BEGINNER: Calls and Puts", content: `<h4>Call Option (Right to Buy)</h4><p>Apple at $175, buy $180 call for $3. If stock goes to $200: profit $20 - $3 = $17 on $3 investment = 567% return!</p><h4>Put Option (Right to Sell)</h4><p>Apple at $185, buy $180 put for $2. If stock drops to $160: profit $20 - $2 = $18 on $2 = 900% return!</p><h4>Why Use Options</h4><ul><li>Leverage: Control 100 shares with small cost</li><li>Insurance: Buy puts to protect against loss</li><li>Income: Sell covered calls for monthly premiums</li></ul>` },
        { title: "INTERMEDIATE: Greeks and Strategies", content: `<h4>The Greeks (How Options React)</h4><table class="data-table"><tr><th>Greek</th><th>Measures</th><th>Range</th></tr><tr><td>Delta</td><td>Price sensitivity</td><td>0 to 1</td></tr><tr><td>Gamma</td><td>Delta change rate</td><td>0 to ~0.10</td></tr><tr><td>Theta</td><td>Time decay</td><td>-0.05 to -0.20</td></tr><tr><td>Vega</td><td>Volatility sensitivity</td><td>0 to ~0.20</td></tr></table><h4>Strategies</h4><ul><li><strong>Covered Call:</strong> Own stock, sell call. Generate monthly income.</li><li><strong>Protective Put:</strong> Own stock, buy put. Cap losses at put strike.</li><li><strong>Call Spread:</strong> Buy call, sell higher call. Limited risk/reward.</li><li><strong>Iron Condor:</strong> Sell puts below, calls above. Profit in range.</li></ul>` },
        { title: "ADVANCED: Pricing and Complex Strategies", content: `<h4>Black-Scholes Formula</h4><p>C = S×N(d1) - K×e^(-r×T)×N(d2). Factors: stock price, strike, time, volatility, rates. Volatility drives option prices most.</p><h4>Implied vs Realized Volatility</h4><ul><li>IV high, RV low = options overpriced (sell premium)</li><li>IV low, RV high = options underpriced (buy premium)</li></ul><h4>Advanced Strategies</h4><ul><li><strong>Straddle:</strong> Buy call + put at same strike. Profit from big moves either direction.</li><li><strong>Strangle:</strong> Buy OTM put + OTM call. Cheaper than straddle, need bigger move.</li><li><strong>Butterfly:</strong> Buy 1 call, sell 2 calls, buy 1 call. Profit in narrow range at expiration.</li><li><strong>LEAPS:</strong> 1-3 year options. Replicate stock ownership with less capital.</li></ul>` }
      ]
    },

    // ============================================================
    // BONDS (Tier 1 - Complete from previous)
    // ============================================================
    "bonds-masterclass": {
      title: "Bonds Masterclass: Fixed Income Mastery",
      icon: "💵",
      sections: [
        { title: "BEGINNER: Bond Basics", content: `<h4>What Is a Bond?</h4><p>Loan. You lend $1,000, receive $50/year (5% coupon), get $1,000 back in 10 years.</p><h4>Key Metrics</h4><ul><li>Face Value: $1,000 (what you get back)</li><li>Coupon: 5% = $50/year</li><li>Maturity: 10 years (when you get paid back)</li><li>Current Yield: $50 ÷ (current price)</li><li>YTM: Total return if held to maturity</li></ul><h4>THE INVERSE RELATIONSHIP (Critical)</h4><p>When interest rates go UP, bond prices go DOWN. You own 4% bond, new bonds pay 5%. Your bond worth less.</p>` },
        { title: "INTERMEDIATE: Bond Types and Metrics", content: `<h4>Government Bonds (Safest)</h4><table class="data-table"><tr><th>Type</th><th>Maturity</th><th>Yield</th></tr><tr><td>T-Bills</td><td><1 year</td><td>5.0-5.5%</td></tr><tr><td>T-Notes</td><td>2-10 years</td><td>4.0-5.0%</td></tr><tr><td>T-Bonds</td><td>20-30 years</td><td>4.2-5.0%</td></tr></table><h4>Corporate Bonds</h4><ul><li>Investment Grade (BBB+): Safe, yield 1-3% above Treasury</li><li>High-Yield (BB or lower): Risky, yield 4-10% above Treasury</li></ul><h4>Metrics</h4><ul><li>Duration: 8-year = 1% rate rise causes 8% price drop</li><li>Spread: Extra yield for risk. AAA 1%, BBB 2%, High-yield 6%+</li><li>Credit Rating: AAA (safest) to D (default)</li></ul>` },
        { title: "ADVANCED: Duration, Curves, and Derivatives", content: `<h4>Modified Duration</h4><p>Precise measure of bond price sensitivity. 8-year bond, 1% rate increase = 8% price drop. Critical for hedging.</p><h4>Yield Curve Shapes</h4><ul><li><strong>Normal (slopes up):</strong> Long bonds pay more (typical)</li><li><strong>Flat:</strong> All maturities same yield (uncertain economy)</li><li><strong>Inverted:</strong> Short > long yields (recession warning, 95%+ predictive)</li></ul><h4>Derivatives</h4><ul><li><strong>Credit Default Swaps:</strong> Buy insurance against default</li><li><strong>Bond Futures:</strong> Leverage bond price movements</li><li><strong>Interest Rate Swaps:</strong> Exchange fixed for floating payments</li><li><strong>Callable Bonds:</strong> Issuer can force redemption if rates fall</li></ul>` }
      ]
    },

    // ============================================================
    // TECHNICAL ANALYSIS (Tier 1)
    // ============================================================
    "technical-analysis-complete": {
      title: "Technical Analysis: Charts to Trading Signals",
      icon: "📊",
      sections: [
        { title: "BEGINNER: Charts and Basic Patterns", content: `<h4>Price Chart Types</h4><table class="data-table"><tr><th>Type</th><th>Best For</th><th>Interpretation</th></tr><tr><td>Candlestick</td><td>Most traders (standard)</td><td>Green=bullish, Red=bearish</td></tr><tr><td>Bar</td><td>Alternative view</td><td>Shows OHLC clearly</td></tr><tr><td>Line</td><td>Simple trends</td><td>Closing prices connected</td></tr></table><h4>Support and Resistance (Critical)</h4><ul><li><strong>Support:</strong> Price bounces up (buyers step in). Apple bounced off $165 five times = support.</li><li><strong>Resistance:</strong> Price bounces down (sellers step in). Apple failed above $185 five times = resistance.</li><li><strong>Breakout:</strong> Break above resistance on volume = strong signal.</li></ul><h4>Basic Patterns</h4><ul><li>Head & Shoulders: Reversal pattern, 95%+ success in trends</li><li>Double Top/Bottom: Price tests level twice, fails = reversal</li><li>Pennant: Flag after big move, breakout in same direction</li><li>Cup & Handle: U-shaped bottom, pulls back, breaks up (strong buy)</li></ul><h4>Moving Averages</h4><ul><li>50-day MA: Price above = uptrend, below = downtrend</li><li>200-day MA: Long-term trend. Above = bull market, below = bear</li><li>Golden Cross: 50-day crosses above 200-day = major bullish signal</li></ul>` },
        { title: "INTERMEDIATE: Indicators and Signals", content: `<h4>RSI (Relative Strength Index)</h4><p>Scale 0-100. RSI > 70 = overbought (pullback likely). RSI < 30 = oversold (bounce likely). Divergence (price new high, RSI doesn't) = reversal warning.</p><h4>MACD (Moving Average Convergence Divergence)</h4><ul><li>MACD line crosses ABOVE signal line = bullish</li><li>MACD crosses BELOW signal line = bearish</li><li>Growing MACD histogram = momentum increasing</li></ul><h4>Bollinger Bands</h4><p>Upper/lower bands around 20-day MA (2 std dev). Price touching upper band = normal in uptrend. Touching lower = bounce likely. Tight bands (squeeze) = explosion coming soon.</p><h4>Volume Analysis</h4><ul><li>High volume + price up = strong bullish</li><li>High volume + price down = strong bearish</li><li>Low volume + price up = weak (unsustainable)</li><li>Break support on high volume = real break, likely continues</li></ul>` },
        { title: "ADVANCED: Elliott Waves and Professional Systems", content: `<h4>Elliott Wave Theory</h4><p>Markets in 5-wave up, 3-wave down patterns. Wave 3 usually strongest. Wave 2 retraces 38-50% of wave 1. Reliable on major trends but complex to count.</p><h4>Ichimoku Cloud</h4><p>All-in-one indicator. Price above cloud = uptrend, below = downtrend. Cloud acts as support/resistance. Crossovers signal trend changes. Primarily used for major timeframes.</p><h4>Order Flow and Market Profile</h4><p>Buy vs sell volume at each price. Point of Control (POC) = most volume traded. High-volume nodes act as support/resistance. Professional traders use for precise entry/exit.</p><h4>Composite Signal System (70%+ win rate)</h4><ul><li>✓ Price above 200-day MA (uptrend)</li><li>✓ Price bounces off 50-day MA or support</li><li>✓ Breakout with 3x average volume</li><li>✓ RSI 40-60 (not overbought)</li><li>✓ MACD positive and rising</li><li>✓ Support level identified for stop-loss</li></ul>` }
      ]
    },

    // ============================================================
    // PORTFOLIO THEORY (Tier 1)
    // ============================================================
    "portfolio-theory-complete": {
      title: "Portfolio Theory: From Markowitz to AI Optimization",
      icon: "🏗️",
      sections: [
        { title: "BEGINNER: Diversification Fundamentals", content: `<h4>The Power of Correlation</h4><table class="data-table"><tr><th>Correlation</th><th>Meaning</th><th>Example</th></tr><tr><td>+1.0</td><td>Perfect positive</td><td>Identical stocks, no diversification benefit</td></tr><tr><td>0.5</td><td>Positive</td><td>Two tech stocks, some benefit</td></tr><tr><td>0.0</td><td>Uncorrelated</td><td>Tech + utility, excellent diversification</td></tr><tr><td>-1.0</td><td>Perfect negative</td><td>Stock + short stock, complete offset</td></tr></table><h4>Risk Reduction Magic</h4><ul><li>Stock A: 40% volatility</li><li>Stock B: 40% volatility</li><li>Average: 40%</li><li>Portfolio 50/50 with 0 correlation: 28% volatility (30% reduction!)</li></ul><h4>Diversification Types</h4><ul><li>Asset class: Stocks, bonds, real estate, commodities</li><li>Geographic: US, Europe, Asia, Emerging Markets</li><li>Sector: Tech, Healthcare, Finance, Energy, Consumer</li><li>Style: Growth, Value, Dividend</li><li>Size: Large, mid, small-cap</li></ul><h4>Age-Based Models</h4><ul><li>Age 25: 90% stocks / 10% bonds (aggressive growth)</li><li>Age 40: 70% stocks / 30% bonds (balanced)</li><li>Age 55: 50% stocks / 50% bonds (conservative)</li><li>Age 65+: 30% stocks / 70% bonds (income focused)</li></ul>` },
        { title: "INTERMEDIATE: Markowitz and CAPM", content: `<h4>Modern Portfolio Theory (Markowitz, 1952)</h4><p>Optimize portfolio variance while achieving target return. Mathematics: Portfolio Variance = Σ(w_i² × σ_i²) + 2×Σ(w_i × w_j × ρ_ij × σ_i × σ_j). Second term (correlation effects) reduces variance.</p><h4>Real Example: Optimal Portfolio</h4><ul><li>Stock A: 12% return, 20% volatility</li><li>Stock B: 15% return, 25% volatility</li><li>Correlation: 0.3</li><li>Optimal: 35% A + 65% B</li><li>Result: 13.95% return, only 17.2% volatility (vs 20-25%)</li></ul><h4>CAPM (Capital Asset Pricing Model)</h4><p>Expected Return = Rf + β(Rm - Rf)</p><ul><li>Rf = 4.5% (Treasury yield)</li><li>β = 1.2 (Apple volatility vs market)</li><li>Rm - Rf = 7% (market risk premium)</li><li>Expected return = 4.5% + 1.2(7%) = 12.9%</li></ul><h4>Fama-French Three-Factor Model</h4><p>Extends CAPM: Return = Rf + β_market(Market) + β_size(Size) + β_value(Value). Small-cap premium 3-5%/year. Value premium 4-6%/year.</p>` },
        { title: "ADVANCED: Multi-Factor Models and Risk Attribution", content: `<h4>Carhart Four-Factor (Adds Momentum)</h4><p>Momentum factor: Winning stocks keep winning 1-12 months. Premium ~1-2%/year. Creates powerful multi-factor model.</p><h4>Black-Litterman Model (Realistic Optimization)</h4><p>Problem: Markowitz produces extreme weights (100% small-cap value). Solution: Start with market weights, adjust for your views. Produces reasonable allocations.</p><h4>Risk Parity Portfolios</h4><p>Allocate by risk contribution, not dollars. Example: 30% stocks / 70% bonds (if stocks 2x more volatile). Both contribute equal risk. Smoother returns, less crash risk.</p><h4>Risk Attribution (Where Does Risk Come From?)</h4><ul><li>70% Factor risk (market beta exposure)</li><li>15% Sector risk (concentration in tech/finance)</li><li>10% Company risk (individual stock picking)</li><li>5% Other</li></ul><h4>Kelly Criterion (Optimal Betting)</h4><p>How much to invest with edge? f* = (p×b - q) / b. Example: 55% win rate, 1:1 payoff = 10% of bankroll per trade.</p>` }
      ]
    },

    // ============================================================
    // DERIVATIVES & FUTURES (Tier 1)
    // ============================================================
    "derivatives-complete": {
      title: "Derivatives & Futures: Leverage to Hedging",
      icon: "🔗",
      sections: [
        { title: "BEGINNER: Futures and Leverage", content: `<h4>Forwards vs Futures</h4><table class="data-table"><tr><th>Feature</th><th>Forwards</th><th>Futures</th></tr><tr><td>Exchange</td><td>OTC (private)</td><td>Standardized exchange</td></tr><tr><td>Counterparty Risk</td><td>High</td><td>None (exchange guarantees)</td></tr><tr><td>Settlement</td><td>At maturity</td><td>Daily mark-to-market</td></tr></table><h4>Leverage in Futures</h4><ul><li>S&P 500 at $5,000, ES contract = $250,000 value (50x multiplier)</li><li>Initial margin = $10,000 (2.5% margin)</li><li>S&P up 2% to $5,100 = $5,000 profit on $10,000 margin = 50% return!</li><li>S&P down 2% = $5,000 loss = margin call</li></ul><h4>Real Commodity Futures</h4><ul><li>Corn: 5,000 bushels, $4-6/bushel, farmers lock prices</li><li>Oil: 1,000 barrels, $60-120/barrel, high leverage, speculation</li><li>Gold: 100 troy ounces, $1,800-2,100/oz, inflation hedge</li></ul><h4>Uses</h4><ul><li><strong>Hedging:</strong> Farmer locks corn price before harvest (risk reduction)</li><li><strong>Speculation:</strong> Trader bets oil spikes on geopolitics (huge leverage)</li></ul>` },
        { title: "INTERMEDIATE: Swaps and Index Futures", content: `<h4>Index Futures (Control Entire Markets)</h4><ul><li><strong>ES (S&P 500):</strong> $50 × index value. $5,000 index = $250K contract value.</li><li><strong>NQ (Nasdaq-100):</strong> $20 × index. Tech-focused.</li><li><strong>ZB (30-year Bond):</strong> $1,000 × bond price. Inverse to rates (duration 8-10 years).</li></ul><h4>Interest Rate Swaps</h4><p>Company with fixed-rate debt (5%) wants floating. Swaps: pays LIBOR+1%, receives fixed 5%. Net: floating rate at LIBOR-4%. Hedges interest rate risk without refinancing.</p><h4>Currency Swaps</h4><p>US company needs euros, European company needs dollars. Swap $1B for €1B at spot rate. Periodically exchange interest. Lower borrowing costs than direct euro bond.</p><h4>Total Return Swaps</h4><p>Get all returns from asset (dividends + appreciation). Counterparty gets fixed interest. Leveraged exposure without margin requirements.</p>` },
        { title: "ADVANCED: Exotic Derivatives and Risk Management", content: `<h4>Knockout Options (Barrier Options)</h4><p>Standard call but disappears if stock hits barrier. Apple call, strike $180, barrier $195. If hits $195, option dies. Cheaper than vanilla call, limited upside.</p><h4>Lookback Options</h4><p>Payoff based on best price during period. Stock hits $150 then drops to $110. Payoff = $150 - strike (you get the high!). Very valuable, expensive.</p><h4>Swaptions (Options on Swaps)</h4><p>Right to enter swap at future date. Company uncertain on rates: buys payer swaption. If rates rise: exercise and pay fixed (saves money). If rates fall: don't exercise.</p><h4>Credit Default Swaps</h4><p>Buy insurance on bonds. Microsoft CDS: pay 0.1%/year, receive $10M if default. Market signal: widening spreads = increasing default risk.</p><h4>Volatility Derivatives</h4><ul><li>VIX Futures: $1,000 × VIX level. VIX 20 = $20K contract. Up to 25 = $5K profit on $2K margin (250% return!)</li><li>VIX Calls: Insurance against market spike.</li></ul><h4>Professional Hedging</h4><ul><li>Delta hedging: Short futures to offset portfolio delta</li><li>Tail risk hedging: Buy OTM puts for 0.2-0.5% cost, protects against 40-50% crash loss</li><li>Volatility hedging: Buy VIX futures when portfolio vulnerable</li></ul>` }
      ]
    },

    // ============================================================
    // MARKET CYCLES (Tier 1)
    // ============================================================
    "market-cycles-complete": {
      title: "Market Cycles: From Expansions to Crashes",
      icon: "🔄",
      sections: [
        { title: "BEGINNER: Business Cycles and Indicators", content: `<h4>The Four-Phase Cycle</h4><table class="data-table"><tr><th>Phase</th><th>Duration</th><th>Economy</th><th>Stocks</th></tr><tr><td>Expansion</td><td>2-3 years</td><td>GDP up, jobs up, inflation rising</td><td>Bull market, +15%/yr</td></tr><tr><td>Peak</td><td>1-3 months</td><td>Growth max, inflation peaks, rates rising</td><td>Peaks, volatility up</td></tr><tr><td>Contraction</td><td>1-2 years</td><td>GDP negative, unemployment up</td><td>Bear market, -30%</td></tr><tr><td>Trough</td><td>1-3 months</td><td>Worst conditions, rate cuts begin</td><td>Bottoms, fear max</td></tr></table><h4>Leading Indicators (6-12 months ahead)</h4><ul><li><strong>Initial Jobless Claims:</strong> Rising = slowdown coming</li><li><strong>Yield Curve:</strong> Inversion = recession warning (95%+ predictive)</li><li><strong>Consumer Sentiment:</strong> Declining = pullback coming</li><li><strong>Stock Market:</strong> Down 20% = pricing in recession</li></ul><h4>Current Conditions Indicators</h4><ul><li>GDP: 2-3% = healthy, 0% = recession</li><li>Unemployment: <4% = strong, >6% = weak</li><li>Retail Sales: Up = strong, down = weak</li><li>Manufacturing: PMI >50 = expanding, <50 = contracting</li></ul>` },
        { title: "INTERMEDIATE: Yield Curve and Credit Cycles", content: `<h4>Yield Curve Explained</h4><ul><li><strong>Normal (slopes up):</strong> 10-year 5%, 2-year 4%. Investors expect growth to continue.</li><li><strong>Flat:</strong> All yields same. Uncertainty about future.</li><li><strong>Inverted:</strong> 10-year 3.5%, 2-year 5%. Investors expect rates to fall (recession). 95% accurate recession predictor.</li></ul><h4>Credit Cycles</h4><p><strong>Expansion:</strong> Banks lend aggressively, junk spreads tight (2% above Treasury), credit growth 5-10%/year.</p><p><strong>Peak:</strong> All risky borrowers funded, spreads stop tightening, first defaults appear.</p><p><strong>Contraction:</strong> Defaults rise, banks tighten lending, spreads widen (junk 8-12%), asset prices collapse.</p><p><strong>Recovery:</strong> Defaults peak then decline, spreads tighten, lending resumes, assets stabilize.</p><h4>Historical Crashes</h4><ul><li><strong>2008:</strong> S&P 5001,576→676 (57% loss). Housing bubble, credit crisis, subprime defaults.</li><li><strong>2020:</strong> S&P 500 -34% in 23 days (fastest -30% ever). Pandemic lockdowns. Recovery in 4 months (policy response critical).</li><li><strong>2022:</strong> Fed raises rates 0%→4.5% in 9 months (fastest since 1980s). Bonds down 15%, stocks down 18%.</li></ul>` },
        { title: "ADVANCED: Austrian School and Geopolitical Risk", content: `<h4>Austrian Business Cycle Theory</h4><p>Cycles caused by credit expansion, not demand shocks. Central bank lowers rates → banks expand credit → entrepreneurs over-invest → bubble forms → bust → recession necessary for cleanup. Implications: Fighting recession with more stimulus delays/worsens crash.</p><h4>Debt Supercycles (50-75 years)</h4><p>Debt accumulates over decades, eventually must reduce via: (1) Austerity (deflationary, painful), (2) Default (destabilizing), or (3) Inflation (smooth but erodes savers).</p><h4>Sector Rotation (Cycle Timing)</h4><ul><li>Early expansion: Financials, materials, industrials (benefit from credit expansion)</li><li>Mid expansion: Consumer discretionary, tech (growth strongest)</li><li>Late expansion: Staples, healthcare, utilities (defensive rotation)</li><li>Contraction: Pharma, consumer staples (still buy food/medicine)</li><li>Recovery: Financials again (first to benefit)</li></ul><h4>Geopolitical Shocks</h4><p>Wars, trade wars, sanctions create temporary risk-off (stocks down, bonds up), but markets normalize after 3-6 months if contained. Spreads widen during uncertainty, normalize when resolved.</p>` }
      ]
    },

    // ============================================================
    // BEHAVIORAL FINANCE (Tier 2 - NEW)
    // ============================================================
    "behavioral-finance-complete": {
      title: "Behavioral Finance: Psychology of Markets",
      icon: "🧠",
      sections: [
        { title: "BEGINNER: Common Biases and Market Effects", content: `<h4>Loss Aversion (The #1 Bias)</h4><p>Humans feel losses 2x as strongly as gains. Own Apple at $200, drops to $150 = panic sell (avoiding more losses). If it was $150 initially and rose to $200, happy to hold. Same position, different psychology.</p><h4>Anchoring Bias</h4><p>First number you see becomes reference point. Apple highest: $185 → drops to $160 = "bargain" thinking. But might go to $100. Original price isn't anchor, intrinsic value is.</p><h4>Herding (Following the Crowd)</h4><p>Market rallies 30% → everyone buys (FOMO). Market crashes 30% → everyone sells (panic). Creates bubbles and crashes. 2000 tech bubble: everyone "knew" internet = future. 2008: everyone "knew" housing always up.</p><h4>Overconfidence Bias</h4><p>Most traders think they're above average. Study: 68% of drivers think they're better than median. Same with investors. Leads to excessive trading, overleveraging.</p><h4>Recency Bias</h4><p>Recent events dominate thinking. 2008 crash = sell everything! 2022 Fed tightening = bonds terrible! But good opportunities often come after bad recent events.</p>` },
        { title: "INTERMEDIATE: Market Anomalies and Patterns", content: `<h4>Momentum (Winners Keep Winning)</h4><p>Stocks up 20% in past 12 months tend to outperform next 12 months (contradiction with efficient markets). Premium ~1-2%/year. Behavioral explanation: slow information diffusion, underreaction to news.</p><h4>Mean Reversion (Extremes Reverse)</h4><p>All-time high stocks often pull back. All-time low stocks often bounce. Markets overshoot fundamentals, then correct.</p><h4>January Effect and Seasonal Patterns</h4><p>January often strong (year starts, small-cap buying). October often weak (tax-loss selling, Halloween effect). Not as strong now but still visible (~1-2% annual premium).</p><h4>Value Trap vs Value Opportunity</h4><p><strong>Value Trap:</strong> Stock cheap for good reason (deteriorating business, not undervalued).</p><p><strong>Value Opportunity:</strong> Stock cheap but business improving (undervalued). Requires deep analysis to distinguish.</p><h4>Growth Trap</h4><p>Expensive stock where growth disappoints. Amazon 2022: traded 60x earnings, lost 50% when growth moderated.</p>` },
        { title: "ADVANCED: Prospect Theory and Market Psychology", content: `<h4>Prospect Theory (Nobel Prize, Kahneman & Tversky)</h4><p>Decisions based on reference points, not absolute outcomes. Same 50% loss feels worse than 50% gain feels good. Creates asymmetric behavior (risk-seeking in losses, risk-averse in gains).</p><h4>Mental Accounting</h4><p>Humans categorize money mentally. "Bonus money" treated differently than "salary" (spend bonus, save salary) even though economically identical. Affects portfolio decisions.</p><h4>Availability Heuristic</h4><p>Overweight recent/memorable events. Tech crash 2000 = tech stocks seem riskier than statistical evidence suggests. Plane crash = fear flying (though extremely safe).</p><h4>Sunk Cost Fallacy</h4><p>"I invested $10K, can't sell at $5K loss." But $10K already spent! Decision should be: keep or sell based on future, not past.</p><h4>Market Manias and Crashes</h4><ul><li>Tulip mania (1637): Dutch bulbs traded like stocks, 1000x rallies</li><li>Dotcom (2000): No-profit internet companies at $10B valuations</li><li>Housing (2008): "Housing always up" despite affordability data</li><li>Crypto (2017): "$10K Bitcoin guaranteed" with zero fundamentals</li></ul><h4>Trading Psychology</h4><ul><li>Overtrading: Excess trading due to overconfidence (costs fees, taxes)</li><li>Revenge trading: After losses, take bigger risks to recover (usually backfires)</li><li>Drawdown psychology: Difficult psychologically to hold during -30% declines</li><li>Discipline: Best traders have rules and follow them mechanically</li></ul>` }
      ]
    },

    // ============================================================
    // RISK MANAGEMENT (Tier 2 - NEW)
    // ============================================================
    "risk-management-complete": {
      title: "Risk Management: From VaR to Tail Risk",
      icon: "⚠️",
      sections: [
        { title: "BEGINNER: Risk Concepts and Measurement", content: `<h4>Risk vs Volatility</h4><ul><li><strong>Volatility:</strong> How much returns fluctuate (std dev). Apple 25% volatility = returns vary ±25% from average.</li><li><strong>Drawdown:</strong> Peak-to-trough loss. More relevant than volatility for investors.</li><li><strong>Risk:</strong> Possibility of permanent capital loss.</li></ul><h4>Risk Tolerance vs Risk Capacity</h4><ul><li><strong>Tolerance:</strong> Psychological comfort with losses. Can you sleep at -30% drawdown?</li><li><strong>Capacity:</strong> Financial ability to sustain losses. 25-year-old with 40 years to recovery: high capacity. 75-year-old: low capacity.</li></ul><h4>Max Drawdown (Critical Metric)</h4><p>Worst loss from peak to trough. S&P 500 2008: peak $1,576 → trough $676 = 57% max drawdown. Portfolio with 30% max drawdown seems safer than 50%.</p><h4>Position Sizing</h4><p>If stop-loss is 4% away and you risk max 2% of portfolio: position size = 2% / 4% = 0.5% of portfolio. Systematic sizing prevents blowups.</p>` },
        { title: "INTERMEDIATE: VaR, Stress Testing, and Hedging", content: `<h4>Value at Risk (VaR)</h4><p>Maximum loss at confidence level. 95% VaR = $100K means 95% chance portfolio won't lose more than $100K in one day. 5% chance could lose more.</p><ul><li>Historical VaR: Use past returns distribution</li><li>Parametric VaR: Assume normal distribution</li><li>Monte Carlo VaR: Simulate thousands of scenarios</li></ul><h4>Conditional Value at Risk (CVaR)</h4><p>Expected loss GIVEN you're in tail scenario. 95% CVaR = $150K means given worst 5% scenarios, average loss is $150K. More conservative than VaR.</p><h4>Stress Testing</h4><p>"What if" scenarios: What if rates rise 2%? What if market drops 20%? What if volatility doubles? Run portfolio through scenarios, calculate losses.</p><h4>Scenario Analysis</h4><p>Specific events: 2008-style financial crisis (what's your loss?), tech bubble pop, geopolitical shock. Helps identify exposures.</p><h4>Hedging Strategies</h4><ul><li><strong>Put protection:</strong> Buy OTM puts (costs 0.2-0.5%/year, saves 40-50% in crashes)</li><li><strong>Futures hedging:</strong> Short index futures to offset portfolio delta</li><li><strong>Volatility hedging:</strong> Buy VIX futures (spikes during crashes)</li><li><strong>Correlation hedging:</strong> Hold uncorrelated assets (bonds, gold, real estate)</li></ul>` },
        { title: "ADVANCED: Tail Risk, Copulas, and Portfolio Stress", content: `<h4>Tail Risk (Extreme Events)</h4><p>Probability of events beyond 3 standard deviations. Normal distribution says 3-sigma event happens once per 370 years. Reality: much more frequent (fat tails).</p><ul><li>Black Monday 1987: 22% single day (20+ sigma event)</li><li>2008 crisis: Multiple 10+ sigma events</li><li>COVID crash: 34% in 23 days</li></ul><h4>Copula Theory</h4><p>Pearson correlation breaks down in crashes (everything becomes correlated). Copulas model tail correlation structure. In -20% market: diversification fails, all stocks drop together.</p><h4>Drawdown Analysis (Professional)</h4><p>Not just max drawdown, analyze full distribution: How often 10% drawdowns? 20%? How long to recover? Nasdaq 2000: -78% loss, 15 years to recover. Understanding distribution critical.</p><h4>Expected Shortfall</h4><p>Average loss in worst 5% of scenarios. More useful than VaR because accounts for severity of tail events, not just probability.</p><h4>Counterparty Risk Management</h4><ul><li>Limit exposure to single counterparty</li><li>Post collateral daily (variation margin)</li><li>Central clearing removes counterparty risk</li><li>Credit default swaps price default probability</li></ul><h4>Professional Risk Governance</h4><ul><li>Define risk limits by position, factor, scenario</li><li>Monitor daily: VaR, Greeks, concentration</li><li>Escalate breaches immediately</li><li>Stress test portfolio weekly</li><li>Report tail risks to senior management</li></ul>` }
      ]
    },

    // ============================================================
    // QUANTITATIVE FINANCE (Tier 2 - NEW)
    // ============================================================
    "quant-finance-complete": {
      title: "Quantitative Finance: Mathematics of Markets",
      icon: "🔬",
      sections: [
        { title: "BEGINNER: Statistics and Distributions", content: `<h4>Normal Distribution (Bell Curve)</h4><p>Most data clusters around mean. 68% within 1 std dev, 95% within 2, 99.7% within 3. Financial returns NOT perfectly normal (fat tails), but often reasonable approximation.</p><h4>Standard Deviation (Volatility)</h4><p>Measure of dispersion. Apple: returns vary 25% from average. Bonds: returns vary 5% from average. Higher std dev = higher risk/potential return.</p><h4>Correlation and Covariance</h4><p>Correlation -1 to +1. Covariance includes variance. Both critical for portfolio risk: σ_p² = w_A²σ_A² + w_B²σ_B² + 2w_A w_B ρ_AB σ_A σ_B</p><h4>Skewness and Kurtosis</h4><ul><li>Skewness: Asymmetry (negative = left tail risk, positive = right tail opportunity)</li><li>Kurtosis: Tail thickness (high kurtosis = fat tails, more extreme events)</li></ul><h4>Z-Scores and Confidence Intervals</h4><p>Z = (X - mean) / std dev. Z > 2 = outside 95% confidence. Z > 3 = extreme outlier. Used for risk alerts.</p>` },
        { title: "INTERMEDIATE: Time Series and Modeling", content: `<h4>Stochastic Processes</h4><p>Random walk: Tomorrow's price = Today's price + random shock. Unpredictable by definition but follows mathematical patterns.</p><h4>Geometric Brownian Motion (GBM)</h4><p>dS = μS dt + σS dW. Describes stock price evolution. Parameters: μ (drift/expected return), σ (volatility), W (random shocks). Basis for Black-Scholes.</p><h4>Time Series Models</h4><ul><li><strong>ARIMA:</strong> Auto-regressive integrated moving average. Forecasts next value from past values.</li><li><strong>GARCH:</strong> Volatility clustering model. Volatility doesn't stay constant; spikes cluster together.</li><li><strong>VAR:</strong> Vector auto-regression. Multiple time series together (correlated variables).</li></ul><h4>Monte Carlo Simulation</h4><p>Generate 10,000 random price paths, calculate portfolio outcome distribution. Critical for derivatives pricing, portfolio analysis, stress testing. Advantage: handles complex portfolios, non-linear positions.</p><h4>Kalman Filter</h4><p>Estimate hidden state from noisy observations. Example: Estimate "true" stock value from noisy price data. Used in algorithmic trading to filter signal from noise.</p>` },
        { title: "ADVANCED: Stochastic Calculus and Machine Learning", content: `<h4>Ito's Lemma (Stochastic Chain Rule)</h4><p>If dS = μS dt + σS dW (GBM), what is df(S)? Ito's lemma gives answer, accounting for stochastic term. Critical for options pricing.</p><h4>Jump-Diffusion Models</h4><p>GBM + occasional jumps (crashes, gap events). Better represents reality than GBM alone. 2008, COVID, circuit breakers all create jumps.</p><h4>Black-Scholes-Merton Model</h4><p>Extends Black-Scholes with jump risk. Account for tail risk in option pricing. Options more expensive when jump probability high.</p><h4>Machine Learning in Finance</h4><ul><li><strong>Supervised Learning:</strong> Predict returns from historical features (200+ indicators). Random forests, neural networks outperform linear models.</li><li><strong>Classification:</strong> Predict up/down days or regime changes (bull/bear).</li><li><strong>Clustering:</strong> Identify market regimes (high vol, low vol, trending, ranging).</li></ul><h4>Reinforcement Learning for Trading</h4><p>Agent learns optimal trading actions through trial and error. Deep Q-networks beat traditional strategies in simulation. Challenge: overfitting to historical data, not generalizing to new market conditions.</p><h4>Natural Language Processing (NLP)</h4><p>Extract sentiment from news, earnings calls, social media. Sentiment scores predict short-term returns (negative news = price pressure). Used for algorithmic trading.</p><h4>Neural Networks for Price Prediction</h4><p>LSTM (long short-term memory) networks: Handle sequences, remember long-term patterns. Can capture non-linear relationships traditional models miss.</p>` }
      ]
    },

    // ============================================================
    // VALUATION MODELS (Tier 3 - NEW)
    // ============================================================
    "valuation-models": {
      title: "Valuation Models: From DCF to Scenarios",
      icon: "💎",
      sections: [
        { title: "BEGINNER: Valuation Basics", content: `<h4>Intrinsic Value vs Market Price</h4><p>Intrinsic value: What investment is truly worth (based on fundamentals). Market price: What others willing to pay. Gap = opportunity (undervalued or overvalued).</p><h4>Simple Multiples Approach</h4><table class="data-table"><tr><th>Multiple</th><th>Formula</th><th>Interpretation</th></tr><tr><td>P/E</td><td>Price ÷ EPS</td><td>Pay $30 per $1 earnings</td></tr><tr><td>P/B</td><td>Price ÷ Book Value</td><td>Pay $3 per $1 assets</td></tr><tr><td>P/S</td><td>Price ÷ Sales</td><td>Pay $2 per $1 revenue</td></tr><tr><td>EV/EBITDA</td><td>(Market Cap + Debt - Cash) ÷ EBITDA</td><td>More comprehensive than P/E</td></tr></table><h4>Comparable Company Analysis</h4><p>Find peer companies, calculate their multiples, apply to target company. Microsoft P/E 35x, Google similar growth = Google P/E 25x might be cheap relative to peers.</p><h4>Dividend Discount Model (Simple)</h4><p>Stock value = Annual dividend / (Required return - growth rate). If dividend $2, required return 10%, growth 3%: Value = $2 / (0.10 - 0.03) = $28.57</p>` },
        { title: "INTERMEDIATE: DCF and Advanced Methods", content: `<h4>Discounted Cash Flow (DCF) - The Gold Standard</h4><p>Formula: Stock Value = Σ(Free Cash Flow_t / (1+WACC)^t) + Terminal Value / (1+WACC)^n</p><ul><li>Project FCF for 5-10 years</li><li>Calculate WACC (weighted cost of debt and equity)</li><li>Terminal value: assumes perpetual growth (usually 2-3%)</li><li>Discount all to present</li></ul><h4>Real Example: Apple DCF</h4><ul><li>Project FCF next 10 years: $120B, $130B, $140B... (growing at 5%)</li><li>WACC 9% (cost of capital)</li><li>Terminal value: Year 10 FCF × (1+3%) / (9% - 3%) = $2.1 trillion</li><li>DCF sum: All discounted FCF + terminal value = $250-300B (=value)</li><li>With $2.79T market cap, Apple appears fully valued</li></ul><h4>Sensitivity Analysis</h4><p>DCF sensitive to WACC and terminal growth. Test scenarios: WACC 8-10%, growth 2-4%. Build valuation range, not point estimate.</p><h4>Sum-of-the-Parts (SOTP) Valuation</h4><p>Diversified company: Value each business separately, sum. Google: Search $150B, YouTube $50B, Cloud $15B, Other $10B = $225B (vs market cap)</p><h4>Precedent Transactions</h4><p>What did similar companies sell for? If Google bought YouTube for $1.65B, and similar video platform exists, value = $1-2B range. Real-world price data.</p>` },
        { title: "ADVANCED: Real Options and Scenario Analysis", content: `<h4>Real Options Valuation</h4><p>Companies have strategic options: Expand, contract, wait, abandon. Option value = value of flexibility. Traditional DCF underestimates value of optionality.</p><p>Example: Oil company with resource. Can extract now ($100M NPV) or wait (options: prices rise, better technology, sell to competitor). Waiting value not captured in static DCF.</p><h4>Residual Income Model</h4><p>Value = Book Value + PV of Future Excess Returns. Better for companies with high return on equity. Apple: $80B book value + PV(ROE above cost of capital) = $250B value.</p><h4>Contingent Claim Analysis</h4><p>Equity as call option on assets. Company value = Assets. Debt holders own bonds, equity holders own "call option" on assets above debt level. In bankruptcy, option worthless.</p><h4>Multi-Scenario Valuation</h4><ul><li><strong>Bull case:</strong> 30% probability, $300B value</li><li><strong>Base case:</strong> 50% probability, $200B value</li><li><strong>Bear case:</strong> 20% probability, $100B value</li><li>Expected value: 0.30($300B) + 0.50($200B) + 0.20($100B) = $200B</li></ul><h4>Monte Carlo Valuation</h4><p>Run 10,000 scenarios with random inputs (growth rates, margins, WACC). Output: probability distribution of values, not point estimate. Shows valuation uncertainty.</p>` }
      ]
    },

    // ============================================================
    // TRADING STRATEGIES (Tier 3 - NEW)
    // ============================================================
    "trading-strategies": {
      title: "Trading Strategies: From Buy-and-Hold to Algorithmic",
      icon: "📈",
      sections: [
        { title: "BEGINNER: Basic Strategies", content: `<h4>Buy-and-Hold (Index Investing)</h4><p>Buy index fund (S&P 500), hold 30 years. Historical return ~10%/year. Beats 90% of active managers. Best for most people (simplicity, lower costs).</p><h4>Dollar-Cost Averaging (DCA)</h4><p>Invest fixed amount monthly ($1,000) regardless of price. Automatically buy more when price low, less when high. Reduces timing risk. Example: $1,000/month × 30 years = $1M+ portfolio despite crashes.</p><h4>Value Investing (Buffett Approach)</h4><ul><li>Buy undervalued companies (trading below intrinsic value)</li><li>Margin of safety: Buy at 50% of fair value</li><li>Long holding period (5-10+ years)</li><li>Focus on quality (low debt, high returns)</li></ul><h4>Growth Investing</h4><ul><li>Buy fast-growing companies (20%+ annual growth)</li><li>Higher P/E ratios justified by growth</li><li>Willing to pay premium for future earnings</li><li>Higher risk if growth slows</li></ul><h4>Dividend Investing</h4><ul><li>Focus on dividend-paying stocks</li><li>Building passive income stream</li><li>Lower volatility (dividend stocks defensive)</li><li>Reinvest dividends for compound growth</li></ul>` },
        { title: "INTERMEDIATE: Tactical Strategies", content: `<h4>Momentum Trading (Trend Following)</h4><p>Buy stocks up 20%+ last 12 months (winners keep winning). Hold 3-12 months, sell when momentum peaks. Historical premium: 1-2%/year. Works best in bull markets.</p><h4>Mean Reversion (Contrarian)</h4><p>Buy stocks down 30%+ from highs (oversold). Sell when bounces back to normal. Opposite of momentum. Works in choppy markets, fails in strong trends.</p><h4>Pairs Trading (Statistical Arbitrage)</h4><p>Long stock A, short correlated stock B. Profit if correlation breaks. Example: Long Apple, short Microsoft. If tech sells off but Apple outperforms, profit.</p><h4>Sector Rotation (Cycle Timing)</h4><ul><li>Early cycle: Buy financials, materials (benefit from economic growth)</li><li>Mid cycle: Tech, discretionary (growth strong)</li><li>Late cycle: Staples, healthcare, utilities (defensive)</li><li>Downturn: Bonds, cash (wait for cycle bottom)</li></ul><h4>Merger Arbitrage</h4><p>Company A acquiring B: A trading $80, B trading $75, deal at $77. Buy B, short A: capture $2 spread as deal closes. Success depends on deal closing.</p>` },
        { title: "ADVANCED: Quantitative and Algorithmic Strategies", content: `<h4>Volatility Trading</h4><ul><li><strong>Long Vol:</strong> Buy straddles/strangles when IV low (before earnings). Sell when IV spikes.</li><li><strong>Short Vol:</strong> Sell spreads/iron condors when IV high. Collect premium decay (theta).</li><li><strong>Vol Mean Reversion:</strong> VIX > 30 = buy dips (historically bounces fast)</li></ul><h4>High-Frequency Trading (HFT)</h4><p>Trade thousands times per second for tiny profits. Requires: low-latency infrastructure (microsecond execution), statistical edge, economies of scale. Controversial due to flash crashes.</p><h4>Statistical Arbitrage</h4><p>Exploit statistical relationships between securities. If two stocks historically move together but diverge, trade closes gap. Requires sophisticated modeling, real-time execution.</p><h4>Market-Neutral Strategies</h4><ul><li>Long undervalued, short overvalued (offsetting risks)</li><li>Profit from relative moves, not market direction</li><li>Lower correlation to market (defensive)</li><li>Returns typically 5-12%/year with lower volatility</li></ul><h4>Machine Learning Strategies</h4><p>Train algorithms on historical data to predict price moves. Features: 200+ technical indicators, sentiment, options flow, order imbalances. Challenge: overfitting to past, not generalizing to future.</p><h4>Risk Management in Active Trading</h4><ul><li>Max loss per trade: 2% of account</li><li>Risk/reward minimum 1:2</li><li>Win rate needed: 40% with 1:2 ratio = profitable</li><li>Diversification: Trade multiple names, sectors</li><li>Record-keeping: Journal all trades, analyze results</li></ul>` }
      ]
    },

    // ============================================================
    // CREDIT & FIXED INCOME (Tier 3 - NEW)
    // ============================================================
    "credit-fixed-income": {
      title: "Credit Analysis: From Ratings to Default Prediction",
      icon: "💳",
      sections: [
        { title: "BEGINNER: Credit Ratings and Spreads", content: `<h4>Credit Rating Scale</h4><table class="data-table"><tr><th>Rating</th><th>Meaning</th><th>Probability Default (10-yr)</th><th>Yield Spread</th></tr><tr><td>AAA</td><td>Excellent</td><td><0.5%</td><td>Treasury + 0.5%</td></tr><tr><td>AA</td><td>Very Good</td><td>0.5-1%</td><td>Treasury + 1%</td></tr><tr><td>A</td><td>Good</td><td>1-3%</td><td>Treasury + 1.5%</td></tr><tr><td>BBB</td><td>Adequate (Investment Grade)</td><td>3-10%</td><td>Treasury + 2%</td></tr><tr><td>BB</td><td>Speculative (Junk)</td><td>10-20%</td><td>Treasury + 4%</td></tr><tr><td>B</td><td>Very Risky</td><td>20-40%</td><td>Treasury + 6%</td></tr><tr><td>CCC</td><td>Extremely Risky</td><td>40-70%</td><td>Treasury + 10%+</td></tr><tr><td>D</td><td>In Default</td><td>100%</td><td>Worthless</td></tr></table><h4>Credit Spread</h4><p>Extra yield over Treasury (compensation for risk). High-yield bond: 8%, Treasury: 4% = 400 basis point (bp) spread. Spreads widen in recessions, tighten in expansions.</p><h4>Investment Grade vs High-Yield</h4><ul><li>Investment Grade (AAA-BBB): Institutional-grade, lower yield but safer</li><li>High-Yield/Junk: Higher yield (5-10%) but default risk (10-20%+ probability)</li></ul>` },
        { title: "INTERMEDIATE: Bond Metrics and Analysis", content: `<h4>Yield to Maturity (YTM) Calculation</h4><p>Real return if held to maturity, accounting for purchase price, coupon, and face value. Discounted cash flow of bond. Bond bought at discount: YTM > coupon. At premium: YTM < coupon.</p><h4>Duration and Interest Rate Risk</h4><p>Macaulay duration: Average time to receive cash flows. Modified duration: percentage price change for 1% rate change. 10-year duration: 1% rate rise = 10% price drop.</p><h4>Convexity</h4><p>Curve in bond price vs yield relationship. When rates rise: prices fall more than duration suggests (negative convexity). When rates fall: prices rise more (positive convexity). Important for large rate moves.</p><h4>Credit Metrics (Fundamental Analysis)</h4><ul><li><strong>Debt/EBITDA:</strong> How many years of earnings needed to repay debt. <2x healthy, >5x risky.</li><li><strong>Interest Coverage:</strong> EBITDA / Interest expense. >5x safe, <2x risky.</li><li><strong>Free Cash Flow:</strong> Operating CF - CapEx. Can company service debt from FCF?</li><li><strong>Debt Maturity:</strong> When is debt due? Ladder maturities (not concentrated in one year).</li></ul>` },
        { title: "ADVANCED: Default Prediction and Derivatives", content: `<h4>Merton Model of Default (Structural Approach)</h4><p>Equity = call option on assets. If assets fall below debt level = default. Model calculates default probability from: asset value, volatility, debt level, risk-free rate.</p><h4>Reduced-Form Models</h4><p>Estimate default intensity directly from market prices (bond yields, CDS spreads). Don't require full balance sheet. Useful for real-time pricing.</p><h4>Credit Default Swaps (CDS)</h4><p>Buy insurance on bonds: pay 0.1-0.5%/year, receive principal if default. Prices credit risk directly. CDS spread = market's implied default probability. Widening CDS = deteriorating credit.</p><h4>Correlation Products</h4><ul><li>CDO (Collateralized Debt Obligation): Pool of bonds (mortgages, corporate), slice into tiers. Top tier safe, lower tiers risky but higher yield.</li><li>Single-Name CDS: Insure individual bond</li><li>Index CDS (CDX): Insure portfolio of bonds</li></ul><h4>Distressed Debt Investing</h4><p>Buy bonds of companies in trouble (trading at 30-50 cents on dollar). Two outcomes: (1) Restructure and recover 80 cents, (2) Liquidate and lose. Requires deep analysis, patience, high conviction.</p><h4>Recovery Rate Analysis</h4><p>In bankruptcy, not all debt lost. Senior secured ~70% recovery, unsecured ~30%. Prices in recovery expectations. High recovery rates = companies with valuable assets (real estate, equipment).</p>` }
      ]
    },

    // ============================================================
    // CRYPTO & BLOCKCHAIN (Tier 3 - NEW)
    // ============================================================
    "crypto-blockchain": {
      title: "Cryptocurrency & Blockchain: Digital Assets",
      icon: "₿",
      sections: [
        { title: "BEGINNER: Bitcoin and Blockchain Basics", content: `<h4>What Is Bitcoin?</h4><p>Digital currency created 2009. No government backing, no physical form. Value from scarcity (max 21M coins) and network effects (acceptance as money).</p><h4>Blockchain Technology</h4><p>Distributed ledger: Transactions recorded in blocks, linked cryptographically. Thousands of computers verify (consensus). Immutable (can't change past transactions). Transparent (everyone sees all transactions).</p><h4>Proof of Work (Bitcoin's Mechanism)</h4><p>Miners solve complex math puzzles to validate blocks. First solver gets reward (new bitcoins + fees). Hard work = hard to attack (would need 51% computing power). Secure but energy-intensive.</p><h4>Wallets and Custody</h4><ul><li>Private key: Your secret password (lose it, lose bitcoins forever)</li><li>Public key: Your address (like email, receive bitcoins)</li><li>Hot wallet: Connected to internet (convenient, riskier)</li><li>Cold wallet: Offline (secure, less convenient)</li></ul><h4>Bitcoin History and Adoption</h4><ul><li>Created: 2009, price ~$0</li><li>2013: First bubble, $1,100 (then crashed)</li><li>2017: Second bubble, $20,000 (then crashed 80%)</li><li>2021: Third bubble, $69,000 (then crashed 65%)</li><li>Current: ~$60-70K (more institutional adoption, less speculative fervor)</li></ul>` },
        { title: "INTERMEDIATE: Ethereum and DeFi", content: `<h4>Ethereum (Programmable Blockchain)</h4><p>Unlike Bitcoin (digital currency only), Ethereum allows smart contracts (self-executing code). Applications: DeFi, NFTs, gaming, supply chain.</p><h4>Proof of Stake (Ethereum's Mechanism)</h4><p>Validators lock up coins ("stake") to earn rewards. Less energy than proof-of-work, faster finality. Economic incentive: lose stake if misbehave.</p><h4>Smart Contracts</h4><p>Code running on blockchain. Example: "If condition X, pay Y to address Z." Trustless (no intermediary needed), transparent (code visible), immutable (can't change).</p><h4>Decentralized Finance (DeFi)</h4><ul><li>Lending: Deposit crypto, earn interest (5-20%+)</li><li>Trading: Swap tokens without exchange</li><li>Derivatives: Perpetual futures, options on chain</li><li>Governance: Token holders vote on protocol changes</li></ul><p>Risks: Smart contract bugs, flash loan attacks, user error (sending to wrong address).</p><h4>Tokenomics</h4><p>Token supply, emission schedule, use cases determine value. Inflationary token → value decreases. Deflationary (burning) → value increases. Community strength and adoption are key.</p>` },
        { title: "ADVANCED: Staking, Layer 2s, and Institutional Adoption", content: `<h4>Staking Economics</h4><p>Lock up tokens, earn rewards (~5-15%/year). Validator incentivized to act honestly (lose stake if cheat). Creates recurring income stream from crypto holdings.</p><h4>Layer 2 Solutions</h4><p>Ethereum can't scale (too slow, expensive). Layer 2s process transactions off-main chain, settle periodically. Examples: Optimistic rollups (Arbitrum), ZK rollups (Polygon). 100x+ faster, 1000x cheaper.</p><h4>Cross-Chain Bridges</h4><p>Move assets between blockchains. Example: Bitcoin on Ethereum (WBTC). Enables capital efficiency (use Bitcoin in DeFi) but introduces risk (bridge hacks).</p><h4>Institutional Adoption</h4><ul><li>Bitcoin: Seen as digital gold, inflation hedge (Michael Saylor's MicroStrategy owns $7B+)</li><li>Ethereum: Infrastructure for crypto economy</li><li>Stablecoins: USDC, USDT enable payments without volatility</li><li>CBDCs: Central bank digital currencies coming (US, EU, China)</li></ul><h4>Volatility and Trading in Crypto</h4><p>Bitcoin 4-year cycle (halving every 4 years): rally before halving, crash after. 2024 halving: expect continued volatility. Correlation to stocks increasing (macro risk-off = crypto down). 24/7 trading (no market close), high leverage available (dangerous).</p><h4>Regulatory Landscape</h4><p>SEC: Considering spot Bitcoin ETF (approved 2024), discussing "securities" vs "commodities." EU: Markets in Crypto Assets Regulation (MiCA). China: Banned crypto trading, mining. US: Friendlier regulatory approach driving innovation.</p>` }
      ]
    },

    // ============================================================
    // REAL ESTATE & ALTERNATIVES (Tier 3 - NEW)
    // ============================================================
    "real-estate-alts": {
      title: "Real Estate & Alternative Investments",
      icon: "🏠",
      sections: [
        { title: "BEGINNER: REITs and Real Estate Basics", content: `<h4>REITs (Real Estate Investment Trusts)</h4><p>Company owns/operates real estate (apartments, offices, malls, data centers). Must distribute 90% of taxable income as dividends. Trade like stocks on exchanges.</p><h4>REIT Types</h4><ul><li><strong>Residential:</strong> Apartments (American Homes, Avalon Bay). Stable cash flows, long leases.</li><li><strong>Commercial:</strong> Offices (Realty Income). Challenged post-COVID (remote work).</li><li><strong>Industrial:</strong> Warehouses (Prologis). Boom from e-commerce (Amazon needs warehouses).</li><li><strong>Healthcare:</strong> Senior housing, medical buildings. Aging population demand.</li><li><strong>Data Center:</strong> Server farms (Equinix). AI boom = strong demand.</li></ul><h4>Cap Rate (Capitalization Rate)</h4><p>Annual NOI / Property value. 4% cap rate = 4% annual yield. Higher cap = higher yield but potentially riskier. Lower cap = safer but lower income.</p><h4>Commodities (Alternative Exposure)</h4><ul><li>Gold: Inflation hedge, safe haven (rallies when stocks crash)</li><li>Oil: Energy demand, geopolitical risk</li><li>Agriculture: Grain, livestock. Inflation sensitive.</li></ul>` },
        { title: "INTERMEDIATE: Real Estate Metrics and PE", content: `<h4>Real Estate Valuation</h4><ul><li><strong>Income approach:</strong> NOI (net operating income) / cap rate = value</li><li><strong>Comparative approach:</strong> Compare to similar properties sold</li><li><strong>Cost approach:</strong> Rebuild cost + land value</li></ul><h4>Private Equity Real Estate Funds</h4><p>Buy undervalued properties, improve operations (raise rents, reduce expenses), sell 5-10 years later. Target returns: 15-20%+ IRR (vs 10% stocks). Higher leverage used (more risk).</p><h4>Venture Capital (Startup Investing)</h4><p>Early-stage companies (pre-revenue, small revenue). High failure rate (90% fail), but survivors return 10-100x. Returns: 25-30%+ IRR for successful funds (portfolio approach).</p><h4>Private Equity (Buyouts)</h4><p>Buy mature companies with leverage, improve operations, sell or IPO. Target returns: 15-20%. Fees: 2% management + 20% carry (performance fee). Liquidity: 5-7 year lock-up.</p>` },
        { title: "ADVANCED: ALT Allocation and Hedge Funds", content: `<h4>Alternative Asset Allocation</h4><p>Large endowments (Yale, Harvard, Yale) allocate heavily to alts (40-50%): PE 15%, real estate 15%, hedge funds 10%, commodities 5%, etc. Returns: 7-9%/year with lower correlation to stocks.</p><h4>Hedge Fund Strategies</h4><ul><li><strong>Long/Short Equity:</strong> Long undervalued, short overvalued. Market-neutral returns (5-8%/year, low correlation).</li><li><strong>Distressed:</strong> Buy troubled debt at 40 cents on dollar, restructure.</li><li><strong>Macro:</strong> Bet on economic trends (currency, rates, commodities). High risk, high reward.</li><li><strong>Event-Driven:</strong> Merger arb, spinoffs, bankruptcies.</li></ul><h4>Fee Structure (Hidden Costs)</h4><p>"2 and 20": 2% annual fee + 20% of profits. $100M fund: $2M management + 20% of gains = expensive. Index funds 0.03%, ETFs 0.1% vs hedge funds 2.2% average. Over 20 years: huge difference.</p><h4>Illiquidity Premium</h4><p>Illiquid investments (real estate, PE, hedge funds) offer 2-4% extra return to compensate for lock-up (can't sell easily). Investors accept lower liquidity for higher returns.</p><h4>Diversification with Alts</h4><p>60/40 stocks/bonds: 15% annual volatility, -30% drawdowns. With 20% alts: 12% volatility, -20% drawdowns. Smoother ride, slightly lower returns. Optimal for risk-averse investors.</p>` }
      ]
    },

    // ============================================================
    // INTERNATIONAL MARKETS (Tier 3 - NEW)
    // ============================================================
    "international-markets": {
      title: "International & Emerging Markets",
      icon: "🌍",
      sections: [
        { title: "BEGINNER: Global Markets Overview", content: `<h4>Major Markets by Region</h4><table class="data-table"><tr><th>Region</th><th>Major Markets</th><th>Character</th><th>Pros</th><th>Cons</th></tr><tr><td>Europe</td><td>UK, Germany, France</td><td>Mature, stable</td><td>Low growth, high dividend</td><td>Slowing growth, energy crisis</td></tr><tr><td>Asia Developed</td><td>Japan, Hong Kong, Singapore</td><td>Mature, tech-heavy</td><td>Quality companies, stable</td><td>Low growth, aging populations</td></tr><tr><td>Emerging</td><td>China, India, Brazil, Russia</td><td>High growth, volatile</td><td>Rapid growth, young populations</td><td>Political risk, currency risk</td></tr><tr><td>Frontier</td><td>Vietnam, Philippines, Pakistan</td><td>Very early stage</td><td>Fastest growth possible</td><td>Illiquid, high risk</td></tr></table><h4>Currency Risk</h4><p>Buy Japanese stock at ¥100 when 1 USD = 100 yen. Stock goes up 20% (¥120). But yen weakens to 150 yen/USD. Return: 120/150 = $0.80 (20% stock gain offset by currency loss). Must hedge or accept FX risk.</p><h4>ADRs (American Depositary Receipts)</h4><p>Foreign stocks traded on US exchanges (easier for US investors). Example: Alibaba ADS (BABA) instead of Hong Kong listing. Small fee but worth convenience.</p>` },
        { title: "INTERMEDIATE: BRICS and Emerging Market Dynamics", content: `<h4>BRICS Countries (High Growth)</h4><ul><li><strong>Brazil:</strong> Commodities, agriculture. Currency volatile, inflation issues.</li><li><strong>Russia:</strong> Energy, geopolitical risk (sanctions). Isolated from Western markets.</li><li><strong>India:</strong> Tech, manufacturing. 1.4B population, young demographics. Fast growth (6-7%/year).</li><li><strong>China:</strong> Manufacturing, tech. Slowing growth (3%+), demographic crisis, property crisis.</li><li><strong>South Africa:</strong> Commodities, energy crisis. Political risk.</li></ul><h4>Emerging Market Valuations</h4><p>Often cheaper than developed markets. China P/E 8-10x vs S&P 500 15x. But cheaper for reasons: slower growth, higher risk, capital controls.</p><h4>Capital Controls and Currency Risk</h4><p>Many emerging markets restrict foreign investment (capital controls). China: can't freely move money out. Turkey: currency crises. Investors accept illiquidity discount.</p><h4>Emerging Market Bonds</h4><p>Higher yields (5-10%+) than developed market bonds. Risk: currency devaluation, default. EM bond spreads widen 300+ bps in crises.</p>` },
        { title: "ADVANCED: Relative Value and Geopolitical Risk", content: `<h4>Relative Valuation (Country Allocation)</h4><p>When India expensive vs China, reduce India, add China. When Europe cheap vs US, add Europe. Rebalance based on valuations (contrarian, buy cheap).</p><h4>Geopolitical Risk Premium</h4><p>Taiwan risk: US-China tensions push Taiwanese valuations down (investor risk premium). If tensions ease, Taiwan outperforms. Risk-on/risk-off heavily influences EM.</p><h4>Carry Trades</h4><p>Borrow cheap currency (yen 0.5%), invest in higher-yielding assets (emerging market bonds 8%). Keep carry spread (7.5%/year). Risk: yen strengthens unexpectedly (must buy yen to repay loan), blows up carry.</p><h4>Emerging Market Crises</h4><p>History of currency crises: Mexico 1994, Russia 1998, Brazil 1999, Turkey 2018, Argentina ongoing. Patterns: Current account deficit, dollarized debt, capital flight. Early warning: widening spreads, currency weakness.</p><h4>Foreign Direct Investment (FDI)</h4><p>Companies invest in emerging markets for growth. Boeing builds in India, Apple makes iPhones in Vietnam. Creates jobs, improves local wealth. But foreign company profits can leave country (profit outflow).</p>` }
      ]
    },

    // ============================================================
    // RETIREMENT & TAX OPTIMIZATION (Tier 3 - NEW)
    // ============================================================
    "retirement-tax": {
      title: "Retirement Planning & Tax Optimization",
      icon: "🎯",
      sections: [
        { title: "BEGINNER: Tax-Advantaged Accounts", content: `<h4>401(k) (Employer Plan)</h4><ul><li>Contribute: $23,500/year (2024, increasing annually)</li><li>Tax deduction: Reduce taxable income immediately</li><li>Growth: Tax-deferred until withdrawal</li><li>Withdrawal: 59.5+ years old (penalties before)</li><li>Employer match: Many employers match 3-6% (free money!)</li></ul><h4>IRA Types</h4><ul><li><strong>Traditional IRA:</strong> Contribute $7,000/year, deduct from taxes, grow tax-deferred. Withdraw at 59.5+</li><li><strong>Roth IRA:</strong> Contribute after-tax $7,000/year, never pay taxes on growth. Withdraw anytime (contributions) without penalty.</li></ul><h4>Roth vs Traditional</h4><ul><li><strong>Roth:</strong> Better if you expect higher taxes in retirement (usually younger, lower income now)</li><li><strong>Traditional:</strong> Better if you're in high tax bracket now, expect lower taxes in retirement</li></ul><h4>Social Security</h4><ul><li>Claim at 62: 70% of full benefit (early, lower amount)</li><li>Claim at 67: 100% of full benefit (full retirement age)</li><li>Claim at 70: 130%+ of full benefit (delayed, maximum)</li><li>Strategic claiming: High earner delays, spouse takes at 62. Maximizes household benefit.</li></ul>` },
        { title: "INTERMEDIATE: Advanced Tax Strategies", content: `<h4>Tax-Loss Harvesting</h4><p>Sell losing positions to offset gains. Example: Sell Apple down 15% (loss $5K), use to offset $5K gain from Microsoft sale. Tax savings: $5K × 25% = $1,250/year. Over 30 years: $37K+ in tax savings.</p><h4>Wash-Sale Rule</h4><p>Can't buy same stock within 30 days of selling for loss (IRS rule). Solution: Buy similar-but-different stock (tech ETF instead of Apple stock specifically).</p><h4>Backdoor Roth Conversion</h4><p>High earners can't contribute to Roth directly (income limits). Workaround: Contribute to traditional IRA, immediately convert to Roth. Pay taxes on conversion, grow tax-free forever.</p><h4>Mega Backdoor Roth</h4><p>Employer 401(k) allows after-tax contributions (different from pre-tax). Can contribute $69,500/year (total 401(k) limit) instead of $23,500. Convert to Roth immediately. IRS currently allows this loophole (may close).</p><h4>HSA (Health Savings Account) as Retirement Vehicle</h4><p>Triple tax advantage: Contribute pre-tax, grow tax-free, withdraw tax-free for medical (or taxes due but grows like IRA if unused). $4,150/year max. Best kept investment (don't spend, let grow 30 years).</p>` },
        { title: "ADVANCED: Estate Planning and Charitable Giving", content: `<h4>Charitable Giving Strategies</h4><ul><li><strong>Donor-Advised Fund (DAF):</strong> Donate appreciated stock (no capital gains tax!), get tax deduction, distribute over time. Example: $1M appreciated Apple stock: donate to DAF (avoid $250K capital gains tax), recommend $50K/year to charities, tax deduction immediately.</li><li><strong>Charitable Remainder Trust (CRT):</strong> Donate asset to trust, receive income stream for life, remainder to charity. Income tax deduction + diversification (convert concentrated stock position to diversified income).</li></ul><h4>Grantor Retained Annuity Trust (GRAT)</h4><p>Transfer appreciating assets to trust, receive annuity payments. If assets appreciate beyond IRS assumed rate, appreciation passes to heirs tax-free. Best for confident growth (small-cap stocks, private equity).</p><h4>1031 Exchange (Real Estate)</h4><p>Sell investment property, buy similar property within 180 days. Defer capital gains tax indefinitely. Example: Own $1M property with $500K gain. Sell, buy $1.2M property (no capital gains tax). Can keep doing indefinitely.</p><h4>NIRP (Net Unrealized Appreciation)</h4><p>Company stock in 401(k). When separating from company, take in-kind distribution (avoid paying capital gains on growth). Long-term capital gains rate (15-20%) on appreciation vs ordinary income rate (37% top).</p><h4>Estate Planning for Wealthy</h4><p>Use exemptions: $13.6M per person (2024) can pass tax-free. Married couple: $27.2M. Structure holdings to maximize exemption use. Dynasty trusts (perpetual wealth for heirs). Requires tax attorneys/CPAs.</p>` }
      ]
    },

    // ============================================================
    // MARKET MICROSTRUCTURE (Tier 3 - NEW)
    // ============================================================
    "market-microstructure": {
      title: "Market Microstructure: Inside the Markets",
      icon: "⚙️",
      sections: [
        { title: "BEGINNER: Bid-Ask and Market Makers", content: `<h4>Bid-Ask Spread (Cost of Trading)</h4><p>Bid: Price buyers will pay ($99.99). Ask: Price sellers demand ($100.01). Spread: $0.02. When you sell: get $99.99 (buyer's price). When you buy: pay $100.01 (seller's price). Spread = transaction cost you pay.</p><h4>Spread Size Varies</h4><ul><li>Apple (liquid): $0.01 average spread</li><li>Small-cap stock (less liquid): $0.50+ spread</li><li>Penny stock (very illiquid): $1+ spread (10%+ cost just to trade)</li></ul><h4>Market Makers Role</h4><p>Citadel, Virtu, Jump Trading: Post bid and ask, profit from spread. Provide liquidity (always available to buy/sell). Without market makers, hard to trade anytime you want.</p><h4>Order Flow</h4><p>Buy vs sell orders at each price. When buyers overwhelm sellers → price rises. When sellers overwhelm → price falls. Market makers see order flow, use to predict next price move (legitimate edge).</p>` },
        { title: "INTERMEDIATE: Trading Mechanisms and Algorithms", content: `<h4>Order Types and Execution</h4><ul><li><strong>Market order:</strong> Buy/sell immediately at best available price. Guaranteed execution, worst price.</li><li><strong>Limit order:</strong> Buy at $170 or less. May not execute if price doesn't reach limit.</li><li><strong>Stop-loss:</strong> Sell if price drops to $170 (avoid catastrophic losses).</li><li><strong>Stop-limit:</strong> Sell at $170 ONLY IF can sell for at least $165. Can fail to execute.</li></ul><h4>Algorithmic Execution</h4><p>Large orders break into smaller pieces to minimize market impact. Example: $10M Apple order doesn't hit market at once (would crash price). Algorithm sends 1,000 shares at a time, adapting to market conditions, executing over minutes/hours.</p><h4>Price Discovery</h4><p>How do markets set prices? Continuous auction: buyers and sellers meet, negotiate price. Information flows → prices adjust. Price = current consensus of all market participants on value.</p><h4>Liquidity and Market Depth</h4><p>Order book shows: 1,000 shares at $100.00, 5,000 at $99.99, 10,000 at $99.98 (buy side). Market depth: How much can you buy without moving price significantly. Deep market = liquid, easy to trade large size.</p>` },
        { title: "ADVANCED: High-Frequency Trading and Flash Crashes", content: `<h4>HFT (High-Frequency Trading)</h4><p>Trade thousands times per second using algorithms, exploiting tiny mispricings. Infrastructure: Microsecond execution latency (faster than competitors = edge). Profitability: Tiny per-trade profit (0.0001%) but at massive volume.</p><h4>Latency Arbitrage</h4><p>See order in slower exchange, execute in faster exchange before price adjusts. Example: See buy order in slow exchange, buy in fast exchange first, sell to slow exchange for tiny profit. Controversial: benefits HFT, costs slow traders.</p><h4>Flash Crash (2010)</h4><p>May 6, 2010: S&P 500 down 9% in minutes, recovered same day. Cause: Large mutual fund used poor algorithm, triggered stop-losses cascade, mutual selling snowball. Lesson: Circuit breakers prevent extreme crashes now.</p><h4>Market Fragmentation</h4><p>Trades happen across multiple venues (NYSE, NASDAQ, dark pools, ATSs). Complicates price discovery. Best execution rule: Brokers must find best price, not necessarily on primary exchange. Creates complexity.</p><h4>Dark Pools</h4><p>Private exchanges where institutions trade without publishing orders first. Advantage: Anonymity (don't signal your large order publicly). Disadvantage: Less price transparency, potential for unfair practices. Subject to increasing regulation.</p>` }
      ]
    }
  }
};

// Add glossary section after lessons closing brace
DATA.lessons.glossary = {
  title: "Comprehensive Glossary (200+ Terms)",
  icon: "📚",
  isGlossary: true,
  tier: "beginner",
  terms: [
    { term: "Arbitrage", definition: "Exploiting price differences of same asset in different markets", example: "Stock $100 NYC, $99 London → buy low, sell high" },
    { term: "Asset Allocation", definition: "Dividing portfolio between asset classes based on risk", example: "60% stocks, 40% bonds" },
    { term: "Beta", definition: "Stock volatility vs market", example: "Beta 1.2 = up 10% market, stock up 12%" },
    { term: "Bull Market", definition: "Market up 20%+ from lows", example: "S&P 500 from 4000 to 5000+" },
    { term: "Bear Market", definition: "Market down 20%+ from highs", example: "S&P 500 from 5000 to 4000" },
    { term: "Capital Gain", definition: "Profit from selling higher than purchase", example: "Buy Apple $150, sell $200 = $50 gain" },
    { term: "Correlation", definition: "How two assets move together", example: "Tech stocks 0.8 correlation (move together)" },
    { term: "Coupon", definition: "Interest payment on bond", example: "5% coupon on $1,000 = $50/year" },
    { term: "Dividend", definition: "Cash payment from company to shareholders", example: "Apple $0.96/share × 1,000 = $960" },
    { term: "Duration", definition: "Bond price sensitivity to rates", example: "8-year duration: 1% rate rise = 8% drop" },
    { term: "Earnings Per Share (EPS)", definition: "Net income ÷ shares outstanding", example: "$10B ÷ 2B shares = $5 EPS" },
    { term: "Efficient Frontier", definition: "Optimal risk-return combinations", example: "Portfolio on frontier is optimal" },
    { term: "P/E Ratio", definition: "Price ÷ Earnings Per Share", example: "$180 ÷ $6 = P/E 30x" },
    { term: "Free Cash Flow", definition: "Operating cash - capital expenditures", example: "$100B operating - $20B capex = $80B" },
    { term: "Futures", definition: "Agreement to buy/sell at future date/price", example: "Buy 1,000 barrels oil at $80" },
    { term: "Hedge", definition: "Protecting position against adverse moves", example: "Own stock, buy put for downside protection" },
    { term: "Implied Volatility", definition: "Market's expected future volatility", example: "High IV = expensive options" },
    { term: "Initial Public Offering (IPO)", definition: "Company first sells shares publicly", example: "Facebook IPO 2012 at $38/share" },
    { term: "Leverage", definition: "Using borrowed money to increase position", example: "$5K + $5K borrowed = 2x leverage" },
    { term: "Liquidity", definition: "How easily asset converts to cash", example: "Apple liquid, real estate illiquid" },
    { term: "Long Position", definition: "Owning asset expecting price rise", example: "Own 100 Apple shares" },
    { term: "Market Cap", definition: "Stock price × shares outstanding", example: "$180 × 15.5B = $2.79T" },
    { term: "Momentum", definition: "Winning stocks keep winning short-term", example: "Stocks up 20% tend to outperform next quarter" },
    { term: "Moving Average", definition: "Average price over past N days", example: "50-day MA = average of 50 closes" },
    { term: "Recession", definition: "Two consecutive quarters negative GDP", example: "Economic shrinkage 6+ months" },
    { term: "Risk-Free Rate", definition: "Yield on Treasury (no risk)", example: "10-year Treasury 4%" },
    { term: "Sharpe Ratio", definition: "Risk-adjusted return metric", example: "(10% return - 3% risk-free) / 15% volatility" },
    { term: "Short Selling", definition: "Borrowing and selling stock expecting drop", example: "Borrow 100 Apple, sell at $180, buy back at $170" },
    { term: "Spread", definition: "Difference between bid and ask", example: "Apple bid $99.99, ask $100.01 = $0.02 spread" },
    { term: "Volatility", definition: "How much returns fluctuate", example: "Apple 25% volatility = ±25% moves typical" },
    { term: "Yield Curve", definition: "Graph of yields across bond maturities", example: "Normal slopes up, inverted slopes down" },
    { term: "Yield Curve Inversion", definition: "Short-term yields > long-term (recession warning)", example: "2-year 5%, 10-year 3.5%" },
    { term: "Options", definition: "Right to buy/sell at specific price", example: "Apple Jan $180 call = right to buy at $180" },
    { term: "Delta", definition: "Option price sensitivity to stock move", example: "Delta 0.7 = $1 stock move = $0.70 option" },
    { term: "Gamma", definition: "How delta changes", example: "High gamma = delta changes fast" },
    { term: "Theta", definition: "Time decay of option", example: "Call worth $3 today, $2 tomorrow" },
    { term: "Vega", definition: "Option sensitivity to volatility", example: "Vega 0.15 = 1% volatility rise = $0.15" },
    { term: "Iron Condor", definition: "Sell puts + calls, buy protective contracts", example: "Profit if stock stays in range at expiration" },
    { term: "Credit Spread", definition: "Extra yield on risky bonds vs Treasury", example: "High-yield 8%, Treasury 4% = 400bp spread" },
    { term: "Credit Rating", definition: "Assessment of borrower ability to repay", example: "AAA excellent, D default" },
    { term: "Default Risk", definition: "Risk borrower won't repay", example: "Treasury ~0%, junk bond ~15%" },
    { term: "Technical Analysis", definition: "Analyzing charts to predict price", example: "Head & shoulders pattern predicts reversal" },
    { term: "Support", definition: "Price level where stock bounces up", example: "Apple bounced off $165 five times" },
    { term: "Resistance", definition: "Price level where stock bounces down", example: "Apple failed above $185 five times" },
    { term: "RSI", definition: "Relative Strength Index (0-100 scale)", example: "RSI > 70 = overbought, < 30 = oversold" },
    { term: "MACD", definition: "Moving Average Convergence Divergence", example: "MACD above signal line = bullish" },
    { term: "Bollinger Bands", definition: "Upper/lower bands around moving average", example: "Price touching band = potential reversal" },
    { term: "Fibonacci Retracement", definition: "Support levels at %, 50%, 62% of prior move", example: "Uptrend pulls back to 50% = common support" },
    { term: "VIX", definition: "S&P 500 implied volatility index", example: "VIX 20 = low fear, VIX 40 = high fear" },
    { term: "Contango", definition: "Futures prices higher than spot", example: "Oil $70 spot, $72 futures" },
    { term: "Backwardation", definition: "Futures prices lower than spot", example: "Oil $70 spot, $68 futures" },
    { term: "Margin Call", definition: "Broker demands more funds or closes positions", example: "Account drops below maintenance minimum" },
    { term: "Portfolio Rebalancing", definition: "Restoring portfolio to target allocation", example: "60/40 drifted to 70/30 → rebalance back" },
    { term: "Dollar-Cost Averaging", definition: "Investing fixed amount regularly", example: "$1,000/month into index fund" },
    { term: "Diversification", definition: "Spreading investments to reduce risk", example: "60% stocks + 40% bonds" },
    { term: "Value Investing", definition: "Buying undervalued companies", example: "Buy at 50% of fair value (margin of safety)" },
    { term: "Growth Investing", definition: "Buying fast-growing companies", example: "20%+ annual growth, high P/E ratios" },
    { term: "Dividend Investing", definition: "Focusing on dividend-paying stocks", example: "Build passive income stream" },
    { term: "Pairs Trading", definition: "Long one stock, short correlated stock", example: "Long Apple, short Microsoft" },
    { term: "Merger Arbitrage", definition: "Buy target, short acquirer", example: "Capture spread as deal closes" },
    { term: "REIT", definition: "Real Estate Investment Trust", example: "Apartment complex trading like stock" },
    { term: "PE Firm", definition: "Private Equity company", example: "Buy company, improve, sell for profit" },
    { term: "Hedge Fund", definition: "Alternative fund using aggressive strategies", example: "Long/short equities, derivatives, leverage" },
    { term: "Cryptocurrency", definition: "Digital currency on blockchain", example: "Bitcoin, Ethereum, 20,000+ altcoins" },
    { term: "DeFi", definition: "Decentralized Finance (no intermediary)", example: "Lend crypto directly to others" },
    { term: "Staking", definition: "Lock up crypto to earn rewards", example: "5-15%/year on Ethereum staking" },
    { term: "Capital Controls", definition: "Government restriction on moving money", example: "China limits foreign investment" },
    { term: "Carry Trade", definition: "Borrow cheap, invest in higher yield", example: "Borrow yen 0.5%, invest in EM bonds 8%" },
    { term: "Tax-Loss Harvesting", definition: "Sell losing positions to offset gains", example: "Sell Apple loss, buy Microsoft gain = $0 tax" },
    { term: "Roth IRA", definition: "After-tax retirement account (never tax on growth)", example: "$7,000/year contribution" },
    { term: "401(k)", definition: "Employer retirement plan", example: "$23,500/year, tax-deductible" },
    { term: "Social Security", definition: "Government retirement insurance", example: "Claim at 70 = 130%+ of full benefit" },
    { term: "Charitable Remainder Trust", definition: "Donate asset, receive income, remainder to charity", example: "Avoid capital gains on appreciated stock" },
    { term: "1031 Exchange", definition: "Defer capital gains on real estate", example: "Sell property, buy similar within 180 days" },
    { term: "Market Maker", definition: "Firm providing liquidity by quoting bid/ask", example: "Citadel, Virtu" },
    { term: "Flash Crash", definition: "Sudden severe drop then recovery", example: "2010: S&P 500 down 9% in minutes" },
    { term: "Circuit Breaker", definition: "Automatic halt when market drops too fast", example: "S&P down 7% = 15-min halt" },
    { term: "Dark Pool", definition: "Private exchange without public order display", example: "Large institutions trade anonymously" },
    { term: "Algorithmic Trading", definition: "Computer programs executing trades", example: "Slice large order into pieces" },
    { term: "High-Frequency Trading (HFT)", definition: "Trading thousands times per second", example: "Microsecond execution latency edge" },
    { term: "Latency Arbitrage", definition: "Trading ahead of slow exchanges", example: "See buy in slow exchange, trade in fast" },
    { term: "Order Book", definition: "List of pending buy/sell orders", example: "Bid $99.99 (buyers), ask $100.01 (sellers)" },
    { term: "Intrinsic Value", definition: "True underlying value", example: "Stock trading $100, fair value $150 = undervalued" },
    { term: "Book Value", definition: "Assets minus liabilities", example: "$100B assets - $20B debt = $80B equity" },
    { term: "Price-to-Book", definition: "Price ÷ book value per share", example: "P/B < 1 = undervalued, > 3 = expensive" },
    { term: "PEG Ratio", definition: "P/E ÷ growth rate (better than P/E)", example: "P/E 30, 30% growth = PEG 1.0 (fair)" },
    { term: "Return on Equity (ROE)", definition: "Net income ÷ equity", example: "$10B income ÷ $50B equity = 20% ROE" },
    { term: "Debt/EBITDA", definition: "How many years to repay debt from earnings", example: "< 2x healthy, > 5x risky" },
    { term: "Interest Coverage", definition: "EBITDA ÷ interest expense", example: "> 5x safe, < 2x risky" },
    { term: "Value at Risk (VaR)", definition: "Maximum loss at confidence level", example: "95% VaR $100K = 95% chance won't lose more" },
    { term: "Conditional Value at Risk (CVaR)", definition: "Expected loss in tail scenario", example: "95% CVaR $150K = average loss in worst 5%" },
    { term: "Scenario Analysis", definition: "What-if testing specific events", example: "What if market drops 20%?" },
    { term: "Stress Testing", definition: "Testing portfolio under extreme conditions", example: "What if rates rise 2%, volatility doubles?" },
    { term: "Drawdown", definition: "Peak-to-trough loss", example: "2008: S&P 500 57% max drawdown" },
    { term: "Recovery Time", definition: "Time to recover from loss", example: "Nasdaq 2000: -78%, 15 years to recover" },
    { term: "Correlation", definition: "How assets move together (-1 to +1)", example: "+1 = identical, 0 = independent, -1 = opposite" },
    { term: "Skewness", definition: "Asymmetry of returns", example: "Negative = left tail risk, positive = right tail" },
    { term: "Kurtosis", definition: "Thickness of tails", example: "High kurtosis = fat tails, more extreme events" },
    { term: "Z-Score", definition: "(X - mean) / std dev", example: "Z > 3 = extreme outlier" },
    { term: "Monte Carlo Simulation", definition: "Generate random scenarios to test outcome", example: "10,000 price paths for portfolio analysis" },
    { term: "Black-Scholes Model", definition: "Options pricing formula", example: "Accounts for price, strike, time, volatility, rates" },
    { term: "Binomial Model", definition: "Tree-based options pricing", example: "Up/down branches at each step" },
    { term: "Ito's Lemma", definition: "Stochastic calculus chain rule", example: "Derive option value from stock price process" },
    { term: "Geometric Brownian Motion", definition: "Stock price follows dS = μS dt + σS dW", example: "Basis for Black-Scholes model" },
    { term: "Jump-Diffusion Model", definition: "GBM + occasional jumps", example: "Better represents crashes, gaps" },
    { term: "Kalman Filter", definition: "Estimate hidden state from noisy data", example: "Estimate true stock value from prices" },
    { term: "ARIMA", definition: "Auto-regressive integrated moving average", example: "Forecasts next value from past values" },
    { term: "GARCH", definition: "Volatility clustering model", example: "Volatility spikes cluster together" },
    { term: "VAR (Vector Auto-Regression)", definition: "Multiple correlated time series together", example: "Model stock + bond + currency together" },
    { term: "Machine Learning", definition: "Algorithms learn patterns from data", example: "Predict returns from 200+ indicators" },
    { term: "Neural Networks", definition: "AI inspired by brain neurons", example: "LSTM networks for sequence prediction" },
    { term: "Reinforcement Learning", definition: "Agent learns optimal actions through trial/error", example: "Deep Q-networks for trading" },
    { term: "Natural Language Processing (NLP)", definition: "Analyze text for sentiment/info", example: "Extract sentiment from news for trading" },
    { term: "Behavioral Finance", definition: "Psychology of investing decisions", example: "Loss aversion, herding, overconfidence" },
    { term: "Prospect Theory", definition: "Decision making based on reference points", example: "Losses feel 2x stronger than gains" },
    { term: "Mental Accounting", definition: "Categorizing money mentally", example: "Spend bonus, save salary (economically identical)" },
    { term: "Anchoring Bias", definition: "First number becomes reference", example: "All-time high becomes anchor" },
    { term: "Herding", definition: "Following the crowd", example: "Everyone buys in rally, sells in crash" },
    { term: "Overconfidence Bias", definition: "Think you're better than average", example: "68% of drivers think above median" },
    { term: "Recency Bias", definition: "Recent events dominate thinking", example: "2008 crash = sell everything!" },
    { term: "Loss Aversion", definition: "Feel losses 2x stronger than gains", example: "Panic sell at losses" },
    { term: "Mean Reversion", definition: "Extremes reverse", example: "All-time highs often pull back" },
    { term: "Value Trap", definition: "Stock cheap for good reason", example: "Deteriorating business, not undervalued" },
    { term: "Momentum", definition: "Winners keep winning short-term", example: "Up 20% stocks outperform next quarter" },
    { term: "Revenge Trading", definition: "Taking bigger risks after losses", example: "Backfires and compounds losses" },
    { term: "Overtrading", definition: "Excessive trading due to overconfidence", example: "Costs fees, taxes, lower returns" },
    { term: "Sunk Cost Fallacy", definition: "Can't sell because invested already", example: "Already spent $10K, can't sell at $5K loss" }
  ]
};

DATA.lessons.calculators = {
  title: "Investment Calculators",
  icon: "🧮",
  isCalculator: true,
  content: `<p>Professional financial calculators.</p>`,
  calculators: [
    { id: "compound-interest", title: "Compound Interest Calculator", description: "Calculate exponential wealth growth with contributions", inputs: [
      { label: "Initial Investment ($)", field: "principal", value: 10000 },
      { label: "Annual Return (%)", field: "rate", value: 7 },
      { label: "Years", field: "years", value: 30 },
      { label: "Annual Contribution ($)", field: "contribution", value: 5000 }
    ]},
    { id: "stock-profit", title: "Stock Trade Calculator", description: "Analyze profit/loss with commissions and taxes", inputs: [
      { label: "Purchase Price ($)", field: "buyPrice", value: 50 },
      { label: "Sell Price ($)", field: "sellPrice", value: 75 },
      { label: "Shares", field: "shares", value: 100 },
      { label: "Commission ($)", field: "commission", value: 10 },
      { label: "Tax Rate (%)", field: "taxRate", value: 15 }
    ]},
    { id: "dividend-income", title: "Dividend Income Projector", description: "Project passive income and compounding", inputs: [
      { label: "Investment Amount ($)", field: "investment", value: 50000 },
      { label: "Dividend Yield (%)", field: "yield", value: 3.5 },
      { label: "Dividend Growth Rate (%/year)", field: "growth", value: 5 },
      { label: "Years", field: "years", value: 20 }
    ]},
    { id: "pe-valuation", title: "P/E Ratio Analyzer", description: "Compare valuations across companies", inputs: [
      { label: "Stock Price ($)", field: "price", value: 180 },
      { label: "Earnings Per Share ($)", field: "eps", value: 6.05 },
      { label: "Expected Growth (%)", field: "growth", value: 15 }
    ]},
    { id: "bond-ytm", title: "Bond YTM Calculator", description: "Calculate yield to maturity", inputs: [
      { label: "Face Value ($)", field: "faceValue", value: 1000 },
      { label: "Coupon Rate (%)", field: "coupon", value: 5 },
      { label: "Current Price ($)", field: "price", value: 950 },
      { label: "Years to Maturity", field: "years", value: 10 }
    ]},
    { id: "option-breakeven", title: "Options Break-Even Calculator", description: "Calculate option profit/loss scenarios", inputs: [
      { label: "Current Stock Price ($)", field: "stockPrice", value: 100 },
      { label: "Strike Price ($)", field: "strike", value: 105 },
      { label: "Option Premium ($)", field: "premium", value: 3 },
      { label: "Type (call/put)", field: "type", value: "call" }
    ]},
    { id: "dcf-valuation", title: "DCF Valuation Calculator", description: "Discounted cash flow valuation model", inputs: [
      { label: "FCF Year 1 ($M)", field: "fcf", value: 100 },
      { label: "Growth Rate (%)", field: "growth", value: 5 },
      { label: "WACC (%)", field: "wacc", value: 9 },
      { label: "Years to Project", field: "years", value: 10 }
    ]},
    { id: "portfolio-return", title: "Portfolio Return Calculator", description: "Calculate weighted portfolio returns", inputs: [
      { label: "Stock Allocation (%)", field: "stockPct", value: 60 },
      { label: "Bond Allocation (%)", field: "bondPct", value: 40 },
      { label: "Expected Stock Return (%)", field: "stockReturn", value: 10 },
      { label: "Expected Bond Return (%)", field: "bondReturn", value: 5 }
    ]}
  ]
};

DATA.lessons.simulator = {
  title: "Portfolio Simulator",
  icon: "🎮",
  isSimulator: true,
  content: `<p>Test different allocations and see 30-year projections.</p>`
};

