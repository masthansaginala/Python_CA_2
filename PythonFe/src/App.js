import logo from './logo.svg';
import { Provider } from "react-redux";
import './App.css';
import YoutubeForm from './components/Formik/YoutubeForm';
import Home from './components/Bike';
import Router from './components/AppRouter';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Router />
    </Provider>
  );
}

export default App;
