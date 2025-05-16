const handleUpdateProduct = async (id, updatedData) => {
  try {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, updatedData);
    alert("Product updated successfully!");
  } catch (error) {
    alert("Failed to update product.");
  }
};