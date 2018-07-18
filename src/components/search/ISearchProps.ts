interface ISearchProps {
    searchField: string,
    //value is a (callback) function that takes an event parameter
    searchChange: {
        (event: any): void
    }
}

export default ISearchProps;