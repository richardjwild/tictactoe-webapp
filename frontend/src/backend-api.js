export async function newGame() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/new`, {method: 'POST'})
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json()
}

export async function play(gameId, square) {
    let requestBody = new FormData()
    requestBody.set("square", square)
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/${gameId}/play`, {
        method: 'POST',
        body: requestBody,
    })
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json()
}
