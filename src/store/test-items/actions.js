import * as types from './actionTypes';



export function fetchTestItems() {
    return async(dispatch, getState) => {
        try {
            // const subredditArray = await redditService.getDefaultSubreddits();
            // const topicsByUrl = _.keyBy(subredditArray, (subreddit) => subreddit.url);

            const testItems = [
                {Id: 1, Title: 'First'},
                {Id: 2, Title: 'Second'},
                {Id: 3, Title: 'Third'},
            ];

            dispatch({ type: types.TEST_ITEMS_FETCHED, testItems });
        } catch (error) {
            console.error(error);
        }
    };
}
