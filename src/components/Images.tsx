import React from 'react'

const Images = ({images}) => {
    const [mainImage, setMainImage] = React.useState(images[0]);
  return (<>
  <div className='flex'>
    <figure className='grid grid-rows-5'>
        {images.map((image, index) => (
            <img 
            key={index} 
            className='h-10 w-10 border rounded-md cursor-pointer hover:border-orange-400 p-1 hover:p-0 transition-all' 
            src={image} 
            alt={image} 
            onClick={() => {
                setMainImage(image)
            }}
            />
        ))}
    </figure>
    <div className='m-8 '>
    <img className='h-40 w-40 border rounded-md' src={mainImage} alt={mainImage} />
    </div>
    </div>
    </>
  )
}

export default Images;