import { useState } from 'react';
import axios from 'axios';

function SEOChecker() {
    const [url, setUrl] = useState('');
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to analyze the URL
    const analyzeUrl = async () => {
        if (!url) return;

        setLoading(true);
        try {
            // Fetch the analysis data from the server
            const response = await axios.get('/api/analyze', {
                params: { url }
            });

            // Update the state with analysis data
            setAnalysis(response.data);
        } catch (error) {
            console.error('Error fetching URL:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>SEO Checker Tool</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ width: '80%', padding: '10px' }}
                    placeholder="Enter a URL to analyze..."
                />
                <button
                    onClick={analyzeUrl}
                    style={{
                        padding: '10px',
                        marginLeft: '10px',
                        backgroundColor: '#4CAF50',
                        color: '#fff'
                    }}
                >
                    Analyze
                </button>
            </div>

            {/* Display loading state */}
            {loading && <p>Loading...</p>}

            {/* Display analysis results */}
            {analysis && (
                <div>
                    <h2>Analysis Results</h2>

                    {/* Display Title */}
                    <p><strong>Title:</strong> {analysis.title}</p>

                    {/* Display Meta Description */}
                    <p><strong>Meta Description:</strong> {analysis.metaDescription}</p>

                    {/* Display Headings */}
                    <h3>Headings:</h3>
                    <ul>
                        {Object.entries(analysis.headings).map(([level, heading], index) => (
                            <li key={index}>
                                <strong>{level.toUpperCase()}:</strong> {heading}
                            </li>
                        ))}
                    </ul>

                    {/* Display Image Alt Texts */}
                    <h3>Image Alt Texts:</h3>
                    <ul>
                        {Array.isArray(analysis.imageAlts) && analysis.imageAlts.map((alt, index) => (
                            <li key={index}>{alt}</li>
                        ))}
                    </ul>

                    {/* Display Links */}
                    <h3>Links:</h3>
                    <ul>
                        {Array.isArray(analysis.links) && analysis.links.map((link, index) => (
                            <li key={index}>
                                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Conditionally display iframe for website snapshot */}
                    {url && (
                        <div style={{ border: '1px solid #ccc', margin: '10px 0', overflow: 'auto' }}>
                            <iframe
                                src={url}
                                style={{ width: '100%', height: '400px', border: 'none' }}
                                title="Website Snapshot"
                            ></iframe>
                        </div>
                    )}

                    {/* Additional Features */}
                    {/* Schema Markup Analysis */}
                    {analysis.schemaMarkup && (
                        <div>
                            <h3>Schema Markup:</h3>
                            <pre>{JSON.stringify(analysis.schemaMarkup, null, 2)}</pre>
                        </div>
                    )}

                    {/* Backlink Analysis */}
                    {Array.isArray(analysis.backlinks) && analysis.backlinks.length > 0 && (
                        <div>
                            <h3>Backlinks:</h3>
                            <ul>
                                {analysis.backlinks.map((backlink, index) => (
                                    <li key={index}>{backlink}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Content Readability Analysis */}
                    {analysis.contentReadability && (
                        <div>
                            <h3>Content Readability:</h3>
                            <p>{analysis.contentReadability.readabilityScore} (e.g., Flesch Reading Ease)</p>
                            {/* Add more readability metrics as needed */}
                        </div>
                    )}

                    {/* Social Media Integration */}
                    {analysis.socialMediaIntegration && (
                        <div>
                            <h3>Social Media Integration:</h3>
                            {/* Display social media integration analysis */}
                            <p>{analysis.socialMediaIntegration}</p>
                        </div>
                    )}

                    {/* Security Check */}
                    {analysis.securityCheck && (
                        <div>
                            <h3>Security Check:</h3>
                            {/* Display security check analysis */}
                            <p>{analysis.securityCheck}</p>
                        </div>
                    )}

                    {/* Broken Link Checker */}
                    {Array.isArray(analysis.brokenLinks) && analysis.brokenLinks.length > 0 && (
                        <div>
                            <h3>Broken Links:</h3>
                            <ul>
                                {analysis.brokenLinks.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Robots.txt and Sitemap Analysis */}
                    {analysis.robotsTxt && (
                        <div>
                            <h3>Robots.txt:</h3>
                            <pre>{JSON.stringify(analysis.robotsTxt, null, 2)}</pre>
                        </div>
                    )}

                    {analysis.sitemap && (
                        <div>
                            <h3>Sitemap:</h3>
                            <pre>{JSON.stringify(analysis.sitemap, null, 2)}</pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SEOChecker;
