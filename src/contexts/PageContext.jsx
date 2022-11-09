import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const usePage = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  function selectItemByClick(itemId) {
    setSelectedItemId(itemId);
    console.log(`addet item by id (${itemId}) to context`);
  }
  function deleteItemByClick(itemId) {
    setSelectedItemId(null);
    console.log(` deleted ${itemId}`);
  }

  return (
    <PageContext.Provider
      value={{ selectItemByClick, deleteItemByClick, selectedItemId }}
    >
      {children}
    </PageContext.Provider>
  );
};
