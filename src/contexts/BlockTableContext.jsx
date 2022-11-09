import { createContext, useContext, useState,  } from 'react';
import clonedeep from 'lodash.clonedeep';

import { useSelector,  } from 'react-redux';
import { selectPosts } from 'redux/selectors';

const BlockWithListContext = createContext();

export const useBlockWithList = () => useContext(BlockWithListContext);

export const BlockWithListProvider = ({ children }) => {
  const { posts } = useSelector(selectPosts);
  let loadedPosts = clonedeep(posts);
  const [selectedRowsList, setSelectedRowsList] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function forFilterList(searchQuery) {
    setSearchQuery(searchQuery);
  }
  function addRowBySku(sku) {
    console.log('add', sku);
    if (selectedRowsList.includes(sku) && sku) {
      return alert('id already added');
    }
    setSelectedRowsList([...selectedRowsList, sku]);
  }
  function deleteRowBySku(sku) {
    setSelectedRowsList(selectedRowsList.filter(el => el !== sku));
  }

  
  return (
    <BlockWithListContext.Provider
      value={{
        loadedPosts,
        forFilterList,
        searchQuery,
        filterActive,
        setFilterActive,
        selectedRowsList,
        setSelectedRowsList,
        addRowBySku,
        deleteRowBySku,
      }}
    >
      {children}
    </BlockWithListContext.Provider>
  );
};
