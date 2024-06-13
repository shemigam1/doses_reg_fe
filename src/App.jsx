import { useState } from 'react'
import Register from './components/Register'
function App() {
  const [open, setOpen] = useState(false)

  return (

    <>
      <main className='flex flex-col justify-center items-center'>
        <section className='h-[100vh]'>
          <nav className='h-[10vh] w-[100vw] flex justify-evenly items-center bg-slate-950 text-white'>
            <div className=" hover:bg-gray-50 hover:text-slate-950"><button onClick={() => setOpen(true)}>Get tickets!</button></div>
            <div className=""><a href="#about">About</a></div>
            <div className=""><a href="#contact">Contact</a></div>
          </nav>


          <div className="h-[60vh] flex flex-col justify-center items-center">
            <p className='text-7xl'>DOSES</p>
            <p>The most served FEST in Africa!</p>
          </div>

          <div className="text-center"><button
            className='px-7 py-2 bg-slate-950 text-slate-50'
            onClick={() => setOpen(true)}>Get Tickets!</button></div>

        </section>
        <Register open={open} onClose={() => setOpen(false)} />

        <section className='h-[85vh] sm:h-[100vh] px-8 sm:w-[75%] flex flex-col items-center justify-center gap-10' id='about'>
          <div className="flex flex-col sm:flex-row gap-4 h-[25%] min-h-56">
            <p className='text-3xl'>What is DOSES?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure, dolorem delectus veritatis ullam nemo, ducimus tempora dolores fugit reprehenderit, doloribus modi facere praesentium impedit ut laudantium. Ipsa, dolores modi?</p>
          </div>

          <div className="flex flex-col sm:flex-row-reverse gap-4 h-[25%] min-h-56">
            <p className='text-3xl'>Where is it happening?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto quasi sunt nihil eius quam qui at nemo perferendis, molestias, nostrum fuga maxime. Tempora quam nisi porro natus asperiores soluta.</p>
          </div>

          <div className="text-center"><button
            className='px-7 py-2 bg-slate-950 text-slate-50'
            onClick={() => setOpen(true)}>Get Tickets!</button>
          </div>
          <div id='contact' className='flex flex-col justify-center items-center h-[20%]'>
            <p>Contact Us for more information</p>
            <p>0800000000</p>
            <p>0800000000</p>
          </div>
        </section>

        <footer className='h-[15vh] flex flex-col justify-center items-center'>
          <p>doses logo</p>
          <p><small>© 2024 doses All rights reserved</small></p>
          <p><small>A Performing Hearts Production</small></p>
        </footer>
      </main >
    </>
  )
}

export default App
