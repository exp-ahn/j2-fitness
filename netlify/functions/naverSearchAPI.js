const axios = require('axios');

exports.handler = async (event) => {
    const query = event.queryStringParameters.query || '';
    const display = event.queryStringParameters.display || 10;
    const start = event.queryStringParameters.start || 1;
    const sort = event.queryStringParameters.sort || 'sim';

    try {
        const response = await axios.get('https://openapi.naver.com/v1/search/blog.json', {
            params: { query, display, start, sort },
            headers: {
                'X-Naver-Client-Id': process.env.VUE_APP_NAVER_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.VUE_APP_NAVER_CLIENT_SECRET,
            },
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
            headers: {
                'Content-Type': 'application/json',
            }
        };
    } catch (error) {
        return {
            statusCode: error.response?.status || 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};