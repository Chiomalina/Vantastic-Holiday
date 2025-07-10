import React from 'react'

function Footer() {
    const currenetYear = new Date().getFullYear();
  return (
    <div>
      <footer>&#169; {currenetYear} #VANLIFE</footer>
    </div>
  )
}

export default Footer
