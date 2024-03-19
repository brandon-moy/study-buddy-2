import PublicNav from "./public-nav";
import AuthButtons from "./auth-buttons";

const Navbar = async () => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <PublicNav />
        <div className="flex items-center ml-auto space-x-4">
          <AuthButtons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
