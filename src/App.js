import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>
      {routing}
    </Provider>
  );
}

export default App;
