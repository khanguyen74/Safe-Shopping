import React, { useState } from 'react';
import { Input, notification } from 'antd';
import { useNavigate } from 'react-router';

const { Search } = Input;

const SearchInput = () => {   
    const navigate = useNavigate(); 

    const validURL = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }
      

    const onSearch = value => {
        console.log(validURL(value));

        if(validURL(value)){
            var domain = (new URL(value));

            domain.hostname.replace('www.','');

            navigate("/review/"+domain.hostname);
        } else {
            notification['error']({
                message: "Error!",
                description: "Please input a valid URL!"
            })
        }
    }

    return (
        <Search placeholder="safeshopping.com" onSearch={onSearch} enterButton size="large" />
    );
};

export default SearchInput;
