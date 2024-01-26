'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { useState, useEffect } from 'react'

async function getData() {
  const res = await fetch('https://0k6v2i.buildship.run/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

function speak(text: string) {
  let utterance = new SpeechSynthesisUtterance(text)
  let voicesArray = speechSynthesis.getVoices()
  utterance.voice = voicesArray[2]
  speechSynthesis.speak(utterance)
}

function stop() {
  speechSynthesis.cancel()
}

function pause() {
  speechSynthesis.pause()
}

function resume() {
  speechSynthesis.resume()
}

const Page = () => {
  async function doAISearch() {
    const data = await getData()
    console.log(data)
    const responeText = data.candidates[0].content
    setResponeText(responeText)
    speak(responeText)
  }
  const [responeText, setResponeText] = useState()
  return (
    <div className='container mx-auto h-[70vh]'>
      <div className='flex items-center my-4'>
        <textarea
          className='border rounded-md p-2 mr-2 h-100 w-full transition-all duration-200 ease-linear focus:placeholder:border-0'
          id='ai-search'
          rows={1}
          placeholder='Ask anything...'
        ></textarea>
        <button type='button' className='bg-blue-500 text-white p-2 rounded-md' onClick={doAISearch}>
          Search
        </button>
        {/* <label
          htmlFor='exampleFormControlTextarea1'
          className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
        >
          Example textarea
        </label> */}
      </div>
      <div className='ai-response-container flex'>
        {responeText ? (
          <>
            <div className='flex flex-col'>
              <div className='w-full mb-3'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(responeText)
                      .callFunction(() => {
                        console.log('String typed out!')
                      })
                      .start()
                  }}
                />
              </div>
              <div className='flex items-center align-middle gap-4'>
                <button type='button' className='bg-blue-500 text-white p-2 rounded-md' onClick={pause}>
                  Pause
                </button>
                <button type='button' className='bg-blue-500 text-white p-2 rounded-md' onClick={resume}>
                  Resume
                </button>
                <button type='button' className='bg-blue-500 text-white p-2 rounded-md' onClick={stop}>
                  Stop
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Page
