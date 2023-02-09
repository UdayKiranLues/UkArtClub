import React from 'react'
import impress from './Assets/impress.jpg'
import Fauvism from './Assets/Favuism.jpg'
import Cubism from './Assets/Cubism.jpg'
import Futurism from './Assets/Futurism.jpg'
import Expressionism from './Assets/Express.jpg'
import Dadaism from './Assets/Dadaism.jpg'
import Icon from './Assets/Icon.png'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import '../App.css'

const Carddata = [
    {
        title: 'Impressionism',
        content: 'What is impressionistic art? In short, impressionists attempted to portray an impression of what they saw...',
        img: impress,
    },
    {
        title: 'fauvism',
        content: 'What is impressionistic art? In short, impressionists attempted to portray an impression of what they saw...',
        img: Fauvism,
    },
    {
        title: 'Cubism',
        content: 'What is impressionistic art? In short, impressionists attempted to portray an impression of what they saw...',
        img: Cubism,
    },
    {
        title: 'Futurism',
        content: 'What is impressionistic art? In short, impressionists attempted to portray an impression of what they saw...',
        img: Futurism,
    },
    {
        title: 'Expressionism',
        content: 'What is impressionistic art? In short, impressionists attempted to portray an impression of what they saw...',
        img: Expressionism,
    },
    {
        title: 'Dadaism',
        content: 'What is impressionistic art? In short, impressionists attempted to portray an impression of what they saw...',
        img: Dadaism,
    },
]

const card = () => {
    return (
        <div className='grid'>
            <Grid container my={4}
                mx={2}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                
                item xs={12} spacing={3}
            >
                {Carddata.map((disease, index) => (
                    <Grid item xl={12} style={{ columnGap: '10px' }} >
                        <Card sx={12}
                            className="card"
                            style={{
                                height: '400px',
                                width: '300px',
                                color: 'blue',
                                display: 'column',
                                fontFamily:'Visuelt Pro'
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={disease.img}
                                alt="green iguana"
                            />
                            <CardContent
                                expand
                                style={{
                                    color: "#ff25jl",
                                    fontSize: '0',

                                }}
                            >

                                <Typography variant="h4" gutterBottom style={{ fontSize: '24px', color: '#002931', paddingLeft: '17px' }} >
                                    {disease.title}
                                </Typography>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                // style={{ paddingBottom: "3.3rem", paddingTop: "2.6rem" }}
                                >

                                    <Typography
                                        style={{
                                            color: '#000',
                                            textAlign: 'justify',
                                        }} >
                                        {disease.content}
                                    </Typography>
                                </Grid>
                            </CardContent>
                            <div >
                                <CardActions
                                >
                                    <Grid item
                                    >
                                        <Link to='/types'> <Button
                                            variant="contained"
                                            style={{
                                                position: "absolute",
                                                border: "1px solid #00839B",
                                                boxSizing: "border-box",
                                                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                                                borderRadius: "8px",
                                                padding: "8px 14px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                fontSize: "14px",
                                                lineHeight: "20px",
                                                color: "#FFFFFF",
                                                marginLeft: "3rem",
                                                bottom: "46px",
                                            }}
                                        >
                                            Click Here to More &nbsp;
                                            <span> <img src={Icon} alt='' style={{ width: '100%' }} /> </span>
                                        </Button></Link>
                                    </Grid>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid >
        </div >
    )
}

export default card