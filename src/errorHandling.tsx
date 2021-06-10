import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const errToast = () => toast.error("Sorry! Something went wrong!",
{
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 3000
})
