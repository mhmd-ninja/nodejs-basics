import { writeFile, stat } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirName = dirname(filePath);
const targetFile = join(dirName, "files", "fresh.txt");

const content = "I am fresh and young";

const isFile = (path) => stat(path).then(() => true).catch(() => false);

const create = async () => {
    if (await isFile(targetFile)) throw Error("FS operation failed")

    try {
        await writeFile(targetFile, content)
    } catch (err) {
        throw Error("FS operation failed")
    }
};

await create();