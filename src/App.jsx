import React, { } from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

const App = () => {
    const classes = useStyles();

    const cards = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="TextPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
<<<<<<< HEAD
                            Add your favourite photos to your own album!
=======
                            xyz
>>>>>>> 7afbd0b (Test xyz)
                        </Typography>
                        <div className={classes.buttonsGrid}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="xl">
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4} lg={6}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Tmage title"
                                        />
                                        <CardContent classes={classes.cardContent}>
                                            <Typography gutterBottom variant="h5">
                                                Title
                                            </Typography>
                                            <Typography >
                                                This is some photo.
                                            </Typography>
                                        </CardContent>
                                        <CardActions align="center">
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    “The picture that you took with your camera is the imagination you want to create with reality.” — Scott Lorenzo
                </Typography>
            </footer>
        </>
    )
}

export default App;