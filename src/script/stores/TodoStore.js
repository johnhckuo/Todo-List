import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.complete_visibility = true;
		this.incomplete_visibility = true;
		this.key = 0;

		this.todos = [
			{
				id: this.key++,
				title: "Hello",
				complete: true,
				edit: false,
				date: "2018.4.22",
				visible: this.complete_visibility
			},
			{
				id: this.key++,
				title: "React",
				complete: true,
				edit: false,
				date: "2018.4.23",
				visible: this.complete_visibility
			},
			{
				id: this.key++,
				title: "World",
				complete: false,
				edit: false,
				date: "2018.4.24",
				visible: this.incomplete_visibility
			}
		];

	}

	getTodos(){
		return this.todos;
	}

	yyyymmdd() {
		var date = new Date();

		var mm = date.getMonth() + 1; // getMonth() is zero-based
		var dd = date.getDate();

		return [date.getFullYear(),
		        (mm>9 ? '' : '0') + mm,
		        (dd>9 ? '' : '0') + dd
		       ].join('.');
	};

	createTodo(title){
		var id = this.key++;
		this.todos.push({
			id,
			title,
			complete:false,
			date: this.yyyymmdd(),
			edit:false,
			visible:this.incomplete_visibility
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
		});
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
			case "STATUS_COMPLETE":
				this.editTodoStatus(action.id);
				break;
			case "UPDATE_SETTINGS":
				this.updateTodoSettings(action.settings1, action.settings2);
				break;
		}
	}

	editTodoStatus(id){
		this.todos.forEach(function(obj){
			if(obj.id == id){
				obj.complete = true;
			}
		});
		this.emit("edit");
	}

	updateTodoSettings(settings1, settings2){

		this.complete_visibility = settings1;
		this.incomplete_visibility = settings2;
		this.todos.forEach(function(obj){
			if (obj.complete == true){
				obj.visible = settings1;
			}else{
				obj.visible = settings2;
			}
		});
		this.emit("edit");
	}



}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
