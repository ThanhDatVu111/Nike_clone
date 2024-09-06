import { shoe8 } from "../assets/images";
import Button  from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Discover the
          <span className='text-[#C7633F]'> Ultimate </span>
          <span className='text-[#C7633F]'> Footwear </span> Experience
        </h2>
        <p className='mt-4 lg:max-w-lg info-text text-black'>
          Experience unparalleled comfort and cutting-edge design with our exclusive collection. Each pair of shoes is expertly crafted to deliver exceptional quality and sophisticated style, making every step a statement.
        </p>
        <p className='mt-6 lg:max-w-lg info-text text-black'>
          Our commitment to innovation and excellence ensures that you walk in confidence and style, with footwear that stands the test of time.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={670}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;