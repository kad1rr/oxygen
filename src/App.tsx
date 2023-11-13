import { useEffect, useState } from 'react'
import Leftbar from './components/Leftbar'

const App = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab'))
  let [data, setData] = useState(localStorage.getItem(activeTab!))

  setInterval(() => {
    setActiveTab(localStorage.getItem('activeTab'))
  }, 500)

  useEffect(() => {
    setData(localStorage[activeTab!])
  }, [activeTab])

  return (
    <div className='flex flex-row justify-between'>
      <Leftbar />
      <textarea
        onChange={e => setData(e.target.value)}
        className='w-full h-screen resize-none outline-none justify-start text-left items-start p-16 text-white bg-darkSecondary'
        value={data!}
        autoCorrect='false'
      />
      <button
        onClick={() => {
          localStorage[activeTab!] = data!
        }}
        className='absolute bottom-[50px] right-[50px] bg-primary px-4 py-2 rounded-lg text-white z-10 hover:bg-primary/70 transition-colors'
      >
        Save
      </button>
    </div>
  )
}

export default App
