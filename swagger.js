import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

const swaggerFilePath = path.resolve(__dirname, 'swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, 'utf8'));

export default swaggerDocument;
