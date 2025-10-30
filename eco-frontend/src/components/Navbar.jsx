import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">EcoBioWatt</Link>
        <div className="space-x-4">
          <Link to="/farmer" className="text-gray-700 hover:text-green-600">Farmers</Link>
          <Link to="/driver" className="text-gray-700 hover:text-green-600">Drivers</Link>
          <Link to="/admin" className="text-gray-700 hover:text-green-600">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
