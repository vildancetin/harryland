
const HomeCard = ({image,title,link}) => {
  return (
    

<div className="max-w-[220px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
relative flex slice maxw">
    <a href={link}>
        <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-yellow-50 font-semibold text-xl">{title}</p>
   
</div>

  )
}

export default HomeCard