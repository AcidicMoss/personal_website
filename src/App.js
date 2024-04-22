// import scss/css pages to appy the styles to the components
import './scss/App.scss';

// Do not forget to install this pakage, you may get an error at first.
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';

// Import the pages that we want to render
import Home from './Home';
import About from './About';

// Our js files return components that are rendered in index.html
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
