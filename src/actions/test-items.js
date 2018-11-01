
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData() {
    return (dispatch) => {
        dispatch(itemsFetchDataSuccess([
            {Id: 1, Title: 'First'},
            {Id: 2, Title: 'Second'},
            {Id: 3, Title: 'Third'}
        ]));
    };
}