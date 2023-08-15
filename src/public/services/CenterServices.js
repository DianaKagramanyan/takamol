import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function CenterServices({item}) {
  const {img, title} = item;

  return (
    <div className="servicesCards">
      <div className="cardS">
        <Card className="cardService" sx={{minWidth: 275}}>
          <CardContent className="cardService">
            <div className="icon"  >
              {img }
            </div>
            <Typography className="name1" variant="body2">
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{color: " #3C8084", border: ".5px solid #3C8084"}} variant="outlined" size="small" size="small">GO
              TO THE SERVICE</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
