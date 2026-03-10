import React from 'react'
import GenerativeAICard from './web/GenerativeAICard'
import WebCard from './web/WebCard'
import ResultCard from './web/ResultCard'
import CardsGrid from './web/CardsGrid'
import CompareSection from './web/CompareSection'

const AIServices = () => {
  return (
    <div className='py-10'>
      <GenerativeAICard/>
      <WebCard/>
      <ResultCard/>
      <CardsGrid/>
      <CompareSection/>
    </div>
  )
}

export default AIServices
