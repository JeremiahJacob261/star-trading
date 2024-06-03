import Link from 'next/link'
function Linker({children} ){
    return(
      <Link className="linkers" style={{color:'white'}} href={'/'+children.replace(" ",'').toLowerCase()}>
        {children}
        </Link>
    )
  }
  export default Linker;