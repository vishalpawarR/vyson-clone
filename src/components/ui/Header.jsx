import Button from "./Button"

function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-6 px-7 ">
        <div>
          <a href="">
            <img
              className="w-12"
              src="https://framerusercontent.com/images/YSdobC45mkoLCNuWcMVS8P7xoXg.png?scale-down-to=512"
              alt=""
            />
          </a>
        </div>
        <ul className="flex gap-8">
          <li>
            <a href="">Tools</a>
          </li>
          <li>
            <a href="">Curriculum</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <div>
          <Button>View Brochure</Button>
        </div>
      </header>
    </>
  )
}

export default Header
