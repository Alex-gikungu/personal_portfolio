// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contact';

import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={ // Wrap all routes with the Layout component
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;



// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Blogs from './components/Blogs';
// import Contacts from './components/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/services" component={Services} />
//         <Route path="/blogs" component={Blogs} />
//         <Route path="/contacts" component={Contacts} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
