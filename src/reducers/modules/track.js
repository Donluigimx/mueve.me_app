import { createReducer } from '../utils'
import { Alert } from 'react-native'

export const getRouteBuses = (route, token) => ({
  type: 'ROUTE_BUSES',
  payload: {
    request: {
      method: 'GET',
      url: `/Routes?access_token=${token}&filter={"where": {"number": "${route}"}, "include": ["buses"]}`
    }
  }
})

export const createRouteBus = (number, routeId, token) => ({
  type: 'CREATE_ROUTE_BUS',
  payload: {
    request: {
      method: 'POST',
      url: `/Routes/${routeId}/buses?access_token=${token}`,
      data: {
        number,
      }
    }
  }
})

export const setTrackBus = (trackBus) => ({
  type: 'SET_TRACK_BUS',
  trackBus
})

export default createReducer(
  {
    route: null,
    routeId: null,
    buses: [],
    trackBus: null,
    isTracking: false
  },
  {
    ROUTE_BUSES_SUCCESS: (state, {payload}) => {
      if (payload.data.length > 0) {
        return {
          ...state,
          route: payload.data[0].number,
          routeId: payload.data[0].id,
          buses: payload.data[0].buses
        }
      } else {
        Alert.alert(
          'Ups...',
          'La ruta que buscaste no está disponible. Lo sentimos :(.'
        )
        return {
          ...state,
          route: null,
          routeId: null,
          buses: []
        }
      }
    },
    CREATE_ROUTE_BUS_SUCCESS: (state, {payload}) => ({
      ...state,
      trackBus: payload.data.number,
      buses: [...state.buses, payload.data]
    }),
    SET_TRACK_BUS: (state, {trackBus}) => ({
      ...state,
      trackBus
    })
  }
)