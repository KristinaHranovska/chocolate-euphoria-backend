import swaggerJsdoc from 'swagger-jsdoc';


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Chocolate Euphoria API',
            version: '1.0.0',
            description: 'API for Chocolate Euphoria',
        },
        servers: [
            {
                url: 'https://chocolate-euphoria-backend.onrender.com',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

export default specs;