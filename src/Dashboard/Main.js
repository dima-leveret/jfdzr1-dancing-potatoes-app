import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { mainStyles } from './MainStyles';
import Home from "../Home/Home";
function Main() {
        const classes = mainStyles();

        return (
            <main className={classes.content} >
                <div className={classes.toolbar} />
                <Switch> 
                    <Route path = '/home'>
                        <Home />
                    </Route>

                    <Route path = '/ulubione'>
                        <Typography paragraph> Ulubione </Typography>
                    </Route>

                    <Route path = '/kayak'>
                        <Typography paragraph> Kayak </Typography>
                    </Route>

                    <Route path = '/mapa'>
                        <Typography paragraph> Mapa </Typography>
                    </Route>
                
                </Switch>
            </main>
        )
}

export default Main;