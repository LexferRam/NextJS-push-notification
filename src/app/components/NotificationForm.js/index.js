import { Button, Paper, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const NotificationForm = () => {

    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = async (data) => {

        const respAccessToken = await axios(`http://localhost:3000/api`)
        console.log(respAccessToken.data.token)

        console.log(data)
        const resp = await axios.post('https://fcm.googleapis.com/v1/projects/nextjs-push-notification-d6b24/messages:send', {
            message: {
                token: data.token,
                notification: {
                    title: data.titulo,
                    body: data.cuerpo
                }
            }
        },{
            headers: {
                'Authorization': `Bearer ${respAccessToken.data.token}`
            }
        })

        if (resp.ok) {
            console.log('successfull notified!')
        }
    }

    return (
        <Paper className="p-6 mt-7" elevation={12}>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                <TextField label="Token dispositivo" variant="outlined" {...register("token")} />

                <TextField label="Título notificación" variant="outlined" {...register("titulo")} />

                <TextField label="Cuerpo mensaje notificación" variant="outlined" {...register("cuerpo")} />

                <Button
                    style={{ textTransform: 'capitalize' }}
                    variant="outlined"
                    type="submit"
                >
                    Enviar notificación
                </Button>

            </form>
        </Paper>
    )
}

export default NotificationForm