import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type CarCardProps = {
  id: string;
  modelo: string;
  descripcion: string;
}


const CarCard: React.FC<CarCardProps> = ({
  id,
  modelo,
  descripcion,
}) => {
  const goTo = useNavigate();

  const redirectToCar = (e: any) => {
    e.preventDefault();
    goTo(`/car/${id}`);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://picsum.photos/200/300?random=${id}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {modelo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={redirectToCar} id={id} size="small" color="primary">
          VER
        </Button>
      </CardActions>
    </Card>
  )
}

export default CarCard