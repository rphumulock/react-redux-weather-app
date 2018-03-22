import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/actions';

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        event.preventDefault();
        this.setState({ term: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div id="searchbar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={this.onSubmit} className="input-group">
                                <div className="input-group mb-3">
                                    <input value={this.state.term} onChange={this.onInputChange} type="text" className="form-control" placeholder="Search Bar" aria-label="Search Bar" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(null, matchDispatchToProps)(Searchbar);