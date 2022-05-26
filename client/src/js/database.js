import { openDB } from 'idb';

const DB_NAME = 'jate';

const initdb = async () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(DB_NAME, { keyPath: 'id' });
      console.log('jate database created');
    },
  });

export const putDb = async (content) =>
{
  const todosDb = await openDB(DB_NAME, 1);
  const tx = todosDb.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(DB_NAME);
  await store.put({ id: 1, content });
}

export const getDb = async () =>
{
  const todosDb = await openDB(DB_NAME, 1);
  const tx = todosDb.transaction(DB_NAME, 'readonly');
  const store = tx.objectStore(DB_NAME);
  const request = store.get(1);
  const result = await request;
  return result.content;
}

initdb();
