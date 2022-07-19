import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avtarImg from '../images/lightstock_66078_comp.png'

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 308,padding:'10px',borderRadius:'25px' }}>
      <CardContent>
        <Typography fontSize="200px">“</Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={avtarImg} />
        }
        title="John Doe"
        subheader="Church Name"
      />
    </Card>
  );
}
