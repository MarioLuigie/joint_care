'use client'
import { ReactSVG } from "react-svg";

export default function Icon({ path }: { path: string }) {

  return (
    <ReactSVG src={path}/>
  )
}