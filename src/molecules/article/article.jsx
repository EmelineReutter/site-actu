import React from 'react'
import './article.css'

import { ClockCircleOutlined } from '@ant-design/icons';

import Image from '../../atoms/image/image'

export default function Article({ categorie, titre, tempsDeLecture, srcImage, iconeDeGauche }) {
    return (
        <div className="article">
            <div className="container-image-article">
                <Image src={srcImage} />
            </div>
            <div className="container-texte-article">
                <p>
                    <span className="text-it text-small">{categorie}</span>
                    <br />
                    <span className="text-bold">{titre}</span>
                    <br />
                    <span className="text-small">{iconeDeGauche = <ClockCircleOutlined />}{tempsDeLecture}</span>
                </p>
            </div>
        </div>
    )
}
