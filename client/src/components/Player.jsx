import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Player = (props) => {
    const { id } = props;
    return (
        <div>
            <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=EF5466&layout=&size=medium&type=tracks&id=${id}&app_id=442802`} width="300" height="300"/>
        </div>
    )
};

export default Player;