import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { useGlobalContext } from "./context";
// import Details from "./Details";
// import SearchParams from "./SearchParams";



const App = () => {


  return (
    <div>
   
        <h2>hello world</h2>
        {/* <h2>{ data}</h2> */}
        {/* <header>
          <Link to="/">Adopt Me!</Link>
        </header> */}
        {/* <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes> */}
   
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
