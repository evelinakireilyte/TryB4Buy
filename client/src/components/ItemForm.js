import React from 'react'
import FormInput from './FormInput.js'
import { ImageUploadField } from './ImageUploadField.js'

const ItemForm = ({ formInputProps, setData, data }) => {
  const handleImageUrl = (url) => {
    setData({ ...data, image: url })
  }

  return (
    <>
      <FormInput
        name="Title"
        type="text"
        id="title"
        {...formInputProps}
      />
      <FormInput
        name="Brand"
        type="text"
        id="make"
        {...formInputProps}
      />
      <FormInput
        name="Description"
        type="text"
        id="description"
        {...formInputProps}
      />
      <FormInput
        name="Retail Price"
        type="number"
        id="retail_price"
       
        {...formInputProps}
      />
      <FormInput
        name="'Try it' Charge / £"
        type="number"
        id="try_it_charge"
  
        {...formInputProps}
      />
      <FormInput
        name="Location"
        type="text"
        id="location"
        {...formInputProps}
      />
      <ImageUploadField
        id="image"
        name="Image"
        value={data.image}
        handleImageUrl={handleImageUrl}
        {...formInputProps}
      />
    </>
  )
}

export default ItemForm
