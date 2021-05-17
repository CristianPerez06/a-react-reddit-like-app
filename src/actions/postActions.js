import {
  GET_POSTS_LIST_STARTED,
  GET_POSTS_LIST_SUCCESS,
  GET_POSTS_LIST_FAILURE,
  ADD_TO_VIEWED_POSTS_LIST
} from './postTypes'

export const getPostsListStarted = () => {
  return {
    type: GET_POSTS_LIST_STARTED
  }
}

export const getPostsListSuccess = res => {
  return {
    type: GET_POSTS_LIST_SUCCESS,
    payload: { ...res }
  }
}

export const getPostsListFailure = error => {
  return {
    type: GET_POSTS_LIST_FAILURE,
    payload: { ...error }
  }
}

export const addToViewedPostsList = id => {
  return {
    type: ADD_TO_VIEWED_POSTS_LIST,
    payload: { id: id }
  }
}