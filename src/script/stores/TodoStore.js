import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
			{
				id: 1,
				title: "Hello",
				complete: true,
				edit: false
			},
			{
				id: 2,
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

	deleteTodo(id){

	}

	editTodo(id, title){
		this.todos.forEach(function(obj){
			if (obj.id == id){
				obj.title = title;
				edit: true;
			}
		})
		this.emit("edit");
	}

	handleActions(action){
		console.log("action received: ", action);
		switch (action.type){
			case "CREATE":
				this.createTodo(action.title);
				break;
			case "DELETE":
				this.deleteTodo(action.id);
				break;
			case "EDIT":
				this.editTodo(action.id, action.title);
				break
		}
	}



}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
