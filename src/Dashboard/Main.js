import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { mainStyles } from './MainStyles';
import Map from '../Maps/Map';
import {  withScriptjs, withGoogleMap } from 'react-google-maps';
import Home from "../Home/Home";
import OfferCards from '../Offerts/OfferCards';

import RatingForm from '../Rating/AddRating'
import RatingTable from "../Rating/RatingTable"

function Main() {
        const classes = mainStyles();
        const WrappedMap = withScriptjs(withGoogleMap(Map));

        return (
            <main className={classes.content} >
                <div className={classes.toolbar} />
                <Switch> 
                    <Route path = '/home'>
                        <Home />
                    </Route>

                    <Route path = '/ulubione'>
                        <RatingTable/>
                    </Route>

                    <Route path = '/kayak'>
                       <OfferCards />
                    </Route>

                    <Route path = '/mapa'>
                        <div style = {{width: '100%', height: '87vh'}}>
                            <WrappedMap 
                            googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABXq7l1yJ16e4DGL-Wpup5WJ_AlIJdISk`}
                            loadingElement = { <div style={{ height: '100%' }} /> }
                            containerElement = {<div style={{ height: '100%' }} /> }
                            mapElement = {<div style={{ height: '100%' }} /> }
                            />
                        </div>
                            
                    </Route>
                
                </Switch>
            </main>
        )
}

export default Main;