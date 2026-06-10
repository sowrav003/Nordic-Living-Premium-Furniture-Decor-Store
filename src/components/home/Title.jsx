import React from 'react'

const Title = ({ title, subTitle, align, text, paraText, font }) => {
  return (
    <div className={`flex flex-col items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
        <h1 className={`text-4xl ${text || "text-gray-800"} md:text-[40px] ${font || "font-playfair"}`}>{title}</h1>
        <p className={`text-sm md:text-base ${paraText || "text-gray-500"}  mt-2 max-w-120`}>{subTitle}</p>
    </div>
  )
}

export default Title