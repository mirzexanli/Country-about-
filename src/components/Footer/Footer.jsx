function Footer() {
  return (
    <footer className="dark:bg-gray-200 text-black px-4 py-8 ">
      <div className="conatiner flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 ">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8" >
            <li>Mr.Rauf</li>
            <li>Privacy</li>

          </ul>
        </div>
        <ul className="flex flex-wrap items-center pl-3 mt-0 space-x-4 sm:space-x-8">
          <li><a href="">İnstagram</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer