import React from 'react'

import { Toolbar, Button } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import { makeStyles } from '@material-ui/core/styles'

const useHeader = makeStyles({
    header: {
        background: 'blue',
        width: '100vw',
        height: '9vh',
        color: '#f0f2f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: '0.5rem',
        height:'2rem',
        filter: 'invert(100%)'
    },
    paragraph: {
        fontSize: '1.15rem'
    }
})

export const Header = () => {
    const { header, button, paragraph } = useHeader()

    return (
        <Toolbar className={header}>
            <p className={paragraph}>Welcome to the world of quests</p>
            <Button className={button}>
                <ReplayIcon />
            </Button>
        </Toolbar>
    )
}
