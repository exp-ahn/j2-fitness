const express = require('express');
const serverless = require('serverless-http');
const axios = require('axios');
require('dotenv').config();

const app = express();
const router = express.Router();

router.get('/proxy', async (req, res) => {
    const { query, display = 10, start = 1, sort = 'sim' } = req.query;

    try {
        const response = await axios.get('https://openapi.naver.com/v1/search/blog.json', {
            params: { query, display, start, sort },
            headers: {
                'X-Naver-Client-Id': process.env.VUE_APP_NAVER_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.VUE_APP_NAVER_CLIENT_SECRET,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

app.use(router);

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});
// app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);