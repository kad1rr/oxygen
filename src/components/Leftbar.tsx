import { useEffect, useState } from 'react'
import { AlignRight, Delete, Plus } from 'react-feather'
import Bold from './Bold'
import Button from './Button'
import Row from './Row'

const Leftbar = () => {
  const [activeTab, setActiveTab] = useState('welcome')
  const [recents, setRecents] = useState(JSON.parse(localStorage.getItem('recents')!) || [])

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab)
  }, [activeTab])

  return (
    <div
      id='leftbar'
      className='transition-all w-[300px] bg-darkPrimary min-h-screen text-white flex flex-col p-8 sticky left-0 top-0 justify-start gap-y-12'
    >
      <div className='w-auto h-[50px] flex flex-row gap-x-4 items-center justify-between'>
        <img
          src='/logo.png'
          alt='Oxygen'
          width={50}
          height={50}
        />
        <p className='font-primary text-3xl'>Oxygen</p>
        <AlignRight
          id='left-button'
          className='text-white mt-2 z-[999] bg-darkPrimary p-2 w-[35px] h-[35px] rounded-lg cursor-pointer'
          onClick={() => {
            const leftbar = document.getElementById('leftbar')
            const button = document.getElementById('left-button')
            leftbar?.classList.toggle('w-[300px]')
            leftbar?.classList.toggle('w-[50px]')
            button?.classList.toggle('absolute')
            button?.classList.toggle('left-[100px]')
          }}
        />
      </div>
      <div className='flex flex-row justify-between items-center overflow-x-hidden'>
        <Button
          onClick={() => {
            let recents = []
            if (localStorage.getItem('recents')) {
              recents = JSON.parse(localStorage.getItem('recents')!)
            } else {
              recents = []
            }
            const name = 'Note ' + Math.round(Math.random() * 100)
            recents.push(name)
            setRecents(recents)
            localStorage.setItem('recents', JSON.stringify(recents))
          }}
        >
          <p className='flex flex-row gap-x-4 items-center'>
            <Plus /> New note
          </p>
        </Button>
      </div>
      <div className='flex flex-col gap-y-6 justify-between items-left w-full'>
        <Bold>Recents</Bold>
        {recents.map((recent: string, index: number) =>
          recent != null ? (
            <Row
              key={index}
              isActive={activeTab.toLowerCase() === recent.toLowerCase()}
              onClick={() => setActiveTab(recent)}
            >
              <p className='flex flex-row gap-x-4 items-center'>
                {recent}{' '}
                <Delete
                  onClick={() => {
                    let recents = []
                    if (localStorage.getItem('recents')) {
                      recents = JSON.parse(localStorage.getItem('recents')!)
                    } else {
                      recents = []
                    }
                    console.log(recents)

                    delete recents[recents.indexOf(activeTab)]
                    setRecents(recents)
                    localStorage[activeTab] === null
                    localStorage.setItem('recents', JSON.stringify(recents))
                  }}
                />
              </p>
            </Row>
          ) : (
            ''
          )
        )}
      </div>
    </div>
  )
}

export default Leftbar
