import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {fetchSearch} from '../actions/search';



class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnEnter = this.handleOnEnter.bind(this);


    }

    render() {

        var mainClassName="searchBox " + this.props.className;
        return (
            <div className= {mainClassName}>
                <div className="searchBox-icon" onClick={this.handleOnClick}>
                    <FontAwesomeIcon icon={faSearch} />                     
                </div>
                <input className="searchBox-input" type="text" placeholder="חיפוש"
                value={this.state.query}
                onChange={this.handleInputChange}
                onKeyDown={this.handleOnEnter} />
            </div>
        )
    }
    
    
    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleOnEnter = (e) => {
        if(e.keyCode == 13)
        {
            console.log(this.state.query);
            this.props.startSearch(this.state.query);
        }
        else {
        }
    }

    handleOnClick = () => {
        console.log(this.state.query);
        this.props.startSearch(this.state.query);
    }

}

const mapDispatchToProps = (dispatch) => ({
    startSearch: (query) => dispatch(fetchSearch(query))
  });

export default connect(undefined, mapDispatchToProps)(SearchBox);
