import './public-path';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NewOrder from './Components/NewOrder';

function render(props) {
  const { container } = props;
  ReactDOM.render(<NewOrder />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}