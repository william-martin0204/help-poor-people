'use client'
import { Carousel, Typography } from "@material-tailwind/react";
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';

export default function Home() {
  const cardData = [
    {
      image: 'images/image-card-1.jpg',
      title: 'Help Poor People',
      content: 'This is our duty. We can help them as soon as possible.'
    },
    {
      image: 'images/image-card-2.jpg',
      title: 'Help Poor People',
      content: 'This is our duty. We can help them as soon as possible.'
    },
    {
      image: 'images/image-card-3.webp',
      title: 'Help Poor People',
      content: 'This is our duty. We can help them as soon as possible.'
    }
  ]
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid min-h-[150px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <Carousel
            className="rounded-xl"
            autoplay
            autoplayDelay={8000}
            loop
          >
            <img
              src="images/image-carousel-1.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <img
              src="images/image-carousel-2.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <img
              src="images/image-carousel-3.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Carousel>
        </div>
      </div>

      <div className="container mx-auto my-5">
        <Typography variant="h3">
          Together, We Can Make a Difference
        </Typography>
        <Typography variant="lead" color="blue-gray">
          we believe in a collaborative approach to tackling poverty. Through partnerships with trusted local organizations and communities, we ensure that our aid reaches those who need it most. By supporting sustainable, community-driven projects, we aim to empower people and provide long-term solutions. Together with our dedicated donors and volunteers, we believe that everyone deserves the opportunity to live with dignity and hope. Help us make a difference—whether by spreading the word, shopping from our humanitarian gift catalog, or making a donation, your support goes a long way.
        </Typography>
      </div>

      <div className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-5">
          {cardData.map((item, index) => (
            <Card
              key={`card-image-${index}`}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          ))

          }
        </div>

        <figure className="relative min-h-[250px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible my-5 ">
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
          <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div>
              <Typography variant="h5" color="blue-gray">
                Sara Lamalo
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                20 July 2022
              </Typography>
            </div>
            <Typography variant="h5" color="blue-gray">
              Growth
            </Typography>
          </figcaption>
        </figure>
      </div>
    </>
  )
}
