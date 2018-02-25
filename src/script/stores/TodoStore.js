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
				edit: false,
				date: "2018.4.22",
				visible: true
			},
			{
				id: 2,
				title: "World",
				complete: false,
				edit: false,
				date: "2018.4.23",
				visible: true
			}
		];

	}

	getTodos(){
		return this.todos;
	}

	yyyymmddhhmmss() {
		var date = new Date();

		var mm = date.getMonth() + 1; // getMonth() is zero-based
		var dd = date.getDate();
		var hh = date.getHours();
		var minute = date.getMinutes();
		var ss = date.getSeconds();

		return [date.getFullYear(),
		        (mm>9 ? '' : '0') + mm,
		        (dd>9 ? '' : '0') + dd,
		        (hh>9 ? '' : '0') + hh,
		        (minute>9 ? '' : '0') + minute,
		        (ss>9 ? '' : '0') + ss
		       ].join('');
	};

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
		var id = this.yyyymmddhhmmss();
		this.todos.push({
			id: this.yyyymmddhhmmss(),
			title,
			complete:false,
			date: this.yyyymmdd(),
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
				this.updateTodoSettings(action.settings);
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

	updateTodoSettings(settings){
		const showComplete = settings == "COMPLETE" ? true : false;
		this.todos.forEach(function(obj){
			if (obj.complete == showComplete){
				obj.visible = true;
			}else{
				obj.visible = false;
			}
		});
		this.emit("edit");
	}



}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
