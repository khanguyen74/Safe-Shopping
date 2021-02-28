const initState = {
	firstname: "",
	lastname: "",
	email: "",
	avatar: "",
	_id: ""
}

const user = (state = initState, action) => {
	switch (action.type) {
		case "INIT":
			return {
				...initState,
			};
		case "AUTH_SUCCESS":
			localStorage.setItem("auth_token", action.payload.token) 
			return {
				firstname: action.payload.user.firstname,
				lastname: action.payload.user.lastname,
				email: action.payload.user.email,
				avatar: action.payload.user.avatar,
				_id: action.payload.user._id
			};
		case "UPDATE_PROFILE":
			return {
				...action.payload
			};
		case "LOGOUT":
			localStorage.removeItem("auth_token") 
			return {
				...initState
			};
		default:
			return state;
	}
}

export default user