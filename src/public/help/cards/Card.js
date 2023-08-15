import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';

export default function BasicCard({item}) {
  const {title} = item;

  return (
    <div className="userCard">
      <Card className="card-description" sx={{minWidth: 275}}>
        <CardContent className="cont">
          <DescriptionIcon className="image-paper" sx={{fontSize: 100, color: "#147e82"}}/>
          <div className="title">
            <Typography className="title" sx={{color: "rgb(20, 65, 90)"}} variant="body2">
           {title}
            </Typography>
          </div>
        </CardContent>
        <CardActions className="button-download">
          <Button className="button-download" sx={{color: " #3C8084"}}
                  variant="outlined">
            Download
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
