// pages/api/analyze.js
import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Fetch the webpage
        const response = await axios.get(url);
        const html = response.data;

        // Use cheerio to parse the HTML
        const $ = cheerio.load(html);

        // Extract relevant information
        const title = $('title').text();
        const metaDescription = $('meta[name="description"]').attr('content');
        const headings = {
            h1: $('h1').text(),
            h2: $('h2').text(),
            // Add more heading levels as needed
        };
        const imageAlts = $('img')
            .map((_, img) => $(img).attr('alt'))
            .get();
        const links = $('a')
            .map((_, a) => $(a).attr('href'))
            .get();

        // Return the results
        res.json({
            title,
            metaDescription,
            headings,
            imageAlts,
            links,
        });
    } catch (error) {
        console.error('Error fetching URL:', error);
        res.status(500).json({ error: 'Failed to fetch URL' });
    }
}
