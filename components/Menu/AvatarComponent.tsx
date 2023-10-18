"use client"
import React from 'react'
import Avatar from 'react-avatar'

interface AvatarComponentProps {
        name: string
        size: number
}

function AvatarComponent({ name , size}: AvatarComponentProps) {
    return (
        <Avatar round name={name} size={`${size}`}/>
    )
}

export default AvatarComponent