// index page of the app 

import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Button } from 'reactstrap';

import checkToken from '../functions/checkToken';

class Index extends Component 
{
    componentDidMount()
    {
        // checks if user logged in or not
        if( checkToken() )
        {
            this.props.history.push('/home');
        }
    }

    render() 
    {
        return (
            <div className="index" >
                <h1>Novac Builder</h1>
                <div className="btn_container" >
                    <Button color="primary" className="btn"
                        onClick={ () => this.props.history.push('/login') } 
                    >
                        LOGIN
                    </Button>
                    <Button color="primary" className="btn"
                        onClick={ () => this.props.history.push('/register') }
                    >
                        REGISTER
                    </Button>
                </div>
                <br />
                <img src="http://novac-php.dv/assets/img/Novac_logo.png" alt="Novac_logo" width="179" height="45" 
                    className="img-fluid mx-auto d-block" 
                />
            </div>
        );
    }
}

export default withRouter(Index);
