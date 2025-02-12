import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const RoutesDemo = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Your component files (Home.js, About.js)

function Home() {
  return (
    <>
      <div>This is the Home page</div>
    </>
  );
}

function About() {
  return <div>This is the About page</div>;
}

export default RoutesDemo;
