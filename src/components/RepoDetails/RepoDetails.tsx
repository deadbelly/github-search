import React, { useState } from 'react'
import { Repo } from '../App/App'
import { useUrl } from './hooks'

export interface Props {
  ownerName: string
  name: string
  allResults: Repo[]
}

export const RepoDetails: React.FC<Props> = (props) => {
  const [selection, setSelection] = useState<Repo | undefined>(undefined)

  useUrl(props, setSelection)
  return (
    <>
    </>
  )
}
