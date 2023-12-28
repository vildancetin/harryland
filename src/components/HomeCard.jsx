import { Link, NavLink, Navigate } from "react-router-dom"

const HomeCard = ({image,title,link,category}) => {
  return (
    

<div className="max-w-[220px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
relative flex slice maxw">
    <Link to={link} state={{category}}>
        <img className="rounded-t-lg" src={image} alt="" />
    </Link>
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-yellow-50 font-semibold text-xl">{title}</p>
   
</div>

  )
}

export default HomeCard