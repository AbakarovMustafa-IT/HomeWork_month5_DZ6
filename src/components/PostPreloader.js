import React from "react";
import { Spinner } from 'react-bootstrap'

function PostPreloader() {
  return (
    <Spinner
      animation="border"
      variant="primary"
    />
  )
}

export default PostPreloader