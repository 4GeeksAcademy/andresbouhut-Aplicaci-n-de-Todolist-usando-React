import React, { useState } from "react";


const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1 className="text-center mt-5">Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						className="form-control rounded-0"
						onChange={(event) => {
							setNewTodo(event.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([newTodo]));
								setNewTodo("");
							}
						}}
						placeholder="What needs to be done?"
						value={newTodo}
					/>
				</li>
				{todos.map((item, index) => (
					<li key={index}>
						<div className="border p-2 d-flex justify-content-between align-items-center rounded-0">
							<span>{item}</span>
							<span
								style={{ cursor: "pointer", color: "black" }}
								onClick={() =>
									setTodos(
										todos.filter(
											(t, currentIndex) => index !== currentIndex
										)
									)
								}
							>
								X
							</span>
						</div>
					</li>
				))}
			</ul>
			<div>{todos.length} Item left</div>
		</div>
	);
};

export default Home;