import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </Provider>
      
  )
}

export default MyApp
