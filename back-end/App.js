export async function getDataFromDB(db) {
  
  // Reference to the document in the "User" collection named "Example"
  const userDocRef = db.collection('user').doc('example');

  try {
      const doc = await userDocRef.get(); // Wait for the document retrieval
      if (!doc.exists) {
          console.log('Document not found!');
          return null; // Return null if document doesn't exist
      } else {
          // Return the document data
          return doc.data();
      }
  } catch (error) {
      console.error('Error getting document:', error);
      throw error; // Throw the error to handle it in the calling code
  }
}

export async function saveDataToDB (db) {
  try {
    const data = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
    };

    db.collection('user').add(data)
      .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      return docRef.id;
    })
  }
  catch (error) {
    console.error('Error saving document:', error);
    throw error; // Throw the error to handle it in the calling code
  }
};