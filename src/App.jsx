import { useState } from 'react'
import Register from './components/Register'
function App() {
  const [open, setOpen] = useState(false)

  return (

    <>
      <main>
        <section className='h-[100vh]'>
          <nav className='h-[10vh] flex justify-evenly items-center bg-slate-950 text-white'>
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

        <section className='h-[100vh] px-8 flex flex-col gap-10' id='about'>
          <div className="flex flex-col sm:flex-row gap-4">
            <p className='text-3xl'>What is DOSES?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure, dolorem delectus veritatis ullam nemo, ducimus tempora dolores fugit reprehenderit, doloribus modi facere praesentium impedit ut laudantium. Ipsa, dolores modi?
              Magnam at consequuntur veniam eos dolorem laudantium distinctio! Vel voluptatum enim commodi magni saepe eveniet iste temporibus beatae voluptate ut eaque rerum dicta, officiis necessitatibus dignissimos earum minima, suscipit facere!
              Iusto, laudantium sint quisquam et facere, optio laborum aperiam quasi odit velit consectetur culpa beatae. Perferendis minima, voluptas eveniet nemo id aliquid nulla. Tenetur eaque fugit autem, sed obcaecati maxime.</p>
          </div>

          <div className="flex flex-col sm:flex-row-reverse gap-4">
            <p className='text-3xl'>Where is it happening?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto quasi sunt nihil eius quam qui at nemo perferendis, molestias, nostrum fuga maxime. Tempora quam nisi porro natus asperiores soluta.</p>
          </div>

          <div className="text-center"><button
            className='px-7 py-2 bg-slate-950 text-slate-50'
            onClick={() => setOpen(true)}>Get Tickets!</button></div>
        </section>
        <section id='contact' className='h-[50vh] flex flex-col justify-center items-center'>
          <p>Contact Us for more information</p>
          <p>0800000000</p>
          <p>0800000000</p>
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
