import styled from 'styled-components'
import { Container } from '../common/Container'
const Wrap=styled.section`padding:52px 0;`
const Head=styled.div`display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:22px;`
export const Section=({title,children}:{title:string;children:React.ReactNode})=><Wrap><Container><Head><h2>{title}</h2></Head>{children}</Container></Wrap>