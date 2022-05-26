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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>
{
  console.log('Post to the database');
  console.log(content);
  const todosDb = await openDB(DB_NAME, 1);
  const tx = todosDb.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(DB_NAME);
  try
  {
  await store.delete(1);
  await store.put({ id: 1, content });
  }catch(err){ console.error(err); }
  console.log('END Post to the database');
  //const request = store.add({ id, content });
  //const result = await request;
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>
{
  console.log('GET all from the database');
  const todosDb = await openDB(DB_NAME, 1);
  const tx = todosDb.transaction(DB_NAME, 'readonly');
  const store = tx.objectStore(DB_NAME);
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result.content);
  return result.content;
}

initdb();
