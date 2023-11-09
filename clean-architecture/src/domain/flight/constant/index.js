const LIST_FLIGHTS_CACHE = (page, perPage) => {
    return `flights-page-${page}-perPage-${perPage}`;
} 

module.exports = {
    LIST_FLIGHTS_CACHE,
}