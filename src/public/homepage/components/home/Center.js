import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

const Center = () => {
  return (
    <div className="center">
      <div className="card-main">
        <div className="card-small">
          <Card className="content" sx={{minWidth: 275}}>
            <CardContent className="content">
              <div className="icon">
                <ReceiptLongOutlinedIcon className="icon" sx={{fontSize: 80}}/>
              </div>
              <div>
                <Typography className="name1">
                  Issuance of a license
                </Typography>
              </div>
            </CardContent>
            <CardActions className="button-go">
              <Button variant="outlined" color="success" size="small">Go to services</Button>
            </CardActions>
          </Card>
        </div>

        <div className="card-small">
          <Card className="content" sx={{minWidth: 275}}>
            <CardContent className="content">
              <InsertDriveFileOutlinedIcon className="icon" sx={{fontSize: 80}}/>
              <Typography className="name1">
                Issuing an initial approval for a civil center
              </Typography>
            </CardContent>
            <CardActions className="button-go">
              <Button variant="outlined" color="success" size="small">Go to services</Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div className="detail2">
        <h1 className="header2">
          Center services
        </h1>
        <p className="description2">
          This platform provides a set of electronic services to improve
          and facilitate procedures related to private rehabilitation
          centers for the beneficiaries and owners of the centers
        </p>

        <div className='button'>
          <div className='button-cont'>
            <Button variant="contained" color="success">view all services</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Center;
