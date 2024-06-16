import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Close from './Close';

function Register({ open, onClose }) {
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		whatsappNumber: '',
		location: '',
		daystarMember: false,
		gender: '',
		nearestBusStop: '',
		ageRange: '15-20',
		career: 'student',
		heardThrough: '',
	});
	// const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!userData.name.trim()) {
			toast.error('Full name is required');
			return;
		}
		if (!userData.email.trim()) {
			toast.error('Email is required');
			return;
		} else if (!/\S+@\S+\.\S+/.test(userData.email)) {
			toast.error('Email is invalid');
			return;
		}
		if (!userData.whatsappNumber) {
			toast.error('Whatsapp number is required');
			return;
		} else if (/^(7|8|9)\d{1}(0|1)\d{8}/.test(userData.whatsappNumber)) {
			toast.error(`Whatsapp number is invalid`);
			return;
		}
		if (!userData.nearestBusStop.trim()) {
			toast.error('Nearest bus stop is require');
			return;
		}

		try {
			const response = await axios.post(
				'https://doses-fest-2024-api-uwf6tmodda-uc.a.run.app/api/v1/register',
				userData
			);
			console.log(userData);
			console.log(response);
			toast.success('Registration successful!');
			setUserData({
				name: '',
				email: '',
				whatsappNumber: '',
				location: '',
				daystarMember: false,
				gender: '',
				nearestBusStop: '',
				ageRange: '15-20',
				career: 'student',
				heardThrough: '',
			});
			console.log(userData);

			// } else {
			//     console.log(newErrors);
			//     console.log('errorrrrr');
			//     Object.entries(newErrors).forEach(([key, value]) => {
			//         toast.success(`${value}`);
			//     });
			// }
			// onClose()
		} catch (error) {
			toast.error('Registration failed!, Refresh page and try again');
			// onClose()
		}
	};

	return (
		<section
			onClick={onClose}
			className={`fixed inset-0 flex justify-center
            items-center transition-colors ${
							open ? 'visible bg-black/20 z-10' : 'invisible'
						}`}
			// style={{ position: 'relative' }}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`bg-white rounded-xl shadow p-6 overflow-auto max-h-[90vh] 
                transition-all ${
									open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
								}
                  w-[90vw] sm:w-[60vw]`}
			>
				<div
					onClick={onClose}
					className="h-12 w-12 absolute top-3 right-3 text-xl rounded-full px-2 hover:cursor-pointer"
				>
					<Close />
				</div>

				<form
					className="mt-4 flex flex-col gap-5 sm:gap-2"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col sm:w-[70%] gap-1 sm:gap-0">
						{/* <p className='p-0 m-0 font-bold'>All fields are required</p> */}
						<label htmlFor="">Email</label>
						<input
							type="email"
							name="email"
							value={userData.email}
							onChange={handleChange}
							className="border border-gray-900 rounded-full focus:outline-none px-2"
						/>
					</div>
					<div className="flex flex-col sm:w-[70%] gap-2 sm:gap-0">
						<label htmlFor="">Full name</label>
						<input
							type="text"
							name="name"
							value={userData.name}
							onChange={handleChange}
							className="border border-gray-900 rounded-full focus:outline-none px-2"
						/>
					</div>

					{/* <div className="flex justify-between gap-4"> */}

					<div className="flex flex-col w-[70%] gap-2 sm:gap-0">
						<label htmlFor="">Whatsapp Number</label>
						<input
							className="border border-gray-900 rounded-full focus:outline-none px-2"
							type="text"
							name="whatsappNumber"
							value={userData.whatsappNumber}
							onChange={handleChange}
							id=""
						/>
					</div>
					<div className="flex flex-col w-[50%] justify-start">
						<label htmlFor="">Age</label>
						<select
							className="p-2"
							name="ageRange"
							id=""
							onChange={handleChange}
							value={userData.ageRange}
							required
						>
							<option value="15-20" selected="selected">
								15 - 20 years
							</option>
							<option value="21-25">21 - 25 years</option>
							<option value="26-35">26 - 35 years</option>
							<option value="35+">35 years and above</option>
						</select>
					</div>
					{/* </div> */}

					{/* <div className="flex justify-between gap-4"> */}

					<div className="flex flex-col w-[50%]">
						<p>Gender</p>
						<div className="flex gap-3">
							<input
								type="radio"
								name="gender"
								id="male"
								onChange={handleChange}
								value={'male'}
								required
							/>
							<label htmlFor="">Male</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								name="gender"
								id="female"
								onChange={handleChange}
								value={'female'}
								required
							/>
							<label htmlFor="">Female</label>
						</div>
					</div>

					<div className="flex flex-col w-[50%] justify-start">
						<p>Location</p>
						<div className="flex gap-3">
							<input
								type="radio"
								name="location"
								id="mainland"
								onChange={handleChange}
								value={'mainland'}
								required
							/>
							<label htmlFor="">Mainland</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								name="location"
								id="island"
								onChange={handleChange}
								value={'island'}
								required
							/>
							<label htmlFor="">Island</label>
						</div>
					</div>
					{/* </div> */}

					<div className="flex flex-col sm:w-[70%] gap-2 sm:gap-0">
						<label htmlFor="">Nearest Bus Stop</label>
						<input
							type="text"
							name="nearestBusStop"
							value={userData.nearestBusStop}
							onChange={handleChange}
							className="border border-gray-900 rounded-full focus:outline-none px-2"
						/>
					</div>

					{/* <div className="flex justify-between gap-4"> */}

					<div className="flex flex-col w-[50%]">
						<label htmlFor="">Career</label>
						<select
							className="p-2"
							name="career"
							onChange={handleChange}
							value={userData.career}
							required
							id=""
						>
							<option value="student" selected="selected">
								Student
							</option>
							<option value="self-employed">Self-employed</option>
							<option value="employed">Employed</option>
							<option value="unemployed">Unemployed</option>
						</select>
					</div>

					<div className="flex flex-col w-[50%] justify-start">
						<p>Are you a member of Daystar?</p>
						<div className="flex gap-3">
							<input
								type="radio"
								name="daystarMember"
								id="yes"
								onChange={handleChange}
								value={true}
								required
							/>
							<label htmlFor="">Yes</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								name="daystarMember"
								id="no"
								onChange={handleChange}
								value={false}
								required
							/>
							<label htmlFor="">No</label>
						</div>
					</div>
					{/* </div> */}

					{/* <div className="flex justify-between gap-4"> */}

					<div className="flex flex-col">
						<p>How did you hear about doses?</p>
						<div className="flex gap-3">
							<input
								type="radio"
								onChange={handleChange}
								name="heardThrough"
								id="instagram"
								value={'instagram'}
								required
							/>
							<label htmlFor="">Instagram</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								name="heardThrough"
								id="x"
								onChange={handleChange}
								value={'x(twitter)'}
								required
							/>
							<label htmlFor="">X (Twitter)</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								onChange={handleChange}
								value={'facebook'}
								name="heardThrough"
								id="facebook"
								required
							/>
							<label htmlFor="">Facebook</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								onChange={handleChange}
								value={'whatsapp'}
								name="heardThrough"
								id="whatsapp"
								required
							/>
							<label htmlFor="">Whatsapp</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								onChange={handleChange}
								value={'flier'}
								name="heardThrough"
								id="fliers"
								required
							/>
							<label htmlFor="">Hand Fliers</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								onChange={handleChange}
								value={'radio_jingle'}
								name="heardThrough"
								id="jingles"
								required
							/>
							<label htmlFor="">Radio Jingles</label>
						</div>
						<div className="flex gap-3">
							<input
								type="radio"
								onChange={handleChange}
								value={'others'}
								name="heardThrough"
								id="other"
								required
							/>
							<label htmlFor="">Other</label>
						</div>
					</div>
					<div className="flex justify-center items-center w-[100%]">
						<button
							type="submit"
							className="w-100% bg-slate-950 hover:bg-slate-50 hover:text-slate-950 text-slate-50 py-4 sm:px-20 px-10 sm:text-2xl"
						>
							REGISTER
						</button>
					</div>
					{/* </div>/ */}
				</form>
			</div>

			<ToastContainer />
		</section>
	);
}

export default Register;
