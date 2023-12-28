import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    syllabus: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const router = useRouter()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add logic for form submission (e.g., API call)
    localStorage.setItem('user', formData.firstName)
    router.push('/', { scroll: false })
  }

  useEffect(() => {
    const init = async () => {
      const { Select, initTE } = await import('tw-elements')
      initTE({ Select })
    }
    init()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-6'>Registration Form</h2>

      <div className='mb-4'>
        <label htmlFor='firstName' className='block text-gray-700'>
          First Name
        </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          className='w-full mt-1 p-2 border rounded-md'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='lastName' className='block text-gray-700'>
          Last Name
        </label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          className='w-full mt-1 p-2 border rounded-md'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full mt-1 p-2 border rounded-md'
          required
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='password' className='block text-gray-700'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className='w-full mt-1 p-2 border rounded-md'
          required
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='dob' className='block text-gray-700'>
          Date of Birth
        </label>
        <input
          type='date'
          id='dob'
          name='dob'
          value={formData.dob}
          onChange={handleChange}
          className='w-full mt-1 p-2 border rounded-md'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='syllabus' className='block text-gray-700'>
          Syllabus
        </label>
        <select
          id='syllabus'
          name='syllabus'
          value={formData.syllabus}
          onChange={handleChange}
          className='w-full mt-1 p-2 border rounded-md'
          required
        >
          <option value='CBSE'>CBSE</option>
          <option value='NCRT'>NCRT</option>
        </select>
      </div>

      <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md'>
        Register
      </button>
    </form>
  )
}

export default SignUp
