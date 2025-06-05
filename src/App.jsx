import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

// --- page stubs --------------------------------------------------
import Home       from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects   from './pages/Projects.jsx';
import Blog       from './pages/Blog.jsx';
import Contact    from './pages/Contact.jsx';
// -----------------------------------------------------------------

export default function App() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/"           end>Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact / Résumé</NavLink>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/experience"  element={<Experience />} />
          <Route path="/projects"    element={<Projects />} />
          <Route path="/blog"        element={<Blog />} />
          <Route path="/contact"     element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
// --- end of file ------------------------------------------------