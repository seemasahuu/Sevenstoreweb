import React from 'react'
import EventSlider from './EventSlider';
import { Divider } from 'antd';

const data = [
    {
      name: "Mr. & Mrs. Mahi",
    //   type:"Comedy/Horrar",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxNy41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318249-lzmzmtrgcb-portrait.jpg",
    },
    {
      name: "Srikanth",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0MS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354108-ytpuzjraud-portrait.jpg",
    },
    {
      name: "Savi",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICA0LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397136-rtagdsswdc-portrait.jpg",
    },
    {
      name: "Bad Boys: Ride or Die",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383487-exxmngmmcf-portrait.jpg",
    },
    {
      name: "Mr. & Mrs. Mahi",
    //   type:"Comedy/Horrar",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxNy41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318249-lzmzmtrgcb-portrait.jpg",
    },
    {
      name: "Srikanth",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0MS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354108-ytpuzjraud-portrait.jpg",
    },
    {
      name: "Savi",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICA0LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397136-rtagdsswdc-portrait.jpg",
    },
    {
      name: "Bad Boys: Ride or Die",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383487-exxmngmmcf-portrait.jpg",
    },
    {
      name: "Mr. & Mrs. Mahi",
    //   type:"Comedy/Horrar",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxNy41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318249-lzmzmtrgcb-portrait.jpg",
    },
    {
      name: "Srikanth",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0MS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354108-ytpuzjraud-portrait.jpg",
    },
    {
      name: "Savi",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICA0LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397136-rtagdsswdc-portrait.jpg",
    },
    {
      name: "Bad Boys: Ride or Die",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383487-exxmngmmcf-portrait.jpg",
    },
    {
      name: "Mr. & Mrs. Mahi",
    //   type:"Comedy/Horrar",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxNy41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318249-lzmzmtrgcb-portrait.jpg",
    },
    {
      name: "Srikanth",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0MS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354108-ytpuzjraud-portrait.jpg",
    },
    {
      name: "Savi",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICA0LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397136-rtagdsswdc-portrait.jpg",
    },
    {
      name: "Bad Boys: Ride or Die",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383487-exxmngmmcf-portrait.jpg",
    },
  ];


export const Prodectpage = () => {
  return (
    <div>
    s<div className='lg:m-20 m-6'>
      <EventSlider data={data} title="Movies" />
      <Divider/>
      <EventSlider data={data} title="Events" />
      <Divider/>
      <EventSlider data={data} title="Shows"/>
      <Divider/>
      <EventSlider data={data} title="Music" />
    </div>
    </div>
  )
}
