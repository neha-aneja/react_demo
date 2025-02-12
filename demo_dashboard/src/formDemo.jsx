import React from 'react';
import { useForm } from 'react-hook-form';

const FormDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-6 shadow-md rounded-lg w-96'
      >
        <h2 className='text-xl font-bold mb-4'>React Hook Form</h2>

        <label className='block mb-2'>Name</label>
        <input
          type='text'
          {...register('name', { required: 'Name is required' })}
          className='w-full border p-2 rounded'
        />
        {errors.name && (
          <p className='text-red-500 text-sm'>{errors.name.message}</p>
        )}

        <label className='block mt-4 mb-2'>Email</label>
        <input
          type='email'
          {...register('email', { required: 'Email is required' })}
          className='w-full border p-2 rounded'
        />
        {errors.email && (
          <p className='text-red-500 text-sm'>{errors.email.message}</p>
        )}

        <label className='block mt-4 mb-2'>Password</label>
        <input
          type='password'
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Min 6 characters' },
          })}
          className='w-full border p-2 rounded'
        />
        {errors.password && (
          <p className='text-red-500 text-sm'>{errors.password.message}</p>
        )}

        <button
          type='submit'
          className='mt-4 bg-blue-500 text-white w-full p-2 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormDemo;
