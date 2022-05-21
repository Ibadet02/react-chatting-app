import './App.scss';
import './styles/form.scss'
import './styles/chat.scss'
import './styles/homepage.scss'
import './styles/responsive.scss'
import FormWrapper from './components/FormWrapper';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <FormWrapper /> */}
    </div>
  );
}

export default App;