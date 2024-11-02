import Navbar from '../components/Navbar';

export default function HomeIndex() {
  return (
    <div>
      <Navbar />
      <header className="hero-section">
        <h1 style={{ fontSize: '30px' }}>Welcome to Manishji&apos;s Portfolio</h1>
        <p>Explore my projects below.</p>
        <div className='background-beams-demo' style={{height:'85px',width:'40%',margin:'auto',background:'transparent'}}>
          <input
            type="text"
            placeholder="@manishji.site"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
      </header>
    </div>
  );
}
