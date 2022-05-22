import Link from 'next/link'
import React from 'react'
import { StyledMain } from './styles'

export default function NotFound() {
  return (
    <StyledMain>
        <h1>404 <span>Not Found</span></h1>
        <Link href='/login'>Voltar ao Login</Link>
    </StyledMain>
  )
}
