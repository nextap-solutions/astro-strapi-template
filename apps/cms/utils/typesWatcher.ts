import { watch, promises as fsPromises } from 'fs';
import * as path from 'path';

async function copyFile(sourcePath: string, destPath: string) {
  try {
    await fsPromises.copyFile(sourcePath, destPath);
  } catch (error) {
    console.error(`Error copying file from ${sourcePath} to ${destPath}: `, error);
  }
}

const typesWatcher = () => {
  const localTypesDIr = path.resolve(__dirname, '../../types/generated/');
  const gloablTypesDir = path.resolve(__dirname, '../../../../libs/cms-types/src/lib');

  const watcher = watch(localTypesDIr, { recursive: true });

  watcher.on('change', async (changeEvent, filename) => {
    if (filename && changeEvent === 'change') {
      const sourceFilePath = path.join(localTypesDIr, filename.toString());
      const destinationFilePath = path.join(gloablTypesDir, filename.toString());
      await copyFile(sourceFilePath, destinationFilePath);
    }
  });
}

export default typesWatcher;
