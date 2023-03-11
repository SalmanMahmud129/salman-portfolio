import { Link } from "react-scroll"



function Desktop() {

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'skills'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
    <div className="sticky top-0 items-center justify-between hidden p-2 mx-1 my-2 text-white rounded-lg md:flex md:h-20 bg-slate-600 ">
    <div>
      <h1 className="m-2 text-4xl font-light duration-200 hover:scale-110"><strong className="font-bold">Salman</strong> Mahmud </h1>
    </div>

    <ul className="flex">
      {links.map(link =>{
       return <li key={link.id} className="px-4 font-medium text-blue-300 capitalize duration-200 cursor-pointer hover:scale-110 hover:bg-slate-900 hover:rounded-xl"><Link to={link.link} smooth duration={500}>{link.link}</Link></li>
      })}
      

    </ul>
    </div>
    
  )
}

export default Desktop