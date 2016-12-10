import React from 'react';

class GameForm extends React.Component {
  state = {
    title: '',
    cover: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
        <form className="ui form">
          <h1>Add new game</h1>

          <div className="field">
            <label htmlFor="title">Title</label>
            <input
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                id="title"
            />
          </div>

          <div className="field">
            <label htmlFor="cover">Cover</label>
            <input
                name="cover"
                value={this.state.cover}
                onChange={this.handleChange}
                id="cover"
            />
          </div>

          <div className="field">
            { this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image"/> }
          </div>

          <div className="field">
            <button className="ui primary button">Save</button>
          </div>

        </form>
    );
  }
}


export default GameForm