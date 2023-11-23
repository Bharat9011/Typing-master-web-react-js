import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Buttontype from './Buttontype';
import Layout from './Layout';

render(
  <Layout />,
  ReactDOM.createRoot(document.getElementById('root'))
)