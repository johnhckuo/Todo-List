import dispatcher from "../dispatcher";

export function createTodo(title){
	dispatcher.dispatch({
		type: "CREATE",
		title
	});
}

export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE",
		id
	});
}

export function editTodo(id, title){
	dispatcher.dispatch({
		type: "EDIT",
		id,
		title
	});
}

export function editTodoStatus(id){
	dispatcher.dispatch({
		type: "STATUS_COMPLETE",
		id
	})
}

export function updateTodoSettings(settings){
	dispatcher.dispatch({
		type: "UPDATE_SETTINGS",
		settings
	})
}
