import React from 'react'
import { Button } from 'antd';

import './boutonLogin.css'

export default function BoutonLogin({ iconeDeGauche, children, graisse, backgroundColor, border }) {
    return (
        <Button>{iconeDeGauche}{children} </Button>
    )
}