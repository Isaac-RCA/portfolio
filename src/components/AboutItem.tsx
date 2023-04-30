import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  type Education,
  type Experience,
  type Activity,
  type Skill,
  type About
} from '../interfaces';

interface AboutItemProps {
  infoKey: keyof About;
  info: About[keyof About];
}

export default function AboutItem({
  infoKey,
  info
}: AboutItemProps): JSX.Element | null {
  switch (infoKey) {
    case 'Description':
      return (
        <div className='info-items'>
          <div className='info-items__description rfs-main'>{info.toString()}</div>
        </div>
      );
    case 'Education':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item, index) => {
            const {
              Degree,
              School,
              Duration,
              Additional
            } = item as Education;

            return (
              <div className='info-items' key={index}>
                <div className='info-items__title rfs-main'>{Degree}</div>
                <div className='info-items__subtitle rfs-main'>{School}</div>
                <div className='info-items__caption rfs-cap'>{Duration}</div>
                <div className='info-items__caption rfs-cap'>{Additional}</div>
              </div>
            );
          })}
        </>
      );
    case 'Experience':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item, index) => {
            const {
              Title,
              'Company name': CompanyName,
              Duration,
              Additional,
              url
            } = item as Experience;

            const CompanyNameDiv = ((url !== undefined)
              ? (
                <a
                  className='info-items__subtitle rfs-main'
                  href={url}
                  target='_blank'
                  rel='noreferrer noopener'
                  key={index}
                >
                  {CompanyName}&nbsp;
                  <OpenInNewIcon />
                </a>
              )
              : <div className='info-items__subtitle rfs-main'>{CompanyName}</div>
            );

            return (
              <div className='info-items' key={index}>
                <div className='info-items__title rfs-main'>{Title}</div>
                {CompanyNameDiv}
                <div className='info-items__caption rfs-cap'>{Duration}</div>
                <div className='info-items__caption rfs-cap'>{Additional}</div>
              </div>
            );
          })}
        </>
      );
    case 'Activity':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item, index) => {
            const {
              Name,
              Organization,
              Duration
            } = item as Activity;

            return (
              <div className='info-items' key={index}>
                <div className='info-items__title rfs-main'>{Name}</div>
                <div className='info-items__subtitle rfs-main'>{Organization}</div>
                <div className='info-items__caption rfs-cap'>{Duration}</div>
              </div>
            );
          })}
        </>
      );
    case 'Skill':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item) =>
            Object.entries(item as Skill).map(([key, value]) => (
              <div className='info-items' key={key}>
                <div className='info-items__title rfs-main'>{key}</div>
                <div className='info-items__subtitle rfs-main'>{value}</div>
              </div>
            ))
          )}
        </>
      );
    default:
      return null;
  }
}
