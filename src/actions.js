export const SET_GAMES = 'SET_GAMES';

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  }
}

export function saveGame(data) {
  return dispatch => {
    return fetch('/api/games/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

}

export function fetchGames() {
  return dispatch => {
    fetch('/api/games')
        .then(res => res.json())
        .then(data => dispatch(setGames(data.games)))
  }
}