import { createReducer } from '../utils';

export const getBusStopsByRoute = (route, token) => ({
    type: 'BUS_STOPS_BY_ROUTE',
    payload: {
        request: {
            method: 'GET',
            url: `/Routes?access_token=${token}&filter={"where": {"number": "${route}"}, "include": ["busStops"]}`,
        }
    }
});

export default createReducer(
    {
        route: null,
        busStops: []
    },
    {
        BUS_STOPS_BY_ROUTE_SUCCESS: (state, { payload }) => {
            if (payload.data.length > 0) {
                return {
                    ...state,
                    route: payload.data[0].number,
                    busStops: payload.data[0].busStops,
                }
            } else {
                return {
                    ...state,
                    route: null,
                    busStops: []
                };
            }
        }
    }
);