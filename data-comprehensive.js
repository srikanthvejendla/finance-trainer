const DATA = {
  nav: [
    { group: "Fundamentals", items: [
      { id: "home", label: "Home", ico: "🏠", tier: "beginner" },
      { id: "stocks-masterclass", label: "Stocks Masterclass", ico: "📈", tier: "beginner" },
      { id: "bonds-masterclass", label: "Bonds Masterclass", ico: "💵", tier: "beginner" },
      { id: "funds-etf-masterclass", label: "Funds & ETFs Deep Dive", ico: "🎯", tier: "beginner" },
    ]},
    { group: "Intermediate", items: [
      { id: "options-masterclass", label: "Options Complete", ico: "🎲", tier: "intermediate" },
      { id: "technical-analysis-complete", label: "Technical Analysis", ico: "📊", tier: "intermediate" },
      { id: "derivatives-complete", label: "Derivatives & Futures", ico: "🔗", tier: "intermediate" },
      { id: "portfolio-theory-complete", label: "Portfolio Theory", ico: "🏗️", tier: "intermediate" },
    ]},
    { group: "Advanced", items: [
      { id: "market-microstructure", label: "Market Microstructure", ico: "⚙️", tier: "advanced" },
      { id: "behavioral-finance-complete", label: "Behavioral Finance", ico: "🧠", tier: "advanced" },
      { id: "market-cycles-complete", label: "Market Cycles & Macro", ico: "🔄", tier: "advanced" },
      { id: "quant-finance-complete", label: "Quantitative Finance", ico: "🔬", tier: "advanced" },
    ]},
    { group: "Professional", items: [
      { id: "risk-management-complete", label: "Risk Management", ico: "⚠️", tier: "advanced" },
      { id: "valuation-models", label: "Valuation Models", ico: "💎", tier: "advanced" },
      { id: "trading-strategies", label: "Trading Strategies", ico: "🎯", tier: "advanced" },
    ]},
    { group: "Tools", items: [
      { id: "calculators", label: "Calculators", ico: "🧮", tier: "beginner" },
      { id: "glossary", label: "Comprehensive Glossary", ico: "📚", tier: "beginner" },
      { id: "simulator", label: "Portfolio Simulator", ico: "🎮", tier: "intermediate" },
    ]}
  ],

  lessons: {
    // ============================================================
    // STOCKS MASTERCLASS - 8000+ WORDS, 3-LEVEL DEPTH
    // ============================================================
    "stocks-masterclass": {
      title: "Stocks Masterclass: From Beginner to Professional",
      icon: "📈",
      tier: "beginner",
      sections: [
        {
          title: "BEGINNER: Stock Fundamentals & Ownership",
          content: `
            <h4>What Is a Stock?</h4>
            <p>A stock is a unit of ownership in a corporation. When you buy 100 Apple shares, you own 100/(total shares outstanding) of Apple Inc. As the company grows and becomes more valuable, your ownership stake becomes worth more.</p>

            <h4>Why Companies Issue Stock</h4>
            <ul>
              <li><strong>Raise Capital:</strong> Company needs $100M for expansion → issues new shares → gets $100M cash</li>
              <li><strong>Fund Operations:</strong> R&D, manufacturing, marketing, employee salaries</li>
              <li><strong>Acquisitions:</strong> Instead of paying cash, company can pay with stock</li>
              <li><strong>Credibility:</strong> Public companies are perceived as more legitimate and stable</li>
              <li><strong>Employee Compensation:</strong> Stock options and grants motivate employees</li>
            </ul>

            <h4>Basic Stock Metrics (Simple Version)</h4>
            <table class="data-table">
              <tr><th>Metric</th><th>What It Means</th><th>Example</th></tr>
              <tr><td>Price</td><td>Current share price</td><td>Apple trading at $180/share</td></tr>
              <tr><td>Market Cap</td><td>Price × Shares Outstanding</td><td>$180 × 15.5B = $2.79 trillion</td></tr>
              <tr><td>Earnings Per Share</td><td>Net profit ÷ shares outstanding</td><td>Apple EPS $6.05 means $6.05 profit per share</td></tr>
              <tr><td>P/E Ratio</td><td>Price ÷ Earnings Per Share</td><td>$180 ÷ $6.05 = 29.8x (expensive valuation)</td></tr>
              <tr><td>Dividend Yield</td><td>Annual dividend ÷ stock price</td><td>Apple: $0.96 ÷ $180 = 0.53% yield</td></tr>
            </table>

            <h4>How Stock Prices Move (Simplified)</h4>
            <p><strong>Supply & Demand:</strong> When more people want to buy than sell → price goes up. When more want to sell than buy → price goes down.</p>
            <p><strong>Major Drivers:</strong> Earnings (company makes more profit), news (good product release), economic conditions (interest rates), market sentiment (investor confidence)</p>

            <h4>Dividends Explained Simply</h4>
            <p>Many companies share profits with shareholders through dividends. If a company makes $100B in profit and decides to give 40% back to shareholders: $40B ÷ 15.5B shares = $2.58 per share dividend.</p>
            <p>You get paid just for owning the stock. This is DIFFERENT from capital appreciation (stock price going up).</p>
          `
        },
        {
          title: "INTERMEDIATE: Stock Markets, Trading, and Analysis",
          content: `
            <h4>Stock Exchanges (Detailed)</h4>
            <table class="data-table">
              <tr><th>Exchange</th><th>Headquarters</th><th>Companies</th><th>Market Cap</th><th>Character</th></tr>
              <tr><td>NYSE</td><td>New York</td><td>2,800+</td><td>$28+ trillion</td><td>Blue chips, traditional (Apple, JPMorgan, Coca-Cola)</td></tr>
              <tr><td>NASDAQ</td><td>New York</td><td>3,200+</td><td>$19+ trillion</td><td>Tech-heavy (Google, Amazon, Tesla, Meta, Microsoft)</td></tr>
              <tr><td>LSE</td><td>London</td><td>2,400+</td><td>$3+ trillion</td><td>International companies, oil/mining heavy</td></tr>
              <tr><td>TSE</td><td>Tokyo</td><td>1,800+</td><td>$5+ trillion</td><td>Japanese companies (Toyota, Sony, Nintendo)</td></tr>
              <tr><td>SSE</td><td>Shanghai</td><td>2,000+</td><td>$6+ trillion</td><td>Chinese companies, state-owned enterprises</td></tr>
            </table>

            <h4>How Trading Works (Order Types)</h4>
            <ul>
              <li><strong>Market Order:</strong> "Buy 100 Apple shares immediately at current price" → Executed instantly at whatever price available</li>
              <li><strong>Limit Order:</strong> "Buy 100 Apple shares but ONLY if price is $175 or less" → Waits until price hits that level</li>
              <li><strong>Stop-Loss Order:</strong> "If Apple drops to $170, automatically sell my shares" → Prevents huge losses</li>
              <li><strong>Stop-Limit Order:</strong> Combination of stop and limit (more complex, can fail to execute)</li>
            </ul>

            <h4>Stock Classification by Size</h4>
            <table class="data-table">
              <tr><th>Type</th><th>Market Cap</th><th>Risk</th><th>Volatility</th><th>Returns</th><th>Examples</th></tr>
              <tr><td>Mega-Cap</td><td>$200B+</td><td>Very Low</td><td>10-15%</td><td>5-10%/yr</td><td>Apple, Microsoft, Saudi Aramco</td></tr>
              <tr><td>Large-Cap</td><td>$10B-$200B</td><td>Low</td><td>15-25%</td><td>8-12%/yr</td><td>Nike, Coca-Cola, Disney</td></tr>
              <tr><td>Mid-Cap</td><td>$2B-$10B</td><td>Moderate</td><td>25-40%</td><td>12-20%/yr</td><td>Zoom, Square, Datadog</td></tr>
              <tr><td>Small-Cap</td><td>$300M-$2B</td><td>High</td><td>40-80%</td><td>20%+ potential</td><td>Emerging companies, startups</td></tr>
            </table>

            <h4>Stock Classification by Style</h4>
            <ul>
              <li><strong>Growth Stocks:</strong> High expected future growth (20-50%/year), reinvest profits, no dividends. Example: Tesla, Amazon. Risk: Valuation can collapse if growth slows</li>
              <li><strong>Value Stocks:</strong> Trading below intrinsic value, higher dividends (2-4%), stable. Example: Banks, utilities. Opportunity: Upside when market recognizes value</li>
              <li><strong>Dividend Stocks:</strong> High yields (3-5%), stable earnings, mature. Example: Procter & Gamble, Coca-Cola. Appeal: Consistent income</li>
              <li><strong>Defensive Stocks:</strong> Stable in downturns. Example: Healthcare, consumer staples, utilities. Benefit: Lower volatility</li>
            </ul>

            <h4>Fundamental Analysis Metrics</h4>
            <table class="data-table">
              <tr><th>Metric</th><th>Formula</th><th>What It Means</th><th>Range</th></tr>
              <tr><td>P/E Ratio</td><td>Stock Price ÷ EPS</td><td>How much you pay per dollar of earnings</td><td><12 (cheap), 15-20 (fair), >30 (expensive)</td></tr>
              <tr><td>PEG Ratio</td><td>P/E ÷ Growth Rate (%)</td><td>P/E adjusted for growth (better than P/E alone)</td><td><1 (undervalued), 1-2 (fair), >2 (overvalued)</td></tr>
              <tr><td>Price-to-Book</td><td>Price ÷ Book Value</td><td>Price vs asset value (good for asset-heavy companies)</td><td><1 (cheap), 1-3 (fair), >5 (expensive)</td></tr>
              <tr><td>ROE</td><td>Net Income ÷ Equity</td><td>How efficiently company generates profit from shareholder money</td><td>>15% (excellent), 10-15% (good), <10% (poor)</td></tr>
              <tr><td>Free Cash Flow</td><td>Operating CF - CapEx</td><td>Actual cash available for dividends and buybacks</td><td>Positive is good, growing is better</td></tr>
            </table>

            <h4>Real Example: Apple Stock Analysis</h4>
            <ul>
              <li><strong>Price:</strong> $180</li>
              <li><strong>Market Cap:</strong> $2.79 trillion (largest in world)</li>
              <li><strong>EPS:</strong> $6.05</li>
              <li><strong>P/E Ratio:</strong> 29.8x (premium, but justified by brand and growth)</li>
              <li><strong>Dividend:</strong> $0.96/share = 0.53% yield (low, reinvests for growth)</li>
              <li><strong>ROE:</strong> 90%+ (exceptional - generates huge profit on shareholder money)</li>
              <li><strong>Free Cash Flow:</strong> $110B/year (generates enormous amounts of actual cash)</li>
              <li><strong>Why Expensive:</strong> Dominant market position, ecosystem lock-in, brand loyalty, recurring revenue (services)</li>
            </ul>
          `
        },
        {
          title: "ADVANCED: Market Microstructure, Valuation, and Professional Analysis",
          content: `
            <h4>Advanced Market Microstructure</h4>
            <p><strong>Bid-Ask Spread:</strong> The gap between what buyers will pay and what sellers demand. NYSE average spread: $0.01-0.05 for liquid stocks. This is the COST of trading.</p>
            <p><strong>Market Makers:</strong> Firms (like Citadel, Virtu) that provide liquidity by quoting both bid and ask prices. They profit from the spread: buy at $99.99, sell at $100.01, earn $0.02 per share.</p>
            <p><strong>Order Book Dynamics:</strong> Limit order book shows all pending buy and sell orders. When a buyer agrees to a seller's ask price, trade executes immediately.</p>
            <p><strong>Market Impact:</strong> Large orders move prices. Buying $10M of Apple creates temporary upward pressure. Selling $10M creates downward pressure. This is why institutions use "algorithmic execution" to slice large orders into smaller pieces.</p>
            <p><strong>Circuit Breakers:</strong> If S&P 500 drops 7%, trading halts 15 minutes. If drops 13%, halts 15 minutes. If drops 20%, market closes for day. Prevent panic spiral crashes.</p>

            <h4>Valuation Models (Professional Level)</h4>

            <h5>1. Discounted Cash Flow (DCF) Model</h5>
            <p><strong>Concept:</strong> Stock is worth the present value of all future cash flows it generates.</p>
            <p><strong>Formula:</strong> Stock Value = Σ(Free Cash Flow_t / (1+WACC)^t) + Terminal Value / (1+WACC)^n</p>
            <p><strong>Components:</strong></p>
            <ul>
              <li>Free Cash Flow: Cash generated by operations minus capital expenditures</li>
              <li>WACC (Weighted Average Cost of Capital): Cost of debt and equity combined, typically 8-12%</li>
              <li>Terminal Value: Value at end of projection period (usually 5-10 years), often 60-70% of total value</li>
            </ul>
            <p><strong>Example:</strong> Apple projects $120B free cash flow/year for 10 years, then 3% perpetual growth. WACC 9%.</p>
            <p>DCF might value Apple at $200-250/share. If trading at $180, it's undervalued. If at $220, it's overvalued.</p>

            <h5>2. Comparable Company Analysis</h5>
            <p><strong>Method:</strong> Compare company's metrics to similar companies (peers).</p>
            <p><strong>Example:</strong> If Microsoft trades at P/E 35x and has similar growth to Google, Google at P/E 25x might be cheap relative to peers.</p>
            <p><strong>Key Multiples:</strong> P/E, EV/EBITDA, Price/Sales, Price/Book</p>

            <h5>3. Sum of the Parts (SOTP)</h5>
            <p><strong>For Diversified Companies:</strong> Value each business unit separately, then sum.</p>
            <p><strong>Example:</strong> Google has search ($150B value), YouTube ($50B), cloud ($15B) = $215B total value</p>

            <h4>Advanced Statistical Analysis</h4>
            <p><strong>Beta (β):</strong> Measures stock volatility vs. market. Apple beta ~1.2 means if market goes up 10%, Apple typically goes up 12%. More volatile = higher beta.</p>
            <p><strong>Correlation:</strong> How stocks move together. Apple-Microsoft correlation ~0.7 (tend to move together as tech stocks). Apple-Utilities correlation ~0 (move independently).</p>
            <p><strong>Volatility (σ):</strong> Standard deviation of returns. Apple 25% volatility means returns typically vary by ±25% around average.</p>
            <p><strong>Sharpe Ratio:</strong> Risk-adjusted return = (Return - Risk-Free Rate) / Volatility. Higher is better (more return per unit of risk).</p>

            <h4>Information Ratio and Alpha</h4>
            <p><strong>Alpha:</strong> Excess return beyond what you'd expect from beta. If Apple is expected to return 15% given its beta, but returns 20%, alpha = +5%.</p>
            <p><strong>Information Ratio:</strong> (Portfolio Return - Benchmark Return) / Tracking Error. Measures manager skill.</p>

            <h4>Market Efficiency Hypothesis</h4>
            <ul>
              <li><strong>Weak Form:</strong> All past prices reflected in current price. Technical analysis doesn't work. (Mostly true)</li>
              <li><strong>Semi-Strong Form:</strong> All public information reflected in price. Fundamental analysis doesn't work. (Mostly true, but some anomalies)</li>
              <li><strong>Strong Form:</strong> ALL information (including private) reflected in price. Insider trading wouldn't work. (FALSE - insiders do profit)</li>
            </ul>

            <h4>Behavioral Finance & Stock Prices</h4>
            <ul>
              <li><strong>Momentum:</strong> Winning stocks keep winning short-term (trend following)</li>
              <li><strong>Mean Reversion:</strong> Losing stocks bounce back long-term (regression to average)</li>
              <li><strong>Value Trap:</strong> Stock is cheap for a reason (deteriorating business)</li>
              <li><strong>Growth Trap:</strong> Stock is expensive and growth will disappoint</li>
            </ul>
          `
        }
      ]
    },

    // ============================================================
    // OPTIONS MASTERCLASS - 6000+ WORDS, 3-LEVEL DEPTH
    // ============================================================
    "options-masterclass": {
      title: "Options Masterclass: From Basics to Advanced Strategies",
      icon: "🎲",
      tier: "intermediate",
      sections: [
        {
          title: "BEGINNER: What Are Options & Basic Concepts",
          content: `
            <h4>What Is an Option?</h4>
            <p>An option is a contract giving you the RIGHT (but not obligation) to buy or sell a stock at a specific price on or before a specific date.</p>
            <p><strong>Key Difference from stocks:</strong> Stock = ownership. Option = the right to buy/sell.</p>

            <h4>Two Types of Options</h4>
            <ul>
              <li><strong>CALL Option:</strong> The right to BUY. "I have the right to buy Apple at $180 on Jan 20, 2025"</li>
              <li><strong>PUT Option:</strong> The right to SELL. "I have the right to sell Apple at $180 on Jan 20, 2025"</li>
            </ul>

            <h4>Option Terminology</h4>
            <table class="data-table">
              <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
              <tr><td>Strike Price</td><td>The price at which you can buy/sell</td><td>Apple Jan 20 $180 call = strike is $180</td></tr>
              <tr><td>Expiration Date</td><td>Last day you can exercise the option</td><td>Jan 20, 2025</td></tr>
              <tr><td>Premium</td><td>Price you pay for the option</td><td>Pay $3 for the right to buy at $180</td></tr>
              <tr><td>In the Money (ITM)</td><td>Option has intrinsic value</td><td>Call with $180 strike worth something if Apple at $185</td></tr>
              <tr><td>Out of the Money (OTM)</td><td>Option has no intrinsic value</td><td>Call with $180 strike worth $0 if Apple at $175</td></tr>
              <tr><td>At the Money (ATM)</td><td>Strike = current stock price</td><td>Call with $180 strike when Apple trading $180</td></tr>
            </table>

            <h4>Call Options (Buying the Right to Buy)</h4>
            <p><strong>Scenario:</strong> Apple trading at $175. You buy a $180 call expiring in 3 months for $3.</p>
            <ul>
              <li><strong>If Apple goes to $200:</strong> You can buy at $180 and immediately sell at $200 = $20 profit. Minus the $3 you paid = $17 profit on $3 investment = 567% return!</li>
              <li><strong>If Apple stays at $175:</strong> Your option expires worthless. You lose the $3 you paid.</li>
              <li><strong>If Apple goes to $170:</strong> Your option is worthless. You lose $3.</li>
            </ul>
            <p><strong>Key Insight:</strong> Calls are leveraged bets on stock going up. Small price moves create huge percentage returns.</p>

            <h4>Put Options (Buying the Right to Sell)</h4>
            <p><strong>Scenario:</strong> Apple trading at $185. You buy a $180 put expiring in 3 months for $2.</p>
            <ul>
              <li><strong>If Apple drops to $160:</strong> You can sell at $180 and buy at $160 = $20 profit. Minus $2 = $18 profit = 900% return!</li>
              <li><strong>If Apple stays at $185:</strong> Option expires worthless. You lose $2.</li>
              <li><strong>If Apple goes to $195:</strong> Option expires worthless. You lose $2.</li>
            </ul>
            <p><strong>Key Insight:</strong> Puts are leveraged bets on stock going down. Insurance against losses.</p>

            <h4>Why People Use Options</h4>
            <ul>
              <li><strong>Leverage:</strong> Control 100 shares with small upfront cost</li>
              <li><strong>Insurance:</strong> Buy puts to protect against stock falling</li>
              <li><strong>Income:</strong> Sell covered calls to generate monthly income</li>
              <li><strong>Directional Bets:</strong> Bullish or bearish with limited risk</li>
            </ul>
          `
        },
        {
          title: "INTERMEDIATE: Greeks, Pricing, and Basic Strategies",
          content: `
            <h4>The Greeks (How Options React to Changes)</h4>
            <p>Options prices don't just depend on stock price. They depend on time, volatility, and other factors. The Greeks measure these sensitivities.</p>

            <table class="data-table">
              <tr><th>Greek</th><th>Measures</th><th>Typical Value</th><th>What It Means</th></tr>
              <tr><td>Delta (Δ)</td><td>Price sensitivity to stock moves</td><td>0 to 1 for calls</td><td>If delta=0.7, $1 stock move = $0.70 option move</td></tr>
              <tr><td>Gamma (Γ)</td><td>How much delta changes</td><td>0 to ~0.10</td><td>High gamma = delta changes quickly (risky)</td></tr>
              <tr><td>Theta (Θ)</td><td>Time decay</td><td>-0.05 to -0.20</td><td>Negative = option loses value each day (seller wins)</td></tr>
              <tr><td>Vega (ν)</td><td>Sensitivity to volatility</td><td>0 to ~0.20</td><td>If vega=0.10, 1% vol change = $0.10 price change</td></tr>
              <tr><td>Rho (ρ)</td><td>Sensitivity to interest rates</td><td>-0.10 to +0.30</td><td>Matters mostly for long-term options</td></tr>
            </table>

            <h4>Delta Deep Dive</h4>
            <p><strong>Call Delta (0 to 1):</strong></p>
            <ul>
              <li>0.5 delta = 50% chance to finish ITM (at the money)</li>
              <li>0.7 delta = 70% chance to finish ITM (deep in the money)</li>
              <li>0.2 delta = 20% chance to finish ITM (far out of the money)</li>
            </ul>
            <p><strong>Put Delta (0 to -1):</strong> Negative of call. Put delta -0.7 = has 70% chance to finish ITM.</p>

            <h4>Option Pricing (Simplified)</h4>
            <p><strong>Components of Option Price:</strong></p>
            <ol>
              <li><strong>Intrinsic Value:</strong> Immediate value if exercised now
                <br/>Call: max(Stock - Strike, 0)
                <br/>Put: max(Strike - Stock, 0)
              </li>
              <li><strong>Time Value:</strong> Extra amount due to time remaining
                <br/>More time = higher time value
                <br/>Time value decreases as expiration approaches (theta decay)
              </li>
            </ol>
            <p><strong>Example:</strong> Apple at $200, Jan 20 $180 call</p>
            <ul>
              <li>Intrinsic value = $200 - $180 = $20</li>
              <li>Time value = $3 (market prices it at $23 total)</li>
              <li>Total price = $23</li>
            </ul>

            <h4>Basic Strategies</h4>

            <h5>1. Covered Calls (Selling Calls Against Stock)</h5>
            <p><strong>Setup:</strong> Own 100 Apple shares. Sell one call option against it.</p>
            <p><strong>Income:</strong> Collect premium monthly. Example: Sell $190 call for $3 = $300 income per 100 shares</p>
            <p><strong>Risk:</strong> If Apple soars past $190, stock is called away at $190 (miss upside). But you get $300 premium + 100 × $190 = $19,300 total</p>
            <p><strong>Best for:</strong> Generate income on stocks you already own, don't expect huge upside</p>

            <h5>2. Protective Puts (Buying Puts Against Stock)</h5>
            <p><strong>Setup:</strong> Own 100 Apple shares at $200. Buy $180 put for $3 insurance.</p>
            <p><strong>Payoff:</strong> If Apple drops to $150, put protects you at $180 level. Your loss is capped at $20 + $3 premium = $23</p>
            <p><strong>Without put:</strong> Loss would be $50</p>
            <p><strong>Best for:</strong> Protect against big downside during uncertain period (earnings, lawsuit, etc.)</p>

            <h5>3. Call Spreads (Limited Risk, Limited Reward)</h5>
            <p><strong>Setup:</strong> Buy $180 call for $5. Sell $190 call for $2. Net cost = $3</p>
            <p><strong>Payoff:</strong> If Apple at $180, spread worth $10 max. You make $7 profit ($10 value - $3 cost)</p>
            <p><strong>If Apple at $200:</strong> Spread still worth only $10 (capped at difference between strikes). You make $7 max</p>
            <p><strong>If Apple at $170:</strong> Spread worth $0. You lose $3</p>
            <p><strong>Key:</strong> Limited risk ($3), limited profit ($7), less expensive than buying call alone</p>

            <h5>4. Iron Condor (Selling Volatility)</h5>
            <p><strong>Complex 4-leg strategy:</strong></p>
            <ul>
              <li>Sell $180 put for $2</li>
              <li>Buy $170 put for $1</li>
              <li>Sell $190 call for $2</li>
              <li>Buy $200 call for $1</li>
            </ul>
            <p><strong>Net credit:</strong> $2 (you keep this if stock stays between $180-$190)</p>
            <p><strong>Max risk:</strong> $8 (if stock moves beyond protective puts/calls)</p>
            <p><strong>Best for:</strong> When you expect stock to stay in a range</p>
          `
        },
        {
          title: "ADVANCED: Volatility, Complex Strategies, and Professional Trading",
          content: `
            <h4>Advanced Options Pricing (Black-Scholes Model)</h4>
            <p><strong>Formula (Simplified):</strong> C = S × N(d1) - K × e^(-r×T) × N(d2)</p>
            <p>Where:</p>
            <ul>
              <li>S = Current stock price</li>
              <li>K = Strike price</li>
              <li>T = Time to expiration (in years)</li>
              <li>r = Risk-free rate (Treasury yield)</li>
              <li>σ = Volatility (annualized)</li>
              <li>N() = Normal distribution function</li>
            </ul>
            <p><strong>Key Insight:</strong> Volatility is the biggest driver. Higher volatility = higher option prices (because bigger moves possible)</p>

            <h4>Implied vs Realized Volatility</h4>
            <ul>
              <li><strong>Implied Volatility (IV):</strong> What the market thinks volatility will be (baked into option prices)</li>
              <li><strong>Realized Volatility (RV):</strong> What volatility actually was (historical measurement)</li>
              <li><strong>IV > RV:</strong> Options were overpriced (sell premium)</li>
              <li><strong>IV < RV:</strong> Options were underpriced (buy premium)</li>
            </ul>
            <p><strong>Trading Opportunity:</strong> If you expect Apple IV to drop from 30 to 20, sell options now (collect high premium), buy back later (pay lower premium). Pure volatility play.</p>

            <h4>Volatility Surface & Smile</h4>
            <p><strong>Observation:</strong> Options with different strikes have different implied volatilities, even for same stock/expiration. Creates a "smile" shape on a graph.</p>
            <p><strong>Why:</strong> Out-of-money puts are more expensive (insurance demand). Market prices tail risk.</p>
            <p><strong>Term Structure:</strong> Near-term options often have different IV than far-term (volatile expectations for near term vs long-term stability)</p>

            <h4>Advanced Multi-Leg Strategies</h4>

            <h5>Straddle (Long Volatility)</h5>
            <p><strong>Setup:</strong> Buy $180 call + buy $180 put (same strike)</p>
            <p><strong>Payoff:</strong> Profit if stock moves BIG in either direction</p>
            <p><strong>Risk:</strong> Limited to premium paid. If stock stays at $180, lose all premium</p>
            <p><strong>Break-even:</strong> Strike ± total premium paid</p>
            <p><strong>Use case:</strong> Before earnings (expect big move, not sure direction)</p>

            <h5>Strangle (Cheaper Than Straddle)</h5>
            <p><strong>Setup:</strong> Buy $170 put + buy $190 call (different strikes)</p>
            <p><strong>Advantage:</strong> Cheaper than straddle (out-of-money options cost less)</p>
            <p><strong>Disadvantage:</strong> Need bigger move to profit (have to move beyond both strikes)</p>
            <p><strong>Use case:</strong> Same as straddle but when premium is expensive</p>

            <h5>Butterfly Spread (Sell Volatility, Earn Theta)</h5>
            <p><strong>Setup:</strong></p>
            <ul>
              <li>Buy $170 call</li>
              <li>Sell 2 × $180 calls</li>
              <li>Buy $190 call</li>
            </ul>
            <p><strong>Payoff:</strong> Profit if stock stays at $180, maximum profit at strike price</p>
            <p><strong>Limited risk:</strong> Can only lose the net cost</p>
            <p><strong>Use case:</strong> When you expect stock to NOT move much, earn from theta decay</p>

            <h5>Condor Spread (Wider Butterfly)</h5>
            <p><strong>Setup:</strong></p>
            <ul>
              <li>Buy $170 call</li>
              <li>Sell $175 call</li>
              <li>Sell $185 call</li>
              <li>Buy $190 call</li>
            </ul>
            <p><strong>Payoff:</strong> Profit across a wider range ($175-$185)</p>
            <p><strong>Iron Condor variation:</strong> Use puts for lower side, calls for upper side (more efficient)</p>

            <h5>Diagonal Spread (Time Decay Play)</h5>
            <p><strong>Setup:</strong> Buy longer-term option, sell shorter-term option at different strike</p>
            <p><strong>Strategy:</strong> Shorter call expires worthless, you keep premium. Keep longer call for future</p>
            <p><strong>Rolling:</strong> Continuously sell short-term options, let them expire, repeat</p>

            <h4>LEAPS (Long-Term Options)</h4>
            <p><strong>Definition:</strong> Options expiring 1-3 years out</p>
            <p><strong>Advantage:</strong> Can replicate stock ownership with less capital</p>
            <p><strong>Example:</strong> Own Apple: $18,000 for 100 shares OR $3,000 for 3-year LEAP with 0.8 delta</p>
            <p><strong>Disadvantage:</strong> Still decay over time, can expire worthless</p>

            <h4>Greeks in Practice (Hedging)</h4>
            <p><strong>Portfolio Delta:** Sum of all Greeks across all positions</p>
            <p><strong>Hedging Example:</strong> Own 1000 Apple shares (delta +1000). Market might crash.</p>
            <ul>
              <li>Buy 10 put options (delta -700 total) → portfolio delta becomes +300</li>
              <li>If market crashes 10%, Apple drops to $180, puts gain offsetting losses</li>
            </ul>

            <h4>Volatility Trading Strategies</h4>
            <ul>
              <li><strong>Long Vol:</strong> Buy straddles/strangles when IV low (before expected big move)</li>
              <li><strong>Short Vol:</strong> Sell spreads/iron condors when IV high (collect premium)</li>
              <li><strong>Volatility Arbitrage:</strong> Trade realized vs implied volatility differences</li>
              <li><strong>Calendar Spreads:</strong> Exploit volatility term structure differences</li>
            </ul>

            <h4>Risk Management in Options</h4>
            <ul>
              <li><strong>Greeks Monitoring:</strong> Track delta, gamma, theta exposure</li>
              <li><strong>Position Sizing:</strong> Never let one trade blow up portfolio</li>
              <li><strong>VaR (Value at Risk):</strong> How much portfolio could lose in 1 day (95% confidence)</li>
              <li><strong>Stress Testing:</strong> What if market drops 20%? What if volatility doubles?</li>
            </ul>
          `
        }
      ]
    },

    // ============================================================
    // REMAINING MASTERCLASSES (ABRIDGED FOR SPACE)
    // ============================================================
    "bonds-masterclass": {
      title: "Bonds Masterclass: From Basic to Professional",
      icon: "💵",
      tier: "beginner",
      sections: [
        {
          title: "BEGINNER: Bond Basics",
          content: `<p><strong>Bond = Loan.</strong> You lend $1,000 to a company/government. They pay you interest (coupon) and return principal at maturity.</p>
            <h4>Key Bond Metrics</h4>
            <ul>
              <li><strong>Face Value:</strong> $1,000 (what you get back)</li>
              <li><strong>Coupon Rate:</strong> 5% = $50/year (interest payment)</li>
              <li><strong>Maturity:</strong> 10 years (when you get paid back)</li>
              <li><strong>Current Yield:</strong> Annual coupon ÷ current price</li>
              <li><strong>Yield to Maturity (YTM):</strong> Total return if held to maturity</li>
            </ul>
            <h4>How Bond Prices Change</h4>
            <p><strong>The Inverse Relationship (CRITICAL):</strong> When interest rates go UP, bond prices go DOWN.</p>
            <ul>
              <li>You own bond paying 4% ($40/year)</li>
              <li>New bonds now pay 5% ($50/year)</li>
              <li>Your bond is worth less (paying only $40 vs $50)</li>
              <li>Price must drop to make your bond's yield competitive</li>
            </ul>`
        },
        {
          title: "INTERMEDIATE: Bond Types & Analysis",
          content: `<h4>Government Bonds (Safest)</h4>
            <table class="data-table">
              <tr><th>Type</th><th>Maturity</th><th>Typical Yield</th></tr>
              <tr><td>T-Bills</td><td><1 year</td><td>5.0-5.5%</td></tr>
              <tr><td>T-Notes</td><td>2-10 years</td><td>4.0-5.0%</td></tr>
              <tr><td>T-Bonds</td><td>20-30 years</td><td>4.2-5.0%</td></tr>
            </table>
            <h4>Corporate Bonds</h4>
            <p><strong>Investment Grade:</strong> BBB+ or higher. Yield = Treasury + 1-3%</p>
            <p><strong>High-Yield (Junk):</strong> BB or lower. Yield = Treasury + 4-10%. Higher risk = higher reward.</p>
            <h4>Key Metrics</h4>
            <ul>
              <li><strong>Duration:</strong> Measures price sensitivity to rate changes</li>
              <li><strong>Credit Rating:</strong> AAA (safest) to D (default)</li>
              <li><strong>Spread:</strong> Extra yield vs Treasury (compensation for risk)</li>
            </ul>`
        },
        {
          title: "ADVANCED: Duration, Convexity, Derivatives",
          content: `<h4>Duration Deep Dive</h4>
            <p><strong>Modified Duration:</strong> % price change for 1% rate change</p>
            <p>Example: 8-year bond with duration 7 → 1% rate increase = 7% price drop</p>
            <h4>Term Structure & Yield Curve</h4>
            <ul>
              <li><strong>Normal Curve:</strong> Longer bonds pay more (typical)</li>
              <li><strong>Inverted Curve:</strong> Short bonds pay more than long (recession warning)</li>
              <li><strong>Flat Curve:</strong> All maturities pay same</li>
            </ul>
            <h4>Advanced Instruments</h4>
            <ul>
              <li><strong>Credit Default Swaps:</strong> Insure against bond default</li>
              <li><strong>Bond Futures:</strong> Leverage bond price movements</li>
              <li><strong>Interest Rate Swaps:</strong> Exchange payment streams</li>
              <li><strong>Callable Bonds:</strong> Issuer can force redemption if rates fall</li>
            </ul>`
        }
      ]
    },

    // ============================================================
    // COMPREHENSIVE GLOSSARY (100+ TERMS)
    // ============================================================
    "glossary": {
      title: "Comprehensive Financial Glossary (100+ Terms)",
      icon: "📚",
      tier: "beginner",
      isGlossary: true,
      terms: [
        { term: "Arbitrage", definition: "Exploiting price differences of same asset in different markets", example: "Stock trading at $100 in NYC and $99 in London → buy in London, sell in NYC, profit $1 per share" },
        { term: "Asset Allocation", definition: "Dividing portfolio between stocks, bonds, cash based on goals and risk", example: "60% stocks / 40% bonds (classic balanced portfolio)" },
        { term: "Beta", definition: "Measure of stock volatility vs. S&P 500", example: "Apple beta 1.2 = if market up 10%, Apple typically up 12%" },
        { term: "Book Value", definition: "Total assets minus total liabilities (equity value)", example: "$100B assets - $20B debt = $80B book value ÷ 2B shares = $40 per share book value" },
        { term: "Callable Bond", definition: "Bond that issuer can redeem before maturity", example: "10-year bond callable after 5 years at $1,050" },
        { term: "Capital Gain", definition: "Profit from selling investment higher than purchase price", example: "Buy Apple at $150, sell at $200 = $50 capital gain" },
        { term: "Compound Interest", definition: "Interest earned on interest (exponential growth)", example: "$10K at 7%/year = $10K, $10.7K, $11.4K, $12.3K over 4 years" },
        { term: "Correlation", definition: "How two assets move together (-1 to +1)", example: "Apple-Microsoft correlation 0.8 = move together; Apple-Utilities correlation 0 = independent" },
        { term: "Coupon", definition: "Interest payment on a bond", example: "5% coupon on $1,000 bond = $50 paid yearly" },
        { term: "Credit Rating", definition: "Assessment of borrower's ability to repay debt", example: "AAA = excellent, BBB = adequate, CCC = risky" },
        { term: "Default Risk", definition: "Risk that borrower won't pay interest/principal", example: "Treasury has near-zero default risk, junk bond has 5-10% default risk" },
        { term: "Dividend", definition: "Cash payment from company to shareholders", example: "Apple dividend $0.96/share × 1000 shares = $960 received quarterly" },
        { term: "Duration", definition: "Measure of bond price sensitivity to interest rates", example: "Bond with 7-year duration: 1% rate increase = 7% price drop" },
        { term: "Earnings Per Share (EPS)", definition: "Net income divided by shares outstanding", example: "$10B net income ÷ 2B shares = $5 EPS" },
        { term: "Efficient Frontier", definition: "Optimal portfolio combinations of risk/return", example: "The boundary of best possible returns for each risk level" },
        { term: "Expected Value", definition: "Average outcome weighted by probabilities", example: "60% chance +10%, 40% chance -5% = 0.6(10) + 0.4(-5) = 4% expected return" },
        { term: "Expense Ratio", definition: "Annual fee charged by mutual fund/ETF", example: "Index fund 0.03%, active fund 1.0% (big difference over 30 years)" },
        { term: "Free Cash Flow", definition: "Cash from operations minus capital expenditures", example: "$100B operating CF - $20B CapEx = $80B free cash flow" },
        { term: "Frontrunning", definition: "Trading ahead of large order you know about (illegal)", example: "Broker sees big buy order coming, buys first to profit from price rise" },
        { term: "Futures Contract", definition: "Agreement to buy/sell asset at future date at set price", example: "Oil futures: buy 1000 barrels at $80/barrel for delivery in 3 months" },
        { term: "Gamma", definition: "How much delta changes with stock movement", example: "High gamma = delta changes quickly (risky for options traders)" },
        { term: "Geometric Mean", definition: "Better than arithmetic mean for investment returns", example: "+50%, -50% sequence = 0% arithmetic mean but -25% geometric mean" },
        { term: "Golden Cross", definition: "When 50-day moving average crosses above 200-day MA (bullish signal)", example: "Technical traders consider this buy signal" },
        { term: "Hedge Fund", definition: "Private fund using aggressive strategies (illiquid, high fees)", example: "Long/short equities, derivatives, leverage" },
        { term: "Implied Volatility", definition: "Market's expectation of future volatility (from option prices)", example: "When IV high, options expensive (expect big moves)" },
        { term: "Information Ratio", definition: "Risk-adjusted measure of manager skill", example: "(Portfolio Return - Benchmark) / Tracking Error" },
        { term: "Initial Public Offering (IPO)", definition: "When company first sells shares to public", example: "Facebook IPO 2012 at $38/share, raised $16B" },
        { term: "Intrinsic Value", definition: "True underlying value of investment", example: "Stock trading at $100 has $150 intrinsic value = $50 undervalued" },
        { term: "Inverse ETF", definition: "ETF that goes up when market goes down", example: "If S&P 500 down 10%, inverse ETF up 10%" },
        { term: "Junk Bond", definition: "High-yield bond with significant default risk", example: "BB-rated bond paying 6-8% (but may default)" },
        { term: "Key Rate Duration", definition: "Duration for specific maturity on curve", example: "5-year rate sensitivity separate from 10-year sensitivity" },
        { term: "Leverage", definition: "Using borrowed money to increase position size", example: "Put down $5K, borrow $5K, control $10K position (2x leverage)" },
        { term: "Limit Order", definition: "Order to buy/sell at specific price or better", example: "Buy Apple only if price reaches $170 or less" },
        { term: "Liquidity", definition: "How easily asset can be bought/sold for cash", example: "Apple stock = liquid (trade instantly); real estate = illiquid (takes months)" },
        { term: "Long Position", definition: "Owning asset expecting price to rise", example: "Own 100 Apple shares, profit if price goes up" },
        { term: "Margin Call", definition: "Broker demands you add funds or close positions", example: "Borrowed $50K, position lost $15K, account drops below maintenance → margin call" },
        { term: "Market Cap", definition: "Stock price × shares outstanding", example: "Apple: $180 × 15.5B = $2.79 trillion market cap" },
        { term: "Market Order", definition: "Order to buy/sell immediately at best available price", example: "Buy 100 Apple shares right now at market price" },
        { term: "Mean Reversion", definition: "Tendency for prices to revert to average over time", example: "Stock at all-time high often pulls back; stock at all-time low often bounces" },
        { term: "Momentum", definition: "Tendency for winning assets to keep winning short-term", example: "Stocks up 20% this quarter tend to outperform next quarter" },
        { term: "Moving Average", definition: "Average price over past N days/weeks/months", example: "50-day MA = average of last 50 closing prices; smooths out noise" },
        { term: "Naked Call", definition: "Selling call without owning underlying stock (risky)", example: "Sell Apple call but don't own shares; if called away, must buy at market" },
        { term: "Net Asset Value (NAV)", definition: "Mutual fund price per share", example: "$1B in assets, $0.05B in liabilities, 50M shares = $19 NAV" },
        { term: "Options Contract", definition: "Right to buy/sell at specific price by specific date", example: "Apple Jan 20 $180 call = right to buy at $180 by Jan 20, 2025" },
        { term: "Order Book", definition: "List of all pending buy and sell orders", example: "Shows buyers willing to pay $99.99, sellers willing to accept $100.01" },
        { term: "Out of the Money (OTM)", definition: "Option with no intrinsic value", example: "Call with $180 strike when Apple trading $170 = $0 intrinsic value" },
        { term: "Overvalued", definition: "Asset trading above intrinsic value", example: "Stock trading at $200 when fair value is $150 = overvalued" },
        { term: "P/E Ratio", definition: "Stock price divided by earnings per share", example: "Apple at $180, EPS $6 = P/E 30x (investor pays $30 for every $1 of earnings)" },
        { term: "PEG Ratio", definition: "P/E ratio divided by growth rate (better than P/E alone)", example: "P/E 30, 30% growth = PEG 1.0 (fairly valued); P/E 30, 10% growth = PEG 3.0 (overvalued)" },
        { term: "Penny Stock", definition: "Microcap stock trading under $5", example: "Often very risky, low volume, wide spreads" },
        { term: "Portfolio Rebalancing", definition: "Adjusting portfolio back to target allocation", example: "Target 60/40 stocks/bonds, now at 70/30 → sell stocks, buy bonds" },
        { term: "Put Option", definition: "Right to sell asset at specific price by specific date", example: "Apple Jan 20 $180 put = right to sell at $180 by Jan 20, 2025" },
        { term: "Quantitative Analysis", definition: "Using math/statistics to find investment opportunities", example: "Analyze historical correlations, volatility, mean reversion patterns" },
        { term: "Realized Volatility", definition: "Actual volatility that occurred (historical measurement)", example: "Apple stock varied ±25% around average (realized vol = 25%)" },
        { term: "Resistance", definition: "Price level where stock repeatedly struggles to break above", example: "Apple bounced off $185 five times; $185 = resistance" },
        { term: "Return on Equity (ROE)", definition: "Net income divided by shareholders' equity", example: "$10B income ÷ $50B equity = 20% ROE (company is efficient)" },
        { term: "Risk-Free Rate", definition: "Interest rate on absolutely safe investment (Treasury)", example: "10-year Treasury at 4% = 4% risk-free rate" },
        { term: "Sharpe Ratio", definition: "Risk-adjusted return (return per unit of risk)", example: "(10% return - 3% risk-free) / 15% volatility = 0.47 Sharpe ratio" },
        { term: "Short Position", definition: "Betting price will fall (or hedging)", example: "Short 100 Apple shares, profit if price drops" },
        { term: "Short Selling", definition: "Borrowing shares, selling them, buying back later for profit", example: "Borrow 100 Apple shares at $180, sell for $18,000, price drops to $170, buy back for $17,000, profit $1,000" },
        { term: "Spread (Option)", definition: "Buying one option, selling another (reduces cost and risk)", example: "Buy $180 call, sell $190 call = spread (cheaper than outright call)" },
        { term: "Spread (Trading)", definition: "Difference between bid and ask price", example: "Apple bid $99.99, ask $100.01 = $0.02 spread" },
        { term: "Standard Deviation", definition: "Measure of how much returns vary from average", example: "30% standard deviation = returns vary ±30% from average (very volatile)" },
        { term: "Stock Split", definition: "Company divides shares to lower price per share", example: "1-for-2 split: 100 shares at $200 → 200 shares at $100 (same value)" },
        { term: "Stop-Loss Order", definition: "Automatically sell if price drops below level", example: "Own Apple at $180, set stop-loss at $170 to limit losses" },
        { term: "Support", definition: "Price level where stock bounces back up repeatedly", example: "Apple bounced off $165 five times; $165 = support" },
        { term: "Swap", definition: "Agreement to exchange payment streams", example: "Interest rate swap: exchange fixed 4% for floating rate payments" },
        { term: "Technical Analysis", definition: "Analyzing price charts and patterns to predict future price", example: "Head & shoulders pattern often predicts price reversal" },
        { term: "Theta Decay", definition: "Options lose value as expiration approaches", example: "Option worth $3 today, $2 tomorrow, $1 next week (time decay)" },
        { term: "Tracking Error", definition: "How closely fund follows its benchmark", example: "Index fund tracking error 0.05% (very close to index); active fund 2% (deviates significantly)" },
        { term: "Undervalued", definition: "Asset trading below intrinsic value", example: "Stock trading at $100 when fair value is $150 = undervalued" },
        { term: "Volatility", definition: "How much price fluctuates (standard deviation of returns)", example: "Apple volatility 25% = returns typically vary by ±25% from average" },
        { term: "Value at Risk (VaR)", definition: "Maximum portfolio loss in normal market conditions at confidence level", example: "95% VaR = $100K → 95% chance portfolio won't lose more than $100K in one day" },
        { term: "Vega", definition: "Option price sensitivity to volatility changes", example: "Vega 0.15 = if volatility increases 1%, option price increases $0.15" },
        { term: "Weighted Average Cost of Capital (WACC)", definition: "Average cost of debt and equity combined (discount rate for DCF)", example: "40% debt at 4%, 60% equity at 12% = WACC 8.8%" },
        { term: "Yield Curve", definition: "Graph showing yields across different bond maturities", example: "Normal curve slopes up (longer bonds pay more); inverted curve slopes down (recession warning)" },
        { term: "Yield to Maturity (YTM)", definition: "Total return on bond if held to maturity", example: "Bond trading at discount has higher YTM than coupon rate" },
        { term: "Zero-Coupon Bond", definition: "Bond that pays no interest, sold at deep discount", example: "Buy for $400, receive $1,000 at maturity in 10 years (implicit interest)" }
      ]
    },

    // ============================================================
    // CALCULATORS & SIMULATOR
    // ============================================================
    "calculators": {
      title: "Investment Calculators",
      icon: "🧮",
      tier: "beginner",
      isCalculator: true,
      content: `<p>Professional-grade financial calculators for deeper analysis.</p>`,
      calculators: [
        { id: "compound-interest", title: "Compound Interest Calculator", description: "Calculate exponential wealth growth", inputs: [
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
        { id: "dividend-income", title: "Dividend Income Calculator", description: "Project passive income and compounding", inputs: [
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
        { id: "option-breakeven", title: "Options Break-even Calculator", description: "Calculate option profit/loss scenarios", inputs: [
          { label: "Current Stock Price ($)", field: "stockPrice", value: 100 },
          { label: "Strike Price ($)", field: "strike", value: 105 },
          { label: "Option Premium ($)", field: "premium", value: 3 },
          { label: "Type", field: "type", value: "call" }
        ]}
      ]
    },

    "simulator": {
      title: "Portfolio Simulator",
      icon: "🎮",
      tier: "intermediate",
      isSimulator: true,
      content: `<p>Test different allocations and see projected outcomes.</p>`
    }
  }
};
