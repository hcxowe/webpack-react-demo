import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
  </div>,
  document.getElementById('content')
);
