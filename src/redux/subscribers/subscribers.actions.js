import { SUBSCRIBETONEWSLETTER, GET_SUBSCRIBERS, SUBSCRIBE_FAIL, DELETE_SUBSCRIBER, DELETE_SUBSCRIBER_FAIL, SUBSCRIBERS_LOADING } from "./subscribers.types";
import axios from 'axios';

import { tokenConfig } from '../auth/auth.actions'
import { returnErrors } from "../error/error.actions";

const axiosInstance = axios.create({
  baseURL: 'https://amahirwe-server.onrender.com',
});

// dispatch(action)
// Dispatches an action. This is the only way to trigger a state change.

export const getSubscribers = () => async (dispatch, getState) => {
  await dispatch(getSubscribersLoading());

  try {
    await axiosInstance
      .get('/api/subscribers', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: GET_SUBSCRIBERS,
          payload: res.data,
        }),
      )
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
  }
};

export const subscribeToNewsLetter = (subscribedUser) => async (dispatch) => {

  try {
    await axiosInstance
      .post('/api/subscribers', subscribedUser)
      .then(res =>
        dispatch({
          type: SUBSCRIBETONEWSLETTER,
          payload: res.data
        })
      )
  } catch (err) {
    dispatch(returnErrors(err.response && err.response.data, err.response.status, 'SUBSCRIBE_FAIL'));
    dispatch({ type: SUBSCRIBE_FAIL })
  }
};

// Delete a Subscriber
export const deleteSubscriber = uemail => async (dispatch, getState) => {

  try {
    if (window.confirm("You are unsubscribing to Amahirwe updates!")) {
      await axiosInstance
        .delete(`/api/subscribers/${uemail}`, tokenConfig(getState))
        .then(res =>
          dispatch({
            type: DELETE_SUBSCRIBER,
            payload: uemail
          }))
    }

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'DELETE_SUBSCRIBER_FAIL'));
    dispatch({ type: DELETE_SUBSCRIBER_FAIL })
  }
}

export const getSubscribersLoading = () => {
  //Return an action to the reducer
  return {
    //action 
    type: SUBSCRIBERS_LOADING

  };
}
