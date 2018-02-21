import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
			{
				id: Date.now(),
				title: "Hello",
				complete: true,
				edit: false
			},
			{
				id: Date.now(),
				title: "World",
				complete: false,
				edit: false
			}
		];

	}

	getTodos(){
		return this.todos;
	}

	createTodo(title){
		const id = Date.now();
		this.todos.push({
			id,
			title,
			complete:false,
			edit:false
		});
		this.emit("create");
	}

	handleActions(action){
		console.log("action received: ", action);
		switch (action.type){
			case "CREATE":
				this.createTodo(action.title);
				break;
		}
	}



}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
