const initState = {
}

const user = (state = initState, action) => {
	switch (action.type) {
		case "INIT":
			return {
				...initState,
			};
		default:
			return state;
	}
}

export default user