import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

export default function DeepSenseImgCollage(): JSX.Element {
  return (
    <Grid className='deepsense-img-collage' container>
      <Grid mobileOld={12} mobile={12} laptop={7.62}>
        <div className='deepsense-img-collage__left'>
          <img
            className='detail-block__img'
            src={require('../../assets/deepsense/details/deepsense_details-03_IsaacHuang.jpg')}
            alt='details-04'
            width={1920}
            height={1080}
          />
        </div>
      </Grid>
      <Grid mobileOld={12} mobile={12} laptop={4.38}>
        <div className='deepsense-img-collage__right'>
          <img
            src={require('../../assets/deepsense/details/deepsense_details-04_IsaacHuang.jpg')}
            alt='details-06'
            width={1080}
            height={1080}
          />
        </div>
      </Grid>
    </Grid>
  );
}
