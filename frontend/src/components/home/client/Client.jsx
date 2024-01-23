import React from "react"
import Heading from "../../common/Heading"
import { client } from "../../data/Data"
import "./style.css"

const Client = () => {
  return (
    <>
      <section className='client padding'>
        <div className='container'>
          <Heading title='Existing Client Base'  />

          <div className='content grid3 mtop'>
            {client.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Client
