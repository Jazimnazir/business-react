import React from 'react';
import { Grid, Typography, Paper, IconButton, InputBase, Divider, Box, Button, CardActions, CardContent, CardMedia, Card } from '@mui/material';
import valiant from "../assets/valiant.jpg"
import business from "../assets/business.jpg"
import img2 from "../assets/img2.png"
import london from "../assets/london.jfif"
import ev from "../assets/ev.jfif"
import prop from "../assets/prop.jpg"


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import DirectionsBoatFilledOutlinedIcon from '@mui/icons-material/DirectionsBoatFilledOutlined';
import PhonelinkLockOutlinedIcon from '@mui/icons-material/PhonelinkLockOutlined';

export const Home = () =>{
    return(
        <Grid backgroundColor="rgba(229, 229, 229,)
        ">
          <Grid 
          sx={{
            display: 'flex',
            position: 'fixed',
            // justifyContent: 'center',
            backgroundColor: 'white',
            color: 'black',
            pt: '0px',
            p: '31px',
            //  pb:'10px',
            width: '100%',
          }}
        >  
        <img src={valiant} alt="Business Media Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
        <Typography variant='h5' sx={{ color: 'black' }}>
            Business Media
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '350px' }}>
            About
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            SERVICES
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            INDUSTRIES
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            VALUES
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            GET IN TOUCH
          </Typography>
        </Grid>
        



          <Grid
          sx={{
             display: 'flex',
            //  position: 'fixed',
            justifyContent: 'center',
            backgroundColor: 'black',
            color: 'white',
            // mt:"117px",
            pt: '180px',
            // p: '31px',
             pb:'79px',
            width: '100%',
          }}
        >
             <img src={valiant} alt="Business Media Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
          <Typography variant='h5' sx={{ color: 'white',fontWeight:"bolder" }}>
            Business Media
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '111px' }}>
            KEY SECTORS
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            UPCOMING EVENTS
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            CONTACTS
          </Typography>
         </Grid>


         <Box sx={{ display: 'flex', alignItems: 'center', p: '70px' }}>
    <div>
        <Typography variant='h5' fontWeight='bolder'>
            <span style={{ color: 'rgb(54 192 204)' }}>Impeccable Experiences</span> Designed and Delivered
        </Typography>
        <Typography color="grey" variant='h6'>
            Headquartered in London, Valiant Business Media is a part of Valiant & Company, ardently dedicated to offer exclusive, unique and tailor-made events and create impeccable and lasting experiences for the clients. For more than a decade we have organised events including government sponsored forums, conventions, conferences & exhibitions across the globe. Our shows enjoy an unparalleled reputation as the optimal trading platforms for global & regional companies, service & technology providers that bring together a pool of business leaders, policymakers & thought leaders from different corners of the world.
            <br /><br />
            Valiant Business Media offers creative delivery of events for a variety of industries including oil & energy, mining & metals, healthcare, pharmaceutical, technology and more. We aim to be a leading events company providing total meeting solutions and creative production management.
        </Typography>
    </div>
    <img src={business} alt="Business Media Logo"  style={{ marginLeft: '40px',marginTop:"-110px" }} />
    
</Box>

<Grid container sx={{ p: '70px' }}>
    {/* Left half */}
    <Grid item xs={6}>
    <Typography variant='h3' fontWeight='bolder'>
        <span style={{ color: 'rgb(54 192 204)' }}>Key</span> Sectors
    </Typography>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingTop:"20px" }}>
        <ShoppingCartOutlinedIcon style={{ width: '20%', height: '200%', color: "rgb(54 192 204)" }} />
        <Typography fontWeight="bold" >Metals and Mining</Typography>
    </div>
    <Typography color="grey">
        Valiant Business Media is the home to the most comprehensive portfolio of events in the Mining sector. Our professional trade shows enjoy the unparalleled reputation as the optimal trading platforms for Mining Ministries, Geological Research Authorities & Surveys, International Mining & Quarrying Companies, Service & Technology Providers, Mining Think Tanks and the Consulting Organisations as well as other related products and service providers. Through our range of mining events, hosted around the world, we can enable you to progress your business wherever it sits in the chain.
    </Typography>
</Grid>



    {/* Right half */}
    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center',paddingTop:"50px" }}>
        <div style={{ paddingLeft: '90px',paddingTop:"35px" }}>
            <AgricultureOutlinedIcon style={{ width: '20%', height: '200%', color: "rgb(54 192 204)" }} />
            <Typography fontWeight="bold">Agriculture</Typography>
            <Typography color='grey'>
            Valiant Business Media organises events in agriculture sector and provides a platform for producers, influencers ,businesses and decision makers to gather under a single roof with our focus being on critical aspects including Food security, Improving crop yield, Crop protection, Embedding IoT in agriculture, Formulating policies and frameworks, Facilitate sharing of ideas and knowledge. Our events in the agriculture industry give our clients unparallelled networking and exhibiting opportunities.
            </Typography>
        </div>
    </Grid>

    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center',paddingTop:"50px" }}>
        <div style={{ paddingLeft: '90px',paddingTop:"35px" }}>
            <MedicalInformationOutlinedIcon style={{ width: '20%', height: '200%', color: "rgb(54 192 204)" }} />
            <Typography fontWeight="bold">Health And Pharmaceuticals</Typography>
            <Typography color='grey'>
            Valiant Business Media organises events in agriculture sector and provides a platform for producers, influencers ,businesses and decision makers to gather under a single roof with our focus being on critical aspects including Food security, Improving crop yield, Crop protection, Embedding IoT in agriculture, Formulating policies and frameworks, Facilitate sharing of ideas and knowledge. Our events in the agriculture industry give our clients unparallelled networking and exhibiting opportunities.
            </Typography>
        </div>
    </Grid>
    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center',paddingTop:"50px" }}>
        <div style={{ paddingLeft: '90px',paddingTop:"35px" }}>
            <OfflineBoltOutlinedIcon style={{ width: '20%', height: '200%', color: "rgb(54 192 204)" }} />
            <Typography fontWeight="bold">Energy</Typography>
            <Typography color='grey'>
            Valiant Business Media organises events in agriculture sector and provides a platform for producers, influencers ,businesses and decision makers to gather under a single roof with our focus being on critical aspects including Food security, Improving crop yield, Crop protection, Embedding IoT in agriculture, Formulating policies and frameworks, Facilitate sharing of ideas and knowledge. Our events in the agriculture industry give our clients unparallelled networking and exhibiting opportunities.
            </Typography>
        </div>
    </Grid>
    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center',paddingTop:"50px" }}>
        <div style={{ paddingLeft: '90px',paddingTop:"35px" }}>
            <DirectionsBoatFilledOutlinedIcon style={{ width: '20%', height: '200%', color: "rgb(54 192 204)" }} />
            <Typography fontWeight="bold">Automotive</Typography>
            <Typography color='grey'>
            Valiant Business Media organises events in agriculture sector and provides a platform for producers, influencers ,businesses and decision makers to gather under a single roof with our focus being on critical aspects including Food security, Improving crop yield, Crop protection, Embedding IoT in agriculture, Formulating policies and frameworks, Facilitate sharing of ideas and knowledge. Our events in the agriculture industry give our clients unparallelled networking and exhibiting opportunities.
            </Typography>
        </div>
    </Grid>
    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center',paddingTop:"50px" }}>
        <div style={{ paddingLeft: '90px',paddingTop:"35px" }}>
            <PhonelinkLockOutlinedIcon style={{ width: '20%', height: '200%', color: "rgb(54 192 204)" }} />
            <Typography fontWeight="bold">Technologies</Typography>
            <Typography color='grey'>
            Valiant Business Media organises events in agriculture sector and provides a platform for producers, influencers ,businesses and decision makers to gather under a single roof with our focus being on critical aspects including Food security, Improving crop yield, Crop protection, Embedding IoT in agriculture, Formulating policies and frameworks, Facilitate sharing of ideas and knowledge. Our events in the agriculture industry give our clients unparallelled networking and exhibiting opportunities.
            </Typography>
        </div>
    </Grid>
</Grid>




<Grid>
  
</Grid>
<Grid sx={{paddingLeft:"70px"}}>
<Typography variant='h3' fontWeight='bolder'>
        <span style={{ color: 'rgb(54 192 204)' }}>Upcoming</span> Events
    </Typography>
    <Box sx={{paddingTop:'33px'}}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={img2}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Bio Technology Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={london}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London Climate Technology 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={ev}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London EV Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={prop}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London Proptech Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={ev}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London EV Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={ev}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London EV Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
</Box>



</Grid>

            <Grid sx={{ p: '70px' }}>
            <Typography variant='h3' fontWeight='bolder'>
        <span style={{ color: 'rgb(54 192 204)' }}>News</span> & Blog
    </Typography>
    <Box sx={{paddingTop:'33px'}}>
    <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={img2}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Bio Technology Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={london}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London Climate Technology 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={ev}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London EV Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={prop}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London Proptech Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={ev}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London EV Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={ev}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  London EV Show
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Button variant='contained' sx={{marginLeft:"33px",marginTop:"27px",backgroundColor:"rgb(54 192 204)"}}> View More</Button>
            </Grid>

    </Box>
            </Grid>


        </Grid>
    )
}