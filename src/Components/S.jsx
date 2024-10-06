import React, { useEffect, useState } from "react";
import "../index.css";
import p1 from "../Assets/logo3.avif"
import join from "../Assets/j1.avif"
import know from "../Assets/k.jpg"
import lion from "../Assets/lion.jpg"
import {useNavigate } from "react-router-dom";

function S(){
    let navigate = useNavigate()
    let [state,stateuse]=useState([])
    let [serch,serchset]=useState('')
    function fun(e){
        serchset(e.target.value)
    }
    useEffect(()=>{
        let apis=fetch(`https://pixabay.com/api/?key=46193722-399f0a697edb0f1d521ea4dde&q=${serch}&image_type=photo`)
        apis.then((x)=>x.json()).then((x)=>{
            stateuse(x.hits)
        })
        .catch(err => console.log('error', err));
    },[serch])
    
    // console.log(state);
   
    return(
        <>
        <div id="body">
                <div id="nav">
                            <img id="p1" src={p1} alt="" />
                            <h2 id="h20">THE PERFECT SNAP</h2>
                            <h2 id="h21">THE PERFECT SHOT</h2>
                           <img id="join" src={join} alt="images"></img>
                           <img id="know" src={know} alt="images"></img>
                           <div id="mpg"></div>
                           <img id="mlion" src={lion} alt="images"></img>
                </div>
        
            <input onChange={fun} autoComplete="off" id="search"  placeholder="search images" type="text"></input>
           <div id="images">
           {state.filter((x)=>x.tags.toLowerCase().includes(serch)).map((x,y)=>{
                return(
                    <div key={x.id}>
                    <img onClick={()=>navigate('/details',{state:{x}})} key={y} src={x.webformatURL} alt="images"></img>
                    </div>
                )
            })}
           </div>
        </div>
        </>
    )
}
export default S