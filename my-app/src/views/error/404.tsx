/*
 * @Author: Tiny 
 * @Date: 2019-08-02 16:46:33 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-08-02 17:16:46
 */
import { Button } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-container">
      <h2>404</h2>
      <Button type="primary">
        <Link to="/" />
      </Button>
    </div>
  )
}

export default Error;