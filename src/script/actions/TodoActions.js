import dispatcher from "../dispatcher";

export function createTodo(title){
	dispatcher.dispatch({
		type:"CREATE",
		title
	});
}

export function deleteTodo(id){
	dispatcher.dispatch({
		type:"DELETE",
		id
	})
}
