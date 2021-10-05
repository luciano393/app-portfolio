import React from 'react'
import { ButtonComponent } from './ButtonComponent'

export const ProjectContent = (props) => {
    return (
        <div className="ProjectContent">
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.info}</p>
                <a href="https://payments-b38d1.web.app/">
                    <ButtonComponent text="View Project" className="btn primary"/>
                </a>
            </div>
            <div className="content-images">
                <img src={props.imageOne} alt=""/>
                <img src={props.imageTwo} alt=""/>
            </div>
        </div>
    )
}
