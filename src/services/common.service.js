

class CommonService {
    getItems() {
        return [
            {Id: 1, Title: 'First'},
            {Id: 2, Title: 'Second'},
            {Id: 3, Title: 'Third'},
        ];
    }
}

export default new CommonService();