import passportPhoto from '../assets/MyPhoto.png'

const Header = () => {
  return <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
    <div>
      <div className="font-bold text-3xl">Md Arsalan Ali</div>
      <div className="text-xl">Full Stack Web Developer</div>
      <a
        href="/Personal Portfolio.pdf"
        download
        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 mt-2 inline-block"
      >
        Download PDF
      </a>
    </div>
    <img className="rounded-full w-24" src={passportPhoto} alt="" />
  </header>;
}

export default Header;