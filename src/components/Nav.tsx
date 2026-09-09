
import Logo from '../assets/logo.png'
const Nav = () => {
  return (

      <nav className="mx-auto mt-4 max-w-\[1400px\] px-10 flex justify-between">
  <img src={Logo} alt="" />
  <ul className='flex gap-4 items-center' >
    <li>Home</li>
    <li>Fixture</li>
    <li>Playser</li>
    <li>Schedule</li>
  </ul>
</nav>

  )
};

export default Nav;
