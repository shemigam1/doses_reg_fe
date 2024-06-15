import { useEffect, useState } from 'react';
import Register from './components/Register';
import Video from './components/Video';
function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.href.match(/netlify/i)) {
      window.location.replace('https://dosesfest.com.ng');
    }
  }, []);

  return (
    <>
      <main className="flex flex-col justify-center items-center overflow-x-hidden">
        <section className="">
          <nav className="h-[10vh] w-[100vw] flex justify-evenly items-center bg-slate-950 text-white">
            <div className=" hover:bg-gray-50 hover:text-slate-950">
              <button onClick={() => setOpen(true)}>Get tickets!</button>
            </div>
            <div className="">
              <a href="#about">About</a>
            </div>
            <div className="">
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="h-[60vh] flex flex-col justify-center items-center main-banner">
            <div className="main-banner-text h-[100%] flex flex-col justify-evenly">

              <p className="text-7xl">DOSES</p>
              <p>The most served FEST in Africa!</p>
              <div className="text-center">
                <button
                  className="px-7 py-2 bg-slate-950 text-slate-50 rounded-full"
                  onClick={() => setOpen(true)}
                >
                  Get Tickets!
                </button>
              </div>
            </div>
          </div>



          {/* <img
						src="https://res.cloudinary.com/dkn0vfgbg/image/upload/Doses/IMG_7347_clgvuq.jpg"
						alt=""
					/> */}


        </section>
        <Register open={open} onClose={() => setOpen(false)} />


        <section className='w-[100%] h-[70vh] flex justify-center items-center'>

          <div className=" w-[90%] sm:w-[50%] h-[80%]">

            <Video />
          </div>
        </section>
        <section
          className="h-[180vh] px-8 sm:px-0 sm:w-[55%] flex flex-col items-center justify-center gap-8"
          id="about"
        >
          <div className="flex flex-col sm:flex-row gap-4 h-[40%] sm:h-[35%] min-h-90 sm:min-h-64">
            <p className="text-3xl">What is DOSES?</p>
            <p>
              Doses Fest 2024 is an electrifying celebration designed to
              inspire, empower, and connect young people. This dynamic festival
              brings together the different young minds for a day of
              unforgettable experiences. With a perfect blend of music, art, and
              the word of God. To provide a platform for youth to explore their
              potentials and God given talents while fostering meaningful
              connections that will propel them towards a brighter future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row-reverse gap-4 h-[40%] sm:h-[35%] min-h-90 sm:min-h-64">
            <p className="text-3xl">Why should you come to DOSES?</p>
            <p>
              There will be Music performances, Rap, Visual art designs, skating
              competition, Fashion/drip check, Dance, vibes and many moreeee
              Come ready to get high with the most high.
              <br />
              <br />
              Get Ready for a Day Filled with Doses of Love, Joy, Peace, and All
              the Good Things! <br />
              Embrace self-control and let positivity guide you through every
              moment!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 h-[40%] sm:h-[25%] min-h-56 sm:min-h-64">
            <p className="text-3xl">Where is it happening?</p>
            <p>
              Freedom Park Old Prison Ground,1, Hospital Road, adjacent St
              Nicholas Hospital, Lagos Island, Lagos
              <br />
              <br />
              Be there by 2:00pm sharp!.
            </p>
          </div>
          <div className="text-center">
            <button
              className="px-7 py-2 bg-slate-950 text-slate-50 rounded-full"
              onClick={() => setOpen(true)}
            >
              Get Tickets!
            </button>
          </div>
          <div
            id="contact"
            className="flex flex-col justify-center items-center h-[30%]"
          >
            <p>Contact Us for more information</p>
            <p>0800000000</p>
            <p>0800000000</p>
          </div>
        </section>

        <footer className="h-[15vh] w-[100%] flex flex-col justify-center items-center bg-slate-900 text-slate-50">
          <p>doses logo</p>
          <p>
            <small>© 2024 doses All rights reserved</small>
          </p>
          {/* <p><small>A Performing Hearts Production</small></p> */}
        </footer>
      </main>
    </>
  );
}

export default App;
