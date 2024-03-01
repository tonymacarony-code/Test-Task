import { IUser } from '@/app/(redux)/api'
import { Card, CardContent, Typography, CardActions, Button, Link, Tooltip } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'

interface ICardProps {
    user: IUser
}



const CardItem: FC<ICardProps> = ({ user }) => {
    return (
        <Card elevation={0} sx={{ borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <CardContent sx={{ padding: 0, ":last-child": { pb: 0 } }}>
                <Image width={70} height={70} src={user.photo} style={{ borderRadius: '50%' }} alt='avatar' />
                <Typography mt={5} variant="body1" color="initial">{user.name}</Typography>
                <Typography mt={5} variant="body1" color="initial">{user.position}</Typography>

                <Tooltip title={user.email} placement="bottom-end">
                    <Link component={'a'} color={'inherit'} href={`mailto::${user.email}`}>{user.email}</Link>
                </Tooltip>

                <Typography variant="body1" color="initial">{user.phone}</Typography>
            </CardContent>
        </Card >
    )
}

export default CardItem