import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { chakra, Box } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <chakra.header className="mb-8" bg="primary">
    <Box maxW="960px" className="mx-auto py-6 px-2">
      <h1 className="m-0 uppercase text-xl  font-bold tracking-widest">
        <Link to="/" className="text-white">
          {siteTitle}
        </Link>
      </h1>
    </Box>
  </chakra.header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
