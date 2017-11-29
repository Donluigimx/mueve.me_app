import { createReducer } from '../utils'
import { Alert } from 'react-native'

export const getBusStopsByRoute = (route, token) => ({
    type: 'BUS_STOPS_BY_ROUTE',
    payload: {
        request: {
            method: 'GET',
            url: `/Routes?access_token=${token}&filter={"where": {"number": "${route}"}, "include": ["busStops", "buses"]}`,
        }
    }
})

export const setBusMarker = (marker) => ({
    type: 'ADD_BUS_MARKER',
    marker
})

export default createReducer(
    {
        route: null,
        busStops: [],
        buses: [],
        busesMarkers: []
    },
    {
        BUS_STOPS_BY_ROUTE_SUCCESS: (state, { payload }) => {
            if (payload.data.length > 0) {
                return {
                    ...state,
                    route: payload.data[0].number,
                    busStops: payload.data[0].busStops,
                    buses: payload.data[0].buses,
                }
            } else {
                Alert.alert(
                    'Ups...',
                    'La ruta que buscaste no está disponible. Lo sentimos :(.'
                )
                return {
                    ...state,
                    route: null,
                    busStops: [],
                    buses: [],
                    busesMarkers: []
                };
            }
        },
        ADD_BUS_MARKER: (state, {marker}) => ({
            ...state,
            busesMarkers: [...state.busesMarkers, marker]
        })
    }
);