import React, { useState } from 'react';

export default function SitemapGenerator() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [sitemap, setSitemap] = useState(null);

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };

    const generateSitemap = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/sitemap?url=${encodeURIComponent(url)}`);
            if (response.ok) {
                const sitemapXML = await response.text();
                setSitemap(sitemapXML);
            } else {
                console.error('Error fetching sitemap:', response.statusText);
            }
        } catch (error) {
            console.error('Error generating sitemap:', error);
        }
        setLoading(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Sitemap Generator</h1>
            <input
                type="url"
                value={url}
                onChange={handleInputChange}
                placeholder="Enter your website URL"
                required
                style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
            />
            <button onClick={generateSitemap} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Sitemap'}
            </button>
            {sitemap && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Sitemap XML</h2>
                    <textarea
                        value={sitemap}
                        readOnly
                        rows={15}
                        cols={80}
                        style={{ width: '100%', marginBottom: '10px' }}
                    ></textarea>
                    <a href={`data:application/xml;charset=utf-8,${encodeURIComponent(sitemap)}`} download="sitemap.xml">
                        Download Sitemap
                    </a>
                </div>
            )}
        </div>
    );
}
