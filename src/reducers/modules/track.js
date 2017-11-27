import { createReducer } from '../utils'
import { Alert } from 'react-native'

export const getRouteBuses = (route, token) => ({
  type: 'ROUTE_BUSES',
  payload: {
    request: {
      method: 'GET',
      url: `/Routes?access_token=${token}&filter={"where": {"number": "${route}"}, "include": ["busStops"]}`
    }
  }
})

export default createReducer(
  {
    route: null,
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
          buses: []
        }
      }
    }
  }
)