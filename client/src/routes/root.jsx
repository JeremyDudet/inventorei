import { useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean)[0]; // Gets the first segment of the URL path
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <header>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {pageName}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl">hello</div>
      </main>
    </div>
  );
}
