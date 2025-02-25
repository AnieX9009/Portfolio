import React, { useState } from "react";
import "../components/CSS/InsightsSection.css";

const InsightsSection = () => {
    const [activeTab, setActiveTab] = useState("Publications");
    const [currentPage, setCurrentPage] = useState(1);

    const insightsData = [
        { author: "Liuren Wu and Yuachao Zhang", title: "Common Pricing of Decentralized Risk: A Linear Option Pricing Model", journal: "Review of Financial Studies,  forthcoming.", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4248508" },
        { author: "Meng Tian and Liuren Wu", title: "Cross-sectional Variation of Option Implied Volatility Skew", journal: "Management Science, 2024, 70(6),", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3707006" },
        { author: "Meng Tian and Liuren Wu,", title: "Limits of Arbitrage and Primary Risk Taking in Derivative Securities,", journal: "Review of Asset Pricing Studies, 2023, 13(3),", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3779350" },
        { author: "Peter Carr and Liuren Wu,", title: "Decomposing Long Bond Returns: A Decentralized Theory,", journal: "Review of Finance, 2023, 27(3),", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3430004" },
        { author: "Liuren Wu,", title: "Centrality of the Supply-Chain Network,", journal: "Annual Reviews In Modern Quantitative Finance, Eds. Andrey Itkin, 2023, Volume 1.", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2651786" },
        { author: "Francisco Paneranda and Liuren Wu", title: "Targets, Predictability, and Performance,", journal: "Management Science, 2022, 68(2), ", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3728974" },
        { author: "Peter Carr, Liuren Wu, and Yuzhao Zhang, ", title: "Probabilistic Interpretation of Black Implied Volatility, Options - 45 Years Since the Publication of the Black-Scholes-Merton Model,", journal: "World Scientific, 2022." },
        { author: "Peter Carr and Liuren Wu,", title: "Option Profit and Loss Attribution and Pricing: A New Framework,", journal: "Journal of Finance, 2020, 75(4),", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3148796" },
        { author: "Malick Sy and Liuren Wu,", title: "The Shale Revolution and Shifting Crude Dynamics,", journal: "Journal of Applied Econometrics, 2020, 35(2),", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2992372" },
        { author: "Peter Carr, Liuren Wu, and Zhibai Zhang,,", title: "Using Machine Learning to Predict Realized Variance, ", journal: "Journal of Investment Management, 2020, 18(2), " },
        { author: "Jian Hua, and Liuren Wu,", title: "Monetary Policy Rule as a Bridge: Predicting Inflation without Predictive Regressions,", journal: "Journal of Financial and Quantitative Analysis, 2018, 53(6),", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2407256" },
        { author: "Liuren Wu,", title: " Estimating Risk-Return Relations with Analysts Price Targets,", journal: "Journal of Banking and Finance, 2018,", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3198431" },
        { author: "Laurent E. Calvet, Adlai J. Fisher and Liuren Wu,", title: " Staying on Top of the Curve: A Cascade Model of the Term Structure Dynamics,", journal: " Journal of Financial and Quantitative Analysis, 2018, 53(2),", link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1573392" },

    ];

    const itemsPerPage = 6;
    const totalPages = Math.ceil(insightsData.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedData = insightsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="insights-container">
            <div className="insights-box">
                <h2 className="insights-title">Insights</h2>
                <div className="sidebar">
                    {[
                        "Publications",
                        "Working Papers",
                        "Talks",
                        "Search",
                    ].map((tab) => (
                        <button
                            key={tab}
                            className={`sidebar-btn ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="insights-content">
                {paginatedData.map((item, index) => (
                    <div key={index} className="insight-item">
                        <p className="insight-author">{item.author}</p>
                        <p className="insight-title">
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                            ) : (
                                item.title
                            )}
                        </p>
                        <p className="insight-journal">{item.journal}</p>
                    </div>
                ))}
                <div className="pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
