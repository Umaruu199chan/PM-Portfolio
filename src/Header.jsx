function App() {
  return (
    <nav className="border border-gray-500 p-0 bg-gray-50 max-w-lg rounded-full mt-5 mx-auto shadow-xl/25">
      <ul className="flex flex-row justify-around items-center">
        <li className="hover:scale-105 transition-transform">
          <a href="#" className="hover:text-gray-600 font-medium">
            HOME
          </a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="#" className="hover:text-gray-600 font-medium">
            PROJECTS
          </a>
        </li>
        <li className="hover:scale-120 transition-transform">
          <a href="#">
            <img src="public/pm.svg" alt="Logo" className="h-15 w-15" />
          </a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="#" className="hover:text-gray-600 font-medium">
            ABOUT
          </a>
        </li>
        <li className="hover:scale-105 transition-transform">
          <a href="#" className="hover:text-gray-600 font-medium">
            CONTACT ME
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default App;
