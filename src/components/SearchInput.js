import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = () => {

  return (
    <Search placeholder="Input an e-commerce website url" enterButton size="large" />
  );
};

export default SearchInput;
