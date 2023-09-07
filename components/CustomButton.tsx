
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'


const CustomButton = ({title, handleClick,containerStyles, btnType, textStyles, rightIcon, isDisabled} : CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type = {btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
            <div className='relative w-6 h-6'>
                <Image 
                src={rightIcon}
                alt='right-icon'
                fill
                className='obtect-contain'
                />
            </div>
        )}
    </button>
    )
}

export default CustomButton