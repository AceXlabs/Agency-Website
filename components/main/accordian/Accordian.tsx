
import { Process } from '@/data/process'
import Container from '../../shared/Container'
import AccordionItem from './AccordianItem'
import Topic from '../../shared/Topic'

export default function Accordian() {
  return (
    <Container>
      <div
          className="relative flex flex-col items-center md:flex-row mt-20"
          id="Process"
        >
          <Topic
            title="Process"
            description="Step-by-Step Guide to Achieving Your Business Goals"
          ></Topic>
        </div>
{
  Process.map(
    ({index,label,content})=>{
      return (
        <AccordionItem
        index={index}
        title={label}
        key={index}
        description={content}        />
      )
    }
  )
}
    </Container>
  )
}
