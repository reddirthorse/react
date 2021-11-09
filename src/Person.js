import React, { Component, Fragment } from "react"


    function Person({country,name,age}){
        //const name = "operstu1"
        //const age =3
        //const {country,name,age} = props
        return(
            <Fragment>
                <h1>{country}</h1>
                <h3>{name}</h3>
                <h4>{age}</h4>
            </Fragment>
        )
    }


export default Person;