import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  background: #f9f9fc;
  width: 91%;
  margin: 0 auto;
  margin-top: 118px;
  text-align: center;
  font-size: 31px;
  padding: 99px 0 160px 0px;

  p.oups {
    margin-bottom: 50px;
  }
  p.lastText {
    margin-top: 88px;
  }
`

function Error() {
  return (
    <PageWrapper>
      <p className="oups">Oups...</p>
      <p className="lastText">Il semblerait qu'il y ait un problème</p>
    </PageWrapper>
  )
}

export default Error
