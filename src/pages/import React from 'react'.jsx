import React from 'react'
import { Button } from 'antd'
import Bouton from '../molecules/bouton/bouton'

function PageAcceuil() {
    return (
        <>
            <Header />
            <NavBar />
            <Pub nombre={1} />
            <GrosTitres />
            <ArticlesALaUne />
            <ContenusSponsorises />
            <VousRestezALaMaison />
            <VousSortez />
            <ContenusSponsorises />
            <Pub nombre={1} />
            <Pub nombre={3} />
            <Footer />
        </>
    )
}



