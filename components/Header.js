import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/software">
          <a style={linkStyle}>Software</a>
        </Link>
        <Link href="/resources">
          <a style={linkStyle}>Resources</a>
        </Link>
    </div>
)

export default Header
