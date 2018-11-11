import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, Redirect } from 'react-router-dom';




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
                <input className="searchBox-input" type="text" placeholder="Search"
                value={this.state.query}
                onChange={this.handleInputChange}
                onKeyDown={this.handleOnEnter} />
                <div className="searchBox-icon" >
                    <li> 
                        <Link to={'/Search/' + this.state.query} id="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>
                     </li>                   
                </div>
            </div>
        )
    }
    
    
    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleOnEnter = (e) => {
        if(e.keyCode == 13) {
            const button = document.getElementById('search-button');
            button.click();
            handleInputChange("");
            }
        else {
        }
    }

    handleOnClick = () => {
        this.props.startSearch(this.state.query);
    }

}

export default SearchBox;
