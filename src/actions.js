export function fetchGames() {
  return dispatch => {
    fetch('/api/games');
  }
}