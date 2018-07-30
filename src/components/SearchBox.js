import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



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

        var mainClassName="SearchBox " + this.props.className;
        return (
            <div className= {mainClassName}>
                <div className="SearchIcon" onClick={this.handleOnClick}>
                    <FontAwesomeIcon icon={faSearch} />                     
                </div>
                <input className="SearchInput" type="text" placeholder="חיפוש"
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
        }
        else {
        }
    }

    handleOnClick = () => {
        console.log(this.state.query);
    }

}

export default SearchBox;