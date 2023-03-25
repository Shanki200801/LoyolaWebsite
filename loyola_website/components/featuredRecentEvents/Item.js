import Image from "next/image";
//import PlaceholderImage from "../../Assets/carousel3.jpg";
export default function Item({ slide }) {
  const img_src = slide.image;
  const img_alt = slide.message;
  // console.log("This is the image path "+img_src);
  return (
    <div className='h-2/4'>
      <img
        className="mx-auto w-3/4"
        //Check this
        
        src = {img_src}
        alt = {img_alt}

        //src={PlaceholderImage}
        
        // width={256}
        // height={256}
        //alt={'example event displaying the GitHub\'s mascot "Octocat"'}
      />
    </div>
  );
}

