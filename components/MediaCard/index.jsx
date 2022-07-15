import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles.module.scss'
import Image from 'next/image'


export default function MediaCard({img,title,description}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#141414' }}>
      <CardMedia
        component="img"
        height="180"
        image={img}
        alt="green iguana"
      />
      <CardActions>
        <div className={styles.grid_btns}>
            <div>
                <a href="https://nextjs.org/docs">
                    <div className={styles.btn}>
                        <Image src="/Play.png" alt="Vercel Logo" width={32} height={32} />
                    </div>
                </a>
                <a>
                    <div className={styles.btn}>
                        <Image src="/GiftBox.png" alt="Vercel Logo" width={32} height={32}/>
                    </div>
                </a>
                <a>
                    <div className={styles.btn} style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: 'white', border: '2px solid white'}}>
                        <Image src="/Detail.png" alt="Vercel Logo" width={32} height={32} />
                    </div>
                </a>
            </div>
            <div>
                <a>
                    <div className={styles.btn}>
                        <Image src="/DownArrow.png" alt="Vercel Logo" width={32} height={32} />
                    </div>
                </a>
            </div>
        </div>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#e5e5e5">
          {title}
        </Typography>
        <Typography variant="body2" color="#e5e5e5">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}