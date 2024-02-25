// import ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./Customs.css"
import "./Home.css"
import BoardSettings from "./BoardSettings";
import PlayerSettings from "./PlayerSettings";
import Game from "./Game"
import React from "react";
export default function Home(){

    return(
        <div id={"master"}>
            <BrowserRouter>
                <div id={"link-container"}>
                    <Link className={"custom-link"} to={"/board-settings"} style={{textDecoration:"none"}}>
                        <img src={"./icons/board-settings.png"} style={{width: 80, height: 80}}
                             alt={"Board Settings"}/>
                        Board Settings
                    </Link>
                    <Link className={"custom-link"} to={"/player-settings"}>
                        <img src={"./icons/player-settings.png"} style={{width: 80, height: 80}} alt={"Player Settings"}/>
                        Player Settings
                    </Link>
                    <Link className={"custom-link"} to={"/game"}>
                        <img src={"./icons/start.png"} style={{width: 80, height: 80}} alt={"Start"}/>
                        Start Game
                        <br/>
                        (Default Settings)
                    </Link>
                </div>
                <Routes>
                    {/*<Route path="/board-settings" element={<BoardSettings/>}></Route>*/}
                    <Route path="/board-settings" element={<BoardSettings/>}></Route>
                    <Route path="/player-settings" element={<PlayerSettings/>}></Route>
                    <Route path="/game" element={<Game/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    );
}