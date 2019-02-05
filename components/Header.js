import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  textDecoration: 'none',
  color: '#fff'
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px',
  backgroundColor: '#765b9d',
  color: '#fff',
  fontFamily:'Arial'
}

const Header = () => (
    <div style={headerStyle}>
        <div className="logo-holder">
          <Link href="/">
            <a style={linkStyle}>D4S</a>
          </Link>
        </div>


        <div className="nav">
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/software">
            <a style={linkStyle}>Software</a>
          </Link>
          <Link href="/resources">
            <a style={linkStyle}>Resources</a>
          </Link>
          <Link href="/add-resource">
            <a style={linkStyle}>Add Resource</a>
          </Link>
        </div>        
        
    </div>
)

export default Header
