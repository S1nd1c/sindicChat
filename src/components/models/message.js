
function createMessage(username, content) {
    return {
        username,
        content,
        timestamp: Date.now().toString()
    }
}


module.exports = createMessage