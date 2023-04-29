import React from 'react';
import './Testimonio.css';

export function Testimonio(props) {
    return (
        <article className='testimonio__container'>
            <img className='testimonio__img' src={require(`../../../src/assets/images/testimonio-${props.img}.png`)} alt={`Foto de ${props.nombre}`} />
            <div className='testimonio__texto'>
                <p className='testimonio__nombre'><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
                <p className='testimonio__trabajo'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='testimonio__testimonio'>"{props.testimonio}".</p>
            </div>
        </article>
    )
}