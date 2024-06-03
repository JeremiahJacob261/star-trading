import Link from 'next/link'
function Linker({children} ){
  const child = children ?? " ";
    return(
      <Link className="linkers" style={{color:'white'}} href={'/'+child.replace(" ",'').toLowerCase()}>
        {children}
        </Link>
    )
  }
  export default Linker;