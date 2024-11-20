import "./Header.css";
function Header() {
  return (
    <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Dining Out</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Delivery</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Night Life</a>
    </li>
  </ul>
  );
}

export default Header;
