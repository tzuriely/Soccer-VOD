import React from 'react';
import { connect } from 'react-redux';
import Games from '../components/Games/Games';
import {fetchGames} from '../actions/games';
import {fetchSearch} from '../actions/search';
import isLeague from '../selectors/games';
import {selectLeague} from '../actions/selectedLeague';
import {changePageTitleAction} from '../actions/pageTitle';




class GamesRouter extends React.Component  {
    constructor(props) {
        super(props);

        this.getGames = this.getGames.bind(this);
        this.changePageTitle = this.changePageTitle.bind(this);
        this.returnSelectedGame = this.returnSelectedGame.bind(this);

    }

    render() {
        if(this.props.selectedGames != []) {
            return (
                <Games selectedGames = {this.props.selectedGames}
                 selectedGame= {this.returnSelectedGame(this.props.match.params.id, this.props.selectedGames)}
                 league = {this.props.match.params.name}/>
            )
        }
    }
    componentDidMount(){
        console.log('mount');
        this.props.dispatch(fetchGames());
        //this.changePageTitle(false, "blabla");
    }

    componentDidUpdate() {
        let league = isLeague(this.props.match.params.name);
        if(league != "") {
            this.getGames(this.props.match.params.name);
            this.changePageTitle(true, league);
        }
        else {
            this.props.dispatch(fetchSearch(this.props.match.params.name));
            this.changePageTitle(false, this.props.match.params.name);
        }

    }

    returnSelectedGame = (title, selectedGames) => {
        for(var i = 0; i < selectedGames.length; i++)
        {
          if(selectedGames[i].title == title)
          {
            return selectedGames[i];
          }
        }
        // console.log(selectedGames[0]);
        // return selectedGames.filter(x => x.title == title); 
    }

    getGames(league) {
        this.props.dispatch(selectLeague(this.props.games, league));
    }

    changePageTitle(isLeague, title) {
        if(isLeague) {
            this.props.changePageTitleActionDispatch(title);
        }
        else {

            this.props.changePageTitleActionDispatch( "תוצאות חיפוש: "+ title  );
        }
    }
    
}

const mapStateToProps = state => ({
    games: state.games,
    selectedGames: state.selectedGames
 });

 const mapDispatchToProps = (dispatch) => { 
    return {
        changePageTitleActionDispatch: (query) => dispatch(changePageTitleAction(query)),
        dispatch
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GamesRouter);