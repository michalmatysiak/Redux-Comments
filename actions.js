import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
	type: ADD_COMMENT,
	id: 3,
	text: 'My first comment !!'
}

{
	type: EDIT_COMMENT,
	id: 20,
	text: 'My next comment'
}

{
	type: REMOVE_COMMENT,
	id: 22 
}

{
	type: THUMB_UP_COMMENT,
	id: 12,
	thumbs: 134
}

{
	type: THUMB_DOWN_COMMENT,
	id: 14,
	thumbs: 121
}



function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
}

function removeComment(id) {
	return {
		type: ADD_COMMENT,
		id
	}
}
function thumbUpComment(thumbs, id) {
	return {
		type: THUMB_UP_COMMENT,
		thumbs: thumbs +1,
		id
	}
	
}
function thumbDownComment(thumbs, id) {
	return {
		type: THUMB_DOWN_COMMENT,
		thumbs: thumbs -1,
		id
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(thumbs, id));
const boundThumbDownComment = id => dispatch(thumbDownComment(thumbs, id));

addComment('My first comment !!');
editComment('My next comment ');
removeComment(15);
thumbUpComment(14, 21);
thumbDownComment(9, 74);