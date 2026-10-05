 import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="w-64 min-h-screen bg-[#081736] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold">
          Admin Panel
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-2">
        <Link
          to="/admin/dashboard"
          className="block px-4 py-3 rounded hover:bg-[#11234d]"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/blogs"
          className="block px-4 py-3 rounded hover:bg-[#11234d]"
        >
          Blogs
        </Link>

        <Link
          to="/admin/blogscreate"
          className="block px-4 py-3 rounded hover:bg-[#11234d]"
        >
          Create Blog
        </Link>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={logoutHandler}
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}