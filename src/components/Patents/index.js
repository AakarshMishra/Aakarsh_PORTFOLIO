import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './PatentsStyle'
import PatentCard from '../Cards/PatentCards'
import { patents } from '../../data/constants'


const Patents = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="patents">
      <Wrapper>
        <Title>Patents and Certifications</Title>
        <Desc>
        Here are some of my patents and Certications.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'patents' ?
            <ToggleButton active value="patents" onClick={() => setToggle('patents')}>PATENTS</ToggleButton>
            :
            <ToggleButton value="patents" onClick={() => setToggle('patents')}>PATENTS</ToggleButton>
          }
          <Divider />
          {toggle === 'certifications' ?
            <ToggleButton active value="certifications" onClick={() => setToggle('certifications')}>CERTIFICATIONS</ToggleButton>
            :
            <ToggleButton value="certifications" onClick={() => setToggle('certifications')}>CERTIFICATIONS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && patents
            .map((patent) => (
              <PatentCard patent={patent} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {patents
            .filter((item) => item.category == toggle)
            .map((patent) => (
              <PatentCard patent={patent} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Patents