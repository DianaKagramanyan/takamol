import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {card1, card2, card3} from "../../../../img";

const bull = (
  <Box
    component="span"
    sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

export default function Cards() {
  return (
    <div>

      <h1 className="header-benef">Beneficiary services</h1>

      <div className="card-main">
        <div className="card">
          <Card className="content" sx={{minWidth: 275}}>
            <CardContent className="content">
              <img className="image-card" src={card1} alt="card1"/>
              <div>
                <Typography className="name">
                  people with disabilities
                </Typography>
              </div>
              <Typography className="text" variant="body2">
                The Ministry aims to work towards setting general policies for the
                care of orphaned children and the like, and social groups with
                special circumstances of unknown parents, and their inclusion in
                care, education and reform. And follow up their care in the shelters
                and the foster families
              </Typography>
            </CardContent>
            <CardActions className="button-go">
              <Button variant="outlined"  color="success" size="small">Go to services</Button>
            </CardActions>
          </Card>
        </div>

        <div className="card">
          <Card className="content" sx={{minWidth: 275}}>
            <CardContent className="content">
              <img className="image-card" src={card2} alt="card2"/>
              <Typography>
                the elderly
              </Typography>
              <Typography className="text" variant="body2">
                The elderly category receives great attention from the Saudi
                society, and the government of the Kingdom of Saudi Arabia has
                given care and attention to this category from an organizational and
                historical point of view. The Council of Ministers approved the draft
                of the new system for the rights and care of the elderly, which
                aims to preserve the rights of the elderly and their care and raise
                the quality of their lives, which grants the elderly special privileges
                and preserves their social, financial and legal rights.
              </Typography>
            </CardContent>
            <CardActions className="button-go">
              <Button variant="outlined"  color="success" size="small">Go to services</Button>
            </CardActions>
          </Card>
        </div>

        <div className="card">
          <Card className="content" sx={{minWidth: 275}}>
            <CardContent className="content">
              <img className="image-card" src={card3} alt="card3"/>
              <Typography>
                orphans
              </Typography>
              <Typography className="text" variant="body2">
                The Ministry seeks to empower persons with disabilities and
                support them with services designated for them in order to ensure
                their independence and integration as active members of society.
              </Typography>
            </CardContent>
            <CardActions className="button-go">
              <Button variant="outlined"  color="success" size="small">Go to services</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

