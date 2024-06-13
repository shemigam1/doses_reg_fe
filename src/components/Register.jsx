import React from 'react'

function Register({ open, onClose }) {
    return (
        <section onClick={onClose}
            className={`fixed inset-0 flex justify-center 
            items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>

            <div
                onClick={e => e.stopPropagation()}
                className={`bg-white rounded-xl shadow p-6 
                transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                h-[95vh] w-[90vw] sm:w-[60vw]`}>

                <button
                    onClick={onClose}
                    className='absolute top-2 right-3 text-xl rounded-full text-gray-600 hover:bg:gray-50 hover:text-gray-950 bg-red-500 px-2 pb-1'
                >go back</button>

                <form className='mt-4 flex flex-col gap-5 sm:gap-2' action="">
                    <div className="flex flex-col sm:w-[70%] gap-2 sm:gap-0">

                        <label htmlFor="">Email</label>
                        <input type="text" className='border border-gray-900 rounded-full focus:outline-none px-2' />
                    </div>
                    <div className="flex flex-col sm:w-[70%] gap-2 sm:gap-0">

                        <label htmlFor="">Full name</label>
                        <input type="text" className='border border-gray-900 rounded-full focus:outline-none px-2' />
                    </div>

                    <div className="flex justify-between gap-4">


                        <div className="flex flex-col w-[50%] gap-2 sm:gap-0">

                            <label htmlFor="">Whatsapp Number</label>
                            <input
                                className='border border-gray-900 rounded-full focus:outline-none px-2'
                                type="text"
                                name="" id="" />
                        </div>
                        <div className="flex flex-col w-[50%] justify-start">

                            <label htmlFor="">Age</label>
                            <select name="" id="">
                                <option value="">15 - 20 years</option>
                                <option value="">21 - 25 years</option>
                                <option value="">26 - 35 years</option>
                                <option value="">35 years and above</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between gap-4">


                        <div className="flex flex-col w-[50%]">

                            <p>Sex</p>
                            <div className="flex gap-3">

                                <input type="radio" name="sex" id="male" value={'male'} />
                                <label htmlFor="">Male</label>
                            </div>
                            <div className="flex gap-3">

                                <input type="radio" name="sex" id="female" value={'female'} />
                                <label htmlFor="">Female</label>
                            </div>
                        </div>

                        <div className="flex flex-col w-[50%] justify-start">

                            <p>Location</p>
                            <div className="flex gap-3">

                                <input
                                    type="radio" name="location" id="mainland" value={'mainland'} />
                                <label htmlFor="">Mainland</label>
                            </div>
                            <div className="flex gap-3">

                                <input type="radio" name="location" id="island" value={'island'} />
                                <label htmlFor="">Island</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:w-[70%] gap-2 sm:gap-0">


                        <label htmlFor="">Nearest Bus Stop</label>
                        <input type="text" className='border border-gray-900 rounded-full focus:outline-none px-2' />
                    </div>

                    <div className="flex justify-between gap-4">


                        <div className="flex flex-col w-[50%]">
                            <label htmlFor="">Career</label>
                            <select name="" id="">
                                <option value="">Student</option>
                                <option value="">Self-employed</option>
                                <option value="">Employed</option>
                                <option value="">Unemployed</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-[50%] justify-start">


                            <p>Are you a member of Daystar?</p>
                            <div className="flex gap-3">
                                <input type="radio" name="member" id="yes" />
                                <label htmlFor="">Yes</label>
                            </div>
                            <div className="flex gap-3">
                                <input type="radio" name="member" id="no" />
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p>How did you hear about doses?</p>
                        <div className="flex gap-3">
                            <input type="checkbox" name="instagram" id="instagram" />
                            <label htmlFor="">Instagram</label>
                        </div>
                        <div className="flex gap-3">

                            <input type="checkbox" name="x" id="x" />
                            <label htmlFor="">X (Twitter)</label>
                        </div>
                        <div className="flex gap-3">

                            <input type="checkbox" name="facebook" id="facebook" />
                            <label htmlFor="">Facebook</label>
                        </div>
                        <div className="flex gap-3">

                            <input type="checkbox" name="whatsapp" id="whatsapp" />
                            <label htmlFor="">Whatsapp</label>
                        </div>
                        <div className="flex gap-3">

                            <input type="checkbox" name="fliers" id="fliers" />
                            <label htmlFor="">Hand Fliers</label>
                        </div>
                        <div className="flex gap-3">

                            <input type="checkbox" name="jingles" id="jingles" />
                            <label htmlFor="">Radio Jingles</label>
                        </div>
                        <div className="flex gap-3">

                            <input type="checkbox" name="other" id="other" />
                            <label htmlFor="">Other</label>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Register