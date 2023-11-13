import React, { useState } from "react";
import "./signup.css";
export default function Signup() {
	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		mobilw: "",
		password: "",
	});
	// let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(
			"http://localhost:5000/api/auth/createuser",
			{
				// credentials: 'include',
				// Origin:"http://localhost:3000/login",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: credentials.name,
					email: credentials.email,
					password: credentials.password,
					location: credentials.geolocation,
				}),
			}
		);
		const json = await response.json();
		console.log(json);
		if (json.success) {
			//save the auth toke to local storage and redirect
			//localStorage.setItem("token", json.authToken);
			// navigate("/login");
		} else {
			alert("Enter Valid Credentials");
		}
	};

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<div
			style={{
				backgroundSize: "cover",
				height: "100vh",
			}}>
			<div className="container">
				<form
					className="w-50 m-auto mt-5 border bg-dark border-success rounded"
					onSubmit={handleSubmit}>
					<div className="m-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							name="name"
							value={credentials.name}
							onChange={onChange}
							aria-describedby="nameHelp"
						/>
					</div>
					<div className="m-3">
						<label htmlFor="email" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							name="email"
							value={credentials.email}
							onChange={onChange}
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="m-3">
						<label htmlFor="mobile" className="form-label">
							Mobile
						</label>
						<input
							type="text"
							className="form-control"
							name="mobile"
							value={credentials.mobile}
							onChange={onChange}
							aria-describedby="mobileHelp"
						/>
					</div>
					<div className="m-3">
						<label
							htmlFor="exampleInputPassword1"
							className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							value={credentials.password}
							onChange={onChange}
							name="password"
						/>
					</div>
					<button type="submit" className="m-3 btn btn-success">
						Submit
					</button>
					{/* <Link to="/login" className="m-3 mx-1 btn btn-danger">
						Already a user
					</Link> */}
				</form>
			</div>
		</div>
	);
}
