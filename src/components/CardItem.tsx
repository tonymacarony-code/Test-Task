
import { IUser } from '@/types/types'
import { Card, Typography, Link, Tooltip } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'

interface ICardProps {
    user: IUser
}

const CardItem: FC<ICardProps> = ({ user }) => {
    return (
        <Card elevation={0} sx={{ borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <Image width={70} height={70} src={user.photo} style={{ borderRadius: '50%' }} alt='avatar' />
            <Typography mt={5} variant="body1" color="initial">{user.name}</Typography>
            <Typography mt={5} variant="body1" color="initial">{user.position}</Typography>
            <Tooltip title={user.email} placement="bottom-end">
                <Link
                    component={'a'}
                    color={'inherit'}
                    href={`mailto::${user.email}`}
                    sx={{ display: 'block', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                    {user.email}
                </Link>
            </Tooltip>

            <Typography variant="body1" color="initial">{user.phone}</Typography>
        </Card>
    )
}

export default CardItem
