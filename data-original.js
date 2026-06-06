const DATA = {
  nav: [
    {
      group: "Fundamentals",
      items: [
        { id: "home", label: "Home", ico: "🏠", tier: "beginner" },
        { id: "stocks-101", label: "What Are Stocks?", ico: "📈", tier: "beginner" },
        { id: "bonds-101", label: "Understanding Bonds", ico: "💵", tier: "beginner" },
        { id: "mutual-funds", label: "Mutual Funds & ETFs", ico: "🎯", tier: "beginner" },
      ]
    },
    {
      group: "Intermediate",
      items: [
        { id: "portfolio", label: "Building Portfolios", ico: "🏗️", tier: "intermediate" },
        { id: "asset-allocation", label: "Asset Allocation", ico: "⚖️", tier: "intermediate" },
        { id: "risk-return", label: "Risk & Return", ico: "⚠️", tier: "intermediate" },
        { id: "diversification", label: "Diversification", ico: "🌍", tier: "intermediate" },
      ]
    },
    {
      group: "Advanced",
      items: [
        { id: "options-101", label: "Options Basics", ico: "🎲", tier: "advanced" },
        { id: "technical-analysis", label: "Technical Analysis", ico: "📊", tier: "advanced" },
        { id: "market-cycles", label: "Market Cycles", ico: "🔄", tier: "advanced" },
        { id: "behavioral-finance", label: "Behavioral Finance", ico: "🧠", tier: "advanced" },
      ]
    },
    {
      group: "Tools",
      items: [
        { id: "calculators", label: "Investment Calculators", ico: "🧮", tier: "beginner" },
        { id: "glossary", label: "Financial Glossary", ico: "📚", tier: "beginner" },
        { id: "simulator", label: "Portfolio Simulator", ico: "🎮", tier: "intermediate" },
      ]
    }
  ],

  lessons: {
    "stocks-101": {
      title: "What Are Stocks?",
      icon: "📈",
      tier: "beginner",
      sections: [
        {
          title: "Stock Basics",
          content: `
            <p><strong>A stock represents ownership in a company.</strong> When you buy stock, you own a small piece of that business. Companies issue stocks to raise capital for growth and operations.</p>

            <h4>Key Concepts:</h4>
            <ul>
              <li><strong>Share:</strong> A single unit of ownership in a company</li>
              <li><strong>Shareholder:</strong> A person who owns shares</li>
              <li><strong>Stock Exchange:</strong> Where stocks are traded (NYSE, NASDAQ, etc.)</li>
              <li><strong>Ticker Symbol:</strong> A code representing the stock (e.g., AAPL for Apple)</li>
            </ul>

            <h4>Why Companies Issue Stock:</h4>
            <ul>
              <li>Raise capital for expansion</li>
              <li>Fund research and development</li>
              <li>Pay off debt</li>
              <li>Build brand credibility</li>
            </ul>
          `
        },
        {
          title: "How Stocks Work",
          content: `
            <p>Stock prices fluctuate based on company performance, market conditions, and investor sentiment.</p>

            <h4>Stock Price Drivers:</h4>
            <div class="info-box">
              <ul>
                <li><strong>Earnings:</strong> Higher profits typically lead to stock appreciation</li>
                <li><strong>Growth Prospects:</strong> Future potential influences current price</li>
                <li><strong>Market Sentiment:</strong> Investor emotions and confidence matter</li>
                <li><strong>Economic Conditions:</strong> Interest rates, inflation, and GDP affect all stocks</li>
              </ul>
            </div>

            <h4>Dividend Payments:</h4>
            <p>Many profitable companies pay <strong>dividends</strong> — cash payments to shareholders. Not all stocks pay dividends, but dividend-paying stocks provide two income sources:</p>
            <ul>
              <li>Capital appreciation (price increase)</li>
              <li>Dividend income (regular payments)</li>
            </ul>
          `
        },
        {
          title: "Real Example: Apple Stock",
          content: `
            <p><strong>Ticker: AAPL</strong></p>

            <h4>Historical Example (Simplified):</h4>
            <table class="data-table">
              <tr>
                <th>Year</th>
                <th>Price</th>
                <th>P/E Ratio</th>
                <th>Dividend</th>
              </tr>
              <tr>
                <td>2019</td>
                <td>$73.41</td>
                <td>15.5</td>
                <td>$2.97</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>$177.57</td>
                <td>27.3</td>
                <td>$3.28</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>$189.95</td>
                <td>28.1</td>
                <td>$3.84</td>
              </tr>
            </table>

            <p><strong>What This Shows:</strong></p>
            <ul>
              <li>Stock prices rise over time for quality companies</li>
              <li>P/E ratio (price-to-earnings) indicates valuation</li>
              <li>Companies increase dividends as profits grow</li>
            </ul>
          `
        },
        {
          title: "Stock Types",
          content: `
            <h4>Common Stock vs. Preferred Stock:</h4>
            <table class="comparison-table">
              <tr>
                <th>Feature</th>
                <th>Common Stock</th>
                <th>Preferred Stock</th>
              </tr>
              <tr>
                <td>Voting Rights</td>
                <td>✓ Yes</td>
                <td>✗ Usually No</td>
              </tr>
              <tr>
                <td>Dividend</td>
                <td>Variable</td>
                <td>Fixed & Higher</td>
              </tr>
              <tr>
                <td>Priority in Bankruptcy</td>
                <td>Lower</td>
                <td>Higher</td>
              </tr>
              <tr>
                <td>Growth Potential</td>
                <td>Higher</td>
                <td>Lower</td>
              </tr>
            </table>

            <p><strong>Most investors own common stock.</strong> Preferred stock is more bond-like — stable but less growth potential.</p>
          `
        }
      ]
    },

    "bonds-101": {
      title: "Understanding Bonds",
      icon: "💵",
      tier: "beginner",
      sections: [
        {
          title: "What Is a Bond?",
          content: `
            <p><strong>A bond is a loan you give to a company or government.</strong> In exchange, they promise to repay you with interest over a specific period.</p>

            <h4>Bond Components:</h4>
            <ul>
              <li><strong>Principal (Face Value):</strong> The amount borrowed (e.g., $1,000)</li>
              <li><strong>Coupon Rate:</strong> Annual interest percentage (e.g., 4%)</li>
              <li><strong>Maturity Date:</strong> When the bond matures and principal is returned</li>
              <li><strong>Coupon Payments:</strong> Regular interest payments (usually semi-annual)</li>
            </ul>

            <h4>Simple Example:</h4>
            <p>You buy a $1,000 bond with a 5% coupon and 10-year maturity:</p>
            <ul>
              <li>You pay: $1,000 today</li>
              <li>You receive: $25 every 6 months (5% ÷ 2)</li>
              <li>After 10 years: You get your $1,000 back</li>
              <li>Total interest earned: $500</li>
            </ul>
          `
        },
        {
          title: "Bond Types",
          content: `
            <h4>Major Bond Categories:</h4>

            <h5>🏛️ Government Bonds</h5>
            <ul>
              <li><strong>Treasury Bonds:</strong> Backed by the US government (safest)</li>
              <li><strong>T-Bills:</strong> Short-term (under 1 year), no interest</li>
              <li><strong>T-Notes:</strong> Medium-term (2-10 years)</li>
              <li><strong>T-Bonds:</strong> Long-term (20-30 years)</li>
            </ul>

            <h5>🏢 Corporate Bonds</h5>
            <ul>
              <li>Issued by companies</li>
              <li>Higher yield but more risk than Treasuries</li>
              <li>Quality varies (investment grade vs. junk bonds)</li>
            </ul>

            <h5>🏘️ Municipal Bonds</h5>
            <ul>
              <li>Issued by cities and states</li>
              <li>Often tax-free for US residents</li>
              <li>Support local infrastructure projects</li>
            </ul>
          `
        },
        {
          title: "Bond Prices & Yields",
          content: `
            <p><strong>Important: Bond prices move inversely with interest rates.</strong></p>

            <h4>The Interest Rate Relationship:</h4>
            <ul>
              <li><strong>Rates Rise:</strong> Old bond prices fall (older bonds less attractive)</li>
              <li><strong>Rates Fall:</strong> Old bond prices rise (older bonds more attractive)</li>
            </ul>

            <h4>Example:</h4>
            <p>You own a $1,000 bond paying 4% ($40/year). New bonds now pay 5% ($50/year).</p>
            <ul>
              <li>Your bond is worth less on the secondary market</li>
              <li>Someone would only buy it at a discount (e.g., $800)</li>
              <li>This discount brings the effective yield to 5%</li>
            </ul>

            <h4>Bond Duration:</h4>
            <p>Longer-maturity bonds are more sensitive to rate changes. A 30-year bond fluctuates much more than a 2-year bond when rates change.</p>
          `
        }
      ]
    },

    "mutual-funds": {
      title: "Mutual Funds & ETFs",
      icon: "🎯",
      tier: "beginner",
      sections: [
        {
          title: "What Are Mutual Funds?",
          content: `
            <p><strong>A mutual fund pools money from many investors to buy a diversified portfolio of stocks, bonds, or other securities.</strong></p>

            <h4>How It Works:</h4>
            <ol>
              <li>Investors contribute money to the fund</li>
              <li>A professional manager invests in securities</li>
              <li>Returns (and losses) are shared proportionally</li>
              <li>You receive units/shares in the fund</li>
            </ol>

            <h4>Key Advantages:</h4>
            <ul>
              <li><strong>Diversification:</strong> One fund holds 50-500+ securities</li>
              <li><strong>Professional Management:</strong> Expert picks securities</li>
              <li><strong>Accessibility:</strong> Start with small amounts ($500-$1,000)</li>
              <li><strong>Lower Costs:</strong> Shared expenses across all investors</li>
            </ul>
          `
        },
        {
          title: "Mutual Fund Types",
          content: `
            <h4>By Strategy:</h4>
            <ul>
              <li><strong>Equity Funds:</strong> Invest in stocks (growth-focused)</li>
              <li><strong>Bond Funds:</strong> Invest in bonds (income-focused)</li>
              <li><strong>Balanced Funds:</strong> Mix of stocks and bonds (moderate)</li>
              <li><strong>Index Funds:</strong> Track market indexes (passive, low-cost)</li>
            </ul>

            <h4>By Management Style:</h4>
            <ul>
              <li><strong>Active Management:</strong> Manager tries to beat the market (higher fees)</li>
              <li><strong>Passive Management:</strong> Tracks an index like S&P 500 (lower fees)</li>
            </ul>

            <h4>Cost Impact Example:</h4>
            <table class="data-table">
              <tr>
                <th>Fund Type</th>
                <th>Annual Fee</th>
                <th>$10K over 30 years</th>
              </tr>
              <tr>
                <td>Index Fund</td>
                <td>0.03%</td>
                <td>$87,641</td>
              </tr>
              <tr>
                <td>Active Fund</td>
                <td>0.75%</td>
                <td>$75,430</td>
              </tr>
              <tr>
                <td>High-Fee Fund</td>
                <td>1.50%</td>
                <td>$68,125</td>
              </tr>
            </table>

            <p><strong>Note:</strong> Assuming 7% annual return. Fees matter!</p>
          `
        },
        {
          title: "ETFs vs. Mutual Funds",
          content: `
            <table class="comparison-table">
              <tr>
                <th>Feature</th>
                <th>Mutual Funds</th>
                <th>ETFs</th>
              </tr>
              <tr>
                <td>Trading</td>
                <td>Once per day (fixed price)</td>
                <td>Throughout day (market price)</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>Often higher</td>
                <td>Usually lower</td>
              </tr>
              <tr>
                <td>Minimum Investment</td>
                <td>Often $1,000+</td>
                <td>Price of one share (~$50-300)</td>
              </tr>
              <tr>
                <td>Tax Efficiency</td>
                <td>Lower</td>
                <td>Higher</td>
              </tr>
              <tr>
                <td>Transparency</td>
                <td>Daily holdings</td>
                <td>Real-time holdings</td>
              </tr>
            </table>

            <p><strong>For most beginners: ETFs are often the better choice.</strong> Lower costs, better tax efficiency, and easier to trade.</p>
          `
        }
      ]
    },

    "portfolio": {
      title: "Building Portfolios",
      icon: "🏗️",
      tier: "intermediate",
      sections: [
        {
          title: "What Is a Portfolio?",
          content: `
            <p><strong>A portfolio is your collection of investments.</strong> The goal is to build a diversified mix that matches your goals, risk tolerance, and time horizon.</p>

            <h4>Key Portfolio Principles:</h4>
            <ul>
              <li><strong>Diversification:</strong> Spread money across multiple asset types</li>
              <li><strong>Asset Allocation:</strong> Decide % in stocks, bonds, cash</li>
              <li><strong>Rebalancing:</strong> Periodically restore target allocations</li>
              <li><strong>Long-term Focus:</strong> Don't react to short-term market swings</li>
            </ul>
          `
        },
        {
          title: "Sample Portfolios by Age",
          content: `
            <h4>Age 25 (Aggressive Growth):</h4>
            <ul>
              <li>80% Stocks / 20% Bonds</li>
              <li>Reason: Decades to recover from downturns</li>
              <li>Example: 80% index funds, 20% bond ETFs</li>
            </ul>

            <h4>Age 40 (Balanced):</h4>
            <ul>
              <li>60% Stocks / 40% Bonds</li>
              <li>Reason: Moderate risk, steady growth</li>
              <li>Example: 40% large-cap, 20% small-cap, 40% bonds</li>
            </ul>

            <h4>Age 60 (Conservative):</h4>
            <ul>
              <li>40% Stocks / 60% Bonds</li>
              <li>Reason: Preserve capital, steady income</li>
              <li>Example: 40% dividend stocks, 60% bonds/fixed income</li>
            </ul>
          `
        }
      ]
    },

    "calculators": {
      title: "Investment Calculators",
      icon: "🧮",
      tier: "beginner",
      isCalculator: true,
      content: `
        <p>Use these tools to understand investment concepts and make informed decisions.</p>
      `,
      calculators: [
        {
          id: "compound-interest",
          title: "Compound Interest Calculator",
          description: "See how money grows over time with compound interest",
          inputs: [
            { label: "Initial Investment ($)", field: "principal", value: 10000 },
            { label: "Annual Return (%)", field: "rate", value: 7 },
            { label: "Years", field: "years", value: 30 },
            { label: "Annual Contribution ($)", field: "contribution", value: 5000 }
          ],
          formula: "Future Value = Principal × (1 + Rate)^Years + (Annual Contribution × [((1 + Rate)^Years - 1) / Rate])"
        },
        {
          id: "stock-profit",
          title: "Stock Profit/Loss Calculator",
          description: "Calculate your gains or losses on a stock trade",
          inputs: [
            { label: "Purchase Price ($)", field: "buyPrice", value: 50 },
            { label: "Current Price ($)", field: "sellPrice", value: 75 },
            { label: "Number of Shares", field: "shares", value: 100 },
            { label: "Commission per Trade ($)", field: "commission", value: 10 }
          ]
        },
        {
          id: "dividend-income",
          title: "Dividend Income Calculator",
          description: "Calculate annual income from dividend-paying stocks",
          inputs: [
            { label: "Investment Amount ($)", field: "investment", value: 50000 },
            { label: "Dividend Yield (%)", field: "yield", value: 3.5 },
            { label: "Reinvest Dividends?", field: "reinvest", value: "yes" }
          ]
        }
      ]
    },

    "glossary": {
      title: "Financial Glossary",
      icon: "📚",
      tier: "beginner",
      isGlossary: true,
      terms: [
        {
          term: "Asset",
          definition: "Anything of value you own",
          example: "Stocks, bonds, real estate, cash"
        },
        {
          term: "Asset Allocation",
          definition: "How you divide investments among asset classes (stocks, bonds, cash)",
          example: "60% stocks, 40% bonds"
        },
        {
          term: "Bear Market",
          definition: "A market declining by 20% or more from recent highs",
          example: "2008 financial crisis was a severe bear market"
        },
        {
          term: "Bull Market",
          definition: "A market rising with investor confidence",
          example: "The 1980s-1990s was a strong bull market"
        },
        {
          term: "Capital Gain",
          definition: "Profit from selling an investment for more than you paid",
          example: "Buy Apple at $100, sell at $150 = $50 capital gain"
        },
        {
          term: "Diversification",
          definition: "Spreading investments across different securities to reduce risk",
          example: "Owning stocks, bonds, and real estate instead of just stocks"
        },
        {
          term: "Dividend",
          definition: "Cash payment a company pays shareholders from profits",
          example: "Apple might pay $1 dividend per share quarterly"
        },
        {
          term: "Dollar-Cost Averaging",
          definition: "Investing fixed amount regularly regardless of price",
          example: "Investing $500/month in index funds"
        },
        {
          term: "ETF",
          definition: "Exchange-Traded Fund - a basket of securities trading like a stock",
          example: "SPY tracks the S&P 500 index"
        },
        {
          term: "Fee",
          definition: "Cost charged by investment managers or platforms",
          example: "Index fund might charge 0.03% annual fee"
        },
        {
          term: "Inflation",
          definition: "General increase in prices of goods and services",
          example: "If inflation is 3%, your money buys 3% less next year"
        },
        {
          term: "IPO",
          definition: "Initial Public Offering - when a company's stock becomes publicly traded",
          example: "Facebook's IPO in 2012"
        },
        {
          term: "Liquidity",
          definition: "How quickly an asset can be sold for cash",
          example: "Stocks are liquid; real estate is illiquid"
        },
        {
          term: "Market Capitalization",
          definition: "Total market value of a company (share price × shares outstanding)",
          example: "Apple's market cap exceeds $2 trillion"
        },
        {
          term: "P/E Ratio",
          definition: "Price-to-Earnings - stock price divided by annual earnings",
          example: "If stock is $100 and earnings are $5, P/E is 20"
        },
        {
          term: "Rebalancing",
          definition: "Adjusting portfolio to maintain target asset allocation",
          example: "Selling stocks and buying bonds to return to 60/40"
        },
        {
          term: "Return on Investment (ROI)",
          definition: "Profit/loss as a percentage of initial investment",
          example: "Invest $1,000, make $100 = 10% ROI"
        },
        {
          term: "Risk Tolerance",
          definition: "Your ability to handle investment fluctuations without panic",
          example: "High tolerance = comfortable with 50% swings"
        },
        {
          term: "Volatility",
          definition: "How much and how often a security's price fluctuates",
          example: "Tech stocks are more volatile than bonds"
        },
        {
          term: "Yield",
          definition: "Annual income from an investment as percentage of its value",
          example: "Bond paying $50 on $1,000 investment = 5% yield"
        }
      ]
    }
  }
};
