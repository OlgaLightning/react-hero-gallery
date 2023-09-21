import React from "react";

function Hero(props) {
    return (
        <div className='hero-card'>
            <img className="image" src={props.url} alt='Hero' />
            <div className='hero-name'>{props.name}</div>
            <div className='hero-par'>Вселенная: {props.universe}</div>
            <div className='hero-par'>Альтер эго: {props.alterego}</div>
            <div className='hero-par'>Род деятельности: {props.occupation}</div>
            <div className='hero-par'>Друзья: {props.friends}</div>
            <div className='hero-par'>Суперсилы: {props.superpowers}</div>
        </div>
    );
}

export default Hero;