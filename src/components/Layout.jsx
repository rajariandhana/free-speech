import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div
      className="bg flex flex-col items-center min-h-screen gap-6 p-12"
    >
      <div className="overlay">

      </div>
      <main className="flex flex-col items-center justify-center w-[400px] gap-6 px-6 sm:gap-12 sm:px-12 z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
