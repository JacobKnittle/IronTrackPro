export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Iron Track Pro</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
