import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readJsonFile = <T>(filePath: string): T => {
    try {
        const fileContent = readFileSync(resolve(__dirname, filePath), 'utf8');
        const parsedData = JSON.parse(fileContent) as T;

        if (
            !Array.isArray(parsedData) ||
            !parsedData.every(
                item =>
                    typeof item === 'object' && 'id' in item && 'name' in item,
            )
        ) {
            throw new Error(`Invalid data structure in ${filePath}`);
        }

        return parsedData;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        throw error;
    }
};
