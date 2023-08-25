import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CenterServices({item}) {
  const {img, title} = item;

  return (
      <div className="userCard" >
        <Card className="card-description"  sx={{minWidth: 275}}>
          <CardContent className="cont">
            <div className="icon">
              {img}
            </div>
            <Typography
              className="title"
              variant="body2">
              {title}
            </Typography>
          </CardContent>
          <CardActions className="button-download">
            <Button
              className="button-download"
              sx={{color: " #3C8084"}}
              variant="outlined"
            >
              GO TO THE SERVICE</Button>
          </CardActions>
        </Card>
      </div>
  );
}
