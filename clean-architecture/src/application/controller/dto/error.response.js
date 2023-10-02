class ErrorResponse extends Error {
    constructor(message, status, stack) {
        super(message);
        this.status = status;
        this.stack = stack;
    }
}

module.exports = ErrorResponse;