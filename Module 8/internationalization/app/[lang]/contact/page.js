import React from 'react'
import { getDisctonary } from '../dictionaries/dictionaries'

export default async function Contact({ params: { lang } }) {

  const dict = await getDisctonary(lang)

  return (
    <div>{dict.contact}</div>
  )
}
