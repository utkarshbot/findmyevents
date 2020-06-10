import { GET_EVENTS , DELETE_EVENT, ADD_EVENT, GET_EVENT, UPDATE_EVENT} from './types';
import axios from 'axios';

export const getEvents = () => async dispatch => {
    const res = await axios.get
    ('https://my-json-server.typicode.com/utkarshbot/eventdata/events')
    dispatch({
        type: GET_EVENTS,

        payload:res.data
    })
}
export const getEvent = (id) => async dispatch => {
    const res = await axios.get
    (`https://my-json-server.typicode.com/utkarshbot/eventdata/events/${id}`)
    dispatch({
        type: GET_EVENT,

        payload:res.data
    })
}
export const deleteEvent = (id) => async dispatch => {
    try{
        const res = await axios.delete
        (`https://my-json-server.typicode.com/utkarshbot/eventdata/events/${id}`)
        dispatch({
            type: DELETE_EVENT,
            payload: id
        })
    }
    catch(e) {
        dispatch({
            type:DELETE_EVENT,
            payload: id
        })
    }
}
export const addEvent = (event) => async dispatch => {
    const res = await axios.post
    ('https://my-json-server.typicode.com/utkarshbot/eventdata/events', event)
    dispatch({
        type: ADD_EVENT,
        payload: res.data
    })
}
export const updateEvent = (event) => async dispatch => {
    const res = await axios.put
    (`https://my-json-server.typicode.com/utkarshbot/eventdata/events/${event.id}`, event)
    dispatch({
        type: UPDATE_EVENT,
        payload: res.data
    })
}

